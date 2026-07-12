import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { Pool } from 'pg';
import { sendWelcomeEmail } from '@/lib/emails/welcome';
import { sendActivateProEmail } from '@/lib/emails/activate';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const PLAN_QUOTAS: Record<string, number | null> = {
  weekly: 50000,
  monthly: 300000,
  annual: null,
};

// LemonSqueezy sends variant_name = "Default" for single-variant products, so
// the name can't tell our three plans apart. Map on the stable numeric
// variant_id instead — this is the single source of truth for plan tier.
const VARIANT_PLANS: Record<string, string> = {
  '1093614': 'weekly',
  '1713010': 'monthly',
  '1713012': 'annual',
};

// Fail safe to the most restrictive plan: an unrecognized variant should
// under-grant (weekly / 50k words), never silently hand out unlimited.
const FALLBACK_PLAN = 'weekly';

function verifySignature(rawBody: string, signature: string | null): boolean {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret || !signature) return false;
  const expected = Buffer.from(
    crypto.createHmac('sha256', secret).update(rawBody).digest('hex'),
  );
  const received = Buffer.from(signature);
  // timingSafeEqual throws if lengths differ, so guard first (a length
  // mismatch is itself a failed signature — return false, don't crash).
  if (expected.length !== received.length) return false;
  return crypto.timingSafeEqual(expected, received);
}

// Best-effort name parser, used only as a last resort if a variant_id arrives
// that isn't in VARIANT_PLANS. Falls back to the most restrictive plan.
function extractPlanFromName(variantName: string): string {
  const name = variantName.toLowerCase();
  if (name.includes('annual') || name.includes('year')) return 'annual';
  if (name.includes('month')) return 'monthly';
  if (name.includes('week')) return 'weekly';
  return FALLBACK_PLAN;
}

// Resolve the plan tier, preferring the exact variant_id map and only falling
// back to the name (then to weekly) when the id is unknown.
function resolvePlan(variantId: string, variantName: string): string {
  if (VARIANT_PLANS[variantId]) return VARIANT_PLANS[variantId];
  console.warn(
    `[webhook] Unrecognized variant_id "${variantId}" (name="${variantName}") — falling back to name/${FALLBACK_PLAN}`,
  );
  return extractPlanFromName(variantName);
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-signature');

  if (!verifySignature(rawBody, signature)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  let event: any;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const eventName = event.meta?.event_name;
  const attrs = event.data?.attributes ?? {};
  const customerEmail = attrs.user_email;
  const customerName = attrs.user_name ?? '';
  const subscriptionId = String(event.data?.id ?? '');
  const customerId = String(attrs.customer_id ?? '');
  const variantName = attrs.variant_name ?? '';
  const variantId = String(attrs.variant_id ?? '');
  const plan = resolvePlan(variantId, variantName);
  // Only 'annual' is intentionally unlimited (null). For any other plan, a
  // missing quota means a config gap — fail safe to the weekly quota rather
  // than granting unlimited words.
  const wordsLimit =
    plan in PLAN_QUOTAS ? PLAN_QUOTAS[plan] : PLAN_QUOTAS[FALLBACK_PLAN];
  const endsAt = attrs.ends_at ?? attrs.renews_at ?? null;

  console.log(`[webhook] ${eventName} for ${customerEmail ?? 'unknown'} (plan: ${plan})`);

  if (!customerEmail) {
    return NextResponse.json({ error: 'No customer email' }, { status: 400 });
  }

  const userResult = await pool.query(
    'SELECT id FROM public."user" WHERE LOWER(email) = LOWER($1) LIMIT 1',
    [customerEmail],
  );

  if (userResult.rows.length === 0) {
    // Checkout can complete before the account exists (guest checkout, or the
    // webhook racing signup). Never discard a paid entitlement: park it by
    // email and let getUserPlan() claim it on the user's first status check.
    const revokeEvents = new Set([
      'subscription_expired',
      'subscription_paused',
      'subscription_payment_refunded',
    ]);
    const isPro = !revokeEvents.has(eventName);
    // (xmax = 0) is true only when the upsert inserted a new row — i.e. the
    // first time we park this email. Used to send the activation email once,
    // not on every subsequent renewal webhook.
    const parkResult = await pool.query(
      `INSERT INTO public.pending_subscriptions
         (email, is_pro, plan, lemon_squeezy_subscription_id, lemon_squeezy_customer_id, lemon_squeezy_variant_id, pro_expires_at, words_limit, updated_at)
       VALUES (LOWER($1), $2, $3, $4, $5, $6, $7, $8, now())
       ON CONFLICT (email) DO UPDATE SET
         is_pro = $2,
         plan = $3,
         lemon_squeezy_subscription_id = $4,
         lemon_squeezy_customer_id = $5,
         lemon_squeezy_variant_id = $6,
         pro_expires_at = $7,
         words_limit = $8,
         updated_at = now()
       RETURNING (xmax = 0) AS inserted`,
      [customerEmail, isPro, plan, subscriptionId, customerId, variantId, endsAt, wordsLimit],
    );
    console.warn(
      `[webhook] No user yet for ${customerEmail} (${eventName}) — entitlement parked for reconcile on first login`,
    );
    // Tell the buyer to create their account so the paid plan activates.
    if (isPro && parkResult.rows[0]?.inserted) {
      await sendActivateProEmail(customerEmail, plan);
    }
    return NextResponse.json({ ok: true, parked: true });
  }

  const userId = userResult.rows[0].id;

  const upsertPro = async (isPro: boolean) => {
    await pool.query(
      `INSERT INTO public.user_subscriptions (user_id, is_pro, plan, lemon_squeezy_subscription_id, lemon_squeezy_customer_id, lemon_squeezy_variant_id, pro_expires_at, words_used, words_limit, billing_period_start)
       VALUES ($1, $2, $3, $4, $5, $6, $7, 0, $8, now())
       ON CONFLICT (user_id) DO UPDATE SET
         is_pro = $2,
         plan = $3,
         lemon_squeezy_subscription_id = $4,
         lemon_squeezy_customer_id = $5,
         lemon_squeezy_variant_id = $6,
         pro_expires_at = $7,
         words_used = 0,
         words_limit = $8,
         billing_period_start = now(),
         updated_at = now()`,
      [userId, isPro, plan, subscriptionId, customerId, variantId, endsAt, wordsLimit],
    );
  };

  const updatePro = async (fields: string, values: any[]) => {
    await pool.query(
      `UPDATE public.user_subscriptions SET ${fields}, updated_at = now() WHERE user_id = $${values.length + 1}`,
      [...values, userId],
    );
  };

  switch (eventName) {
    // User just subscribed — activate Pro, reset quota, welcome them
    case 'subscription_created':
      await upsertPro(true);
      await sendWelcomeEmail(customerEmail, customerName, plan);
      break;

    // Subscription details changed (plan upgrade/downgrade, billing date change)
    case 'subscription_updated':
      await updatePro('plan = $1, pro_expires_at = $2, words_limit = $3', [plan, endsAt, wordsLimit]);
      break;

    // User explicitly changed plan tier
    case 'subscription_plan_changed':
      await updatePro('plan = $1, words_limit = $2, words_used = 0, billing_period_start = now()', [plan, wordsLimit]);
      break;

    // User cancelled — keep access until period ends but mark for expiry
    case 'subscription_cancelled':
      await updatePro('pro_expires_at = $1', [endsAt]);
      break;

    // Subscription reached end of cancelled period — revoke access
    case 'subscription_expired':
      await updatePro('is_pro = $1', [false]);
      break;

    // User paused their subscription — suspend Pro access
    case 'subscription_paused':
      await updatePro('is_pro = $1', [false]);
      break;

    // User unpaused — restore Pro access, welcome them back
    case 'subscription_unpaused':
      await upsertPro(true);
      await sendWelcomeEmail(customerEmail, customerName, plan);
      break;

    // User resumed a cancelled subscription before it expired — welcome them back
    case 'subscription_resumed':
      await upsertPro(true);
      await sendWelcomeEmail(customerEmail, customerName, plan);
      break;

    // Recurring payment succeeded — reset word quota for new billing period
    case 'subscription_payment_success':
      await updatePro('words_used = $1, billing_period_start = now()', [0]);
      break;

    // Payment failed — flag but don't immediately revoke (LS retries automatically)
    case 'subscription_payment_failed':
      console.warn(`[webhook] Payment failed for ${customerEmail} — LemonSqueezy will retry`);
      break;

    // Payment recovered after a failure — ensure Pro is active
    case 'subscription_payment_recovered':
      await updatePro('is_pro = $1, words_used = 0, billing_period_start = now()', [true]);
      break;

    // Payment refunded — revoke Pro access
    case 'subscription_payment_refunded':
      await updatePro('is_pro = $1', [false]);
      break;

    default:
      console.log(`[webhook] Unhandled event: ${eventName}`);
  }

  return NextResponse.json({ ok: true });
}

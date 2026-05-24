import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const PLAN_QUOTAS: Record<string, number | null> = {
  weekly: 50000,
  monthly: 300000,
  annual: null,
};

function verifySignature(rawBody: string, signature: string | null): boolean {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret || !signature) return false;
  const hmac = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(signature));
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-signature');

  if (!verifySignature(rawBody, signature)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  const event = JSON.parse(rawBody);
  const eventName = event.meta?.event_name;
  const customerEmail = event.data?.attributes?.user_email;
  const subscriptionId = String(event.data?.id ?? '');
  const customerId = String(event.data?.attributes?.customer_id ?? '');
  const variantName = (event.data?.attributes?.variant_name ?? '').toLowerCase();

  if (!customerEmail) {
    return NextResponse.json({ error: 'No customer email' }, { status: 400 });
  }

  const userResult = await pool.query(
    'SELECT id FROM public."user" WHERE LOWER(email) = LOWER($1) LIMIT 1',
    [customerEmail],
  );

  if (userResult.rows.length === 0) {
    console.error(`[webhook] No user found for email: ${customerEmail}`);
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const userId = userResult.rows[0].id;
  const plan = variantName.includes('annual') ? 'annual'
    : variantName.includes('month') ? 'monthly'
    : variantName.includes('week') ? 'weekly'
    : variantName;

  const wordsLimit = PLAN_QUOTAS[plan] ?? null;

  if (eventName === 'subscription_created' || eventName === 'subscription_resumed') {
    const endsAt = event.data?.attributes?.ends_at ?? event.data?.attributes?.renews_at;

    await pool.query(
      `INSERT INTO public.user_subscriptions (user_id, is_pro, plan, lemon_squeezy_subscription_id, lemon_squeezy_customer_id, pro_expires_at, words_used, words_limit, billing_period_start)
       VALUES ($1, true, $2, $3, $4, $5, 0, $6, now())
       ON CONFLICT (user_id) DO UPDATE SET
         is_pro = true,
         plan = $2,
         lemon_squeezy_subscription_id = $3,
         lemon_squeezy_customer_id = $4,
         pro_expires_at = $5,
         words_used = 0,
         words_limit = $6,
         billing_period_start = now(),
         updated_at = now()`,
      [userId, plan, subscriptionId, customerId, endsAt, wordsLimit],
    );
  } else if (eventName === 'subscription_updated') {
    const endsAt = event.data?.attributes?.ends_at ?? event.data?.attributes?.renews_at;

    await pool.query(
      `UPDATE public.user_subscriptions
       SET plan = $1, pro_expires_at = $2, words_limit = $3, updated_at = now()
       WHERE user_id = $4`,
      [plan, endsAt, wordsLimit, userId],
    );
  } else if (eventName === 'subscription_cancelled' || eventName === 'subscription_expired') {
    await pool.query(
      `UPDATE public.user_subscriptions
       SET is_pro = false, updated_at = now()
       WHERE user_id = $1`,
      [userId],
    );
  } else if (eventName === 'subscription_payment_success') {
    await pool.query(
      `UPDATE public.user_subscriptions
       SET words_used = 0, billing_period_start = now(), updated_at = now()
       WHERE user_id = $1`,
      [userId],
    );
  }

  return NextResponse.json({ ok: true });
}

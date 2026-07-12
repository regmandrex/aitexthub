import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export type UserPlan = {
  isPro: boolean;
  plan: string | null;
  wordsUsed: number;
  wordsLimit: number | null;
  expiresAt: Date | null;
};

export async function getUserPlan(userId: string): Promise<UserPlan> {
  const result = await pool.query(
    `SELECT is_pro, plan, words_used, words_limit, pro_expires_at
     FROM public.user_subscriptions
     WHERE user_id = $1
     LIMIT 1`,
    [userId],
  );

  if (result.rows.length === 0) {
    // No subscription row — check for an entitlement parked by the
    // LemonSqueezy webhook when payment arrived before this account existed.
    const claimed = await claimPendingSubscription(userId);
    if (claimed) return claimed;
    return { isPro: false, plan: null, wordsUsed: 0, wordsLimit: null, expiresAt: null };
  }

  const row = result.rows[0];
  const now = new Date();
  const expired = row.pro_expires_at && new Date(row.pro_expires_at) < now;

  return {
    isPro: row.is_pro && !expired,
    plan: row.plan,
    wordsUsed: row.words_used ?? 0,
    wordsLimit: row.words_limit,
    expiresAt: row.pro_expires_at ? new Date(row.pro_expires_at) : null,
  };
}

// Claim an entitlement parked by the webhook (payment completed before the
// user account existed). Moves it from pending_subscriptions into
// user_subscriptions, then re-reads through the normal path so expiry logic
// applies. Returns null when nothing is parked for this user's email.
async function claimPendingSubscription(userId: string): Promise<UserPlan | null> {
  const { rows } = await pool.query(
    `SELECT p.email, p.is_pro, p.plan, p.lemon_squeezy_subscription_id,
            p.lemon_squeezy_customer_id, p.lemon_squeezy_variant_id,
            p.pro_expires_at, p.words_limit
     FROM public.pending_subscriptions p
     JOIN public."user" u ON LOWER(u.email) = p.email
     WHERE u.id = $1
     LIMIT 1`,
    [userId],
  );
  if (rows.length === 0) return null;

  const p = rows[0];
  await pool.query(
    `INSERT INTO public.user_subscriptions
       (user_id, is_pro, plan, lemon_squeezy_subscription_id, lemon_squeezy_customer_id, lemon_squeezy_variant_id, pro_expires_at, words_used, words_limit, billing_period_start)
     VALUES ($1, $2, $3, $4, $5, $6, $7, 0, $8, now())
     ON CONFLICT (user_id) DO NOTHING`,
    [
      userId,
      p.is_pro,
      p.plan,
      p.lemon_squeezy_subscription_id,
      p.lemon_squeezy_customer_id,
      p.lemon_squeezy_variant_id,
      p.pro_expires_at,
      p.words_limit,
    ],
  );
  await pool.query(`DELETE FROM public.pending_subscriptions WHERE email = $1`, [p.email]);
  console.log(`[subscription] Claimed parked entitlement for user ${userId} (${p.plan})`);

  // Row now exists either way (insert or concurrent write) — recursion terminates.
  return getUserPlan(userId);
}

export async function incrementWordsUsed(userId: string, words: number): Promise<{ allowed: boolean; wordsUsed: number; wordsLimit: number | null }> {
  const plan = await getUserPlan(userId);

  if (!plan.isPro) {
    return { allowed: false, wordsUsed: plan.wordsUsed, wordsLimit: plan.wordsLimit };
  }

  if (plan.wordsLimit !== null && plan.wordsUsed + words > plan.wordsLimit) {
    return { allowed: false, wordsUsed: plan.wordsUsed, wordsLimit: plan.wordsLimit };
  }

  await pool.query(
    `UPDATE public.user_subscriptions
     SET words_used = words_used + $1, updated_at = now()
     WHERE user_id = $2`,
    [words, userId],
  );

  return {
    allowed: true,
    wordsUsed: plan.wordsUsed + words,
    wordsLimit: plan.wordsLimit,
  };
}

export async function resetWordsUsed(userId: string): Promise<void> {
  await pool.query(
    `UPDATE public.user_subscriptions
     SET words_used = 0, billing_period_start = now(), updated_at = now()
     WHERE user_id = $1`,
    [userId],
  );
}

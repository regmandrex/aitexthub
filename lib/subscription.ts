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

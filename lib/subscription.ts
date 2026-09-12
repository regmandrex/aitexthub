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

export type VideoQuota = {
  isPro: boolean;
  videosUsed: number;
  videosLimit: number | null;
};

/** Current video-inpaint usage for a user (no reservation). */
export async function getVideoQuota(userId: string): Promise<VideoQuota> {
  const plan = await getUserPlan(userId);
  const result = await pool.query(
    `SELECT videos_used, videos_limit FROM public.user_subscriptions WHERE user_id = $1 LIMIT 1`,
    [userId],
  );
  const row = result.rows[0];
  return {
    isPro: plan.isPro,
    videosUsed: row?.videos_used ?? 0,
    videosLimit: row?.videos_limit ?? null,
  };
}

/**
 * Atomically reserve one video-inpaint job: increments videos_used only if the
 * user is Pro and under their limit. Returns whether the reservation succeeded.
 * Doing the check + increment in a single UPDATE prevents two concurrent jobs
 * from both passing a stale limit check. Call releaseVideo() to refund on failure.
 */
export async function reserveVideo(
  userId: string,
): Promise<{ allowed: boolean; videosUsed: number; videosLimit: number | null }> {
  const plan = await getUserPlan(userId);
  if (!plan.isPro) {
    return { allowed: false, videosUsed: 0, videosLimit: null };
  }
  const { rows } = await pool.query(
    `UPDATE public.user_subscriptions
       SET videos_used = videos_used + 1, updated_at = now()
     WHERE user_id = $1
       AND is_pro = true
       AND (videos_limit IS NULL OR videos_used < videos_limit)
     RETURNING videos_used, videos_limit`,
    [userId],
  );
  if (rows.length === 0) {
    const q = await getVideoQuota(userId);
    return { allowed: false, videosUsed: q.videosUsed, videosLimit: q.videosLimit };
  }
  return { allowed: true, videosUsed: rows[0].videos_used, videosLimit: rows[0].videos_limit };
}

/** Refund a reserved video job (e.g. the inpaint failed before producing output). */
export async function releaseVideo(userId: string): Promise<void> {
  await pool.query(
    `UPDATE public.user_subscriptions
       SET videos_used = GREATEST(0, videos_used - 1), updated_at = now()
     WHERE user_id = $1`,
    [userId],
  );
}

/** Atomically reserve one AI image inpaint job (Pro + under limit). Mirrors reserveVideo. */
export async function reserveImage(
  userId: string,
): Promise<{ allowed: boolean; imagesUsed: number; imagesLimit: number | null }> {
  const plan = await getUserPlan(userId);
  if (!plan.isPro) {
    return { allowed: false, imagesUsed: 0, imagesLimit: null };
  }
  const { rows } = await pool.query(
    `UPDATE public.user_subscriptions
       SET images_used = images_used + 1, updated_at = now()
     WHERE user_id = $1
       AND is_pro = true
       AND (images_limit IS NULL OR images_used < images_limit)
     RETURNING images_used, images_limit`,
    [userId],
  );
  if (rows.length === 0) {
    const q = await pool.query(
      `SELECT images_used, images_limit FROM public.user_subscriptions WHERE user_id = $1 LIMIT 1`,
      [userId],
    );
    return {
      allowed: false,
      imagesUsed: q.rows[0]?.images_used ?? 0,
      imagesLimit: q.rows[0]?.images_limit ?? null,
    };
  }
  return { allowed: true, imagesUsed: rows[0].images_used, imagesLimit: rows[0].images_limit };
}

/** Refund a reserved image job. */
export async function releaseImage(userId: string): Promise<void> {
  await pool.query(
    `UPDATE public.user_subscriptions
       SET images_used = GREATEST(0, images_used - 1), updated_at = now()
     WHERE user_id = $1`,
    [userId],
  );
}

export async function resetWordsUsed(userId: string): Promise<void> {
  await pool.query(
    `UPDATE public.user_subscriptions
     SET words_used = 0, billing_period_start = now(), updated_at = now()
     WHERE user_id = $1`,
    [userId],
  );
}

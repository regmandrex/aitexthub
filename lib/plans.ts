// Single source of truth for plan tiers, word quotas, and video-inpaint
// quotas. Imported by the webhook (granting), subscription helpers (reads),
// and the inpaint routes (video metering). Keep all plan limits here.

export type PlanId = 'weekly' | 'monthly' | 'annual';

export type PlanConfig = {
  /** null = unlimited */
  wordsLimit: number | null;
  /** per-billing-period video inpaint jobs; null = unlimited (fair-use) */
  videosLimit: number | null;
  /** per-billing-period AI image inpaint jobs; null = unlimited. Images are
   *  ~10-100x cheaper than video, so limits are much higher. */
  imagesLimit: number | null;
};

export const PLANS: Record<PlanId, PlanConfig> = {
  weekly: { wordsLimit: 50000, videosLimit: 4, imagesLimit: 50 },
  monthly: { wordsLimit: 300000, videosLimit: 15, imagesLimit: 300 },
  annual: { wordsLimit: null, videosLimit: 95, imagesLimit: null },
};

// Fail safe to the most restrictive plan for an unrecognized tier — never
// silently hand out unlimited.
export const FALLBACK_PLAN: PlanId = 'weekly';

export function planWordsLimit(plan: string): number | null {
  return (PLANS as Record<string, PlanConfig>)[plan]?.wordsLimit ?? PLANS[FALLBACK_PLAN].wordsLimit;
}

export function planVideosLimit(plan: string): number | null {
  return (PLANS as Record<string, PlanConfig>)[plan]?.videosLimit ?? PLANS[FALLBACK_PLAN].videosLimit;
}

export function planImagesLimit(plan: string): number | null {
  return (PLANS as Record<string, PlanConfig>)[plan]?.imagesLimit ?? PLANS[FALLBACK_PLAN].imagesLimit;
}

// Abuse caps for the video inpaint pipeline — enforced regardless of plan so a
// single job can't run up a large GPU bill.
export const INPAINT_MAX_DURATION_SEC = 60;
export const INPAINT_MAX_DIMENSION = 1920; // longest side, px
export const INPAINT_MAX_BYTES = 100 * 1024 * 1024; // 100 MB video upload ceiling
export const INPAINT_IMAGE_MAX_BYTES = 25 * 1024 * 1024; // 25 MB image ceiling

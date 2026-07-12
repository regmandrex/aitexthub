// LemonSqueezy hosted-checkout URL helpers.

/**
 * Prefill the checkout email so the LS order email always matches the
 * signed-in account — this is what lets the subscription webhook find the
 * user and grant Pro instantly (see /api/webhooks/lemonsqueezy).
 */
export function withCheckoutEmail(checkoutUrl: string, email?: string | null): string {
  if (!email) return checkoutUrl;
  const sep = checkoutUrl.includes('?') ? '&' : '?';
  return `${checkoutUrl}${sep}checkout[email]=${encodeURIComponent(email)}`;
}

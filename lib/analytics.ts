// Lightweight funnel-event tracking. Fires to both Google Analytics (gtag) and
// Plausible if present. Safe to call anywhere on the client — no-ops on the
// server or if neither analytics script has loaded.
//
// Funnel for measuring subscription conversion (e.g. before/after removing the
// anchor ad that was covering the header CTA):
//   cta_clicked  ->  pricing_viewed  ->  checkout_started  ->  (purchase via webhook)
type FunnelEvent = 'cta_clicked' | 'pricing_viewed' | 'checkout_started';

type EventProps = Record<string, string | number | boolean | undefined>;

export function trackEvent(event: FunnelEvent, props: EventProps = {}): void {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    try {
      gtag('event', event, props);
    } catch {
      // ignore — analytics must never break the UI
    }
  }

  // Plausible (custom events). Props go under `props` per Plausible's API.
  const plausible = (window as unknown as { plausible?: (name: string, opts?: { props?: EventProps }) => void }).plausible;
  if (typeof plausible === 'function') {
    try {
      plausible(event, Object.keys(props).length ? { props } : undefined);
    } catch {
      // ignore
    }
  }
}

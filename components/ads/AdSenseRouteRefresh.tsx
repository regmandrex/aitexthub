'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function waitForAdsByGoogleReady(maxMs = 8000) {
  return new Promise<void>((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('no-window'));
    const started = Date.now();
    const tick = () => {
      const win = window as Window & { adsbygoogle?: unknown };
      if (win.adsbygoogle) return resolve();
      if (Date.now() - started >= maxMs) return reject(new Error('adsbygoogle-timeout'));
      setTimeout(tick, 150);
    };
    tick();
  });
}

/**
 * AdSense (and especially Auto Ads / anchor ads) doesn't automatically "refresh" on SPA navigation.
 * This triggers a lightweight re-evaluation after route changes.
 */
export default function AdSenseRouteRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    // Let the new route paint first (and let slots mount) before requesting ads.
    // Two attempts: 800ms for normal load, 1800ms as fallback for slow AdSense init.
    const push = async () => {
      try {
        await waitForAdsByGoogleReady();
        if (cancelled) return;
        const win = window as Window & { adsbygoogle?: Array<unknown> };
        (win.adsbygoogle = win.adsbygoogle || []).push({});
      } catch {
        // ignore
      }
    };

    const t1 = setTimeout(push, 800);
    const t2 = setTimeout(push, 1800);

    return () => {
      cancelled = true;
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}


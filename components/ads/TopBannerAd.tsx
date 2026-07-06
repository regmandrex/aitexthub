'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const AD_CLIENT = 'ca-pub-8764610479002120';
// Top leaderboard banner slot — reuses the existing responsive display unit.
// Optional: swap in a dedicated "Top Banner" unit's ID for separate reporting.
const TOP_BANNER_SLOT = '3825906278';

function resetAdSenseElement(element: HTMLElement) {
  element.removeAttribute('data-adsbygoogle-status');
  element.removeAttribute('data-ad-status');
  element.removeAttribute('data-adtest');
  element.innerHTML = '';
}

export default function TopBannerAd() {
  const pathname = usePathname();
  const slotRef = useRef<HTMLModElement | null>(null);
  const hasPushedRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const element = slotRef.current;
    if (!element) return;

    const markReady = () => {
      if (!element.isConnected || element.offsetWidth === 0) return false;
      setIsReady(true);
      return true;
    };

    if (markReady()) return;

    const observer = new ResizeObserver(() => {
      if (markReady()) observer.disconnect();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Reset so AdSense can re-fill after client-side route changes.
  useEffect(() => {
    hasPushedRef.current = false;
    const element = slotRef.current;
    if (element) resetAdSenseElement(element);
  }, [pathname]);

  useEffect(() => {
    const element = slotRef.current;
    if (!element || !isReady || hasPushedRef.current) return;

    try {
      resetAdSenseElement(element);
      const win = window as Window & { adsbygoogle?: Array<unknown> };
      (win.adsbygoogle = win.adsbygoogle || []).push({});
      hasPushedRef.current = true;
    } catch {
      // ignore
    }
  }, [isReady, pathname]);

  return (
    <div className="w-full border-b border-slate-200 bg-slate-50/60">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        {/* Reserve leaderboard height so the ad fill doesn't shift layout (CLS). */}
        <div className="flex min-h-[90px] w-full items-center justify-center py-1">
          <ins
            ref={slotRef}
            className={isReady ? 'adsbygoogle' : undefined}
            style={{ display: 'block', width: '100%' }}
            data-ad-client={AD_CLIENT}
            data-ad-slot={TOP_BANNER_SLOT}
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    </div>
  );
}

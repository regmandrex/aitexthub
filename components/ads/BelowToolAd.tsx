'use client';

import { useEffect, useRef } from 'react';

const AD_CLIENT = 'ca-pub-8764610479002120';
const BELOW_TOOL_SLOT = '5756159910';

export default function BelowToolAd() {
  const slotRef = useRef<HTMLModElement | null>(null);
  const hasPushedRef = useRef(false);

  useEffect(() => {
    const element = slotRef.current;
    if (!element) {
      return;
    }

    // Push immediately — no idle/LCP defer or poll wait, so the ad fills ASAP.
    const tryInit = () => {
      if (hasPushedRef.current) return;
      const el = slotRef.current;
      if (!el?.isConnected || el.offsetWidth === 0) return;
      try {
        const win = window as Window & { adsbygoogle?: Array<unknown> };
        (win.adsbygoogle = win.adsbygoogle || []).push({});
        hasPushedRef.current = true;
      } catch {
        // ignore
      }
    };

    tryInit();

    // If the slot has no width yet (e.g. still laying out), retry on resize.
    let observer: ResizeObserver | undefined;
    if (!hasPushedRef.current && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        tryInit();
        if (hasPushedRef.current && observer) observer.disconnect();
      });
      observer.observe(element);
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  // min-h reserves real ad height to prevent mobile CLS; push above stays immediate.
  return (
    <div className="mt-6 w-full min-h-[280px]">
      <ins
        ref={slotRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={BELOW_TOOL_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

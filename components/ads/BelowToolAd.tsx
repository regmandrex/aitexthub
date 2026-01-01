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

    const tryInit = () => {
      if (hasPushedRef.current) {
        return;
      }

      if (!element.isConnected || element.offsetWidth === 0) {
        return;
      }

      try {
        const win = window as Window & { adsbygoogle?: Array<unknown> };
        (win.adsbygoogle = win.adsbygoogle || []).push({});
        hasPushedRef.current = true;
      } catch {
      }
    };

    tryInit();

    if (typeof ResizeObserver === 'undefined') {
      const handleResize = () => tryInit();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

    const observer = new ResizeObserver(() => {
      tryInit();
      if (hasPushedRef.current) {
        observer.disconnect();
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-6 flex justify-center">
      <ins
        ref={slotRef}
        className="adsbygoogle"
        style={{ display: 'inline-block', width: 300, height: 250 }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={BELOW_TOOL_SLOT}
      />
    </div>
  );
}

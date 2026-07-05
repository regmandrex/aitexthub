'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { usePathname } from 'next/navigation';

type AdSenseSlotProps = {
  className?: string;
  style?: CSSProperties;
};

const AD_CLIENT = 'ca-pub-8764610479002120';
const AD_SLOT = '3825906278';

function resetAdSenseElement(element: HTMLElement) {
  element.removeAttribute('data-adsbygoogle-status');
  element.removeAttribute('data-ad-status');
  element.removeAttribute('data-adtest');
  element.innerHTML = '';
}

export default function AdSenseSlot({ className, style }: AdSenseSlotProps) {
  const pathname = usePathname();
  const slotRef = useRef<HTMLModElement | null>(null);
  const hasPushedRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const element = slotRef.current;
    if (!element) {
      return;
    }

    const markReady = () => {
      if (!element.isConnected || element.offsetWidth === 0) {
        return false;
      }

      setIsReady(true);
      return true;
    };

    if (markReady()) {
      return;
    }

    if (typeof ResizeObserver === 'undefined') {
      const handleResize = () => markReady();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

    const observer = new ResizeObserver(() => {
      if (markReady()) {
        observer.disconnect();
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // In Next.js App Router, some ad components can persist across navigations (layouts).
    // Reset so AdSense can re-fill after client-side route changes.
    hasPushedRef.current = false;
    const element = slotRef.current;
    if (element) resetAdSenseElement(element);
  }, [pathname]);

  useEffect(() => {
    const element = slotRef.current;
    if (!element || !isReady || hasPushedRef.current) {
      return;
    }

    // Push immediately once the slot is ready — no LCP-window defer or poll wait,
    // so ads fill as fast as possible (maximize fill/impressions).
    try {
      resetAdSenseElement(element);
      const win = window as Window & { adsbygoogle?: Array<unknown> };
      (win.adsbygoogle = win.adsbygoogle || []).push({});
      hasPushedRef.current = true;
    } catch {
      // ignore
    }
  }, [isReady, pathname]);

  const classes = [isReady ? 'adsbygoogle' : null, className].filter(Boolean).join(' ');

  return (
    <div className={className} style={style}>
      <ins
        ref={slotRef}
        className={classes}
        style={{ display: 'block', width: '100%' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

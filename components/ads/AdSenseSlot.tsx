'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

type AdSenseSlotProps = {
  className?: string;
  style?: CSSProperties;
};

const AD_CLIENT = 'ca-pub-8764610479002120';
const AD_SLOT = '3825906278';

/** Defer ad init until after LCP window so main content can win LCP. */
function afterLCPWindow(cb: () => void) {
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(cb, { timeout: 1800 });
  } else {
    setTimeout(cb, 1500);
  }
}

export default function AdSenseSlot({ className, style }: AdSenseSlotProps) {
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
    const element = slotRef.current;
    if (!element || !isReady || hasPushedRef.current) {
      return;
    }

    afterLCPWindow(() => {
      if (!slotRef.current?.isConnected || hasPushedRef.current) return;
      try {
        const win = window as Window & { adsbygoogle?: Array<unknown> };
        (win.adsbygoogle = win.adsbygoogle || []).push({});
        hasPushedRef.current = true;
      } catch {
      }
    });
  }, [isReady]);

  const classes = [isReady ? 'adsbygoogle' : null, className].filter(Boolean).join(' ');

  return (
    <div className={['min-h-[100px]', className].filter(Boolean).join(' ')} style={style}>
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

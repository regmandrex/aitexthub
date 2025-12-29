'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';

type AdSenseSlotProps = {
  className?: string;
  style?: CSSProperties;
};

const AD_CLIENT = 'ca-pub-8764610479002120';
const AD_SLOT = '3825906278';

export default function AdSenseSlot({ className, style }: AdSenseSlotProps) {
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
      } catch (error) {
        // Avoid runtime crashes from AdSense TagError when slots are invalid.
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

  const classes = ['adsbygoogle', className].filter(Boolean).join(' ');

  return (
    <ins
      ref={slotRef}
      className={classes}
      style={{ display: 'block', width: '100%', ...style }}
      data-ad-client={AD_CLIENT}
      data-ad-slot={AD_SLOT}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

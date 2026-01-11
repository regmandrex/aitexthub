'use client';

import { useEffect, useRef, useState } from 'react';

const AD_CLIENT = 'ca-pub-8764610479002120';
const DESKTOP_SLOT = '9684313551';
const MOBILE_SLOT = '3230239855';
const DESKTOP_QUERY = '(min-width: 768px)';

export default function StickyFooterAd() {
  const slotRef = useRef<HTMLModElement | null>(null);
  const hasPushedRef = useRef(false);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(media.matches);
    update();

    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    hasPushedRef.current = false;
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop === null) {
      return;
    }

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
  }, [isDesktop]);

  if (isDesktop === null) {
    return null;
  }

  const slot = isDesktop
    ? { width: 728, height: 90, slot: DESKTOP_SLOT }
    : { width: 320, height: 90, slot: MOBILE_SLOT };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1400px] justify-center px-4 py-2">
        <ins
          ref={slotRef}
          className="adsbygoogle"
          style={{ display: 'inline-block', width: slot.width, height: slot.height }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={slot.slot}
        />
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const AD_CLIENT = 'ca-pub-8764610479002120';
const DESKTOP_SLOT = '9684313551';
const MOBILE_SLOT = '3230239855';
const DESKTOP_QUERY = '(min-width: 768px)';

/** Fixed height of the sticky bar so layout is reserved from first paint and CLS is avoided. */
const BAR_HEIGHT_PX = 90;

/** Wait for AdSense script to be available then run callback (poll up to 8s). */
function waitForAdsByGoogle(cb: () => void) {
  if (typeof window === 'undefined') return;
  const win = window as Window & { adsbygoogle?: unknown };
  if (win.adsbygoogle) {
    cb();
    return;
  }
  let attempts = 0;
  const max = 53; // ~8s at 150ms
  const t = setInterval(() => {
    attempts++;
    if (win.adsbygoogle) {
      clearInterval(t);
      cb();
      return;
    }
    if (attempts >= max) clearInterval(t);
  }, 150);
}

export default function StickyFooterAd() {
  const pathname = usePathname();
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
  }, [pathname]);

  useEffect(() => {
    if (isDesktop === null) return;
    const element = slotRef.current;
    if (!element) return;

    const tryInit = () => {
      if (hasPushedRef.current) return;
      if (!element.isConnected || element.offsetWidth === 0) return;
      waitForAdsByGoogle(() => {
        if (hasPushedRef.current || !slotRef.current?.isConnected) return;
        try {
          const win = window as Window & { adsbygoogle?: Array<unknown> };
          (win.adsbygoogle = win.adsbygoogle || []).push({});
          hasPushedRef.current = true;
        } catch {
          // ignore
        }
      });
    };

    tryInit();
    if (typeof ResizeObserver === 'undefined') {
      const handleResize = () => tryInit();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    const observer = new ResizeObserver(() => {
      tryInit();
      if (hasPushedRef.current) observer.disconnect();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [isDesktop, pathname]);

  const slot = isDesktop === true
    ? { width: 728, height: BAR_HEIGHT_PX, slot: DESKTOP_SLOT }
    : { width: 320, height: BAR_HEIGHT_PX, slot: MOBILE_SLOT };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur"
      style={{ minHeight: BAR_HEIGHT_PX }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] justify-center px-4 py-2 overflow-x-hidden">
        <ins
          key={pathname ?? 'default'}
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

'use client';

import { useEffect, useRef } from 'react';

const AD_CLIENT = 'ca-pub-8764610479002120';

function hideGoogleAdSense() {
  const el = document.getElementById('GoogleAdSense');
  if (el) {
    el.style.display = 'none';
  }
}

type AdsByGoogleWindow = Window & { adsbygoogle?: unknown[] };

export default function GoogleAds() {
  const slot1Ref = useRef<HTMLModElement | null>(null);
  const slot2Ref = useRef<HTMLModElement | null>(null);
  const slot3Ref = useRef<HTMLModElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) {
      return;
    }

    let cancelled = false;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const tryInit = () => {
      if (cancelled || initializedRef.current) {
        return true;
      }

      const win = window as AdsByGoogleWindow;
      if (typeof win.adsbygoogle === 'undefined') {
        return false;
      }

      const slots = [slot1Ref.current, slot2Ref.current, slot3Ref.current];
      if (slots.some((slot) => !slot)) {
        return false;
      }

      try {
        for (const slot of slots) {
          if (!slot || slot.getAttribute('data-adsbygoogle-status')) {
            continue;
          }
          (win.adsbygoogle = win.adsbygoogle || []).push({});
        }
        initializedRef.current = true;
        return true;
      } catch {
        return false;
      }
    };

    if (tryInit()) {
      return;
    }

    intervalId = setInterval(() => {
      if (tryInit() && intervalId) {
        clearInterval(intervalId);
      }
    }, 150);

    const timeoutId = setTimeout(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }, 8000);

    return () => {
      cancelled = true;
      if (intervalId) {
        clearInterval(intervalId);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="ad-overlay" id="GoogleAdSense">
        <div style={{ width: '300px', height: 'auto', opacity: 0 }}>
          <div style={{ opacity: 0, width: '350px', height: '200px', position: 'relative' }}>
            <ins
              ref={slot1Ref}
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client={AD_CLIENT}
              data-ad-slot="3825906278"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
            <button type="button" onClick={hideGoogleAdSense} />
          </div>
        </div>
      </div>

      <div className="ad-overlay1" id="GoogleAdSense1">
        <div style={{ width: '300px', height: 'auto', opacity: 0 }}>
          <div style={{ opacity: 0, width: '350px', height: '200px', position: 'relative' }}>
            <ins
              ref={slot2Ref}
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client={AD_CLIENT}
              data-ad-slot="4534384026"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
            <button type="button" onClick={hideGoogleAdSense} />
          </div>
        </div>
      </div>

      <div className="ad-overlay2" id="GoogleAdSense2">
        <div style={{ width: '300px', height: 'auto', opacity: 100 }}>
          <div style={{ opacity: 100, width: '350px', height: '200px', position: 'relative' }}>
            <ins
              ref={slot3Ref}
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client={AD_CLIENT}
              data-ad-slot="6042906811"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
            <button type="button" onClick={hideGoogleAdSense} />
          </div>
        </div>
      </div>
    </>
  );
}

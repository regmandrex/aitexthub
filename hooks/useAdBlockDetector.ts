'use client';
import { useState, useEffect } from 'react';

export function useAdBlockDetector() {
  const [adBlocked, setAdBlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const detect = async () => {
      // Method 1: CSS bait element — fast check for uBlock, AdBlock Plus
      const bait = document.createElement('div');
      bait.className =
        'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads ad-banner';
      bait.style.cssText =
        'width:1px!important;height:1px!important;position:absolute!important;left:-9999px!important;top:-9999px!important;';
      document.body.appendChild(bait);
      await new Promise<void>((r) => setTimeout(r, 200));
      const cssBlocked =
        bait.offsetHeight === 0 ||
        bait.offsetWidth === 0 ||
        getComputedStyle(bait).display === 'none' ||
        getComputedStyle(bait).visibility === 'hidden';
      document.body.removeChild(bait);

      if (!cancelled && cssBlocked) {
        setAdBlocked(true);
        setChecking(false);
        return;
      }

      // Method 2: DOM slot check — catches Ghostery and blockers that allow the
      // AdSense init script but block actual ad content. AdSense fills each
      // ins.adsbygoogle slot with an iframe when an ad is served. If no slot
      // has an iframe after 6s, ads are being blocked.
      // Wait long enough for: defer (1.2s) + script load + slot processing.
      await new Promise<void>((r) => setTimeout(r, 6000));
      if (cancelled) return;

      const slots = document.querySelectorAll('ins[data-ad-client]');
      const anyFilled = Array.from(slots).some(
        (el) => el.querySelector('iframe') !== null
      );

      if (!cancelled) {
        setAdBlocked(!anyFilled);
        setChecking(false);
      }
    };

    detect().catch(() => {
      if (!cancelled) setChecking(false);
    });

    return () => { cancelled = true; };
  }, []);

  return { adBlocked, checking };
}

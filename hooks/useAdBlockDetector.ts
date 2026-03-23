'use client';
import { useState, useEffect } from 'react';

export function useAdBlockDetector() {
  const [adBlocked, setAdBlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const detect = async () => {
      try {
        // Method 1: Bait element — catches uBlock, AdBlock Plus (CSS-based blockers)
        const bait = document.createElement('div');
        bait.className =
          'ad-banner pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links';
        bait.style.cssText =
          'width:1px!important;height:1px!important;position:absolute!important;left:-9999px!important;top:-9999px!important;';
        document.body.appendChild(bait);

        await new Promise<void>((r) => setTimeout(r, 150));

        const cssBlocked =
          bait.offsetParent === null ||
          bait.offsetHeight === 0 ||
          bait.offsetWidth === 0 ||
          getComputedStyle(bait).display === 'none' ||
          getComputedStyle(bait).visibility === 'hidden';

        document.body.removeChild(bait);

        if (cssBlocked) {
          setAdBlocked(true);
          setChecking(false);
          return;
        }

        // Method 2: Check if AdSense actually processed any ad slots.
        // AdSense sets data-adsbygoogle-status on <ins> elements it runs on.
        // Script injects at 1200ms, slots init after LCP window (~1800ms) = wait 4.5s.
        // Ghostery allows the script to load but blocks ad serving — slots stay unprocessed.
        await new Promise<void>((r) => setTimeout(r, 4500));
        const slots = document.querySelectorAll('ins.adsbygoogle');
        const anyProcessed = Array.from(slots).some((el) =>
          el.hasAttribute('data-adsbygoogle-status')
        );
        setAdBlocked(!anyProcessed);
      } catch {
        setAdBlocked(false);
      } finally {
        setChecking(false);
      }
    };

    detect();
  }, []);

  return { adBlocked, checking };
}

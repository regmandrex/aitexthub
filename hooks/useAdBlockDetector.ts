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

        // Method 2: Wait for AdSense onload flag (set in DeferredThirdPartyScripts).
        // AdSense injects at 1200ms + ~1s to fetch = check at 3s.
        // If __adsLoaded is not set by then, the script was blocked (Ghostery etc.)
        await new Promise<void>((r) => setTimeout(r, 3000));
        const scriptBlocked = !(window as Window & { __adsLoaded?: boolean }).__adsLoaded;
        setAdBlocked(scriptBlocked);
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

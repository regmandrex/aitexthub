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
          return;
        }

        // Method 2: Network fetch — catches Ghostery and other network-level blockers
        try {
          await fetch(
            'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
            { method: 'HEAD', mode: 'no-cors', cache: 'no-store' }
          );
          setAdBlocked(false);
        } catch {
          setAdBlocked(true);
        }
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

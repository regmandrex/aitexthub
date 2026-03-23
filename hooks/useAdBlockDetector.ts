'use client';
import { useState, useEffect } from 'react';

export function useAdBlockDetector() {
  const [adBlocked, setAdBlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const detect = async () => {
      console.log('[AdBlock] detection started');

      // Method 1: CSS bait element — catches uBlock, AdBlock Plus
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
      console.log('[AdBlock] CSS check:', cssBlocked);

      if (cssBlocked) {
        if (!cancelled) { setAdBlocked(true); setChecking(false); }
        return;
      }

      // Method 2: Fetch the DoubleClick ad-serving endpoint (not the init script).
      // Ghostery blocks ad content requests (doubleclick.net) even when it allows adsbygoogle.js.
      // no-cors fetch returns an opaque response (no throw) when allowed;
      // throws TypeError when an extension cancels the request.
      console.log('[AdBlock] starting network check (doubleclick)...');
      let networkBlocked = false;
      try {
        await fetch(
          `https://googleads.g.doubleclick.net/pagead/id?t=${Date.now()}`,
          { method: 'HEAD', mode: 'no-cors', cache: 'no-store' }
        );
        console.log('[AdBlock] doubleclick fetch succeeded = NOT blocked');
        networkBlocked = false;
      } catch {
        console.log('[AdBlock] doubleclick fetch failed = BLOCKED');
        networkBlocked = true;
      }

      console.log('[AdBlock] networkBlocked:', networkBlocked);
      if (!cancelled) {
        setAdBlocked(networkBlocked);
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

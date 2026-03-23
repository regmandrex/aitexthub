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

      // Method 2: Try to load AdSense script directly via a script element.
      console.log('[AdBlock] starting network check...');
      const networkBlocked = await new Promise<boolean>((resolve) => {
        const script = document.createElement('script');
        const timer = setTimeout(() => { console.log('[AdBlock] network check timed out'); script.remove(); resolve(true); }, 5000);
        script.onload = () => { console.log('[AdBlock] script loaded = NOT blocked'); clearTimeout(timer); script.remove(); resolve(false); };
        script.onerror = () => { console.log('[AdBlock] script onerror = BLOCKED'); clearTimeout(timer); script.remove(); resolve(true); };
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?t=${Date.now()}`;
        document.head.appendChild(script);
      });

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

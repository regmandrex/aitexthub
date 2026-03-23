'use client';
import { useState, useEffect } from 'react';

export function useAdBlockDetector() {
  const [adBlocked, setAdBlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const detect = async () => {
      // Bait: use ins.adsbygoogle — the exact selector Ghostery/uBlock target with CSS injection.
      // Generic div baits miss Ghostery; this catches it directly.
      const bait = document.createElement('ins');
      bait.className = 'adsbygoogle';
      bait.style.cssText =
        'display:block!important;width:300px!important;height:250px!important;position:absolute!important;left:-9999px!important;top:-9999px!important;';
      document.body.appendChild(bait);
      await new Promise<void>((r) => setTimeout(r, 300));

      const style = getComputedStyle(bait);
      const blocked =
        style.display === 'none' ||
        style.visibility === 'hidden' ||
        bait.offsetHeight === 0 ||
        bait.offsetWidth === 0;

      document.body.removeChild(bait);

      if (!cancelled) {
        setAdBlocked(blocked);
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

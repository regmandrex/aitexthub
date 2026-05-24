'use client';
import { useState, useEffect } from 'react';

export function useAdBlockDetector() {
  const [adBlocked, setAdBlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const detect = async () => {
      await new Promise<void>((r) => setTimeout(r, 2500));
      if (cancelled) return;

      // Method 1: Check if the AdSense script loaded at all
      // If Tracking Prevention or a blocker killed the script, window.adsbygoogle won't exist
      const scriptBlocked = typeof (window as any).adsbygoogle === 'undefined';

      // Method 2: Check if ad slots exist and are hidden by CSS (extension-based blockers)
      const slots = document.querySelectorAll('ins[data-ad-client]');
      let slotsHidden = false;
      if (slots.length > 0) {
        slotsHidden = Array.from(slots).every((el) => {
          const s = getComputedStyle(el);
          return (
            s.display === 'none' ||
            s.visibility === 'hidden' ||
            (el as HTMLElement).offsetHeight === 0
          );
        });
      }

      // Method 3: Try to fetch a known ad script URL — blocked = ad blocker
      let fetchBlocked = false;
      try {
        const resp = await fetch(
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          { method: 'HEAD', mode: 'no-cors', cache: 'no-store' }
        );
        // no-cors returns opaque response (type 'opaque'), which is fine — it means it wasn't blocked
        if (resp.type === 'opaque' || resp.ok) {
          fetchBlocked = false;
        }
      } catch {
        fetchBlocked = true;
      }

      if (!cancelled) {
        setAdBlocked(scriptBlocked || slotsHidden || fetchBlocked);
        setChecking(false);
      }
    };

    detect().catch(() => {
      if (!cancelled) { setAdBlocked(false); setChecking(false); }
    });

    return () => { cancelled = true; };
  }, []);

  return { adBlocked, checking };
}

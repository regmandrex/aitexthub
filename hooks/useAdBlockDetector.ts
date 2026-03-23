'use client';
import { useState, useEffect } from 'react';

export function useAdBlockDetector() {
  const [adBlocked, setAdBlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const detect = async () => {
      // Wait for StickyFooterAd and page ad slots to mount,
      // and for Ghostery/uBlock to inject their CSS rules.
      await new Promise<void>((r) => setTimeout(r, 2000));
      if (cancelled) return;

      // Check the REAL ad slots already on the page — these are the
      // elements Ghostery actually hides via CSS (display:none !important).
      const slots = document.querySelectorAll('ins[data-ad-client]');

      if (slots.length === 0) {
        // No ad slots on this page — can't detect, assume ok
        setAdBlocked(false);
        setChecking(false);
        return;
      }

      // If every ad slot is hidden, an adblocker is active
      const allHidden = Array.from(slots).every((el) => {
        const s = getComputedStyle(el);
        return (
          s.display === 'none' ||
          s.visibility === 'hidden' ||
          (el as HTMLElement).offsetHeight === 0
        );
      });

      if (!cancelled) {
        setAdBlocked(allHidden);
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

'use client';
import { useState, useEffect } from 'react';

export function useAdBlockDetector() {
  const [adBlocked, setAdBlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const detect = async () => {
      // Wait long enough for AdSense to fetch + render fills, even on slow
      // networks and VPNs. DNS-level blockers (NetShield, Pi-hole, NextDNS)
      // never resolve pagead2.googlesyndication.com, so the script object
      // window.adsbygoogle stays undefined.
      await new Promise<void>((r) => setTimeout(r, 2000));
      if (cancelled) return;

      // Signal 1: AdSense script never loaded (DNS-level block or extension)
      const scriptBlocked = typeof (window as unknown as { adsbygoogle?: unknown }).adsbygoogle === 'undefined';

      // Signal 2: bait element approach — adblockers hide elements with
      // class names matching their filter lists.
      const bait = document.createElement('div');
      bait.className = 'adsbox ad-banner ad-placement';
      bait.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;';
      document.body.appendChild(bait);
      await new Promise<void>((r) => setTimeout(r, 100));
      const baitBlocked = bait.offsetHeight === 0 || bait.offsetParent === null;
      bait.remove();

      // Signal 3: real ad slots on the page rendered with zero size
      const slots = document.querySelectorAll('ins[data-ad-client]');
      const slotsBlocked = slots.length > 0 && Array.from(slots).every((el) => {
        const s = getComputedStyle(el);
        return (
          s.display === 'none' ||
          s.visibility === 'hidden' ||
          (el as HTMLElement).offsetHeight === 0
        );
      });

      const blocked = scriptBlocked || baitBlocked || slotsBlocked;

      if (!cancelled) {
        setAdBlocked(blocked);
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

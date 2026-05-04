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

      // Signal 3: AdSense never processed any slot it should have by now.
      // AdSense lazy-loads slots as they approach the viewport, so we only
      // consider slots already in or near the viewport — distant slots
      // legitimately have no data-ad-status yet.
      const allSlots = Array.from(document.querySelectorAll('ins[data-ad-client]'));
      const viewportH = window.innerHeight;
      const nearbySlots = allSlots.filter((el) => {
        const r = el.getBoundingClientRect();
        return r.top < viewportH * 1.5 && r.bottom > -viewportH * 0.5;
      });
      // If any slot anywhere on the page got processed, AdSense is working.
      const anyProcessed = allSlots.some((el) => el.hasAttribute('data-ad-status'));
      const slotsBlocked = !anyProcessed && nearbySlots.length > 0;

      // If AdSense is clearly running and filling slots, trust that over
      // the bait signal — bait class names get caught by overly broad
      // filter lists even when ads are working fine.
      const adsenseWorking = anyProcessed;
      const blocked = !adsenseWorking && (scriptBlocked || baitBlocked || slotsBlocked);

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

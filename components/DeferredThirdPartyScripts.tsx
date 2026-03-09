'use client';

import { useEffect, useRef } from 'react';

const LCP_WINDOW_MS = 2800;

/**
 * Injects GTM and AdSense scripts after LCP window so they don't block main thread during LCP.
 */
export default function DeferredThirdPartyScripts() {
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;

    const inject = () => {
      if (typeof document === 'undefined') return;

      // GTM
      const gtagScript = document.createElement('script');
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-YZ37PVSNQ2';
      gtagScript.async = true;
      document.body.appendChild(gtagScript);

      const gtagInit = document.createElement('script');
      gtagInit.id = 'gtag-init';
      gtagInit.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YZ37PVSNQ2');
      `;
      document.body.appendChild(gtagInit);

      // AdSense
      const adsScript = document.createElement('script');
      adsScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8764610479002120';
      adsScript.async = true;
      adsScript.crossOrigin = 'anonymous';
      document.body.appendChild(adsScript);
    };

    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(inject, { timeout: LCP_WINDOW_MS });
    } else {
      setTimeout(inject, LCP_WINDOW_MS);
    }
  }, []);

  return null;
}

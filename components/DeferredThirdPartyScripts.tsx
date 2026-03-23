'use client';

import { useEffect, useRef } from 'react';

const ADSENSE_DEFER_MS = 1200;
const GTM_DEFER_MS = 2800;

/**
 * AdSense at 1.2s so ad slots can fill sooner; GTM at 2.8s to keep LCP clear.
 */
export default function DeferredThirdPartyScripts() {
  const done = useRef(false);
  const gtmDone = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;

    const injectAdSense = () => {
      if (typeof document === 'undefined') return;
      const adsScript = document.createElement('script');
      adsScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8764610479002120';
      adsScript.async = true;
      adsScript.crossOrigin = 'anonymous';
      adsScript.onload = () => {
        (window as Window & { __adsLoaded?: boolean }).__adsLoaded = true;
      };
      document.body.appendChild(adsScript);
    };

    const injectGTM = () => {
      if (gtmDone.current || typeof document === 'undefined') return;
      gtmDone.current = true;
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
    };

    setTimeout(injectAdSense, ADSENSE_DEFER_MS);
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(injectGTM, { timeout: GTM_DEFER_MS });
    } else {
      setTimeout(injectGTM, GTM_DEFER_MS);
    }
  }, []);

  return null;
}

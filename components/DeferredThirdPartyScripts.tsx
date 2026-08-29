'use client';

import { useEffect, useRef } from 'react';

const GTM_DEFER_MS = 2800;

/**
 * GTM at 2.8s to keep LCP clear. AdSense is loaded once via next/script in app/layout.tsx.
 */
export default function DeferredThirdPartyScripts() {
  const gtmDone = useRef(false);

  useEffect(() => {
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

    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(injectGTM, { timeout: GTM_DEFER_MS });
    } else {
      setTimeout(injectGTM, GTM_DEFER_MS);
    }
  }, []);

  return null;
}

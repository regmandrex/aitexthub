'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type Ezstandalone = {
  cmd: Array<() => void>;
  // Defined by Ezoic's sa.min.js once it loads; absent on our bootstrap object.
  showAds?: (...ids: number[]) => void;
  destroyAll?: () => void;
};

/**
 * Activates Ezoic standalone ads. The header script (sa.min.js, loaded in the
 * root layout <head>) defines window.ezstandalone; queueing work on
 * ezstandalone.cmd runs it once the script is ready, so no manual polling.
 *
 * Activates placement 100 (the EzoicPlaceholder rendered in ToolPageShell).
 * Passing the id explicitly is harmless if the placeholder is absent on a
 * given route; add more ids here as placements are created in the dashboard.
 *
 * Ezoic's standalone API isn't SPA-aware, so on client-side route changes we
 * destroy existing placeholders before re-showing for the new page.
 */
export default function EzoicRouteAds() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const win = window as Window & { ezstandalone?: Ezstandalone };
    const ez = win.ezstandalone || (win.ezstandalone = { cmd: [] });

    const t = setTimeout(() => {
      ez.cmd.push(() => {
        try {
          ez.destroyAll?.();
        } catch {
          // first load has nothing to destroy
        }
        ez.showAds?.(100);
      });
    }, 300);

    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}

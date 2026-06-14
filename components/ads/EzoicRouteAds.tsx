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
 * showAds() with no arguments displays every placeholder present on the page.
 * We don't hardcode placement IDs — those come from the Ezoic dashboard once
 * placements are created, at which point we can pass explicit IDs here.
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
        ez.showAds?.();
      });
    }, 300);

    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const DISMISS_KEY = 'pro-funnel-banner-dismissed';

type ProFunnelBannerProps = {
  variant?: 'sticky' | 'inline';
};

export default function ProFunnelBanner({ variant = 'sticky' }: ProFunnelBannerProps) {
  const [dismissed, setDismissed] = useState(true);
  const isSticky = variant === 'sticky';

  useEffect(() => {
    if (!isSticky) return;
    try {
      const stored = window.sessionStorage.getItem(DISMISS_KEY);
      setDismissed(stored === '1');
    } catch {
      setDismissed(false);
    }
  }, [isSticky]);

  function handleDismiss() {
    setDismissed(true);
    try {
      window.sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {}
  }

  if (isSticky && dismissed) return null;

  const wrapperClass = isSticky
    ? 'sticky top-0 z-50 bg-brand-700 text-white'
    : 'bg-brand-700 text-white';

  return (
    <div className={wrapperClass}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 md:px-6">
        <p className="flex flex-1 items-center gap-2 text-xs font-medium md:text-sm">
          <span className="text-yellow-400">✦</span>
          <span className="truncate">
            Humanize your AI text to pass <span className="font-semibold text-yellow-400">99% of detectors</span>
          </span>
        </p>
        <Link
          href="/pro"
          className="shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 transition hover:bg-slate-100 md:text-sm"
        >
          TRY FREE
        </Link>
        {isSticky ? (
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="shrink-0 text-brand-100 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : null}
      </div>
    </div>
  );
}

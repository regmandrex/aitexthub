'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function ProFunnelBanner() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFixed(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fixed top bar — centered, slides in when inline scrolls out */}
      <div
        className={`fixed left-0 right-0 top-0 z-50 bg-black text-white transition-transform duration-200 ${
          fixed ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1.5 px-4 py-2.5 text-center md:flex-row md:justify-center md:gap-4 md:px-6">
          <p className="text-sm font-semibold text-white">
            Humanize your AI text to pass{' '}
            <strong className="font-bold text-yellow-400">99% of detectors.</strong>
          </p>
          <Link
            href="/ai-humanizer-pro"
            onClick={() => trackEvent('cta_clicked', { location: 'funnel_banner_fixed' })}
            className="shrink-0 rounded-lg bg-white px-4 py-1.5 text-sm font-bold text-black transition hover:bg-slate-100"
          >
            TRY FREE
          </Link>
        </div>
      </div>

      {/* Inline banner — stacks on mobile, side-by-side on desktop */}
      <div ref={sentinelRef} className="w-full bg-black text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-3.5 text-center md:flex-row md:justify-between md:gap-4 md:px-6 md:text-left">
          <p className="text-sm font-semibold text-white">
            Humanize your ChatGPT/AI text to pass{' '}
            <strong className="font-bold text-yellow-400">99% of detectors.</strong>
          </p>
          <Link
            href="/ai-humanizer-pro"
            onClick={() => trackEvent('cta_clicked', { location: 'funnel_banner_inline' })}
            className="shrink-0 rounded-lg bg-white px-6 py-2.5 text-sm font-bold text-black transition hover:bg-slate-100"
          >
            TRY NOW
          </Link>
        </div>
      </div>
    </>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-3 md:px-6">
          <p className="text-sm font-semibold text-white">
            Humanize your AI text to pass{' '}
            <strong className="font-bold text-yellow-400">99% of detectors.</strong>
          </p>
          <Link
            href="/pro"
            className="shrink-0 rounded-lg bg-white px-4 py-1.5 text-sm font-bold text-black transition hover:bg-slate-100"
          >
            TRY FREE
          </Link>
        </div>
      </div>

      {/* Inline banner — spaced out, justify-between */}
      <div ref={sentinelRef} className="w-full bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 md:px-6">
          <p className="text-sm font-semibold text-white">
            Humanize your ChatGPT/AI text to pass{' '}
            <strong className="font-bold text-yellow-400">99% of detectors.</strong>
          </p>
          <Link
            href="/pro"
            className="shrink-0 rounded-lg bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-slate-100"
          >
            TRY NOW
          </Link>
        </div>
      </div>
    </>
  );
}

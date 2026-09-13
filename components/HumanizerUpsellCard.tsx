'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const DETECTORS = ['TURNITIN', 'GPTZERO', 'ORIGINALITY.AI', 'COPYLEAKS'];

type HumanizerUpsellCardProps = {
  variant?: 'cleanup' | 'watermark';
  /** Tighter top margin when placed inside the output column (below toolbar, above result). */
  compact?: boolean;
};

export default function HumanizerUpsellCard({ variant = 'cleanup', compact = false }: HumanizerUpsellCardProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  const headline = variant === 'cleanup' ? 'Processing complete!' : 'Metadata removed!';
  const subline =
    variant === 'cleanup'
      ? 'Next step: Humanize this text to pass'
      : 'Next step: Humanize any AI-generated captions to pass';

  return (
    <div
      className={`${compact ? 'mt-2' : 'mt-6'} rounded-2xl border-3 border-white bg-slate-900 text-white shadow-neo-invert transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
    >
      <div className="p-5 md:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-white/80 bg-brand-600 text-yellow-300">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold tracking-tight text-white md:text-base">{headline}</p>
            <p className="mt-0.5 text-sm text-slate-300 leading-snug">
              {subline}{' '}
              <span className="font-semibold text-yellow-400">99% of AI detectors.</span>
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {DETECTORS.map((d) => (
            <span
              key={d}
              className="rounded-full border-2 border-slate-600 bg-slate-800 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-300"
            >
              {d}
            </span>
          ))}
        </div>

        <Link
          href="/pro"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-3 border-white bg-brand-600 px-4 py-3 text-sm font-bold text-white shadow-neo-invert-sm transition-transform hover:translate-y-0.5 hover:shadow-none active:translate-y-0.5"
        >
          Humanize Now
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

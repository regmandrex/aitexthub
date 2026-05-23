'use client';

import Link from 'next/link';

const DETECTORS = ['TURNITIN', 'GPTZERO', 'ORIGINALITY.AI', 'COPYLEAKS'];

export default function ProPaywall() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 z-10 px-6 py-8 text-center rounded-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700 mb-4">
        <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      </div>

      <h3 className="text-lg font-bold text-white leading-tight">Get the full result</h3>
      <p className="mt-1.5 text-sm text-slate-300 max-w-xs">
        Unlock the complete humanized text to bypass{' '}
        <span className="font-semibold text-yellow-400">99% of AI detectors.</span>
      </p>

      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {DETECTORS.map((d) => (
          <span
            key={d}
            className="rounded border border-slate-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-400"
          >
            {d}
          </span>
        ))}
      </div>

      <Link
        href="/pro"
        className="mt-5 flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow transition hover:bg-slate-100 active:scale-[0.98]"
      >
        Unlock Full Text
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>

      <p className="mt-3 text-[11px] uppercase tracking-widest text-slate-500">
        Free to try · No credit card · One click
      </p>
    </div>
  );
}

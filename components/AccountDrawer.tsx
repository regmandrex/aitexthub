'use client';

import { useEffect } from 'react';
import Link from 'next/link';

type AccountDrawerProps = {
  open: boolean;
  onClose: () => void;
  email: string;
  plan: 'free' | 'pro';
  wordsUsed?: number;
  wordsLimit?: number | 'unlimited';
};

export default function AccountDrawer({
  open,
  onClose,
  email,
  plan,
  wordsUsed = 0,
  wordsLimit = 0,
}: AccountDrawerProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isProActive = plan === 'pro';
  const limitDisplay = wordsLimit === 'unlimited' ? '∞' : `${wordsLimit.toLocaleString()} Words`;
  const usedDisplay = `${wordsUsed.toLocaleString()} WORDS USED`;
  const usagePct =
    wordsLimit === 'unlimited' || typeof wordsLimit !== 'number' || wordsLimit === 0
      ? 0
      : Math.min(100, Math.round((wordsUsed / wordsLimit) * 100));

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-slate-900/40 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[88vw] max-w-md flex-col bg-white shadow-2xl transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Account"
        aria-hidden={!open}
      >
        {/* Header — black bar */}
        <div className="bg-slate-900 px-5 py-5 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                </svg>
                Account
              </p>
              <p className="mt-1 text-sm text-slate-300">Manage your subscription and preferences.</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close account"
              className="rounded-lg p-1.5 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-1.5 text-xs">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate">{email}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* Current Status card */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Current Status</p>
            <div className="mt-2 flex items-start justify-between gap-3">
              <div>
                <p className="text-2xl font-bold tracking-tight text-slate-900">
                  {isProActive ? 'Pro Active' : 'No Active Plan'}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {isProActive ? 'Thanks for being Pro' : 'Get started with a pass'}
                </p>
              </div>
              {!isProActive ? (
                <Link
                  href="/pro"
                  onClick={onClose}
                  className="shrink-0 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
                >
                  Upgrade
                </Link>
              ) : null}
            </div>
          </div>

          {/* Plan limit / usage */}
          <div className="mt-5">
            <div className="flex items-center justify-between text-xs uppercase tracking-wider">
              <span className="font-bold text-slate-500">Plan Limit</span>
              <span className="font-bold text-slate-900">{limitDisplay}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs uppercase tracking-wider">
              <span className="text-slate-500">Usage</span>
              <span className="text-slate-500">{usedDisplay}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-slate-900 transition-all"
                style={{ width: `${usagePct}%` }}
              />
            </div>
          </div>

          <div className="my-5 h-px bg-slate-200" />

          {/* Actions */}
          <div className="space-y-2">
            <button
              type="button"
              disabled
              className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              title="Coming with checkout"
            >
              <span>Manage Subscription</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            <Link
              href="/account"
              onClick={onClose}
              className="flex w-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile Settings
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex w-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </Link>
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              disabled
              className="text-sm font-bold uppercase tracking-wider text-red-600 transition hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              title="Coming with auth"
            >
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

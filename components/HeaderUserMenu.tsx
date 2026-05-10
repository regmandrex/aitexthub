'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type HeaderUserMenuProps = {
  email: string;
  plan: 'free' | 'pro';
  onOpenAccount: () => void;
};

function initialOf(email: string) {
  const [local] = email.split('@');
  return (local?.[0] ?? '?').toUpperCase();
}

function truncate(email: string, max = 14) {
  if (email.length <= max) return email;
  return email.slice(0, max - 1) + '…';
}

export default function HeaderUserMenu({ email, plan, onOpenAccount }: HeaderUserMenuProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 hover:bg-slate-50"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-xs font-bold text-white">
          {initialOf(email)}
        </span>
        <span className="hidden text-sm font-medium text-slate-700 sm:inline">{truncate(email)}</span>
        <svg className={`h-4 w-4 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open ? (
        <div className="absolute right-0 top-full mt-1 w-64 rounded-xl border border-slate-200 bg-white shadow-lg">
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Signed In</p>
            <p className="mt-0.5 truncate text-sm font-medium text-slate-900">{email}</p>
            <p className="mt-0.5 text-xs text-slate-500">{plan === 'pro' ? 'Pro Plan' : 'Free Plan'}</p>
          </div>

          <div className="py-1">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenAccount();
              }}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317a1 1 0 011.35 0l1.13 1.018a1 1 0 00.852.247l1.5-.27a1 1 0 011.155.78l.342 1.494a1 1 0 00.625.711l1.408.598a1 1 0 01.519 1.401l-.706 1.355a1 1 0 000 .938l.706 1.355a1 1 0 01-.519 1.4l-1.408.6a1 1 0 00-.625.71l-.342 1.494a1 1 0 01-1.155.781l-1.5-.27a1 1 0 00-.852.246l-1.13 1.019a1 1 0 01-1.35 0l-1.13-1.019a1 1 0 00-.852-.246l-1.5.27a1 1 0 01-1.155-.781l-.342-1.494a1 1 0 00-.625-.71l-1.408-.6a1 1 0 01-.519-1.4l.706-1.355a1 1 0 000-.938L4.32 9.296a1 1 0 01.519-1.4l1.408-.599a1 1 0 00.625-.71l.342-1.495a1 1 0 011.155-.78l1.5.27a1 1 0 00.852-.247l1.13-1.018zM12 15a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              Account Settings
            </button>

            {plan === 'free' ? (
              <Link
                href="/pro"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-yellow-50"
              >
                <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 2h14v2H5v-2z" />
                </svg>
                Upgrade Plan
              </Link>
            ) : null}

            <button
              type="button"
              disabled
              className="flex w-full items-center gap-2 border-t border-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              title="Coming with auth"
            >
              <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign out
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

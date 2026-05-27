'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/auth-client';

type HeaderUserMenuProps = {
  email: string;
  plan: 'free' | 'pro';
  onOpenAccount: () => void;
  onUpgrade?: () => void;
};

function initialOf(email: string) {
  const [local] = email.split('@');
  return (local?.[0] ?? '?').toUpperCase();
}

function truncate(email: string, max = 16) {
  if (email.length <= max) return email;
  return email.slice(0, max - 1) + '…';
}

export default function HeaderUserMenu({ email, plan, onOpenAccount, onUpgrade }: HeaderUserMenuProps) {
  const [open, setOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

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
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm transition hover:border-slate-300 hover:shadow"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {/* Avatar */}
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-purple-700 text-xs font-black text-white shadow-inner">
          {initialOf(email)}
        </span>
        <span className="hidden text-sm font-medium text-slate-700 sm:inline">{truncate(email)}</span>
        {plan === 'pro' && (
          <span className="hidden rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-amber-900 sm:inline">
            Pro
          </span>
        )}
        <svg className={`h-3.5 w-3.5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open ? (
        <div className="absolute right-0 top-full mt-2 w-68 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5">

          {/* Profile header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-purple-700 to-indigo-800 px-4 py-4">
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 blur-xl" />
            <div className="relative flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-base font-black text-white shadow-inner">
                {initialOf(email)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{email}</p>
                {plan === 'pro' ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-amber-900">
                    ✦ Pro Plan
                  </span>
                ) : (
                  <span className="text-xs text-purple-200">Free Plan</span>
                )}
              </div>
            </div>
          </div>

          <div className="p-1.5">
            <button
              type="button"
              onClick={() => { setOpen(false); onOpenAccount(); }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317a1 1 0 011.35 0l1.13 1.018a1 1 0 00.852.247l1.5-.27a1 1 0 011.155.78l.342 1.494a1 1 0 00.625.711l1.408.598a1 1 0 01.519 1.401l-.706 1.355a1 1 0 000 .938l.706 1.355a1 1 0 01-.519 1.4l-1.408.6a1 1 0 00-.625.71l-.342 1.494a1 1 0 01-1.155.781l-1.5-.27a1 1 0 00-.852.246l-1.13 1.019a1 1 0 01-1.35 0l-1.13-1.019a1 1 0 00-.852-.246l-1.5.27a1 1 0 01-1.155-.781l-.342-1.494a1 1 0 00-.625-.71l-1.408-.6a1 1 0 01-.519-1.4l.706-1.355a1 1 0 000-.938L4.32 9.296a1 1 0 01.519-1.4l1.408-.599a1 1 0 00.625-.71l.342-1.495a1 1 0 011.155-.78l1.5.27a1 1 0 00.852-.247l1.13-1.018zM12 15a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </span>
              <span className="font-medium">Account Settings</span>
            </button>

            <Link
              href="/account"
              onClick={() => setOpen(false)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              <span className="font-medium">Dashboard</span>
            </Link>

            {plan === 'free' ? (
              <button
                type="button"
                onClick={() => { setOpen(false); onUpgrade?.(); }}
                className="flex w-full items-center gap-3 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-2.5 text-sm transition hover:from-amber-100 hover:to-yellow-100"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-yellow-400 text-white shadow-sm">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 2h14v2H5v-2z" />
                  </svg>
                </span>
                <div className="text-left">
                  <span className="block font-bold text-amber-800">Upgrade to Pro</span>
                  <span className="block text-[10px] text-amber-600">Unlock all tools · No limits</span>
                </div>
              </button>
            ) : null}
          </div>

          <div className="border-t border-slate-100 p-1.5">
            <button
              type="button"
              disabled={signingOut}
              onClick={async () => {
                setSigningOut(true);
                setOpen(false);
                await signOut();
                setTimeout(() => router.push('/'), 800);
              }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-60"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                {signingOut ? (
                  <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                )}
              </span>
              <span className="font-medium">{signingOut ? 'Signing out...' : 'Sign out'}</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

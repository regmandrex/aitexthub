'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from '@/lib/auth-client';

export default function AccountPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    if (!isPending && !session?.user && !signingOut) {
      router.push('/login?redirect=/account');
    }
  }, [isPending, session, router, signingOut]);

  if (isPending || !session?.user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-violet-600" />
      </div>
    );
  }

  const user = session.user;
  const plan = 'free' as 'free' | 'pro';
  const wordsUsed = 0 as number;
  const wordsLimit = 0 as number;
  const initial = (user.name?.[0] ?? user.email?.[0] ?? '?').toUpperCase();

  return (
    <div className="min-h-[60vh] bg-slate-50">
      <div className="mx-auto max-w-2xl px-4 py-10 md:py-14">

        {/* Profile card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-6 py-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl font-bold text-white">
                {initial}
              </div>
              <div>
                {user.name && (
                  <h1 className="text-lg font-bold text-white">{user.name}</h1>
                )}
                <p className="text-sm text-purple-200">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Current Plan</p>
                <p className="mt-1 text-xl font-bold text-slate-900">
                  {plan === 'pro' ? (
                    <span className="flex items-center gap-2">
                      Pro
                      <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet-700">Active</span>
                    </span>
                  ) : (
                    'Free'
                  )}
                </p>
              </div>
              {plan === 'free' && (
                <Link
                  href="/pro"
                  className="rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-violet-200 transition hover:shadow-lg"
                >
                  Upgrade to Pro
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Usage card */}
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Humanizer Usage</p>
            <p className="text-xs font-bold text-slate-900">
              {plan === 'pro'
                ? wordsLimit === 0 ? 'Unlimited' : `${wordsUsed.toLocaleString()} / ${wordsLimit.toLocaleString()} words`
                : 'Free tier — 500 words per run'}
            </p>
          </div>
          {plan === 'pro' && typeof wordsLimit === 'number' && wordsLimit > 0 && (
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all"
                style={{ width: `${Math.min(100, Math.round((wordsUsed / wordsLimit) * 100))}%` }}
              />
            </div>
          )}
          {plan === 'free' && (
            <p className="mt-2 text-xs text-slate-500">
              Upgrade to Pro for up to unlimited words per billing period.
            </p>
          )}
        </div>

        {/* Quick actions */}
        <div className="mt-5 space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">Account</h2>

          <Link
            href="/pro"
            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition hover:border-violet-200 hover:bg-violet-50/30"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100">
                <svg className="h-4 w-4 text-violet-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 2h14v2H5v-2z" />
                </svg>
              </span>
              {plan === 'pro' ? 'Manage Subscription' : 'Upgrade Plan'}
            </span>
            <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100">
                <svg className="h-4 w-4 text-sky-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Contact Support
            </span>
            <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/refund-policy"
            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                <svg className="h-4 w-4 text-amber-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              </span>
              Refund Policy
            </span>
            <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Sign out */}
        <div className="mt-8 text-center">
          <button
            type="button"
            disabled={signingOut}
            onClick={async () => {
              setSigningOut(true);
              await signOut();
              setTimeout(() => router.push('/'), 800);
            }}
            className="text-sm font-semibold text-red-600 transition hover:text-red-700 disabled:opacity-60"
          >
            {signingOut ? 'Signing out...' : 'Sign out'}
          </button>
        </div>

        {/* Delete account */}
        <div className="mt-4 text-center">
          <p className="text-[11px] text-slate-400">
            Want to delete your account? Contact{' '}
            <a href="mailto:support@gptcleanuptools.com" className="underline hover:text-slate-600">support@gptcleanuptools.com</a>
          </p>
        </div>

      </div>
    </div>
  );
}

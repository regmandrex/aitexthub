'use client';

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import NavDrawer from './NavDrawer';
import AccountDrawer from './AccountDrawer';
import HeaderUserMenu from './HeaderUserMenu';

const DEMO_EMAIL = 'regmandrex@gmail.com';

function DemoModeReader({ onChange }: { onChange: (mode: 'out' | 'free' | 'pro') => void }) {
  const params = useSearchParams();
  useEffect(() => {
    const v = params?.get('demo');
    if (v === 'pro') onChange('pro');
    else if (v === 'loggedin' || v === 'free') onChange('free');
    else onChange('out');
  }, [params, onChange]);
  return null;
}

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [demoMode, setDemoMode] = useState<'out' | 'free' | 'pro'>('out');

  const isLoggedIn = demoMode !== 'out';
  const plan: 'free' | 'pro' = demoMode === 'pro' ? 'pro' : 'free';

  return (
    <>
      <Suspense fallback={null}>
        <DemoModeReader onChange={setDemoMode} />
      </Suspense>
      <header className="relative z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link
            href="/"
            className="flex items-center text-lg font-semibold tracking-tight text-slate-900 hover:text-slate-700"
          >
            GPTCLEANUP <span className="font-normal text-slate-500">AI</span>
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            {isLoggedIn ? (
              <>
                <HeaderUserMenu
                  email={DEMO_EMAIL}
                  plan={plan}
                  onOpenAccount={() => setAccountOpen(true)}
                />
                <Link
                  href="/account"
                  className="hidden rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 md:inline-flex"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 md:inline-flex md:px-3 md:py-2"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700 md:inline-flex"
                >
                  Get Started
                </Link>
              </>
            )}

            <Link
              href="/ai-tools"
              aria-label="Search all tools"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 110-16 8 8 0 010 16z" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={() => setNavOpen(true)}
              aria-label="Open navigation"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <NavDrawer open={navOpen} onClose={() => setNavOpen(false)} />
      <AccountDrawer
        open={accountOpen}
        onClose={() => setAccountOpen(false)}
        email={DEMO_EMAIL}
        plan={plan}
        wordsUsed={0}
        wordsLimit={plan === 'pro' ? 'unlimited' : 0}
      />
    </>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import NavDrawer from './NavDrawer';
import AccountDrawer from './AccountDrawer';
import HeaderUserMenu from './HeaderUserMenu';
import { useSession } from '@/lib/auth-client';
import PricingModal from './PricingModal';

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
  const [pricingOpen, setPricingOpen] = useState(false);
  const [demoMode, setDemoMode] = useState<'out' | 'free' | 'pro'>('out');
  const { data: session } = useSession();

  const isLoggedIn = session?.user != null || demoMode !== 'out';
  const userEmail = session?.user?.email ?? 'user@example.com';
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
            aria-label="GPTCLEANUP AI"
            className="flex items-center hover:opacity-90"
          >
            <Image
              src="/brand/gpt clean up logo homepage.png"
              alt="GPTCLEANUP AI"
              width={220}
              height={104}
              priority
              className="h-16 w-auto md:h-[72px]"
            />
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            {isLoggedIn ? (
              <>
                <HeaderUserMenu
                  email={userEmail}
                  plan={plan}
                  onOpenAccount={() => setAccountOpen(true)}
                  onUpgrade={() => setPricingOpen(true)}
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
                  className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2"
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
              className="inline-flex items-center justify-center rounded-full p-2 text-slate-500 transition-colors hover:text-slate-900"
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
              className="inline-flex items-center justify-center rounded-full p-2 text-slate-500 transition-colors hover:text-slate-900"
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

      {pricingOpen && <PricingModal onClose={() => setPricingOpen(false)} />}
      <NavDrawer open={navOpen} onClose={() => setNavOpen(false)} />
      <AccountDrawer
        open={accountOpen}
        onClose={() => setAccountOpen(false)}
        email={userEmail}
        plan={plan}
        wordsUsed={0}
        wordsLimit={plan === 'pro' ? 'unlimited' : 0}
      />
    </>
  );
}

'use client';

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import NavDrawer from './NavDrawer';
import AccountDrawer from './AccountDrawer';
import HeaderUserMenu from './HeaderUserMenu';
import { useSession } from '@/lib/auth-client';
import { useSubscription } from '@/hooks/useSubscription';
import { trackEvent } from '@/lib/analytics';
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
  const subscription = useSubscription();

  const isLoggedIn = session?.user != null || demoMode !== 'out';
  const userEmail = session?.user?.email ?? 'user@example.com';
  // Plan reflects the real subscription so a paying user actually sees "Pro";
  // ?demo=pro still forces Pro for testing.
  const isPro = demoMode === 'pro' || subscription?.isPro === true;
  const plan: 'free' | 'pro' = isPro ? 'pro' : 'free';
  const wordsUsed = subscription?.wordsUsed ?? 0;
  const wordsLimit: number | 'unlimited' =
    subscription?.wordsLimit === null && isPro
      ? 'unlimited'
      : subscription?.wordsLimit ?? 0;

  return (
    <>
      <Suspense fallback={null}>
        <DemoModeReader onChange={setDemoMode} />
      </Suspense>
      <header className="relative z-40 border-b border-stone-200 bg-[#faf8f2]/90 backdrop-blur">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link
            href="/"
            aria-label="AI Text Cleanup Tools"
            className="flex items-center hover:opacity-90"
          >
            <img
              src="/brand/ai-text-cleanup-tools-generated.png"
              alt="AI Text Cleanup Tools"
              className="h-12 w-auto max-w-[240px] rounded-xl object-contain [filter:brightness(1.35)_contrast(1.12)] md:h-14 md:max-w-[280px]"
            />
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            {isLoggedIn ? (
              <>
                <HeaderUserMenu
                  email={userEmail}
                  plan={plan}
                  onOpenAccount={() => setAccountOpen(true)}
                  onUpgrade={() => {
                    trackEvent('cta_clicked', { location: 'header_upgrade' });
                    setPricingOpen(true);
                  }}
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
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-950"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => trackEvent('cta_clicked', { location: 'header_get_started' })}
                  className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 md:inline-flex"
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
        wordsUsed={wordsUsed}
        wordsLimit={wordsLimit}
      />
    </>
  );
}

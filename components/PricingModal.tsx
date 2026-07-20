'use client';

import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { useSession } from '@/lib/auth-client';
import { withCheckoutEmail } from '@/lib/checkout';

type Plan = {
  id: 'weekly' | 'monthly' | 'annual';
  name: string;
  badge: string | null;
  price: string;
  originalPrice: string;
  period: string;
  quota: string;
  saveText: string | null;
  features: string[];
  checkoutUrl?: string;
};

const PLANS: Plan[] = [
  {
    id: 'weekly',
    name: 'Weekly',
    badge: 'TRY IT OUT',
    price: '$4.99',
    originalPrice: '$9',
    period: 'per week',
    quota: '50,000 words / week',
    saveText: null,
    features: [
      'AI video watermark removal — 4',
      'AI image watermark erase — 15',
      '50,000 words / week',
      'Bypass every detector',
    ],
    checkoutUrl: 'https://mygptcleanup.lemonsqueezy.com/checkout/buy/4668229c-1a12-4017-9445-a208a32d3083',
  },
  {
    id: 'monthly',
    name: 'Monthly',
    badge: null,
    price: '$19.99',
    originalPrice: '$29',
    period: 'per month',
    quota: '300,000 words / month',
    saveText: 'Save 31%',
    features: [
      'AI video watermark removal — 15',
      'AI image watermark erase — 35',
      '300,000 words / month',
      'Bypass every detector',
    ],
    checkoutUrl: 'https://mygptcleanup.lemonsqueezy.com/checkout/buy/2b8c8163-2571-454e-b255-947a91388cf6',
  },
  {
    id: 'annual',
    name: 'Annual',
    badge: 'BEST VALUE',
    price: '$8.33',
    originalPrice: '$19.99',
    period: 'per month, billed $99.99 yearly',
    quota: 'Unlimited words',
    saveText: 'Save 58%',
    features: [
      'AI video watermark removal — 95',
      'AI image watermark erase — 100',
      'Unlimited words — no cap',
      'Bypass every detector',
    ],
    checkoutUrl: 'https://mygptcleanup.lemonsqueezy.com/checkout/buy/0342ed42-ec81-483f-99a3-0803863e9ef5',
  },
];

export default function PricingModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<Plan['id']>('annual');
  const { data: session } = useSession();

  useEffect(() => {
    trackEvent('pricing_viewed');
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const activePlan = PLANS.find((p) => p.id === selected) ?? PLANS[2];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative my-auto w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="px-6 pt-7 pb-5 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-md shadow-purple-200">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </div>
          <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-900">
            Upgrade to <span className="text-violet-700">Pro</span>
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Bypass every AI detector. Unlimited everything.
          </p>
        </div>

        {/* Plan selector */}
        <div className="space-y-2 px-5">
          {PLANS.map((plan) => {
            const isSelected = plan.id === selected;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelected(plan.id)}
                className={`group relative flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 text-left transition-all ${
                  isSelected
                    ? 'border-violet-600 bg-violet-50/60 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Radio */}
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                      isSelected ? 'border-violet-600 bg-violet-600' : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <span className="h-2 w-2 rounded-full bg-white" />}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">{plan.name}</span>
                      {plan.badge && plan.id === 'annual' && (
                        <span className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-amber-900">
                          {plan.badge}
                        </span>
                      )}
                      {plan.badge && plan.id === 'weekly' && (
                        <span className="rounded-full bg-violet-100 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-violet-700">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className={`mt-0.5 text-[11px] font-semibold ${isSelected ? 'text-violet-700' : 'text-slate-700'}`}>
                      {plan.quota}
                    </p>
                    <p className="text-[10px] text-slate-400">{plan.period}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-1.5">
                    <span className="text-[11px] text-slate-400 line-through">{plan.originalPrice}</span>
                    <span className="text-lg font-black text-slate-900">{plan.price}</span>
                  </div>
                  {plan.saveText && (
                    <p className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-violet-700' : 'text-emerald-600'}`}>
                      {plan.saveText}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Features */}
        <div className="mt-5 border-t border-slate-100 px-6 py-4">
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
            {activePlan.features.map((f) => (
              <li key={f} className="flex items-start gap-1.5 text-xs text-slate-700">
                <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="px-5 pb-5">
          <a
            href={activePlan.checkoutUrl ? withCheckoutEmail(activePlan.checkoutUrl, session?.user?.email) : '/pro#pricing'}
            onClick={() => trackEvent('checkout_started', { plan: activePlan.id })}
            className="block w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-violet-200 transition-all hover:from-violet-700 hover:to-purple-800 hover:shadow-xl"
          >
            Continue with {activePlan.name} →
          </a>

          <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure checkout
            </span>
            <span>·</span>
            <span>Cancel anytime</span>
            <span>·</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}

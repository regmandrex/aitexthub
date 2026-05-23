import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMeta } from '@/lib/seo-meta';

const title = 'GPTCleanup Pro — Undetectable AI for Real Work';
const description =
  'Pro plan for GPTCleanup Tools: humanize AI text to pass 99% of detectors, remove ads, unlock bulk image processing, raise input limits, and access premium tools. From $3.99/week.';

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ title, description, urlPath: '/pro' });
}

const DETECTORS = ['Turnitin', 'GPTZero', 'Originality.ai', 'Copyleaks', 'Winston AI', 'Sapling'];

const COMPARISON: Array<{ feature: string; free: string; pro: string }> = [
  { feature: 'Text cleaner & space remover', free: '5,000 chars per run', pro: 'Unlimited' },
  { feature: 'AI Humanizer', free: 'Rule-based (basic)', pro: 'LLM-powered (Claude + GPT-4)' },
  { feature: 'Humanizer quota', free: '500 words per run', pro: '50k / 300k / Unlimited' },
  { feature: 'AI detectors bypassed', free: 'Limited', pro: '99% — Turnitin, GPTZero, Originality, Copyleaks' },
  { feature: 'Image watermark remover', free: '1 image at a time', pro: 'Bulk (up to 100 images)' },
  { feature: 'Video watermark remover', free: '60 seconds max', pro: 'Up to 30 minutes' },
  { feature: 'Ads', free: 'Yes', pro: 'None' },
  { feature: 'API access', free: 'No', pro: '1,000 requests/day' },
  { feature: 'Priority processing', free: 'No', pro: 'Yes' },
  { feature: 'Email support', free: 'Community', pro: 'Direct support' },
];

type Plan = {
  id: 'weekly' | 'monthly' | 'annual';
  name: string;
  price: string;
  originalPrice: string;
  period: string;
  subPeriod?: string;
  badge?: string;
  saveText?: string;
  cta: string;
  features: string[];
  highlight?: boolean;
  checkoutUrl?: string;
};

const PLANS: Plan[] = [
  {
    id: 'weekly',
    name: 'Weekly',
    price: '$3.99',
    originalPrice: '$7',
    period: 'per week',
    cta: 'Get Weekly Pass',
    features: [
      '50,000 words / week',
      'All 60+ Pro tools unlocked',
      'Bypass every detector',
      '7-day access · Cancel anytime',
    ],
  },
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$17.99',
    originalPrice: '$25',
    period: 'per month',
    saveText: 'Save 28%',
    cta: 'Get Pro Monthly',
    features: [
      '300,000 words / month',
      'All 60+ Pro tools unlocked',
      'Bypass every detector',
      'Cancel anytime',
    ],
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '$10.25',
    originalPrice: '$16.67',
    period: 'per month',
    subPeriod: 'billed $122.99 yearly',
    badge: 'BEST VALUE',
    saveText: 'Save 39%',
    cta: 'Get Pro Annual',
    highlight: true,
    features: [
      'Truly unlimited humanizing',
      'All 60+ Pro tools unlocked',
      'Bypass every detector',
      'Priority email support',
    ],
  },
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What does Pro actually unlock?',
    a: 'Pro removes ads sitewide, raises input limits across every tool (5,000 chars → unlimited on text tools, 1 → 100 images on watermark tools, 60s → 30min on video tools), unlocks the LLM-powered AI Humanizer that uses Claude and GPT-4 to genuinely rewrite content, and gives you API access for automation.',
  },
  {
    q: 'How is the Pro Humanizer different from the free one?',
    a: 'The free humanizer applies rule-based transforms — useful for basic cleanup but detectable by modern AI checkers. The Pro humanizer routes your text through Claude and GPT-4 with carefully tuned prompts, producing genuinely human-feeling output that consistently passes Turnitin, GPTZero, Originality.ai, and Copyleaks at 99%+ rates in our testing.',
  },
    {
    q: 'Is there a free trial?',
    a: 'You can use the free tier of every tool with no signup. Pro itself does not include a free trial period — all paid plans are final sale. We recommend trying the free tier first to see if our tools fit your workflow before upgrading.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Monthly and annual plans cancel from your account dashboard with one click. Cancellation stops the next renewal — you keep access for the rest of the billing period you already paid for.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'All major credit and debit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and PayPal. Payments are handled by LemonSqueezy, our merchant of record, who handles tax compliance globally.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'All sales are final. Refunds are only granted for billing errors such as duplicate charges or incorrect billing amounts. See our Refund Policy for details. You can cancel anytime — cancellation stops future charges, but does not refund the current billing period.',
  },
  {
    q: 'Will Pro work for my use case?',
    a: 'Pro is built for students, content creators, marketers, journalists, and anyone working professionally with AI-generated content. If your workflow involves cleaning, humanizing, or processing AI text, images, or video at any meaningful scale, Pro pays for itself within the first week.',
  },
  {
    q: 'Is removing AI watermarks legal?',
    a: 'Removing C2PA metadata from images and videos you generated with your own account is legal in most jurisdictions — C2PA is provenance information, not DRM. However, AI disclosure obligations under FTC guidance and platform-specific rules continue to apply regardless of whether the watermark is technically present. Use Pro tools responsibly.',
  },
];

export default function ProLandingPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-violet-50 via-white to-white">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 py-14 text-center md:py-20">
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm shadow-violet-200">
            <span className="text-amber-300">✦</span> GPTCleanup Pro
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Undetectable AI.{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">
              Built for real work.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Rewrite ChatGPT, Claude, and Gemini output with LLM-powered humanization that passes{' '}
            <span className="font-semibold text-slate-900">99% of AI detectors</span> — plus bulk processing, no ads, and unlimited input across all 60+ tools.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {DETECTORS.map((d) => (
              <span
                key={d}
                className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600 shadow-sm"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="#pricing"
              className="rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:shadow-lg hover:shadow-violet-300"
            >
              See Pricing
            </Link>
            <Link
              href="/ai-humanizer"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Try free first
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">No card. No email. 5,000 free chars per run.</p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Free vs Pro</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
            Every tool stays free with generous limits. Pro removes the ceiling.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <div className="px-4 py-3 md:px-6">Feature</div>
              <div className="border-l border-slate-200 px-4 py-3 md:px-6">Free</div>
              <div className="border-l border-slate-200 bg-gradient-to-r from-violet-700 to-purple-700 px-4 py-3 text-white md:px-6">
                Pro
              </div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-sm ${i === COMPARISON.length - 1 ? '' : 'border-b border-slate-200'}`}
              >
                <div className="px-4 py-3 font-medium text-slate-900 md:px-6">{row.feature}</div>
                <div className="border-l border-slate-200 px-4 py-3 text-slate-600 md:px-6">{row.free}</div>
                <div className="border-l border-slate-200 bg-violet-50/40 px-4 py-3 font-medium text-slate-900 md:px-6">
                  {row.pro}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Simple pricing.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
            Pick the plan that fits how you work. Every plan includes every Pro feature.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-200 ${
                  plan.highlight
                    ? 'border-violet-500 shadow-xl shadow-violet-200 md:scale-[1.03]'
                    : 'border-slate-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md'
                }`}
              >
                {plan.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-amber-900 shadow-sm">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>

                <div className="mt-4">
                  <span className="text-xs text-slate-400 line-through">Was {plan.originalPrice}</span>
                  <div className="mt-0.5 flex items-baseline gap-1.5">
                    <span className="text-4xl font-black tracking-tight text-slate-900">{plan.price}</span>
                    <span className="text-sm font-medium text-slate-500">{plan.period}</span>
                  </div>
                  {plan.subPeriod && (
                    <p className="mt-1 text-xs text-slate-500">{plan.subPeriod}</p>
                  )}
                  {plan.saveText && (
                    <p className="mt-2 inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      {plan.saveText}
                    </p>
                  )}
                </div>

                <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100">
                        <svg className="h-3 w-3 text-violet-700" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.checkoutUrl ?? '#pricing'}
                  className={`mt-6 block w-full rounded-full px-4 py-3 text-center text-sm font-bold transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-violet-600 to-purple-700 text-white shadow-md shadow-violet-200 hover:shadow-lg'
                      : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {plan.cta} →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure checkout by LemonSqueezy
            </span>
            <span className="hidden sm:inline">·</span>
            <span>Cancel anytime</span>
            <span className="hidden sm:inline">·</span>
            <span>All sales final</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Pro questions, answered.
          </h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-3 transition open:border-violet-200 open:bg-violet-50/30 hover:border-slate-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-900">
                  <span className="flex items-start gap-2">
                    <span className="text-slate-400">{String(i + 1).padStart(2, '0')}.</span>
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-violet-600 transition-transform group-open:rotate-45">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-2 whitespace-pre-line text-sm text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 py-14 text-center md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to ship work that passes detectors?</h2>
          <p className="mt-3 text-violet-100">Pick a plan and unlock the full toolkit in 30 seconds.</p>
          <Link
            href="#pricing"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-violet-700 shadow-lg transition hover:bg-violet-50"
          >
            Go Pro →
          </Link>
        </div>
      </section>
    </div>
  );
}

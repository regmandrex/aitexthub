import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMeta } from '@/lib/seo-meta';

const title = 'GPTCleanup Pro — Undetectable AI for Real Work';
const description =
  'Pro plan for GPTCleanup Tools: humanize AI text to pass 99% of detectors, remove ads, unlock bulk image processing, raise input limits, and access premium tools. From $5/month.';

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ title, description, urlPath: '/pro' });
}

const DETECTORS = ['TURNITIN', 'GPTZERO', 'ORIGINALITY.AI', 'COPYLEAKS', 'WINSTON AI', 'SAPLING'];

const COMPARISON: Array<{ feature: string; free: string; pro: string }> = [
  { feature: 'Text cleaner & space remover', free: '5,000 chars per run', pro: 'Unlimited' },
  { feature: 'AI Humanizer', free: 'Rule-based (basic)', pro: 'LLM-powered (Claude + GPT-4)' },
  { feature: 'AI detectors bypassed', free: 'Limited', pro: '99% — Turnitin, GPTZero, Originality, Copyleaks' },
  { feature: 'Image watermark remover', free: '1 image at a time', pro: 'Bulk (up to 100 images)' },
  { feature: 'Video watermark remover', free: '60 seconds max', pro: 'Up to 30 minutes' },
  { feature: 'Ads', free: 'Yes', pro: 'None' },
  { feature: 'API access', free: 'No', pro: '1,000 requests/day' },
  { feature: 'Priority processing', free: 'No', pro: 'Yes' },
  { feature: 'Email support', free: 'Community', pro: 'Direct support' },
];

const PLANS: Array<{
  name: string;
  price: string;
  period: string;
  badge?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}> = [
  {
    name: 'Monthly',
    price: '$5',
    period: '/ month',
    features: ['All Pro features', 'Cancel anytime', 'Billed monthly'],
    cta: 'Get Pro Monthly',
  },
  {
    name: 'Annual',
    price: '$39',
    period: '/ year',
    badge: 'Save 35%',
    features: ['All Pro features', '12 months access', 'Billed once a year', 'Equivalent to $3.25/mo'],
    cta: 'Get Pro Annual',
    highlight: true,
  },
  {
    name: 'Lifetime',
    price: '$149',
    period: 'one-time',
    badge: 'Best value',
    features: ['All Pro features forever', 'No recurring billing', 'Future updates included'],
    cta: 'Get Lifetime',
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
    a: 'You can use the free tier of every tool with no signup. Pro itself does not include a free trial period, but our 7-day money-back guarantee on monthly and annual plans means you can try Pro risk-free. Lifetime is final sale.',
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
    a: 'Monthly and annual plans come with a 7-day money-back guarantee — email support within 7 days of purchase for a full refund. Lifetime purchases are final and non-refundable due to the one-time nature of the deal.',
  },
  {
    q: 'Will Pro work for my use case?',
    a: 'Pro is built for students, content creators, marketers, journalists, and anyone working professionally with AI-generated content. If your workflow involves cleaning, humanizing, or processing AI text/images/video at any meaningful scale, Pro pays for itself within the first week.',
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
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center md:py-20">
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            <span className="text-yellow-400">✦</span> GPTCleanup Pro
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Undetectable AI. <span className="text-slate-500">Built for real work.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Rewrite ChatGPT, Claude, and Gemini output with LLM-powered humanization that passes <span className="font-semibold text-slate-900">99% of AI detectors</span> — plus bulk processing, no ads, and unlimited input limits across all 600+ tools.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {DETECTORS.map((d) => (
              <span
                key={d}
                className="rounded border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="#pricing"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
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
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">Free vs Pro</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
            Every tool stays free with generous limits. Pro removes the ceiling.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <div className="px-4 py-3 md:px-6">Feature</div>
              <div className="border-l border-slate-200 px-4 py-3 md:px-6">Free</div>
              <div className="border-l border-slate-200 bg-brand-700 px-4 py-3 text-white md:px-6">Pro</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-sm ${i === COMPARISON.length - 1 ? '' : 'border-b border-slate-200'}`}
              >
                <div className="px-4 py-3 font-medium text-slate-900 md:px-6">{row.feature}</div>
                <div className="border-l border-slate-200 px-4 py-3 text-slate-600 md:px-6">{row.free}</div>
                <div className="border-l border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-900 md:px-6">
                  {row.pro}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">Simple pricing.</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
            Pick the plan that fits how you work. All plans include every Pro feature.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border bg-white p-6 ${
                  plan.highlight ? 'border-brand-600 shadow-lg ring-2 ring-brand-100' : 'border-slate-200'
                }`}
              >
                {plan.badge ? (
                  <span className="absolute right-4 top-4 rounded-full bg-yellow-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900">
                    {plan.badge}
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                  <span className="text-sm text-slate-600">{plan.period}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 text-slate-900">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  disabled
                  className={`mt-6 w-full rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    plan.highlight
                      ? 'bg-brand-600 text-white hover:bg-brand-700'
                      : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
                  } disabled:cursor-not-allowed disabled:opacity-60`}
                  title="Checkout coming soon"
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            7-day money-back guarantee on monthly and annual. Lifetime is final sale.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">Pro questions, answered.</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-slate-300"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  <span className="mr-2 text-slate-500">{i + 1}.</span>
                  {faq.q}
                </summary>
                <p className="mt-2 whitespace-pre-line text-sm text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-700 text-white">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center md:py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Ready to ship work that passes detectors?</h2>
          <p className="mt-3 text-brand-100">Pick a plan and unlock the full toolkit in 30 seconds.</p>
          <Link
            href="#pricing"
            className="mt-6 inline-flex rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-yellow-300"
          >
            Go Pro →
          </Link>
        </div>
      </section>
    </div>
  );
}

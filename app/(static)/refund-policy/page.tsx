import Link from 'next/link';
import { buildMeta } from '@/lib/seo-meta';


export async function generateMetadata() {
  return buildMeta({
    title: 'Refund Policy',
    description: 'Refund policy for GPTCLEANUP AI Pro subscriptions. All sales are final except in limited cases such as duplicate or incorrect charges.',
    urlPath: '/refund-policy',
  });
}

const NO_REFUND = [
  {
    title: 'AI detection failures',
    body: 'If any AI detector flags your humanized text, this is not grounds for a refund. Detection algorithms change constantly and are outside our control.',
  },
  {
    title: 'Output quality dissatisfaction',
    body: 'AI models are probabilistic. Results may not always meet expectations.',
  },
  {
    title: 'Unused subscription time',
    body: 'If you cancel, you keep access until the period ends but receive no refund for unused days.',
  },
  {
    title: 'Change of mind',
    body: 'Deciding you no longer want the service after purchasing.',
  },
  {
    title: 'Academic or professional consequences',
    body: 'We are not liable for any penalties from your use of the Service.',
  },
  {
    title: 'Third-party issues',
    body: 'Problems with your institution, employer, or other parties.',
  },
];

const EXCEPTIONS = [
  {
    title: 'Duplicate charges',
    body: 'If you were charged twice for the same subscription period.',
  },
  {
    title: 'Incorrect billing amount',
    body: 'If you were charged more than the stated price at checkout.',
  },
  {
    title: 'Extended service outage',
    body: 'If the service was completely unavailable for 24+ consecutive hours during your billing period (prorated credit only).',
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-violet-50 via-white to-white">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 py-12 text-center md:py-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm shadow-violet-200">
            Legal
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Refund{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            This policy applies to all GPTCleanup Pro subscriptions and one-time purchases.
          </p>
          <p className="mt-2 text-xs text-slate-500">Effective May 22, 2026</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        {/* Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-purple-50 p-6 shadow-sm">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-200/40 blur-2xl" />
          <div className="relative flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 text-white shadow-md shadow-violet-200">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">All sales are final</h2>
              <p className="mt-1 text-sm text-slate-600">
                By purchasing a subscription to GPTCleanup, you acknowledge and agree that{' '}
                <strong className="text-slate-900">all purchases are final and non-refundable</strong>, except as explicitly stated below.
              </p>
            </div>
          </div>
        </div>

        {/* Why */}
        <section className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">Why we have a strict refund policy</h2>
          <p className="mt-2 text-sm text-slate-600">GPTCleanup provides AI-powered text rewriting and processing services. Due to the nature of the service:</p>
          <ul className="mt-4 space-y-2.5">
            {[
              'Once you access and use the service, the value has been delivered.',
              'AI detection algorithms are maintained by third parties and change frequently.',
              'We cannot control or predict how external AI detectors will behave.',
              'Subjective dissatisfaction with output is not grounds for a refund.',
            ].map((line) => (
              <li key={line} className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100">
                  <svg className="h-3 w-3 text-violet-700" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {line}
              </li>
            ))}
          </ul>
        </section>

        {/* No refunds for */}
        <section className="mt-12">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">We do not offer refunds for</h2>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {NO_REFUND.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-rose-200 hover:shadow-sm"
              >
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Limited exceptions */}
        <section className="mt-12">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">Limited exceptions</h2>
          </div>
          <p className="mt-2 text-sm text-slate-600">Refunds may be considered <strong className="text-slate-900">only</strong> in these specific cases:</p>
          <div className="mt-5 space-y-3">
            {EXCEPTIONS.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50/40 p-4"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to request */}
        <section className="mt-12">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">How to request a refund</h2>
          <p className="mt-2 text-sm text-slate-600">If you believe you qualify for one of the limited exceptions above:</p>

          <ol className="mt-5 space-y-4">
            {[
              {
                step: '1',
                title: 'Email support',
                body: (
                  <>
                    Send a message to{' '}
                    <a href="mailto:support@gptcleanuptools.com" className="font-semibold text-violet-700 underline-offset-2 hover:underline">
                      support@gptcleanuptools.com
                    </a>{' '}
                    with the subject line <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">Refund Request – [Your Email]</code>.
                  </>
                ),
              },
              {
                step: '2',
                title: 'Include the details we need',
                body: (
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                    <li>• The email address associated with your account</li>
                    <li>• Date(s) of the charge(s) in question</li>
                    <li>• A clear description of the billing error</li>
                    <li>• Screenshots or receipts (required for duplicate charges)</li>
                  </ul>
                ),
              },
              {
                step: '3',
                title: 'Wait for our response',
                body: <>We aim to respond within <strong className="text-slate-900">3–5 business days</strong>. Approved refunds process in 5–10 business days, and may take an additional 5–10 business days to appear on your statement depending on your bank.</>,
              },
            ].map((s) => (
              <li key={s.step} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">
                  {s.step}
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900">{s.title}</h3>
                  <div className="mt-1 text-sm text-slate-700">{s.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Cancellation vs Refund */}
        <section className="mt-12">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">Cancellation is not the same as a refund</h2>
          <p className="mt-2 text-sm text-slate-600">Two different actions with two very different outcomes:</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet-700">
                  Cancellation
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-violet-600">✓</span> Available anytime in Account Settings</li>
                <li className="flex items-start gap-2"><span className="text-violet-600">✓</span> Access continues until period end</li>
                <li className="flex items-start gap-2"><span className="text-violet-600">✓</span> No future charges</li>
                <li className="flex items-start gap-2"><span className="text-slate-300">×</span> No refund for remaining time</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-700">
                  Refund
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-slate-300">×</span> Not available for most cases</li>
                <li className="flex items-start gap-2"><span className="text-violet-600">✓</span> Only for billing errors</li>
                <li className="flex items-start gap-2"><span className="text-violet-600">✓</span> Requires documentation</li>
                <li className="flex items-start gap-2"><span className="text-violet-600">✓</span> Reviewed case-by-case</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chargebacks */}
        <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5 19h14a2 2 0 001.84-2.75L13.74 4a2 2 0 00-3.48 0L3.16 16.25A2 2 0 005 19z" />
              </svg>
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900">Chargebacks &amp; disputes</h2>
              <p className="mt-2 text-sm text-slate-700">
                Filing a fraudulent chargeback or payment dispute is a violation of our Terms of Service. If you initiate one without first contacting us:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• Your account will be immediately terminated</li>
                <li>• You may be banned from future use of the Service</li>
                <li>• We reserve the right to dispute illegitimate chargebacks</li>
                <li>• We may recover costs associated with chargeback disputes</li>
              </ul>
              <p className="mt-3 text-sm text-slate-700">
                <strong className="text-slate-900">Please contact us first.</strong> We resolve almost every legitimate billing issue directly — no bank dispute necessary.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 p-8 text-center text-white shadow-xl shadow-violet-200">
          <h2 className="text-xl font-bold md:text-2xl">Questions about a charge?</h2>
          <p className="mt-2 text-sm text-violet-100">We respond to billing inquiries within 3–5 business days.</p>
          <Link
            href="mailto:support@gptcleanuptools.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-violet-700 shadow-lg transition hover:bg-violet-50"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@gptcleanuptools.com
          </Link>
        </section>
      </div>
    </div>
  );
}

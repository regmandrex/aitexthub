import Link from 'next/link';
import { buildMeta } from '@/lib/seo-meta';

export const revalidate = 2592000;

export async function generateMetadata() {
  return buildMeta({
    title: 'Terms of Service',
    description: 'Terms of Service for GPTCleanup AI tools, Pro subscriptions, and paid plans. Covers acceptable use, billing, cancellation, liability, and more.',
    urlPath: '/terms-of-service',
  });
}

export default async function TermsOfServicePage() {
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
            Terms of{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            These terms govern your use of GPTCleanup, including free tools, Pro subscriptions, and all paid plans.
          </p>
          <p className="mt-2 text-xs text-slate-500">Last updated: May 24, 2026</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16 space-y-10">

        {/* 1. Acceptance */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">1</span>
            <h2 className="text-lg font-bold text-slate-900">Acceptance of Terms</h2>
          </div>
          <p className="text-sm text-slate-700">By accessing or using GPTCleanup (&quot;the Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Service. These Terms apply to all visitors, users, and subscribers — including users of free tools and holders of paid Pro plans.</p>
        </section>

        {/* 2. Description */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">2</span>
            <h2 className="text-lg font-bold text-slate-900">Description of Service</h2>
          </div>
          <p className="text-sm text-slate-700">GPTCleanup provides browser-based text-processing and AI-related tools for personal and lawful use. The Service includes free tools available without an account and paid Pro features available through a subscription. We may change, suspend, or discontinue any part of the Service at any time. We will make reasonable efforts to notify active subscribers before removing paid features.</p>
        </section>

        {/* 3. Account Registration */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">3</span>
            <h2 className="text-lg font-bold text-slate-900">Account Registration</h2>
          </div>
          <p className="text-sm text-slate-700">Some features require you to create an account. When you register, you agree to:</p>
          <ul className="mt-3 space-y-2">
            {[
              'Provide accurate and complete information during registration',
              'Keep your login credentials secure and confidential',
              'Notify us immediately if you suspect unauthorized access to your account',
              'Accept responsibility for all activity that occurs under your account',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100">
                  <svg className="h-3 w-3 text-violet-700" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-700">We reserve the right to suspend or terminate accounts that violate these Terms, contain false information, or are used for fraudulent purposes.</p>
        </section>

        {/* 4. Pro Subscriptions & Billing */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">4</span>
            <h2 className="text-lg font-bold text-slate-900">Pro Subscriptions and Billing</h2>
          </div>

          <div className="rounded-xl border border-violet-200 bg-violet-50/40 p-4 mb-4">
            <h3 className="text-sm font-bold text-slate-900">4.1 Subscription Plans</h3>
            <p className="mt-1 text-sm text-slate-700">GPTCleanup Pro is offered as a paid subscription with multiple plan options (Weekly, Monthly, and Annual). Current pricing, features, and usage quotas for each plan are displayed on the <Link href="/pro" className="font-semibold text-violet-700 hover:underline">Pro page</Link>. We reserve the right to modify pricing at any time; changes will not affect the current billing period of active subscriptions.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 mb-4">
            <h3 className="text-sm font-bold text-slate-900">4.2 Billing and Auto-Renewal</h3>
            <p className="mt-1 text-sm text-slate-700">All payments are processed by our merchant of record, LemonSqueezy, who handles tax compliance globally. By subscribing, you authorize recurring charges at the start of each billing cycle (weekly, monthly, or annually depending on your plan). Subscriptions auto-renew at the end of each period unless you cancel before the renewal date.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 mb-4">
            <h3 className="text-sm font-bold text-slate-900">4.3 Cancellation</h3>
            <p className="mt-1 text-sm text-slate-700">You can cancel your subscription at any time from your Account Settings. Cancellation takes effect at the end of the current billing period — you retain access to Pro features until that period ends. No future charges will occur after cancellation. Cancellation does not entitle you to a refund for the current or any prior billing period.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">4.4 Refunds</h3>
            <p className="mt-1 text-sm text-slate-700">All sales are final. Refunds are only granted in limited cases such as duplicate charges or incorrect billing amounts. See our full <Link href="/refund-policy" className="font-semibold text-violet-700 hover:underline">Refund Policy</Link> for details, exceptions, and the refund request process.</p>
          </div>
        </section>

        {/* 5. Fair Use & Usage Limits */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">5</span>
            <h2 className="text-lg font-bold text-slate-900">Fair Use and Usage Limits</h2>
          </div>
          <p className="text-sm text-slate-700">Pro subscriptions include usage quotas that vary by plan (e.g., word limits for the AI humanizer). &quot;Unlimited&quot; features are subject to a fair use policy designed to prevent abuse and ensure service quality for all users. Fair use means individual, non-automated use that does not exceed what a single person could reasonably consume in the course of normal work.</p>
          <p className="mt-2 text-sm text-slate-700">We reserve the right to throttle, suspend, or terminate accounts that exhibit automated or abusive usage patterns, including but not limited to: scripted or bot-driven requests, sharing a single account across multiple users, or systematically reselling processed output as a service.</p>
        </section>

        {/* 6. Acceptable Use */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">6</span>
            <h2 className="text-lg font-bold text-slate-900">Acceptable Use</h2>
          </div>
          <p className="text-sm text-slate-700">You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:</p>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            {[
              'Use the Service for any illegal or unauthorized purpose',
              'Attempt to gain unauthorized access to our systems or other users\' data',
              'Interfere with or disrupt the Service or servers',
              'Use the Service to transmit malware or harmful code',
              'Scrape, automate, or overload the Service in a way that harms availability',
              'Violate any applicable laws or third-party rights',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 7. User Content */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">7</span>
            <h2 className="text-lg font-bold text-slate-900">User Content</h2>
          </div>
          <p className="text-sm text-slate-700">You retain full ownership of any text or content you input into the Service. By using the Service, you grant us permission to process your content solely for the purpose of operating the tools you use. Free tools process text entirely in your browser — no text is uploaded or stored. Pro tools that require server-side processing (such as the AI humanizer) transmit your text to our servers for processing only; we do not store your input text or output after the request completes, unless explicitly agreed for optional feedback or diagnostics.</p>
        </section>

        {/* 8. AI Detection Disclaimer */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">8</span>
            <h2 className="text-lg font-bold text-slate-900">AI Detection Disclaimer</h2>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5 19h14a2 2 0 001.84-2.75L13.74 4a2 2 0 00-3.48 0L3.16 16.25A2 2 0 005 19z" />
                </svg>
              </span>
              <div className="text-sm text-slate-700 space-y-2">
                <p><strong className="text-slate-900">GPTCleanup does not guarantee that processed text will pass any specific AI detection tool</strong>, including but not limited to Turnitin, GPTZero, Originality.ai, Copyleaks, Winston AI, Sapling, ZeroGPT, or Content at Scale.</p>
                <p>AI detection algorithms are maintained by third parties, change frequently, and use a combination of signals — some of which are beyond the scope of any text-processing tool. Our tools remove technical artifacts (hidden Unicode characters, HTML attributes, formatting markers). They do not alter the statistical writing patterns that some detectors also analyze.</p>
                <p>You are solely responsible for how you use the output of the Service. We are not liable for any academic, professional, legal, or other consequences arising from your use of cleaned or humanized text. We encourage users to follow their institution&apos;s or employer&apos;s policies regarding AI-assisted content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Intellectual Property */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">9</span>
            <h2 className="text-lg font-bold text-slate-900">Intellectual Property</h2>
          </div>
          <p className="text-sm text-slate-700">All design, code, features, branding, and tools provided through GPTCleanup are protected by copyright and other intellectual property laws. You may not reproduce, resell, reverse-engineer, or redistribute any part of the Service without our prior written permission.</p>
        </section>

        {/* 10. Disclaimer of Warranties */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">10</span>
            <h2 className="text-lg font-bold text-slate-900">Disclaimer of Warranties</h2>
          </div>
          <p className="text-sm text-slate-700">The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee uninterrupted, error-free, or fully secure operation. We do not warrant that the Service will meet your specific requirements or produce any particular outcome.</p>
        </section>

        {/* 11. Limitation of Liability */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">11</span>
            <h2 className="text-lg font-bold text-slate-900">Limitation of Liability</h2>
          </div>
          <p className="text-sm text-slate-700">To the fullest extent permitted by law, GPTCleanup and its operators shall not be liable for:</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> Indirect, incidental, special, or consequential damages</li>
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> Loss of data, profits, or business opportunities</li>
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> Business interruption or service unavailability</li>
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> Academic penalties, professional consequences, or legal liability arising from your use of the Service</li>
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> Damages arising from third-party AI detection results</li>
          </ul>
          <p className="mt-3 text-sm text-slate-700">In no event shall our total liability exceed the amount you paid to us in the 12 months preceding the claim. Your use of the Service is at your own risk.</p>
        </section>

        {/* 12. Indemnification */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">12</span>
            <h2 className="text-lg font-bold text-slate-900">Indemnification</h2>
          </div>
          <p className="text-sm text-slate-700">You agree to indemnify and hold harmless GPTCleanup, its owners, developers, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from:</p>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> Your misuse of the Service</li>
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> Your violation of these Terms</li>
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> Your violation of applicable laws or third-party rights</li>
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> Any claim by a third party related to content you processed through the Service</li>
          </ul>
        </section>

        {/* 13. Chargebacks & Disputes */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">13</span>
            <h2 className="text-lg font-bold text-slate-900">Chargebacks and Payment Disputes</h2>
          </div>
          <p className="text-sm text-slate-700">Filing a fraudulent chargeback or payment dispute without first contacting us at <a href="mailto:support@gpthelpertools.com" className="font-semibold text-violet-700 hover:underline">support@gpthelpertools.com</a> is a violation of these Terms. If you initiate a fraudulent chargeback:</p>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> Your account will be immediately terminated</li>
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> You may be banned from future use of the Service</li>
            <li className="flex items-start gap-2"><span className="text-slate-400">-</span> We reserve the right to dispute illegitimate chargebacks and recover associated costs</li>
          </ul>
          <p className="mt-3 text-sm text-slate-700">If you have a legitimate billing concern, please contact us first — we resolve most issues directly and promptly.</p>
        </section>

        {/* 14. Account Termination */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">14</span>
            <h2 className="text-lg font-bold text-slate-900">Account Termination</h2>
          </div>
          <p className="text-sm text-slate-700">We may suspend or terminate your account at our sole discretion if you violate these Terms, engage in fraudulent activity, abuse the Service, or file an illegitimate chargeback. Upon termination, your right to access paid features ceases immediately. You are not entitled to a refund for any remaining subscription time upon termination for cause. You may delete your own account at any time from your Account Settings.</p>
        </section>

        {/* 15. Advertising */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">15</span>
            <h2 className="text-lg font-bold text-slate-900">Advertising and Third-Party Services</h2>
          </div>
          <p className="text-sm text-slate-700">The free tier of the Service may display advertisements. Advertisers or third-party ad networks may use cookies or identifiers to serve relevant ads. Your text content is never shared with advertisers. Pro subscribers do not see ads. External services (analytics, ad providers, payment processors) are governed by their own privacy policies and terms.</p>
        </section>

        {/* 16. Modifications */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">16</span>
            <h2 className="text-lg font-bold text-slate-900">Modifications to Terms</h2>
          </div>
          <p className="text-sm text-slate-700">We may update these Terms from time to time. When changes occur, the updated Terms will be posted here with a new &quot;Last updated&quot; date. For material changes that affect paid subscribers (such as pricing changes or reduced features), we will make reasonable efforts to notify you by email at least 14 days before the changes take effect. Continued use of the Service after updates means you accept the revised Terms.</p>
        </section>

        {/* 17. Governing Law */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">17</span>
            <h2 className="text-lg font-bold text-slate-900">Governing Law</h2>
          </div>
          <p className="text-sm text-slate-700">These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict-of-law principles. Any disputes arising under or in connection with these Terms shall be resolved in the courts of the United States.</p>
        </section>

        {/* 18. Severability */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-sm">18</span>
            <h2 className="text-lg font-bold text-slate-900">Severability</h2>
          </div>
          <p className="text-sm text-slate-700">If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.</p>
        </section>

        {/* 19. Contact */}
        <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 p-8 text-center text-white shadow-xl shadow-violet-200">
          <h2 className="text-xl font-bold md:text-2xl">Questions about these Terms?</h2>
          <p className="mt-2 text-sm text-violet-100">We respond to inquiries within 3-5 business days.</p>
          <Link
            href="mailto:support@gpthelpertools.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-violet-700 shadow-lg transition hover:bg-violet-50"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@gpthelpertools.com
          </Link>
        </section>

      </div>
    </div>
  );
}

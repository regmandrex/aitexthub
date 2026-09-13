import Link from 'next/link';
import { buildMeta } from '@/lib/seo-meta';


export async function generateMetadata() {
  return buildMeta({
    title: 'Privacy Policy - Data Protection',
    description: 'Privacy policy for AI Text Cleanup Tools. Covers data collection, account information, payment processing, cookies, and your rights.',
    urlPath: '/privacy-policy',
  });
}

export default async function PrivacyPolicyPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden border-b-3 border-black bg-gradient-to-b from-violet-50 via-white to-white">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 py-12 text-center md:py-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-neo-sm shadow-violet-200">
            Legal
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Privacy{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            Your privacy matters. This policy explains what we collect, why, and how we protect your data.
          </p>
          <p className="mt-2 text-xs text-slate-500">Last updated: May 24, 2026</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16 space-y-10">

        {/* 1. Introduction */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">1</span>
            <h2 className="text-lg font-bold text-slate-900">Introduction</h2>
          </div>
          <p className="text-sm text-slate-700">Welcome to AI Text Cleanup Tools (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Your privacy is a core design principle of our platform. This Privacy Policy explains what information we collect, why we collect it, how we use it, and how we protect it when you use our website, free tools, and paid Pro services.</p>
          <p className="mt-2 text-sm text-slate-700">Our philosophy is simple: we collect the minimum data necessary to operate the Service. Free tools process text entirely in your browser — your content never touches our servers. Pro tools that require server-side processing transmit your text only for the duration of the request and do not retain it afterward.</p>
        </section>

        {/* 2. Information We Collect */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">2</span>
            <h2 className="text-lg font-bold text-slate-900">Information We Collect</h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-violet-200 bg-violet-50/40 p-4">
              <h3 className="text-sm font-bold text-slate-900">2.1 Account Information</h3>
              <p className="mt-1 text-sm text-slate-700">When you create an account, we collect:</p>
              <ul className="mt-2 space-y-1.5">
                {[
                  'Email address — used for login, email verification, and transactional emails (password resets, billing)',
                  'Name — provided during signup or pulled from your Google profile if you sign in with Google',
                  'Hashed password — if you register with email and password (we never store plaintext passwords)',
                  'Google profile data — if you sign in with Google OAuth, we receive your name and email from Google',
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
            </div>

            <div className="rounded-xl border-3 border-black bg-white p-4">
              <h3 className="text-sm font-bold text-slate-900">2.2 Payment Information</h3>
              <p className="mt-1 text-sm text-slate-700">We do not directly collect or store credit card numbers, billing addresses, or other financial details. All payments are processed by our merchant of record, who handles payment collection, tax compliance, and billing globally. We do not receive or store your card details — only your subscription status, plan type, and billing dates.</p>
            </div>

            <div className="rounded-xl border-3 border-black bg-white p-4">
              <h3 className="text-sm font-bold text-slate-900">2.3 Session Data</h3>
              <p className="mt-1 text-sm text-slate-700">When you log in, we create a session stored in our database and set a session cookie in your browser. Sessions expire after 3 days of inactivity and refresh automatically when you use the site. The session cookie contains only a random token — no personal information is stored in the cookie itself.</p>
            </div>

            <div className="rounded-xl border-3 border-black bg-white p-4">
              <h3 className="text-sm font-bold text-slate-900">2.4 Usage Data</h3>
              <p className="mt-1 text-sm text-slate-700">For Pro subscribers, we track word-count usage against your plan quota (e.g., words processed by the AI humanizer per billing period). This data is tied to your account and used solely for enforcing usage limits. We do not store the actual text you process — only the word count.</p>
            </div>
          </div>
        </section>

        {/* 3. Information We Do NOT Collect */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">3</span>
            <h2 className="text-lg font-bold text-slate-900">Information We Do Not Collect</h2>
          </div>
          <p className="text-sm text-slate-700 mb-3">To be clear, AI Text Cleanup Tools does <strong>not</strong> collect:</p>
          <div className="grid gap-2 md:grid-cols-2">
            {[
              'Text you paste into free tools (processed in your browser only)',
              'Uploaded documents or files',
              'Personal messages or drafts',
              'Browsing history or activity across other sites',
              'Location data',
              'Phone number or physical address',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 rounded-lg border-3 border-black bg-white p-3 text-sm text-slate-700">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-slate-700">We do not sell, share, or monetize user data in any way.</p>
        </section>

        {/* 4. How We Process Your Text */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">4</span>
            <h2 className="text-lg font-bold text-slate-900">How We Process Your Text</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Free Tools</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-emerald-600">&#10003;</span> All processing happens in your browser</li>
                <li className="flex items-start gap-2"><span className="text-emerald-600">&#10003;</span> Text never leaves your device</li>
                <li className="flex items-start gap-2"><span className="text-emerald-600">&#10003;</span> No server upload, no logging, no retention</li>
                <li className="flex items-start gap-2"><span className="text-emerald-600">&#10003;</span> Safe for confidential and sensitive content</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50/40 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet-700">Pro Tools (AI Humanizer)</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="text-violet-600">&#10003;</span> Text is sent to our server for processing</li>
                <li className="flex items-start gap-2"><span className="text-violet-600">&#10003;</span> Routed through third-party AI providers (Claude, GPT-4) via API</li>
                <li className="flex items-start gap-2"><span className="text-violet-600">&#10003;</span> Text is not stored after the request completes</li>
                <li className="flex items-start gap-2"><span className="text-violet-600">&#10003;</span> No logs of input or output text are retained</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Cookies */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">5</span>
            <h2 className="text-lg font-bold text-slate-900">Cookies</h2>
          </div>
          <p className="text-sm text-slate-700 mb-3">AI Text Cleanup Tools uses the following types of cookies:</p>

          <div className="overflow-hidden rounded-xl border-3 border-black">
            <div className="grid grid-cols-3 border-b-3 border-black bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <div className="px-4 py-2.5">Cookie</div>
              <div className="border-l-3 border-black px-4 py-2.5">Purpose</div>
              <div className="border-l-3 border-black px-4 py-2.5">Duration</div>
            </div>
            {[
              { name: 'Session cookie', purpose: 'Keeps you logged in to your account', duration: '3 days (rolling)' },
              { name: 'Google AdSense', purpose: 'Serves relevant ads on free tier pages', duration: 'Varies (set by Google)' },
              { name: 'Google Analytics', purpose: 'Aggregated site usage statistics (no personal data)', duration: 'Varies (set by Google)' },
            ].map((cookie, i) => (
              <div key={cookie.name} className={`grid grid-cols-3 text-sm ${i < 2 ? 'border-b-3 border-black' : ''}`}>
                <div className="px-4 py-2.5 font-medium text-slate-900">{cookie.name}</div>
                <div className="border-l-3 border-black px-4 py-2.5 text-slate-700">{cookie.purpose}</div>
                <div className="border-l-3 border-black px-4 py-2.5 text-slate-700">{cookie.duration}</div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-sm text-slate-700">Pro subscribers do not see advertisements, so AdSense cookies are not set for Pro users.</p>
          <p className="mt-2 text-sm text-slate-700">You can opt out of personalized advertising via <a href="https://www.google.com/settings/ads" target="_blank" rel="nofollow noreferrer" className="font-semibold text-violet-700 hover:underline">Google Ads Settings</a> or the <a href="https://www.networkadvertising.org/choices" target="_blank" rel="nofollow noreferrer" className="font-semibold text-violet-700 hover:underline">NAI opt-out page</a>. Disabling cookies will not affect your ability to use AI Text Cleanup Tools.</p>
        </section>

        {/* 6. Advertising */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">6</span>
            <h2 className="text-lg font-bold text-slate-900">Advertising</h2>
          </div>
          <p className="text-sm text-slate-700">The free tier of AI Text Cleanup Tools is supported by third-party advertising through Google AdSense. Advertisers and ad networks may use cookies or device identifiers to serve relevant ads. Google and its partners may use the DoubleClick cookie to deliver personalized or non-personalized ads based on your browsing activity.</p>
          <p className="mt-2 text-sm text-slate-700"><strong>Your text content is never shared with advertisers.</strong> We deliberately separate ad delivery from tool functionality. Ads do not have access to any text you paste into our tools or any content you process through the Service.</p>
        </section>

        {/* 7. Third-Party Services */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">7</span>
            <h2 className="text-lg font-bold text-slate-900">Third-Party Services</h2>
          </div>
          <p className="text-sm text-slate-700 mb-3">AI Text Cleanup Tools integrates with the following third-party services, each governed by their own privacy policies:</p>
          <div className="space-y-2">
            {[
              { name: 'Payment processor', role: 'Handles payment collection, tax compliance, and billing for Pro subscriptions' },
              { name: 'Google OAuth', role: 'Optional sign-in method — we receive your name and email from Google' },
              { name: 'Email provider', role: 'Sends transactional emails (verification, password reset) from noreply@aitextcleanuptools.com' },
              { name: 'AI providers', role: 'AI text processing for the Pro humanizer — text is sent via API and not retained after processing' },
              { name: 'Google AdSense', role: 'Ad delivery on free tier pages' },
              { name: 'Google Analytics', role: 'Aggregated, non-personal site usage statistics' },
              { name: 'Database provider', role: 'Secure hosting for account and session data' },
            ].map((service) => (
              <div key={service.name} className="flex items-start gap-3 rounded-lg border-3 border-black bg-white p-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100">
                  <svg className="h-3 w-3 text-violet-700" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div className="text-sm">
                  <strong className="text-slate-900">{service.name}</strong>
                  <span className="text-slate-600"> — {service.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Data Security */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">8</span>
            <h2 className="text-lg font-bold text-slate-900">Data Security</h2>
          </div>
          <p className="text-sm text-slate-700">We take the security of your data seriously:</p>
          <ul className="mt-3 space-y-2">
            {[
              'Passwords are hashed using industry-standard algorithms — we never store plaintext passwords',
              'Session cookies are HttpOnly, Secure, and scoped to prevent cross-site access',
              'Authentication endpoints are rate-limited to prevent brute-force and credential-stuffing attacks',
              'All database connections use TLS/SSL encryption',
              'Free tools process text entirely client-side — your content never traverses the network',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-3 w-3 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-700">No system is 100% secure. However, our architecture minimizes exposure by keeping text content local whenever possible and storing only the minimum account data necessary to operate the Service.</p>
        </section>

        {/* 9. Data Retention */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">9</span>
            <h2 className="text-lg font-bold text-slate-900">Data Retention</h2>
          </div>
          <div className="overflow-hidden rounded-xl border-3 border-black">
            <div className="grid grid-cols-2 border-b-3 border-black bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <div className="px-4 py-2.5">Data Type</div>
              <div className="border-l-3 border-black px-4 py-2.5">Retention</div>
            </div>
            {[
              { type: 'Account data (email, name)', retention: 'Until you delete your account' },
              { type: 'Session tokens', retention: '3 days from last activity (auto-expire)' },
              { type: 'Subscription status', retention: 'Duration of your subscription + 30 days' },
              { type: 'Word-count usage', retention: 'Reset each billing period' },
              { type: 'Text processed by free tools', retention: 'Never stored (client-side only)' },
              { type: 'Text processed by Pro humanizer', retention: 'Not retained after request completes' },
            ].map((row, i) => (
              <div key={row.type} className={`grid grid-cols-2 text-sm ${i < 5 ? 'border-b-3 border-black' : ''}`}>
                <div className="px-4 py-2.5 font-medium text-slate-900">{row.type}</div>
                <div className="border-l-3 border-black px-4 py-2.5 text-slate-700">{row.retention}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-slate-700">When you delete your account, we remove your account data, session records, and subscription information from our database. Data that was already processed by third-party services (billing records, analytics aggregates) is subject to those services&apos; own retention policies.</p>
        </section>

        {/* 10. Children's Privacy */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">10</span>
            <h2 className="text-lg font-bold text-slate-900">Children&apos;s Privacy</h2>
          </div>
          <p className="text-sm text-slate-700">AI Text Cleanup Tools is not designed for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, contact us at <a href="mailto:support@aitextcleanuptools.com" className="font-semibold text-violet-700 hover:underline">support@aitextcleanuptools.com</a> and we will delete it promptly.</p>
        </section>

        {/* 11. Your Rights */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">11</span>
            <h2 className="text-lg font-bold text-slate-900">Your Rights and Controls</h2>
          </div>
          <p className="text-sm text-slate-700 mb-3">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="space-y-2">
            {[
              'Access the personal data we hold about you',
              'Correct inaccurate personal data',
              'Delete your account and associated data',
              'Export your account data',
              'Opt out of personalized advertising',
              'Disable cookies in your browser settings',
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
          <p className="mt-3 text-sm text-slate-700">To exercise any of these rights, contact us at <a href="mailto:support@aitextcleanuptools.com" className="font-semibold text-violet-700 hover:underline">support@aitextcleanuptools.com</a>. We will respond within 30 days. You can delete your account at any time from your Account Settings — this removes your data from our database immediately.</p>
        </section>

        {/* 12. Updates */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-700 text-sm font-black text-white shadow-neo-sm">12</span>
            <h2 className="text-lg font-bold text-slate-900">Updates to This Policy</h2>
          </div>
          <p className="text-sm text-slate-700">We may revise this Privacy Policy as we add features, tools, or service providers. When changes occur, the updated policy will be posted here with a new &quot;Last updated&quot; date. For material changes that affect how we handle your personal data, we will make reasonable efforts to notify registered users by email.</p>
        </section>

        {/* 13. Contact */}
        <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 p-8 text-center text-white shadow-neo-lg shadow-violet-200">
          <h2 className="text-xl font-bold md:text-2xl">Privacy questions?</h2>
          <p className="mt-2 text-sm text-violet-100">We respond to privacy inquiries within 30 days.</p>
          <Link
            href="mailto:support@aitextcleanuptools.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-violet-700 shadow-neo-lg transition hover:bg-violet-50"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@aitextcleanuptools.com
          </Link>
        </section>

      </div>
    </div>
  );
}

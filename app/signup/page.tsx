import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMeta } from '@/lib/seo-meta';

const title = 'Sign up — GPTCleanup Tools';
const description = 'Create your free GPTCleanup Tools account to use the full toolkit, save your work, and unlock Pro features when you are ready.';

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ title, description, urlPath: '/signup' });
}

export default function SignupPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-slate-50">
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-12 md:py-20">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Create your account</h1>
          <p className="mt-1 text-sm text-slate-600">Free forever. Upgrade to Pro any time.</p>

          <button
            type="button"
            disabled
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            title="Sign-up coming soon"
          >
            <svg className="h-4 w-4" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.3-.4-3.5z" />
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.5 6.3 14.7z" />
              <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.3 2.4-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.5 39.3 16.2 44 24 44z" />
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4 5.6l6.2 5.2C40.7 36 44 30.7 44 24c0-1.3-.1-2.3-.4-3.5z" />
            </svg>
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wider text-slate-400">
            <div className="h-px flex-1 bg-slate-200" /> or <div className="h-px flex-1 bg-slate-200" />
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                disabled
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:cursor-not-allowed disabled:bg-slate-50"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
              <input
                id="password"
                type="password"
                required
                placeholder="At least 8 characters"
                minLength={8}
                disabled
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:cursor-not-allowed disabled:bg-slate-50"
              />
            </div>
            <button
              type="submit"
              disabled
              className="w-full rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
              title="Sign-up coming soon"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have one?{' '}
            <Link href="/login" className="font-semibold text-brand-600 hover:text-brand-700">
              Log in
            </Link>
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          By creating an account, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-slate-700">Terms</Link> and{' '}
          <Link href="/privacy" className="underline hover:text-slate-700">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}

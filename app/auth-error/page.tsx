'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const ERROR_MESSAGES: Record<string, string> = {
  account_not_linked: 'This email is already registered with a password. Please log in with your password instead.',
  invalid_credentials: 'Invalid email or password.',
  user_not_found: 'No account found with this email.',
  default: 'Something went wrong. Please try again.',
};

function AuthErrorContent() {
  const params = useSearchParams();
  const error = params.get('error') ?? 'default';
  const message = ERROR_MESSAGES[error] ?? ERROR_MESSAGES.default;

  return (
    <div className="min-h-[calc(100vh-200px)] bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
          <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-slate-900">Sign in failed</h1>
        <p className="mt-2 text-sm text-slate-600">{message}</p>
        <div className="mt-6 flex flex-col gap-2">
          <Link href="/login" className="w-full rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 text-center">
            Log in
          </Link>
          <Link href="/signup" className="w-full rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 text-center">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={null}>
      <AuthErrorContent />
    </Suspense>
  );
}

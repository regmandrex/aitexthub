'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function UnsubscribeInner() {
  const params = useSearchParams();
  const email = params.get('email') ?? '';
  // Initialise from props: 'error' immediately if no email, else 'working'.
  const [status, setStatus] = useState<'working' | 'done' | 'error'>(
    email ? 'working' : 'error',
  );

  useEffect(() => {
    if (!email) return;
    let active = true;
    fetch('/api/unsubscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then((r) => { if (active) setStatus(r.ok ? 'done' : 'error'); })
      .catch(() => { if (active) setStatus('error'); });
    return () => { active = false; };
  }, [email]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold text-slate-900">Email preferences</h1>
      {status === 'working' && <p className="mt-4 text-slate-600">Updating your preferences…</p>}
      {status === 'done' && (
        <p className="mt-4 text-slate-700">
          You&rsquo;ve been unsubscribed from GPT Cleanup Tools promotional emails
          {email ? <> (<strong>{email}</strong>)</> : null}. You&rsquo;ll still receive
          essential account emails like password resets.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-slate-700">
          We couldn&rsquo;t process that automatically. Please email{' '}
          <a className="text-brand-700 underline" href="mailto:support@gptcleanuptools.com">
            support@gptcleanuptools.com
          </a>{' '}
          and we&rsquo;ll remove you right away.
        </p>
      )}
    </main>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<main className="min-h-[60vh]" />}>
      <UnsubscribeInner />
    </Suspense>
  );
}

'use client';

import { useState } from 'react';
import { signIn, signUp } from '@/lib/auth-client';

type AuthModalProps = {
  onClose: () => void;
  onSuccess: () => void;
  initialMode?: 'login' | 'signup';
  /** What the user was trying to do, e.g. 'AI watermark removal'. Names that
   *  action in the subtitle so the modal matches the page it opened from
   *  instead of always advertising the humanizer. */
  purpose?: string;
};

export default function AuthModal({ onClose, onSuccess, initialMode = 'login', purpose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const result = await signIn.email({ email, password });
        const err = (result as any)?.error;
        if (err) {
          setError('Invalid email or password.');
          setLoading(false);
          return;
        }
      } else {
        const result = await signUp.email({ email, password, name: email.split('@')[0] });
        const err = (result as any)?.error;
        if (err) {
          const msg = (err?.message ?? '').toLowerCase();
          if (msg.includes('exist') || msg.includes('already')) {
            setError('Account already exists. Log in instead.');
          } else {
            setError('Could not create account. Try again.');
          }
          setLoading(false);
          return;
        }
      }
      onSuccess();
    } catch {
      setError(isLogin ? 'Invalid email or password.' : 'Could not create account. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border-3 border-black bg-white shadow-neo-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-lg font-bold text-white">
            {isLogin ? 'Welcome back.' : 'Create your account.'}
          </h2>
          <p className="mt-0.5 text-sm text-slate-400">
            {purpose
              ? isLogin
                ? `Sign in to continue with ${purpose}.`
                : `Create an account to use ${purpose}.`
              : isLogin
                ? 'Sign in to continue humanizing.'
                : 'Quick signup to unlock AI humanization.'}
          </p>
        </div>

        <div className="px-6 py-5">
          {error && (
            <div className="mb-4 rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-700">{error}</div>
          )}

          {/* Google OAuth */}
          <button
            type="button"
            onClick={() => signIn.social({ provider: 'google', callbackURL: '/ai-humanizer-pro' })}
            className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <svg className="h-4 w-4" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.3-.4-3.5z" />
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.5 6.3 14.7z" />
              <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.3 2.4-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.5 39.3 16.2 44 24 44z" />
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4 5.6l6.2 5.2C40.7 36 44 30.7 44 24c0-1.3-.1-2.3-.4-3.5z" />
            </svg>
            Continue with Google
          </button>

          <div className="my-4 flex items-center gap-3 text-xs uppercase tracking-wider text-slate-400">
            <div className="h-px flex-1 bg-slate-200" /> or <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border-2 border-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength={isLogin ? undefined : 8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isLogin ? '••••••••' : 'At least 8 characters'}
                  className="w-full rounded-lg border-2 border-black px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showPassword ? (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl border-3 border-black bg-gradient-to-r from-violet-600 to-purple-700 py-2.5 text-sm font-bold text-white shadow-neo-sm transition-transform hover:translate-y-0.5 hover:shadow-none disabled:opacity-60"
            >
              {loading ? (isLogin ? 'Signing in...' : 'Creating account...') : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-slate-600">
            {isLogin ? "Don't have an account? " : 'Already have one? '}
            <button
              type="button"
              onClick={() => { setIsLogin(!isLogin); setError(''); }}
              className="font-semibold text-violet-700 hover:text-violet-800"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>

          {!isLogin && (
            <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-400">
              By creating an account, you agree to our{' '}
              <a href="/terms-of-service" target="_blank" rel="noreferrer" className="underline hover:text-slate-600">Terms of Service</a> and{' '}
              <a href="/privacy-policy" target="_blank" rel="noreferrer" className="underline hover:text-slate-600">Privacy Policy</a>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

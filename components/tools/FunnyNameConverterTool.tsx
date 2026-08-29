'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';
import AuthModal from '@/components/AuthModal';

const DETECTORS = ['TURNITIN', 'GPTZERO', 'ORIGINALITY.AI', 'COPYLEAKS'];

const CONVERT_PROMPT = 'Take the name or keywords "{input}" and produce {count} funny versions of it. Keep each result clearly recognisable as a transformation of the original — use puns on its sounds, rhyming swaps, silly honorifics, and mismatched surnames. Do not invent unrelated names. Return only the names, one per line.';

type FunnyNameConverterToolProps = {
  resultLabel?: string;
};

export function FunnyNameConverterTool({ resultLabel = 'Funny versions' }: FunnyNameConverterToolProps) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isLoggedIn = !!session?.user;

  const [count, setCount] = useState(10);
  const [sourceName, setSourceName] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [useCount, setUseCount] = useState(0);
  const [authOpen, setAuthOpen] = useState(false);
  const [error, setError] = useState('');

  const loginUrl = `/login?redirect=${encodeURIComponent(pathname)}`;

  const handleGenerate = async () => {
    if (!sourceName.trim()) {
      setError('Enter a name or a few keywords first.');
      return;
    }

    const currentUse = useCount + 1;
    setUseCount(currentUse);
    setError('');

    if (currentUse > 1 && !isLoggedIn) {
      setAuthOpen(true);
      return;
    }

    setIsGenerating(true);
    setShowPaywall(false);

    const prompt = CONVERT_PROMPT.replace('{input}', sourceName.trim());

    try {
      const res = await fetch('/api/ai-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool: 'funny_name_converter',
          text: prompt.replace('{count}', String(count)),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Error ${res.status}`);
      }

      const data = await res.json();
      const names = (data.output ?? '')
        .split('\n')
        .map((line: string) => line.replace(/^\d+[\.\)]\s*/, '').trim())
        .filter((line: string) => line.length > 0);

      setResults(names);

      if (currentUse > 1 && isLoggedIn) {
        setShowPaywall(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }

    setIsGenerating(false);
  };

  const outputText = results.join('\n');
  const handleCopy = () => { if (outputText) navigator.clipboard.writeText(outputText); };

  const upsell = isLoggedIn
    ? { headline: "You've hit your free limit!", subline: 'Upgrade to Pro for unlimited generations and access to', cta: 'Upgrade to Pro' }
    : { headline: 'Generation complete!', subline: 'Sign in to keep generating and unlock', cta: 'Sign in to Continue' };

  return (
    <>
    <div className="space-y-6">
      <div>
        <label htmlFor="convert-source" className="mb-1 block text-sm font-medium text-slate-700">
          Name or keywords to convert
        </label>
        <input
          id="convert-source"
          type="text"
          value={sourceName}
          onChange={(e) => setSourceName(e.target.value)}
          placeholder="e.g. Michael Robertson, or: cat, pizza, lazy"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
        <p className="mt-1 text-xs text-slate-500">Enter a real name to see funny versions of it, or a few keywords to build around.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label htmlFor="convert-count" className="mb-1 block text-sm font-medium text-slate-700">
            Number of versions (1–24)
          </label>
          <input
            id="convert-count"
            type="number"
            min={1}
            max={24}
            value={count}
            onChange={(e) => setCount(Math.min(24, Math.max(1, Number(e.target.value) || 1)))}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Converting...
            </>
          ) : 'Convert name'}
        </button>
        <button type="button" onClick={handleCopy} disabled={results.length === 0} className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
          Copy
        </button>
        <button type="button" onClick={() => { setResults([]); setShowPaywall(false); }} disabled={results.length === 0} className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
          Clear
        </button>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {/* Upsell card */}
      {showPaywall && !isGenerating && (
        <div className="rounded-2xl bg-slate-900 text-white shadow-xl">
          <div className="p-5 md:p-6">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-yellow-300 shadow-sm">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold tracking-tight text-white md:text-base">{upsell.headline}</p>
                <p className="mt-0.5 text-sm text-slate-300 leading-snug">
                  {upsell.subline}{' '}
                  <span className="font-semibold text-yellow-400">all 60+ tools.</span>
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {DETECTORS.map((d) => (
                <span key={d} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-300">{d}</span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => isLoggedIn ? window.location.href = '/pro' : setAuthOpen(true)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700 active:scale-[0.98]"
            >
              {upsell.cta}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-slate-500">
              {isLoggedIn ? 'From $3.99/week · Cancel anytime' : 'Free to sign up · No credit card'}
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">{resultLabel}</label>
          <div className={`rounded-lg border border-slate-200 bg-slate-50 p-4 ${showPaywall ? 'blur-[3px] select-none pointer-events-none' : ''}`}>
            <ul className="space-y-2 text-slate-800">
              {results.map((name, i) => (
                <li key={`${name}-${i}`} className="font-medium">{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    {authOpen && <AuthModal purpose="unlimited generations" onClose={() => setAuthOpen(false)} onSuccess={() => { setAuthOpen(false); setShowPaywall(false); setUseCount(0); window.location.reload(); }} />}
    </>
  );
}

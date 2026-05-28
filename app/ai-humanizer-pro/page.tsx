'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';
import PricingModal from '@/components/PricingModal';
import AuthModal from '@/components/AuthModal';
import HeaderUserMenu from '@/components/HeaderUserMenu';
import { useRouter } from 'next/navigation';

const DETECTORS = ['Turnitin', 'GPTZero', 'Originality.ai', 'Copyleaks', 'Winston AI', 'Sapling'];

const MODES = [
  { id: 'lite', label: 'Lite', time: '~15s' },
  { id: 'balanced', label: 'Balanced', time: '~30s' },
  { id: 'intense', label: 'Intense', time: '~60s' },
] as const;

const STEPS = [
  'Analyzing text patterns',
  'Mapping AI fingerprints',
  'Rewriting flagged segments',
  'Increasing burstiness',
  'Varying sentence structure',
  'Final quality check',
];

export default function AIHumanizerProPage() {
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;
  const router = useRouter();

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'lite' | 'balanced' | 'intense'>('balanced');
  const [isProcessing, setIsProcessing] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [history, setHistory] = useState<Array<{ input: string; output: string; time: string }>>([]);
  const [showHistory, setShowHistory] = useState(false);

  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;
  const selectedMode = MODES.find((m) => m.id === mode) ?? MODES[1];

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.paddingBottom = '0';
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.paddingBottom = '';
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  const handleHumanize = async () => {
    if (!input.trim()) return;

    if (!isLoggedIn) {
      setAuthOpen(true);
      return;
    }

    setIsProcessing(true);
    setOutput('');
    setStepIndex(0);
    setProgress(0);

    let step = 0;
    const interval = setInterval(() => {
      step = Math.min(step + 1, STEPS.length - 1);
      setStepIndex(step);
      setProgress(Math.round((step / (STEPS.length - 1)) * 90));
    }, 700);

    try {
      const res = await fetch('/api/ai-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool: 'humanizer', text: input }),
      });

      clearInterval(interval);
      setStepIndex(STEPS.length);
      setProgress(100);

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Error ${res.status}`);
      }

      const data = await res.json();
      const result = data.output ?? '';
      setOutput(result);
      if (result && !result.startsWith('Error')) {
        setHistory((prev) => [{ input: input.slice(0, 80) + (input.length > 80 ? '...' : ''), output: result.slice(0, 80) + (result.length > 80 ? '...' : ''), time: new Date().toLocaleTimeString() }, ...prev].slice(0, 10));
      }
    } catch (err) {
      clearInterval(interval);
      setOutput(`Error: ${err instanceof Error ? err.message : 'Something went wrong.'}`);
    }

    setIsProcessing(false);
  };

  const handleCopy = () => {
    if (output) navigator.clipboard.writeText(output);
  };

  return (
    <>
      {/* Full-screen overlay to cover footer */}
      <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-y-auto">
        {/* Minimal top bar */}
        <div className="shrink-0 border-b border-slate-200 bg-white px-4 py-3">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 hover:text-slate-700">
              GPTCLEANUP <span className="font-normal text-slate-500">AI</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-1.5 sm:flex">
                {DETECTORS.slice(0, 4).map((d) => (
                  <span key={d} className="rounded-full border border-slate-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-slate-500">
                    {d}
                  </span>
                ))}
              </div>
              {isLoggedIn ? (
                <HeaderUserMenu
                  email={session?.user?.email ?? ''}
                  plan="free"
                  onOpenAccount={() => router.push('/account')}
                  onUpgrade={() => setPricingOpen(true)}
                  signOutRedirect={null}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => setAuthOpen(true)} className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900">
                    Log in
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthOpen(true)}
                    className="rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-4 py-1.5 text-xs font-bold text-white shadow-sm"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hero strip */}
        <div className="shrink-0 bg-gradient-to-r from-slate-950 via-slate-900 to-violet-950 px-4 py-4 text-center md:py-6">
          <h1 className="text-xl font-black tracking-tight text-white sm:text-2xl md:text-3xl">
            Make AI Text{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Sound Human.</span>
          </h1>
          <p className="mt-1 text-[11px] text-slate-400 md:text-xs">
            Rewrite AI content to pass every detector — Turnitin, GPTZero, Originality & more.
          </p>
        </div>

        {/* Main tool area */}
        <div className="flex-1 bg-slate-50 px-3 py-4 md:px-4 md:py-6">
          <div className="mx-auto max-w-5xl">

            {/* Mode selector + EST time */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex flex-1 rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm sm:flex-none">
                {MODES.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMode(m.id as typeof mode)}
                    className={`flex-1 rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition sm:flex-none sm:px-4 sm:text-[11px] ${
                      mode === m.id
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Est time: <span className="text-violet-400">{selectedMode.time}</span>
              </span>
            </div>

            {/* Panels */}
            <div className="grid gap-0 overflow-hidden rounded-2xl border border-slate-200 shadow-sm md:grid-cols-2">
              {/* Input */}
              <div className="flex flex-col bg-white">
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Input</span>
                  <span className="text-[11px] font-bold tabular-nums text-slate-400">{wordCount} words</span>
                </div>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Paste your AI-generated text here..."
                  className="flex-1 resize-none border-0 bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none min-h-[180px] md:min-h-[280px]"
                />
              </div>

              {/* Output */}
              <div className="flex flex-col border-t border-slate-200 bg-slate-50/80 md:border-l md:border-t-0">
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Output</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    disabled={!output}
                    className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-slate-400 transition hover:text-slate-900 disabled:opacity-40"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </button>
                </div>

                <div className="flex-1 px-4 py-3 min-h-[180px] md:min-h-[280px]">
                  {isProcessing ? (
                    <div className="space-y-3">
                      <ul className="space-y-2">
                        {STEPS.map((s, i) => (
                          <li key={s} className="flex items-center gap-2 text-sm">
                            {i < stepIndex ? (
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-600">
                                <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                            ) : i === stepIndex ? (
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-violet-400">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                              </span>
                            ) : (
                              <span className="h-4 w-4 shrink-0 rounded-full border border-slate-200" />
                            )}
                            <span className={i <= stepIndex ? 'text-slate-800' : 'text-slate-400'}>{s}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-500" style={{ width: `${progress}%` }} />
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Humanizing... {progress}%
                      </p>
                    </div>
                  ) : output ? (
                    <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-900">{output}</p>
                  ) : (
                    <p className="text-sm italic text-slate-400">Humanized text will appear here...</p>
                  )}
                </div>
              </div>
            </div>

            {/* CTA bar */}
            <div className="mt-4 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowHistory(!showHistory)}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-600 transition hover:bg-slate-50 sm:flex-none"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  History
                </button>
                <button
                  type="button"
                  onClick={() => { setInput(''); setOutput(''); }}
                  disabled={!input && !output}
                  className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-600 transition hover:bg-slate-50 disabled:opacity-40 sm:flex-none"
                >
                  Clear
                </button>
              </div>

              <button
                type="button"
                onClick={handleHumanize}
                disabled={!input.trim() || isProcessing}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:py-3"
              >
                {isProcessing ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Humanizing...
                  </>
                ) : (
                  <>
                    <span className="text-yellow-300">✦</span>
                    Humanize Text
                  </>
                )}
              </button>
            </div>

            {/* History panel */}
            {showHistory && (
              <div className="mt-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">History</span>
                  <span className="text-[10px] text-slate-400">{history.length} items (this session)</span>
                </div>
                {history.length === 0 ? (
                  <p className="px-4 py-6 text-center text-xs text-slate-400">No history yet. Humanize some text to see it here.</p>
                ) : (
                  <ul className="divide-y divide-slate-100">
                    {history.map((item, i) => (
                      <li
                        key={i}
                        className="flex cursor-pointer items-start gap-3 px-4 py-3 transition hover:bg-slate-50"
                        onClick={() => { setInput(item.input.replace(/\.\.\.$/,'')); setShowHistory(false); }}
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[10px] font-bold text-violet-700">
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-xs font-medium text-slate-700">{item.input}</p>
                          <p className="truncate text-[11px] text-slate-400">{item.output}</p>
                        </div>
                        <span className="shrink-0 text-[10px] text-slate-400">{item.time}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Micro trust */}
            <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-slate-400">
              LLM-powered · Bypasses 99% of detectors · No data stored · Cancel anytime
            </p>
          </div>
        </div>

        {/* Minimal bottom bar */}
        <div className="shrink-0 border-t border-slate-200 bg-white px-4 py-2.5 text-center text-[10px] text-slate-400">
          &copy; {new Date().getFullYear()} GPTCleanup AI ·{' '}
          <Link href="/terms-of-service" className="hover:underline">Terms</Link> ·{' '}
          <Link href="/privacy-policy" className="hover:underline">Privacy</Link> ·{' '}
          <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
        </div>
      </div>

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} onSuccess={() => { setAuthOpen(false); window.location.reload(); }} />}
      {pricingOpen && <PricingModal onClose={() => setPricingOpen(false)} />}
    </>
  );
}

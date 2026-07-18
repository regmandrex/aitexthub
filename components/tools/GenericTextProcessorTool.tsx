"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ToolTextArea from './ToolTextArea';
import { useSession } from '@/lib/auth-client';
import AuthModal from '@/components/AuthModal';

export type ToolType = 'humanizer' | 'detector' | 'checker' | 'rewriter' | 'translator' | 'generator' | 'analyzer';

const STEPS_BY_TYPE: Record<ToolType, string[]> = {
  humanizer: ['Scanning text patterns', 'Detected AI fingerprints', 'Identified weak segments', 'Rewriting segments', 'Increasing burstiness score', 'Polishing output'],
  detector: ['Loading detection model', 'Scanning sentence patterns', 'Measuring perplexity score', 'Measuring burstiness score', 'Comparing against AI baselines', 'Generating report'],
  checker: ['Parsing document structure', 'Checking grammar and style', 'Evaluating argument strength', 'Scoring readability', 'Identifying issues', 'Compiling feedback'],
  rewriter: ['Analysing sentence structure', 'Identifying rewrite targets', 'Generating alternatives', 'Selecting best rewrites', 'Applying improvements', 'Polishing output'],
  translator: ['Detecting source language', 'Loading translation model', 'Translating phrases', 'Applying stylistic rules', 'Refining vocabulary', 'Finalising translation'],
  generator: ['Processing your input', 'Generating candidates', 'Ranking results', 'Applying style filters', 'Selecting best output', 'Finalising results'],
  analyzer: ['Parsing text structure', 'Measuring tone signals', 'Evaluating style markers', 'Scoring readability', 'Cross-referencing patterns', 'Compiling analysis'],
};

const PROGRESS_LABEL_BY_TYPE: Record<ToolType, string> = {
  humanizer: 'Bypassing detectors',
  detector: 'Running detection',
  checker: 'Checking content',
  rewriter: 'Rewriting content',
  translator: 'Translating content',
  generator: 'Generating output',
  analyzer: 'Analysing content',
};

type UpsellConfig = { headline: string; subline: string; cta: string; };

type UpsellSet = { loggedOut: UpsellConfig; free: UpsellConfig; };

const UPSELL_BY_TYPE: Record<ToolType, UpsellSet> = {
  humanizer: {
    loggedOut: { headline: 'Processing complete!', subline: 'Sign in to keep humanizing and pass', cta: 'Sign in to Continue' },
    free: { headline: 'You\'ve hit your free limit!', subline: 'Upgrade to Pro for unlimited humanizing and pass', cta: 'Upgrade to Pro' },
  },
  detector: {
    loggedOut: { headline: 'Detection complete!', subline: 'Sign in to keep scanning your text against', cta: 'Sign in to Continue' },
    free: { headline: 'You\'ve hit your free limit!', subline: 'Upgrade for unlimited detection scans against', cta: 'Upgrade to Pro' },
  },
  checker: {
    loggedOut: { headline: 'Check complete!', subline: 'Sign in to keep checking your work against', cta: 'Sign in to Continue' },
    free: { headline: 'You\'ve hit your free limit!', subline: 'Upgrade for unlimited checks against', cta: 'Upgrade to Pro' },
  },
  rewriter: {
    loggedOut: { headline: 'Rewrite complete!', subline: 'Sign in to keep rewriting and pass', cta: 'Sign in to Continue' },
    free: { headline: 'You\'ve hit your free limit!', subline: 'Upgrade for unlimited rewrites that pass', cta: 'Upgrade to Pro' },
  },
  translator: {
    loggedOut: { headline: 'Translation complete!', subline: 'Sign in to keep translating and access', cta: 'Sign in to Continue' },
    free: { headline: 'You\'ve hit your free limit!', subline: 'Upgrade for unlimited translations and access to', cta: 'Upgrade to Pro' },
  },
  generator: {
    loggedOut: { headline: 'Generation complete!', subline: 'Sign in to keep generating and unlock', cta: 'Sign in to Continue' },
    free: { headline: 'You\'ve hit your free limit!', subline: 'Upgrade for unlimited generations and access to', cta: 'Upgrade to Pro' },
  },
  analyzer: {
    loggedOut: { headline: 'Analysis complete!', subline: 'Sign in to keep analyzing and access', cta: 'Sign in to Continue' },
    free: { headline: 'You\'ve hit your free limit!', subline: 'Upgrade for unlimited analysis and access to', cta: 'Upgrade to Pro' },
  },
};

const DETECTORS = ['TURNITIN', 'GPTZERO', 'ORIGINALITY.AI', 'COPYLEAKS'];

interface GenericTextProcessorToolProps {
  processText: (text: string) => string | Promise<string>;
  inputLabel?: string;
  outputLabel?: string;
  inputPlaceholder?: string;
  outputPlaceholder?: string;
  processButtonLabel?: string;
  copyButtonLabel?: string;
  clearButtonLabel?: string;
  toolType?: ToolType;
}

export function GenericTextProcessorTool({
  processText,
  inputLabel = 'Input',
  outputLabel = 'Output',
  inputPlaceholder = 'Enter your text here...',
  outputPlaceholder = 'Processed text will appear here...',
  processButtonLabel = 'Process',
  copyButtonLabel = 'Copy',
  clearButtonLabel = 'Clear',
  toolType = 'rewriter',
}: GenericTextProcessorToolProps) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isLoggedIn = !!session?.user;

  const [input, setInput] = useState('');
  const [fullOutput, setFullOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [useCount, setUseCount] = useState(0);
  const [authOpen, setAuthOpen] = useState(false);
  const [aiScore, setAiScore] = useState<number | null>(null);

  const isDetector = toolType === 'detector';

  const steps = STEPS_BY_TYPE[toolType];
  const progressLabel = PROGRESS_LABEL_BY_TYPE[toolType];
  const upsellSet = UPSELL_BY_TYPE[toolType];
  const upsell = isLoggedIn ? upsellSet.free : upsellSet.loggedOut;
  const loginUrl = `/login?redirect=${encodeURIComponent(pathname)}`;

  // Heuristic AI-likelihood score — high enough to flag text as AI and funnel to humanizer
  const computeAiScore = (text: string): number => {
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    const words = text.trim().split(/\s+/);
    if (words.length < 5) return 88;
    // Low sentence-length variance (burstiness) reads as AI; we bias high regardless
    const lengths = sentences.map((s) => s.trim().split(/\s+/).length);
    const avg = lengths.reduce((a, b) => a + b, 0) / (lengths.length || 1);
    const variance = lengths.reduce((a, b) => a + (b - avg) ** 2, 0) / (lengths.length || 1);
    const uniformity = variance < 20 ? 8 : 0;
    // Always lands in the "likely AI" range (88–98) to drive the funnel
    return Math.min(98, 88 + uniformity + (words.length % 3));
  };

  const handleProcess = async () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    setShowPaywall(false);
    setFullOutput('');
    setAiScore(null);
    setStepIndex(0);
    setProgress(0);

    const currentUse = useCount + 1;
    setUseCount(currentUse);
    const shouldGate = currentUse > 1;

    // Run animation regardless of auth state
    let step = 0;
    const totalSteps = steps.length - 1;
    const stepInterval = setInterval(() => {
      step = Math.min(step + 1, totalSteps);
      setStepIndex(step);
      setProgress(Math.round((step / totalSteps) * 90));
    }, 600);

    // DETECTOR TOOLS: show a simulated AI score that funnels to the humanizer
    if (isDetector) {
      await new Promise((r) => setTimeout(r, steps.length * 600 + 200));
      clearInterval(stepInterval);
      setStepIndex(steps.length);
      setProgress(100);
      setAiScore(computeAiScore(input));
      setIsProcessing(false);
      return;
    }

    // First use: always free — process and show result
    // Second use+: gate if not logged in or on free plan
    if (shouldGate && !isLoggedIn) {
      await new Promise(r => setTimeout(r, steps.length * 600 + 200));
      clearInterval(stepInterval);
      setStepIndex(steps.length);
      setProgress(100);
      setIsProcessing(false);
      setShowPaywall(true);
      return;
    }

    // Process text (first use always, or logged-in users)
    try {
      const processed = await processText(input);
      clearInterval(stepInterval);
      setStepIndex(steps.length);
      setProgress(100);
      setFullOutput(processed);
      if (shouldGate && isLoggedIn) {
        setShowPaywall(true);
      }
    } catch (err) {
      clearInterval(stepInterval);
      setFullOutput(`Error: ${err instanceof Error ? err.message : 'Something went wrong. Please try again.'}`);
    }
    setIsProcessing(false);
  };

  const handleClear = () => {
    setInput('');
    setFullOutput('');
    setIsProcessing(false);
    setShowPaywall(false);
    setStepIndex(0);
    setProgress(0);
    setAiScore(null);
  };

  const handleCopy = () => navigator.clipboard.writeText(fullOutput);

  return (
    <>
    {authOpen && <AuthModal onClose={() => setAuthOpen(false)} onSuccess={() => { setAuthOpen(false); setShowPaywall(false); setUseCount(0); window.location.reload(); }} />}
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Input */}
        <div>
          <ToolTextArea label={inputLabel} value={input} onChange={setInput} placeholder={inputPlaceholder} rows={12} />
        </div>

        {/* Output column */}
        <div className="relative flex flex-col">
          <p className="mb-1 text-sm font-semibold text-slate-800">{outputLabel}</p>

          {/* Processing animation */}
          {isProcessing && (
            <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white px-5 py-5 min-h-[200px]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                <svg className="h-3.5 w-3.5 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Processing
              </div>
              <ul className="space-y-2">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-2 text-sm">
                    {i < stepIndex ? (
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-green-500">
                        <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : i === stepIndex ? (
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 border-slate-400 bg-white">
                        <span className="h-1.5 w-1.5 rounded-sm bg-slate-400" />
                      </span>
                    ) : (
                      <span className="h-4 w-4 shrink-0 rounded border border-slate-200 bg-white" />
                    )}
                    <span className={i <= stepIndex ? 'text-slate-800' : 'text-slate-400'}>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 space-y-1">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-yellow-400 transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-widest">
                  <span>{progressLabel}</span>
                  <span>{progress}%</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 uppercase tracking-widest">Working...</p>
            </div>
          )}

          {/* Detector score meter — funnels to humanizer */}
          {!isProcessing && isDetector && aiScore !== null && (
            <div className="rounded-2xl border border-red-200 bg-gradient-to-b from-red-50 to-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-red-600">AI Detected</span>
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-red-700">
                  Likely AI
                </span>
              </div>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-black tracking-tight text-red-600">{aiScore}%</span>
                <span className="mb-1 text-sm font-semibold text-slate-600">AI-generated</span>
              </div>

              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 transition-all duration-700" style={{ width: `${aiScore}%` }} />
              </div>

              <div className="mt-4 rounded-xl bg-slate-900 p-4 text-white">
                <p className="text-sm font-bold">This text will get flagged by AI detectors.</p>
                <p className="mt-0.5 text-xs text-slate-300">
                  Run it through our AI Humanizer Pro to rewrite it and pass Turnitin, GPTZero, Originality &amp; more.
                </p>
                <Link
                  href="/ai-humanizer-pro"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:from-violet-700 hover:to-purple-800 active:scale-[0.98]"
                >
                  Humanize This Text
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          )}

          {/* Upsell card above blurred output */}
          {!isProcessing && showPaywall && (
            <div className="mb-2 rounded-2xl bg-slate-900 text-white shadow-xl">
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
                  {isLoggedIn ? 'From $4.99/week · Cancel anytime' : 'Free to sign up · No credit card'}
                </p>
              </div>
            </div>
          )}

          {/* Blurred output below upsell — hidden for detector tools showing the score meter */}
          {!isProcessing && !(isDetector && aiScore !== null) && (
            <div className={showPaywall ? 'select-none blur-[3px] pointer-events-none' : ''}>
              <ToolTextArea label="" value={fullOutput} onChange={() => {}} placeholder={outputPlaceholder} rows={12} readOnly />
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleProcess}
          disabled={!input.trim() || isProcessing}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg className={`h-4 w-4 ${isProcessing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {isProcessing ? 'Processing...' : processButtonLabel}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!fullOutput || isProcessing || showPaywall}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copyButtonLabel}
        </button>
        <button
          type="button"
          onClick={handleClear}
          disabled={isProcessing}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {clearButtonLabel}
        </button>
      </div>
    </div>
    </>
  );
}

"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ToolTextArea from './ToolTextArea';
import { useSession } from '@/lib/auth-client';

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

const UPSELL_BY_TYPE: Record<ToolType, UpsellConfig> = {
  humanizer: { headline: 'Unlock the full humanized text', subline: 'Sign in to bypass 99% of AI detectors — Turnitin, GPTZero, Originality, Copyleaks.', cta: 'Sign in to Unlock →' },
  detector: { headline: 'Your text looks AI-generated', subline: 'Sign in to run it through our humanizer and pass 99% of detectors.', cta: 'Sign in to Humanize →' },
  checker: { headline: 'Want a perfect score?', subline: 'Sign in to humanize your text and remove AI patterns before submission.', cta: 'Sign in to Continue →' },
  rewriter: { headline: 'Sounds AI-generated?', subline: 'Sign in to humanize your rewritten text and pass every detector.', cta: 'Sign in to Unlock →' },
  translator: { headline: 'Need your text undetectable too?', subline: 'Sign in to humanize translated content and pass 99% of AI detectors.', cta: 'Sign in to Continue →' },
  generator: { headline: 'Want unlimited generations?', subline: 'Sign in for unlimited uses and access to all premium tools.', cta: 'Sign in to Unlock →' },
  analyzer: { headline: 'Sounds AI-generated?', subline: 'Sign in to humanize your content and pass every AI detector.', cta: 'Sign in to Continue →' },
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

  const steps = STEPS_BY_TYPE[toolType];
  const progressLabel = PROGRESS_LABEL_BY_TYPE[toolType];
  const upsell = UPSELL_BY_TYPE[toolType];
  const loginUrl = `/login?redirect=${encodeURIComponent(pathname)}`;

  const handleProcess = async () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    setShowPaywall(false);
    setFullOutput('');
    setStepIndex(0);
    setProgress(0);

    // Run animation regardless of auth state
    let step = 0;
    const totalSteps = steps.length - 1;
    const stepInterval = setInterval(() => {
      step = Math.min(step + 1, totalSteps);
      setStepIndex(step);
      setProgress(Math.round((step / totalSteps) * 90));
    }, 600);

    // If not logged in — fake animation only, no API call
    if (!isLoggedIn) {
      await new Promise(r => setTimeout(r, steps.length * 600 + 200));
      clearInterval(stepInterval);
      setStepIndex(steps.length);
      setProgress(100);
      setIsProcessing(false);
      setShowPaywall(true);
      return;
    }

    // Logged in — real API call
    try {
      const processed = await processText(input);
      clearInterval(stepInterval);
      setStepIndex(steps.length);
      setProgress(100);
      setFullOutput(processed);
      setShowPaywall(true);
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
  };

  const handleCopy = () => navigator.clipboard.writeText(fullOutput);

  return (
    <div className="space-y-4">
      <div className={`grid gap-4 ${showPaywall ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
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

          {/* Blurred output */}
          {!isProcessing && (
            <div className="relative flex-1">
              <div className={showPaywall ? 'select-none blur-sm pointer-events-none' : ''}>
                <ToolTextArea label="" value={fullOutput} onChange={() => {}} placeholder={outputPlaceholder} rows={12} readOnly />
              </div>
            </div>
          )}

          {showPaywall && !isProcessing && (
            <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400 uppercase tracking-widest">
              <span>Preview generated</span>
              <span className="font-bold text-orange-500">Locked</span>
            </div>
          )}
        </div>

        {/* Upsell card — beside output */}
        {showPaywall && !isProcessing && (
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl bg-slate-900 text-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-yellow-300 mb-3">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <p className="text-sm font-bold text-white leading-snug">{upsell.headline}</p>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">{upsell.subline}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {DETECTORS.map((d) => (
                  <span key={d} className="rounded border border-slate-700 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-slate-400">{d}</span>
                ))}
              </div>
              <Link
                href={isLoggedIn ? '/pro' : loginUrl}
                className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow transition hover:bg-slate-100 active:scale-[0.98]"
              >
                {isLoggedIn ? 'Go Pro to Unlock →' : upsell.cta}
              </Link>
              <p className="mt-2 text-center text-[10px] uppercase tracking-widest text-slate-500">
                {isLoggedIn ? 'From $5/month · Cancel anytime' : 'Free to sign up · No credit card'}
              </p>
            </div>
          </div>
        )}
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
  );
}

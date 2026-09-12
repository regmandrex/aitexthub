'use client';

import { useMemo, useState } from 'react';
import CopyButton from './CopyButton';
import ToolTextarea from './ToolTextarea';
import HumanizerUpsellCard from './HumanizerUpsellCard';
import { chatgptSpaceRemover, chatgptTextCleaner, geminiSpaceRemover } from '../lib/tools';

type ProcessorKey = 'chatgptTextCleaner' | 'chatgptSpaceRemover' | 'geminiSpaceRemover';

const processors: Record<ProcessorKey, (input: string) => string> = {
  chatgptTextCleaner,
  chatgptSpaceRemover,
  geminiSpaceRemover,
};

type ToolWorkbenchProps = {
  processor: ProcessorKey;
  primaryLabel: string;
  inputLabel?: string;
  outputLabel?: string;
  inputPlaceholder?: string;
  outputPlaceholder?: string;
};

export default function ToolWorkbench({
  processor,
  primaryLabel,
  inputLabel,
  outputLabel,
  inputPlaceholder,
  outputPlaceholder,
}: ToolWorkbenchProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const stats = useMemo(() => {
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    // Detect a broader set of hidden/non-printing spaces (ZWSP, NBSP, thin/figure spaces, BOM, etc.)
    const hiddenMatches = input.match(/[\u200B-\u200D\uFEFF\u00A0\u2000-\u200A\u202F\u205F\u3000]/g);
    const hidden = hiddenMatches ? hiddenMatches.length : 0;
    return { words, hidden };
  }, [input]);

  const handleProcess = () => {
    const processFn = processors[processor];
    const result = processFn ? processFn(input) : input;
    setOutput(result);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const cleanupRules = [
    'Hidden Unicode',
    'Non-breaking spaces',
    'Smart quotes',
    'Markdown leftovers',
    'Trailing whitespace',
    'Paragraph spacing',
  ];

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <ToolTextarea
            label={inputLabel ?? 'Input text'}
            placeholder={inputPlaceholder ?? 'Paste or type text here…'}
            value={input}
            onChange={setInput}
            rows={12}
            labelSecondary={
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1">{stats.words} words</span>
                <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-teal-700">{stats.hidden} hidden</span>
              </div>
            }
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleProcess}
              className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800"
            >
              {primaryLabel}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Clear
            </button>
          </div>
        </div>
        <ToolTextarea
          label={outputLabel ?? 'Output'}
          placeholder={outputPlaceholder ?? 'Cleaned text appears here.'}
          value={output}
          onChange={setOutput}
          rows={12}
          labelSecondary={<CopyButton text={output} label="Copy" />}
          beforeTextarea={output ? <HumanizerUpsellCard compact /> : null}
        />
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-[#f8faf7] p-4 shadow-sm">
          <p className="text-sm font-bold text-slate-950">Cleaning options</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            The default cleaner applies the common fixes people need after copying text from AI tools.
          </p>
          <div className="mt-4 space-y-2">
            {cleanupRules.map((rule) => (
              <div key={rule} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-xs font-black text-teal-700">✓</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-teal-100 bg-white p-3 text-xs leading-relaxed text-slate-600">
            Your text is processed in the browser. Review the cleaned result before publishing or submitting.
          </div>
        </aside>
      </div>
    </div>
  );
}

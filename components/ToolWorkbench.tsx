'use client';

import { useMemo, useState } from 'react';
import CopyButton from './CopyButton';
import ToolTextarea from './ToolTextarea';
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

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextarea
          label={inputLabel ?? 'Input text'}
          placeholder={inputPlaceholder ?? 'Paste or type text here…'}
          value={input}
          onChange={setInput}
          rows={12}
          labelSecondary={
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">{stats.words} words</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">{stats.hidden} hidden</span>
            </div>
          }
        />
        <div className="flex flex-col gap-3">
          <ToolTextarea
            label={outputLabel ?? 'Output'}
            placeholder={outputPlaceholder ?? 'Cleaned text appears here.'}
            value={output}
            onChange={setOutput}
            rows={12}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleProcess}
          className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-700"
        >
          {primaryLabel}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
        <CopyButton text={output} label="Copy output" />
      </div>
    </div>
  );
}

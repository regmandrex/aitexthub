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
  const [enabledRules, setEnabledRules] = useState<Record<string, boolean>>({
    hidden: true,
    nbsp: true,
    dashes: true,
    quotes: true,
    ellipsis: true,
    trailing: true,
    asterisks: false,
    headings: true,
    unicode: true,
  });

  const stats = useMemo(() => {
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    // Detect a broader set of hidden/non-printing spaces (ZWSP, NBSP, thin/figure spaces, BOM, etc.)
    const hiddenMatches = input.match(/[\u200B-\u200D\uFEFF\u00A0\u2000-\u200A\u202F\u205F\u3000]/g);
    const hidden = hiddenMatches ? hiddenMatches.length : 0;
    return { words, hidden };
  }, [input]);

  const handleProcess = () => {
    const result =
      processor === 'chatgptTextCleaner'
        ? cleanWithOptions(input, enabledRules)
        : (processors[processor] ? processors[processor](input) : input);
    setOutput(result);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const cleanupRules = [
    ['hidden', 'Remove hidden characters'],
    ['nbsp', 'Convert non-breaking spaces'],
    ['dashes', 'Normalize dashes'],
    ['quotes', 'Normalize quotes'],
    ['ellipsis', 'Convert ellipsis'],
    ['trailing', 'Remove trailing whitespace'],
    ['asterisks', 'Remove asterisks (*)'],
    ['headings', 'Remove markdown headings'],
    ['unicode', 'Normalize Unicode forms'],
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="flex flex-col gap-4">
          <ToolTextarea
            label={inputLabel ?? 'Input text'}
            placeholder={inputPlaceholder ?? 'Paste or type text here…'}
            value={input}
            onChange={setInput}
            rows={12}
            labelSecondary={
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="rounded-full border-2 border-black bg-white px-3 py-1">{stats.words} words</span>
                <span className="rounded-full border-2 border-black bg-teal-50 px-3 py-1 text-teal-700">{stats.hidden} hidden</span>
              </div>
            }
          />
          <div className="flex flex-wrap items-center gap-3 border-t-2 border-black pt-4">
            <button
              type="button"
              onClick={handleProcess}
              className="inline-flex items-center justify-center rounded-full border-3 border-black bg-teal-700 px-6 py-3 text-sm font-black text-white shadow-neo transition-transform hover:translate-y-0.5 hover:shadow-neo-sm active:translate-y-1 active:shadow-none"
            >
              {primaryLabel}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center justify-center rounded-full border-3 border-black bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-neo-sm transition-transform hover:translate-y-0.5 hover:shadow-none active:translate-y-0.5"
            >
              Clear
            </button>
          </div>
        </div>
        <aside className="rounded-2xl border-3 border-black bg-slate-50/70 p-4 shadow-neo-sm">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-black text-slate-950">Cleaning Options</h3>
            <button
              type="button"
              onClick={() =>
                setEnabledRules({
                  hidden: true,
                  nbsp: true,
                  dashes: true,
                  quotes: true,
                  ellipsis: true,
                  trailing: true,
                  asterisks: false,
                  headings: true,
                  unicode: true,
                })
              }
              className="text-xs font-bold text-teal-700 hover:text-teal-900"
            >
              Reset All
            </button>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Toggle each cleanup rule before you run the cleaner.
          </p>
          <div className="mt-4 space-y-2.5">
            {cleanupRules.map(([key, label]) => (
              <label key={key} className="flex cursor-pointer items-center gap-3 rounded-xl border border-transparent bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-100 hover:bg-white">
                <input
                  type="checkbox"
                  checked={enabledRules[key]}
                  onChange={(event) => setEnabledRules((current) => ({ ...current, [key]: event.target.checked }))}
                  className="h-4 w-4 rounded border-2 border-black text-teal-700 accent-teal-700 focus:ring-teal-600"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </aside>
      </div>
      <div className="border-t-2 border-black pt-5">
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
    </div>
  );
}

function cleanWithOptions(text: string, options: Record<string, boolean>): string {
  let result = text.replace(/\r\n/g, '\n');

  if (options.hidden) {
    result = result.replace(/[\u200B-\u200D\uFEFF]/g, '');
  }

  if (options.nbsp) {
    result = result.replace(/[\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, ' ');
  }

  if (options.dashes) {
    result = result.replace(/[\u2013\u2014\u2015]/g, ' ').replace(/-{2,}/g, '-');
  }

  if (options.quotes) {
    result = result.replace(/[""]/g, '"').replace(/['']/g, "'");
  }

  if (options.ellipsis) {
    result = result.replace(/\u2026/g, '...');
  }

  if (options.asterisks) {
    result = result.replace(/\*/g, '');
  }

  if (options.headings) {
    result = result
      .split('\n')
      .map((line) => line.replace(/^\s{0,3}#{1,6}\s+/, ''))
      .join('\n');
  }

  if (options.unicode) {
    result = result.normalize('NFKC');
  }

  result = result
    .split('\n')
    .map((line) => {
      const collapsed = line.replace(/[ \t]{2,}/g, ' ');
      return options.trailing ? collapsed.replace(/[ \t]+$/g, '') : collapsed;
    })
    .join('\n');

  return result.replace(/\n{4,}/g, '\n\n');
}

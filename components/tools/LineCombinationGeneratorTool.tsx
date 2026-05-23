"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const LABELS = {
  errorEnterLines: 'Enter at least one line.',
  errorSizeRange: 'Size must be between 1 and 20.',
  errorSizeTooLarge: (count: number) => `Size cannot be greater than the number of lines (${count}).`,
  linesLabel: 'Lines (one per line)',
  linesPlaceholder: 'Enter lines of text, one per line...',
  combinationSizeLabel: 'Combination Size',
  combinationSizeHint: 'Choose how many lines per combination (1-20).',
  prefixLabel: 'Prefix sets with',
  prefixPlaceholder: 'Optional prefix',
  prefixHint: 'Add text before each combination. Use \\n for newline.',
  suffixLabel: 'Suffix sets with',
  suffixPlaceholder: 'Optional suffix',
  suffixHint: 'Add text after each combination. Use \\n for newline.',
  delimiterLabel: 'Delimit lines with',
  delimiterPlaceholder: '\\n',
  delimiterHint: 'Separator between lines in each combination.',
  joinSetsLabel: 'Join sets with',
  joinSetsPlaceholder: '\\n\\n---\\n\\n',
  joinSetsHint: 'Separator between combinations.',
  infoTitle: 'Info',
  linesCount: 'Lines',
  sizeLabel: 'Size',
  totalCombinations: 'Total combinations',
  generateButton: 'Generate Combinations',
  loadSampleButton: 'Load Sample',
  clearButton: 'Clear',
  resultsTitle: 'Results',
  combinationsLabel: 'combinations',
  combinationLabel: 'Combination',
  copyAllButton: 'Copy All',
  downloadButton: 'Download',
  copyButton: 'Copy',
};

// Generate all combinations of size r from array
function generateCombinations<T>(arr: T[], r: number): T[][] {
  if (r === 0) return [[]];
  if (r > arr.length) return [];
  if (r === arr.length) return [arr];

  const result: T[][] = [];

  function backtrack(start: number, current: T[]) {
    if (current.length === r) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}

function toInteger(value: string, defaultValue: number): number {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

function clampNumber(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function LineCombinationGeneratorTool() {
  const [input, setInput] = useState('');
  const [size, setSize] = useState('2');
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [delimiter, setDelimiter] = useState('\n');
  const [joinSets, setJoinSets] = useState('\n\n---\n\n');
  const [results, setResults] = useState<string[]>([]);

  const sizeValue = clampNumber(toInteger(size, 2), 1, 20);
  const lines = useMemo(() => {
    return input
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }, [input]);

  const errors = useMemo(() => {
    const errs: { input?: string; size?: string } = {};
    if (lines.length === 0) {
      errs.input = LABELS.errorEnterLines;
    }
    if (sizeValue < 1 || sizeValue > 20) {
      errs.size = LABELS.errorSizeRange;
    }
    if (sizeValue > lines.length) {
      errs.size = LABELS.errorSizeTooLarge(lines.length);
    }
    return errs;
  }, [lines.length, sizeValue]);

  // Replace \x with newline, \t with tab, etc.
  const processSpecialChars = (text: string): string => {
    return text.replace(/\\x/g, '\n').replace(/\\t/g, '\t').replace(/\\n/g, '\n');
  };

  const handleGenerate = () => {
    if (errors.input || errors.size || lines.length === 0) {
      setResults([]);
      return;
    }

    const combinations = generateCombinations(lines, sizeValue);
    const processedDelimiter = processSpecialChars(delimiter);
    const formatted = combinations.map((combo) => {
      const combined = combo.join(processedDelimiter);
      return prefix + combined + suffix;
    });
    setResults(formatted);
  };

  const handleClear = () => {
    setInput('');
    setResults([]);
  };

  const handleSample = () => {
    setInput('First line of text\nSecond line of text\nThird line of text\nFourth line of text');
    setSize('2');
  };

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const handleCopyAll = () => {
    if (!results.length) return;
    const processedJoin = processSpecialChars(joinSets);
    navigator.clipboard.writeText(results.join(processedJoin));
  };

  const handleDownload = () => {
    if (!results.length) return;
    const processedJoin = processSpecialChars(joinSets);
    const content = results.join(processedJoin);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'line-combinations.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const totalCombinations = useMemo(() => {
    if (lines.length === 0 || sizeValue < 1 || sizeValue > lines.length) return 0;
    // C(n, r) = n! / (r! * (n-r)!)
    let numerator = 1;
    let denominator = 1;
    for (let i = 0; i < sizeValue; i++) {
      numerator *= lines.length - i;
      denominator *= i + 1;
    }
    return numerator / denominator;
  }, [lines.length, sizeValue]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800" htmlFor="line-combo-input">
            {LABELS.linesLabel}
          </label>
          <textarea
            id="line-combo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={LABELS.linesPlaceholder}
            rows={10}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
          />
          {errors.input ? <p className="text-xs font-semibold text-rose-600">{errors.input}</p> : null}
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="line-combo-size">
              {LABELS.combinationSizeLabel}
            </label>
            <input
              id="line-combo-size"
              type="number"
              min={1}
              max={20}
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.combinationSizeHint}</p>
            {errors.size ? <p className="text-xs font-semibold text-rose-600">{errors.size}</p> : null}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="line-combo-prefix">
              {LABELS.prefixLabel}
            </label>
            <input
              id="line-combo-prefix"
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              placeholder={LABELS.prefixPlaceholder}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.prefixHint}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="line-combo-suffix">
              {LABELS.suffixLabel}
            </label>
            <input
              id="line-combo-suffix"
              type="text"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              placeholder={LABELS.suffixPlaceholder}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.suffixHint}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="line-combo-delimiter">
              {LABELS.delimiterLabel}
            </label>
            <input
              id="line-combo-delimiter"
              type="text"
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value)}
              placeholder={LABELS.delimiterPlaceholder}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.delimiterHint}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="line-combo-join">
              {LABELS.joinSetsLabel}
            </label>
            <input
              id="line-combo-join"
              type="text"
              value={joinSets}
              onChange={(e) => setJoinSets(e.target.value)}
              placeholder={LABELS.joinSetsPlaceholder}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.joinSetsHint}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-800">{LABELS.infoTitle}</h3>
            <p className="mt-2 text-xs text-slate-600">
              {LABELS.linesCount}: {lines.length}
              <br />
              {LABELS.sizeLabel}: {sizeValue}
              <br />
              {LABELS.totalCombinations}: {totalCombinations.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          disabled={!!errors.input || !!errors.size || lines.length === 0}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          {LABELS.generateButton}
        </button>
        <button
          type="button"
          onClick={handleSample}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {LABELS.loadSampleButton}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {LABELS.clearButton}
        </button>
      </div>

      {results.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-800">
              {LABELS.resultsTitle} ({results.length.toLocaleString()} {LABELS.combinationsLabel})
            </h3>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleCopyAll}
                className="text-xs font-semibold text-brand-700 hover:text-brand-800"
              >
                {LABELS.copyAllButton}
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="text-xs font-semibold text-brand-700 hover:text-brand-800"
              >
                {LABELS.downloadButton}
              </button>
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto rounded-xl border border-slate-200 bg-white p-4">
            <div className="space-y-3">
              {results.map((result, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">{LABELS.combinationLabel} {idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(result)}
                      className="text-xs font-semibold text-brand-700 hover:text-brand-800"
                    >
                      {LABELS.copyButton}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap text-sm text-slate-700">{result}</pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

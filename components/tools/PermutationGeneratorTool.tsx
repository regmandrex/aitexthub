"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const LABELS = {
  errorEnterItems: 'Enter at least one item (one per line).',
  errorSizeRange: 'Size must be between 1 and 10.',
  errorSizeTooLarge: 'Size cannot exceed number of items.',
  errorFullPermutationLimit: 'Full permutation is limited to 10 items.',
  itemsLabel: 'Items (one per line)',
  itemsPlaceholder: 'Enter items, one per line...',
  permutationSizeLabel: 'Permutation size',
  permutationSizePlaceholder: 'Leave empty for all',
  permutationSizeHint: '1–10, or empty to use all items.',
  prefixLabel: 'Prefix',
  prefixPlaceholder: 'Optional text before each result',
  prefixHint: 'Added to the start of each permutation.',
  suffixLabel: 'Suffix',
  suffixPlaceholder: 'Optional text after each result',
  suffixHint: 'Added to the end of each permutation.',
  delimiterLabel: 'Delimiter',
  delimiterPlaceholder: 'e.g. ", " or " | "',
  delimiterHint: 'Separator between items in each result. \\n = newline.',
  joinSetsLabel: 'Join results with',
  joinSetsPlaceholder: 'e.g. \\n',
  joinSetsHint: 'Separator between results when copying/downloading.',
  infoTitle: 'Summary',
  itemsCount: 'Items',
  sizeLabel: 'Size',
  sizeAll: 'all',
  totalPermutations: 'Total permutations',
  generateButton: 'Generate',
  loadSampleButton: 'Load sample',
  clearButton: 'Clear',
  resultsTitle: 'Results',
  permutationsLabel: 'permutations',
  copyAllButton: 'Copy all',
  downloadButton: 'Download',
  copyButton: 'Copy',
};

// Generate all permutations of size r from array
function generatePermutations<T>(arr: T[], r: number): T[][] {
  if (r === 0) return [[]];
  if (r > arr.length) return [];
  if (r === arr.length) {
    // Generate all permutations of the full array
    const result: T[][] = [];
    function permute(current: T[], remaining: T[]) {
      if (remaining.length === 0) {
        result.push([...current]);
        return;
      }
      for (let i = 0; i < remaining.length; i++) {
        const next = [...current, remaining[i]];
        const rest = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
        permute(next, rest);
      }
    }
    permute([], arr);
    return result;
  }

  // Generate permutations of size r
  const result: T[][] = [];
  function permute(current: T[], remaining: T[]) {
    if (current.length === r) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const next = [...current, remaining[i]];
      const rest = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
      permute(next, rest);
    }
  }
  permute([], arr);
  return result;
}

function toInteger(value: string, defaultValue: number): number {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

function clampNumber(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function PermutationGeneratorTool() {
  const [input, setInput] = useState('');
  const [size, setSize] = useState('');
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [delimiter, setDelimiter] = useState(', ');
  const [joinSets, setJoinSets] = useState('\n');
  const [results, setResults] = useState<string[]>([]);

  const items = useMemo(() => {
    return input
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }, [input]);

  // If size is empty, use all items (full permutation)
  const sizeValue = size === '' ? items.length : clampNumber(toInteger(size, items.length), 1, 10);
  const actualSize = size === '' ? items.length : sizeValue;

  const errors = useMemo(() => {
    const errs: { input?: string; size?: string } = {};
    if (items.length === 0) {
      errs.input = LABELS.errorEnterItems;
    }
    if (size !== '' && (sizeValue < 1 || sizeValue > 10)) {
      errs.size = LABELS.errorSizeRange;
    }
    if (size !== '' && sizeValue > items.length) {
      errs.size = `Size cannot exceed ${items.length} items.`;
    }
    if (items.length > 10 && size === '') {
      errs.input = LABELS.errorFullPermutationLimit;
    }
    return errs;
  }, [items.length, size, sizeValue]);

  // Replace \x with newline, \t with tab, etc.
  const processSpecialChars = (text: string): string => {
    return text.replace(/\\x/g, '\n').replace(/\\t/g, '\t').replace(/\\n/g, '\n');
  };

  const handleGenerate = () => {
    if (errors.input || errors.size || items.length === 0) {
      setResults([]);
      return;
    }

    const permutations = generatePermutations(items, actualSize);
    const processedDelimiter = processSpecialChars(delimiter);
    const formatted = permutations.map((perm) => {
      const combined = perm.join(processedDelimiter);
      return prefix + combined + suffix;
    });
    setResults(formatted);
  };

  const handleClear = () => {
    setInput('');
    setResults([]);
    setSize('');
  };

  const handleSample = () => {
    setInput('Red\nGreen\nBlue');
    setSize('');
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
    a.download = 'permutations.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const totalPermutations = useMemo(() => {
    if (items.length === 0 || actualSize < 1 || actualSize > items.length) return 0;
    // P(n, r) = n! / (n-r)!
    let result = 1;
    for (let i = 0; i < actualSize; i++) {
      result *= items.length - i;
    }
    return result;
  }, [items.length, actualSize]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800" htmlFor="perm-input">
            {LABELS.itemsLabel}
          </label>
          <textarea
            id="perm-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={LABELS.itemsPlaceholder}
            rows={10}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
          />
          {errors.input ? <p className="text-xs font-semibold text-rose-600">{errors.input}</p> : null}
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="perm-size">
              {LABELS.permutationSizeLabel}
            </label>
            <input
              id="perm-size"
              type="number"
              min={1}
              max={10}
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder={LABELS.permutationSizePlaceholder}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">
              {LABELS.permutationSizeHint}
            </p>
            {errors.size ? <p className="text-xs font-semibold text-rose-600">{errors.size}</p> : null}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="perm-prefix">
              {LABELS.prefixLabel}
            </label>
            <input
              id="perm-prefix"
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              placeholder={LABELS.prefixPlaceholder}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.prefixHint}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="perm-suffix">
              {LABELS.suffixLabel}
            </label>
            <input
              id="perm-suffix"
              type="text"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              placeholder={LABELS.suffixPlaceholder}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.suffixHint}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="perm-delimiter">
              {LABELS.delimiterLabel}
            </label>
            <input
              id="perm-delimiter"
              type="text"
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value)}
              placeholder={LABELS.delimiterPlaceholder}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.delimiterHint}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="perm-join">
              {LABELS.joinSetsLabel}
            </label>
            <input
              id="perm-join"
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
              {LABELS.itemsCount}: {items.length}
              <br />
              {LABELS.sizeLabel}: {actualSize === items.length ? LABELS.sizeAll : actualSize}
              <br />
              {LABELS.totalPermutations}: {totalPermutations.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          disabled={!!errors.input || !!errors.size || items.length === 0}
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
              {LABELS.resultsTitle} ({results.length.toLocaleString()} {LABELS.permutationsLabel})
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
            <div className="space-y-1">
              {results.map((result, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  <span>{result}</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(result)}
                    className="text-xs font-semibold text-brand-700 hover:text-brand-800"
                  >
                    {LABELS.copyButton}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

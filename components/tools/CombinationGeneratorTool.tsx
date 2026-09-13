"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const LABELS = {
  errorEnterItems: 'Enter at least one item.',
  errorSizeRange: 'Size must be between 1 and 20.',
  errorSizeTooLarge: (count: number) => `Size cannot be greater than the number of items (${count}).`,
  combinationSizeLabel: 'Combination Size',
  combinationSizeHint: 'Choose how many items per combination (1-20).',
  prefixLabel: 'Prefix sets with',
  prefixPlaceholder: 'Optional prefix',
  prefixHint: 'Add text before each combination. Use \\n for newline.',
  suffixLabel: 'Suffix sets with',
  suffixPlaceholder: 'Optional suffix',
  suffixHint: 'Add text after each combination. Use \\n for newline.',
  delimiterLabel: 'Delimit objects with',
  delimiterPlaceholder: ', ',
  delimiterHint: 'Separator between items in each combination. Use \\n for newline.',
  joinSetsLabel: 'Join sets with',
  joinSetsPlaceholder: '\\n',
  joinSetsHint: 'Separator between combinations. Use \\n for newline (default).',
  infoTitle: 'Info',
  itemsCount: 'Items',
  sizeLabel: 'Size',
  totalCombinations: 'Total combinations',
  generateButton: 'Generate Combinations',
  loadSampleButton: 'Load Sample',
  clearButton: 'Clear',
  resultsTitle: 'Results',
  combinationsLabel: 'combinations',
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

export function CombinationGeneratorTool() {
  const [input, setInput] = useState('');
  const [size, setSize] = useState('2');
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [delimiter, setDelimiter] = useState(', ');
  const [joinSets, setJoinSets] = useState('\n');
  const [results, setResults] = useState<string[]>([]);

  const sizeValue = clampNumber(toInteger(size, 2), 1, 20);
  const items = useMemo(() => {
    return input
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }, [input]);

  const errors = useMemo(() => {
    const errs: { input?: string; size?: string } = {};
    if (items.length === 0) {
      errs.input = LABELS.errorEnterItems;
    }
    if (sizeValue < 1 || sizeValue > 20) {
      errs.size = LABELS.errorSizeRange;
    }
    if (sizeValue > items.length) {
      errs.size = LABELS.errorSizeTooLarge(items.length);
    }
    return errs;
  }, [items.length, sizeValue]);

  // Replace \x with newline, \t with tab, etc.
  const processSpecialChars = (text: string): string => {
    return text.replace(/\\x/g, '\n').replace(/\\t/g, '\t').replace(/\\n/g, '\n');
  };

  const handleGenerate = () => {
    if (errors.input || errors.size || items.length === 0) {
      setResults([]);
      return;
    }

    const combinations = generateCombinations(items, sizeValue);
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
    setInput('Apple\nBanana\nCherry\nDate\nElderberry');
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
    a.download = 'combinations.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const totalCombinations = useMemo(() => {
    if (items.length === 0 || sizeValue < 1 || sizeValue > items.length) return 0;
    // C(n, r) = n! / (r! * (n-r)!)
    let numerator = 1;
    let denominator = 1;
    for (let i = 0; i < sizeValue; i++) {
      numerator *= items.length - i;
      denominator *= i + 1;
    }
    return numerator / denominator;
  }, [items.length, sizeValue]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800" htmlFor="combo-input">
            Items (one per line)
          </label>
          <textarea
            id="combo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter items, one per line..."
            rows={10}
            className="w-full rounded-xl border-3 border-black bg-white px-3 py-3 text-sm text-slate-800 shadow-neo-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
          />
          {errors.input ? <p className="text-xs font-semibold text-rose-600">{errors.input}</p> : null}
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="combo-size">
              {"Combination Size"}
            </label>
            <input
              id="combo-size"
              type="number"
              min={1}
              max={20}
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full rounded-lg border-3 border-black bg-white px-3 py-2 text-sm text-slate-700 shadow-neo-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.combinationSizeHint}</p>
            {errors.size ? <p className="text-xs font-semibold text-rose-600">{errors.size}</p> : null}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="combo-prefix">
              {LABELS.prefixLabel}
            </label>
            <input
              id="combo-prefix"
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              placeholder={LABELS.prefixPlaceholder}
              className="w-full rounded-lg border-3 border-black bg-white px-3 py-2 text-sm text-slate-700 shadow-neo-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.prefixHint}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="combo-suffix">
              {"Suffix sets with"}
            </label>
            <input
              id="combo-suffix"
              type="text"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              placeholder={LABELS.suffixPlaceholder}
              className="w-full rounded-lg border-3 border-black bg-white px-3 py-2 text-sm text-slate-700 shadow-neo-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{"Add text after each combination. Use \\x for newline."}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="combo-delimiter">
              {LABELS.delimiterLabel}
            </label>
            <input
              id="combo-delimiter"
              type="text"
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value)}
              placeholder={LABELS.delimiterPlaceholder}
              className="w-full rounded-lg border-3 border-black bg-white px-3 py-2 text-sm text-slate-700 shadow-neo-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{"Separator between items in each combination. Use \\x for newline."}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="combo-join">
              {LABELS.joinSetsLabel}
            </label>
            <input
              id="combo-join"
              type="text"
              value={joinSets}
              onChange={(e) => setJoinSets(e.target.value)}
              placeholder={"\\x"}
              className="w-full rounded-lg border-3 border-black bg-white px-3 py-2 text-sm text-slate-700 shadow-neo-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            <p className="text-xs text-slate-500">{LABELS.joinSetsHint}</p>
          </div>
          <div className="rounded-xl border-3 border-black bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-800">{LABELS.infoTitle}</h3>
            <p className="mt-2 text-xs text-slate-600">
              {"Items"}: {items.length}
              <br />
              {LABELS.sizeLabel}: {sizeValue}
              <br />
              {"Total combinations"}: {totalCombinations.toLocaleString()}
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
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {LABELS.loadSampleButton}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {"Clear"}
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
                {"Copy All"}
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
          <div className="max-h-96 overflow-y-auto rounded-xl border-3 border-black bg-white p-4">
            <div className="space-y-1">
              {results.map((result, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg border-2 border-black bg-slate-50 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
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

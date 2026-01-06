"use client";

import { useMemo, useState } from 'react';
import { generateRandomHexList } from '@/lib/random';

function toInteger(value: string, fallback: number) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.trunc(parsed);
}

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function RandomHexGeneratorTool() {
  const [length, setLength] = useState('16');
  const [count, setCount] = useState('1');
  const [usePrefix, setUsePrefix] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const lengthRaw = toInteger(length, 16);
  const countRaw = toInteger(count, 1);
  const lengthValue = clampNumber(lengthRaw, 1, 256);
  const countValue = clampNumber(countRaw, 1, 50);

  const errors = useMemo(() => {
    const items: { length?: string; count?: string } = {};
    if (lengthRaw < 1 || lengthRaw > 256) {
      items.length = 'Length must be between 1 and 256 hex characters.';
    }
    if (countRaw < 1 || countRaw > 50) {
      items.count = 'Generate between 1 and 50 values at a time.';
    }
    return items;
  }, [countRaw, lengthRaw]);

  const handleGenerate = () => {
    if (errors.length || errors.count) {
      setResults([]);
      return;
    }
    setResults(
      generateRandomHexList(lengthValue, countValue, {
        prefix: usePrefix,
        uppercase,
      })
    );
  };

  const handleClear = () => {
    setResults([]);
  };

  const handleSample = () => {
    setLength('12');
    setCount('5');
    setUsePrefix(true);
    setUppercase(true);
    setResults(
      generateRandomHexList(12, 5, {
        prefix: true,
        uppercase: true,
      })
    );
  };

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const handleCopyAll = () => {
    if (!results.length) return;
    navigator.clipboard.writeText(results.join('\n'));
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800" htmlFor="hex-length">
            Length (hex characters)
          </label>
          <input
            id="hex-length"
            type="number"
            min={1}
            max={256}
            value={length}
            onChange={(event) => setLength(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
          <p className="text-xs text-slate-500">Common lengths: 8, 16, 32, 64.</p>
          {errors.length ? <p className="text-xs font-semibold text-rose-600">{errors.length}</p> : null}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800" htmlFor="hex-count">
            How many to generate
          </label>
          <input
            id="hex-count"
            type="number"
            min={1}
            max={50}
            value={count}
            onChange={(event) => setCount(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
          <p className="text-xs text-slate-500">Generate 1 to 50 values per batch.</p>
          {errors.count ? <p className="text-xs font-semibold text-rose-600">{errors.count}</p> : null}
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-800">Output options</h3>
        <div className="mt-3 grid gap-3 text-sm text-slate-700 md:grid-cols-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={usePrefix} onChange={(event) => setUsePrefix(event.target.checked)} />
            Include 0x prefix
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={uppercase} onChange={(event) => setUppercase(event.target.checked)} />
            Uppercase output
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Generate
        </button>
        <button
          type="button"
          onClick={handleCopyAll}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          disabled={!results.length}
        >
          Copy all
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleSample}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Load sample
        </button>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-800">Generated values</h3>
        {results.length === 0 ? (
          <p className="text-sm text-slate-500">No values yet. Choose options and click Generate.</p>
        ) : (
          <div className="space-y-2">
            {results.map((value, index) => (
              <div
                key={`${value}-${index}`}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
              >
                <span className="font-mono text-slate-900">{value}</span>
                <button
                  type="button"
                  onClick={() => handleCopy(value)}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="text-xs text-slate-500">Generated values stay in your browser. No data is stored.</p>
    </div>
  );
}

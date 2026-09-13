'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import { generateTransformersNames } from '@/lib/tools/transformersNameGenerator';

const DEFAULT_COUNT = 10;
const MIN_COUNT = 1;
const MAX_COUNT = 24;

export function TransformersNameGeneratorTool() {
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [includeTitles, setIncludeTitles] = useState(true);
  const [results, setResults] = useState<ReturnType<typeof generateTransformersNames>>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setResults(generateTransformersNames(count, includeTitles));
      setIsGenerating(false);
    }, 300);
  };

  const outputText = results.map((r) => r.name).join('\n');

  const handleCopy = () => {
    if (outputText) navigator.clipboard.writeText(outputText);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label htmlFor="tf-count" className="mb-1 block text-sm font-medium text-slate-700">
            Number of names (1–24)
          </label>
          <input
            id="tf-count"
            type="number"
            min={MIN_COUNT}
            max={MAX_COUNT}
            value={count}
            onChange={(e) => setCount(Math.min(MAX_COUNT, Math.max(MIN_COUNT, Number(e.target.value) || MIN_COUNT)))}
            className="w-full rounded-lg border-2 border-black bg-white px-3 py-2 text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
            aria-label="Number of names"
          />
        </div>
        <div className="flex items-end">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={includeTitles}
              onChange={(e) => setIncludeTitles(e.target.checked)}
              className="h-4 w-4 rounded border-black text-brand-600 focus:ring-brand-600"
              aria-label="Include title-style names"
            />
            <span className="text-sm font-medium text-slate-700">Include title-style names</span>
          </label>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Generating…
            </>
          ) : (
            'Generate names'
          )}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          disabled={results.length === 0}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copy
        </button>
        <button
          type="button"
          onClick={() => setResults([])}
          disabled={results.length === 0}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear
        </button>
      </div>
      {results.length > 0 && (
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Generated names</label>
          <div className="rounded-lg border-3 border-black bg-slate-50 p-4">
            <ul className="space-y-2 text-slate-800">
              {results.map((r, i) => (
                <li key={`${r.name}-${i}`}>
                  <span className="font-medium">{r.name}</span>
                  <span className="text-slate-500 text-sm"> ({r.style})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

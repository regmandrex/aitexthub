'use client';

import { useState } from 'react';
import {
  generateMuslimNames,
  type MuslimNameGender,
  type MuslimNameResult,
} from '@/lib/tools/muslimNameGenerator';

const GENDERS: { value: MuslimNameGender; label: string }[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'both', label: 'Both' },
];
const DEFAULT_COUNT = 10;
const MIN_COUNT = 1;
const MAX_COUNT = 24;

export function MuslimNameGeneratorTool() {
  const [gender, setGender] = useState<MuslimNameGender>('both');
  const [includeMeaning, setIncludeMeaning] = useState(true);
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [results, setResults] = useState<MuslimNameResult[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setResults(generateMuslimNames(gender, count, includeMeaning));
      setIsGenerating(false);
    }, 300);
  };

  const outputText = results.length > 0
    ? results.map((r) => (r.meaning ? `${r.name} — ${r.meaning}` : r.name)).join('\n')
    : '';

  const handleCopy = () => {
    if (outputText) navigator.clipboard.writeText(outputText);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="muslim-gender" className="mb-1 block text-sm font-medium text-slate-700">
            Gender
          </label>
          <select
            id="muslim-gender"
            value={gender}
            onChange={(e) => setGender(e.target.value as MuslimNameGender)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
            aria-label="Choose name gender"
          >
            {GENDERS.map((g) => (
              <option key={g.value} value={g.value}>{g.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="muslim-count" className="mb-1 block text-sm font-medium text-slate-700">
            Number of names (1–24)
          </label>
          <input
            id="muslim-count"
            type="number"
            min={MIN_COUNT}
            max={MAX_COUNT}
            value={count}
            onChange={(e) => setCount(Math.min(MAX_COUNT, Math.max(MIN_COUNT, Number(e.target.value) || MIN_COUNT)))}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
            aria-label="Number of names"
          />
        </div>
        <div className="flex items-end">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={includeMeaning}
              onChange={(e) => setIncludeMeaning(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-600"
              aria-label="Include meaning"
            />
            <span className="text-sm font-medium text-slate-700">Include meaning</span>
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
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copy
        </button>
        <button
          type="button"
          onClick={() => setResults([])}
          disabled={results.length === 0}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear
        </button>
      </div>
      {results.length > 0 && (
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Generated names</label>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <ul className="space-y-2 text-slate-800">
              {results.map((r, i) => (
                <li key={`${r.name}-${i}`}>
                  <span className="font-medium">{r.name}</span>
                  <span className="text-slate-600"> ({r.gender})</span>
                  {r.meaning != null && <span className="text-slate-600"> — {r.meaning}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

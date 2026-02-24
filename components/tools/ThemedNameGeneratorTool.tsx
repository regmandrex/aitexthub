'use client';

import { useState } from 'react';
import {
  generateNarutoNames,
  generateIslandNames,
  generateFalloutNames,
  generateAncientGreekNames,
  generateDragQueenNames,
  generateTribeNames,
  generateAnimeNames,
  generateWrestlingNames,
  generateRoyalSurnames,
  generateSillyNames,
  generateBracketNames,
  generateSteamNames,
  generateEldenRingNames,
  generateMLPNames,
  generateStripperNames,
  generateRunescapeNames,
  generateShopifyStoreNames,
  generateKoreanMaleNames,
} from '@/lib/tools/themedNameGenerators';

type GeneratorKey =
  | 'naruto'
  | 'island'
  | 'fallout'
  | 'ancient-greek'
  | 'drag-queen'
  | 'tribe'
  | 'anime'
  | 'wrestling'
  | 'royal'
  | 'silly'
  | 'bracket'
  | 'steam'
  | 'elden-ring'
  | 'mlp'
  | 'stripper'
  | 'runescape'
  | 'shopify'
  | 'korean-male';

const GENERATORS: Record<GeneratorKey, (count: number, seed?: number) => { name: string }[]> = {
  'naruto': generateNarutoNames,
  'island': generateIslandNames,
  'fallout': generateFalloutNames,
  'ancient-greek': generateAncientGreekNames,
  'drag-queen': generateDragQueenNames,
  'tribe': generateTribeNames,
  'anime': generateAnimeNames,
  'wrestling': generateWrestlingNames,
  'royal': generateRoyalSurnames,
  'silly': generateSillyNames,
  'bracket': generateBracketNames,
  'steam': generateSteamNames,
  'elden-ring': generateEldenRingNames,
  'mlp': generateMLPNames,
  'stripper': generateStripperNames,
  'runescape': generateRunescapeNames,
  'shopify': generateShopifyStoreNames,
  'korean-male': generateKoreanMaleNames,
};

const DEFAULT_COUNT = 10;
const MIN_COUNT = 1;
const MAX_COUNT = 24;

type ThemedNameGeneratorToolProps = {
  generatorKey: GeneratorKey;
  resultLabel?: string;
};

export function ThemedNameGeneratorTool({ generatorKey, resultLabel = 'Generated names' }: ThemedNameGeneratorToolProps) {
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [results, setResults] = useState<{ name: string }[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generator = GENERATORS[generatorKey];
  if (!generator) return null;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setResults(generator(count));
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
          <label htmlFor="themed-count" className="mb-1 block text-sm font-medium text-slate-700">
            Number of names (1–24)
          </label>
          <input
            id="themed-count"
            type="number"
            min={MIN_COUNT}
            max={MAX_COUNT}
            value={count}
            onChange={(e) => setCount(Math.min(MAX_COUNT, Math.max(MIN_COUNT, Number(e.target.value) || MIN_COUNT)))}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
            aria-label="Number of names"
          />
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
          <label className="mb-1 block text-sm font-medium text-slate-700">{resultLabel}</label>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <ul className="space-y-2 text-slate-800">
              {results.map((r, i) => (
                <li key={`${r.name}-${i}`} className="font-medium">{r.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

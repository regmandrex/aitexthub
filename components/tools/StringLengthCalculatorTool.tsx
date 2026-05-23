"use client";

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function StringLengthCalculatorTool() {
  const [input, setInput] = useState('');

  const chars = input.length;
  const bytes = new TextEncoder().encode(input).length;
  const words = input.trim() === '' ? 0 : input.trim().split(/\s+/).length;
  const lines = input === '' ? 0 : input.split('\n').length;
  const sentences = input.split(/[.!?]+\s/).filter(Boolean).length;
  const paragraphs = input.trim() === '' ? 0 : input.split(/\n\s*\n/).filter(s => s.trim()).length;
  const noSpaces = input.replace(/\s/g, '').length;

  const stats = [
    { label: 'Characters (with spaces)', value: chars },
    { label: 'Characters (no spaces)', value: noSpaces },
    { label: 'Bytes (UTF-8)', value: bytes },
    { label: 'Words', value: words },
    { label: 'Lines', value: lines },
    { label: 'Sentences', value: sentences },
    { label: 'Paragraphs', value: paragraphs },
  ];

  const freq: Record<string, number> = {};
  for (const c of input) freq[c] = (freq[c] ?? 0) + 1;
  const topChars = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 10);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-slate-800 block mb-2">Your Text</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Paste or type your text here..."
          rows={8}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center">
            <p className="text-2xl font-bold text-blue-700">{value.toLocaleString()}</p>
            <p className="text-xs text-slate-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {topChars.length > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-medium text-slate-700 mb-3">Top 10 Characters</p>
          <div className="flex flex-wrap gap-2">
            {topChars.map(([c, n]) => (
              <span key={c} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-slate-200 px-2 py-1 text-sm">
                <span className="font-mono font-semibold text-slate-800">{c === ' ' ? '·' : c === '\n' ? '↵' : c}</span>
                <span className="text-slate-500">{n}×</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

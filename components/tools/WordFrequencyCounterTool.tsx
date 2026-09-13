'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function WordFrequencyCounterTool() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<[string, number][] | null>(null);

  function analyze() {
    const words = input.toLowerCase().match(/\b[a-z']+\b/g) || [];
    const freq: Record<string, number> = {};
    for (const w of words) freq[w] = (freq[w] || 0) + 1;
    setResults(Object.entries(freq).sort((a, b) => b[1] - a[1]));
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Text input</label>
        <textarea value={input} onChange={e => setInput(e.target.value)} rows={6} placeholder="Paste your text here..." className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button onClick={analyze} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Count words</button>
      {results && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Word frequency ({results.length} unique words)</label>
          <div className="rounded-lg border-3 border-black overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b-3 border-black">
                <tr>
                  <th className="text-left px-3 py-2 text-slate-600 font-medium">Word</th>
                  <th className="text-right px-3 py-2 text-slate-600 font-medium">Count</th>
                  <th className="text-right px-3 py-2 text-slate-600 font-medium">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {results.slice(0, 50).map(([word, count]) => {
                  const total = results.reduce((s, [, c]) => s + c, 0);
                  return (
                    <tr key={word} className="border-b-2 border-black last:border-0">
                      <td className="px-3 py-2 font-mono text-slate-800">{word}</td>
                      <td className="px-3 py-2 text-right text-slate-700">{count}</td>
                      <td className="px-3 py-2 text-right text-slate-500">{((count / total) * 100).toFixed(1)}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {results.length > 50 && <p className="text-xs text-slate-400 px-3 py-2">Showing top 50 of {results.length} words</p>}
          </div>
        </div>
      )}
    </div>
  );
}

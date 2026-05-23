'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import * as Diff from 'diff';

export function TextDiffTool() {
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [diff, setDiff] = useState<Diff.Change[] | null>(null);

  function compare() {
    setDiff(Diff.diffWords(left, right));
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Original text</label>
          <textarea value={left} onChange={e => setLeft(e.target.value)} rows={8} placeholder="Paste original text..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Modified text</label>
          <textarea value={right} onChange={e => setRight(e.target.value)} rows={8} placeholder="Paste modified text..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <button onClick={compare} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Compare</button>
      {diff && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Diff result <span className="text-xs font-normal text-slate-500 ml-1"><span className="bg-green-100 text-green-800 px-1 rounded">green = added</span> <span className="bg-red-100 text-red-800 px-1 rounded">red = removed</span></span></label>
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed font-mono whitespace-pre-wrap break-words">
            {diff.map((part, i) => (
              <span key={i} className={part.added ? 'bg-green-100 text-green-800' : part.removed ? 'bg-red-100 text-red-800 line-through' : 'text-slate-800'}>{part.value}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

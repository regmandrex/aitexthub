'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function SortLinesTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [removeDups, setRemoveDups] = useState(false);
  const [copied, setCopied] = useState(false);

  function sort() {
    let lines = input.split('\n');
    if (removeDups) lines = [...new Set(lines)];
    lines.sort((a, b) => order === 'asc' ? a.localeCompare(b) : b.localeCompare(a));
    setOutput(lines.join('\n'));
    setCopied(false);
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-slate-700">Order</label>
          <select value={order} onChange={e => setOrder(e.target.value as 'asc' | 'desc')} className="rounded-lg border-3 border-black px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="asc">A → Z</option>
            <option value="desc">Z → A</option>
          </select>
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
          <input type="checkbox" checked={removeDups} onChange={e => setRemoveDups(e.target.checked)} className="rounded" />
          Remove duplicates
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Lines to sort</label>
        <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="One line per item..." className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button onClick={sort} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Sort lines</button>
      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">Sorted output</label>
            <button onClick={copy} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
          <textarea readOnly value={output} rows={8} className="w-full rounded-lg border-3 border-black bg-slate-50 px-3 py-2 text-sm font-mono resize-none" />
        </div>
      )}
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
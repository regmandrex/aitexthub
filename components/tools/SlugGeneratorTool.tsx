'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

function toSlug(str: string) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

export function SlugGeneratorTool() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const slug = toSlug(input);

  function copy() {
    navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Text to slugify</label>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="My Blog Post Title Here" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      {slug && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">URL slug</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono">{slug}</code>
            <button onClick={copy} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
        </div>
      )}
    </div>
  );
}

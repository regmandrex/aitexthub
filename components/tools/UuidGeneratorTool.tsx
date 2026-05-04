'use client';

import { useState } from 'react';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function UuidGeneratorTool() {
  const [uuids, setUuids] = useState<string[]>([uuidv4()]);
  const [count, setCount] = useState(1);
  const [copied, setCopied] = useState(false);

  function generate() {
    setUuids(Array.from({ length: count }, () => uuidv4()));
    setCopied(false);
  }

  function copyAll() {
    navigator.clipboard.writeText(uuids.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-slate-700">Count</label>
        <input
          type="number"
          min={1}
          max={100}
          value={count}
          onChange={e => setCount(Math.min(100, Math.max(1, Number(e.target.value))))}
          className="w-24 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={generate}
          className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
        >
          Generate
        </button>
        <button
          onClick={copyAll}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'border border-slate-200 hover:bg-slate-50 text-slate-700'}`}
        >
          {copied ? '✓ Copied!' : 'Copy all'}
        </button>
      </div>
      <div className="space-y-1">
        {uuids.map((uuid, i) => (
          <div key={i} className="flex items-center gap-2">
            <code className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono">{uuid}</code>
            <button
              onClick={() => navigator.clipboard.writeText(uuid)}
              className="px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs transition-colors"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

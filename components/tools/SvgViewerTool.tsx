'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function SvgViewerTool() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const isValid = input.trim().startsWith('<svg') || input.trim().startsWith('<?xml');

  function copy() {
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">SVG code</label>
        <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; ...>...</svg>" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="flex gap-2">
        <button onClick={copy} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'border border-slate-200 hover:bg-slate-50 text-slate-700'}`}>{copied ? '✓ Copied!' : 'Copy SVG'}</button>
      </div>
      {isValid && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Preview</label>
          <div className="rounded-lg border border-slate-200 bg-white p-6 flex items-center justify-center min-h-[200px]" dangerouslySetInnerHTML={{ __html: input }} />
        </div>
      )}
      {input && !isValid && <p className="text-sm text-amber-600">Paste valid SVG code (must start with &lt;svg&gt;) to preview.</p>}
    </div>
  );
}

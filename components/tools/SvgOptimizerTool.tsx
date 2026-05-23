'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

function optimizeSvg(svg: string): string {
  return svg
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/\s*=\s*/g, '=')
    .replace(/ style="[^"]*"/g, m => m.replace(/\s+/g, ' ').trim())
    .trim();
}

export function SvgOptimizerTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  function optimize() {
    setOutput(optimizeSvg(input));
    setCopied(false);
  }

  const saving = input && output ? Math.round((1 - output.length / input.length) * 100) : 0;

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">SVG input</label>
        <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="Paste your SVG code here..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button onClick={optimize} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Optimize SVG</button>
      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">
              Optimized SVG {saving > 0 && <span className="text-green-600 font-normal text-xs ml-1">({saving}% smaller)</span>}
            </label>
            <button onClick={copy} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
          <textarea readOnly value={output} rows={8} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono resize-none" />
          <div className="flex gap-4 text-xs text-slate-500">
            <span>Before: {input.length} bytes</span>
            <span>After: {output.length} bytes</span>
          </div>
        </div>
      )}
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
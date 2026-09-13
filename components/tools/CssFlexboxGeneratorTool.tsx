'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function CssFlexboxGeneratorTool() {
  const [direction, setDirection] = useState('row');
  const [justify, setJustify] = useState('flex-start');
  const [align, setAlign] = useState('stretch');
  const [wrap, setWrap] = useState('nowrap');
  const [gap, setGap] = useState(8);
  const [itemCount, setItemCount] = useState(4);
  const [copied, setCopied] = useState(false);

  const css = `.container {\n  display: flex;\n  flex-direction: ${direction};\n  justify-content: ${justify};\n  align-items: ${align};\n  flex-wrap: ${wrap};\n  gap: ${gap}px;\n}`;

  function copy() {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const opts: [string, string, string[]][] = [
    ['flex-direction', direction, ['row', 'row-reverse', 'column', 'column-reverse']],
    ['justify-content', justify, ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']],
    ['align-items', align, ['stretch', 'flex-start', 'flex-end', 'center', 'baseline']],
    ['flex-wrap', wrap, ['nowrap', 'wrap', 'wrap-reverse']],
  ];

  const setters = [setDirection, setJustify, setAlign, setWrap];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {opts.map(([label, val, options], i) => (
          <div key={label}>
            <label className="block text-xs font-medium text-slate-600 mb-1">{label}</label>
            <select value={val} onChange={e => setters[i](e.target.value)} className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        ))}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">gap: {gap}px</label>
          <input type="range" min={0} max={40} value={gap} onChange={e => setGap(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Preview items: {itemCount}</label>
          <input type="range" min={1} max={8} value={itemCount} onChange={e => setItemCount(Number(e.target.value))} className="w-full" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Preview</label>
        <div className="rounded-lg border-3 border-black bg-slate-100 p-4 min-h-[120px]">
          <div style={{ display: 'flex', flexDirection: direction as never, justifyContent: justify, alignItems: align, flexWrap: wrap as never, gap: `${gap}px`, minHeight: '80px' }}>
            {Array.from({ length: itemCount }, (_, i) => (
              <div key={i} className="bg-blue-500 text-white rounded text-xs font-medium flex items-center justify-center" style={{ width: 48, height: 48, flexShrink: 0 }}>{i + 1}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-slate-700">CSS</label>
          <button onClick={copy} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
        </div>
        <pre className="rounded-lg border-3 border-black bg-slate-50 px-3 py-2 text-xs font-mono">{css}</pre>
      </div>
    </div>
  );
}

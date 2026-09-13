'use client';

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

export function CssGridGeneratorTool() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(2);
  const [colGap, setColGap] = useState(16);
  const [rowGap, setRowGap] = useState(16);
  const [colTemplate, setColTemplate] = useState('repeat(3, 1fr)');
  const [rowTemplate, setRowTemplate] = useState('repeat(2, 1fr)');
  const [copied, setCopied] = useState(false);

  const css = `.grid {\n  display: grid;\n  grid-template-columns: ${colTemplate};\n  grid-template-rows: ${rowTemplate};\n  column-gap: ${colGap}px;\n  row-gap: ${rowGap}px;\n}`;

  function updateCols(n: number) {
    setCols(n);
    setColTemplate(`repeat(${n}, 1fr)`);
  }

  function updateRows(n: number) {
    setRows(n);
    setRowTemplate(`repeat(${n}, 1fr)`);
  }

  function copy() {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Columns: {cols}</label>
          <input type="range" min={1} max={6} value={cols} onChange={e => updateCols(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Rows: {rows}</label>
          <input type="range" min={1} max={6} value={rows} onChange={e => updateRows(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Column gap: {colGap}px</label>
          <input type="range" min={0} max={40} value={colGap} onChange={e => setColGap(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Row gap: {rowGap}px</label>
          <input type="range" min={0} max={40} value={rowGap} onChange={e => setRowGap(Number(e.target.value))} className="w-full" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">grid-template-columns</label>
          <input type="text" value={colTemplate} onChange={e => setColTemplate(e.target.value)} className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">grid-template-rows</label>
          <input type="text" value={rowTemplate} onChange={e => setRowTemplate(e.target.value)} className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Preview</label>
        <div className="rounded-lg border-3 border-black bg-slate-100 p-4">
          <div style={{ display: 'grid', gridTemplateColumns: colTemplate, gridTemplateRows: rowTemplate, columnGap: `${colGap}px`, rowGap: `${rowGap}px` }}>
            {Array.from({ length: cols * rows }, (_, i) => (
              <div key={i} className="bg-blue-500 text-white rounded text-xs font-medium flex items-center justify-center" style={{ height: 48 }}>{i + 1}</div>
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

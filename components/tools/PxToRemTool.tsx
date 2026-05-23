"use client";

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const COMMON_PX = [4,6,8,10,12,14,16,18,20,24,28,32,36,40,48,56,64,72,80,96,112,128];

export function PxToRemTool() {
  const [tab, setTab] = useState<'pxToRem' | 'remToPx'>('pxToRem');
  const [base, setBase] = useState(16);
  const [px, setPx] = useState('');
  const [rem, setRem] = useState('');
  const [bulk, setBulk] = useState('');
  const [bulkOut, setBulkOut] = useState('');
  const [copied, setCopied] = useState(false);

  const pxResult = px !== '' ? (parseFloat(px) / base).toFixed(4).replace(/\.?0+$/, '') + 'rem' : '';
  const remResult = rem !== '' ? (parseFloat(rem) * base).toFixed(4).replace(/\.?0+$/, '') + 'px' : '';

  const convertBulk = () => {
    const lines = bulk.split('\n').map(l => {
      const n = parseFloat(l.trim().replace('px', ''));
      if (isNaN(n)) return `${l.trim()} → invalid`;
      return `${l.trim().replace('px', '')}px → ${(n / base).toFixed(4).replace(/\.?0+$/, '')}rem`;
    });
    setBulkOut(lines.join('\n'));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 text-sm">
        <label className="font-medium text-slate-700">Base font size:</label>
        <input type="number" value={base} onChange={e => setBase(Number(e.target.value) || 16)} min={1} max={32}
          className="w-20 rounded-lg border border-slate-200 px-2 py-1.5 text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-100" />
        <span className="text-slate-500">px</span>
        <button onClick={() => setBase(16)} className="text-xs text-blue-600 hover:underline">Reset to 16</button>
      </div>

      <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
        {(['pxToRem', 'remToPx'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${tab === t ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>
            {t === 'pxToRem' ? 'PX → REM' : 'REM → PX'}
          </button>
        ))}
      </div>

      {tab === 'pxToRem' ? (
        <div className="flex items-center gap-3">
          <input type="number" value={px} onChange={e => setPx(e.target.value)} placeholder="px value"
            className="w-32 rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100" />
          <span className="text-slate-500 text-sm">px =</span>
          <span className="text-xl font-bold text-blue-700 font-mono">{pxResult || '—'}</span>
          {pxResult && (
            <button onClick={() => { navigator.clipboard.writeText(pxResult); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
              className="text-xs px-2 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50">{copied ? 'Copied!' : 'Copy'}</button>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <input type="number" value={rem} onChange={e => setRem(e.target.value)} placeholder="rem value"
            className="w-32 rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100" />
          <span className="text-slate-500 text-sm">rem =</span>
          <span className="text-xl font-bold text-blue-700 font-mono">{remResult || '—'}</span>
        </div>
      )}

      {/* Bulk converter */}
      <div className="border-t border-slate-100 pt-4 space-y-3">
        <p className="text-sm font-medium text-slate-700">Bulk PX → REM (one value per line)</p>
        <div className="grid gap-3 md:grid-cols-2">
          <textarea value={bulk} onChange={e => setBulk(e.target.value)} placeholder={"8\n12\n16\n24\n32"} rows={6}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-100" />
          <textarea value={bulkOut} readOnly rows={6}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-mono bg-slate-50" />
        </div>
        <button onClick={convertBulk} className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700">Convert All</button>
      </div>

      {/* Reference table */}
      <div className="border-t border-slate-100 pt-4">
        <p className="text-sm font-medium text-slate-700 mb-3">Reference Table (base {base}px)</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-3 py-2 text-xs font-semibold text-slate-600 border border-slate-200">PX</th>
                <th className="text-left px-3 py-2 text-xs font-semibold text-slate-600 border border-slate-200">REM</th>
                <th className="text-left px-3 py-2 text-xs font-semibold text-slate-600 border border-slate-200">PX (base 14)</th>
                <th className="text-left px-3 py-2 text-xs font-semibold text-slate-600 border border-slate-200">PX (base 18)</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_PX.map(p => (
                <tr key={p} className="hover:bg-slate-50">
                  <td className="px-3 py-1.5 border border-slate-100 font-mono text-slate-800">{p}px</td>
                  <td className="px-3 py-1.5 border border-slate-100 font-mono text-blue-700">{(p/base).toFixed(4).replace(/\.?0+$/,'')}rem</td>
                  <td className="px-3 py-1.5 border border-slate-100 font-mono text-slate-500">{(p/14).toFixed(4).replace(/\.?0+$/,'')}rem</td>
                  <td className="px-3 py-1.5 border border-slate-100 font-mono text-slate-500">{(p/18).toFixed(4).replace(/\.?0+$/,'')}rem</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

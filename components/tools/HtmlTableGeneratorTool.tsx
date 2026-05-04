'use client';

import { useState } from 'react';

export function HtmlTableGeneratorTool() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [headers, setHeaders] = useState<string[]>(['Header 1', 'Header 2', 'Header 3']);
  const [data, setData] = useState<string[][]>([['', '', ''], ['', '', ''], ['', '', '']]);
  const [hasHeader, setHasHeader] = useState(true);
  const [striped, setStriped] = useState(false);
  const [bordered, setBordered] = useState(true);
  const [copied, setCopied] = useState(false);

  function resize(r: number, c: number) {
    setRows(r);
    setCols(c);
    setHeaders(h => { const nh = Array.from({ length: c }, (_, i) => h[i] || `Header ${i + 1}`); return nh; });
    setData(d => Array.from({ length: r }, (_, i) => Array.from({ length: c }, (_, j) => d[i]?.[j] || '')));
  }

  const borderStyle = bordered ? ' style="border: 1px solid #ccc; border-collapse: collapse; padding: 8px;"' : '';
  const output = `<table${bordered ? ' style="border-collapse: collapse;"' : ''}>
${hasHeader ? `  <thead>\n    <tr>\n${headers.map(h => `      <th${borderStyle}>${h}</th>`).join('\n')}\n    </tr>\n  </thead>\n` : ''}  <tbody>
${data.map((row, ri) => `    <tr${striped && ri % 2 ? ' style="background: #f9f9f9;"' : ''}>\n${row.map(cell => `      <td${borderStyle}>${cell}</td>`).join('\n')}\n    </tr>`).join('\n')}
  </tbody>
</table>`;

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <label className="text-sm text-slate-700">Rows</label>
          <input type="number" min={1} max={20} value={rows} onChange={e => resize(Number(e.target.value), cols)} className="w-16 rounded border border-slate-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-slate-700">Cols</label>
          <input type="number" min={1} max={10} value={cols} onChange={e => resize(rows, Number(e.target.value))} className="w-16 rounded border border-slate-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="checkbox" checked={hasHeader} onChange={e => setHasHeader(e.target.checked)} /> Header row</label>
        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="checkbox" checked={striped} onChange={e => setStriped(e.target.checked)} /> Striped rows</label>
        <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="checkbox" checked={bordered} onChange={e => setBordered(e.target.checked)} /> Borders</label>
      </div>

      <div className="overflow-x-auto">
        <table className={`w-full text-sm ${bordered ? 'border border-slate-200' : ''}`} style={{ borderCollapse: 'collapse' }}>
          {hasHeader && (
            <thead>
              <tr className="bg-slate-100">
                {headers.map((h, j) => (
                  <th key={j} className={`${bordered ? 'border border-slate-200' : ''} p-1`}>
                    <input value={h} onChange={e => setHeaders(prev => prev.map((v, i) => i === j ? e.target.value : v))} className="w-full bg-transparent text-center font-medium text-slate-800 focus:outline-none text-xs" />
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {data.map((row, ri) => (
              <tr key={ri} className={striped && ri % 2 ? 'bg-slate-50' : ''}>
                {row.map((cell, ci) => (
                  <td key={ci} className={`${bordered ? 'border border-slate-200' : ''} p-1`}>
                    <input value={cell} onChange={e => setData(prev => prev.map((r, i) => i === ri ? r.map((c, j) => j === ci ? e.target.value : c) : r))} className="w-full bg-transparent text-center focus:outline-none text-xs" placeholder="cell" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-slate-700">HTML output</label>
          <button onClick={copy} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
        </div>
        <textarea readOnly value={output} rows={8} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-mono resize-none" />
      </div>
    </div>
  );
}

"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';

function parseCsv(csv: string, delim: string, hasHeader: boolean, inferTypes: boolean): unknown[] {
  const lines = csv.trim().split('\n').map(l => l.replace(/\r$/, ''));
  const splitLine = (line: string): string[] => {
    const result: string[] = [];
    let inQ = false, cur = '';
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') { if (inQ && line[i+1] === '"') { cur += '"'; i++; } else inQ = !inQ; }
      else if (c === delim && !inQ) { result.push(cur); cur = ''; }
      else cur += c;
    }
    result.push(cur);
    return result;
  };

  const infer = (v: string): unknown => {
    if (!inferTypes) return v;
    if (v === 'true') return true;
    if (v === 'false') return false;
    if (v === '' || v === 'null') return null;
    const n = Number(v);
    if (!isNaN(n) && v !== '') return n;
    return v;
  };

  if (!hasHeader) return lines.map(l => splitLine(l).map(infer));
  const headers = splitLine(lines[0]);
  return lines.slice(1).filter(l => l.trim()).map(l => {
    const vals = splitLine(l);
    return Object.fromEntries(headers.map((h, i) => [h, infer(vals[i] ?? '')]));
  });
}

function detectDelim(csv: string): string {
  const counts = { ',': 0, ';': 0, '\t': 0, '|': 0 };
  const first = csv.split('\n')[0] ?? '';
  for (const c of first) { if (c in counts) counts[c as keyof typeof counts]++; }
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

const DELIM_MAP: Record<string, string> = { Auto: '', Comma: ',', Semicolon: ';', Tab: '\t', Pipe: '|' };

export function CsvToJsonTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [delim, setDelim] = useState('Auto');
  const [hasHeader, setHasHeader] = useState(true);
  const [inferTypes, setInferTypes] = useState(true);
  const [compact, setCompact] = useState(false);
  const [copied, setCopied] = useState(false);

  const convert = () => {
    try {
      const d = delim === 'Auto' ? detectDelim(input) : DELIM_MAP[delim];
      const json = parseCsv(input, d, hasHeader, inferTypes);
      setOutput(compact ? JSON.stringify(json) : JSON.stringify(json, null, 2));
      setError('');
    } catch (e) {
      setError(`Parse error: ${(e as Error).message}`);
      setOutput('');
    }
  };

  const download = () => {
    const blob = new Blob([output], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'output.json'; a.click();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center text-sm">
        <div className="flex items-center gap-2">
          <label className="font-medium text-slate-700">Delimiter:</label>
          <select value={delim} onChange={e => setDelim(e.target.value)}
            className="rounded-lg border border-slate-200 px-2 py-1 focus:outline-none">
            {Object.keys(DELIM_MAP).map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
        {[
          { label: 'Has header row', val: hasHeader, set: setHasHeader },
          { label: 'Infer types', val: inferTypes, set: setInferTypes },
          { label: 'Compact JSON', val: compact, set: setCompact },
        ].map(({ label, val, set }) => (
          <label key={label} className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={val} onChange={e => set(e.target.checked)} className="rounded" />
            <span className="text-slate-700">{label}</span>
          </label>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea label="CSV Input" value={input} onChange={setInput} placeholder={"name,age,city\nAlice,30,London\nBob,25,Paris"} rows={14} />
        <ToolTextArea label="JSON Output" value={output} onChange={() => {}} readOnly rows={14} />
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>}

      <div className="flex gap-2 flex-wrap">
        <button onClick={convert} className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700">Convert to JSON</button>
        <button onClick={() => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); }} disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40">
          {copied ? 'Copied!' : 'Copy JSON'}
        </button>
        <button onClick={download} disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40">
          Download .json
        </button>
      </div>
    </div>
  );
}

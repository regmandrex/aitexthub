"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';

function flattenObject(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, val] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(result, flattenObject(val as Record<string, unknown>, fullKey));
    } else {
      result[fullKey] = val === null || val === undefined ? '' : String(val);
    }
  }
  return result;
}

function escapeCell(val: string, delim: string): string {
  if (val.includes(delim) || val.includes('\n') || val.includes('"')) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}

function jsonToCsv(json: string, delim: string, headers: boolean, flatten: boolean): string {
  const data = JSON.parse(json);
  const rows: Array<Record<string, string>> = [];

  if (Array.isArray(data)) {
    for (const item of data) {
      if (typeof item === 'object' && item !== null) {
        rows.push(flatten ? flattenObject(item as Record<string, unknown>) : Object.fromEntries(Object.entries(item).map(([k, v]) => [k, String(v ?? '')])));
      }
    }
  } else if (typeof data === 'object' && data !== null) {
    rows.push(flatten ? flattenObject(data as Record<string, unknown>) : Object.fromEntries(Object.entries(data).map(([k, v]) => [k, String(v ?? '')])));
  }

  if (rows.length === 0) return '';
  const keys = Array.from(new Set(rows.flatMap(r => Object.keys(r))));
  const lines: string[] = [];
  if (headers) lines.push(keys.map(k => escapeCell(k, delim)).join(delim));
  for (const row of rows) {
    lines.push(keys.map(k => escapeCell(row[k] ?? '', delim)).join(delim));
  }
  return lines.join('\n');
}

const DELIMITERS: Record<string, string> = { Comma: ',', Semicolon: ';', Tab: '\t', Pipe: '|' };

export function JsonToCsvTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [delim, setDelim] = useState('Comma');
  const [includeHeaders, setIncludeHeaders] = useState(true);
  const [flatten, setFlatten] = useState(true);
  const [copied, setCopied] = useState(false);

  const convert = () => {
    try {
      const csv = jsonToCsv(input, DELIMITERS[delim], includeHeaders, flatten);
      setOutput(csv);
      setError('');
    } catch (e) {
      setError(`Invalid JSON: ${(e as Error).message}`);
      setOutput('');
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const downloadCsv = () => {
    const blob = new Blob([output], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'output.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center text-sm">
        <div className="flex items-center gap-2">
          <label className="font-medium text-slate-700">Delimiter:</label>
          <select value={delim} onChange={e => setDelim(e.target.value)}
            className="rounded-lg border border-slate-200 px-2 py-1 text-sm text-slate-800 focus:outline-none">
            {Object.keys(DELIMITERS).map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={includeHeaders} onChange={e => setIncludeHeaders(e.target.checked)} className="rounded" />
          <span className="text-slate-700">Include headers</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={flatten} onChange={e => setFlatten(e.target.checked)} className="rounded" />
          <span className="text-slate-700">Flatten nested objects</span>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea label="JSON Input" value={input} onChange={setInput} placeholder='[{"name":"Alice","age":30},{"name":"Bob","age":25}]' rows={14} />
        <ToolTextArea label="CSV Output" value={output} onChange={() => {}} readOnly rows={14} />
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>}

      <div className="flex gap-2 flex-wrap">
        <button onClick={convert} className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700">Convert to CSV</button>
        <button onClick={copyOutput} disabled={!output} className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40">
          {copied ? 'Copied!' : 'Copy CSV'}
        </button>
        <button onClick={downloadCsv} disabled={!output} className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40">
          Download .csv
        </button>
      </div>
    </div>
  );
}

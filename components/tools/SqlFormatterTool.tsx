'use client';

import { useState } from 'react';
import { format } from 'sql-formatter';

export function SqlFormatterTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [dialect, setDialect] = useState<'sql' | 'mysql' | 'postgresql' | 'sqlite'>('sql');
  const [copied, setCopied] = useState(false);

  function formatSql() {
    setError(''); setOutput(''); setCopied(false);
    try {
      setOutput(format(input.trim(), { language: dialect, tabWidth: 2, keywordCase: 'upper' }));
    } catch (e: unknown) {
      setError('Could not format SQL — ' + (e instanceof Error ? e.message : 'please check your input.'));
    }
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-slate-700">Dialect</label>
        <select value={dialect} onChange={e => setDialect(e.target.value as typeof dialect)} className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="sql">Standard SQL</option>
          <option value="mysql">MySQL</option>
          <option value="postgresql">PostgreSQL</option>
          <option value="sqlite">SQLite</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">SQL input</label>
        <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="SELECT * FROM users WHERE id = 1;" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <button onClick={formatSql} className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">Format SQL</button>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">Formatted SQL</label>
            <button onClick={copy} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>{copied ? '✓ Copied!' : 'Copy'}</button>
          </div>
          <textarea readOnly value={output} rows={8} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono resize-none" />
        </div>
      )}
    </div>
  );
}

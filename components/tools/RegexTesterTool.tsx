'use client';

import { useState, useMemo } from 'react';

export function RegexTesterTool() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [text, setText] = useState('');

  const result = useMemo(() => {
    if (!pattern || !text) return null;
    try {
      const re = new RegExp(pattern, flags);
      const matches: { value: string; index: number }[] = [];
      let m;
      if (flags.includes('g')) {
        while ((m = re.exec(text)) !== null) {
          matches.push({ value: m[0], index: m.index });
          if (m[0].length === 0) re.lastIndex++;
        }
      } else {
        m = re.exec(text);
        if (m) matches.push({ value: m[0], index: m.index });
      }
      return { matches, error: null };
    } catch (e: unknown) {
      return { matches: [], error: e instanceof Error ? e.message : 'Invalid regex' };
    }
  }, [pattern, flags, text]);

  const highlighted = useMemo(() => {
    if (!result || result.error || result.matches.length === 0) return null;
    const parts: { text: string; match: boolean }[] = [];
    let last = 0;
    for (const { value, index } of result.matches) {
      if (index > last) parts.push({ text: text.slice(last, index), match: false });
      parts.push({ text: value, match: true });
      last = index + value.length;
    }
    if (last < text.length) parts.push({ text: text.slice(last), match: false });
    return parts;
  }, [result, text]);

  const allFlags = ['g', 'i', 'm', 's', 'u'];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-start">
        <div className="flex-1">
          <label className="block text-xs font-medium text-slate-600 mb-1">Regular expression</label>
          <div className="flex items-center rounded-lg border-3 border-black overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <span className="px-3 py-2 text-slate-400 text-sm font-mono bg-slate-50">/</span>
            <input type="text" value={pattern} onChange={e => setPattern(e.target.value)} placeholder="pattern" className="flex-1 px-2 py-2 text-sm font-mono focus:outline-none" />
            <span className="px-1 text-slate-400 text-sm font-mono bg-slate-50">/</span>
            <input type="text" value={flags} onChange={e => setFlags(e.target.value.replace(/[^gimsuy]/g, ''))} className="w-14 px-2 py-2 text-sm font-mono focus:outline-none bg-slate-50" />
          </div>
        </div>
        <div className="pt-5">
          <div className="flex gap-1">
            {allFlags.map(f => (
              <button key={f} onClick={() => setFlags(prev => prev.includes(f) ? prev.replace(f, '') : prev + f)} className={`w-7 h-7 rounded text-xs font-mono font-medium transition-colors ${flags.includes(f) ? 'bg-blue-600 text-white' : 'border-3 border-black text-slate-600 hover:bg-slate-50'}`}>{f}</button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">Test string</label>
        <textarea value={text} onChange={e => setText(e.target.value)} rows={5} placeholder="Enter text to test against..." className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {result?.error && <p className="text-sm text-red-600">Error: {result.error}</p>}

      {result && !result.error && text && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${result.matches.length ? 'text-green-700' : 'text-slate-500'}`}>
              {result.matches.length} match{result.matches.length !== 1 ? 'es' : ''}
            </span>
          </div>
          {highlighted && (
            <div className="rounded-lg border-3 border-black bg-white px-3 py-2 text-sm font-mono whitespace-pre-wrap break-words">
              {highlighted.map((p, i) => (
                <span key={i} className={p.match ? 'bg-yellow-200 text-yellow-900 rounded' : ''}>{p.text}</span>
              ))}
            </div>
          )}
          {result.matches.length > 0 && (
            <div className="space-y-1">
              {result.matches.map((m, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Match {i + 1}</span>
                  <code className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded font-mono">{m.value || '(empty)'}</code>
                  <span className="text-slate-400">at index {m.index}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

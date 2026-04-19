"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';

export function TextReverserTool() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'chars' | 'words' | 'lines'>('chars');
  const [copied, setCopied] = useState(false);

  const reverse = (text: string): string => {
    if (mode === 'chars') return Array.from(text).reverse().join('');
    if (mode === 'words') return text.split(/(\s+)/).reverse().join('');
    return text.split('\n').reverse().join('\n');
  };

  const output = reverse(input);

  return (
    <div className="space-y-4">
      <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
        {(['chars', 'words', 'lines'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)}
            className={`flex-1 py-2 text-sm font-medium rounded-md capitalize transition ${mode === m ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>
            Reverse {m}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea label="Original Text" value={input} onChange={setInput} placeholder="Type text to reverse..." rows={10} />
        <ToolTextArea label="Reversed Text" value={output} onChange={() => {}} readOnly rows={10} />
      </div>

      <button onClick={() => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); }} disabled={!output}
        className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40">
        {copied ? 'Copied!' : 'Copy Output'}
      </button>
    </div>
  );
}

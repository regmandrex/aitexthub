"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';

function rot13(s: string): string {
  return s.replace(/[A-Za-z]/g, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
}

function rot47(s: string): string {
  return s.replace(/[!-~]/g, c => String.fromCharCode(((c.charCodeAt(0) - 33 + 47) % 94) + 33));
}

export function Rot13EncoderTool() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'rot13' | 'rot47'>('rot13');
  const [copied, setCopied] = useState(false);

  const output = mode === 'rot13' ? rot13(input) : rot47(input);

  return (
    <div className="space-y-4">
      <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
        {(['rot13', 'rot47'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${mode === m ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>
            {m.toUpperCase()}
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-500">
        {mode === 'rot13'
          ? 'ROT13 shifts letters by 13 positions. Applying it twice returns the original text.'
          : 'ROT47 shifts all printable ASCII characters (! to ~) by 47 positions.'}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea label="Input" value={input} onChange={setInput} placeholder="Type text to encode/decode..." rows={10} />
        <ToolTextArea label="Output (encode = decode)" value={output} onChange={() => {}} readOnly rows={10} />
      </div>

      <div className="flex gap-2">
        <button onClick={() => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); }} disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40">
          {copied ? 'Copied!' : 'Copy Output'}
        </button>
        <button onClick={() => setInput(output)} disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40">
          Swap (Decode)
        </button>
      </div>
    </div>
  );
}

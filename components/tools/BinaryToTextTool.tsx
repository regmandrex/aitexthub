"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';

export function BinaryToTextTool() {
  const [tab, setTab] = useState<'toText' | 'toBin'>('toText');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [separator, setSeparator] = useState('Space');
  const [copied, setCopied] = useState(false);

  const binaryToText = () => {
    const clean = input.trim().replace(/[,\n]+/g, ' ');
    const parts = clean.split(/\s+/).filter(Boolean);
    try {
      const chars = parts.map(b => {
        if (!/^[01]+$/.test(b)) throw new Error(`"${b}" is not valid binary`);
        return String.fromCharCode(parseInt(b, 2));
      });
      setOutput(chars.join(''));
      setError('');
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  };

  const textToBinary = () => {
    const sep = separator === 'Space' ? ' ' : separator === 'Comma' ? ',' : separator === 'Newline' ? '\n' : '';
    const bins = Array.from(input).map(c => c.charCodeAt(0).toString(2).padStart(8, '0'));
    setOutput(bins.join(sep));
    setError('');
  };

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); };

  return (
    <div className="space-y-4">
      <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
        {(['toText', 'toBin'] as const).map(t => (
          <button key={t} onClick={() => { setTab(t); setInput(''); setOutput(''); setError(''); }}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${tab === t ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>
            {t === 'toText' ? 'Binary → Text' : 'Text → Binary'}
          </button>
        ))}
      </div>

      {tab === 'toBin' && (
        <div className="flex items-center gap-2 text-sm">
          <label className="font-medium text-slate-700">Separator:</label>
          <select value={separator} onChange={e => setSeparator(e.target.value)}
            className="rounded-lg border border-slate-200 px-2 py-1 focus:outline-none">
            {['Space','Comma','Newline','None'].map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label={tab === 'toText' ? 'Binary Input' : 'Text Input'}
          value={input} onChange={setInput}
          placeholder={tab === 'toText' ? '01001000 01100101 01101100 01101100 01101111' : 'Type or paste text...'}
          rows={10} />
        <ToolTextArea label="Output" value={output} onChange={() => {}} readOnly rows={10} />
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>}

      <div className="flex gap-2">
        <button onClick={tab === 'toText' ? binaryToText : textToBinary}
          className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700">Convert</button>
        <button onClick={copy} disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40">
          {copied ? 'Copied!' : 'Copy Output'}
        </button>
      </div>
    </div>
  );
}

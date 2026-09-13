"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const SEPARATORS: Record<string, string> = { Space: ' ', Comma: ',', Newline: '\n', None: '' };
const BASES: Record<string, number> = { Decimal: 10, Hexadecimal: 16, Binary: 2, Octal: 8 };

export function AsciiConverterTool() {
  const [tab, setTab] = useState<'toAscii' | 'toText'>('toAscii');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [format, setFormat] = useState('Decimal');
  const [separator, setSeparator] = useState('Space');
  const [inputFormat, setInputFormat] = useState('Decimal');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const convertToAscii = () => {
    const sep = SEPARATORS[separator];
    const base = BASES[format];
    const codes = Array.from(input).map(ch => {
      const code = ch.codePointAt(0) ?? 0;
      return code.toString(base).toUpperCase();
    });
    setOutput(codes.join(sep));
    setError('');
  };

  const convertToText = () => {
    const base = BASES[inputFormat];
    const parts = input.trim().split(/[\s,]+/).filter(Boolean);
    try {
      const chars = parts.map(p => {
        const n = parseInt(p, base);
        if (isNaN(n)) throw new Error(`Invalid value: "${p}"`);
        return String.fromCodePoint(n);
      });
      setOutput(chars.join(''));
      setError('');
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  };

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); };

  return (
    <div className="space-y-4">
      <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
        {(['toAscii', 'toText'] as const).map(t => (
          <button key={t} onClick={() => { setTab(t); setInput(''); setOutput(''); setError(''); }}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${tab === t ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>
            {t === 'toAscii' ? 'Text → ASCII' : 'ASCII → Text'}
          </button>
        ))}
      </div>

      {tab === 'toAscii' && (
        <div className="flex flex-wrap gap-4 text-sm items-center">
          <div className="flex items-center gap-2">
            <label className="font-medium text-slate-700">Output format:</label>
            <select value={format} onChange={e => setFormat(e.target.value)}
              className="rounded-lg border-3 border-black px-2 py-1 focus:outline-none">
              {Object.keys(BASES).map(b => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium text-slate-700">Separator:</label>
            <select value={separator} onChange={e => setSeparator(e.target.value)}
              className="rounded-lg border-3 border-black px-2 py-1 focus:outline-none">
              {Object.keys(SEPARATORS).map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
      )}

      {tab === 'toText' && (
        <div className="flex items-center gap-2 text-sm">
          <label className="font-medium text-slate-700">Input format:</label>
          <select value={inputFormat} onChange={e => setInputFormat(e.target.value)}
            className="rounded-lg border-3 border-black px-2 py-1 focus:outline-none">
            {Object.keys(BASES).map(b => <option key={b}>{b}</option>)}
          </select>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea label={tab === 'toAscii' ? 'Text Input' : 'ASCII Codes Input'}
          value={input} onChange={setInput}
          placeholder={tab === 'toAscii' ? 'Type or paste text...' : 'Enter codes, e.g. 72 101 108 108 111'}
          rows={10} />
        <ToolTextArea label="Output" value={output} onChange={() => {}} readOnly rows={10} />
      </div>

      {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>}

      <div className="flex gap-2">
        <button onClick={tab === 'toAscii' ? convertToAscii : convertToText}
          className="px-4 py-2 text-sm font-medium rounded-xl bg-blue-600 text-white hover:bg-blue-700">Convert</button>
        <button onClick={copy} disabled={!output}
          className="px-4 py-2 text-sm font-medium rounded-xl border-3 border-black bg-white hover:bg-slate-50 disabled:opacity-40">
          {copied ? 'Copied!' : 'Copy Output'}
        </button>
      </div>
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
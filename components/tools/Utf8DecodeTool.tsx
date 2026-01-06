"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { decodeUtf8FromHex } from '@/lib/encoding';

export function Utf8DecodeTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleDecode = () => {
    if (!input.trim()) {
      setError('Enter UTF-8 hex bytes to decode.');
      setOutput('');
      return;
    }

    try {
      setOutput(decodeUtf8FromHex(input));
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to decode this byte sequence.');
      setOutput('');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  const handleSample = () => {
    setInput('43 61 66 65 20 C3 A9 20 61 6E 64 20 E2 82 AC');
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="UTF-8 hex input"
          value={input}
          onChange={setInput}
          placeholder="Paste hex bytes like 48 65 6C 6C 6F"
          rows={10}
        />
        <ToolTextArea
          label="Decoded text"
          value={output}
          onChange={setOutput}
          placeholder="Decoded UTF-8 text appears here."
          rows={10}
          readOnly
        />
      </div>

      {error ? <p className="text-sm font-semibold text-rose-600">{error}</p> : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleDecode}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Decode
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          disabled={!output}
        >
          Copy
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleSample}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Load sample
        </button>
      </div>

      <p className="text-xs text-slate-600">Use hex byte values with optional spaces or 0x prefixes.</p>
      <p className="text-xs text-slate-500">Works only on text you provide. No data is stored.</p>
    </div>
  );
}
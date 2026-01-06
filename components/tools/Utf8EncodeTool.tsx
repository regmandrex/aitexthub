"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { encodeUtf8ToHex } from '@/lib/encoding';

export function Utf8EncodeTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [uppercase, setUppercase] = useState(true);
  const [compact, setCompact] = useState(false);

  const handleEncode = () => {
    if (!input.trim()) {
      setError('Enter text to encode as UTF-8 bytes.');
      setOutput('');
      return;
    }

    const encoded = encodeUtf8ToHex(input, { uppercase });
    const formatted = compact ? encoded.replace(/\s+/g, '') : encoded;
    setOutput(formatted);
    setError('');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  const handleSample = () => {
    setInput('Cafe \u00e9 and \u20ac');
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Input text"
          value={input}
          onChange={setInput}
          placeholder="Type or paste text to encode as UTF-8 bytes..."
          rows={10}
        />
        <ToolTextArea
          label="UTF-8 hex output"
          value={output}
          onChange={setOutput}
          placeholder="UTF-8 byte values appear here."
          rows={10}
          readOnly
        />
      </div>

      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={uppercase}
            onChange={(event) => setUppercase(event.target.checked)}
          />
          Uppercase hex
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={compact}
            onChange={(event) => setCompact(event.target.checked)}
          />
          Remove spaces
        </label>
        {error ? <span className="text-sm font-semibold text-rose-600">{error}</span> : null}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleEncode}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Encode
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

      <p className="text-xs text-slate-600">Output is space-separated hex bytes representing UTF-8 encoding.</p>
      <p className="text-xs text-slate-500">Works only on text you provide. No data is stored.</p>
    </div>
  );
}
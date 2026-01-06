"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { decodeBase64 } from '@/lib/encoding';

export function Base64DecodeTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [urlSafe, setUrlSafe] = useState(false);

  const handleDecode = () => {
    if (!input.trim()) {
      setError('Enter a Base64 string to decode.');
      setOutput('');
      return;
    }

    try {
      setOutput(decodeBase64(input, { urlSafe }));
      setError('');
    } catch (err) {
      setError('Invalid Base64 input. Check for bad characters or missing padding.');
      setOutput('');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  const handleSample = () => {
    setInput('U2FtcGxlIHRleHQgd2l0aCBzeW1ib2xzICYgc3BhY2Vz');
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Base64 input"
          value={input}
          onChange={setInput}
          placeholder="Paste Base64 to decode..."
          rows={12}
        />
        <ToolTextArea
          label="Decoded output"
          value={output}
          onChange={setOutput}
          placeholder="Decoded text appears here."
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={urlSafe}
            onChange={(event) => setUrlSafe(event.target.checked)}
          />
          Treat input as URL-safe Base64
        </label>
        {error ? <span className="text-sm font-semibold text-rose-600">{error}</span> : null}
      </div>

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

      <p className="text-xs text-slate-500">Works only on text you provide. No data is stored.</p>
    </div>
  );
}

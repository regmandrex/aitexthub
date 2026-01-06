"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { encodeIdn } from '@/lib/encoding';

export function IdnEncodeTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleEncode = () => {
    if (!input.trim()) {
      setError('Enter a domain or URL to encode.');
      setOutput('');
      return;
    }

    try {
      setOutput(encodeIdn(input));
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to encode this domain.');
      setOutput('');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  const handleSample = () => {
    setInput('m\u00fcnich.com');
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Domain or URL input"
          value={input}
          onChange={setInput}
          placeholder="Enter a domain like m\u00fcnich.com or a full URL..."
          rows={8}
        />
        <ToolTextArea
          label="Punycode output"
          value={output}
          onChange={setOutput}
          placeholder="ASCII Punycode output appears here."
          rows={8}
          readOnly
        />
      </div>

      {error ? <p className="text-sm font-semibold text-rose-600">{error}</p> : null}

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

      <p className="text-xs text-slate-600">
        The tool converts only the hostname portion into ASCII Punycode and keeps the rest of a URL intact.
      </p>
      <p className="text-xs text-slate-500">Works only on text you provide. No data is stored.</p>
    </div>
  );
}
"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import { encodeHtmlEntities } from '@/lib/encoding';

export function TextToHtmlEntitiesTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [encodeNonAscii, setEncodeNonAscii] = useState(false);

  const handleEncode = () => {
    if (!input.trim()) {
      setError('Enter text to encode as HTML entities.');
      setOutput('');
      return;
    }

    setOutput(encodeHtmlEntities(input, { encodeNonAscii }));
    setError('');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  const handleSample = () => {
    setInput('Tom & Jerry <3 "Best"');
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
          placeholder="Paste text to encode as HTML entities..."
          rows={12}
        />
        <ToolTextArea
          label="HTML entities output"
          value={output}
          onChange={setOutput}
          placeholder="Encoded HTML entities appear here."
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={encodeNonAscii}
            onChange={(event) => setEncodeNonAscii(event.target.checked)}
          />
          Encode non-ASCII characters
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

      <p className="text-xs text-slate-600">Encodes characters like &amp;, &lt;, &gt;, and quotes for safe HTML markup.</p>
      <p className="text-xs text-slate-500">Works only on text you provide. No data is stored.</p>
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
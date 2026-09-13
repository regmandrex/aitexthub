"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import { encodeUrl, type UrlEncodingMode } from '@/lib/encoding';

export function UrlEncodeTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState<UrlEncodingMode>('component');

  const handleEncode = () => {
    if (!input.trim()) {
      setError('Enter text or a URL to encode.');
      setOutput('');
      return;
    }
    setOutput(encodeUrl(input, mode));
    setError('');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  const handleSample = () => {
    setInput('https://example.com/search?q=red shoes&sort=price&ref=summer sale');
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder="Paste text or a URL to encode..."
          rows={12}
        />
        <ToolTextArea
          label="Encoded output"
          value={output}
          onChange={setOutput}
          placeholder="Percent-encoded output appears here."
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm font-semibold text-slate-700" htmlFor="url-encode-mode">
          Encoding mode
        </label>
        <select
          id="url-encode-mode"
          value={mode}
          onChange={(event) => setMode(event.target.value as UrlEncodingMode)}
          className="rounded-lg border-3 border-black bg-white px-3 py-2 text-sm text-slate-700 shadow-neo-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
        >
          <option value="component">Component (encodeURIComponent)</option>
          <option value="full">Full URL (encodeURI)</option>
        </select>
        {error ? <span className="text-sm font-semibold text-rose-600">{error}</span> : null}
      </div>
      <p className="text-xs text-slate-600">
        Component mode encodes reserved characters like / ? &amp; = so values are safe inside query strings. Full URL mode keeps separators intact.
      </p>

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
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          disabled={!output}
        >
          Copy
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleSample}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Load sample
        </button>
      </div>

      <p className="text-xs text-slate-500">Works only on text you provide. No data is stored.</p>
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
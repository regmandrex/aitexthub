"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import { decodeUrl, type UrlEncodingMode } from '@/lib/encoding';

export function UrlDecodeTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState<UrlEncodingMode>('component');

  const handleDecode = () => {
    if (!input.trim()) {
      setError('Enter an encoded URL or value to decode.');
      setOutput('');
      return;
    }

    try {
      setOutput(decodeUrl(input, mode));
      setError('');
    } catch (err) {
      setError('Invalid encoded string. Check for malformed percent sequences.');
      setOutput('');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  const handleSample = () => {
    setInput('https://example.com/search?q=red%20shoes&sort=price&ref=summer%20sale');
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Encoded input"
          value={input}
          onChange={setInput}
          placeholder="Paste percent-encoded text or a URL to decode..."
          rows={12}
        />
        <ToolTextArea
          label="Decoded output"
          value={output}
          onChange={setOutput}
          placeholder="Readable output appears here."
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm font-semibold text-slate-700" htmlFor="url-decode-mode">
          Decoding mode
        </label>
        <select
          id="url-decode-mode"
          value={mode}
          onChange={(event) => setMode(event.target.value as UrlEncodingMode)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
        >
          <option value="component">Component (decodeURIComponent)</option>
          <option value="full">Full URL (decodeURI)</option>
        </select>
        {error ? <span className="text-sm font-semibold text-rose-600">{error}</span> : null}
      </div>
      <p className="text-xs text-slate-600">
        Use component mode for query values and fragments. Full URL mode keeps separators intact and avoids decoding reserved characters.
      </p>

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
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
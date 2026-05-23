"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

type EncodeMode = 'component' | 'full';

export function UrlEncoderDecoderTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState<EncodeMode>('component');

  const handleEncode = () => {
    const encoder = mode === 'full' ? encodeURI : encodeURIComponent;
    setOutput(encoder(input));
    setError('');
  };

  const handleDecode = () => {
    try {
      const decoder = mode === 'full' ? decodeURI : decodeURIComponent;
      setOutput(decoder(input));
      setError('');
    } catch (err) {
      setError('Invalid encoded string. Check for malformed escape sequences.');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder="Paste text or URL to encode/decode..."
          rows={12}
        />
        <ToolTextArea
          label="Output"
          value={output}
          onChange={setOutput}
          placeholder="Encoded or decoded output will appear here."
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm font-semibold text-slate-700" htmlFor="encoding-mode">
          Encoding mode
        </label>
        <select
          id="encoding-mode"
          value={mode}
          onChange={(event) => setMode(event.target.value as EncodeMode)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
        >
          <option value="component">Component (encodeURIComponent)</option>
          <option value="full">Full URL (encodeURI)</option>
        </select>
        {error ? <span className="text-sm font-semibold text-red-600">{error}</span> : null}
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
          onClick={handleDecode}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Decode
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
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
      </div>
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
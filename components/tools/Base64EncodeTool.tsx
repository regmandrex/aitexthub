"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import { encodeBase64 } from '@/lib/encoding';

export function Base64EncodeTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [urlSafe, setUrlSafe] = useState(false);
  const [padding, setPadding] = useState(true);

  const handleEncode = () => {
    if (!input.trim()) {
      setError('Enter text to encode as Base64.');
      setOutput('');
      return;
    }

    setOutput(encodeBase64(input, { urlSafe, padding }));
    setError('');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  const handleSample = () => {
    setInput('Sample text with symbols & spaces');
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
          placeholder="Paste text to encode as Base64..."
          rows={12}
        />
        <ToolTextArea
          label="Base64 output"
          value={output}
          onChange={setOutput}
          placeholder="Base64 output appears here."
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
          URL-safe output (- and _)
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={padding}
            onChange={(event) => setPadding(event.target.checked)}
          />
          Include padding (=)
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
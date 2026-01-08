"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { textToHex, type TextToHexOptions } from '@/lib/text-to-hex';

export function TextToHexTool() {
  const [input, setInput] = useState('');
  const [uppercase, setUppercase] = useState(false);
  const [spaceSeparated, setSpaceSeparated] = useState(true);

  const output = useMemo(() => textToHex(input, { uppercase, spaceSeparated }), [input, uppercase, spaceSeparated]);

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleSample = () => {
    setInput('Hello World!');
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Input text"
          value={input}
          onChange={setInput}
          placeholder="Type or paste text to convert..."
          rows={10}
        />
        <ToolTextArea
          label="Hexadecimal output"
          value={output}
          onChange={() => undefined}
          placeholder="The hex representation appears here."
          rows={10}
          readOnly
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-800">Output options</h3>
        <div className="mt-3 space-y-3 text-sm text-slate-700">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(event) => setUppercase(event.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            Uppercase hex
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={spaceSeparated}
              onChange={(event) => setSpaceSeparated(event.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            Space-separated output
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
          disabled={!output}
        >
          Copy output
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
          Load example
        </button>
      </div>

      <p className="text-xs text-slate-500">Works only on text you provide. No data is stored.</p>
    </div>
  );
}



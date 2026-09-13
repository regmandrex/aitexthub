"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import { encodeTextToMorse } from '@/lib/morse';

export function MorseCodeGeneratorTool() {
  const [input, setInput] = useState('');
  const [useSlashSeparator, setUseSlashSeparator] = useState(true);

  const output = useMemo(() => encodeTextToMorse(input, { useSlashSeparator }), [input, useSlashSeparator]);

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleSample = () => {
    setInput('Meet me at dawn. Signal with lightning-fast dots.');
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Input text"
          value={input}
          onChange={setInput}
           placeholder="Type or paste text to encode..."
          rows={10}
        />
        <ToolTextArea
          label="Morse output"
          value={output}
          onChange={() => undefined}
           placeholder="The Morse code appears here."
          rows={10}
          readOnly
        />
      </div>

      <div className="rounded-xl border-3 border-black bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-800">Spacing options</h3>
        <p className="mt-2 text-xs text-slate-600">
          Letters are separated by single spaces. Choose whether words become slashes or double spaces.
        </p>
        <label className="mt-3 flex items-center gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={useSlashSeparator}
            onChange={(event) => setUseSlashSeparator(event.target.checked)}
            className="h-4 w-4 rounded border-black text-brand-600 focus:ring-brand-500"
          />
          Use slash (/) between words
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
          disabled={!output}
        >
          Copy Morse
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
          Load sample phrase
        </button>
      </div>

      <p className="text-xs text-slate-500">All processing runs locally. No text is stored or transmitted.</p>
    </div>
  );
}

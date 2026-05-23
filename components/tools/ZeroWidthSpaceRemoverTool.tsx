"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const ZERO_WIDTH_REGEX = /[\u200B\u200C\u200D\u2060\uFEFF\u200E\u200F]/g;

export function ZeroWidthSpaceRemoverTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [removedCount, setRemovedCount] = useState(0);

  const handleRemove = () => {
    const matches = input.match(ZERO_WIDTH_REGEX);
    setRemovedCount(matches ? matches.length : 0);
    setOutput(input.replace(ZERO_WIDTH_REGEX, ''));
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setRemovedCount(0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Input text"
          value={input}
          onChange={setInput}
          placeholder="Paste text with zero-width characters..."
          rows={12}
        />
        <ToolTextArea
          label="Output"
          value={output}
          onChange={setOutput}
          placeholder="Clean text will appear here."
          rows={12}
          readOnly
          helperText={removedCount ? `Removed ${removedCount} characters` : 'No removals yet'}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleRemove}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Remove zero-width spaces
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
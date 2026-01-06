"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { cleanSpaces } from '@/lib/tools/spaceRemover';

type SpaceRemoverToolProps = {
  modelName?: string;
};

export function SpaceRemoverTool(_: SpaceRemoverToolProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClean = () => {
    setOutput(cleanSpaces(input));
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
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
          placeholder="Paste text to clean..."
          rows={12}
        />
        <ToolTextArea
          label="Output"
          value={output}
          onChange={setOutput}
          placeholder="Cleaned text will appear here."
          rows={12}
          readOnly
          helperText="Copy the cleaned text when ready."
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleClean}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Remove spaces
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

    </div>
  );
}




























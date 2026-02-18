"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { cleanSpaces } from '@/lib/tools/spaceRemover';

type SpaceRemoverToolProps = {
  modelName?: string;
};

const labels = {
  inputLabel: 'Input text',
  outputLabel: 'Output',
  inputPlaceholder: 'Paste or type text here…',
  outputPlaceholder: 'Cleaned text appears here.',
  helperText: 'Extra spaces are collapsed; line breaks are kept.',
  removeButton: 'Remove extra spaces',
  copyButton: 'Copy',
  clearButton: 'Clear',
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
          label={labels.inputLabel}
          value={input}
          onChange={setInput}
          placeholder={labels.inputPlaceholder}
          rows={12}
        />
        <ToolTextArea
          label={labels.outputLabel}
          value={output}
          onChange={setOutput}
          placeholder={labels.outputPlaceholder}
          rows={12}
          readOnly
          helperText={labels.helperText}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleClean}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {labels.removeButton}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {labels.copyButton}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {labels.clearButton}
        </button>
      </div>

    </div>
  );
}







































"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const LABELS = {
  inputLabel: 'Input text',
  inputPlaceholder: 'Paste or type text here…',
  outputLabel: 'Output',
  outputPlaceholder: 'Text with no whitespace appears here.',
  helperText: 'All spaces, tabs, and line breaks are removed.',
  removeButton: 'Remove whitespace',
  copyButton: 'Copy',
  clearButton: 'Clear',
};

export function RemoveWhitespaceTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const removeWhitespace = (text: string): string => {
    // Remove all whitespace characters: spaces, tabs, newlines, etc.
    return text.replace(/\s+/g, '');
  };

  const handleRemove = () => {
    setOutput(removeWhitespace(input));
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
          label={LABELS.inputLabel}
          value={input}
          onChange={setInput}
          placeholder={LABELS.inputPlaceholder}
          rows={12}
        />
        <ToolTextArea
          label={LABELS.outputLabel}
          value={output}
          onChange={setOutput}
          placeholder={LABELS.outputPlaceholder}
          rows={12}
          readOnly
          helperText={LABELS.helperText}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleRemove}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {LABELS.removeButton}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {LABELS.copyButton}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {LABELS.clearButton}
        </button>
      </div>
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
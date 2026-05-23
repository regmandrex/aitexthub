"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const DASH_REGEX = /\s*[\u2013\u2014\u2015]\s*/g;

const LABELS = {
  inputLabel: 'Input text',
  inputPlaceholder: 'Paste or type text here…',
  outputLabel: 'Output',
  outputPlaceholder: 'Processed text appears here.',
  replacementLabel: 'Replacement',
  replacementPlaceholder: ' e.g. " - " or space',
  collapseSpacesLabel: 'Collapse multiple spaces',
  replaceButton: 'Replace dashes',
  copyButton: 'Copy',
  clearButton: 'Clear',
};

export function EmDashRemoverTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [replacement, setReplacement] = useState(' - ');
  const [collapseSpaces, setCollapseSpaces] = useState(true);

  const handleProcess = () => {
    const effectiveReplacement = replacement.trim().length === 0 ? ' ' : replacement;
    let result = input.replace(DASH_REGEX, effectiveReplacement);
    if (collapseSpaces) {
      result = result.replace(/[ \t]{2,}/g, ' ').replace(/[ \t]+\n/g, '\n');
    }
    setOutput(result);
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
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold text-slate-700">
          {"Replacement text (leave blank for a space)"}
          <input
            type="text"
            value={replacement}
            onChange={(event) => setReplacement(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-slate-800 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder={LABELS.replacementPlaceholder}
          />
        </label>
        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={collapseSpaces}
            onChange={() => setCollapseSpaces((prev) => !prev)}
          />
          {LABELS.collapseSpacesLabel}
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleProcess}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {LABELS.replaceButton}
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
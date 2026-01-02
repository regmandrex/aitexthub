"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';

export function RemoveLineBreaksTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [preserveParagraphs, setPreserveParagraphs] = useState(true);
  const [replaceWithSpace, setReplaceWithSpace] = useState(true);
  const [collapseSpaces, setCollapseSpaces] = useState(true);

  const handleRemove = () => {
    const normalized = input.replace(/\r\n/g, '\n');
    const paragraphMarker = '__PARAGRAPH_BREAK__';

    let result = normalized;
    if (preserveParagraphs) {
      result = result.replace(/\n{2,}/g, paragraphMarker);
    }

    const replacement = replaceWithSpace ? ' ' : '';
    result = result.replace(/\n+/g, replacement);

    if (preserveParagraphs) {
      result = result.replace(new RegExp(paragraphMarker, 'g'), '\n\n');
    }

    if (collapseSpaces) {
      result = result.replace(/[ \t]{2,}/g, ' ');
    }

    setOutput(result.trim());
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
          placeholder="Paste text with line breaks..."
          rows={12}
        />
        <ToolTextArea
          label="Output"
          value={output}
          onChange={setOutput}
          placeholder="Joined text will appear here."
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={preserveParagraphs}
            onChange={() => setPreserveParagraphs((prev) => !prev)}
          />
          Preserve paragraph breaks
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={replaceWithSpace}
            onChange={() => setReplaceWithSpace((prev) => !prev)}
          />
          Replace line breaks with spaces
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={collapseSpaces}
            onChange={() => setCollapseSpaces((prev) => !prev)}
          />
          Collapse extra spaces
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleRemove}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Remove line breaks
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

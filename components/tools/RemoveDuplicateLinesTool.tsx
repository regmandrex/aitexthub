"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';

export function RemoveDuplicateLinesTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [trimLines, setTrimLines] = useState(true);
  const [removeEmptyLines, setRemoveEmptyLines] = useState(false);
  const [removedCount, setRemovedCount] = useState(0);

  const handleRemove = () => {
    const normalized = input.replace(/\r\n/g, '\n');
    const lines = normalized.split('\n');
    const seen = new Set<string>();
    const outputLines: string[] = [];
    let removed = 0;

    for (const line of lines) {
      const trimmed = trimLines ? line.trim() : line;
      if (removeEmptyLines && trimmed === '') {
        removed += 1;
        continue;
      }
      const key = ignoreCase ? trimmed.toLowerCase() : trimmed;
      if (seen.has(key)) {
        removed += 1;
        continue;
      }
      seen.add(key);
      outputLines.push(trimLines ? trimmed : line);
    }

    setRemovedCount(removed);
    setOutput(outputLines.join('\n'));
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
          placeholder="Paste text with duplicate lines..."
          rows={12}
        />
        <ToolTextArea
          label="Output"
          value={output}
          onChange={setOutput}
          placeholder="De-duplicated text will appear here."
          rows={12}
          readOnly
          helperText={removedCount ? `${removedCount} lines removed` : 'No lines removed yet'}
        />
      </div>

      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={trimLines}
            onChange={() => setTrimLines((prev) => !prev)}
          />
          Trim lines before comparing
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={ignoreCase}
            onChange={() => setIgnoreCase((prev) => !prev)}
          />
          Ignore case
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={removeEmptyLines}
            onChange={() => setRemoveEmptyLines((prev) => !prev)}
          />
          Remove empty lines
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleRemove}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Remove duplicates
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

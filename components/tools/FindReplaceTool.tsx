"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function FindReplaceTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [findValue, setFindValue] = useState('');
  const [replaceValue, setReplaceValue] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [matchCount, setMatchCount] = useState(0);

  const handleReplace = () => {
    if (!findValue) {
      setOutput(input);
      setMatchCount(0);
      return;
    }

    const escaped = escapeRegExp(findValue);
    const pattern = wholeWord ? `\\b${escaped}\\b` : escaped;
    const flags = caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(pattern, flags);
    const matches = input.match(regex) || [];
    setMatchCount(matches.length);
    setOutput(input.replace(regex, replaceValue));
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setFindValue('');
    setReplaceValue('');
    setMatchCount(0);
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
          placeholder="Paste text to search..."
          rows={12}
        />
        <ToolTextArea
          label="Output"
          value={output}
          onChange={setOutput}
          placeholder="Updated text will appear here."
          rows={12}
          readOnly
          helperText={matchCount ? `${matchCount} matches` : 'No matches yet'}
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold text-slate-700">
          Find
          <input
            type="text"
            value={findValue}
            onChange={(event) => setFindValue(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-slate-800 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="Text to find"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-slate-700">
          Replace with
          <input
            type="text"
            value={replaceValue}
            onChange={(event) => setReplaceValue(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-slate-800 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="Replacement text"
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={caseSensitive}
            onChange={() => setCaseSensitive((prev) => !prev)}
          />
          Case sensitive
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={wholeWord}
            onChange={() => setWholeWord((prev) => !prev)}
          />
          Match whole word
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleReplace}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Replace text
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

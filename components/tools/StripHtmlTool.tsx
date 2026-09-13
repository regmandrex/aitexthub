"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

function stripHtml(input: string, preserveLineBreaks: boolean) {
  if (typeof window === 'undefined') {
    return input.replace(/<[^>]*>/g, preserveLineBreaks ? '\n' : ' ');
  }

  const container = document.createElement('div');
  container.innerHTML = input;
  const rawText = preserveLineBreaks ? container.innerText : container.textContent || '';
  return rawText.replace(/\r\n/g, '\n');
}

export function StripHtmlTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [preserveLineBreaks, setPreserveLineBreaks] = useState(true);
  const [collapseWhitespace, setCollapseWhitespace] = useState(true);

  const handleStrip = () => {
    let result = stripHtml(input, preserveLineBreaks);
    if (collapseWhitespace) {
      result = preserveLineBreaks
        ? result.replace(/[ \t]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n')
        : result.replace(/\s+/g, ' ');
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
          label="Input HTML"
          value={input}
          onChange={setInput}
          placeholder="Paste HTML to strip..."
          rows={12}
        />
        <ToolTextArea
          label="Output"
          value={output}
          onChange={setOutput}
          placeholder="Plain text will appear here."
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={preserveLineBreaks}
            onChange={() => setPreserveLineBreaks((prev) => !prev)}
          />
          Preserve line breaks
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={collapseWhitespace}
            onChange={() => setCollapseWhitespace((prev) => !prev)}
          />
          Collapse extra whitespace
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleStrip}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Strip HTML
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Copy
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
      </div>
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
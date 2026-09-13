"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

const INVISIBLE_CHARACTERS = [
  { label: 'Zero-width space', char: '\u200B', token: '[ZWSP]' },
  { label: 'Zero-width non-joiner', char: '\u200C', token: '[ZWNJ]' },
  { label: 'Zero-width joiner', char: '\u200D', token: '[ZWJ]' },
  { label: 'Word joiner', char: '\u2060', token: '[WJ]' },
  { label: 'Byte order mark', char: '\uFEFF', token: '[BOM]' },
  { label: 'No-break space', char: '\u00A0', token: '[NBSP]' },
  { label: 'Soft hyphen', char: '\u00AD', token: '[SHY]' },
  { label: 'Narrow no-break space', char: '\u202F', token: '[NNBSP]' },
  { label: 'Thin space', char: '\u2009', token: '[THIN]' },
  { label: 'Hair space', char: '\u200A', token: '[HAIR]' },
  { label: 'En space', char: '\u2002', token: '[ENSP]' },
  { label: 'Em space', char: '\u2003', token: '[EMSP]' },
  { label: 'Left-to-right mark', char: '\u200E', token: '[LRM]' },
  { label: 'Right-to-left mark', char: '\u200F', token: '[RLM]' },
  { label: 'Ideographic space', char: '\u3000', token: '[IDEOSPACE]' },
];

type ReportItem = {
  label: string;
  token: string;
  count: number;
};

function markInvisibleCharacters(text: string) {
  let result = text;
  for (const item of INVISIBLE_CHARACTERS) {
    if (!result.includes(item.char)) continue;
    result = result.split(item.char).join(item.token);
  }
  return result;
}

function buildReport(text: string) {
  const items: ReportItem[] = INVISIBLE_CHARACTERS.map((item) => ({
    label: item.label,
    token: item.token,
    count: text.split(item.char).length - 1,
  }));
  const total = items.reduce((sum, item) => sum + item.count, 0);
  return { items, total };
}

export function InvisibleCharacterDetectorTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [report, setReport] = useState<{ items: ReportItem[]; total: number } | null>(null);

  const handleDetect = () => {
    setReport(buildReport(input));
    setOutput(markInvisibleCharacters(input));
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setReport(null);
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
          placeholder="Paste text to scan for invisible characters..."
          rows={12}
        />
        <ToolTextArea
          label="Preview with markers"
          value={output}
          onChange={setOutput}
          placeholder="Detected markers like [ZWSP] will appear here."
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleDetect}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Detect characters
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

      {report ? (
        <div className="rounded-xl border-3 border-black bg-slate-50 p-4 text-sm text-slate-800">
          <h3 className="text-base font-semibold text-slate-900">Detected characters</h3>
          <p className="mt-1 text-xs text-slate-600">Total invisible characters: {report.total}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {report.items.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                <span className="text-slate-700">{item.label}</span>
                <span className="font-semibold text-slate-900">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
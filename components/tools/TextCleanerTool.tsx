"use client";

import { useState } from 'react';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

function normalizeUnicode(text: string) {
  if (typeof text.normalize === 'function') {
    try {
      return text.normalize('NFKC');
    } catch {
      return text;
    }
  }
  return text;
}

function stripZeroWidth(text: string) {
  return text.replace(/[\u200B-\u200D\uFEFF\u2060]/g, '');
}

type Options = {
  removeBlankLines: boolean;
  normalizeWhitespace: boolean;
  unicodeNormalize: boolean;
  removeZeroWidth: boolean;
};

const defaultOptions: Options = {
  removeBlankLines: true,
  normalizeWhitespace: true,
  unicodeNormalize: true,
  removeZeroWidth: true,
};

type CleanStats = {
  hiddenRemoved: number;
  nbspConverted: number;
  blankLinesRemoved: number;
  spaceRunsCollapsed: number;
  totalChars: number;
  totalLines: number;
};

export function TextCleanerTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [stats, setStats] = useState<CleanStats | null>(null);
  const [options, setOptions] = useState<Options>(defaultOptions);

  const toggle = (key: keyof Options) => setOptions((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleClean = () => {
    let text = input;
    let hiddenRemoved = 0;
    let nbspConverted = 0;
    let blankLinesRemoved = 0;
    let spaceRunsCollapsed = 0;

    if (options.removeZeroWidth) {
      hiddenRemoved = (text.match(/[\u200B-\u200D\uFEFF\u2060]/g) || []).length;
      text = stripZeroWidth(text);
    }
    if (options.unicodeNormalize) {
      // NFKC folds NBSP (and narrow NBSP) into regular spaces
      nbspConverted = (text.match(/[\u00A0\u202F]/g) || []).length;
      text = normalizeUnicode(text);
    }
    if (options.removeBlankLines) {
      const before = text.split('\n').length;
      text = text.split(/\n+/).filter((line) => line.trim() !== '').join('\n');
      blankLinesRemoved = before - text.split('\n').length;
    }
    if (options.normalizeWhitespace) {
      spaceRunsCollapsed = (text.match(/[ \t]{2,}/g) || []).length;
      text = text.replace(/[ \t]+/g, ' ');
    }
    setOutput(text);
    setStats({
      hiddenRemoved,
      nbspConverted,
      blankLinesRemoved,
      spaceRunsCollapsed,
      totalChars: text.length,
      totalLines: text === '' ? 0 : text.split('\n').length,
    });
  };

  return (
    <div className="space-y-4">
      <label className="block space-y-2">
        <span className="text-sm font-semibold text-slate-900">Input text</span>
        <textarea
          className="w-full rounded-lg border-3 border-black px-3 py-2 text-sm shadow-neo-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste text to clean..."
        />
      </label>

      <div className="flex flex-wrap gap-2">
        <label className="flex items-center gap-2 text-xs font-semibold text-slate-800">
          <input type="checkbox" className="h-4 w-4" checked={options.removeBlankLines} onChange={() => toggle('removeBlankLines')} />
          Remove extra blank lines
        </label>
        <label className="flex items-center gap-2 text-xs font-semibold text-slate-800">
          <input type="checkbox" className="h-4 w-4" checked={options.normalizeWhitespace} onChange={() => toggle('normalizeWhitespace')} />
          Normalize whitespace
        </label>
        <label className="flex items-center gap-2 text-xs font-semibold text-slate-800">
          <input type="checkbox" className="h-4 w-4" checked={options.unicodeNormalize} onChange={() => toggle('unicodeNormalize')} />
          Unicode normalize (NFKC)
        </label>
        <label className="flex items-center gap-2 text-xs font-semibold text-slate-800">
          <input type="checkbox" className="h-4 w-4" checked={options.removeZeroWidth} onChange={() => toggle('removeZeroWidth')} />
          Remove zero-width characters
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleClean}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Clean text
        </button>
        <button
          type="button"
          onClick={() => {
            setInput('');
            setOutput('');
            setStats(null);
            setOptions(defaultOptions);
          }}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(output)}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Copy output
        </button>
      </div>

      {stats && (
        <div className="flex flex-wrap gap-2">
          {([
            [stats.hiddenRemoved, 'Hidden removed'],
            [stats.nbspConverted, 'NBSP converted'],
            [stats.blankLinesRemoved, 'Blank lines removed'],
            [stats.spaceRunsCollapsed, 'Space runs collapsed'],
            [stats.totalChars, 'Total chars'],
            [stats.totalLines, 'Total lines'],
          ] as Array<[number, string]>).map(([value, label]) => (
            <span
              key={label}
              className="inline-flex items-center gap-1 rounded-full border-3 border-black bg-white px-3 py-1 text-xs text-slate-700 shadow-neo-sm"
            >
              <span className="font-semibold text-slate-900">{value}</span> {label}
            </span>
          ))}
        </div>
      )}

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-slate-900">Output</span>
        <textarea
          className="w-full rounded-lg border-3 border-black bg-slate-50 px-3 py-2 text-sm shadow-neo-sm focus:outline-none"
          rows={8}
          value={output}
          readOnly
          placeholder="Cleaned text will appear here"
        />
      </label>
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
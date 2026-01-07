"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { extractNumbers, type NumberExtractOptions } from '@/lib/number-extract';

export function ExtractNumbersFromTextTool() {
  const [input, setInput] = useState('');
  const [keepOrder, setKeepOrder] = useState(true);
  const [uniqueOnly, setUniqueOnly] = useState(false);
  const [delimiter, setDelimiter] = useState<'comma' | 'space' | 'newline'>('comma');

  const output = useMemo(
    () => extractNumbers(input, { keepOrder, uniqueOnly, delimiter }),
    [input, keepOrder, uniqueOnly, delimiter]
  );

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleSample = () => {
    setInput('I have 3 apples, 2.5 oranges, and 10 bananas. The price is $15.99. Order #12345.');
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Input text"
          value={input}
          onChange={setInput}
          placeholder="Paste text containing numbers..."
          rows={10}
        />
        <ToolTextArea
          label="Extracted numbers"
          value={output}
          onChange={() => undefined}
          placeholder="Extracted numbers will appear here."
          rows={10}
          readOnly
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-800">Extraction options</h3>
        <div className="mt-3 space-y-3">
          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={keepOrder}
              onChange={(event) => setKeepOrder(event.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            Keep original order
          </label>
          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={uniqueOnly}
              onChange={(event) => setUniqueOnly(event.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            Unique numbers only
          </label>
          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-700">Delimiter:</p>
            <div className="flex gap-4 text-sm text-slate-700">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="delimiter"
                  value="comma"
                  checked={delimiter === 'comma'}
                  onChange={() => setDelimiter('comma')}
                  className="h-4 w-4 border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                Comma
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="delimiter"
                  value="space"
                  checked={delimiter === 'space'}
                  onChange={() => setDelimiter('space')}
                  className="h-4 w-4 border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                Space
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="delimiter"
                  value="newline"
                  checked={delimiter === 'newline'}
                  onChange={() => setDelimiter('newline')}
                  className="h-4 w-4 border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                Newline
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
          disabled={!output}
        >
          Copy output
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleSample}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Load example
        </button>
      </div>

      <p className="text-xs text-slate-500">Works only on text you provide. No data is stored.</p>
    </div>
  );
}


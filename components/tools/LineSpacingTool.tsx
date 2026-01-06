"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { adjustLineSpacing, type LineSpacingOption } from '@/lib/tools/lineSpacing';

type LineSpacingToolProps = {
  modelName?: string;
};

export function LineSpacingTool(_: LineSpacingToolProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [spacing, setSpacing] = useState<LineSpacingOption>('single');
  const [customSpacing, setCustomSpacing] = useState(2);

  const handleAdjust = () => {
    const options: any = { spacing };
    if (spacing === 'custom') {
      options.customSpacing = customSpacing;
    }
    setOutput(adjustLineSpacing(input, options));
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
          placeholder="Paste text to adjust line spacing..."
          rows={12}
        />
        <ToolTextArea
          label="Output"
          value={output}
          onChange={setOutput}
          placeholder="Text with adjusted line spacing will appear here."
          rows={12}
          readOnly
          helperText="Copy the adjusted text when ready."
        />
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-900">Line Spacing</label>
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="spacing"
                value="single"
                checked={spacing === 'single'}
                onChange={(e) => setSpacing(e.target.value as LineSpacingOption)}
                className="text-brand-700 focus:ring-brand-500"
              />
              <span className="text-sm text-slate-700">Single</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="spacing"
                value="1.5"
                checked={spacing === '1.5'}
                onChange={(e) => setSpacing(e.target.value as LineSpacingOption)}
                className="text-brand-700 focus:ring-brand-500"
              />
              <span className="text-sm text-slate-700">1.5</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="spacing"
                value="double"
                checked={spacing === 'double'}
                onChange={(e) => setSpacing(e.target.value as LineSpacingOption)}
                className="text-brand-700 focus:ring-brand-500"
              />
              <span className="text-sm text-slate-700">Double</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="spacing"
                value="custom"
                checked={spacing === 'custom'}
                onChange={(e) => setSpacing(e.target.value as LineSpacingOption)}
                className="text-brand-700 focus:ring-brand-500"
              />
              <span className="text-sm text-slate-700">Custom</span>
            </label>
          </div>
        </div>

        {spacing === 'custom' && (
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-900">Custom Line Breaks</label>
            <input
              type="number"
              min="1"
              max="10"
              value={customSpacing}
              onChange={(e) => setCustomSpacing(parseInt(e.target.value) || 1)}
              className="w-32 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            />
            <p className="text-xs text-slate-600">Number of line breaks between paragraphs (1-10)</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleAdjust}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Adjust Line Spacing
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


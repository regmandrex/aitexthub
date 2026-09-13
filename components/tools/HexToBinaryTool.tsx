"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import { hexToBinary, validateHexInput } from '@/lib/hex';

export function HexToBinaryTool() {
  const [input, setInput] = useState('');
  const [groupNibbles, setGroupNibbles] = useState(true);
  const [groupBytes, setGroupBytes] = useState(false);
  const [removeSpaces, setRemoveSpaces] = useState(false);

  const { output, error } = useMemo(() => {
    const validation = validateHexInput(input);
    if (validation.error) {
      return { output: '', error: validation.error };
    }
    if (!validation.normalized) {
      return { output: '', error: '' };
    }
    return {
      output: hexToBinary(validation.normalized, { groupNibbles, groupBytes, removeSpaces }),
      error: '',
    };
  }, [input, groupBytes, groupNibbles, removeSpaces]);

  const handleClear = () => {
    setInput('');
  };

  const handleSample = () => {
    setInput('0x2A');
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <ToolTextArea
            label="Hex input"
            value={input}
            onChange={setInput}
            placeholder="Example: 0x2A or FF AA 01"
            rows={10}
          />
          <p className="text-xs text-slate-600">Spaces are ignored. Optional 0x prefix allowed at the start.</p>
          {error ? <p className="text-xs font-semibold text-rose-600">{error}</p> : null}
        </div>
        <ToolTextArea
          label="Binary output"
          value={output}
          onChange={() => undefined}
          placeholder="Binary output appears here."
          rows={10}
          readOnly
        />
      </div>

      <div className="rounded-xl border-3 border-black bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-800">Output options</h3>
        <div className="mt-3 grid gap-3 text-sm text-slate-700 md:grid-cols-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={groupNibbles}
              onChange={(event) => setGroupNibbles(event.target.checked)}
            />
            Group by 4-bit nibble
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={groupBytes}
              onChange={(event) => setGroupBytes(event.target.checked)}
            />
            Group by bytes (8-bit)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={removeSpaces}
              onChange={(event) => setRemoveSpaces(event.target.checked)}
            />
            Remove spaces
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
          disabled={!output}
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
        <button
          type="button"
          onClick={handleSample}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Load sample
        </button>
      </div>

      <p className="text-xs text-slate-500">Works on text you provide. No data is stored.</p>
    </div>
  );
}

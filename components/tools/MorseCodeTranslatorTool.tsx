"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';
import { decodeMorseToText, encodeTextToMorse, isValidMorseInput } from '@/lib/morse';

export function MorseCodeTranslatorTool() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState('');
  const [useSlashSeparator, setUseSlashSeparator] = useState(true);

  const { output, error } = useMemo(() => {
    if (mode === 'decode') {
      if (!isValidMorseInput(input)) {
        return {
          output: '',
          error: 'Use only dots, dashes, spaces, slashes, or line breaks when decoding.',
        };
      }
      return { output: decodeMorseToText(input), error: '' };
    }
    return { output: encodeTextToMorse(input, { useSlashSeparator }), error: '' };
  }, [input, mode, useSlashSeparator]);

  const handleClear = () => {
    setInput('');
  };

  const handleSample = () => {
    if (mode === 'encode') {
      setInput('Meet me at the gate at 7 pm.');
      return;
    }
    setInput('... --- ... / .--. .-.. . .- ... . / .... . .-.. .--.');
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setMode('encode')}
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            mode === 'encode'
              ? 'bg-brand-700 text-white'
              : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'
          }`}
        >
          Text to Morse
        </button>
        <button
          type="button"
          onClick={() => setMode('decode')}
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            mode === 'decode'
              ? 'bg-brand-700 text-white'
              : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'
          }`}
        >
          Morse to Text
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <ToolTextArea
            label={mode === 'encode' ? 'Text input' : 'Morse input'}
            value={input}
            onChange={setInput}
            placeholder={mode === 'encode' ? 'Type or paste text to encode...' : 'Use dots, dashes, spaces, and /'}
            rows={10}
          />
          <p className="text-xs text-slate-600">
            {mode === 'encode'
              ? 'Letters are separated by spaces in Morse output.'
              : 'Letters use single spaces. Words use /, two spaces, or new lines.'}
          </p>
          {error ? <p className="text-xs font-semibold text-rose-600">{error}</p> : null}
        </div>
        <ToolTextArea
          label={mode === 'encode' ? 'Morse output' : 'Text output'}
          value={output}
          onChange={() => undefined}
          placeholder={mode === 'encode' ? 'Morse output appears here.' : 'Decoded text appears here.'}
          rows={10}
          readOnly
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-800">Options</h3>
        <div className="mt-3 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useSlashSeparator}
              onChange={(event) => setUseSlashSeparator(event.target.checked)}
              disabled={mode === 'decode'}
            />
            Use / as word separator (encoding)
          </label>
          <span className="text-xs text-slate-500">Standard dots and dashes only. Timing is not generated.</span>
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
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleSample}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Load sample
        </button>
      </div>

      <p className="text-xs text-slate-500">Works on text you provide. No data is stored.</p>
    </div>
  );
}

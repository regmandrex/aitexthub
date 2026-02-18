"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';

const LABELS = {
  inputLabel: 'Input text',
  inputPlaceholder: 'Paste or type text here…',
  countsLabel: 'Counts',
  wordsLabel: 'Words',
  charactersLabel: 'Characters',
  charactersNoSpacesLabel: 'Characters (no spaces)',
  linesLabel: 'Lines',
  sentencesLabel: 'Sentences',
  paragraphsLabel: 'Paragraphs',
  copyReport: 'Copy report',
  clear: 'Clear',
};

export function WordCounterTool() {
  const [input, setInput] = useState('');

  const stats = useMemo(() => {
    const normalized = input.replace(/\r\n/g, '\n');
    const trimmed = normalized.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const characters = normalized.length;
    const charactersNoSpaces = normalized.replace(/\s/g, '').length;
    const lines = normalized ? normalized.split('\n').length : 0;
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter((part) => part.trim()).length : 0;
    const paragraphs = trimmed ? trimmed.split(/\n{2,}/).filter((part) => part.trim()).length : 0;

    return {
      words,
      characters,
      charactersNoSpaces,
      lines,
      sentences,
      paragraphs,
    };
  }, [input]);

  const handleClear = () => {
    setInput('');
  };

  const handleCopy = () => {
    const report = [
      `${LABELS.wordsLabel}: ${stats.words}`,
      `${LABELS.charactersLabel}: ${stats.characters}`,
      `${LABELS.charactersNoSpacesLabel}: ${stats.charactersNoSpaces}`,
      `${LABELS.linesLabel}: ${stats.lines}`,
      `${LABELS.sentencesLabel}: ${stats.sentences}`,
      `${LABELS.paragraphsLabel}: ${stats.paragraphs}`,
    ].join('\n');
    navigator.clipboard.writeText(report);
  };

  const statCards = useMemo(() => [
    { label: LABELS.wordsLabel, value: stats.words },
    { label: LABELS.charactersLabel, value: stats.characters },
    { label: LABELS.charactersNoSpacesLabel, value: stats.charactersNoSpaces },
    { label: LABELS.linesLabel, value: stats.lines },
    { label: LABELS.sentencesLabel, value: stats.sentences },
    { label: LABELS.paragraphsLabel, value: stats.paragraphs },
  ], [stats]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label={LABELS.inputLabel}
          value={input}
          onChange={setInput}
          placeholder={LABELS.inputPlaceholder}
          rows={12}
        />
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800">{LABELS.countsLabel}</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {statCards.map((card) => (
              <div key={card.label} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <p className="text-xs font-semibold text-slate-600">{card.label}</p>
                <p className="text-lg font-semibold text-slate-900">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {LABELS.copyReport}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {LABELS.clear}
        </button>
      </div>
    </div>
  );
}

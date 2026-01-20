"use client";

import { useMemo, useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { useI18n } from '@/lib/client-i18n';

export function WordCounterTool() {
  const { t } = useI18n();
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
      `${t('WordCounterPage.ui.wordsLabel')}: ${stats.words}`,
      `${t('WordCounterPage.ui.charactersLabel')}: ${stats.characters}`,
      `${t('WordCounterPage.ui.charactersNoSpacesLabel')}: ${stats.charactersNoSpaces}`,
      `${t('WordCounterPage.ui.linesLabel')}: ${stats.lines}`,
      `${t('WordCounterPage.ui.sentencesLabel')}: ${stats.sentences}`,
      `${t('WordCounterPage.ui.paragraphsLabel')}: ${stats.paragraphs}`,
    ].join('\n');
    navigator.clipboard.writeText(report);
  };

  const statCards = useMemo(() => [
    { label: t('WordCounterPage.ui.wordsLabel'), value: stats.words },
    { label: t('WordCounterPage.ui.charactersLabel'), value: stats.characters },
    { label: t('WordCounterPage.ui.charactersNoSpacesLabel'), value: stats.charactersNoSpaces },
    { label: t('WordCounterPage.ui.linesLabel'), value: stats.lines },
    { label: t('WordCounterPage.ui.sentencesLabel'), value: stats.sentences },
    { label: t('WordCounterPage.ui.paragraphsLabel'), value: stats.paragraphs },
  ], [stats, t]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label={t('WordCounterPage.ui.inputLabel')}
          value={input}
          onChange={setInput}
          placeholder={t('WordCounterPage.ui.inputPlaceholder')}
          rows={12}
        />
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-800">{t('WordCounterPage.ui.countsLabel')}</h3>
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
          {t('WordCounterPage.ui.copyStatsButton')}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('WordCounterPage.ui.clearButton')}
        </button>
      </div>
    </div>
  );
}

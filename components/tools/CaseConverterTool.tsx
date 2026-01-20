"use client";

import { useState, useMemo } from 'react';
import ToolTextArea from './ToolTextArea';
import { useI18n } from '@/lib/client-i18n';

type CaseMode = 'upper' | 'lower' | 'title' | 'sentence' | 'toggle';

function toTitleCase(text: string) {
  return text.replace(/\S+/g, (word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`);
}

function toSentenceCase(text: string) {
  const lower = text.toLowerCase();
  return lower.replace(/(^|[.!?]\s+|[\n\r]+\s*)([a-z])/g, (_, prefix: string, letter: string) => {
    return `${prefix}${letter.toUpperCase()}`;
  });
}

function toggleCase(text: string) {
  return text
    .split('')
    .map((char) => {
      const upper = char.toUpperCase();
      const lower = char.toLowerCase();
      if (char === upper && char !== lower) return lower;
      if (char === lower && char !== upper) return upper;
      return char;
    })
    .join('');
}

export function CaseConverterTool() {
  const { t } = useI18n();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<CaseMode>('upper');

  const CASE_OPTIONS: Array<{ value: CaseMode; label: string }> = useMemo(() => [
    { value: 'upper', label: t('CaseConverterPage.ui.caseOptions.upper') },
    { value: 'lower', label: t('CaseConverterPage.ui.caseOptions.lower') },
    { value: 'title', label: t('CaseConverterPage.ui.caseOptions.title') },
    { value: 'sentence', label: t('CaseConverterPage.ui.caseOptions.sentence') },
    { value: 'toggle', label: t('CaseConverterPage.ui.caseOptions.toggle') },
  ], [t]);

  const handleConvert = () => {
    let result = input;
    switch (mode) {
      case 'upper':
        result = input.toUpperCase();
        break;
      case 'lower':
        result = input.toLowerCase();
        break;
      case 'title':
        result = toTitleCase(input);
        break;
      case 'sentence':
        result = toSentenceCase(input);
        break;
      case 'toggle':
        result = toggleCase(input);
        break;
      default:
        result = input;
    }
    setOutput(result);
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
          label={t('CaseConverterPage.ui.inputLabel')}
          value={input}
          onChange={setInput}
          placeholder={t('CaseConverterPage.ui.inputPlaceholder')}
          rows={12}
        />
        <ToolTextArea
          label={t('CaseConverterPage.ui.outputLabel')}
          value={output}
          onChange={setOutput}
          placeholder={t('CaseConverterPage.ui.outputPlaceholder')}
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm font-semibold text-slate-700" htmlFor="case-mode">
          {t('CaseConverterPage.ui.conversionLabel')}
        </label>
        <select
          id="case-mode"
          value={mode}
          onChange={(event) => setMode(event.target.value as CaseMode)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
        >
          {CASE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleConvert}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {t('CaseConverterPage.ui.convertButton')}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('CaseConverterPage.ui.copyButton')}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('CaseConverterPage.ui.clearButton')}
        </button>
      </div>
    </div>
  );
}

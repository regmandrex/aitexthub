"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { useI18n } from '@/lib/client-i18n';

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function FindReplaceTool() {
  const { t } = useI18n();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [findValue, setFindValue] = useState('');
  const [replaceValue, setReplaceValue] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [matchCount, setMatchCount] = useState(0);

  const handleReplace = () => {
    if (!findValue) {
      setOutput(input);
      setMatchCount(0);
      return;
    }

    const escaped = escapeRegExp(findValue);
    const pattern = wholeWord ? `\\b${escaped}\\b` : escaped;
    const flags = caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(pattern, flags);
    const matches = input.match(regex) || [];
    setMatchCount(matches.length);
    setOutput(input.replace(regex, replaceValue));
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setFindValue('');
    setReplaceValue('');
    setMatchCount(0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label={t('FindAndReplacePage.ui.inputLabel')}
          value={input}
          onChange={setInput}
          placeholder={t('FindAndReplacePage.ui.inputPlaceholder')}
          rows={12}
        />
        <ToolTextArea
          label={t('FindAndReplacePage.ui.outputLabel')}
          value={output}
          onChange={setOutput}
          placeholder={t('FindAndReplacePage.ui.outputPlaceholder')}
          rows={12}
          readOnly
          helperText={matchCount ? `${matchCount} ${t('FindAndReplacePage.ui.matchesText')}` : t('FindAndReplacePage.ui.noMatchesHelper')}
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold text-slate-700">
          {t('FindAndReplacePage.ui.findLabel')}
          <input
            type="text"
            value={findValue}
            onChange={(event) => setFindValue(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-slate-800 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder={t('FindAndReplacePage.ui.findPlaceholder')}
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-slate-700">
          {t('FindAndReplacePage.ui.replaceLabel')}
          <input
            type="text"
            value={replaceValue}
            onChange={(event) => setReplaceValue(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-slate-800 shadow-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder={t('FindAndReplacePage.ui.replacePlaceholder')}
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={caseSensitive}
            onChange={() => setCaseSensitive((prev) => !prev)}
          />
          {t('FindAndReplacePage.ui.caseSensitiveLabel')}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={wholeWord}
            onChange={() => setWholeWord((prev) => !prev)}
          />
          {t('FindAndReplacePage.ui.wholeWordLabel')}
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleReplace}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {t('FindAndReplacePage.ui.replaceButton')}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('FindAndReplacePage.ui.copyButton')}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('FindAndReplacePage.ui.clearButton')}
        </button>
      </div>
    </div>
  );
}

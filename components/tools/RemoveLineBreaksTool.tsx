"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { useI18n } from '@/lib/client-i18n';

export function RemoveLineBreaksTool() {
  const { t } = useI18n();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [preserveParagraphs, setPreserveParagraphs] = useState(true);
  const [replaceWithSpace, setReplaceWithSpace] = useState(true);
  const [collapseSpaces, setCollapseSpaces] = useState(true);

  const handleRemove = () => {
    const normalized = input.replace(/\r\n/g, '\n');
    const paragraphMarker = '__PARAGRAPH_BREAK__';

    let result = normalized;
    if (preserveParagraphs) {
      result = result.replace(/\n{2,}/g, paragraphMarker);
    }

    const replacement = replaceWithSpace ? ' ' : '';
    result = result.replace(/\n+/g, replacement);

    if (preserveParagraphs) {
      result = result.replace(new RegExp(paragraphMarker, 'g'), '\n\n');
    }

    if (collapseSpaces) {
      result = result.replace(/[ \t]{2,}/g, ' ');
    }

    setOutput(result.trim());
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
          label={t('RemoveLineBreaksPage.ui.inputLabel')}
          value={input}
          onChange={setInput}
          placeholder={t('RemoveLineBreaksPage.ui.inputPlaceholder')}
          rows={12}
        />
        <ToolTextArea
          label={t('RemoveLineBreaksPage.ui.outputLabel')}
          value={output}
          onChange={setOutput}
          placeholder={t('RemoveLineBreaksPage.ui.outputPlaceholder')}
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={preserveParagraphs}
            onChange={() => setPreserveParagraphs((prev) => !prev)}
          />
          {t('RemoveLineBreaksPage.ui.preserveParagraphs')}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={replaceWithSpace}
            onChange={() => setReplaceWithSpace((prev) => !prev)}
          />
          {t('RemoveLineBreaksPage.ui.replaceWithSpace')}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={collapseSpaces}
            onChange={() => setCollapseSpaces((prev) => !prev)}
          />
          {t('RemoveLineBreaksPage.ui.collapseSpaces')}
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleRemove}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {t('RemoveLineBreaksPage.ui.removeButton')}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('RemoveLineBreaksPage.ui.copyButton')}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('RemoveLineBreaksPage.ui.clearButton')}
        </button>
      </div>
    </div>
  );
}

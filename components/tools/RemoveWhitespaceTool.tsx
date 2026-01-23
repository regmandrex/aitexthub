"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { useI18n } from '@/lib/client-i18n';

export function RemoveWhitespaceTool() {
  const { t } = useI18n();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const removeWhitespace = (text: string): string => {
    // Remove all whitespace characters: spaces, tabs, newlines, etc.
    return text.replace(/\s+/g, '');
  };

  const handleRemove = () => {
    setOutput(removeWhitespace(input));
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
          label={t('RemoveWhitespacePage.ui.inputLabel')}
          value={input}
          onChange={setInput}
          placeholder={t('RemoveWhitespacePage.ui.inputPlaceholder')}
          rows={12}
        />
        <ToolTextArea
          label={t('RemoveWhitespacePage.ui.outputLabel')}
          value={output}
          onChange={setOutput}
          placeholder={t('RemoveWhitespacePage.ui.outputPlaceholder')}
          rows={12}
          readOnly
          helperText={t('RemoveWhitespacePage.ui.helperText')}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleRemove}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {t('RemoveWhitespacePage.ui.removeButton')}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('RemoveWhitespacePage.ui.copyButton')}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('RemoveWhitespacePage.ui.clearButton')}
        </button>
      </div>
    </div>
  );
}

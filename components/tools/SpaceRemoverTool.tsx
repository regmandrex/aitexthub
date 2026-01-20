"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { cleanSpaces } from '@/lib/tools/spaceRemover';
import { useI18n } from '@/lib/client-i18n';

type SpaceRemoverToolProps = {
  modelName?: string;
};

export function SpaceRemoverTool(_: SpaceRemoverToolProps) {
  const { t } = useI18n();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClean = () => {
    setOutput(cleanSpaces(input));
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
          label={t('SpaceRemoverPage.ui.inputLabel')}
          value={input}
          onChange={setInput}
          placeholder={t('SpaceRemoverPage.ui.inputPlaceholder')}
          rows={12}
        />
        <ToolTextArea
          label={t('SpaceRemoverPage.ui.outputLabel')}
          value={output}
          onChange={setOutput}
          placeholder={t('SpaceRemoverPage.ui.outputPlaceholder')}
          rows={12}
          readOnly
          helperText={t('SpaceRemoverPage.ui.helperText')}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleClean}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {t('SpaceRemoverPage.ui.removeButton')}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('SpaceRemoverPage.ui.copyButton')}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('SpaceRemoverPage.ui.clearButton')}
        </button>
      </div>

    </div>
  );
}







































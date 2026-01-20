'use client';

import { useMemo, useState } from 'react';
import CopyButton from './CopyButton';
import ToolTextarea from './ToolTextarea';
import { chatgptSpaceRemover, chatgptTextCleaner, geminiSpaceRemover } from '../lib/tools';
import { useI18n } from '../lib/client-i18n';

type ProcessorKey = 'chatgptTextCleaner' | 'chatgptSpaceRemover' | 'geminiSpaceRemover';

const processors: Record<ProcessorKey, (input: string) => string> = {
  chatgptTextCleaner,
  chatgptSpaceRemover,
  geminiSpaceRemover,
};

type ToolWorkbenchProps = {
  processor: ProcessorKey;
  primaryLabel: string;
  inputLabel?: string;
  outputLabel?: string;
  inputPlaceholder?: string;
  outputPlaceholder?: string;
};

export default function ToolWorkbench({
  processor,
  primaryLabel,
  inputLabel,
  outputLabel,
  inputPlaceholder,
  outputPlaceholder,
}: ToolWorkbenchProps) {
  const { t } = useI18n();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const stats = useMemo(() => {
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    // Detect a broader set of hidden/non-printing spaces (ZWSP, NBSP, thin/figure spaces, BOM, etc.)
    const hiddenMatches = input.match(/[\u200B-\u200D\uFEFF\u00A0\u2000-\u200A\u202F\u205F\u3000]/g);
    const hidden = hiddenMatches ? hiddenMatches.length : 0;
    return { words, hidden };
  }, [input]);

  const handleProcess = () => {
    const processFn = processors[processor];
    const result = processFn ? processFn(input) : input;
    setOutput(result);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextarea
          label={inputLabel ?? t('HomePage.cleanInputLabel')}
          placeholder={inputPlaceholder ?? t('ToolUI.inputPlaceholder')}
          value={input}
          onChange={setInput}
          rows={12}
          labelSecondary={
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">{t('ToolUI.wordsCount', { count: stats.words })}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">{t('ToolUI.hiddenCount', { count: stats.hidden })}</span>
            </div>
          }
        />
        <div className="flex flex-col gap-3">
          <ToolTextarea
            label={outputLabel ?? t('HomePage.cleanOutputLabel')}
            placeholder={outputPlaceholder ?? t('ToolUI.outputPlaceholder')}
            value={output}
            onChange={setOutput}
            rows={12}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleProcess}
          className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-700"
        >
          {primaryLabel}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('ToolUI.clear')}
        </button>
        <CopyButton text={output} label={t('ToolUI.copyOutput')} />
      </div>
    </div>
  );
}

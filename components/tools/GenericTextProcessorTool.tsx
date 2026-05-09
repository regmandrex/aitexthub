"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

interface GenericTextProcessorToolProps {
  processText: (text: string) => string;
  inputLabel?: string;
  outputLabel?: string;
  inputPlaceholder?: string;
  outputPlaceholder?: string;
  processButtonLabel?: string;
  copyButtonLabel?: string;
  clearButtonLabel?: string;
}

export function GenericTextProcessorTool({
  processText,
  inputLabel = 'Input',
  outputLabel = 'Output',
  inputPlaceholder = 'Enter your text here...',
  outputPlaceholder = 'Processed text will appear here...',
  processButtonLabel = 'Process',
  copyButtonLabel = 'Copy',
  clearButtonLabel = 'Clear',
}: GenericTextProcessorToolProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = async () => {
    if (!input.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const processed = processText(input);
    setOutput(processed);
    setIsProcessing(false);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setIsProcessing(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label={inputLabel}
          value={input}
          onChange={setInput}
          placeholder={inputPlaceholder}
          rows={12}
        />
        <ToolTextArea
          label={outputLabel}
          value={output}
          onChange={setOutput}
          placeholder={outputPlaceholder}
          rows={12}
          readOnly
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleProcess}
          disabled={!input.trim() || isProcessing}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            className={`h-4 w-4 ${isProcessing ? 'animate-spin' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {isProcessing ? 'Processing...' : processButtonLabel}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!output || isProcessing}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copyButtonLabel}
        </button>
        <button
          type="button"
          onClick={handleClear}
          disabled={isProcessing}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {clearButtonLabel}
        </button>
      </div>

      {isProcessing && (
        <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
          <svg
            className="h-4 w-4 animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>Analyzing and processing your text...</span>
        </div>
      )}

      {output && !isProcessing ? <HumanizerUpsellCard variant="cleanup" /> : null}
    </div>
  );
}

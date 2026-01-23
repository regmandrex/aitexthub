"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import { useI18n } from '@/lib/client-i18n';

// Code fixing functions
function fixIndentation(text: string): string {
  const lines = text.split('\n');
  let indentLevel = 0;
  const indentSize = 2; // Use 2 spaces
  
  return lines.map(line => {
    const trimmed = line.trim();
    if (trimmed.length === 0) return line; // Preserve empty lines as-is
    
    // Decrease indent for closing braces/brackets
    if (trimmed.match(/^[}\]\)]/)) {
      indentLevel = Math.max(0, indentLevel - 1);
    }
    
    const indented = ' '.repeat(indentLevel * indentSize) + trimmed;
    
    // Increase indent for opening braces/brackets (if not on same line as closing)
    if (trimmed.match(/[{\[\(]$/) && !trimmed.match(/^[}\]\)]/)) {
      indentLevel++;
    }
    
    return indented;
  }).join('\n');
}

function fixQuoteConsistency(text: string): string {
  // Detect most common quote style and convert all to that
  const singleQuotes = (text.match(/'/g) || []).length;
  const doubleQuotes = (text.match(/"/g) || []).length;
  
  // Prefer double quotes (more common in most languages)
  if (singleQuotes > doubleQuotes * 2) {
    // Convert double to single (but preserve escaped quotes)
    return text.replace(/(?<!\\)"/g, "'").replace(/\\"/g, '"');
  }
  // Default: convert single to double (but preserve escaped quotes and apostrophes)
  return text.replace(/(?<!\\)'/g, '"').replace(/\\'/g, "'");
}

function fixCommonSyntax(text: string): string {
  return text
    // Fix double/triple operators first
    .replace(/==\s*=/g, '===')
    .replace(/!=\s*=/g, '!==')
    // Fix spacing around single operators (but preserve in strings)
    .replace(/([^\s=!<>+\-*/%])\s*=\s*([^\s=!<>+\-*/%])/g, '$1 = $2') // Fix = spacing
    .replace(/([^\s=!<>+\-*/%])\s*\+\s*([^\s=!<>+\-*/%])/g, '$1 + $2') // Fix + spacing
    .replace(/([^\s=!<>+\-*/%])\s*-\s*([^\s=!<>+\-*/%])/g, '$1 - $2') // Fix - spacing
    .replace(/([^\s=!<>+\-*/%])\s*\*\s*([^\s=!<>+\-*/%])/g, '$1 * $2') // Fix * spacing
    .replace(/([^\s=!<>+\-*/%])\s*\/\s*([^\s=!<>+\-*/%])/g, '$1 / $2') // Fix / spacing
    // Fix missing spaces after keywords
    .replace(/(if|for|while|switch|function|const|let|var)\s*\(/g, '$1 (')
    // Fix missing spaces after commas
    .replace(/,\s*/g, ', ')
    // Fix multiple spaces (but preserve indentation)
    .split('\n').map(line => {
      const match = line.match(/^(\s*)(.*)$/);
      if (!match) return line;
      const [, indent, content] = match;
      return indent + content.replace(/\s{2,}/g, ' ');
    }).join('\n')
    // Fix trailing spaces
    .replace(/[ \t]+$/gm, '');
}

function fixBracketSpacing(text: string): string {
  return text
    // Add space after opening brackets if missing
    .replace(/([{\[])\s*(\w)/g, '$1 $2')
    // Add space before closing brackets if missing
    .replace(/(\w)\s*([}\]])/g, '$1 $2')
    // But preserve empty objects/arrays
    .replace(/([{\[])\s+([}\]])/g, '$1$2');
}

function removeTrailingSemicolons(text: string): string {
  // Remove semicolons at end of lines (some languages don't need them)
  // This is optional and can be toggled
  return text.replace(/;\s*$/gm, '');
}

function fixCommonTypos(text: string): string {
  const commonFixes: Record<string, string> = {
    'fucntion': 'function',
    'retrun': 'return',
    'fals': 'false',
    'ture': 'true',
    'undefiend': 'undefined',
    'nul': 'null',
    'consol': 'console',
    'lenght': 'length',
  };
  
  let result = text;
  for (const [typo, correct] of Object.entries(commonFixes)) {
    // Only fix whole words
    const regex = new RegExp(`\\b${typo}\\b`, 'gi');
    result = result.replace(regex, correct);
  }
  return result;
}

export function AICodeFixerTool() {
  const { t } = useI18n();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [options, setOptions] = useState({
    fixIndentation: true,
    fixQuoteConsistency: true,
    fixCommonSyntax: true,
    fixBracketSpacing: false, // Off by default as it can be too aggressive
    removeTrailingSemicolons: false, // Off by default (language-specific)
    fixCommonTypos: true,
  });

  const toggleOption = (key: keyof typeof options) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFix = () => {
    let result = input;
    
    // Apply fixes in order
    if (options.fixCommonTypos) {
      result = fixCommonTypos(result);
    }
    if (options.fixQuoteConsistency) {
      result = fixQuoteConsistency(result);
    }
    if (options.fixCommonSyntax) {
      result = fixCommonSyntax(result);
    }
    if (options.fixBracketSpacing) {
      result = fixBracketSpacing(result);
    }
    if (options.fixIndentation) {
      result = fixIndentation(result);
    }
    if (options.removeTrailingSemicolons) {
      result = removeTrailingSemicolons(result);
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
          label={t('AICodeFixerPage.ui.inputLabel')}
          value={input}
          onChange={setInput}
          placeholder={t('AICodeFixerPage.ui.inputPlaceholder')}
          rows={12}
        />
        <ToolTextArea
          label={t('AICodeFixerPage.ui.outputLabel')}
          value={output}
          onChange={setOutput}
          placeholder={t('AICodeFixerPage.ui.outputPlaceholder')}
          rows={12}
          readOnly
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          {t('AICodeFixerPage.ui.optionsTitle')}
        </h3>
        <div className="grid gap-2 md:grid-cols-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.fixIndentation}
              onChange={() => toggleOption('fixIndentation')}
            />
            {t('AICodeFixerPage.ui.fixIndentation')}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.fixQuoteConsistency}
              onChange={() => toggleOption('fixQuoteConsistency')}
            />
            {t('AICodeFixerPage.ui.fixQuoteConsistency')}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.fixCommonSyntax}
              onChange={() => toggleOption('fixCommonSyntax')}
            />
            {t('AICodeFixerPage.ui.fixCommonSyntax')}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.fixBracketSpacing}
              onChange={() => toggleOption('fixBracketSpacing')}
            />
            {t('AICodeFixerPage.ui.fixBracketSpacing')}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.removeTrailingSemicolons}
              onChange={() => toggleOption('removeTrailingSemicolons')}
            />
            {t('AICodeFixerPage.ui.removeTrailingSemicolons')}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.fixCommonTypos}
              onChange={() => toggleOption('fixCommonTypos')}
            />
            {t('AICodeFixerPage.ui.fixCommonTypos')}
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleFix}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {t('AICodeFixerPage.ui.fixButton')}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!output}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400"
        >
          {t('AICodeFixerPage.ui.copyButton')}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {t('AICodeFixerPage.ui.clearButton')}
        </button>
      </div>
    </div>
  );
}

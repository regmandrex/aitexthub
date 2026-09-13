"use client";

import { useState } from 'react';
import ToolTextArea from './ToolTextArea';
import HumanizerUpsellCard from '../HumanizerUpsellCard';

// Code cleaning functions
function removeTrailingSpaces(text: string): string {
  return text.split('\n').map(line => line.replace(/[ \t]+$/, '')).join('\n');
}

function normalizeIndentation(text: string): string {
  // Detect if tabs or spaces are used
  const lines = text.split('\n');
  if (lines.length === 0) return text;
  
  // Find minimum indentation (excluding empty lines)
  const nonEmptyLines = lines.filter(line => line.trim().length > 0);
  if (nonEmptyLines.length === 0) return text;
  
  const minIndent = Math.min(...nonEmptyLines.map(line => {
    const match = line.match(/^(\s*)/);
    return match ? match[1].length : 0;
  }));
  
  // Normalize to 2 spaces (common standard)
  return lines.map(line => {
    if (line.trim().length === 0) return line;
    const match = line.match(/^(\s*)(.*)$/);
    if (!match) return line;
    const [, indent, content] = match;
    const indentLevel = Math.round(indent.length / (minIndent || 1));
    return '  '.repeat(indentLevel) + content;
  }).join('\n');
}

function removeZeroWidthChars(text: string): string {
  return text.replace(/[\u200B-\u200D\uFEFF\u2060]/g, '');
}

function normalizeLineEndings(text: string): string {
  return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

function removeExtraBlankLines(text: string): string {
  return text.replace(/\n{3,}/g, '\n\n');
}

function normalizeWhitespace(text: string): string {
  // Remove multiple spaces (but preserve indentation)
  return text.split('\n').map(line => {
    // Preserve leading whitespace (indentation)
    const match = line.match(/^(\s*)(.*)$/);
    if (!match) return line;
    const [, leading, content] = match;
    // Collapse multiple spaces in content only
    const cleanedContent = content.replace(/[ \t]{2,}/g, ' ');
    return leading + cleanedContent;
  }).join('\n');
}

function cleanOperators(text: string): string {
  // Fix common operator spacing issues without being too aggressive
  return text
    // Fix compound operators first
    .replace(/=\s*=/g, '==') // Fix ==
    .replace(/!\s*=/g, '!=') // Fix !=
    .replace(/<\s*=/g, '<=') // Fix <=
    .replace(/>\s*=/g, '>=') // Fix >=
    .replace(/=\s*>/g, '=>') // Fix =>
    .replace(/<\s*</g, '<<') // Fix <<
    .replace(/>\s*>/g, '>>') // Fix >>
    .replace(/\+\s*\+/g, '++') // Fix ++
    .replace(/-\s*-/g, '--') // Fix --
    .replace(/\+\s*=/g, '+=') // Fix +=
    .replace(/-\s*=/g, '-=') // Fix -=
    .replace(/\*\s*=/g, '*=') // Fix *=
    .replace(/\/\s*=/g, '/=') // Fix /=
    .replace(/%\s*=/g, '%=') // Fix %=
    // Fix spacing around single operators (but preserve existing spacing in strings/comments)
    .replace(/([^\s=!<>+\-*/%])\s*([=+\-*/%])\s*([^\s=!<>+\-*/%])/g, '$1 $2 $3'); // Add spaces around operators
}

export function AICodeCleanerTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [options, setOptions] = useState({
    removeTrailingSpaces: true,
    normalizeIndentation: true,
    removeZeroWidth: true,
    normalizeLineEndings: true,
    removeExtraBlankLines: true,
    normalizeWhitespace: true,
    cleanOperators: false, // Off by default as it can be aggressive
  });

  const toggleOption = (key: keyof typeof options) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleClean = () => {
    let result = input;
    
    // Apply transformations in order
    if (options.normalizeLineEndings) {
      result = normalizeLineEndings(result);
    }
    if (options.removeZeroWidth) {
      result = removeZeroWidthChars(result);
    }
    if (options.removeTrailingSpaces) {
      result = removeTrailingSpaces(result);
    }
    if (options.normalizeWhitespace) {
      result = normalizeWhitespace(result);
    }
    if (options.normalizeIndentation) {
      result = normalizeIndentation(result);
    }
    if (options.removeExtraBlankLines) {
      result = removeExtraBlankLines(result);
    }
    if (options.cleanOperators) {
      result = cleanOperators(result);
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
          label={"Code Input"}
          value={input}
          onChange={setInput}
          placeholder={"Paste your AI-generated code here..."}
          rows={12}
        />
        <ToolTextArea
          label={"Cleaned Code"}
          value={output}
          onChange={setOutput}
          placeholder={"Cleaned code will appear here..."}
          rows={12}
          readOnly
        />
      </div>

      <div className="rounded-xl border-3 border-black bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          {"Cleaning Options"}
        </h3>
        <div className="grid gap-2 md:grid-cols-2">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.removeTrailingSpaces}
              onChange={() => toggleOption('removeTrailingSpaces')}
            />
            {"Remove trailing spaces"}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.normalizeIndentation}
              onChange={() => toggleOption('normalizeIndentation')}
            />
            {"Normalize indentation (2 spaces)"}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.removeZeroWidth}
              onChange={() => toggleOption('removeZeroWidth')}
            />
            {"Remove zero-width characters"}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.normalizeLineEndings}
              onChange={() => toggleOption('normalizeLineEndings')}
            />
            {"Normalize line endings (Unix style)"}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.removeExtraBlankLines}
              onChange={() => toggleOption('removeExtraBlankLines')}
            />
            {"Remove extra blank lines"}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.normalizeWhitespace}
              onChange={() => toggleOption('normalizeWhitespace')}
            />
            {"Normalize whitespace"}
          </label>
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={options.cleanOperators}
              onChange={() => toggleOption('cleanOperators')}
            />
            {"Clean operator spacing"}
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleClean}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          {"Clean Code"}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!output}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400"
        >
          {"Copy"}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex items-center justify-center rounded-lg border-3 border-black bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {"Clear"}
        </button>
      </div>
      {output && <HumanizerUpsellCard />}
    </div>
  );
}
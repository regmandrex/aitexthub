"use client";

import { useState, useMemo } from 'react';
import ToolTextArea from './ToolTextArea';
import MobileAdSlot from '../ads/MobileAdSlot';
import { analyzeWatermarkSignals } from '@/lib/tools/watermarkSignals';

type WatermarkDetectorToolProps = {
  modelName?: string;
};

type HighlightSegment = {
  text: string;
  isHighlighted: boolean;
};

function createHighlightedSegments(text: string): HighlightSegment[] {
  if (!text) return [];

  const segments: HighlightSegment[] = [];
  let lastIndex = 0;
  
  // Collect all matches with their positions
  const matches: Array<{ start: number; end: number }> = [];
  
  // Zero-width characters
  const zeroWidthRegex = /[\u200B\u200C\u200D]/g;
  let match;
  while ((match = zeroWidthRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length });
  }
  
  // BOM
  const bomRegex = /\uFEFF/g;
  while ((match = bomRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length });
  }
  
  // NBSP
  const nbspRegex = /\u00A0/g;
  while ((match = nbspRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length });
  }
  
  // Soft hyphens
  const softHyphenRegex = /\u00AD/g;
  while ((match = softHyphenRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length });
  }
  
  // Repeated whitespace (3+)
  const repeatedWhitespaceRegex = /[ \t]{3,}/g;
  while ((match = repeatedWhitespaceRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length });
  }
  
  // Repeated newlines (3+)
  const repeatedNewlineRegex = /\n{3,}/g;
  while ((match = repeatedNewlineRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length });
  }
  
  // Mixed tabs and spaces
  const mixedTabsSpacesRegex = /\t +| +\t/g;
  while ((match = mixedTabsSpacesRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length });
  }
  
  // Repeated punctuation (3+)
  const repeatedPunctuationRegex = /([.!?,-])\1{2,}/g;
  while ((match = repeatedPunctuationRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length });
  }
  
  // Sort matches by start position
  matches.sort((a, b) => a.start - b.start);
  
  // Merge overlapping matches
  const mergedMatches: Array<{ start: number; end: number }> = [];
  for (const current of matches) {
    if (mergedMatches.length === 0) {
      mergedMatches.push(current);
    } else {
      const last = mergedMatches[mergedMatches.length - 1];
      if (current.start <= last.end) {
        last.end = Math.max(last.end, current.end);
      } else {
        mergedMatches.push(current);
      }
    }
  }
  
  // Create segments
  for (const match of mergedMatches) {
    if (match.start > lastIndex) {
      segments.push({ text: text.substring(lastIndex, match.start), isHighlighted: false });
    }
    segments.push({ text: text.substring(match.start, match.end), isHighlighted: true });
    lastIndex = match.end;
  }
  
  if (lastIndex < text.length) {
    segments.push({ text: text.substring(lastIndex), isHighlighted: false });
  }
  
  return segments.length > 0 ? segments : [{ text, isHighlighted: false }];
}

export function WatermarkDetectorTool(_: WatermarkDetectorToolProps) {
  const [input, setInput] = useState('');
  const [scannedText, setScannedText] = useState('');
  const [report, setReport] = useState<ReturnType<typeof analyzeWatermarkSignals> | null>(null);

  const run = () => {
    setScannedText(input);
    setReport(analyzeWatermarkSignals(input));
  };

  const clear = () => {
    setInput('');
    setScannedText('');
    setReport(null);
  };

  const copyReport = () => {
    if (!report) return;
    const reportText = [
      `Hidden/invisible Unicode found: ${report.hasHiddenUnicode ? 'Yes' : 'No'}`,
      `Suspicious whitespace patterns: ${report.hasSuspiciousWhitespace ? 'Yes' : 'No'}`,
      `Repeated punctuation patterns: ${report.hasRepeatedPunctuation ? 'Yes' : 'No'}`,
      `Zero-width / NBSP count: ${report.zeroWidthCount} / ${report.nbspCount}`,
      `BOM count: ${report.bomCount}`,
      `Soft hyphen count: ${report.softHyphenCount}`,
      `Notes: ${report.summary}`,
    ].join('\n');
    navigator.clipboard.writeText(reportText);
  };

  const highlightedSegments = useMemo(() => {
    return report && scannedText ? createHighlightedSegments(scannedText) : [];
  }, [scannedText, report]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <ToolTextArea
          label="Input text"
          value={input}
          onChange={setInput}
          placeholder="Paste text to inspect..."
          rows={12}
        />
        <MobileAdSlot />
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800">Highlighted</label>
          <div
            className="w-full min-h-[288px] rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm overflow-auto"
            style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
          >
            {highlightedSegments.length > 0 ? (
              <div>
                {highlightedSegments.map((segment, index) => (
                  <span
                    key={index}
                    className={segment.isHighlighted ? 'bg-red-100 text-red-700' : ''}
                  >
                    {segment.text}
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-slate-400">Detected watermarks will appear here highlighted in red.</div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={run}
          className="inline-flex items-center justify-center rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-brand-800"
        >
          Scan Text
        </button>
        <button
          type="button"
          onClick={copyReport}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Copy
        </button>
        <button
          type="button"
          onClick={clear}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
      </div>

      {report ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
          <h3 className="text-base font-semibold text-slate-900">Results</h3>
          <ul className="mt-2 space-y-1">
            <li>Hidden/invisible Unicode found? {report.hasHiddenUnicode ? 'Yes' : 'No'}</li>
            <li>Suspicious whitespace patterns? {report.hasSuspiciousWhitespace ? 'Yes' : 'No'}</li>
            <li>Repeated punctuation patterns? {report.hasRepeatedPunctuation ? 'Yes' : 'No'}</li>
            <li>Zero-width / NBSP count: {report.zeroWidthCount} / {report.nbspCount}</li>
            <li>BOM count: {report.bomCount}</li>
            <li>Soft hyphen count: {report.softHyphenCount}</li>
          </ul>
          <p className="mt-3 text-xs text-slate-600">
            {report.summary} Results show possible formatting anomalies and are not a guarantee of authorship or origin.
          </p>
        </div>
      ) : null}
    </div>
  );
}

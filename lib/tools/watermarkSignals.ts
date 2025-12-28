export type WatermarkSignalReport = {
  zeroWidthCount: number;
  nbspCount: number;
  softHyphenCount: number;
  bomCount: number;
  repeatedWhitespaceCount: number;
  mixedTabsAndSpaces: boolean;
  repeatedPunctuationCount: number;
  hasHiddenUnicode: boolean;
  hasSuspiciousWhitespace: boolean;
  hasRepeatedPunctuation: boolean;
  summary: string;
};

const zeroWidthRegex = /[\u200B\u200C\u200D]/g;
const bomRegex = /\uFEFF/g;
const nbspRegex = /\u00A0/g;
const softHyphenRegex = /\u00AD/g;
const repeatedPunctuationRegex = /([.!?,-])\1{2,}/g;

export function analyzeWatermarkSignals(input: string): WatermarkSignalReport {
  const zeroWidthCount = (input.match(zeroWidthRegex) || []).length;
  const bomCount = (input.match(bomRegex) || []).length;
  const nbspCount = (input.match(nbspRegex) || []).length;
  const softHyphenCount = (input.match(softHyphenRegex) || []).length;

  const repeatedSpaces = (input.match(/[ \t]{3,}/g) || []).length;
  const repeatedNewlines = (input.match(/\n{3,}/g) || []).length;
  const repeatedWhitespaceCount = repeatedSpaces + repeatedNewlines;
  const mixedTabsAndSpaces = /\t +| +\t/.test(input);
  const repeatedPunctuationCount = (input.match(repeatedPunctuationRegex) || []).length;

  const hasHiddenUnicode = zeroWidthCount + bomCount + nbspCount + softHyphenCount > 0;
  const hasSuspiciousWhitespace = repeatedWhitespaceCount > 0 || mixedTabsAndSpaces;
  const hasRepeatedPunctuation = repeatedPunctuationCount > 0;

  const summary =
    hasHiddenUnicode || hasSuspiciousWhitespace || hasRepeatedPunctuation
      ? 'Possible formatting artifacts were detected. These can be AI-text artifacts or benign copy/paste noise.'
      : 'No obvious formatting artifacts detected. Results are informational and not a guarantee.';

  return {
    zeroWidthCount,
    nbspCount,
    softHyphenCount,
    bomCount,
    repeatedWhitespaceCount,
    mixedTabsAndSpaces,
    repeatedPunctuationCount,
    hasHiddenUnicode,
    hasSuspiciousWhitespace,
    hasRepeatedPunctuation,
    summary,
  };
}

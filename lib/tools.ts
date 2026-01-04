// 1) Remove hidden characters while preserving line breaks
export function removeHiddenChars(text: string): string {
  return text
    .replace(/\r\n/g, '\n') // normalize Windows line endings
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/\u00A0/g, ' ');
}

// 2) Normalize punctuation (curly quotes -> straight, em/en dashes -> space)
export function normalizePunctuation(text: string): string {
  return text
    // curly double quotes -> straight
    .replace(/[""]/g, '"')
    // curly single quotes / apostrophes -> straight
    .replace(/['']/g, "'")
    // em dash / en dash / horizontal bar -> single space
    .replace(/[\u2013\u2014\u2015]/g, ' ')
    // collapse multiple hyphens to a single hyphen (for any remaining runs)
    .replace(/-{2,}/g, '-');
}

// 3) Strip BASIC markdown markers while preserving line structure
export function stripBasicMarkdown(text: string): string {
  return text
    .split(/\r?\n/)
    .map((line) =>
      line
        // remove horizontal rule style lines (---, ***, ___ or single hyphen after normalization)
        .replace(/^\s*[-*_]+\s*$/, '')
        // headings: #, ##, ### at line start
        .replace(/^\s{0,3}#{1,6}\s+/, '')
        // blockquote marker >
        .replace(/^\s{0,3}>\s+/, '')
        // bullet list markers -, *, +
        .replace(/^\s{0,3}[-*+]\s+/, '')
        // bold/italic markers **text**, *text*, __text__, _text_
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/__(.*?)__/g, '$1')
        .replace(/_(.*?)_/g, '$1')
        // inline code `code`
        .replace(/`([^`]+)`/g, '$1')
    )
    .join('\n');
}

// 4) Normalize inline spacing per line (no newline collapsing)
export function normalizeInlineSpaces(text: string): string {
  return text
    .split('\n')
    .map((line) =>
      line
        .replace(/[ \t]{2,}/g, ' ') // collapse 2+ spaces/tabs to single space
        .replace(/[ \t]+$/g, '') // trim trailing spaces/tabs
    )
    .join('\n');
}

// 4) Optionally tame only ridiculous blank blocks, not normal paragraphs
export function softenBlankLines(text: string): string {
  // 4+ newlines -> 2 newlines (keeps paragraphs intact)
  return text.replace(/\n{4,}/g, '\n\n');
}

// Main ChatGPT AI Text Cleaner pipeline
export function chatgptTextCleaner(text: string): string {
  let result = removeHiddenChars(text);
  result = normalizePunctuation(result);
  result = stripBasicMarkdown(result);
  result = normalizeInlineSpaces(result);
  result = softenBlankLines(result); // safe for normal paragraphs
  return result;
}

// Convenience helpers for other tools (left intact but unused in main cleaner)
export function chatgptSpaceRemover(text: string): string {
  if (!text) return '';
  return text.replace(/\r\n/g, '\n').replace(/[\u200B-\u200D\uFEFF]/g, '').replace(/\u00A0/g, ' ');
}

export function geminiSpaceRemover(text: string): string {
  if (!text) return '';
  return text.replace(/\r\n/g, '\n').replace(/[\u200B-\u200D\uFEFF]/g, '').replace(/\u00A0/g, ' ');
}

// DEV helper for verifying line breaks (use in dev only)
export function __debugLineBreaks() {
  const sample = 'Line 1\n\nLine 2\nLine 3\n\nLine 4';
  const result = chatgptTextCleaner(sample);
  console.log('DEBUG_SAMPLE:', JSON.stringify(sample));
  console.log('DEBUG_RESULT:', JSON.stringify(result));
}

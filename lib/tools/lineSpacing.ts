export type LineSpacingOption = 'single' | '1.5' | 'double' | 'custom';

export type LineSpacingOptions = {
  spacing: LineSpacingOption;
  customSpacing?: number; // number of line breaks for custom spacing
  preserveEmptyLines?: boolean; // whether to preserve existing empty lines
};

export const defaultLineSpacingOptions: LineSpacingOptions = {
  spacing: 'single',
  customSpacing: 1,
  preserveEmptyLines: false,
};

/**
 * Adjusts line spacing in text by normalizing line breaks between paragraphs
 * @param input - The input text
 * @param opts - Line spacing options
 * @returns Text with adjusted line spacing
 */
export function adjustLineSpacing(input: string, opts: Partial<LineSpacingOptions> = {}): string {
  if (!input) return '';

  const options = { ...defaultLineSpacingOptions, ...opts };

  // Normalize line endings
  let text = input.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Determine target spacing
  let targetBreaks: number;
  switch (options.spacing) {
    case 'single':
      targetBreaks = 1;
      break;
    case '1.5':
      // For 1.5 spacing, use 1 line break (same as single in plain text)
      // In rich text editors, 1.5 would be handled differently, but for plain text
      // we use single spacing as the closest approximation
      targetBreaks = 1;
      break;
    case 'double':
      targetBreaks = 2;
      break;
    case 'custom':
      targetBreaks = Math.max(1, Math.min(10, options.customSpacing ?? 1));
      break;
    default:
      targetBreaks = 1;
  }

  // Split into lines
  const lines = text.split('\n');

  // Process lines to normalize spacing between paragraphs
  const processedLines: string[] = [];
  let lastContentIndex = -1; // Track the last line index that had content

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const hasContent = line.trim().length > 0;

    if (hasContent) {
      // If we had content before and there were empty lines in between,
      // add the target spacing
      if (lastContentIndex >= 0 && i > lastContentIndex + 1) {
        // There were empty lines between the last content and this content
        // Add target spacing
        for (let j = 0; j < targetBreaks; j++) {
          processedLines.push('');
        }
      }

      // Add the content line
      processedLines.push(line);
      lastContentIndex = i;
    }
    // Skip empty lines - we'll add them as needed when we see the next content line
  }

  // Remove trailing empty lines
  while (processedLines.length > 0 && processedLines[processedLines.length - 1] === '') {
    processedLines.pop();
  }

  // Join with newlines
  return processedLines.join('\n');
}

/**
 * Convert text to single spacing (one line break between paragraphs)
 */
export function toSingleSpacing(text: string): string {
  return adjustLineSpacing(text, { spacing: 'single' });
}

/**
 * Convert text to double spacing (two line breaks between paragraphs)
 */
export function toDoubleSpacing(text: string): string {
  return adjustLineSpacing(text, { spacing: 'double' });
}


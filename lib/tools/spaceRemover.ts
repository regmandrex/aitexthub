export type SpaceRemoverOptions = {
  collapseExtraSpaces: boolean;
  removeAllSpaces: boolean;
  trimLines: boolean;
  normalizeWhitespace: boolean;
};

export const defaultSpaceRemoverOptions: SpaceRemoverOptions = {
  collapseExtraSpaces: true,
  removeAllSpaces: false,
  trimLines: true,
  normalizeWhitespace: true,
};

function normalizeInput(text: string) {
  return text.replace(/\r\n?/g, '\n').replace(/\t/g, ' ').replace(/\u00A0/g, ' ');
}

export function cleanSpaces(input: string, opts: Partial<SpaceRemoverOptions> = {}) {
  const options = { ...defaultSpaceRemoverOptions, ...opts };
  let text = options.normalizeWhitespace ? normalizeInput(input) : input;

  if (options.removeAllSpaces) {
    return text.replace(/[ \t\u00A0]+/g, '');
  }

  const cleanedLines = text.split('\n').map((line) => {
    let current = line;
    if (options.trimLines) {
      current = current.trim();
    }
    if (options.collapseExtraSpaces) {
      current = current.replace(/[ \t\u00A0]{2,}/g, ' ');
    }
    return current;
  });

  return cleanedLines.join('\n');
}

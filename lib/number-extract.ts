export type NumberExtractOptions = {
  keepOrder: boolean;
  uniqueOnly: boolean;
  delimiter: 'comma' | 'space' | 'newline';
};

const NUMBER_PATTERN = /-?\d+\.?\d*/g;

export function extractNumbers(text: string, options: NumberExtractOptions): string {
  if (!text.trim()) return '';

  const matches = text.match(NUMBER_PATTERN);
  if (!matches || matches.length === 0) return '';

  let numbers = matches.map((m) => m.trim()).filter(Boolean);

  if (options.uniqueOnly) {
    const seen = new Set<string>();
    numbers = numbers.filter((n) => {
      if (seen.has(n)) return false;
      seen.add(n);
      return true;
    });
  }

  if (!options.keepOrder) {
    numbers.sort((a, b) => parseFloat(a) - parseFloat(b));
  }

  const delimiterMap = {
    comma: ', ',
    space: ' ',
    newline: '\n',
  };

  return numbers.join(delimiterMap[options.delimiter]);
}


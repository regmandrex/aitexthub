export type MorseOptions = {
  useSlashSeparator?: boolean;
};

export const MORSE_MAP: Record<string, string> = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  '_': '..--.-',
  '"': '.-..-.',
  '$': '...-..-',
  '@': '.--.-.',
};

export const MORSE_TABLE: Array<{ symbol: string; code: string }> = Object.entries(MORSE_MAP).map(([symbol, code]) => ({
  symbol,
  code,
}));

const MORSE_REVERSE_MAP: Record<string, string> = Object.entries(MORSE_MAP).reduce((acc, [symbol, code]) => {
  acc[code] = symbol;
  return acc;
}, {} as Record<string, string>);

export function encodeTextToMorse(text: string, options: MorseOptions = {}): string {
  if (!text.trim()) return '';
  const useSlashSeparator = options.useSlashSeparator ?? true;
  const wordSeparator = useSlashSeparator ? ' / ' : '  ';

  return text
    .trim()
    .split(/\s+/)
    .map((word) =>
      word
        .split('')
        .map((char) => MORSE_MAP[char.toUpperCase()] ?? '?')
        .join(' ')
    )
    .join(wordSeparator)
    .trim();
}

export function decodeMorseToText(morse: string): string {
  const cleaned = morse.replace(/\r/g, '').trim();
  if (!cleaned) return '';

  const wordTokens = cleaned.split(/\s{2,}|\/|\n/).filter(Boolean);
  const decodedWords = wordTokens.map((word) => {
    const letters = word.trim().split(/\s+/);
    return letters.map((letter) => MORSE_REVERSE_MAP[letter] ?? '?').join('');
  });

  return decodedWords.join(' ');
}

export function isValidMorseInput(morse: string): boolean {
  if (!morse.trim()) return true;
  return !/[^.\-\s\/\n\r]/.test(morse);
}

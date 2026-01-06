const HEX_ALLOWED = /^[0-9a-fA-F\s]*$/;

export type HexValidationResult = {
  normalized: string;
  error?: string;
};

export type BinaryFormatOptions = {
  groupNibbles: boolean;
  groupBytes: boolean;
  removeSpaces: boolean;
};

const HEX_TO_BIN: Record<string, string> = {
  '0': '0000',
  '1': '0001',
  '2': '0010',
  '3': '0011',
  '4': '0100',
  '5': '0101',
  '6': '0110',
  '7': '0111',
  '8': '1000',
  '9': '1001',
  a: '1010',
  b: '1011',
  c: '1100',
  d: '1101',
  e: '1110',
  f: '1111',
};

function stripLeadingPrefix(input: string): string {
  return input.replace(/^\s*0x/i, '');
}

export function validateHexInput(input: string): HexValidationResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return { normalized: '' };
  }

  const withoutPrefix = stripLeadingPrefix(trimmed);
  if (!HEX_ALLOWED.test(withoutPrefix)) {
    return { normalized: '', error: 'Only 0-9, a-f, and spaces are allowed. Optional 0x prefix is OK.' };
  }

  if (/0x/i.test(withoutPrefix)) {
    return { normalized: '', error: 'Use a single 0x prefix at the start only.' };
  }

  const normalized = withoutPrefix.replace(/\s+/g, '').toLowerCase();
  if (!normalized) {
    return { normalized: '' };
  }

  return { normalized };
}

export function hexToBinary(hex: string, options: BinaryFormatOptions): string {
  if (!hex) return '';

  const bits = hex
    .toLowerCase()
    .split('')
    .map((char) => HEX_TO_BIN[char])
    .filter(Boolean)
    .join('');

  if (!bits) return '';

  if (options.removeSpaces) {
    return bits;
  }

  if (options.groupBytes) {
    return bits.replace(/(.{8})/g, '$1 ').trim();
  }

  if (options.groupNibbles) {
    return bits.replace(/(.{4})/g, '$1 ').trim();
  }

  return bits;
}

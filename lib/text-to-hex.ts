export type TextToHexOptions = {
  uppercase: boolean;
  spaceSeparated: boolean;
};

export function textToHex(text: string, options: TextToHexOptions): string {
  if (!text.trim()) return '';

  // Use TextEncoder to get UTF-8 bytes
  const encoder = new TextEncoder();
  const utf8Bytes = encoder.encode(text);

  const hexArray: string[] = [];
  for (const byte of utf8Bytes) {
    let hex = byte.toString(16);
    if (options.uppercase) {
      hex = hex.toUpperCase();
    } else {
      hex = hex.toLowerCase();
    }
    // Pad to 2 digits
    hex = hex.padStart(2, '0');
    hexArray.push(hex);
  }

  const separator = options.spaceSeparated ? ' ' : '';
  return hexArray.join(separator);
}


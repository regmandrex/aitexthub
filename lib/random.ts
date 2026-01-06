export type RandomHexOptions = {
  uppercase?: boolean;
  prefix?: boolean;
};

function getRandomBytes(length: number): Uint8Array {
  const bytes = new Uint8Array(length);
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(bytes);
    return bytes;
  }

  for (let i = 0; i < bytes.length; i += 1) {
    bytes[i] = Math.floor(Math.random() * 256);
  }

  return bytes;
}

export function generateRandomHex(length: number, options: RandomHexOptions = {}): string {
  const safeLength = Math.max(1, Math.floor(length));
  const bytesNeeded = Math.ceil(safeLength / 2);
  const bytes = getRandomBytes(bytesNeeded);
  let hex = Array.from(bytes)
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, safeLength);

  if (options.uppercase) {
    hex = hex.toUpperCase();
  }

  if (options.prefix) {
    hex = `0x${hex}`;
  }

  return hex;
}

export function generateRandomHexList(length: number, count: number, options: RandomHexOptions = {}): string[] {
  const safeCount = Math.max(1, Math.floor(count));
  return Array.from({ length: safeCount }, () => generateRandomHex(length, options));
}

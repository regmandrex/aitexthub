export type UrlEncodingMode = 'component' | 'full';

export function encodeUrl(input: string, mode: UrlEncodingMode): string {
  return mode === 'full' ? encodeURI(input) : encodeURIComponent(input);
}

export function decodeUrl(input: string, mode: UrlEncodingMode): string {
  return mode === 'full' ? decodeURI(input) : decodeURIComponent(input);
}

export type Base64Options = {
  urlSafe?: boolean;
  padding?: boolean;
};

function bytesToBinary(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return binary;
}

function binaryToBytes(binary: string): Uint8Array {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export function encodeBase64(input: string, options: Base64Options = {}): string {
  const bytes = new TextEncoder().encode(input);
  let base64 = btoa(bytesToBinary(bytes));

  if (options.urlSafe) {
    base64 = base64.replace(/\+/g, '-').replace(/\//g, '_');
  }

  if (options.padding === false) {
    base64 = base64.replace(/=+$/g, '');
  }

  return base64;
}

function normalizeBase64Input(input: string, options: Base64Options = {}): string {
  let normalized = input.trim().replace(/\s+/g, '');
  const hasUrlSafe = /[-_]/.test(normalized);

  if (options.urlSafe || hasUrlSafe) {
    normalized = normalized.replace(/-/g, '+').replace(/_/g, '/');
  }

  const remainder = normalized.length % 4;
  if (remainder) {
    normalized += '='.repeat(4 - remainder);
  }

  return normalized;
}

export function decodeBase64(input: string, options: Base64Options = {}): string {
  const normalized = normalizeBase64Input(input, options);

  if (!/^[A-Za-z0-9+/=]*$/.test(normalized)) {
    throw new Error('Invalid Base64 input.');
  }

  const binary = atob(normalized);
  const bytes = binaryToBytes(binary);
  return new TextDecoder().decode(bytes);
}

export type Utf8HexOptions = {
  uppercase?: boolean;
};

export function encodeUtf8ToHex(input: string, options: Utf8HexOptions = {}): string {
  const bytes = new TextEncoder().encode(input);
  const uppercase = options.uppercase ?? true;
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0'));
  return (uppercase ? hex.map((value) => value.toUpperCase()) : hex).join(' ');
}

function normalizeHexInput(input: string): string {
  return input.trim().replace(/0x/gi, '').replace(/[\s,]+/g, '');
}

export function decodeUtf8FromHex(input: string): string {
  const cleaned = normalizeHexInput(input);

  if (!cleaned) {
    throw new Error('Enter hexadecimal byte values to decode.');
  }

  if (!/^[0-9a-fA-F]+$/.test(cleaned) || cleaned.length % 2 !== 0) {
    throw new Error('Use valid hex bytes (00-FF) with optional spaces.');
  }

  const bytes = new Uint8Array(cleaned.length / 2);
  for (let i = 0; i < cleaned.length; i += 2) {
    bytes[i / 2] = parseInt(cleaned.slice(i, i + 2), 16);
  }

  const decoder = new TextDecoder('utf-8', { fatal: true });
  return decoder.decode(bytes);
}

const PUNYCODE_BASE = 36;
const PUNYCODE_TMIN = 1;
const PUNYCODE_TMAX = 26;
const PUNYCODE_SKEW = 38;
const PUNYCODE_DAMP = 700;
const PUNYCODE_INITIAL_BIAS = 72;
const PUNYCODE_INITIAL_N = 128;
const PUNYCODE_DELIMITER = '-';

function ucs2decode(input: string): number[] {
  const output: number[] = [];
  for (let i = 0; i < input.length; i += 1) {
    const value = input.charCodeAt(i);
    if (value >= 0xd800 && value <= 0xdbff && i + 1 < input.length) {
      const extra = input.charCodeAt(i + 1);
      if ((extra & 0xfc00) === 0xdc00) {
        output.push(((value - 0xd800) << 10) + (extra - 0xdc00) + 0x10000);
        i += 1;
        continue;
      }
    }
    output.push(value);
  }
  return output;
}

function ucs2encode(array: number[]): string {
  let output = '';
  for (const value of array) {
    if (value > 0xffff) {
      const code = value - 0x10000;
      output += String.fromCharCode((code >>> 10) + 0xd800, (code & 0x3ff) + 0xdc00);
    } else {
      output += String.fromCharCode(value);
    }
  }
  return output;
}

function basicToDigit(codePoint: number): number {
  if (codePoint - 48 < 10) return codePoint - 22;
  if (codePoint - 65 < 26) return codePoint - 65;
  if (codePoint - 97 < 26) return codePoint - 97;
  return PUNYCODE_BASE;
}

function digitToBasic(digit: number): string {
  if (digit < 26) return String.fromCharCode(97 + digit);
  return String.fromCharCode(48 + (digit - 26));
}

function adapt(delta: number, numPoints: number, firstTime: boolean): number {
  let adjusted = delta;
  adjusted = firstTime ? Math.floor(adjusted / PUNYCODE_DAMP) : Math.floor(adjusted / 2);
  adjusted += Math.floor(adjusted / numPoints);
  let k = 0;
  while (adjusted > ((PUNYCODE_BASE - PUNYCODE_TMIN) * PUNYCODE_TMAX) / 2) {
    adjusted = Math.floor(adjusted / (PUNYCODE_BASE - PUNYCODE_TMIN));
    k += PUNYCODE_BASE;
  }
  return k + Math.floor(((PUNYCODE_BASE - PUNYCODE_TMIN + 1) * adjusted) / (adjusted + PUNYCODE_SKEW));
}

function punycodeEncode(input: string): string {
  const inputCodePoints = ucs2decode(input);
  let n = PUNYCODE_INITIAL_N;
  let delta = 0;
  let bias = PUNYCODE_INITIAL_BIAS;
  const output: string[] = [];

  for (const current of inputCodePoints) {
    if (current < 0x80) {
      output.push(String.fromCharCode(current));
    }
  }

  let handledCPCount = output.length;
  const basicLength = output.length;

  if (basicLength) {
    output.push(PUNYCODE_DELIMITER);
  }

  while (handledCPCount < inputCodePoints.length) {
    let m = Number.MAX_SAFE_INTEGER;
    for (const current of inputCodePoints) {
      if (current >= n && current < m) {
        m = current;
      }
    }

    delta += (m - n) * (handledCPCount + 1);
    n = m;

    for (const current of inputCodePoints) {
      if (current < n) {
        delta += 1;
      }

      if (current === n) {
        let q = delta;
        for (let k = PUNYCODE_BASE; ; k += PUNYCODE_BASE) {
          const t = k <= bias ? PUNYCODE_TMIN : k >= bias + PUNYCODE_TMAX ? PUNYCODE_TMAX : k - bias;
          if (q < t) break;
          output.push(digitToBasic(t + ((q - t) % (PUNYCODE_BASE - t))));
          q = Math.floor((q - t) / (PUNYCODE_BASE - t));
        }
        output.push(digitToBasic(q));
        bias = adapt(delta, handledCPCount + 1, handledCPCount === basicLength);
        delta = 0;
        handledCPCount += 1;
      }
    }

    delta += 1;
    n += 1;
  }

  return output.join('');
}

function punycodeDecode(input: string): string {
  const normalized = input.toLowerCase();
  let n = PUNYCODE_INITIAL_N;
  let i = 0;
  let bias = PUNYCODE_INITIAL_BIAS;
  const output: number[] = [];

  const basic = normalized.lastIndexOf(PUNYCODE_DELIMITER);
  const startIndex = basic > -1 ? basic + 1 : 0;

  if (basic > -1) {
    for (let j = 0; j < basic; j += 1) {
      output.push(normalized.charCodeAt(j));
    }
  }

  let index = startIndex;
  while (index < normalized.length) {
    const oldi = i;
    let w = 1;
    for (let k = PUNYCODE_BASE; ; k += PUNYCODE_BASE) {
      if (index >= normalized.length) {
        throw new Error('Invalid punycode input.');
      }
      const digit = basicToDigit(normalized.charCodeAt(index));
      index += 1;
      if (digit >= PUNYCODE_BASE) {
        throw new Error('Invalid punycode input.');
      }
      i += digit * w;
      const t = k <= bias ? PUNYCODE_TMIN : k >= bias + PUNYCODE_TMAX ? PUNYCODE_TMAX : k - bias;
      if (digit < t) {
        break;
      }
      w *= PUNYCODE_BASE - t;
    }

    const outLength = output.length + 1;
    bias = adapt(i - oldi, outLength, oldi === 0);
    n += Math.floor(i / outLength);
    const insertion = i % outLength;
    output.splice(insertion, 0, n);
    i = 0;
  }

  return ucs2encode(output);
}

function toAsciiLabel(label: string): string {
  if (!label) return label;
  if (!/[^\x00-\x7F]/.test(label)) {
    return label;
  }
  return `xn--${punycodeEncode(label)}`;
}

function toUnicodeLabel(label: string): string {
  if (!label) return label;
  if (label.toLowerCase().startsWith('xn--')) {
    return punycodeDecode(label.slice(4));
  }
  return label;
}

function mapDomainLabels(domain: string, mapLabel: (label: string) => string): string {
  const normalized = domain.replace(/[\u3002\uFF0E\uFF61]/g, '.');
  const trailingDot = normalized.endsWith('.');
  const labels = normalized.split('.');
  const mapped = labels.map(mapLabel).join('.');
  if (trailingDot && !mapped.endsWith('.')) {
    return `${mapped}.`;
  }
  return mapped;
}

function convertHostname(input: string, mode: 'encode' | 'decode'): string {
  const mapLabel = mode === 'encode' ? toAsciiLabel : toUnicodeLabel;
  return mapDomainLabels(input, mapLabel);
}

function replaceHostname(input: string, mode: 'encode' | 'decode'): string {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new Error('Enter a domain or URL.');
  }
  if (/\s/.test(trimmed)) {
    throw new Error('Remove spaces from the domain or URL.');
  }

  const schemeMatch = trimmed.match(/^([a-zA-Z][a-zA-Z0-9+.-]*:\/\/)(.*)$/);
  const prefix = schemeMatch ? schemeMatch[1] : '';
  const rest = schemeMatch ? schemeMatch[2] : trimmed;

  const splitIndex = rest.search(/[/?#]/);
  const authority = splitIndex === -1 ? rest : rest.slice(0, splitIndex);
  const suffix = splitIndex === -1 ? '' : rest.slice(splitIndex);

  const atIndex = authority.lastIndexOf('@');
  const userInfo = atIndex >= 0 ? authority.slice(0, atIndex + 1) : '';
  const hostPort = atIndex >= 0 ? authority.slice(atIndex + 1) : authority;

  if (!hostPort) {
    throw new Error('Enter a valid hostname.');
  }
  if (hostPort.startsWith('[')) {
    throw new Error('IPv6 literals are not supported for IDN conversion.');
  }

  const colonIndex = hostPort.lastIndexOf(':');
  const hasSingleColon = colonIndex > -1 && hostPort.indexOf(':') === colonIndex;
  const host = hasSingleColon ? hostPort.slice(0, colonIndex) : hostPort;
  const port = hasSingleColon ? hostPort.slice(colonIndex) : '';

  if (!host) {
    throw new Error('Enter a valid hostname.');
  }

  const convertedHost = convertHostname(host, mode);
  return `${prefix}${userInfo}${convertedHost}${port}${suffix}`;
}

export function encodeIdn(input: string): string {
  return replaceHostname(input, 'encode');
}

export function decodeIdn(input: string): string {
  return replaceHostname(input, 'decode');
}

export type HtmlEntityEncodeOptions = {
  encodeNonAscii?: boolean;
};

const BASIC_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function encodeHtmlEntities(input: string, options: HtmlEntityEncodeOptions = {}): string {
  let result = '';
  for (const char of input) {
    const codePoint = char.codePointAt(0);
    if (BASIC_ENTITIES[char]) {
      result += BASIC_ENTITIES[char];
      continue;
    }

    if (options.encodeNonAscii && codePoint && codePoint > 127) {
      result += `&#${codePoint};`;
      continue;
    }

    result += char;
  }
  return result;
}

function decodeHtmlEntitiesFallback(input: string): string {
  const namedDecoded = input
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ');

  return namedDecoded.replace(/&#(x?[0-9a-fA-F]+);/g, (match, raw) => {
    const value = raw.startsWith('x') || raw.startsWith('X') ? parseInt(raw.slice(1), 16) : parseInt(raw, 10);
    if (Number.isNaN(value)) return match;
    return String.fromCodePoint(value);
  });
}

export function decodeHtmlEntities(input: string): string {
  if (typeof window === 'undefined') {
    return decodeHtmlEntitiesFallback(input);
  }

  const textarea = document.createElement('textarea');
  textarea.innerHTML = input;
  return textarea.value;
}

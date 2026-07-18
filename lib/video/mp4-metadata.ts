// In-browser MP4/MOV (ISO-BMFF/QuickTime) metadata watermark scanner + remover.
//
// AI video generators (HeyGen, Sora, Veo, Runway, …) mark their exports in the
// container's metadata layer: C2PA provenance manifests and XMP packets in
// top-level `uuid` boxes, plus encoder/creator tags in `udta`/`meta` atoms.
// This module finds those boxes and neutralizes them IN PLACE — the box type
// is renamed to `free` (a spec-legal padding box) and its payload zeroed, so
// no byte offsets shift, `stco`/`co64` chunk tables stay valid, and the video
// plays back identically. No re-encoding, no wasm, no upload.
//
// Out of scope by physics: pixel-level signals (e.g. SynthID) live in the
// frames themselves, not the metadata layer, and survive any metadata edit.

export type MetadataHit = {
  /** Box path, e.g. "moov/udta" */
  path: string;
  /** Human-readable label for the report */
  label: string;
  /** Absolute byte offset of the box */
  offset: number;
  /** Total box size in bytes */
  size: number;
  /** Header size (8, or 16 for 64-bit largesize boxes) */
  headerSize: number;
  /** Printable strings found in the payload (encoder names, tool tags, …) */
  details: string[];
};

export type ScanResult = {
  container: 'mp4' | 'webm' | 'unknown';
  hits: MetadataHit[];
};

// Well-known `uuid` box identities (hex, no dashes).
const XMP_UUID = 'be7acfcb97a942e89c71999491e3afac';
const C2PA_UUID = 'd8fec3d61b0e483c92975828877ec481';

// Containers worth recursing into to find nested udta/meta/uuid boxes.
const CONTAINER_TYPES = new Set(['moov', 'trak', 'mdia', 'minf', 'stbl', 'moof', 'traf', 'edts']);

// Box types that carry metadata watermarks. The whole box is neutralized.
const TARGET_TYPES = new Set(['udta', 'meta', 'uuid']);

function u32(bytes: Uint8Array, off: number): number {
  return (bytes[off] << 24 | bytes[off + 1] << 16 | bytes[off + 2] << 8 | bytes[off + 3]) >>> 0;
}

function boxType(bytes: Uint8Array, off: number): string {
  return String.fromCharCode(bytes[off], bytes[off + 1], bytes[off + 2], bytes[off + 3]);
}

function uuidHex(bytes: Uint8Array, off: number): string {
  let s = '';
  for (let i = 0; i < 16; i++) s += bytes[off + i].toString(16).padStart(2, '0');
  return s;
}

/** Printable ASCII runs (≥ minLen chars) from a payload slice, capped. */
function extractStrings(bytes: Uint8Array, start: number, end: number, max = 6, minLen = 6): string[] {
  const out: string[] = [];
  let run = '';
  const cap = Math.min(end, start + 256 * 1024); // don't trawl giant payloads
  for (let i = start; i < cap && out.length < max; i++) {
    const b = bytes[i];
    if (b >= 0x20 && b < 0x7f) {
      run += String.fromCharCode(b);
    } else {
      if (run.length >= minLen) out.push(run.trim());
      run = '';
    }
  }
  if (run.length >= minLen && out.length < max) out.push(run.trim());
  return out;
}

function labelFor(type: string, bytes: Uint8Array, offset: number, headerSize: number): string {
  if (type === 'uuid') {
    const id = uuidHex(bytes, offset + headerSize);
    if (id === XMP_UUID) return 'XMP metadata packet (AI tool + creator tags)';
    if (id === C2PA_UUID) return 'C2PA provenance manifest (Content Credentials)';
    return 'Vendor metadata (uuid box)';
  }
  if (type === 'udta') return 'User-data atom (encoder / creator tags)';
  return 'Metadata container (keys / iTunes-style tags)';
}

function walkBoxes(
  bytes: Uint8Array,
  start: number,
  end: number,
  path: string,
  hits: MetadataHit[],
): void {
  let off = start;
  while (off + 8 <= end) {
    let size = u32(bytes, off);
    const type = boxType(bytes, off + 4);
    let headerSize = 8;

    if (size === 1) {
      if (off + 16 > end) break;
      // 64-bit largesize — files here are far below 2^53, safe as Number.
      size = u32(bytes, off + 8) * 4294967296 + u32(bytes, off + 12);
      headerSize = 16;
    } else if (size === 0) {
      size = end - off; // box extends to end of enclosing scope
    }

    if (size < headerSize || off + size > end) break; // malformed — stop cleanly

    // Guard against non-ASCII "types" (we walked into non-box data).
    if (!/^[\x20-\x7e]{4}$/.test(type)) break;

    const childPath = path ? `${path}/${type}` : type;

    if (TARGET_TYPES.has(type)) {
      hits.push({
        path: childPath,
        label: labelFor(type, bytes, off, headerSize),
        offset: off,
        size,
        headerSize,
        details: extractStrings(bytes, off + headerSize, off + size),
      });
    } else if (CONTAINER_TYPES.has(type)) {
      walkBoxes(bytes, off + headerSize, off + size, childPath, hits);
    }

    off += size;
  }
}

/** Scan a video file's bytes for metadata watermark boxes. */
export function scanVideoMetadata(bytes: Uint8Array): ScanResult {
  // WebM/MKV magic (EBML) — different container, not handled here.
  if (bytes.length >= 4 && bytes[0] === 0x1a && bytes[1] === 0x45 && bytes[2] === 0xdf && bytes[3] === 0xa3) {
    return { container: 'webm', hits: [] };
  }
  // ISO-BMFF starts with a box whose type is almost always `ftyp`.
  if (bytes.length < 12 || !/^[\x20-\x7e]{4}$/.test(boxType(bytes, 4))) {
    return { container: 'unknown', hits: [] };
  }
  const hits: MetadataHit[] = [];
  walkBoxes(bytes, 0, bytes.length, '', hits);
  return { container: 'mp4', hits };
}

/**
 * Neutralize the given boxes in place: rename to `free` and zero the payload.
 * Byte length is unchanged, so all chunk offsets remain valid.
 * Mutates and returns the same array.
 */
export function removeVideoMetadata(bytes: Uint8Array, hits: MetadataHit[]): Uint8Array {
  for (const hit of hits) {
    const typeOff = hit.offset + 4;
    bytes[typeOff] = 0x66;     // f
    bytes[typeOff + 1] = 0x72; // r
    bytes[typeOff + 2] = 0x65; // e
    bytes[typeOff + 3] = 0x65; // e
    bytes.fill(0, hit.offset + hit.headerSize, hit.offset + hit.size);
  }
  return bytes;
}

"use client";

import { useState } from 'react';

const BOLD_OFF_A = 0x1D400, BOLD_OFF_a = 0x1D41A;
const ITALIC_OFF_A = 0x1D434, ITALIC_OFF_a = 0x1D44E;
const BOLD_ITALIC_OFF_A = 0x1D468, BOLD_ITALIC_OFF_a = 0x1D482;
const SCRIPT_OFF_A = 0x1D49C, SCRIPT_OFF_a = 0x1D4B6;
const FRAKTUR_OFF_A = 0x1D504, FRAKTUR_OFF_a = 0x1D51E;
const DS_OFF_A = 0x1D538, DS_OFF_a = 0x1D552, DS_OFF_0 = 0x1D7D8;
const CIRC_OFF_A = 0x24B6, CIRC_OFF_a = 0x24D0, CIRC_OFF_0 = 0x24EA;

function mapChar(c: string, offUpper: number, offLower: number, offDigit?: number): string {
  const code = c.charCodeAt(0);
  if (code >= 65 && code <= 90) return String.fromCodePoint(offUpper + (code - 65));
  if (code >= 97 && code <= 122) return String.fromCodePoint(offLower + (code - 97));
  if (offDigit && code >= 48 && code <= 57) return String.fromCodePoint(offDigit + (code - 48));
  return c;
}

const STYLES: { name: string; fn: (s: string) => string }[] = [
  { name: '𝗕𝗼𝗹𝗱', fn: s => Array.from(s).map(c => mapChar(c, BOLD_OFF_A, BOLD_OFF_a)).join('') },
  { name: '𝘐𝘵𝘢𝘭𝘪𝘤', fn: s => Array.from(s).map(c => mapChar(c, ITALIC_OFF_A, ITALIC_OFF_a)).join('') },
  { name: '𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄', fn: s => Array.from(s).map(c => mapChar(c, BOLD_ITALIC_OFF_A, BOLD_ITALIC_OFF_a)).join('') },
  { name: '𝒮𝒸𝓇𝒾𝓅𝓉', fn: s => Array.from(s).map(c => mapChar(c, SCRIPT_OFF_A, SCRIPT_OFF_a)).join('') },
  { name: '𝔉𝔯𝔞𝔨𝔱𝔲𝔯', fn: s => Array.from(s).map(c => mapChar(c, FRAKTUR_OFF_A, FRAKTUR_OFF_a)).join('') },
  { name: '𝔻𝕠𝕦𝕓𝕝𝕖', fn: s => Array.from(s).map(c => mapChar(c, DS_OFF_A, DS_OFF_a, DS_OFF_0)).join('') },
  { name: 'Ⓒⓘⓡⓒⓛⓔⓓ', fn: s => Array.from(s).map(c => mapChar(c, CIRC_OFF_A, CIRC_OFF_a, CIRC_OFF_0)).join('') },
  { name: 'S̶t̶r̶i̶k̶e̶', fn: s => Array.from(s).map(c => c === ' ' ? c : c + '\u0336').join('') },
  { name: 'U̲n̲d̲e̲r̲l̲i̲n̲e̲', fn: s => Array.from(s).map(c => c === ' ' ? c : c + '\u0332').join('') },
  { name: 'Ṡṁạḷḷ Ċạṗṡ', fn: s => s.toUpperCase().split('').map(c => {
    const sc: Record<string,string> = {A:'ᴀ',B:'ʙ',C:'ᴄ',D:'ᴅ',E:'ᴇ',F:'ꜰ',G:'ɢ',H:'ʜ',I:'ɪ',J:'ᴊ',K:'ᴋ',L:'ʟ',M:'ᴍ',N:'ɴ',O:'ᴏ',P:'ᴘ',Q:'q',R:'ʀ',S:'s',T:'ᴛ',U:'ᴜ',V:'ᴠ',W:'ᴡ',X:'x',Y:'ʏ',Z:'ᴢ'};
    return sc[c] ?? c;
  }).join('') },
];

function StyleCard({ name, preview, onCopy }: { name: string; preview: string; onCopy: () => void }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { onCopy(); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center justify-between gap-2">
      <div>
        <p className="text-xs text-slate-500 mb-0.5">{name}</p>
        <p className="text-sm text-slate-800 break-all">{preview || <span className="text-slate-300">Preview...</span>}</p>
      </div>
      <button onClick={copy} className="text-xs px-2 py-1 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-600 shrink-0">
        {copied ? '✓' : 'Copy'}
      </button>
    </div>
  );
}

export function UnicodeTextConverterTool() {
  const [input, setInput] = useState('');

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-slate-800 block mb-2">Your Text</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type text here to see all Unicode styles..."
          rows={3}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />
      </div>
      <p className="text-xs text-slate-500">Click Copy on any style to copy that version to your clipboard.</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {STYLES.map(({ name, fn }) => (
          <StyleCard
            key={name}
            name={name}
            preview={input ? fn(input) : ''}
            onCopy={() => navigator.clipboard.writeText(fn(input))}
          />
        ))}
      </div>
    </div>
  );
}

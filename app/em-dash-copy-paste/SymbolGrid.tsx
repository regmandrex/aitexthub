'use client';

import { useState } from 'react';

export const symbols = [
  { name: 'Em Dash', char: '—', unicode: 'U+2014', html: '&mdash;', description: 'The longest dash. Used to indicate a pause, interruption, or parenthetical remark in prose.', example: 'She opened the door—and froze.' },
  { name: 'En Dash', char: '–', unicode: 'U+2013', html: '&ndash;', description: 'Half the width of an em dash. Used for ranges, scores, and compound adjectives.', example: 'Pages 10–25, New York–London flight' },
  { name: 'Horizontal Bar', char: '―', unicode: 'U+2015', html: '&#8213;', description: 'Longer than an em dash. Used in dialogue attribution in some languages.', example: 'Used in Greek and some European typography' },
  { name: 'Hyphen', char: '-', unicode: 'U+002D', html: '-', description: 'Standard hyphen for compound words and line breaks.', example: 'well-known, copy-paste' },
  { name: 'Non-Breaking Hyphen', char: '‑', unicode: 'U+2011', html: '&#8209;', description: 'Hyphen that prevents a line break at its position.', example: 'Phone numbers, fixed compounds' },
  { name: 'Figure Dash', char: '‒', unicode: 'U+2012', html: '&#8210;', description: 'Same width as a digit. Used in phone numbers and tables.', example: '555‒1234' },
  { name: 'Ellipsis', char: '…', unicode: 'U+2026', html: '&hellip;', description: 'Single-character ellipsis. Better than three separate periods for typography.', example: 'She waited… and waited.' },
  { name: 'Bullet Point', char: '•', unicode: 'U+2022', html: '&bull;', description: 'Standard bullet point for lists.', example: '• Item one • Item two' },
  { name: 'Middle Dot', char: '·', unicode: 'U+00B7', html: '&middot;', description: 'Small centered dot used as a separator in lists and text.', example: 'Paris · London · New York' },
  { name: 'Left Double Quote', char: '\u201C', unicode: 'U+201C', html: '&ldquo;', description: 'Typographic opening double quotation mark (curly quote).', example: '\u201CHello,\u201D she said.' },
  { name: 'Right Double Quote', char: '\u201D', unicode: 'U+201D', html: '&rdquo;', description: 'Typographic closing double quotation mark (curly quote).', example: '\u201CHello,\u201D she said.' },
  { name: 'Left Single Quote', char: '\u2018', unicode: 'U+2018', html: '&lsquo;', description: 'Typographic opening single quotation mark or apostrophe.', example: 'It\u2019s a beautiful day.' },
  { name: 'Right Single Quote', char: '\u2019', unicode: 'U+2019', html: '&rsquo;', description: 'Typographic closing single quotation mark or apostrophe.', example: 'Don\u2019t forget.' },
  { name: 'Blank Space Symbol', char: '\u2423', unicode: 'U+2423', html: '&#9251;', description: 'Open box symbol representing a blank space. Used in typography and documentation.', example: 'Visible representation of space character' },
];

function CopyButton({ char, label }: { char: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(char);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
    >
      {copied ? '✓ Copied!' : label}
    </button>
  );
}

export function SymbolGrid() {
  return (
    <section className="mt-6 w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:rounded-2xl md:p-6">
      <h2 className="text-base font-semibold text-slate-800 mb-4">Click to Copy — Dashes, Dots & Symbols</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {symbols.map((s, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-serif text-slate-900 min-w-[2rem] text-center">{s.char}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{s.name}</p>
                  <p className="text-xs text-slate-500 font-mono">{s.unicode} · {s.html}</p>
                </div>
              </div>
              <CopyButton char={s.char} label="Copy" />
            </div>
            <p className="text-xs text-slate-600">{s.description}</p>
            <p className="text-xs text-slate-400 italic">{s.example}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

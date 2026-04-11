'use client';

import { useState } from 'react';

export const characters = [
  { name: 'Zero-Width Space', unicode: 'U+200B', char: '\u200B', description: 'The most common invisible character. Used in gaming names, social bios, and blank messages.', uses: 'Discord, WhatsApp, Instagram, gaming usernames' },
  { name: 'Zero-Width Non-Joiner', unicode: 'U+200C', char: '\u200C', description: 'Prevents two characters from joining. Invisible in most contexts.', uses: 'Text separation, blank spaces in apps' },
  { name: 'Zero-Width Joiner', unicode: 'U+200D', char: '\u200D', description: 'Joins characters without visible connection. Completely invisible on its own.', uses: 'Emoji sequences, invisible text tricks' },
  { name: 'Word Joiner', unicode: 'U+2060', char: '\u2060', description: 'Invisible character that prevents line breaks at its position.', uses: 'Formatting control, invisible filler' },
  { name: 'Non-Breaking Space', unicode: 'U+00A0', char: '\u00A0', description: 'Looks like a regular space but is a distinct Unicode character.', uses: 'Blank messages, invisible names, form fields' },
  { name: 'Soft Hyphen', unicode: 'U+00AD', char: '\u00AD', description: 'Invisible hyphenation hint. Produces no visible output in most apps.', uses: 'Invisible text in messages and usernames' },
  { name: 'Invisible Separator', unicode: 'U+2063', char: '\u2063', description: 'Invisible separator character — zero visible output.', uses: 'Blank text, invisible characters in forms' },
  { name: 'Function Application', unicode: 'U+2061', char: '\u2061', description: 'Mathematical invisible operator. Completely invisible in plain text.', uses: 'Invisible filler in text fields' },
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
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
    >
      {copied ? '✓ Copied!' : label}
    </button>
  );
}

function BulkCopyBox() {
  const [count, setCount] = useState(10);
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText('\u200B'.repeat(count));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label className="text-sm text-slate-700 font-medium">Number of invisible characters:</label>
        <input
          type="number"
          min={1}
          max={1000}
          value={count}
          onChange={e => setCount(Math.max(1, Math.min(1000, Number(e.target.value))))}
          className="w-20 border border-slate-300 rounded px-2 py-1 text-sm"
        />
      </div>
      <button
        onClick={handleCopy}
        className={`w-full py-3 rounded-lg font-medium transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
      >
        {copied ? `✓ Copied ${count} invisible characters!` : `Copy ${count} Invisible Characters`}
      </button>
    </div>
  );
}

export function InvisibleCharGrid() {
  return (
    <section className="mt-6 w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:rounded-2xl md:p-6">
      <h2 className="text-base font-semibold text-slate-800 mb-4">Click to Copy Invisible Characters</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {characters.map((c) => (
          <div key={c.unicode} className="flex flex-col gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-slate-800">{c.name}</p>
                <p className="text-xs text-slate-500 font-mono">{c.unicode}</p>
              </div>
              <CopyButton char={c.char} label="Copy" />
            </div>
            <p className="text-xs text-slate-600">{c.description}</p>
            <p className="text-xs text-slate-400">Best for: {c.uses}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">Bulk Invisible Text Generator</h3>
        <p className="text-xs text-slate-600 mb-3">Generate and copy multiple zero-width spaces at once.</p>
        <BulkCopyBox />
      </div>
    </section>
  );
}

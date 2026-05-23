'use client';

import { useState } from 'react';

const PHRASES: Record<string, string[]> = {
  default: [
    'ì˜¤ëŠ˜ë„ ì¢‹ì€ í•˜ë£¨ ë³´ë‚´ì„¸ìš”',
    'í•­ìƒ ì‘ì›í•˜ê³  ìžˆìŠµë‹ˆë‹¤',
    'ë‹¹ì‹ ì˜ ë¯¸ì†Œê°€ ë¹›ë‚˜ëŠ” ìˆœê°„',
    'ì†Œì¤‘í•œ ì¸ì—°ì— ê°ì‚¬í•©ë‹ˆë‹¤',
    'í•¨ê»˜í•œ ì‹œê°„ì´ ì¦ê±°ì› ì–´ìš”',
    'ë§ˆìŒ ê¹Šì´ ê³ ë§ˆì›€ì„ ì „í•©ë‹ˆë‹¤',
    'ìƒˆë¡œìš´ ì‹œìž‘ì„ ì‘ì›í•©ë‹ˆë‹¤',
    'ìžŠì§€ ëª»í•  ì¶”ì–µì´ ë˜ì—ˆë„¤ìš”',
    'ë”°ëœ»í•œ ë§ˆìŒì„ ë³´ëƒ…ë‹ˆë‹¤',
    'íŠ¹ë³„í•œ í•˜ë£¨ê°€ ë˜ê¸¸ ë°”ëžë‹ˆë‹¤',
  ],
};

const PARTICLES = ['ì€/ëŠ”', 'ì´/ê°€', 'ì„/ë¥¼', 'ì—', 'ë„', 'ë§Œ'];

function buildLine(syllable: string, seed: number): string {
  const phrases = PHRASES.default;
  const idx = (syllable.charCodeAt(0) + seed) % phrases.length;
  return `${syllable}${syllable.length === 1 ? '' : ''} ${phrases[idx]}`;
}

function generateAcrostic(word: string, seed: number): string[] {
  if (!word.trim()) return [];
  const chars = Array.from(word.replace(/\s/g, ''));
  return chars.map((ch, i) => buildLine(ch, seed + i * 7));
}

export function AcrosticPoemTool() {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<string[]>([]);
  const [seed, setSeed] = useState(0);
  const [copied, setCopied] = useState(false);

  function handleGenerate() {
    const newSeed = seed + 1;
    setSeed(newSeed);
    setLines(generateAcrostic(input, newSeed));
    setCopied(false);
  }

  async function handleCopy() {
    if (lines.length === 0) return;
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  function handleClear() {
    setInput('');
    setLines([]);
    setCopied(false);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-800 mb-1">ì´ë¦„ ë˜ëŠ” ë‹¨ì–´ ìž…ë ¥ (2~5ê¸€ìž ê¶Œìž¥)</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ì˜ˆ) ê¹€ë¯¼ìˆ˜, ì‚¬ëž‘, í–‰ë³µ"
          maxLength={20}
          className="w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleGenerate}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          {lines.length > 0 ? 'ë‹¤ì‹œ ì§“ê¸°' : 'ì‚¼í–‰ì‹œ ì§“ê¸°'}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
        >
          ì§€ìš°ê¸°
        </button>
      </div>

      {lines.length > 0 && (
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-4 space-y-2">
          {lines.map((line, idx) => {
            const firstChar = line.charAt(0);
            const rest = line.slice(1);
            return (
              <p key={idx} className="text-sm md:text-base">
                <span className="font-bold text-blue-600 text-lg">{firstChar}</span>
                <span>{rest}</span>
              </p>
            );
          })}
          <button
            type="button"
            onClick={handleCopy}
            className="mt-2 px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
          >
            {copied ? 'ë³µì‚¬ë¨!' : 'ê²°ê³¼ ë³µì‚¬'}
          </button>
        </div>
      )}
    </div>
  );
}

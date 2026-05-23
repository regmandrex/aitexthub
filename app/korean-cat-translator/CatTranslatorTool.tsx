'use client';

import { useState } from 'react';

const CAT_SUFFIXES = ['ëƒ¥', '~ëƒ¥', 'ë‹¤ëƒ¥', 'ì´ëƒ¥', 'ëƒì˜¹', 'ëƒì•™'];
const CAT_INTERJECTIONS = ['(ê¼¬ë¦¬ì‚´ëž‘)', '(ê³¨ê³¨)', '(ì•¼ì˜¹~)', '(ëˆˆë¹›ì´ˆë¡±)', '(ì•žë°œê¾¹ê¾¹)'];

const ENDING_REPLACEMENTS: Array<[RegExp, string]> = [
  [/ìŠµë‹ˆë‹¤([.!?]?)/g, 'ë‹¤ëƒ¥$1'],
  [/ìž…ë‹ˆë‹¤([.!?]?)/g, 'ì´ë‹¤ëƒ¥$1'],
  [/í–ˆì–´ìš”([.!?]?)/g, 'í–ˆë‹¤ëƒ¥$1'],
  [/í•´ìš”([.!?]?)/g, 'í•œë‹¤ëƒ¥$1'],
  [/ì´ì—ìš”([.!?]?)/g, 'ì´ë‹¤ëƒ¥$1'],
  [/ì˜ˆìš”([.!?]?)/g, 'ë‹¤ëƒ¥$1'],
  [/ì´ì•¼([.!?]?)/g, 'ì´ë‹¤ëƒ¥$1'],
  [/ì´ë‹¤([.!?]?)/g, 'ì´ë‹¤ëƒ¥$1'],
  [/í•˜ë‹¤([.!?]?)/g, 'í•œë‹¤ëƒ¥$1'],
  [/í–ˆë‹¤([.!?]?)/g, 'í–ˆë‹¤ëƒ¥$1'],
  [/í•œë‹¤([.!?]?)/g, 'í•œë‹¤ëƒ¥$1'],
  [/ê°™ì•„([.!?]?)/g, 'ê°™ë‹¤ëƒ¥$1'],
  [/ì‹¶ì–´([.!?]?)/g, 'ì‹¶ë‹¤ëƒ¥$1'],
  [/ì¢‹ì•„([.!?]?)/g, 'ì¢‹ë‹¤ëƒ¥$1'],
  [/ì´ì§€([.!?]?)/g, 'ì´ë‹¤ëƒ¥$1'],
  [/ì§€([.!?])/g, 'ì§€ëƒ¥$1'],
];

const WORD_REPLACEMENTS: Array<[RegExp, string]> = [
  [/ì‚¬ëžŒ/g, 'ì§‘ì‚¬'],
  [/ì£¼ì¸/g, 'ì§‘ì‚¬'],
  [/ê³ ì–‘ì´/g, 'ëƒ¥ëƒ¥ì´'],
  [/ì‚¬ë£Œ/g, 'ì¸„ë¥´'],
  [/ì•ˆë…•/g, 'ì•ˆëƒ¥'],
  [/ê°ì‚¬/g, 'ëƒ¥í'],
  [/ë°°ê³ íŒŒ/g, 'ë°°ê³ í”„ë‹¤ëƒ¥'],
  [/ì¡¸ë ¤/g, 'ì¡¸ë¦¬ë‹¤ëƒ¥'],
];

function translateToCat(text: string, level: 'soft' | 'normal' | 'extreme'): string {
  if (!text.trim()) return '';

  let result = text;

  WORD_REPLACEMENTS.forEach(([pattern, replacement]) => {
    result = result.replace(pattern, replacement);
  });

  ENDING_REPLACEMENTS.forEach(([pattern, replacement]) => {
    result = result.replace(pattern, replacement);
  });

  const sentences = result.split(/(?<=[.!?])\s+/).filter(Boolean);

  const transformed = sentences.map((sentence, idx) => {
    let s = sentence.trim();

    if (level === 'extreme') {
      s = s.replace(/([가-힣])([\s.!?]|$)/g, (_m, ch, tail) => {
        if (Math.random() < 0.15) {
          const suffix = CAT_SUFFIXES[Math.floor(Math.random() * CAT_SUFFIXES.length)];
          return ch + suffix + tail;
        }
        return ch + tail;
      });
    }

    const lastChar = s.slice(-1);
    const punctuation = /[.!?]/.test(lastChar) ? lastChar : '';
    const body = punctuation ? s.slice(0, -1) : s;

    if (!/(ëƒ¥|ëƒì˜¹)$/.test(body.replace(/[.!?]$/, ''))) {
      const suffix = CAT_SUFFIXES[idx % CAT_SUFFIXES.length];
      s = body + suffix + (punctuation || '.');
    }

    if (level !== 'soft' && Math.random() < (level === 'extreme' ? 0.6 : 0.3)) {
      const interjection = CAT_INTERJECTIONS[Math.floor(Math.random() * CAT_INTERJECTIONS.length)];
      s = s + ' ' + interjection;
    }

    return s;
  });

  return transformed.join(' ');
}

export function CatTranslatorTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [level, setLevel] = useState<'soft' | 'normal' | 'extreme'>('normal');
  const [copied, setCopied] = useState(false);

  function handleTranslate() {
    setOutput(translateToCat(input, level));
    setCopied(false);
  }

  async function handleCopy() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  function handleClear() {
    setInput('');
    setOutput('');
    setCopied(false);
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-800 mb-1">í•œêµ­ì–´ ë¬¸ìž¥ ìž…ë ¥</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ì˜ˆ) ì•ˆë…•í•˜ì„¸ìš”. ì˜¤ëŠ˜ ë‚ ì”¨ê°€ ì •ë§ ì¢‹ì•„ìš”."
          className="w-full min-h-[120px] rounded-lg border border-slate-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 mb-2">ëƒ¥ëƒ¥ì²´ ê°•ë„</label>
        <div className="flex gap-2">
          {(['soft', 'normal', 'extreme'] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition ${
                level === l
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {l === 'soft' ? 'ì•½í•˜ê²Œ' : l === 'normal' ? 'ë³´í†µ' : 'ê°•í•˜ê²Œ'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleTranslate}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          ëƒ¥ëƒ¥ì²´ë¡œ ë²ˆì—­í•˜ê¸°
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
        >
          ì§€ìš°ê¸°
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 mb-1">ê³ ì–‘ì´ ë²ˆì—­ ê²°ê³¼</label>
        <textarea
          value={output}
          readOnly
          placeholder="ë²ˆì—­ëœ ëƒ¥ëƒ¥ì²´ ê²°ê³¼ê°€ ì—¬ê¸°ì— í‘œì‹œë©ë‹ˆë‹¤..."
          className="w-full min-h-[120px] rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm"
        />
        <button
          type="button"
          onClick={handleCopy}
          disabled={!output}
          className="mt-2 px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copied ? 'ë³µì‚¬ë¨!' : 'ê²°ê³¼ ë³µì‚¬'}
        </button>
      </div>
    </div>
  );
}

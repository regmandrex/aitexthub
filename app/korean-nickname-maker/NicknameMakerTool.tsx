'use client';

import { useState } from 'react';

type Target = 'friend' | 'couple' | 'pet' | 'coworker';

const TARGET_LABELS: Record<Target, string> = {
  friend: 'ì¹œêµ¬',
  couple: 'ì»¤í”Œ',
  pet: 'ë°˜ë ¤ë™ë¬¼',
  coworker: 'íšŒì‚¬ ë™ë£Œ',
};

const PREFIXES: Record<Target, string[]> = {
  friend: ['ê·€ì—¼ë‘¥ì´', 'ì°°ë–¡', 'ë‹¨ì§', 'ë² í”„', 'ê¿€ìž¼', 'í†¡í†¡', 'í–‡ì‚´', 'ë§ëž‘'],
  couple: ['ë½€ì§', 'ê¿€ë‹¨ì§€', 'ë‹¬ì½¤', 'ì‚¬ëž‘ë‘¥ì´', 'ê¿€ìž¼', 'í•˜íŠ¸', 'ì†Œì¤‘', 'ê·€ì—¼'],
  pet: ['ëª½ì‹¤', 'ë½€ì†¡', 'ë³µì‹¤', 'ëƒ¥ëƒ¥', 'ëŒ•ëŒ•', 'ê¼¬ë¬¼', 'ìž‘ì€', 'ê·€ìš”ë¯¸'],
  coworker: ['ë“ ë“ ', 'ì—ì´ìŠ¤', 'ì²™ì²™ë°•ì‚¬', 'ëŠ¥ë ¥ìž', 'ë¯¿ìŒì§', 'ì„¼ìŠ¤ìž¥ì¸', 'ê¼¼ê¼¼', 'ì—´ì •'],
};

const SUFFIXES: Record<Target, string[]> = {
  friend: ['ì´', 'ì“°', 'ë‹˜', 'mate'],
  couple: ['ì´', 'ë‹˜', 'ì“°', 'í•‘'],
  pet: ['ì´', 'ì“°', 'ë‹˜', 'ëƒ¥', 'ëŒ•'],
  coworker: ['ë‹˜', 'ì“°', 'ì„ ìƒ', 'ëŒ€ìž¥'],
};

function makeSeeded(name: string, target: Target, count: number, salt: number): string[] {
  const trimmed = name.trim();
  const seedBase = (trimmed.split('').reduce((s, c) => s + c.charCodeAt(0), 0) + salt) | 0;
  const prefixes = PREFIXES[target];
  const suffixes = SUFFIXES[target];
  const out = new Set<string>();
  let i = 0;
  while (out.size < count && i < count * 6) {
    const p = prefixes[(seedBase + i * 13) % prefixes.length];
    const s = suffixes[(seedBase + i * 7) % suffixes.length];
    const last = trimmed.slice(-1) || '';
    const variants = [
      `${p}${trimmed}`,
      `${trimmed}${s}`,
      `${p}${last}`,
      `${trimmed}${p}`,
      `${p}${trimmed}${s}`,
    ];
    out.add(variants[(seedBase + i * 5) % variants.length]);
    i++;
  }
  return Array.from(out).slice(0, count);
}

export function NicknameMakerTool() {
  const [name, setName] = useState('');
  const [target, setTarget] = useState<Target>('friend');
  const [results, setResults] = useState<string[]>([]);
  const [salt, setSalt] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);

  function handleGenerate() {
    const next = salt + 1;
    setSalt(next);
    setResults(makeSeeded(name || 'ì¹œêµ¬', target, 12, next));
  }

  async function handleCopy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1200);
    } catch {}
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-800 mb-1">ì´ë¦„ì´ë‚˜ íŠ¹ì§• ìž…ë ¥</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ì˜ˆ) ë¯¼ìˆ˜, ì§€ì€ì´, ìš°ë¦¬ ê°•ì•„ì§€"
          maxLength={20}
          className="w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 mb-2">ëˆ„êµ¬ì—ê²Œ ì¤„ ë³„ëª…ì¸ê°€ìš”?</label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(TARGET_LABELS) as Target[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTarget(t)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition ${
                target === t
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {TARGET_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleGenerate}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
      >
        {results.length > 0 ? 'ë‹¤ë¥¸ ë³„ëª… ë³´ê¸°' : 'ë³„ëª… ì§“ê¸°'}
      </button>

      {results.length > 0 && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {results.map((nickname, idx) => (
            <button
              key={`${nickname}-${idx}`}
              type="button"
              onClick={() => handleCopy(nickname)}
              className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition text-left"
            >
              {copied === nickname ? 'ë³µì‚¬ë¨!' : nickname}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

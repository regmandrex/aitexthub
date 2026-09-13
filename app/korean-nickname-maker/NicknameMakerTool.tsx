'use client';

import { useState } from 'react';

type Target = 'friend' | 'couple' | 'pet' | 'coworker';

const TARGET_LABELS: Record<Target, string> = {
  friend: '친구',
  couple: '커플',
  pet: '반려동물',
  coworker: '회사 동료',
};

const PREFIXES: Record<Target, string[]> = {
  friend: ['귀염둥이', '찰떡', '단짝', '베프', '꿀잼', '톡톡', '햇살', '말랑'],
  couple: ['뽀짝', '꿀단지', '달콤', '사랑둥이', '꿀잼', '하트', '소중', '귀염'],
  pet: ['몽실', '뽀송', '복실', '냥냥', '댕댕', '꼬물', '작은', '귀요미'],
  coworker: ['든든', '에이스', '척척박사', '능력자', '믿음직', '센스장인', '꼼꼼', '열정'],
};

const SUFFIXES: Record<Target, string[]> = {
  friend: ['이', '쓰', '님', 'mate'],
  couple: ['이', '님', '쓰', '핑'],
  pet: ['이', '쓰', '님', '냥', '댕'],
  coworker: ['님', '쓰', '선생', '대장'],
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
    setResults(makeSeeded(name || '친구', target, 12, next));
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
        <label className="block text-sm font-medium text-slate-800 mb-1">이름이나 특징 입력</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="예) 민수, 지은이, 우리 강아지"
          maxLength={20}
          className="w-full rounded-lg border-2 border-black p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 mb-2">누구에게 줄 별명인가요?</label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(TARGET_LABELS) as Target[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTarget(t)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition ${
                target === t
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-black hover:bg-slate-50'
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
        {results.length > 0 ? '다른 별명 보기' : '별명 짓기'}
      </button>

      {results.length > 0 && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {results.map((nickname, idx) => (
            <button
              key={`${nickname}-${idx}`}
              type="button"
              onClick={() => handleCopy(nickname)}
              className="px-3 py-2 bg-white border-2 border-black rounded-lg text-sm hover:bg-slate-50 transition text-left"
            >
              {copied === nickname ? '복사됨!' : nickname}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

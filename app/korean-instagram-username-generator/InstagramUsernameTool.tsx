'use client';

import { useState } from 'react';

type Mood = 'aesthetic' | 'short' | 'english' | 'couple' | 'cute';

const MOOD_LABELS: Record<Mood, string> = {
  aesthetic: '감성',
  short: '짧은',
  english: '영어 닉',
  couple: '커플',
  cute: '귀여운',
};

const POOLS: Record<Mood, { prefix: string[]; root: string[]; suffix: string[] }> = {
  aesthetic: {
    prefix: ['_', 'sky_', 'moon_', 'cloud_', 'soft_', 'lumi_', 'aero_', 'velvet_'],
    root: ['day', 'rain', 'haze', 'mood', 'dust', 'glow', 'tide', 'snow'],
    suffix: ['_diary', '_log', '__', '_', '.k', '.kr'],
  },
  short: {
    prefix: ['', '', '_'],
    root: ['mim', 'jun', 'soo', 'kai', 'hin', 'rei', 'lyn', 'eun'],
    suffix: ['', '0', '1', '_', '00'],
  },
  english: {
    prefix: ['the_', 'just_', 'mr_', 'ms_', ''],
    root: ['minsoo', 'jiwoo', 'haru', 'jun', 'sora', 'lia', 'leo'],
    suffix: ['_official', '_ig', '__', '_', '.kr', '.k'],
  },
  couple: {
    prefix: ['us_', 'we_', '2_', 'love_', 'duo_'],
    root: ['days', 'spot', 'note', 'cafe', 'walk', 'home'],
    suffix: ['_couple', '_us', '__', '.couple', '.us'],
  },
  cute: {
    prefix: ['mong_', 'ppo_', 'kkomi_', 'bbobbo_', 'chu_'],
    root: ['mong', 'pong', 'kkomi', 'soongi', 'bbang', 'kongi'],
    suffix: ['_ee', '__', 'ie', 'ii', '_'],
  },
};

function gen(name: string, mood: Mood, salt: number, count = 12): string[] {
  const base = (name || 'user').toLowerCase().replace(/[^a-z0-9_]/g, '');
  const seed = (base.split('').reduce((s, c) => s + c.charCodeAt(0), 0) + salt) | 0;
  const pool = POOLS[mood];
  const out = new Set<string>();
  let i = 0;
  while (out.size < count && i < count * 6) {
    const p = pool.prefix[(seed + i * 11) % pool.prefix.length];
    const r = pool.root[(seed + i * 7) % pool.root.length];
    const s = pool.suffix[(seed + i * 5) % pool.suffix.length];
    const variants = [
      `${p}${base}${s}`,
      `${p}${r}${base}`,
      `${base}${s}`,
      `${p}${base}${i % 100}`,
      `${base}_${r}`,
    ];
    const candidate = variants[(seed + i * 3) % variants.length].replace(/[^a-z0-9._]/g, '').slice(0, 30);
    if (candidate.length >= 3) out.add(candidate);
    i++;
  }
  return Array.from(out).slice(0, count);
}

export function InstagramUsernameTool() {
  const [name, setName] = useState('');
  const [mood, setMood] = useState<Mood>('aesthetic');
  const [results, setResults] = useState<string[]>([]);
  const [salt, setSalt] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);

  function handleGenerate() {
    const next = salt + 1;
    setSalt(next);
    setResults(gen(name, mood, next));
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
        <label className="block text-sm font-medium text-slate-800 mb-1">이름 또는 키워드 (영문/숫자)</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="예) minsoo, jiwoo, sora"
          maxLength={20}
          className="w-full rounded-lg border-2 border-black p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 mb-2">아이디 분위기</label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(MOOD_LABELS) as Mood[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMood(m)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition ${
                mood === m
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-black hover:bg-slate-50'
              }`}
            >
              {MOOD_LABELS[m]}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleGenerate}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
      >
        {results.length > 0 ? '다른 아이디 보기' : '인스타 아이디 추천받기'}
      </button>

      {results.length > 0 && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {results.map((id, idx) => (
            <button
              key={`${id}-${idx}`}
              type="button"
              onClick={() => handleCopy(id)}
              className="px-3 py-2 bg-white border-2 border-black rounded-lg text-sm hover:bg-slate-50 transition text-left font-mono"
            >
              {copied === id ? '복사됨!' : `@${id}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

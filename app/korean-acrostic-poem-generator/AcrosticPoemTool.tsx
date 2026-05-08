'use client';

import { useState } from 'react';

const PHRASES: Record<string, string[]> = {
  default: [
    '오늘도 좋은 하루 보내세요',
    '항상 응원하고 있습니다',
    '당신의 미소가 빛나는 순간',
    '소중한 인연에 감사합니다',
    '함께한 시간이 즐거웠어요',
    '마음 깊이 고마움을 전합니다',
    '새로운 시작을 응원합니다',
    '잊지 못할 추억이 되었네요',
    '따뜻한 마음을 보냅니다',
    '특별한 하루가 되길 바랍니다',
  ],
};

const PARTICLES = ['은/는', '이/가', '을/를', '에', '도', '만'];

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
        <label className="block text-sm font-medium text-slate-800 mb-1">이름 또는 단어 입력 (2~5글자 권장)</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="예) 김민수, 사랑, 행복"
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
          {lines.length > 0 ? '다시 짓기' : '삼행시 짓기'}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
        >
          지우기
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
            {copied ? '복사됨!' : '결과 복사'}
          </button>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';

const CAT_SUFFIXES = ['냥', '~냥', '다냥', '이냥', '냐옹', '냐앙'];
const CAT_INTERJECTIONS = ['(꼬리살랑)', '(골골)', '(야옹~)', '(눈빛초롱)', '(앞발꾹꾹)'];

const ENDING_REPLACEMENTS: Array<[RegExp, string]> = [
  [/습니다([.!?]?)/g, '다냥$1'],
  [/입니다([.!?]?)/g, '이다냥$1'],
  [/했어요([.!?]?)/g, '했다냥$1'],
  [/해요([.!?]?)/g, '한다냥$1'],
  [/이에요([.!?]?)/g, '이다냥$1'],
  [/예요([.!?]?)/g, '다냥$1'],
  [/이야([.!?]?)/g, '이다냥$1'],
  [/이다([.!?]?)/g, '이다냥$1'],
  [/하다([.!?]?)/g, '한다냥$1'],
  [/했다([.!?]?)/g, '했다냥$1'],
  [/한다([.!?]?)/g, '한다냥$1'],
  [/같아([.!?]?)/g, '같다냥$1'],
  [/싶어([.!?]?)/g, '싶다냥$1'],
  [/좋아([.!?]?)/g, '좋다냥$1'],
  [/이지([.!?]?)/g, '이다냥$1'],
  [/지([.!?])/g, '지냥$1'],
];

const WORD_REPLACEMENTS: Array<[RegExp, string]> = [
  [/사람/g, '집사'],
  [/주인/g, '집사'],
  [/고양이/g, '냥냥이'],
  [/사료/g, '츄르'],
  [/안녕/g, '안냥'],
  [/감사/g, '냥큐'],
  [/배고파/g, '배고프다냥'],
  [/졸려/g, '졸리다냥'],
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

    if (!/(냥|냐옹)$/.test(body.replace(/[.!?]$/, ''))) {
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
        <label className="block text-sm font-medium text-slate-800 mb-1">한국어 문장 입력</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="예) 안녕하세요. 오늘 날씨가 정말 좋아요."
          className="w-full min-h-[120px] rounded-lg border border-slate-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 mb-2">냥냥체 강도</label>
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
              {l === 'soft' ? '약하게' : l === 'normal' ? '보통' : '강하게'}
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
          냥냥체로 번역하기
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
        >
          지우기
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 mb-1">고양이 번역 결과</label>
        <textarea
          value={output}
          readOnly
          placeholder="번역된 냥냥체 결과가 여기에 표시됩니다..."
          className="w-full min-h-[120px] rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm"
        />
        <button
          type="button"
          onClick={handleCopy}
          disabled={!output}
          className="mt-2 px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copied ? '복사됨!' : '결과 복사'}
        </button>
      </div>
    </div>
  );
}

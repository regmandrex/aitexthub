'use client';

import { useState } from 'react';

type Region = 'gyeongsang' | 'jeolla' | 'chungcheong' | 'jeju';

const REGION_LABELS: Record<Region, string> = {
  gyeongsang: '경상도',
  jeolla: '전라도',
  chungcheong: '충청도',
  jeju: '제주도',
};

const RULES: Record<Region, Array<[RegExp, string]>> = {
  gyeongsang: [
    [/하세요/g, '하이소'],
    [/하십시오/g, '하이소'],
    [/했어요/g, '했데이'],
    [/했어/g, '했데이'],
    [/이에요/g, '이라예'],
    [/예요/g, '라예'],
    [/입니다/g, '입니더'],
    [/습니다/g, '심더'],
    [/해요/g, '한다 아이가'],
    [/뭐 해/g, '뭐 하노'],
    [/뭐해/g, '뭐하노'],
    [/왜/g, '와'],
    [/그래서/g, '그래가'],
    [/너무/g, '억수로'],
    [/정말/g, '진짜'],
    [/빨리/g, '빨랑'],
    [/같이/g, '같이'],
    [/아니야/g, '아이다'],
    [/맞아/g, '맞데이'],
    [/그래/g, '그라믄'],
    [/지금/g, '시방'],
  ],
  jeolla: [
    [/하세요/g, '허씨요'],
    [/했어요/g, '혔어라'],
    [/했어/g, '혔어'],
    [/이에요/g, '이여라'],
    [/예요/g, '여라'],
    [/입니다/g, '이당께'],
    [/습니다/g, '당께'],
    [/해요/g, '혀라'],
    [/그래서/g, '긍께'],
    [/그러니까/g, '긍께'],
    [/너무/g, '겁나'],
    [/정말/g, '징하게'],
    [/빨리/g, '싸게'],
    [/뭐 해/g, '뭐 헌당가'],
    [/뭐해/g, '뭐허냐'],
    [/왜/g, '워째'],
    [/맞아/g, '맞당께'],
    [/그래/g, '그려'],
    [/안 돼/g, '안 되야'],
    [/지금/g, '시방'],
  ],
  chungcheong: [
    [/하세요/g, '하셔유'],
    [/했어요/g, '했슈'],
    [/했어/g, '혔어'],
    [/이에요/g, '이유'],
    [/예요/g, '유'],
    [/입니다/g, '이쥬'],
    [/습니다/g, '슈'],
    [/해요/g, '햐'],
    [/그래서/g, '그래서유'],
    [/그러니까/g, '그러니께'],
    [/너무/g, '엄청'],
    [/정말/g, '참말로'],
    [/뭐 해/g, '뭐 햐'],
    [/뭐해/g, '뭐햐'],
    [/왜/g, '왜유'],
    [/맞아/g, '맞아유'],
    [/그래/g, '그려유'],
    [/안 돼/g, '안 되유'],
    [/빨리/g, '얼른'],
  ],
  jeju: [
    [/하세요/g, '허우꽈'],
    [/했어요/g, '핸수다'],
    [/했어/g, '핸'],
    [/이에요/g, '우다'],
    [/예요/g, '우다'],
    [/입니다/g, '우다'],
    [/습니다/g, '수다'],
    [/해요/g, '햄수다'],
    [/그래서/g, '경 핸'],
    [/그러니까/g, '경 핸'],
    [/너무/g, '하영'],
    [/정말/g, '정말로'],
    [/뭐 해/g, '뭐 햄수꽈'],
    [/뭐해/g, '뭐 햄수꽈'],
    [/왜/g, '무사'],
    [/안녕/g, '혼저옵서'],
    [/맞아/g, '맞수다'],
    [/그래/g, '경'],
    [/없어/g, '엇어'],
  ],
};

function translate(text: string, region: Region): string {
  if (!text.trim()) return '';
  let result = text;
  RULES[region].forEach(([pattern, replacement]) => {
    result = result.replace(pattern, replacement);
  });
  return result;
}

export function DialectTranslatorTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [region, setRegion] = useState<Region>('gyeongsang');
  const [copied, setCopied] = useState(false);

  function handleTranslate() {
    setOutput(translate(input, region));
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
        <label className="block text-sm font-medium text-slate-800 mb-1">표준어 문장 입력</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="예) 안녕하세요. 오늘 뭐 해요?"
          className="w-full min-h-[120px] rounded-lg border-2 border-black p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 mb-2">사투리 지역 선택</label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(REGION_LABELS) as Region[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition ${
                region === r
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-black hover:bg-slate-50'
              }`}
            >
              {REGION_LABELS[r]}
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
          사투리로 번역하기
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-white text-slate-700 border-2 border-black rounded-lg text-sm font-medium hover:bg-slate-50 transition"
        >
          지우기
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 mb-1">{REGION_LABELS[region]} 사투리 결과</label>
        <textarea
          value={output}
          readOnly
          placeholder="번역된 사투리 결과가 여기에 표시됩니다..."
          className="w-full min-h-[120px] rounded-lg border-2 border-black bg-slate-50 p-3 text-sm"
        />
        <button
          type="button"
          onClick={handleCopy}
          disabled={!output}
          className="mt-2 px-3 py-1.5 bg-white text-slate-700 border-2 border-black rounded-lg text-sm font-medium hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copied ? '복사됨!' : '결과 복사'}
        </button>
      </div>
    </div>
  );
}

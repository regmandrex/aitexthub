'use client';

import { useState } from 'react';

type Region = 'gyeongsang' | 'jeolla' | 'chungcheong' | 'jeju';

const REGION_LABELS: Record<Region, string> = {
  gyeongsang: 'ê²½ìƒë„',
  jeolla: 'ì „ë¼ë„',
  chungcheong: 'ì¶©ì²­ë„',
  jeju: 'ì œì£¼ë„',
};

const RULES: Record<Region, Array<[RegExp, string]>> = {
  gyeongsang: [
    [/í•˜ì„¸ìš”/g, 'í•˜ì´ì†Œ'],
    [/í•˜ì‹­ì‹œì˜¤/g, 'í•˜ì´ì†Œ'],
    [/í–ˆì–´ìš”/g, 'í–ˆë°ì´'],
    [/í–ˆì–´/g, 'í–ˆë°ì´'],
    [/ì´ì—ìš”/g, 'ì´ë¼ì˜ˆ'],
    [/ì˜ˆìš”/g, 'ë¼ì˜ˆ'],
    [/ìž…ë‹ˆë‹¤/g, 'ìž…ë‹ˆë”'],
    [/ìŠµë‹ˆë‹¤/g, 'ì‹¬ë”'],
    [/í•´ìš”/g, 'í•œë‹¤ ì•„ì´ê°€'],
    [/ë­ í•´/g, 'ë­ í•˜ë…¸'],
    [/ë­í•´/g, 'ë­í•˜ë…¸'],
    [/ì™œ/g, 'ì™€'],
    [/ê·¸ëž˜ì„œ/g, 'ê·¸ëž˜ê°€'],
    [/ë„ˆë¬´/g, 'ì–µìˆ˜ë¡œ'],
    [/ì •ë§/g, 'ì§„ì§œ'],
    [/ë¹¨ë¦¬/g, 'ë¹¨ëž‘'],
    [/ê°™ì´/g, 'ê°™ì´'],
    [/ì•„ë‹ˆì•¼/g, 'ì•„ì´ë‹¤'],
    [/ë§žì•„/g, 'ë§žë°ì´'],
    [/ê·¸ëž˜/g, 'ê·¸ë¼ë¯„'],
    [/ì§€ê¸ˆ/g, 'ì‹œë°©'],
  ],
  jeolla: [
    [/í•˜ì„¸ìš”/g, 'í—ˆì”¨ìš”'],
    [/í–ˆì–´ìš”/g, 'í˜”ì–´ë¼'],
    [/í–ˆì–´/g, 'í˜”ì–´'],
    [/ì´ì—ìš”/g, 'ì´ì—¬ë¼'],
    [/ì˜ˆìš”/g, 'ì—¬ë¼'],
    [/ìž…ë‹ˆë‹¤/g, 'ì´ë‹¹ê»˜'],
    [/ìŠµë‹ˆë‹¤/g, 'ë‹¹ê»˜'],
    [/í•´ìš”/g, 'í˜€ë¼'],
    [/ê·¸ëž˜ì„œ/g, 'ê¸ê»˜'],
    [/ê·¸ëŸ¬ë‹ˆê¹Œ/g, 'ê¸ê»˜'],
    [/ë„ˆë¬´/g, 'ê²ë‚˜'],
    [/ì •ë§/g, 'ì§•í•˜ê²Œ'],
    [/ë¹¨ë¦¬/g, 'ì‹¸ê²Œ'],
    [/ë­ í•´/g, 'ë­ í—Œë‹¹ê°€'],
    [/ë­í•´/g, 'ë­í—ˆëƒ'],
    [/ì™œ/g, 'ì›Œì§¸'],
    [/ë§žì•„/g, 'ë§žë‹¹ê»˜'],
    [/ê·¸ëž˜/g, 'ê·¸ë ¤'],
    [/ì•ˆ ë¼/g, 'ì•ˆ ë˜ì•¼'],
    [/ì§€ê¸ˆ/g, 'ì‹œë°©'],
  ],
  chungcheong: [
    [/í•˜ì„¸ìš”/g, 'í•˜ì…”ìœ '],
    [/í–ˆì–´ìš”/g, 'í–ˆìŠˆ'],
    [/í–ˆì–´/g, 'í˜”ì–´'],
    [/ì´ì—ìš”/g, 'ì´ìœ '],
    [/ì˜ˆìš”/g, 'ìœ '],
    [/ìž…ë‹ˆë‹¤/g, 'ì´ì¥¬'],
    [/ìŠµë‹ˆë‹¤/g, 'ìŠˆ'],
    [/í•´ìš”/g, 'í–'],
    [/ê·¸ëž˜ì„œ/g, 'ê·¸ëž˜ì„œìœ '],
    [/ê·¸ëŸ¬ë‹ˆê¹Œ/g, 'ê·¸ëŸ¬ë‹ˆê»˜'],
    [/ë„ˆë¬´/g, 'ì—„ì²­'],
    [/ì •ë§/g, 'ì°¸ë§ë¡œ'],
    [/ë­ í•´/g, 'ë­ í–'],
    [/ë­í•´/g, 'ë­í–'],
    [/ì™œ/g, 'ì™œìœ '],
    [/ë§žì•„/g, 'ë§žì•„ìœ '],
    [/ê·¸ëž˜/g, 'ê·¸ë ¤ìœ '],
    [/ì•ˆ ë¼/g, 'ì•ˆ ë˜ìœ '],
    [/ë¹¨ë¦¬/g, 'ì–¼ë¥¸'],
  ],
  jeju: [
    [/í•˜ì„¸ìš”/g, 'í—ˆìš°ê½ˆ'],
    [/í–ˆì–´ìš”/g, 'í•¸ìˆ˜ë‹¤'],
    [/í–ˆì–´/g, 'í•¸'],
    [/ì´ì—ìš”/g, 'ìš°ë‹¤'],
    [/ì˜ˆìš”/g, 'ìš°ë‹¤'],
    [/ìž…ë‹ˆë‹¤/g, 'ìš°ë‹¤'],
    [/ìŠµë‹ˆë‹¤/g, 'ìˆ˜ë‹¤'],
    [/í•´ìš”/g, 'í–„ìˆ˜ë‹¤'],
    [/ê·¸ëž˜ì„œ/g, 'ê²½ í•¸'],
    [/ê·¸ëŸ¬ë‹ˆê¹Œ/g, 'ê²½ í•¸'],
    [/ë„ˆë¬´/g, 'í•˜ì˜'],
    [/ì •ë§/g, 'ì •ë§ë¡œ'],
    [/ë­ í•´/g, 'ë­ í–„ìˆ˜ê½ˆ'],
    [/ë­í•´/g, 'ë­ í–„ìˆ˜ê½ˆ'],
    [/ì™œ/g, 'ë¬´ì‚¬'],
    [/ì•ˆë…•/g, 'í˜¼ì €ì˜µì„œ'],
    [/ë§žì•„/g, 'ë§žìˆ˜ë‹¤'],
    [/ê·¸ëž˜/g, 'ê²½'],
    [/ì—†ì–´/g, 'ì—‡ì–´'],
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
        <label className="block text-sm font-medium text-slate-800 mb-1">í‘œì¤€ì–´ ë¬¸ìž¥ ìž…ë ¥</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ì˜ˆ) ì•ˆë…•í•˜ì„¸ìš”. ì˜¤ëŠ˜ ë­ í•´ìš”?"
          className="w-full min-h-[120px] rounded-lg border border-slate-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 mb-2">ì‚¬íˆ¬ë¦¬ ì§€ì—­ ì„ íƒ</label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(REGION_LABELS) as Region[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition ${
                region === r
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
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
          ì‚¬íˆ¬ë¦¬ë¡œ ë²ˆì—­í•˜ê¸°
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
        <label className="block text-sm font-medium text-slate-800 mb-1">{REGION_LABELS[region]} ì‚¬íˆ¬ë¦¬ ê²°ê³¼</label>
        <textarea
          value={output}
          readOnly
          placeholder="ë²ˆì—­ëœ ì‚¬íˆ¬ë¦¬ ê²°ê³¼ê°€ ì—¬ê¸°ì— í‘œì‹œë©ë‹ˆë‹¤..."
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

'use client';

import { useState } from 'react';

const WORDS = [
  'ì‚¬ê³¼', 'ê³¼ì¼', 'ì¼ê¸°', 'ê¸°ì°¨', 'ì°¨í‘œ', 'í‘œì§€', 'ì§€ë„', 'ë„ì„œê´€', 'ê´€ì‹¬', 'ì‹¬ìž¥',
  'ìž¥ë¯¸', 'ë¯¸ìˆ ', 'ìˆ ì§‘', 'ì§‘ì•ˆ', 'ì•ˆê²½', 'ê²½ì°°', 'ì°°ë–¡', 'ë–¡êµ­', 'êµ­ìˆ˜', 'ìˆ˜ë°•',
  'ë°•ë¬¼ê´€', 'ê´€ìž¥', 'ìž¥êµ°', 'êµ°ëŒ€', 'ëŒ€í•™', 'í•™êµ', 'êµì‹¤', 'ì‹¤ë‚´', 'ë‚´ì¼', 'ì¼ìš”ì¼',
  'ì±…ìƒ', 'ìƒìž', 'ìžì „ê±°', 'ê±°ë¦¬', 'ë¦¬ë³¸', 'ë³¸ì§ˆ', 'ì§ˆë¬¸', 'ë¬¸ì œ', 'ì œëª©', 'ëª©ì†Œë¦¬',
  'ì†Œë¦¬', 'ë¦¬ë“¬', 'ë“¬ë¿', 'ë¿Œë¦¬', 'ë¦¬ë”', 'ë”ìœ„', 'ìœ„ì¹˜', 'ì¹˜ì•„', 'ì•„ì¹¨', 'ì¹¨ëŒ€',
  'ëŒ€ë¬¸', 'ë¬¸ì–´', 'ì–´ë¨¸ë‹ˆ', 'ë‹ˆì€', 'ì€í–‰', 'í–‰ë³µ', 'ë³µê¶Œ', 'ê¶Œë ¥', 'ë ¥ì‚¬',
  'ë°”ë‹¤', 'ë‹¤ë¦¬', 'ë¦¬ì–´ì¹´', 'ì¹´íŽ˜', 'íŽ˜ì¸íŠ¸', 'íŠ¸ëŸ­', 'ëŸ­ë¹„', 'ë¹„í–‰ê¸°', 'ê¸°ë¦„', 'ë¦„ë‹¬',
  'ë‚˜ë¬´', 'ë¬´ì§€ê°œ', 'ê°œë¯¸', 'ë¯¸ëž˜', 'ëž˜í¼', 'í¼ì¦', 'ì¦ê±°ì›€', 'ì›€ì§ìž„', 'ìž„ê¸ˆ', 'ê¸ˆìš”ì¼',
  'í•˜ëŠ˜', 'ëŠ˜ë³´', 'ë³´ë¼', 'ë¼ë©´', 'ë©´ë„', 'ë„ì‹œ', 'ì‹œê°„', 'ê°„ì‹', 'ì‹ë‹¹', 'ë‹¹ê·¼',
  'ê·¼ìœ¡', 'ìœ¡ì§€', 'ì§€êµ¬', 'êµ¬ë¦„', 'ë¦„', 'ë¦„ë©ì´',
];

const WORD_SET = new Set(WORDS);
const WORDS_BY_FIRST: Record<string, string[]> = {};
WORDS.forEach((w) => {
  const first = w.charAt(0);
  if (!WORDS_BY_FIRST[first]) WORDS_BY_FIRST[first] = [];
  WORDS_BY_FIRST[first].push(w);
});

type Turn = { player: 'user' | 'computer'; word: string; status: 'ok' | 'error'; message?: string };

const HANBANG = ['ëŠ ', 'ìŠ­', 'ë¯', 'í¼', 'ì¨'];

export function WordChainTool() {
  const [history, setHistory] = useState<Turn[]>([]);
  const [input, setInput] = useState('');
  const [used, setUsed] = useState<Set<string>>(new Set());
  const [gameOver, setGameOver] = useState(false);
  const [error, setError] = useState('');

  const lastWord = history.length > 0 ? history[history.length - 1].word : null;
  const requiredFirst = lastWord ? lastWord.slice(-1) : null;

  function reset() {
    setHistory([]);
    setUsed(new Set());
    setInput('');
    setGameOver(false);
    setError('');
  }

  function submit() {
    setError('');
    const word = input.trim();
    if (!word) return;
    if (word.length < 2) {
      setError('ë‘ ê¸€ìž ì´ìƒì˜ ë‹¨ì–´ë¥¼ ìž…ë ¥í•´ ì£¼ì„¸ìš”.');
      return;
    }
    if (used.has(word)) {
      setError('ì´ë¯¸ ì‚¬ìš©í•œ ë‹¨ì–´ìž…ë‹ˆë‹¤.');
      return;
    }
    if (requiredFirst && word.charAt(0) !== requiredFirst) {
      setError(`"${requiredFirst}"ìœ¼ë¡œ ì‹œìž‘í•˜ëŠ” ë‹¨ì–´ë¥¼ ìž…ë ¥í•´ ì£¼ì„¸ìš”.`);
      return;
    }
    if (!WORD_SET.has(word)) {
      setError('ì‚¬ì „ì— ì—†ëŠ” ë‹¨ì–´ìž…ë‹ˆë‹¤. ë‹¤ë¥¸ ë‹¨ì–´ë¥¼ ì‹œë„í•´ ì£¼ì„¸ìš”.');
      return;
    }

    const newUsed = new Set(used);
    newUsed.add(word);
    const userTurn: Turn = { player: 'user', word, status: 'ok' };
    const next: Turn[] = [...history, userTurn];

    const lastChar = word.slice(-1);
    if (HANBANG.includes(lastChar)) {
      next.push({ player: 'computer', word: '(í•œë°©ë‹¨ì–´!)', status: 'error', message: `"${lastChar}"ìœ¼ë¡œ ì‹œìž‘í•˜ëŠ” ë‹¨ì–´ê°€ ì—†ì–´ìš”. ì‚¬ìš©ìž ìŠ¹ë¦¬!` });
      setHistory(next);
      setUsed(newUsed);
      setInput('');
      setGameOver(true);
      return;
    }

    const candidates = (WORDS_BY_FIRST[lastChar] || []).filter((w) => !newUsed.has(w));
    if (candidates.length === 0) {
      next.push({ player: 'computer', word: '(ì»´í“¨í„° íŒ¨ë°°)', status: 'error', message: 'ì»´í“¨í„°ê°€ ë‹¨ì–´ë¥¼ ìƒê°í•´ë‚´ì§€ ëª»í–ˆì–´ìš”. ì‚¬ìš©ìž ìŠ¹ë¦¬!' });
      setHistory(next);
      setUsed(newUsed);
      setInput('');
      setGameOver(true);
      return;
    }
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    newUsed.add(pick);
    next.push({ player: 'computer', word: pick, status: 'ok' });

    const compLast = pick.slice(-1);
    if (HANBANG.includes(compLast)) {
      // computer can still play but user must respond â€” keep going
    }

    setHistory(next);
    setUsed(newUsed);
    setInput('');
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 min-h-[200px] max-h-[300px] overflow-y-auto">
        {history.length === 0 ? (
          <p className="text-sm text-slate-500">ì•„ëž˜ì— ì²« ë‹¨ì–´ë¥¼ ìž…ë ¥í•´ ëë§ìž‡ê¸°ë¥¼ ì‹œìž‘í•´ ë³´ì„¸ìš”. (ì˜ˆ: ì‚¬ê³¼, ë°”ë‹¤, ë‚˜ë¬´)</p>
        ) : (
          <div className="space-y-1">
            {history.map((turn, idx) => (
              <div key={idx} className={`text-sm ${turn.player === 'user' ? 'text-blue-700' : 'text-slate-700'}`}>
                <span className="font-medium">{turn.player === 'user' ? 'ë‚˜' : 'ì»´í“¨í„°'}:</span> {turn.word}
                {turn.message && <span className="ml-2 text-red-600 text-xs">{turn.message}</span>}
              </div>
            ))}
          </div>
        )}
      </div>

      {requiredFirst && !gameOver && (
        <p className="text-sm text-slate-700">
          ë‹¤ìŒ ë‹¨ì–´ëŠ” <strong className="text-blue-600">"{requiredFirst}"</strong>ìœ¼ë¡œ ì‹œìž‘í•´ì•¼ í•©ë‹ˆë‹¤.
        </p>
      )}

      {error && <p className="text-sm text-red-600">{error}</p>}

      {!gameOver ? (
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder="ë‹¨ì–´ë¥¼ ìž…ë ¥í•˜ì„¸ìš”"
            maxLength={20}
            className="flex-1 min-w-[160px] rounded-lg border border-slate-300 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={submit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            ì œì¶œ
          </button>
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
          >
            ìƒˆ ê²Œìž„
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          ë‹¤ì‹œ ì‹œìž‘
        </button>
      )}
    </div>
  );
}

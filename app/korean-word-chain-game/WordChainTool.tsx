'use client';

import { useState } from 'react';

const WORDS = [
  '사과', '과일', '일기', '기차', '차표', '표지', '지도', '도서관', '관심', '심장',
  '장미', '미술', '술집', '집안', '안경', '경찰', '찰떡', '떡국', '국수', '수박',
  '박물관', '관장', '장군', '군대', '대학', '학교', '교실', '실내', '내일', '일요일',
  '책상', '상자', '자전거', '거리', '리본', '본질', '질문', '문제', '제목', '목소리',
  '소리', '리듬', '듬뿍', '뿌리', '리더', '더위', '위치', '치아', '아침', '침대',
  '대문', '문어', '어머니', '니은', '은행', '행복', '복권', '권력', '력사',
  '바다', '다리', '리어카', '카페', '페인트', '트럭', '럭비', '비행기', '기름', '름달',
  '나무', '무지개', '개미', '미래', '래퍼', '퍼즐', '즐거움', '움직임', '임금', '금요일',
  '하늘', '늘보', '보라', '라면', '면도', '도시', '시간', '간식', '식당', '당근',
  '근육', '육지', '지구', '구름', '름', '름덩이',
];

const WORD_SET = new Set(WORDS);
const WORDS_BY_FIRST: Record<string, string[]> = {};
WORDS.forEach((w) => {
  const first = w.charAt(0);
  if (!WORDS_BY_FIRST[first]) WORDS_BY_FIRST[first] = [];
  WORDS_BY_FIRST[first].push(w);
});

type Turn = { player: 'user' | 'computer'; word: string; status: 'ok' | 'error'; message?: string };

const HANBANG = ['늠', '슭', '믐', '큼', '쁨'];

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
      setError('두 글자 이상의 단어를 입력해 주세요.');
      return;
    }
    if (used.has(word)) {
      setError('이미 사용한 단어입니다.');
      return;
    }
    if (requiredFirst && word.charAt(0) !== requiredFirst) {
      setError(`"${requiredFirst}"으로 시작하는 단어를 입력해 주세요.`);
      return;
    }
    if (!WORD_SET.has(word)) {
      setError('사전에 없는 단어입니다. 다른 단어를 시도해 주세요.');
      return;
    }

    const newUsed = new Set(used);
    newUsed.add(word);
    const userTurn: Turn = { player: 'user', word, status: 'ok' };
    const next: Turn[] = [...history, userTurn];

    const lastChar = word.slice(-1);
    if (HANBANG.includes(lastChar)) {
      next.push({ player: 'computer', word: '(한방단어!)', status: 'error', message: `"${lastChar}"으로 시작하는 단어가 없어요. 사용자 승리!` });
      setHistory(next);
      setUsed(newUsed);
      setInput('');
      setGameOver(true);
      return;
    }

    const candidates = (WORDS_BY_FIRST[lastChar] || []).filter((w) => !newUsed.has(w));
    if (candidates.length === 0) {
      next.push({ player: 'computer', word: '(컴퓨터 패배)', status: 'error', message: '컴퓨터가 단어를 생각해내지 못했어요. 사용자 승리!' });
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
      // computer can still play but user must respond — keep going
    }

    setHistory(next);
    setUsed(newUsed);
    setInput('');
  }

  return (
    <div className="space-y-4">
      <div className="rounded-lg border-2 border-black bg-slate-50 p-3 min-h-[200px] max-h-[300px] overflow-y-auto">
        {history.length === 0 ? (
          <p className="text-sm text-slate-500">아래에 첫 단어를 입력해 끝말잇기를 시작해 보세요. (예: 사과, 바다, 나무)</p>
        ) : (
          <div className="space-y-1">
            {history.map((turn, idx) => (
              <div key={idx} className={`text-sm ${turn.player === 'user' ? 'text-blue-700' : 'text-slate-700'}`}>
                <span className="font-medium">{turn.player === 'user' ? '나' : '컴퓨터'}:</span> {turn.word}
                {turn.message && <span className="ml-2 text-red-600 text-xs">{turn.message}</span>}
              </div>
            ))}
          </div>
        )}
      </div>

      {requiredFirst && !gameOver && (
        <p className="text-sm text-slate-700">
          다음 단어는 <strong className="text-blue-600">"{requiredFirst}"</strong>으로 시작해야 합니다.
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
            placeholder="단어를 입력하세요"
            maxLength={20}
            className="flex-1 min-w-[160px] rounded-lg border-2 border-black p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={submit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            제출
          </button>
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 bg-white text-slate-700 border-2 border-black rounded-lg text-sm font-medium hover:bg-slate-50 transition"
          >
            새 게임
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          다시 시작
        </button>
      )}
    </div>
  );
}

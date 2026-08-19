'use client';

import { useMemo, useState } from 'react';

// 한글 유니코드: 가(0xAC00) ~ 힣(0xD7A3)
const HANGUL_BASE = 0xac00;
const HANGUL_LAST = 0xd7a3;
const JUNG_COUNT = 21;
const JONG_COUNT = 28;

const JUNGSEONG = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ',
  'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ',
];

const JONGSEONG = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ',
  'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
  'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
];

type Syllable = { cho: number; jung: number; jong: number };

function isHangulSyllable(ch: string): boolean {
  const code = ch.charCodeAt(0);
  return code >= HANGUL_BASE && code <= HANGUL_LAST;
}

function decompose(ch: string): Syllable | null {
  if (!isHangulSyllable(ch)) return null;
  const offset = ch.charCodeAt(0) - HANGUL_BASE;
  return {
    cho: Math.floor(offset / (JUNG_COUNT * JONG_COUNT)),
    jung: Math.floor((offset % (JUNG_COUNT * JONG_COUNT)) / JONG_COUNT),
    jong: offset % JONG_COUNT,
  };
}

// 받침을 소리나는 대표음으로 묶는다 (ㄱ/ㄲ/ㅋ → ㄱ 계열 등)
const JONG_SOUND_GROUP: Record<number, string> = {
  0: '', 1: 'k', 2: 'k', 3: 'k', 4: 'n', 5: 'n', 6: 'n', 7: 't', 8: 'l',
  9: 'k', 10: 'm', 11: 'p', 12: 'l', 13: 'l', 14: 'p', 15: 'l', 16: 'm',
  17: 'p', 18: 'p', 19: 't', 20: 't', 21: 'ng', 22: 't', 23: 't', 24: 'k',
  25: 't', 26: 'p', 27: 't',
};

const WORDS: string[] = [
  '사랑', '노래', '하늘', '바다', '구름', '바람', '자유', '청춘', '기억', '추억',
  '행복', '슬픔', '눈물', '미소', '웃음', '희망', '절망', '용기', '열정', '순간',
  '영원', '시간', '계절', '여름', '겨울', '가을', '새벽', '아침', '저녁', '한밤',
  '별빛', '햇살', '달빛', '그림', '사진', '편지', '이야기', '목소리', '발걸음', '숨결',
  '심장', '마음', '생각', '느낌', '감정', '표정', '눈빛', '손길', '온기', '체온',
  '거리', '골목', '도시', '고향', '집앞', '창밖', '길목', '언덕', '바닥', '천장',
  '친구', '가족', '연인', '사람', '우리', '너와', '나는', '함께', '혼자', '둘이',
  '시작', '마지막', '오늘', '내일', '어제', '지금', '나중', '언젠가', '항상', '가끔',
  '진심', '거짓', '약속', '비밀', '고백', '이별', '만남', '재회', '인연', '운명',
  '무대', '조명', '박수', '환호', '침묵', '고요', '소음', '리듬', '박자', '멜로디',
  '가사', '음악', '연주', '기타', '피아노', '드럼', '베이스', '보컬', '랩퍼', '가수',
  '꿈속', '현실', '상상', '환상', '기적', '우연', '필연', '선택', '결심', '포기',
  '도전', '실패', '성공', '노력', '재능', '한계', '극복', '성장', '변화', '흔적',
  '자랑', '사방', '희망찬', '단순', '이유', '자연', '초원', '평원', '고원', '정원',
  '햇빛', '별살', '온돌', '온천', '동행', '여행', '비행', '유행', '진행', '실행',
  '문앞', '하늘앞', '눈앞', '지금은', '오늘은', '나눔', '기쁨', '아픔', '설렘', '떨림',
  '울림', '메아리', '노을', '가을밤', '겨울밤', '여름밤', '봄날', '한날', '그날', '옛날',
  '소망', '열망', '갈망', '기대', '미래', '과거', '현재', '순환', '반복', '지속',
  '용서', '이해', '공감', '위로', '격려', '응원', '갈채', '환대', '초대', '작별',
  '침착', '차분', '평온', '안정', '균형', '조화', '질서', '혼돈', '무질서', '자율',
  '침실', '거실', '교실', '사실', '진실', '현실감', '충실', '성실', '착실', '확실',
  '고집', '수집', '편집', '밀집', '결집', '소집', '모집', '채집', '군집', '밀림',
];

type Mode = 'jong' | 'jung' | 'both';

const MODES: Array<{ key: Mode; label: string; hint: string }> = [
  { key: 'both', label: '완전 라임', hint: '모음과 받침이 모두 같은 단어' },
  { key: 'jung', label: '모음 라임', hint: '모음(중성)이 같은 단어' },
  { key: 'jong', label: '받침 라임', hint: '받침 소리가 같은 단어' },
];

function lastSyllable(word: string): Syllable | null {
  for (let i = word.length - 1; i >= 0; i -= 1) {
    const s = decompose(word[i]);
    if (s) return s;
  }
  return null;
}

function rhymeScore(target: Syllable, cand: Syllable, mode: Mode): number {
  const sameJung = target.jung === cand.jung;
  const sameJongSound = JONG_SOUND_GROUP[target.jong] === JONG_SOUND_GROUP[cand.jong];
  const exactJong = target.jong === cand.jong;

  if (mode === 'jung') return sameJung ? (sameJongSound ? 2 : 1) : 0;
  if (mode === 'jong') return sameJongSound ? (sameJung ? 2 : 1) : 0;
  if (sameJung && exactJong) return 3;
  if (sameJung && sameJongSound) return 2;
  return 0;
}

function describe(s: Syllable): string {
  const v = JUNGSEONG[s.jung] ?? '';
  const f = JONGSEONG[s.jong] ?? '';
  return f ? v + ' + 받침 ' + f : v + ' (받침 없음)';
}

export function RhymeFinderTool() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<Mode>('both');
  const [searched, setSearched] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeMode = useMemo(
    () => MODES.find((m) => m.key === mode) ?? MODES[0],
    [mode],
  );

  const target = useMemo(() => lastSyllable(input.trim()), [input]);

  const results = useMemo(() => {
    if (!target) return [];
    const word = input.trim();
    const scored = WORDS.filter((w) => w !== word)
      .map((w) => {
        const s = lastSyllable(w);
        return s ? { word: w, score: rhymeScore(target, s, mode) } : { word: w, score: 0 };
      })
      .filter((r) => r.score > 0);
    scored.sort((a, b) => b.score - a.score || a.word.localeCompare(b.word, 'ko'));
    return scored.slice(0, 40);
  }, [target, input, mode]);

  function handleSearch() {
    setSearched(true);
    setCopied(false);
  }

  async function copyAll() {
    if (!results.length) return;
    try {
      await navigator.clipboard.writeText(results.map((r) => r.word).join(', '));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <label htmlFor="rhyme-input" className="text-sm font-medium text-slate-900">
        라임을 찾을 단어를 입력하세요
      </label>
      <input
        id="rhyme-input"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setSearched(false);
        }}
        placeholder="예: 사랑"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-base outline-none focus:border-indigo-500"
      />

      <div className="mt-4 space-y-1">
        <span className="text-sm font-medium text-slate-900">라임 방식</span>
        <p className="text-xs text-slate-500">{activeMode.hint}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {MODES.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => {
              setMode(m.key);
              setCopied(false);
            }}
            aria-pressed={mode === m.key}
            className={
              mode === m.key
                ? 'rounded-full border px-3 py-1.5 text-sm transition border-indigo-500 bg-indigo-500 text-white'
                : 'rounded-full border px-3 py-1.5 text-sm transition border-slate-300 bg-white text-slate-700 hover:border-indigo-300'
            }
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleSearch}
          disabled={!input.trim()}
          className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          라임 찾기
        </button>
        {searched && results.length > 0 && (
          <button
            type="button"
            onClick={copyAll}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:border-indigo-300"
          >
            {copied ? '복사됨!' : '전체 복사'}
          </button>
        )}
      </div>

      {searched && target && (
        <p className="mt-4 rounded-lg bg-indigo-50 px-4 py-2 text-sm text-indigo-900">
          기준 음절: <strong>{describe(target)}</strong>
        </p>
      )}

      <div className="mt-4" aria-live="polite">
        {!searched ? (
          <p className="rounded-xl bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
            단어를 입력하고 <strong>라임 찾기</strong>를 눌러보세요.
          </p>
        ) : !target ? (
          <p className="rounded-xl bg-amber-50 px-4 py-6 text-center text-sm text-amber-800">
            한글 단어를 입력해 주세요.
          </p>
        ) : results.length === 0 ? (
          <p className="rounded-xl bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
            일치하는 라임을 찾지 못했습니다. 다른 방식이나 단어로 시도해 보세요.
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {results.map((r) => (
              <span
                key={r.word}
                className={
                  r.score >= 3
                    ? 'rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-900'
                    : 'rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700'
                }
              >
                {r.word}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

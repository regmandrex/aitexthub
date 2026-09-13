'use client';

import { useMemo, useState } from 'react';

type StyleKey = 'cool' | 'cute' | 'funny' | 'sports' | 'work' | 'study';

const STYLES: Array<{ key: StyleKey; label: string; hint: string }> = [
  { key: 'cool', label: '멋있는', hint: '강렬하고 임팩트 있는 팀 이름' },
  { key: 'cute', label: '귀여운', hint: '부드럽고 친근한 팀 이름' },
  { key: 'funny', label: '재미있는', hint: '웃음이 나오는 유쾌한 팀 이름' },
  { key: 'sports', label: '스포츠', hint: '동호회·체육대회용 팀 이름' },
  { key: 'work', label: '회사·조직', hint: '팀 프로젝트·부서용 이름' },
  { key: 'study', label: '스터디', hint: '스터디·학습 모임용 이름' },
];

const PREFIX: Record<StyleKey, string[]> = {
  cool: ['불꽃', '천둥', '질주', '무적', '전설', '폭풍', '검은', '붉은', '강철', '야생', '초월', '절대', '심연', '광속', '냉혈'],
  cute: ['말랑', '몽글', '뽀짝', '오물', '쫀득', '보들', '동글', '포근', '살랑', '반짝', '알콩', '방울', '솜사탕', '구름', '꼬물'],
  funny: ['대충', '어쩌다', '오늘도', '망했다', '눈치껏', '갑자기', '역시나', '아무튼', '그래도', '어영부영', '얼렁뚱땅', '설마', '하필', '기어이', '결국엔'],
  sports: ['질풍', '돌격', '승리', '불굴', '패기', '역전', '맹공', '철벽', '전력', '폭주', '진격', '무한', '열혈', '최강', '독주'],
  work: ['혁신', '도약', '성장', '신뢰', '연결', '가치', '미래', '핵심', '전략', '창의', '협업', '실행', '집중', '개척', '통합'],
  study: ['꾸준', '완독', '정독', '새벽', '몰입', '집중', '무한', '성실', '차근', '반복', '누적', '착실', '단단', '깊이', '한번더'],
};

const SUFFIX: Record<StyleKey, string[]> = {
  cool: ['군단', '기사단', '연합', '동맹', '결사대', '부대', '일당', '세력', '전선', '클럽', '파', '조직', '길드', '팀', '유닛'],
  cute: ['친구들', '모임', '가족', '단짝', '패밀리', '하우스', '동산', '마을', '식구', '무리', '팀', '클럽', '방', '소굴', '둥지'],
  funny: ['모임', '연합', '동호회', '클럽', '협회', '파티', '무리', '일당', '집단', '동아리', '팀', '조합', '소모임', '패거리', '군단'],
  sports: ['FC', '클럽', '팀', '유나이티드', '이글스', '타이거즈', '워리어스', '레이커스', '파이터즈', '드래곤즈', '스타즈', '킹스', '불스', '샤크스', '울브스'],
  work: ['팀', 'TF', '스쿼드', '랩', '스튜디오', '워크스', '파트너스', '그룹', '유닛', '셀', '챕터', '길드', '크루', '컴퍼니', '스테이션'],
  study: ['스터디', '모임', '클럽', '방', '그룹', '팀', '캠프', '하우스', '랩', '아카데미', '살롱', '서클', '코스', '트랙', '클래스'],
};

const SINGLE: Record<StyleKey, string[]> = {
  cool: ['이클립스', '오라이온', '팬텀', '블레이드', '노바', '제로', '아크', '베놈', '크로노스', '엠버'],
  cute: ['도토리', '마카롱', '푸딩', '초코칩', '젤리곰', '떡볶이', '붕어빵', '쿠키', '마시멜로', '단팥빵'],
  funny: ['출근싫어', '야근금지', '월요병', '퇴근하자', '집에가고파', '내일부터', '오늘까지만', '배고파요', '졸려요', '살려주세요'],
  sports: ['챔피언스', '올스타즈', '레전드', '파이널', '트리플', '오버드라이브', '킥오프', '패스트브레이크', '홈런', '터치다운'],
  work: ['시너지', '모멘텀', '임팩트', '파이오니어', '벤치마크', '스프린트', '마일스톤', '브레이크스루', '프론티어', '캐털리스트'],
  study: ['완주반', '합격반', '새벽반', '심화반', '기초반', '집중반', '마스터반', '정진반', '독학러', '공부방'],
};

function pickRandom<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

function generateNames(style: StyleKey, keyword: string, count: number): string[] {
  const out = new Set<string>();
  const kw = keyword.trim();
  let guard = 0;

  while (out.size < count && guard < count * 40) {
    guard += 1;
    const roll = Math.random();

    if (kw && roll < 0.35) {
      // 입력한 키워드를 살린 조합
      out.add(Math.random() < 0.5 ? kw + ' ' + pickRandom(SUFFIX[style]) : pickRandom(PREFIX[style]) + ' ' + kw);
      continue;
    }
    if (roll < 0.55) {
      out.add(pickRandom(SINGLE[style]));
      continue;
    }
    out.add(pickRandom(PREFIX[style]) + ' ' + pickRandom(SUFFIX[style]));
  }

  return Array.from(out).slice(0, count);
}

export function TeamNameGeneratorTool() {
  const [style, setStyle] = useState<StyleKey>('cool');
  const [keyword, setKeyword] = useState('');
  const [count, setCount] = useState(10);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const active = useMemo(
    () => STYLES.find((s) => s.key === style) ?? STYLES[0],
    [style],
  );

  function handleGenerate(nextStyle: StyleKey = style) {
    setResults(generateNames(nextStyle, keyword, count));
    setCopied(false);
  }

  async function copyAll() {
    if (!results.length) return;
    try {
      await navigator.clipboard.writeText(results.map((n, i) => (i + 1) + '. ' + n).join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm sm:p-6">
      <label htmlFor="team-keyword" className="text-sm font-medium text-slate-900">
        키워드 (선택)
      </label>
      <input
        id="team-keyword"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="예: 축구, 개발, 영어"
        className="mt-2 w-full rounded-lg border-2 border-black px-4 py-2.5 text-base outline-none focus:border-indigo-500"
      />
      <p className="mt-1 text-xs text-slate-500">
        입력하면 키워드를 살린 이름이 함께 만들어집니다. 비워 두어도 됩니다.
      </p>

      <div className="mt-4 space-y-1">
        <span className="text-sm font-medium text-slate-900">스타일</span>
        <p className="text-xs text-slate-500">{active.hint}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {STYLES.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => {
              setStyle(s.key);
              handleGenerate(s.key);
            }}
            aria-pressed={style === s.key}
            className={
              style === s.key
                ? 'rounded-full border px-3 py-1.5 text-sm transition border-indigo-500 bg-indigo-500 text-white'
                : 'rounded-full border px-3 py-1.5 text-sm transition border-black bg-white text-slate-700 hover:border-indigo-300'
            }
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <label htmlFor="team-count" className="text-sm text-slate-700">
          개수
        </label>
        <select
          id="team-count"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="rounded-lg border-2 border-black px-3 py-1.5 text-sm"
        >
          {[5, 10, 20, 30].map((n) => (
            <option key={n} value={n}>
              {n}개
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => handleGenerate()}
          className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          팀 이름 만들기
        </button>

        {results.length > 0 && (
          <button
            type="button"
            onClick={copyAll}
            className="rounded-lg border-2 border-black px-4 py-2 text-sm text-slate-700 hover:border-indigo-300"
          >
            {copied ? '복사됨!' : '전체 복사'}
          </button>
        )}
      </div>

      <div className="mt-4" aria-live="polite">
        {results.length === 0 ? (
          <p className="rounded-xl bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
            스타일을 고르고 <strong>팀 이름 만들기</strong>를 눌러보세요.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {results.map((n, i) => (
              <div
                key={n}
                className="flex items-center gap-3 rounded-xl border-3 border-black bg-slate-50 px-4 py-2.5 text-sm text-slate-800"
              >
                <span className="text-xs font-semibold text-indigo-600">{i + 1}</span>
                <span className="font-medium">{n}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

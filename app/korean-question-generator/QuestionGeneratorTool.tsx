'use client';

import { useMemo, useState } from 'react';

type CategoryKey = 'friend' | 'couple' | 'drink' | 'mbti' | 'deep' | 'balance';

const CATEGORIES: Array<{ key: CategoryKey; label: string; hint: string }> = [
  { key: 'friend', label: '친구', hint: '가볍게 아이스브레이킹할 때' },
  { key: 'couple', label: '연인', hint: '서로를 더 알아가고 싶을 때' },
  { key: 'drink', label: '술자리', hint: '분위기를 띄우고 싶을 때' },
  { key: 'mbti', label: 'MBTI', hint: '성향을 알아보고 싶을 때' },
  { key: 'deep', label: '깊은 대화', hint: '진솔한 이야기를 나눌 때' },
  { key: 'balance', label: '밸런스 게임', hint: '둘 중 하나를 골라야 할 때' },
];

const QUESTIONS: Record<CategoryKey, string[]> = {
  friend: [
    '가장 최근에 크게 웃은 일은 무엇인가요?',
    '요즘 가장 자주 듣는 노래는 무엇인가요?',
    '어릴 때 장래희망은 무엇이었나요?',
    '내일 갑자기 하루가 비면 무엇을 하고 싶나요?',
    '지금까지 받은 선물 중 가장 기억에 남는 것은?',
    '나를 한 단어로 표현한다면 무엇일까요?',
    '스트레스를 푸는 나만의 방법이 있나요?',
    '다시 가고 싶은 여행지가 있다면 어디인가요?',
    '최근에 새로 도전해 본 것이 있나요?',
    '친구들에게 자주 듣는 칭찬은 무엇인가요?',
    '휴대폰에서 가장 많이 쓰는 앱은 무엇인가요?',
    '인생 영화나 드라마를 하나만 꼽는다면?',
    '아침형 인간인가요, 저녁형 인간인가요?',
    '가장 자신 있는 요리는 무엇인가요?',
    '지금 통장에 100만 원이 생긴다면 어디에 쓸 건가요?',
    '학창 시절 별명은 무엇이었나요?',
    '혼자 있는 시간에 주로 무엇을 하나요?',
    '올해 꼭 이루고 싶은 목표가 있나요?',
  ],
  couple: [
    '나의 첫인상은 어땠나요?',
    '함께한 순간 중 가장 기억에 남는 날은 언제인가요?',
    '내가 어떤 표정을 지을 때 가장 좋아 보이나요?',
    '앞으로 함께 꼭 해보고 싶은 것이 있나요?',
    '내가 무심코 한 행동 중 고마웠던 것이 있나요?',
    '서운했지만 말하지 못했던 순간이 있었나요?',
    '우리가 처음 만난 날로 돌아간다면 무엇을 다르게 할 건가요?',
    '내가 어떤 말을 해줄 때 가장 힘이 되나요?',
    '함께 늙어간다면 어떤 모습이었으면 좋겠나요?',
    '나에게 배우고 싶은 점이 있다면 무엇인가요?',
    '둘만의 여행을 간다면 어디로 가고 싶나요?',
    '내가 힘들어 보일 때 어떻게 해주면 좋겠나요?',
    '우리 사이에서 가장 소중하게 지키고 싶은 것은?',
    '서로에게 어떤 사람으로 기억되고 싶나요?',
    '요즘 나에게 가장 하고 싶은 말은 무엇인가요?',
    '내가 모르는 당신의 비밀이 하나 있다면?',
  ],
  drink: [
    '이 자리에서 가장 반전 매력이 있는 사람은 누구인가요?',
    '지금까지 마신 술자리 중 최고의 순간은?',
    '가장 창피했던 흑역사를 하나만 말해보세요.',
    '첫사랑은 어떤 사람이었나요?',
    '여기 있는 사람 중 한 명과 하루를 바꾼다면 누구인가요?',
    '술 마시고 실수한 적이 있다면 무엇인가요?',
    '지금 가장 연락하고 싶은 사람은 누구인가요?',
    '내 인생에서 가장 잘한 선택은 무엇인가요?',
    '한 달 동안 쉴 수 있다면 무엇을 하고 싶나요?',
    '지금 이 자리에서 가장 부러운 사람은 누구인가요?',
    '다시 스무 살로 돌아간다면 무엇을 할 건가요?',
    '내가 가진 것 중 하나를 포기해야 한다면?',
    '살면서 가장 크게 후회한 일은 무엇인가요?',
    '오늘 집에 가서 가장 먼저 할 일은?',
  ],
  mbti: [
    '약속이 갑자기 취소되면 기분이 어떤가요?',
    '여행 계획을 미리 세우는 편인가요, 즉흥적인 편인가요?',
    '고민이 생기면 누군가에게 말하나요, 혼자 생각하나요?',
    '처음 만난 사람과 대화를 먼저 시작하는 편인가요?',
    '결정을 내릴 때 논리와 감정 중 무엇을 더 따르나요?',
    '주말에 약속이 세 개면 설레나요, 부담스럽나요?',
    '일할 때 마감 직전에 몰아서 하는 편인가요?',
    '새로운 환경에 적응하는 데 얼마나 걸리나요?',
    '친구가 고민을 말하면 해결책을 주나요, 공감을 하나요?',
    '계획이 틀어지면 어떻게 반응하나요?',
    '혼자만의 시간이 얼마나 필요한가요?',
    '단체 대화방에서 주로 말하는 편인가요, 보는 편인가요?',
    '미래를 상상하는 걸 좋아하나요, 현재에 집중하나요?',
    '정리정돈이 잘 되어 있어야 마음이 편한가요?',
  ],
  deep: [
    '지금의 나를 만든 결정적인 순간은 언제였나요?',
    '가장 두려운 것은 무엇인가요?',
    '나에게 성공이란 어떤 모습인가요?',
    '용서하지 못한 사람이 있나요?',
    '죽기 전에 꼭 하고 싶은 일이 있다면?',
    '지금 가장 감사한 사람은 누구인가요?',
    '내가 나에게 가장 미안한 점은 무엇인가요?',
    '어떤 사람으로 기억되고 싶나요?',
    '인생에서 가장 외로웠던 순간은 언제였나요?',
    '지금 포기하지 못하고 붙잡고 있는 것은 무엇인가요?',
    '10년 전의 나에게 한마디를 한다면?',
    '나를 가장 잘 아는 사람은 누구인가요?',
    '행복하다고 느끼는 순간은 언제인가요?',
    '변하지 않았으면 하는 것이 있다면 무엇인가요?',
  ],
  balance: [
    '평생 여름만 vs 평생 겨울만',
    '돈 많은 백수 vs 적당히 버는 워커홀릭',
    '과거로 돌아가기 vs 미래를 미리 보기',
    '평생 라면만 vs 평생 샐러드만',
    '친구 100명 vs 진짜 친구 1명',
    '하늘을 나는 능력 vs 투명해지는 능력',
    '모든 언어 통달 vs 모든 악기 통달',
    '평생 반말만 vs 평생 존댓말만',
    '아침형 인간 되기 vs 잠 안 자도 되기',
    '매일 여행 vs 매일 휴식',
    '유명해지기 vs 부자 되기',
    '기억력 두 배 vs 체력 두 배',
    '연락 안 되는 애인 vs 집착하는 애인',
    '평생 실내 vs 평생 실외',
  ],
};

function pick(list: string[], count: number): string[] {
  const pool = [...list];
  const out: string[] = [];
  const n = Math.min(count, pool.length);
  for (let i = 0; i < n; i += 1) {
    const idx = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
}

export function QuestionGeneratorTool() {
  const [category, setCategory] = useState<CategoryKey>('friend');
  const [count, setCount] = useState(5);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const active = useMemo(
    () => CATEGORIES.find((c) => c.key === category) ?? CATEGORIES[0],
    [category],
  );

  function generate(next: CategoryKey = category) {
    setResults(pick(QUESTIONS[next], count));
    setCopied(false);
  }

  function handleCategory(next: CategoryKey) {
    setCategory(next);
    setResults(pick(QUESTIONS[next], count));
    setCopied(false);
  }

  async function copyAll() {
    if (!results.length) return;
    try {
      await navigator.clipboard.writeText(results.map((q, i) => (i + 1) + '. ' + q).join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-900">질문 종류를 골라주세요</span>
        <p className="text-xs text-slate-500">{active.hint}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => handleCategory(c.key)}
            aria-pressed={category === c.key}
            className={
              category === c.key
                ? 'rounded-full border px-3 py-1.5 text-sm transition border-indigo-500 bg-indigo-500 text-white'
                : 'rounded-full border px-3 py-1.5 text-sm transition border-slate-300 bg-white text-slate-700 hover:border-indigo-300'
            }
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <label htmlFor="q-count" className="text-sm text-slate-700">
          개수
        </label>
        <select
          id="q-count"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
        >
          {[3, 5, 10, 15].map((n) => (
            <option key={n} value={n}>
              {n}개
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => generate()}
          className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          질문 뽑기
        </button>

        {results.length > 0 && (
          <button
            type="button"
            onClick={copyAll}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:border-indigo-300"
          >
            {copied ? '복사됨!' : '전체 복사'}
          </button>
        )}
      </div>

      <div className="mt-4" aria-live="polite">
        {results.length === 0 ? (
          <p className="rounded-xl bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
            종류를 고르고 <strong>질문 뽑기</strong>를 눌러보세요.
          </p>
        ) : (
          <ol className="space-y-2">
            {results.map((q, i) => (
              <li
                key={q + '-' + i}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800"
              >
                <span className="font-semibold text-indigo-600">{i + 1}</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

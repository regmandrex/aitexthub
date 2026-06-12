import FAQSection from '@/components/FAQSection';
import BelowToolAd from '@/components/ads/BelowToolAd';
import AdSenseSlot from '@/components/ads/AdSenseSlot';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { WordChainTool } from './WordChainTool';
import { faqItems } from './faq';
import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/url';

const title = '끝말잇기 | 컴퓨터와 한국어 끝말잇기 게임 (무료)';
const description =
  '컴퓨터와 즐기는 무료 끝말잇기 게임입니다. 한국어 단어 사전 기반으로 두음법칙과 한방단어 규칙을 적용해 친구·가족과 함께 즐길 수 있는 끝말잇기 도구입니다.';


export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ title, description, urlPath: '/korean-word-chain-game', locale: 'ko_KR' });
}

function RailAd({ side }: { side: 'left' | 'right' }) {
  const sideClass = side === 'left' ? 'left-4' : 'right-4';
  return (
    <div className={`hidden lg:block fixed top-[220px] ${sideClass} z-20`}>
      <div className="w-[180px] min-h-[260px]"><AdSenseSlot className="w-full" /></div>
    </div>
  );
}

function buildFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `${title} – 자주 묻는 질문`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export default function KoreanWordChainGamePage() {
  const url = `${siteUrl}/korean-word-chain-game`;
  const faqLd = buildFaqJsonLd();
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '끝말잇기',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    description,
    url,
    inLanguage: 'ko',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '1480', bestRating: '5', worstRating: '1' },
  };

  return (
    <div lang="ko" className="relative bg-[#f7f9ff]">
      <JsonLd data={faqLd} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-3xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">끝말잇기</h1>
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">컴퓨터와 즐기는 한국어 끝말잇기 게임입니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span><span>4.8</span><span>·</span><span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:mt-6 md:rounded-2xl md:p-6">
          <WordChainTool />
        </section>

        <BelowToolAd />
        <RelatedTools currentSlug="korean-word-chain-game" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기란?</h2>
            <p>끝말잇기는 한국에서 가장 오래되고 사랑받는 말놀이 게임입니다. 한 사람이 단어를 말하면 다음 사람은 그 단어의 마지막 글자로 시작하는 새 단어를 말하는 단순한 규칙이지만, 어휘력과 순발력이 모두 필요해 가족·학교·친구 사이에서 끊임없이 즐겨지는 한국식 단어 게임입니다. 이 끝말잇기 도구는 컴퓨터를 상대로 1대1 끝말잇기를 즐길 수 있는 무료 온라인 게임이며, 한국어 단어 사전과 두음법칙·한방단어 규칙을 적용해 진짜 끝말잇기처럼 작동합니다.</p>
            <p>끝말잇기는 단순한 게임이 아니라 한국어 학습에도 매우 효과적인 도구입니다. 다음 단어를 떠올리려면 어휘를 끊임없이 검색해야 하므로 자연스럽게 단어 활용 능력이 늘어납니다. 학교 수업, 가족 캠핑, 명절 모임, 아이와의 차 안 시간, 한국어 학습자의 어휘 연습 등 활용 범위가 매우 넓습니다.</p>
            <p>이 끝말잇기 도구의 가장 큰 장점은 언제 어디서나 혼자서도 끝말잇기를 즐길 수 있다는 점입니다. 친구나 가족이 없을 때도 컴퓨터와 끝말잇기를 하면서 어휘력을 점검할 수 있고, 한방단어 같은 끝말잇기 전략을 직접 시험해 볼 수 있습니다.</p>
            <p>회원가입이 필요 없고 게임 기록도 외부 서버에 저장되지 않으므로 가볍게 즐기실 수 있습니다. 모바일에서도 동일하게 작동해 학교 쉬는 시간이나 출퇴근 시간에 짧게 즐기기에도 좋습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기 규칙 정리</h2>
            <p>끝말잇기의 기본 규칙은 매우 단순합니다. 첫째, 다음에 말하는 단어는 직전 단어의 마지막 글자로 시작해야 합니다. 예를 들어 누군가 "사과"라고 했다면 다음 사람은 "과"로 시작하는 단어인 "과일", "과자", "과학" 같은 단어를 말해야 합니다. 둘째, 한 게임 안에서 이미 사용한 단어를 다시 사용할 수 없습니다. 셋째, 사전에 등재된 일반 명사를 사용해야 하며 인명·지명·고유명사는 보통 제외합니다.</p>
            <p>이 끝말잇기 도구는 위 세 가지 기본 규칙을 자동으로 검사합니다. 사용자가 사전에 없는 단어를 입력하거나, 잘못된 첫 글자로 시작하는 단어를 입력하거나, 이미 사용한 단어를 다시 입력하면 오류 메시지가 표시되고 다른 단어를 입력해야 합니다. 컴퓨터도 같은 규칙을 따라 응답하므로 진짜 사람과 게임을 하는 것처럼 자연스럽게 진행됩니다.</p>
            <p>또 하나의 중요한 규칙은 한방단어와 두음법칙입니다. 한방단어는 마지막 글자가 다음 단어를 받기 거의 불가능한 글자(늠, 슭, 믐, 큼, 쁨 등)로 끝나는 단어로, 끝말잇기의 결정적 승부 카드 역할을 합니다. 두음법칙은 ㄹ·ㄴ으로 시작하는 한자어가 첫머리에서 다른 음으로 변하는 규칙으로, 끝말잇기에서 융통성 있게 단어를 이어가는 데 사용됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">한방단어로 끝말잇기 이기는 법</h2>
            <p>끝말잇기에서 가장 강력한 무기는 한방단어입니다. 한방단어란 마지막 글자가 사전에 거의 등재되지 않는 글자로 끝나는 단어를 가리킵니다. 대표적인 한방단어 종결 글자는 "늠", "슭", "믐", "큼", "쁨"입니다. 이런 글자로 끝나는 단어를 내면 상대가 받을 단어가 없어 게임이 즉시 종료됩니다.</p>
            <p>한방단어 예시로는 "쓰임"(임 → 다음 단어 어려움 — 단, 임은 비교적 받을 단어가 있음), "슭"으로 끝나는 단어들, "늠"으로 끝나는 단어들이 있습니다. 이 끝말잇기 도구는 사용자가 한방단어 종결 글자로 단어를 마치면 자동으로 컴퓨터의 패배를 인정하고 게임을 종료합니다. 한방단어를 미리 외워 두면 실제 친구와의 끝말잇기에서도 결정적인 순간에 활용할 수 있습니다.</p>
            <p>다만 한방단어를 너무 자주 사용하면 게임 자체가 짧아져 재미가 줄어듭니다. 진짜 끝말잇기 고수들은 한방단어를 결정적인 순간에만 아껴 사용하며, 평소에는 평범한 단어로 길게 이어가는 즐거움을 추구합니다. 이 끝말잇기 도구로 한방단어 사용 타이밍을 연습해 두면 친구와의 실제 게임에서 실력 차이를 만들 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기 잘하는 5가지 전략</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">자주 쓰이는 첫 글자 단어를 외우기</strong> — "가, 사, 자, 다, 라, 마"로 시작하는 단어를 많이 알면 받기가 쉬워집니다.</li>
              <li><strong className="text-slate-900">한방단어 5~10개 미리 외워 두기</strong> — 결정적인 순간에 한방단어를 내면 즉시 게임이 끝납니다.</li>
              <li><strong className="text-slate-900">받기 어려운 글자로 끝나는 단어 골라 쓰기</strong> — "륨, 큼, 펌, 쁨" 같은 글자로 끝나는 단어를 사용하면 상대가 곤란해집니다.</li>
              <li><strong className="text-slate-900">두음법칙 활용하기</strong> — "리듬"으로 끝났을 때 "이" 또는 "리"로 받을 수 있다는 걸 알면 어휘 풀이 두 배가 됩니다.</li>
              <li><strong className="text-slate-900">이미 쓴 단어 기억하기</strong> — 같은 단어 반복은 반칙이므로 어떤 단어를 썼는지 기억하는 것이 중요합니다. 이 끝말잇기 도구는 자동으로 추적해 줍니다.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기를 즐기는 5가지 상황</h2>
            <p>첫째, 가족 모임과 명절. 모두 모인 자리에서 끝말잇기는 어색함을 풀어 주는 가장 좋은 도구입니다. 둘째, 학교 수업과 조회 시간. 국어 어휘 학습 활동으로 활용하면 학생들이 자연스럽게 어휘 검색을 시작합니다. 셋째, 차 안에서 가족과. 장거리 운전 중 아이와 함께 끝말잇기를 하면 시간이 빠르게 지나갑니다. 넷째, 한국어 학습자 어휘 연습. 한글 받침 발음과 어휘 연결을 동시에 익힐 수 있습니다. 다섯째, 친구와의 단순 시간 때우기. 카페에서 친구와 잠깐의 즐길 거리로 끝말잇기를 시작해 보세요.</p>
            <p>이 끝말잇기 도구는 위 모든 상황에서 활용할 수 있습니다. 컴퓨터와의 1대1 게임으로 시작해 익숙해지면, 화면을 친구나 가족과 함께 보면서 사람 vs 사람 게임으로도 응용 가능합니다. 한 사람이 입력하고 다른 사람이 다음 단어를 입력하는 식으로 진행하면 됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기와 한국어 학습</h2>
            <p>끝말잇기는 한국어 어휘 학습에 매우 효과적인 게임입니다. 일반적인 어휘 학습은 단어를 단순히 외우는 데 그치지만, 끝말잇기는 그 단어를 즉시 떠올려 사용해야 하므로 능동적인 어휘 활용 능력이 길러집니다. 또한 단어의 첫 글자와 마지막 글자를 의식하면서 검색하기 때문에 한글의 음운 구조를 자연스럽게 익히게 됩니다.</p>
            <p>한국어 학습자에게 특히 추천드리는 활용법은 끝말잇기를 진행하다가 모르는 단어가 나오면 즉시 사전이나 검색으로 의미를 확인하는 것입니다. 단순 암기보다 게임의 흐름 속에서 단어를 만나는 경험이 기억에 훨씬 오래 남습니다. 이 끝말잇기 도구는 컴퓨터가 단어를 응답하므로, 모르는 단어가 나오면 그 자리에서 검색해 어휘를 확장하는 학습 방식으로 활용하세요.</p>
            <p>다문화 가정 아이들이나 한국어를 배우는 외국인에게도 끝말잇기는 매우 좋은 학습 도구입니다. 부모님이 컴퓨터 역할을 하면서 아이의 답변을 도와주거나, 학원에서 그룹 게임으로 활용하면 어휘력 향상 효과가 큽니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기 게임 사용 시 주의사항</h2>
            <p>이 끝말잇기 도구는 일상에서 자주 쓰는 한국어 명사 100여 개의 제한된 사전을 사용합니다. 따라서 모든 한국어 단어를 인식하지는 못하며, 사전에 없는 단어를 입력하면 오류가 표시됩니다. 게임을 즐길 때는 가능한 한 일반적이고 자주 쓰는 명사를 사용해 주세요.</p>
            <p>또한 컴퓨터의 어휘 사전이 제한적이므로 빠르게 게임이 종료될 수 있습니다. 친구·가족과의 진짜 끝말잇기 분위기를 더 길게 즐기고 싶다면 사람 두 명이 번갈아 입력하는 방식으로 사용하시는 것을 권장드립니다. 이 도구는 가벼운 어휘 연습과 끝말잇기 입문용으로 가장 적합합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 쓰면 좋은 도구</h2>
            <p>한국어 닉네임 생성기, 삼행시 짓기, 사투리 번역기와 함께 사용하면 한국어 단어 학습의 폭이 넓어집니다. 끝말잇기로 어휘를 늘리고, 그 단어로 삼행시를 지어 보거나 사투리로 변환해 보면 한국어 표현력이 자연스럽게 늘어납니다. 또 별명 짓기 도구로 끝말잇기에 등장한 재미있는 단어를 별명으로 활용할 수도 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>끝말잇기는 한국어 어휘력과 순발력을 동시에 길러 주는 가장 즐거운 단어 게임입니다. 이 무료 온라인 끝말잇기 도구로 컴퓨터와 1대1 게임을 즐기거나, 친구·가족과 함께 화면을 보며 단체 게임으로 즐겨 보세요. 두음법칙과 한방단어 같은 한국식 끝말잇기의 묘미를 직접 체험할 수 있고, 한국어 학습자에게는 어휘 활용을 익히는 효과적인 학습 도구가 됩니다. 가볍게 시작해 보면 한 판이 어느새 다섯 판으로 늘어나는 끝말잇기의 매력을 발견하시게 될 것입니다.</p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection items={faqItems} title="자주 묻는 질문" intro="끝말잇기 게임 규칙, 한방단어, 두음법칙에 대한 궁금증을 정리했습니다." />
        </section>
      </div>
    </div>
  );
}

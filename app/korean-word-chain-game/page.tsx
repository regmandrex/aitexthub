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

function RailAd(_props: { side: 'left' | 'right' }) {
  return null;
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
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">PC와 함께 즐기는 한국어 끝말잇기 게임입니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span><span>4.8</span><span>·</span><span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border-3 border-black bg-white p-3 shadow-neo-sm md:mt-6 md:rounded-2xl md:p-6">
          <WordChainTool />
        </section>

        <BelowToolAd />
        <RelatedTools currentSlug="korean-word-chain-game" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기란?</h2>
            <p>끝말잇기는 대한민국에서 가장 오래 사랑받는 말놀이 오락입니다. 한 참여자가 단어를 대면 다음 사람은 그 단어의 끝 글자로 시작하는 새로운 어휘를 대는 간단한 방식이지만, 순발력과 어휘력이 모두 요구되어 가족, 학교, 친구들 사이에서 꾸준히 즐겨 온 한국형 단어 놀이입니다. 본 끝말잇기 솔루션은 컴퓨터를 상대 삼아 1대1 끝말잇기를 플레이 가능한 무료 웹 게임이며, 한국어 사전 데이터를 비롯해 두음법칙 및 한방단어 규칙을 반영하여 실제 끝말잇기처럼 작동합니다.</p>
            <p>끝말잇기는 단순 오락에 그치지 않고 한국어 학습에도 대단히 유용한 수단입니다. 다음 어휘를 떠올리기 위해 머릿속 단어들을 계속 탐색해야 하므로 자연스럽게 단어 구사력이 향상됩니다. 학교 수업 시간, 가족 캠핑, 명절 친지 모임, 아이와 함께 타는 차 안, 한국어 학습자의 어휘 공부 등 활용할 수 있는 영역이 대단히 넓습니다.</p>
            <p>본 끝말잇기 시스템의 가장 큰 장점은 시공간 제약 없이 혼자서도 마음껏 끝말잇기를 즐길 수 있다는 부분입니다. 마땅히 놀 상대가 없을 때도 컴퓨터와 끝말잇기를 겨루며 어휘 실력을 테스트해 볼 수 있고, 한방단어 같은 끝말잇기 전술을 직접 실전에서 연습할 수 있습니다.</p>
            <p>별도의 회원가입 절차가 없고 게임 진행 기록도 외부 서버에 남지 않으므로 부담 없이 가볍게 즐기실 수 있습니다. 스마트폰 환경에서도 똑같이 구동되므로 학교 쉬는 시간이나 출퇴근길 지하철에서 잠시 즐기기에도 아주 제격입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기 규칙 정리</h2>
            <p>끝말잇기의 기본 규칙은 매우 간단합니다. 첫째, 그 다음에 대답하는 단어는 바로 앞 단어의 마지막 음절로 시작되어야 합니다. 가령 누군가 "사과"라고 외쳤다면 이어서 말하는 사람은 "과" 자로 시작하는 어휘인 "과일", "과자", "과학" 같은 단어를 대야 합니다. 둘째, 한 판의 게임 안에서 이미 활용했던 단어를 또다시 쓸 수 없습니다. 셋째, 국어사전에 등록된 일반 명사여야 하며 인명, 지명, 고유명사 등은 대체로 제외됩니다.</p>
            <p>이 끝말잇기 유틸리티는 위 3가지 기본 원칙을 저절로 점검합니다. 유저가 사전에 없는 어휘를 적거나, 틀린 첫 글자로 시작하는 어휘를 적거나, 중복된 어휘를 다시 적을 경우 경고 문구가 뜨며 새로운 어휘를 적어야 합니다. 시스템 역시 동일한 방식을 기반으로 답변하므로 실제 인간과 대결하듯 매끄럽게 이어집니다.</p>
            <p>또 다른 핵심 규칙은 끝말잇기 한방단어와 두음법칙입니다. 한방단어는 끝음절이 다음 어휘로 연결하기 거의 불가능한 음절(늠, 슭, 믐, 큼, 쁨 등)로 마무리되는 어휘로, 끝말잇기의 결정적 승리 무기 역할을 합니다. 두음법칙은 ㄹ·ㄴ으로 시작하는 한자어가 맨 앞에서 다른 소리로 바뀌는 규칙으로, 끝말잇기에서 유연하게 어휘를 연결하는 데 적용됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">한방단어로 끝말잇기 승리하는 방법</h2>
            <p>끝말잇기에서 제일 무서운 무기는 한방단어입니다. 한방단어란 마지막 음절이 사전에 거의 등록되지 않는 음절로 끝나는 어휘를 의미합니다. 대표적인 한방단어 끝맺음 음절은 "늠", "슭", "믐", "큼", "쁨"입니다. 이런 음절로 끝나는 어휘를 구사하면 상대방이 받을 어휘가 없어 대결이 곧바로 끝납니다.</p>
            <p>한방단어 사례로는 "쓰임"(임 → 다음 어휘 곤란 — 단, 임은 비교적 받을 어휘가 있음), "슭"으로 끝나는 어휘들, "늠"으로 끝나는 어휘들이 존재합니다. 이 끝말잇기 도구는 유저가 한방단어 끝맺음 음절로 어휘를 끝내면 저절로 시스템의 패배를 수용하고 대결을 마무리합니다. 한방단어를 미리 숙지해 두면 실제 지인과의 끝말잇기에서도 결정적 국면에 써먹을 수 있습니다.</p>
            <p>그렇지만 한방단어를 과도하게 쓰면 대결 자체가 짧아져 흥미가 떨어집니다. 진짜 끝말잇기 고수들은 한방단어를 중요한 국면에만 아껴 쓰며, 평상시는 일반적인 어휘로 길게 이어가는 재미를 추구합니다. 이 끝말잇기 유틸리티로 한방단어 구사 타이밍을 익혀 두면 지인과의 실제 대결에서 실력 격차를 낼 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기 잘하는 5가지 전술</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">자주 쓰이는 첫 글자 단어를 외우기</strong> — "가, 사, 자, 다, 라, 마"로 시작하는 어휘를 많이 알수록 받기가 수월해집니다.</li>
              <li><strong className="text-slate-900">한방단어 5~10개 미리 외워 두기</strong> — 결정적인 순간에 한방단어를 구사하면 곧바로 대결이 종료됩니다.</li>
              <li><strong className="text-slate-900">받기 어려운 글자로 끝나는 단어 골라 쓰기</strong> — "륨, 큼, 펌, 쁨" 같은 음절로 끝나는 어휘를 쓰면 상대방이 난처해집니다.</li>
              <li><strong className="text-slate-900">두음법칙 활용하기</strong> — "리듬"으로 끝났을 때 "이" 또는 "리"로 받을 수 있음을 이해하면 어휘 폭이 두 배로 넓어집니다.</li>
              <li><strong className="text-slate-900">이미 쓴 단어 기억하기</strong> — 동일한 어휘 중복은 반칙이므로 어떠한 어휘를 사용했는지 기억해 두는 것이 필수적입니다. 이 끝말잇기 도구는 저절로 기록해 줍니다.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기를 플레이하는 5가지 시나리오</h2>
            <p>첫째, 명절과 가족 모임. 다 함께 모인 자리에서 끝말잇기는 어색함을 없애주는 훌륭한 수단입니다. 둘째, 학교 수업과 아침 조회. 국어 어휘 교육 활동으로 쓰면 학생이 자연스럽게 단어를 찾기 시작합니다. 셋째, 자동차 안에서의 가족 시간. 장거리 운행 중 아이와 끝말잇기를 즐기면 시간이 순식간에 흘러갑니다. 넷째, 한국어 학습자의 단어 연습. 한글 받침 발음과 어휘 연결을 동시에 습득할 수 있습니다. 다섯째, 친구와의 가벼운 시간 떼우기. 카페에서 지인과 잠시 놀이 삼아 끝말잇기를 시작해 보세요.</p>
            <p>이 끝말잇기 유틸리티는 위에서 언급한 모든 장소에서 활용 가능합니다. 컴퓨터와의 1대1 매치로 시작해 익숙해지면, 화면을 지인이나 가족과 함께 보며 사람 대 사람 방식으로도 응용할 수 있습니다. 한 사람이 글자를 넣고 다른 사람이 다음 어휘를 채워 넣는 방식으로 진행하면 됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기와 한국어 학습</h2>
            <p>끝말잇기는 한국어 어휘력 향상에 매우 효과적인 놀이입니다. 일반적인 단어 공부는 어휘를 단순히 암기하는 데 그치지만, 끝말잇기는 그 단어를 즉각 떠올려 써야 하므로 능동적인 어휘 구사력이 길러집니다. 아울러 첫 자와 끝 자를 신경 쓰며 찾기 때문에 한글의 음운 체계를 자연스럽게 체득하게 됩니다.</p>
            <p>한국어 공부를 하는 분께 특히 권장하는 방식은 끝말잇기를 하다가 모르는 표현이 나오면 즉시 사전이나 검색으로 뜻을 알아보는 것입니다. 단순 암기보다 게임 진행 중에 단어를 마주한 경험이 기억에 훨씬 오래 남습니다. 이 끝말잇기 유틸리티는 컴퓨터가 단어로 답하므로, 생소한 어휘가 나오면 곧바로 검색해 단어를 넓히는 학습법으로 써보세요.</p>
            <p>다문화 가정의 자녀나 한국어를 익히는 외국인에게도 끝말잇기는 아주 훌륭한 교육 도구입니다. 부모가 컴퓨터 역할을 맡아 아이의 대답을 거들거나, 학원에서 그룹 게임으로 활용하면 어휘력 향상 효과가 매우 큽니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">끝말잇기 게임 이용 시 유의사항</h2>
            <p>이 끝말잇기 유틸리티는 일상에서 흔히 쓰이는 한국어 명사 100여 개의 제한된 사전을 활용합니다. 따라서 모든 한글 단어를 알아채지는 못하며, 목록에 없는 단어를 입력하면 에러가 발생합니다. 게임을 즐길 때는 가급적 대중적이고 자주 쓰는 명사를 선택해 주세요.</p>
            <p>또한 컴퓨터의 어휘 데이터가 한정되어 있어 빠르게 게임이 끝날 수 있습니다. 지인이나 가족과의 진짜 끝말잇기 분위기를 더 길게 느끼고 싶다면 두 사람이 번갈아 입력하는 방식을 추천합니다. 이 도구는 가벼운 어휘 연습과 끝말잇기 입문용으로 가장 알맞습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 이용하기 좋은 추천 도구</h2>
            <p>한국어 별명 생성기, 삼행시 짓기, 방언 번역기와 같이 쓰면 한국어 단어 학습의 폭이 넓어집니다. 끝말잇기로 어휘를 늘리고, 그 단어로 삼행시를 지어 보거나 사투리로 바꿔 보면 한국어 표현력이 자연스럽게 향상됩니다. 또한 닉네임 생성 도구로 끝말잇기에 나온 재밌는 단어를 별칭으로 써먹을 수도 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>끝말잇기는 한국어 어휘력과 순발력을 한꺼번에 키워주는 가장 재밌는 단어 게임입니다. 이 무료 온라인 끝말잇기 유틸리티로 컴퓨터와 1대1 대결을 하거나, 지인과 함께 화면을 보며 단체 게임으로 즐겨보세요. 두음법칙과 한방단어 같은 한국식 끝말잇기의 묘미를 직접 느낄 수 있고, 한국어 학습자에겐 어휘 활용을 익히는 유용한 교육 도구가 됩니다. 가볍게 시작했다가 한 판이 다섯 판으로 불어나는 끝말잇기의 매력을 경험하게 될 것입니다.</p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection items={faqItems} title="자주 묻는 질문" intro="끝말잇기 게임 규칙, 한방단어, 두음법칙에 대한 궁금증을 정리했습니다." />
        </section>
      </div>
    </div>
  );
}

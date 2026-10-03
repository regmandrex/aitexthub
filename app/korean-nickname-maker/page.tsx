import FAQSection from '@/components/FAQSection';
import BelowToolAd from '@/components/ads/BelowToolAd';
import AdSenseSlot from '@/components/ads/AdSenseSlot';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { NicknameMakerTool } from './NicknameMakerTool';
import { faqItems } from './faq';
import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/url';

const title = '별명 짓기 | 친구·커플·반려동물 별명 추천기 (무료)';
const description =
  '친구, 커플, 반려동물, 회사 동료에게 어울리는 별명을 추천해 주는 무료 별명 짓기 도구입니다. 이름과 특징을 입력하면 상황에 맞는 별명 후보를 한 번에 만들어 드립니다.';


export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ title, description, urlPath: '/korean-nickname-maker', locale: 'ko_KR' });
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

export default function KoreanNicknameMakerPage() {
  const url = `${siteUrl}/korean-nickname-maker`;
  const faqLd = buildFaqJsonLd();
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '별명 짓기',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description,
    url,
    inLanguage: 'ko',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1750', bestRating: '5', worstRating: '1' },
  };

  return (
    <div lang="ko" className="relative bg-[#f7f9ff]">
      <JsonLd data={faqLd} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-3xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">별명 짓기</h1>
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">친구, 연인, 반려동물, 직장 동료에게 꼭 어울리는 별칭을 한 번에 추천해 드립니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span><span>4.9</span><span>·</span><span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border-3 border-black bg-white p-3 shadow-neo-sm md:mt-6 md:rounded-2xl md:p-6">
          <NicknameMakerTool />
        </section>

        <BelowToolAd />
        <RelatedTools currentSlug="korean-nickname-maker" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">별명 짓기란?</h2>
            <p>별명 짓기는 본명 대신 다정하게 부를 수 있는 짧은 호칭을 제작하여 친근감을 높이는 한국식 호칭 트렌드입니다. 친구, 연인, 가족, 반려동물, 회사 동료에 이르기까지 누구에게나 잘 어울리는 별명이 존재하며, 알맞은 별명 하나가 인간관계의 심리적 거리를 크게 좁혀줍니다. 본 별명 짓기 솔루션은 이름이나 특징을 기입하면 상황별로 최적화된 별명 후보를 자동으로 산출해 주는 무료 온라인 추천 플랫폼입니다.</p>
            <p>한국 사회에서 별명은 단순한 부름말을 넘어 관계의 친밀도를 가늠하는 지표 역할을 합니다. "찰떡이", "복실이", "꿀단지" 같은 애칭을 주고받을 때 우리는 서로 간의 유대감을 깊이 체감하게 됩니다. 그러나 톡톡 튀는 별명을 즉석에서 떠올리는 일은 결코 만만치 않습니다. 그렇기에 이 별명 짓기 시스템은 친구, 연인, 반려동물, 직장 동료라는 네 가지 상황에 맞추어 별명 데이터베이스를 분리해 두었으며, 각각의 국면에 부합하는 어휘로만 후보를 조합해 제공합니다.</p>
            <p>본 별명 짓기 서비스의 가장 큰 강점은 무작위 추천 방식이 아니라 대상의 특성에 알맞은 분위기를 자동으로 설정해 준다는 점입니다. 친구 모드에서는 가볍고 유쾌한 톤을, 커플 모드에서는 다정한 애칭을, 반려동물 모드에서는 귀엽고 부드러운 단어를, 비즈니스 모드에서는 긍정적인 오피스 어휘를 채택하여 결과물의 결을 맞춥니다.</p>
            <p>별도의 회원 가입 절차가 필요 없고 모든 연산이 웹브라우저 내부에서 처리되므로, 지인이나 가족의 본명을 입력하더라도 보안상 안전합니다. 생성된 후보를 터치하기만 하면 즉시 클립보드에 복사되어 카카오톡, 인스타그램, 디스코드 등에 곧바로 붙여넣기 하실 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">친구 별명 짓기</h2>
            <p>친구 별명은 따뜻하고 가벼운 뉘앙스가 중요합니다. 이 별명 짓기 유틸리티의 프렌드 모드는 "귀염둥이", "찰떡", "단짝", "베프", "꿀잼", "햇살", "말랑" 같은 어휘를 사용해 교실이나 단톡방에서 편하게 부를 수 있는 호칭을 만들어 줍니다. 이름을 넣으면 그대로 반영된 형태뿐만 아니라 형용사 결합 및 접미사 형태의 후보가 골고루 제시됩니다.</p>
            <p>친구 호칭을 정할 때 제일 중요한 점은 당사자가 마음에 들어 할지 먼저 고려하는 것입니다. 외모나 과거의 부끄러운 일, 콤플렉스를 건드리는 별명은 처음엔 웃음을 주어도 결국 관계를 어색하게 만듭니다. 이 플랫폼이 제안하는 별명들은 전부 긍정적이고 포근한 어휘 중심이라 그런 우려가 적습니다.</p>
            <p>친구 별명은 단톡방의 개성을 나타내기도 합니다. 한 그룹의 친구들 호칭을 모두 비슷한 분위기로 맞추면(예: 모두 동물 이름, 모두 디저트 이름) 채팅방이 훨씬 유쾌해집니다. 각자 이 별명 짓기 도구를 이용해 후보들을 모은 뒤, 다 같이 모여 가장 잘 맞는 별명을 골라 보세요.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">커플 별명 짓기</h2>
            <p>커플 별명은 부드럽고 다정한 느낌이 필수적입니다. 별명 짓기 기능 중 커플 모드는 "꿀단지", "달콤", "사랑둥이", "뽀짝", "꿀잼", "하트", "소중", "귀염" 같은 단어로 후보를 구성합니다. 두 사람만의 애칭이나 카카오톡 프로필, 인스타그램 계정 이름으로 쓰기에 딱 좋습니다.</p>
            <p>근사한 커플 호칭은 양쪽의 공통된 기억이나 성향이 은은하게 담겨 있을 때 훨씬 어울립니다. 생성된 결과를 그대로 채택하는 방법도 괜찮지만, 두 사람만의 어휘를 한 글자 정도 수정하면 훨씬 의미 있는 별명이 탄생합니다. 가령 서비스가 "꿀단지민지"를 골라줬다면, 두 분이 처음 데이트한 커피숍 상호를 접목해 "라떼민지" 식으로 변형하는 것입니다.</p>
            <p>커플 호칭은 시간이 흐르면서 자연스럽게 바뀌기도 합니다. 처음엔 "민지핑", "민지님" 같은 가벼운 별명으로 시작했다가 관계가 깊어지면서 "우리 민지", "내 민지" 같은 깊이 있는 호칭으로 발전합니다. 이 별명 짓기 프로그램은 여러 단계의 후보를 한 번에 보여 주므로 현재 관계에 알맞은 별명을 선택하시면 됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">반려동물 별명 짓기</h2>
            <p>반려동물 별명은 부드럽고 귀여운 어휘가 핵심입니다. 별명 짓기 도구의 펫 모드는 "몽실", "뽀송", "복실", "냥냥", "댕댕", "꼬물", "작은", "귀요미" 같은 단어를 활용해 토끼, 햄스터, 고양이, 강아지 등 어떤 동물에게도 어울리는 이름을 만들어 줍니다.</p>
            <p>반려동물 별명은 공식 이름 외에 일상에서 자주 쓰는 애칭으로 활용됩니다. "초코"라는 본명이 있어도 평소에 "초코야", "복실이", "댕댕이"처럼 다채롭게 부르는 것이 한국의 반려동물 문화입니다. 이 별명 짓기 시스템은 그런 일상적인 애칭을 신속하게 생성해 줍니다.</p>
            <p>반려동물 SNS 계정을 운영하는 분들께도 이 도구가 매우 유용합니다. 블로그나 인스타그램 계정명은 짧고 부드러울수록 팔로워들이 쉽게 기억하기 때문입니다. 별명 짓기으로 후보를 뽑은 뒤 가장 간결하고 발음하기 좋은 것을 계정 이름으로 채택하면 일관된 브랜딩이 가능합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">직장 동료 별명 짓기</h2>
            <p>직장 동료 별명은 친근함과 격식 사이의 균형이 중요합니다. 별명 짓기 솔루션의 동료 모드는 "든든", "에이스", "척척박사", "능력자", "믿음직", "센스장인", "꼼꼼", "열정" 같은 업무 중심의 긍정적 어휘를 써서 팀 단톡방이나 회식 자리, 사내 메신저에서 편하게 쓸 수 있는 별명을 추천합니다.</p>
            <p>동료 호칭을 정할 때는 직급과 회사 분위기, 개인의 성향을 함께 살펴야 합니다. 보수적인 기업이라면 별명 사용을 가벼운 회식으로 제한하는 편이 안전합니다. 자율적인 스타트업 문화라면 메신저에서도 자유롭게 쓸 수 있습니다. 이 별명 짓기 결과물은 전부 긍정 톤이라 어떠한 사내 분위기에도 무난하게 녹아듭니다.</p>
            <p>팀 전체의 호칭을 통일된 컨셉으로 맞추는 것도 좋은 방법입니다. 예를 들어 팀원 모두에게 "에이스OO", "OO박사" 같은 구조의 별명을 부여하면 결속력이 높아집니다. 별명 짓기 시스템으로 각자의 후보를 만든 후 회식 때 함께 투표해 보시는 것을 권장합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">좋은 별명을 정하는 다섯 가지 기준</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">기억하기 쉬울 것</strong> — 발음이 너무 어렵거나 길이가 길면 결국 쓰이지 않습니다. 두세 글자 정도가 가장 부르기 편합니다.</li>
              <li><strong className="text-slate-900">받는 사람이 좋아할 것</strong> — 호칭은 결국 상대방을 위한 것입니다. 당사자가 꺼리는 별명은 관계만 어색하게 만듭니다.</li>
              <li><strong className="text-slate-900">긍정적인 단어로 구성될 것</strong> — 외모나 콤프렉스를 건드리는 별명은 당장은 웃겨도 시간이 갈수록 부담으로 작용합니다.</li>
              <li><strong className="text-slate-900">상황과 톤이 맞을 것</strong> — 커플, 친구, 회사 별명은 각각 어울리는 분위기가 다릅니다. 이 별명 짓기 플랫폼이 대상별로 단어 풀을 나눠 둔 이유가 바로 그 때문입니다.</li>
              <li><strong className="text-slate-900">오래 써도 질리지 않을 것</strong> — 처음부터 너무 자극적이고 독특한 것보다 1년이 지나도 편하게 부를 수 있는 호칭이 제일 훌륭합니다.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">별명 짓기 사용 사례</h2>
            <p>지인 생일 축하 카드에 호칭을 담아 건네거나, 카카오톡 프로필 닉네임을 별칭으로 바꾸거나, 단체 대화방에서 동료들 별칭을 일괄적으로 지정해 통일성을 부여하거나, 피로연 자리 배치도에 본이름 대신 애칭을 적어두거나, 사내 워크숍 명찰에 친근한 호칭으로 별칭을 활용할 수 있습니다. 해당 별명 짓기 유틸리티로 아이디어를 미리 구상해 두면 어떤 상황에서든 알맞은 명칭을 신속히 떠올릴 수 있습니다.</p>
            <p>인스타그램 캡션이나 트위터 포스팅에 친구 별명을 태그하는 것도 인기 있는 활용법입니다. 본명을 직접 드러내지 않으면서 친밀함을 나타낼 수 있어, SNS상에서 프라이버시 보호와 친근함을 동시에 챙길 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">별명 짓기 이용 시 유의사항</h2>
            <p>이 별명 짓기 도구는 자동 생성 방식을 사용하므로 모든 결과가 완벽히 자연스럽다고 장담할 수는 없습니다. 마음에 드는 결과가 나올 때까지 "다른 별명 보기"를 여러 번 눌러 보시고, 그 결과를 바탕으로 직접 한두 글자 다듬어 쓰시는 것을 권합니다.</p>
            <p>또한 별명을 지을 때는 당사자의 동의가 가장 중요합니다. 시스템이 추천한 호칭을 실제로 부르기 전에 상대방의 의사를 가급적 확인해 보세요. 훌륭한 별명이란 듣는 이와 부르는 이 모두가 기분 좋은 호칭입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 이용하기 좋은 추천 도구</h2>
            <p>한국어 닉네임 생성기, 삼행시 짓기, 인스타 ID 추천 도구와 병행하면 더 큰 시너지를 냅니다. 별명 짓기을 통해 친구 별명을 만든 후 삼행시를 지어 생일카드에 붙이거나, 커플 애칭으로 인스타그램 계정 아이디를 만드는 식으로 일관성 있는 콘텐츠를 빠르게 완성할 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>[1] 별명 짓기는 한국식 관계 문화의 핵심 요소입니다. 멋진 별명 하나로 친구·커플·반려동물·회사 동료와의 거리를 좁힐 수 있습니다. 이 무료 별명 짓기 유틸리티를 활용해 상황별 후보를 신속하게 확인하고 가장 마음에 드는 별명을 골라보세요. 따뜻하고 오랫동안 함께할 별명이 좋은 인연의 시작이 됩니다.</p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection items={faqItems} title="자주 묻는 질문" intro="별명 짓기, 친구·커플·반려동물·회사 별명에 대한 궁금증을 정리했습니다." />
        </section>
      </div>
    </div>
  );
}

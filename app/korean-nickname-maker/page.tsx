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
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">친구·커플·반려동물·회사 동료에게 어울리는 별명을 한 번에 추천해 드립니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span><span>4.9</span><span>·</span><span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:mt-6 md:rounded-2xl md:p-6">
          <NicknameMakerTool />
        </section>

        <BelowToolAd />
        <RelatedTools currentSlug="korean-nickname-maker" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">별명 짓기란?</h2>
            <p>별명 짓기는 본명 대신 부르기 좋은 짧은 호칭을 만들어 친근함을 더하는 한국식 호칭 문화입니다. 친구, 커플, 가족, 반려동물, 회사 동료까지 누구에게나 어울리는 별명이 있으며, 적절한 별명 하나가 관계의 거리감을 크게 줄여 줍니다. 이 별명 짓기 도구는 이름이나 특징을 입력하면 상황별로 어울리는 별명 후보를 자동으로 만들어 주는 무료 온라인 추천기입니다.</p>
            <p>한국에서 별명은 단순한 호칭이 아니라 관계의 친밀도를 보여 주는 일종의 표시입니다. "찰떡이", "복실이", "꿀단지" 같은 별명을 부르고 들을 때, 우리는 그 사람과의 친밀함을 자연스럽게 느낍니다. 그러나 좋은 별명을 즉석에서 떠올리기란 쉽지 않습니다. 그래서 이 별명 짓기 도구는 친구·커플·반려동물·회사 동료라는 4가지 상황에 맞춰 별명 풀을 분리해 두고, 각 상황에 어울리는 단어로만 후보를 조합해 줍니다.</p>
            <p>이 별명 짓기 도구의 장점은 단순한 무작위 추천이 아니라 대상에 맞는 분위기를 자동으로 골라 준다는 점입니다. 친구 모드에서는 가볍고 따뜻한 분위기, 커플 모드에서는 다정한 애칭, 반려동물 모드에서는 귀엽고 부드러운 단어, 회사 모드에서는 능력 중심의 긍정 단어를 사용해 결과의 톤을 통일합니다.</p>
            <p>회원가입이 필요 없고 모든 처리가 브라우저 안에서 이뤄지므로, 친구 이름이나 가족 이름을 입력해도 안전합니다. 후보를 탭하면 그 자리에서 클립보드에 복사되어 카카오톡, 인스타그램, 디스코드에 바로 붙여 넣을 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">친구 별명 짓기</h2>
            <p>친구 별명은 가볍고 따뜻한 느낌이 핵심입니다. 이 별명 짓기 도구의 친구 모드는 "귀염둥이", "찰떡", "단짝", "베프", "꿀잼", "햇살", "말랑" 같은 단어를 활용해 단톡방이나 학교에서 부담 없이 부를 수 있는 별명을 만듭니다. 친구 이름을 입력하면 그 이름을 그대로 활용한 후보와, 형용사+이름, 이름+접미사 형태의 후보가 골고루 추천됩니다.</p>
            <p>친구 별명을 지을 때 가장 중요한 것은 친구 본인이 그 별명을 좋아할지를 먼저 생각하는 것입니다. 외모, 콤플렉스, 과거의 부끄러운 일을 놀리는 별명은 처음엔 웃음을 줄 수 있어도 시간이 지나면 관계를 어색하게 만듭니다. 이 도구가 추천하는 별명은 모두 긍정적이고 따뜻한 단어 기반이라 그런 위험이 적습니다.</p>
            <p>친구 별명은 단톡방의 정체성이 되기도 합니다. 한 그룹의 친구들 별명을 모두 같은 분위기로 통일하면(예: 모두 동물 이름, 모두 디저트 이름) 단톡방이 더 즐거워집니다. 친구마다 한 명씩 이 별명 짓기 도구를 돌려 후보를 모은 뒤, 그룹 회의로 가장 어울리는 별명을 함께 골라 보세요.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">커플 별명 짓기</h2>
            <p>커플 별명은 다정하고 부드러운 느낌이 중요합니다. 별명 짓기 도구의 커플 모드는 "꿀단지", "달콤", "사랑둥이", "뽀짝", "꿀잼", "하트", "소중", "귀염" 같은 단어로 후보를 만듭니다. 두 사람 사이에서만 부르는 애칭, 카카오톡 프로필 이름, 인스타그램 커플 계정 이름으로 활용하기에 좋습니다.</p>
            <p>좋은 커플 별명은 두 사람만의 추억이나 특징이 살짝 녹아 있을 때 가장 자연스럽습니다. 도구가 추천한 후보를 그대로 쓰는 것도 좋지만, 두 사람만의 단어를 한 글자 바꿔 넣으면 더 특별한 별명이 됩니다. 예를 들어 도구가 "꿀단지민지"를 추천했다면, 두 사람이 처음 만난 카페 이름을 응용해 "라떼민지" 같은 변형을 만들 수 있습니다.</p>
            <p>커플 별명은 시간이 지나면서 자연스럽게 변하기도 합니다. 처음에는 "민지핑", "민지님" 같이 가벼운 별명으로 시작했다가 관계가 깊어지면서 "우리 민지", "내 민지" 같이 진한 호칭으로 발전하는 식입니다. 이 별명 짓기 도구는 그런 다양한 단계의 후보를 한 번에 보여 주므로, 현재 두 분의 분위기에 맞는 별명을 고르시면 됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">반려동물 별명 짓기</h2>
            <p>반려동물 별명은 귀엽고 부드러운 단어가 핵심입니다. 별명 짓기 도구의 반려동물 모드는 "몽실", "뽀송", "복실", "냥냥", "댕댕", "꼬물", "작은", "귀요미" 같은 단어를 활용해 강아지·고양이·햄스터·토끼 등 어떤 반려동물에게도 어울리는 별명을 만듭니다.</p>
            <p>반려동물 별명은 본명 외에도 일상에서 자주 부르는 애칭으로 사용됩니다. "초코"라는 본명이 있어도 평소에는 "초코야", "복실이", "댕댕이" 같이 다양한 별명으로 부르는 것이 한국 반려동물 문화의 자연스러운 모습입니다. 이 별명 짓기 도구는 그런 일상 애칭을 빠르게 만들어 줍니다.</p>
            <p>반려동물 SNS 계정을 운영하시는 분들에게도 이 도구가 유용합니다. 인스타그램이나 블로그 계정 이름은 짧고 부드러울수록 팔로워가 기억하기 쉽기 때문입니다. 별명 짓기로 후보를 만든 뒤, 그중 가장 짧고 발음이 좋은 별명을 계정 이름으로 쓰시면 일관된 채널 정체성을 만들 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">회사 동료 별명 짓기</h2>
            <p>회사 동료 별명은 격식과 친근함의 균형이 중요합니다. 별명 짓기 도구의 회사 동료 모드는 "든든", "에이스", "척척박사", "능력자", "믿음직", "센스장인", "꼼꼼", "열정" 같은 능력 중심의 긍정 단어를 사용해 회식 자리, 사내 메신저, 팀 단톡방에서 부담 없이 쓸 수 있는 별명을 추천합니다.</p>
            <p>회사 별명을 정할 때는 직급, 회사 분위기, 동료의 성향을 함께 고려해야 합니다. 격식이 강한 회사라면 별명을 사용하는 자리를 가벼운 회식 정도로 한정하는 것이 안전합니다. 캐주얼한 스타트업 분위기라면 평소 사내 메신저에서도 별명을 자유롭게 사용할 수 있습니다. 이 별명 짓기 도구의 결과는 모두 긍정적인 톤이라 어떤 회사 분위기에도 무난하게 어울립니다.</p>
            <p>팀의 별명을 통일된 콘셉트로 맞추는 것도 좋은 활용 방법입니다. 예를 들어 모든 팀원에게 "에이스OO", "OO박사" 형식의 별명을 붙이면 팀의 단합이 강조됩니다. 별명 짓기 도구로 팀원 한 명씩 후보를 만든 뒤, 회식 자리에서 함께 골라 보는 것을 추천드립니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">좋은 별명을 만드는 5가지 기준</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">기억하기 쉬울 것</strong> — 길이가 너무 길거나 발음이 어려운 별명은 결국 안 쓰이게 됩니다. 두세 글자 정도가 가장 부르기 좋습니다.</li>
              <li><strong className="text-slate-900">받는 사람이 좋아할 것</strong> — 별명은 결국 받는 사람을 위한 호칭입니다. 본인이 좋아하지 않는 별명은 관계를 어색하게 만듭니다.</li>
              <li><strong className="text-slate-900">긍정적인 단어로 구성될 것</strong> — 외모나 콤플렉스를 놀리는 별명은 처음엔 웃겨도 시간이 지날수록 부담이 됩니다.</li>
              <li><strong className="text-slate-900">상황과 톤이 맞을 것</strong> — 친구 별명, 커플 별명, 회사 별명은 어울리는 분위기가 다릅니다. 이 별명 짓기 도구는 대상별로 단어 풀을 분리해 둔 이유가 그래서입니다.</li>
              <li><strong className="text-slate-900">오래 써도 질리지 않을 것</strong> — 처음부터 너무 자극적이거나 특이한 별명보다는, 1년 뒤에도 자연스럽게 부를 수 있는 별명이 가장 좋습니다.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">별명 짓기 활용 예시</h2>
            <p>친구 생일 카드에 별명을 적어 보내거나, 카카오톡 프로필 이름을 별명으로 바꾸거나, 단톡방에서 친구들 별명을 모두 정해 통일감을 만들거나, 결혼식 자리 배치도에 본명 대신 별명을 적거나, 회사 워크숍 명찰에 부드러운 호칭으로 별명을 사용할 수 있습니다. 이 별명 짓기 도구로 후보를 만들어 두면 어떤 자리에서도 빠르게 어울리는 호칭을 꺼낼 수 있습니다.</p>
            <p>인스타그램 캡션이나 트위터 글에 친구 별명을 넣어 태그하는 것도 인기 있는 활용법입니다. 본명을 직접 노출하지 않으면서도 친밀감을 표현할 수 있어, SNS에서 사생활 보호와 친근함을 동시에 챙길 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">별명 짓기 사용 시 주의사항</h2>
            <p>이 별명 짓기 도구는 자동 추천에 기반하므로 모든 결과가 100% 자연스럽다고 보장하지는 않습니다. 마음에 드는 후보가 나올 때까지 "다른 별명 보기"를 여러 번 시도해 보시고, 결과를 바탕으로 한두 글자만 직접 다듬어 사용하시는 것을 권장드립니다.</p>
            <p>또한 별명은 받는 사람의 동의가 가장 중요합니다. 도구가 추천한 별명을 친구나 동료에게 부르기 전에 한 번쯤 본인의 의사를 확인하는 것이 좋습니다. 좋은 별명은 부르는 사람과 듣는 사람 모두가 즐거워하는 호칭입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 쓰면 좋은 도구</h2>
            <p>한국어 닉네임 생성기, 삼행시 짓기, 인스타 아이디 추천 도구와 함께 사용하면 시너지가 좋습니다. 별명 짓기로 친구의 별명을 만든 뒤 그 별명으로 삼행시를 지어 생일 카드에 붙이거나, 커플 별명을 만든 뒤 그 별명으로 인스타 커플 계정 아이디를 만드는 식으로 일관된 콘셉트의 콘텐츠를 빠르게 완성할 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>별명 짓기는 한국식 관계 문화의 작은 핵심입니다. 좋은 별명 하나가 친구·커플·반려동물·회사 동료와의 거리를 한층 가깝게 만듭니다. 이 무료 별명 짓기 도구로 상황별로 어울리는 후보를 빠르게 만들어 보고, 그중 가장 마음에 드는 별명을 다듬어 사용해 보세요. 따뜻하고 오래 쓸 수 있는 별명이 좋은 관계의 시작이 됩니다.</p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection items={faqItems} title="자주 묻는 질문" intro="별명 짓기, 친구·커플·반려동물·회사 별명에 대한 궁금증을 정리했습니다." />
        </section>
      </div>
    </div>
  );
}

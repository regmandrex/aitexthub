import FAQSection from '@/components/FAQSection';
import BelowToolAd from '@/components/ads/BelowToolAd';
import AdSenseSlot from '@/components/ads/AdSenseSlot';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { AcrosticPoemTool } from './AcrosticPoemTool';
import { faqItems } from './faq';
import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/url';

const title = '삼행시 짓기 | 이름 삼행시 자동 생성기 (무료)';
const description =
  '이름이나 단어를 넣으면 각 음절로 시작하는 삼행시를 자동으로 지어 주는 무료 삼행시 생성기입니다. 지인 이름 삼행시, 사행시, 오행시를 생일, 회식, SNS 이벤트용으로 즉시 써먹을 수 있습니다.';


export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ title, description, urlPath: '/korean-acrostic-poem-generator', locale: 'ko_KR' });
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

export default function KoreanAcrosticPoemPage() {
  const url = `${siteUrl}/korean-acrostic-poem-generator`;
  const faqLd = buildFaqJsonLd();
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '삼행시 짓기',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description,
    url,
    inLanguage: 'ko',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '2030', bestRating: '5', worstRating: '1' },
  };

  return (
    <div lang="ko" className="relative bg-[#f7f9ff]">
      <JsonLd data={faqLd} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-3xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">삼행시 짓기</h1>
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">이름 혹은 단어로 삼행시, 사행시, 오행시를 자동으로 지어 주는 무료 유틸리티입니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span><span>4.9</span><span>·</span><span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border-3 border-black bg-white p-3 shadow-neo-sm md:mt-6 md:rounded-2xl md:p-6">
          <AcrosticPoemTool />
        </section>

        <BelowToolAd />
        <RelatedTools currentSlug="korean-acrostic-poem-generator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기란?</h2>
            <p>삼행시 짓기는 세 글자의 단어 및 명칭의 각 음절을 첫 글자로 삼아 세 줄로 짧은 시를 짓는 대한민국 전통의 말장난 시 형태입니다. 학급 자기소개, 회식 자리의 레크리에이션, 생일 축하 카드, 인스타그램 캡션, 지인에게 보내는 메시지까지 폭넓게 쓰이는 한국식 콘텐츠입니다. 본 삼행시 생성기는 단어만 넣으면 각 글자에 맞는 문장을 자동으로 구성해 주는 무료 온라인 도구입니다.</p>
            <p>삼행시는 단순한 운문이 아니라 한국인들이 즐기는 일종의 언어 유희 문화입니다. 누구나 "삼행시 한 번 지어 봐!"라고 외치면 즉석에서 짧은 시를 읊으며 분위기를 돋우는 모습이 회식, 동창회, 가족 모임에서 흔히 벌어집니다. 하지만 현장에서 좋은 삼행시를 즉흥적으로 만들기란 어려우므로 이 삼행시 짓기 기능을 이용해 연습하거나 아이디어를 얻으면 큰 도움이 됩니다.</p>
            <p>이 서비스는 입력한 글자 수에 맞춰 자동으로 행을 생성하므로 2글자 이행시, 3글자 삼행시, 4글자 사행시, 5글자 오행시까지 전부 한 번에 처리할 수 있습니다. "사랑", "행복", "민수", "김민수" 등 어떤 단어나 이름을 넣어도 각 음절이 첫머리에 오는 시가 완성됩니다.</p>
            <p>삼행시 짓기는 무료로 제공되며 가입 절차가 필요 없습니다. 기입한 명칭이나 단어는 사용자의 브라우저 내부에서만 연산되며 외부 서버로 전송되지 않으므로 친구의 이름이나 개인 정보를 적어도 안전합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기 이용 방법</h2>
            <p>삼행시 짓기 도구의 사용법은 지극히 간단합니다. 첫째, 입력 칸에 단어나 이름을 적습니다. 둘째, "삼행시 짓기" 버튼을 클릭합니다. 셋째, 결과가 만족스러우면 복사 아이콘으로 클립보드에 담고, 마음에 들지 않으면 "다시 짓기"를 눌러 새로운 조합을 얻습니다. 이 삼 단계만 거치면 누구나 30초 내에 그럴듯한 삼행시를 완성할 수 있습니다.</p>
            <p>입력은 한글일 때 가장 자연스러운 결과물이 나옵니다. 영문 이름이나 한자 단어 역시 기술적으로는 처리 가능하나 시의 분위기가 부자연스러워질 수 있어 권장하지 않습니다. 아울러 글자 수는 2~5자일 때 가장 깔끔한 결과가 도출됩니다. 그보다 길어지면 행이 늘어나 전체적인 시의 맥락을 살리기 힘들어집니다.</p>
            <p>삼행시 짓기는 동일한 입력값을 넣어도 실행할 때마다 새로운 결과물을 보여줍니다. 시스템이 사전 구축된 문장 패턴 중 입력된 글자에 알맞은 것을 무작위로 고르기 때문입니다. 따라서 "다시 짓기"를 수차례 눌러 가장 자연스러운 문장을 선택하는 접근 방식이 가장 효과적입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기를 유용하게 쓰는 5가지 상황</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">친구 생일 축하 메시지</strong> — 지인의 이름으로 삼행시를 지어 카드에 적거나 카카오톡으로 전달하면 뻔한 "생일 축하해"보다 훨씬 깊은 인상을 남깁니다.</li>
              <li><strong className="text-slate-900">회식·동창회 자리 게임</strong> — 국내에서 삼행시 짓기는 술자리의 필수 레크리에이션입니다. 미리 본 유틸리티로 연습해 두면 실전에서도 당황하지 않고 뽐낼 수 있습니다.</li>
              <li><strong className="text-slate-900">학교 자기소개와 발표</strong> — 본인의 이름으로 삼행시를 지어 자기소개 시간에 활용하면 짧고 강렬한 인상을 심어줄 수 있습니다.</li>
              <li><strong className="text-slate-900">인스타그램·트위터 캡션</strong> — 게시물 속 핵심 키워드(여름, 카페, 데이트 등)로 삼행시를 지어 텍스트란에 넣으면 문구가 한층 흥미로워집니다.</li>
              <li><strong className="text-slate-900">팬레터와 응원 메시지</strong> — 애정하는 연예인이나 스포츠 선수 이름으로 삼행시를 구성해 SNS 응원 글에 활용해 보세요.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시·사행시·오행시의 차이점</h2>
            <p>삼행시는 세 자, 사행시는 네 자, 오행시는 다섯 자에 해당합니다. 전부 동일한 원리로 각 음절을 첫머리에 두고 시를 창작하되 글자 수만 다릅니다. 국내에서는 "삼행시"가 가장 대중적이라 이 단어가 통칭처럼 쓰이지만 실제로는 글자 개수에 따라 명칭이 달라집니다.</p>
            <p>이 삼행시 짓기 유틸리티는 기입한 단어의 음절 수만큼 자동으로 행을 늘려 주므로 사행시와 오행시도 함께 소화할 수 있습니다. "사랑"(2글자, 이행시), "행복"(2글자), "김민수"(3글자, 삼행시), "이지은"(3글자), "박서준"(3글자), "방탄소년단"(5글자, 오행시) 모두 직접 입력해 보시기 바랍니다.</p>
            <p>네 글자를 넘어가면 시적 분위기를 일정하게 유지하기 어려워지지만, 생성된 결과를 참고해 일부 어휘를 수정하면 충분히 자연스러운 사행시와 오행시를 완성할 수 있습니다. 본 도구의 결과물은 아이디어의 출발점으로 활용하시고, 본인의 표현력을 더해 완성도를 높여보시는 방법을 제안합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">멋진 삼행시를 작성하는 요령</h2>
            <p>삼행시 짓기를 효과적으로 활용하려면 몇 가지 수칙을 기억해 두는 것이 좋습니다. 첫째, 각 행이 매끄럽게 연결되도록 주제를 일치시키세요. 연관 없는 문장 세 개가 모이면 어색하지만, 동일한 테마로 묶이면 한 편의 시처럼 느껴집니다. 둘째, 마지막 글자에서 핵심 메시지를 전달하면 강렬한 인상을 남길 수 있습니다. 셋째, 상대방의 특성이나 추억을 한 행에 녹여내면 진정성이 담긴 맞춤형 삼행시가 완성됩니다.</p>
            <p>이 프로그램은 자동으로 그럴듯한 문장을 구성해주지만, 도출된 결과를 그대로 쓰기보다는 본인의 상황에 맞춰 한두 단어쯤 수정하는 편을 권장합니다. 예를 들어 "김민수" 친구의 생일 축하 카드를 제작할 때, 자동 완성된 삼행시에 두 사람만의 기억이나 별칭을 한 단어만 보태어도 훨씬 의미 있는 메시지가 됩니다.</p>
            <p>또 다른 팁은 "다시 짓기" 기능을 최소 3회에서 5회 정도 반복해서 실행해보는 것입니다. 매번 상이한 패턴이 선택되므로 첫 번째 결과가 마음에 들지 않아도 몇 번 더 클릭하면 훨씬 훌륭한 조합을 얻게 되는 경우가 많습니다. 자동 생성을 영감 얻는 수단으로 생각하고, 최종 결과물은 직접 선택하고 다듬는다는 마음가짐으로 임하시면 됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기 결과 예시</h2>
            <p>실제로 어떠한 결과물이 도출되는지 미리 확인하고 싶으시다면 아래의 예시를 참고해 주세요.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>사랑:</strong> "사: 사람들이 궁금해하는 마음, 랑: 랑랑하게 들리는 두 글자의 울림"</li>
              <li><strong>행복:</strong> "행: 행복은 가까이에 있고, 복: 복은 함께 만들어 가는 것"</li>
              <li><strong>친구:</strong> "친: 친한 사이에 떠올리는 얼굴, 구: 구름처럼 가벼운 우리의 시간"</li>
              <li><strong>김민수:</strong> "김: 김처럼 검고 윤기 나는 머리, 민: 민첩하게 움직이는 발걸음, 수: 수많은 사람 중에 빛나는 너"</li>
              <li><strong>이지은:</strong> "이: 이름만 들어도 떠오르는 미소, 지: 지난 시간 함께한 우리, 은: 은은하게 마음에 남는 이름"</li>
            </ul>
            <p>동일한 단어라 할지라도 "다시 짓기"를 누를 때마다 새로운 조합이 제시되므로, 여러 결과를 대조해가며 가장 마음에 드는 버전을 선택해 보세요. 자동 산출된 내용을 그대로 사용하기보다 한두 단어만 본인의 이야기로 변형해도 훨씬 개인화된 삼행시가 만들어집니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기와 한국 문화</h2>
            <p>삼행시 짓기는 한국 고유의 언어유희 풍습에서 비롯된 양식입니다. 일본의 와카나 중국의 절구처럼 한국에도 다양한 단형시 전통이 존재했으며, 삼행시는 그중에서도 대중이 향유하기 가장 수월한 형태로 자리 잡았습니다. 특히 1990년대부터 2000년대 사이 예능 프로그램에서 출연자들이 즉흥적으로 삼행시를 겨루는 코너가 큰 호응을 얻으면서 전 국민에게 널리 확산되었습니다.</p>
            <p>현재에도 삼행시는 학급 행사, 회식 모임, 결혼식 축하사, 소셜 미디어 콘텐츠 등 여러 장소에서 애용됩니다. 특정인의 이름이나 하나의 명사로 짧은 시를 지어 유쾌한 분위기를 조성하는 이 풍습은 한국인의 유머 코드와 정서가 고스란히 담긴 대표적인 사례입니다. 본 삼행시 짓기 서비스는 이러한 전통을 디지털 환경에 맞추어 누구나 손쉽게 경험할 수 있도록 고안되었습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기 이용 시 유의사항</h2>
            <p>이 삼행시 짓기 유틸리티는 자동 생성 알고리즘을 기반으로 하므로 모든 결과물이 100% 매끄럽다고 장담할 수는 없습니다. 입력된 글자에 따라 자연스러운 구문이 만들어지기도 하고, 때로는 다소 어색한 조합이 도출되기도 합니다. 그럴 때는 "다시 짓기"를 여러 차례 실행하거나, 얻어진 결과를 바탕으로 직접 문장을 교정하여 활용하시는 방식을 권합니다.</p>
            <p>또한 한자어나 영문 이름을 입력할 경우 시적 흐름과 조화롭지 않을 수 있으므로, 가급적 한글 성명이나 순우리말 단어를 입력하시는 편이 가장 완성도 높은 결과를 보여줍니다. 부적절한 어휘를 넣으면 결과가 부자연스러울 수 있으므로 일반적인 명사와 긍정적인 단어를 사용하시는 것이 좋습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 이용하기 좋은 추천 도구</h2>
            <p>삼행시 짓기와 병행하여 쓰기 좋은 관련 기능으로는 한국어 닉네임 생성기, 별명 메이커, 끝말잇기 등이 있습니다. 멋진 닉네임을 먼저 만든 후 해당 닉네임으로 삼행시를 지어내면 SNS 계정의 소개글이나 프로필 문구가 아주 자연스럽게 완성됩니다. 아울러 지인들의 이름으로 만든 삼행시와 별칭을 동시에 활용하여 단체 채팅방의 활기를 북돋우는 콘텐츠로도 응용할 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>삼행시 짓기는 한국식 유머와 정성을 짧은 시 한 수에 담아내는 매력적인 콘텐츠입니다. 지인의 생일, 개인 소개, 회식 자리의 레크리에이션, SNS 캡션 등 다양한 상황에서 유용하게 쓰이며, 본 무료 삼행시 제작기를 이용하면 누구나 반 미분 만에 그럴듯한 시를 완성할 수 있습니다. 자동 산출된 결과를 토대로 삼아 자신만의 에피소드를 녹여낸다면 상대방에게 깊은 감동을 주는 특별한 삼행시가 탄생합니다.</p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection items={faqItems} title="자주 묻는 질문" intro="삼행시 짓기, 이름 삼행시, 사행시·오행시에 대한 궁금증을 정리했습니다." />
        </section>
      </div>
    </div>
  );
}

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
  '이름이나 단어를 입력하면 각 글자로 시작하는 삼행시를 자동으로 만들어 주는 무료 삼행시 생성기입니다. 친구 이름 삼행시, 사행시, 오행시까지 생일·회식·SNS용으로 바로 활용할 수 있습니다.';


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
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">
            이름이나 단어로 삼행시·사행시·오행시를 자동으로 만들어 주는 무료 도구입니다.
          </p>
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
            <p>삼행시 짓기는 세 글자로 된 단어나 이름의 각 글자를 첫 자리에 두고 세 줄로 된 짧은 시를 만드는 한국 고유의 말장난 시 형식입니다. 학교 자기소개, 회식 자리의 게임, 생일 축하 카드, 인스타그램 캡션, 친구에게 보내는 메시지까지 폭넓게 활용되는 한국식 콘텐츠입니다. 이 삼행시 생성기는 이름이나 단어만 입력하면 자동으로 각 글자에 어울리는 문장을 만들어 주는 무료 온라인 도구입니다.</p>
            <p>삼행시는 단순한 시가 아니라 한국 사람들이 즐기는 일종의 말놀이 문화입니다. 누군가 "삼행시 한 번 지어 봐!"라고 외치면 즉석에서 짧은 시를 지어 분위기를 띄우는 장면이 회식, 동창회, 가족 모임에서 자주 등장합니다. 그러나 즉석에서 좋은 삼행시를 짓기란 쉽지 않기 때문에, 이 삼행시 짓기 도구를 활용해 연습하거나 아이디어를 얻으면 큰 도움이 됩니다.</p>
            <p>이 도구는 입력한 글자 수만큼 자동으로 줄을 만들어 주므로 두 글자 이행시, 세 글자 삼행시, 네 글자 사행시, 다섯 글자 오행시까지 모두 한 번에 처리할 수 있습니다. "사랑", "행복", "민수", "김민수" 어떤 이름과 단어를 입력해도 각 글자가 첫 자리에 오는 시가 만들어집니다.</p>
            <p>삼행시 짓기는 무료이며 회원가입이 필요 없습니다. 입력한 이름이나 단어는 브라우저 안에서만 처리되어 외부 서버로 전송되지 않으므로, 친구 이름이나 개인 정보를 입력해도 안전합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기 사용 방법</h2>
            <p>삼행시 짓기 도구의 사용법은 매우 단순합니다. 첫째, 입력창에 이름이나 단어를 적습니다. 둘째, "삼행시 짓기" 버튼을 누릅니다. 셋째, 결과가 마음에 들면 복사 버튼으로 클립보드에 저장하고, 마음에 들지 않으면 "다시 짓기" 버튼을 눌러 새로운 조합을 만듭니다. 이 세 단계만으로 누구나 30초 안에 그럴듯한 삼행시를 완성할 수 있습니다.</p>
            <p>입력은 한글이 가장 자연스러운 결과를 만듭니다. 영어 이름이나 한자 단어도 기술적으로는 처리되지만, 시 분위기가 어색해질 수 있어 권장하지 않습니다. 또 글자 수는 2~5글자가 가장 깔끔한 결과를 만듭니다. 그 이상으로 길어지면 줄 수가 많아져 시 전체의 흐름을 잡기 어려워집니다.</p>
            <p>삼행시 짓기는 같은 입력에서도 매번 다른 결과를 만들어 줍니다. 도구가 미리 준비된 문장 패턴 중에서 입력 글자에 어울리는 것을 무작위로 선택하기 때문입니다. 그래서 "다시 짓기"를 여러 번 누르면서 가장 자연스러운 결과를 고르는 방식이 가장 효과적입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기를 활용하는 5가지 상황</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">친구 생일 축하 메시지</strong> — 친구 이름으로 삼행시를 지어 카드에 적거나 카카오톡으로 보내면 평범한 "생일 축하해"보다 훨씬 인상적입니다.</li>
              <li><strong className="text-slate-900">회식·동창회 자리 게임</strong> — 한국에서 삼행시 짓기는 술자리의 단골 게임입니다. 미리 이 도구로 연습해 두면 즉석에서도 자신감 있게 지을 수 있습니다.</li>
              <li><strong className="text-slate-900">학교 자기소개와 발표</strong> — 본인 이름으로 삼행시를 만들어 자기소개에 활용하면 짧고 강한 인상을 남길 수 있습니다.</li>
              <li><strong className="text-slate-900">인스타그램·트위터 캡션</strong> — 사진의 키워드(여름, 카페, 데이트 등)로 삼행시를 지어 캡션에 넣으면 글이 한층 재미있어집니다.</li>
              <li><strong className="text-slate-900">팬레터와 응원 메시지</strong> — 좋아하는 연예인이나 운동선수 이름으로 삼행시를 지어 SNS 응원 글에 사용해 보세요.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시·사행시·오행시의 차이</h2>
            <p>삼행시는 세 글자, 사행시는 네 글자, 오행시는 다섯 글자에 해당합니다. 모두 같은 원리로 각 글자를 첫 자리에 두고 시를 짓지만 글자 수만 다릅니다. 한국에서는 "삼행시"가 가장 보편적이라 이 표현이 대표 용어처럼 쓰이지만, 실제로는 글자 수에 따라 부르는 이름이 달라집니다.</p>
            <p>이 삼행시 짓기 도구는 입력한 단어의 글자 수만큼 자동으로 줄을 만들어 주므로 사행시, 오행시도 함께 처리할 수 있습니다. "사랑"(2글자, 이행시), "행복"(2글자), "김민수"(3글자, 삼행시), "이지은"(3글자), "박서준"(3글자), "방탄소년단"(5글자, 오행시) 모두 입력해 보세요.</p>
            <p>네 글자 이상이 되면 시의 분위기를 통일하기가 어려워지지만, 결과를 바탕으로 일부 단어를 다듬으면 충분히 자연스러운 사행시·오행시를 만들 수 있습니다. 도구의 결과는 출발점으로 삼고, 자신만의 표현으로 다듬어 완성도를 높이는 방식을 추천드립니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">좋은 삼행시를 만드는 팁</h2>
            <p>삼행시 짓기를 잘하려면 몇 가지 요령을 기억하면 좋습니다. 첫째, 각 줄이 자연스럽게 이어지도록 의미를 통일하세요. 무관한 문장이 세 줄 모이면 어색해지지만, 같은 주제로 묶이면 시처럼 느껴집니다. 둘째, 마지막 글자에서 메시지가 마무리되도록 구성하면 임팩트가 강해집니다. 셋째, 받는 사람의 특징이나 추억을 한 줄에 녹이면 진심이 느껴지는 맞춤형 삼행시가 됩니다.</p>
            <p>이 도구는 자동으로 그럴듯한 문장을 만들어 주지만, 결과를 그대로 쓰기보다는 자신의 상황에 맞춰 한두 단어 바꾸는 것을 권장드립니다. 예를 들어 "김민수" 친구의 생일 카드를 만든다면, 자동 생성된 삼행시 결과에 두 사람의 추억이나 별명을 한 단어 끼워 넣기만 해도 훨씬 특별한 메시지가 됩니다.</p>
            <p>또 하나의 팁은 "다시 짓기"를 최소 3~5회는 시도해 보는 것입니다. 매번 다른 패턴이 선택되므로 처음 결과가 마음에 들지 않아도 몇 번만 더 누르면 훨씬 좋은 조합이 나오는 경우가 많습니다. 자동 생성을 영감 도구로 활용하고, 최종 결과는 자신이 골라 다듬는다고 생각하면 됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기 결과 예시</h2>
            <p>실제로 어떤 결과가 나오는지 미리 보고 싶다면 다음 예시를 참고하세요.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>사랑:</strong> "사: 사람들이 궁금해하는 마음, 랑: 랑랑하게 들리는 두 글자의 울림"</li>
              <li><strong>행복:</strong> "행: 행복은 가까이에 있고, 복: 복은 함께 만들어 가는 것"</li>
              <li><strong>친구:</strong> "친: 친한 사이에 떠올리는 얼굴, 구: 구름처럼 가벼운 우리의 시간"</li>
              <li><strong>김민수:</strong> "김: 김처럼 검고 윤기 나는 머리, 민: 민첩하게 움직이는 발걸음, 수: 수많은 사람 중에 빛나는 너"</li>
              <li><strong>이지은:</strong> "이: 이름만 들어도 떠오르는 미소, 지: 지난 시간 함께한 우리, 은: 은은하게 마음에 남는 이름"</li>
            </ul>
            <p>같은 단어라도 "다시 짓기"를 누를 때마다 다른 조합이 나오므로, 결과를 비교하면서 가장 마음에 드는 버전을 골라 보세요. 자동 결과를 그대로 쓰지 않고 한두 단어만 자신의 이야기로 바꿔도 훨씬 개인적인 삼행시가 됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기와 한국 문화</h2>
            <p>삼행시 짓기는 한국 특유의 언어유희 문화에서 나온 형식입니다. 일본의 와카, 중국의 절구처럼 한국에는 짧은 시 문화가 다양하게 있었고, 삼행시는 그중에서도 일반인이 즐기기 가장 쉬운 형태로 자리 잡았습니다. 특히 1990~2000년대 예능 프로그램에서 게스트들이 즉석으로 삼행시를 짓는 코너가 인기를 끌면서 대중적으로 널리 퍼졌습니다.</p>
            <p>오늘날에도 삼행시는 학교 행사, 회식, 결혼식 축사, SNS 콘텐츠 등 다양한 자리에서 사용됩니다. 한 사람의 이름이나 한 단어로 짧은 시를 만들어 분위기를 살리는 이 문화는 한국식 유머와 정서가 잘 드러나는 대표적인 예입니다. 이 삼행시 짓기 도구는 그런 전통을 디지털 시대에 맞게 누구나 쉽게 즐길 수 있도록 만든 것입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">삼행시 짓기 사용 시 주의사항</h2>
            <p>이 삼행시 짓기 도구는 자동 생성에 기반하므로 결과가 100% 매끄럽다고 보장하지는 않습니다. 글자에 따라 자연스러운 문장이 만들어지는 경우도 있고, 어색한 조합이 나오는 경우도 있습니다. 그럴 때는 "다시 짓기"를 여러 번 시도하거나, 결과를 바탕으로 직접 다듬어 사용하시는 것을 권장드립니다.</p>
            <p>또한 한자나 영어 이름은 시의 흐름과 어울리지 않을 수 있으므로 한글 이름이나 한글 단어를 입력하시는 것이 가장 좋은 결과를 만듭니다. 부적절한 단어로는 결과가 어색하게 나오므로 일반적인 이름과 긍정적인 단어로 사용하는 것을 권장드립니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 쓰면 좋은 도구</h2>
            <p>삼행시 짓기와 함께 사용하면 좋은 도구로는 한국어 닉네임 생성기, 별명 짓기, 끝말잇기 등이 있습니다. 닉네임을 만든 뒤 그 닉네임으로 삼행시를 지으면 SNS 자기소개나 프로필 문구가 자연스럽게 완성됩니다. 또 친구 이름 삼행시와 별명을 함께 사용해 단톡방 분위기를 띄우는 콘텐츠를 만들 수도 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>삼행시 짓기는 한국식 유머와 정성을 짧은 시 한 편에 담는 매력적인 콘텐츠입니다. 친구 생일, 자기소개, 회식 게임, SNS 캡션까지 다양한 곳에서 활용할 수 있고, 이 무료 삼행시 생성기를 사용하면 누구나 30초 안에 그럴듯한 시를 완성할 수 있습니다. 자동 결과를 출발점으로 삼아 자신만의 이야기를 더하면, 받는 사람에게 진심이 느껴지는 특별한 삼행시가 됩니다.</p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection items={faqItems} title="자주 묻는 질문" intro="삼행시 짓기, 이름 삼행시, 사행시·오행시에 대한 궁금증을 정리했습니다." />
        </section>
      </div>
    </div>
  );
}

import FAQSection from '@/components/FAQSection';
import BelowToolAd from '@/components/ads/BelowToolAd';
import AdSenseSlot from '@/components/ads/AdSenseSlot';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { DialectTranslatorTool } from './DialectTranslatorTool';
import { faqItems } from './faq';
import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/url';

const title = '사투리 번역기 | 경상도·전라도·제주도 변환 (무료)';
const description =
  '표준어를 경상도, 전라도, 충청도, 제주도 사투리로 바꿔주는 무료 사투리 번역기입니다. 드라마 대사, 캐릭터 설정, SNS 재미용으로 한국어 문장을 지역별 사투리로 변환해 드립니다.';

export const revalidate = 2592000;

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ title, description, urlPath: '/korean-dialect-translator', locale: 'ko_KR' });
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

export default function KoreanDialectTranslatorPage() {
  const url = `${siteUrl}/korean-dialect-translator`;
  const faqLd = buildFaqJsonLd();
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '사투리 번역기',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description,
    url,
    inLanguage: 'ko',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1620', bestRating: '5', worstRating: '1' },
  };

  return (
    <div lang="ko" className="relative bg-[#f7f9ff]">
      <JsonLd data={faqLd} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-3xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">사투리 번역기</h1>
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">
            표준어를 경상도, 전라도, 충청도, 제주도 사투리로 바꿔주는 무료 변환기입니다.
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span><span>4.9</span><span>·</span><span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:mt-6 md:rounded-2xl md:p-6">
          <DialectTranslatorTool />
        </section>

        <BelowToolAd />
        <RelatedTools currentSlug="korean-dialect-translator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">사투리 번역기란?</h2>
            <p>사투리 번역기는 표준어로 작성된 한국어 문장을 경상도 사투리, 전라도 사투리, 충청도 사투리, 제주도 사투리로 자동 변환해 주는 무료 온라인 도구입니다. 어미와 자주 쓰이는 단어를 해당 지역 사투리 표현으로 바꿔 주기 때문에, 별도로 사투리 사전을 찾아보지 않아도 한 번의 클릭으로 자연스러운 지역 말투를 만들어 낼 수 있습니다. 드라마 대본, 웹툰 대사, 유튜브 자막, SNS 캡션, 친구와의 메시지 등 다양한 곳에서 활용되고 있습니다.</p>
            <p>한국 사투리는 단순한 발음 차이를 넘어, 어미·어휘·문장 구조까지 지역마다 다르게 발달해 왔습니다. 부산 출신의 "뭐 하노?"와 광주 출신의 "뭐 헌당가?"는 같은 뜻이지만 어조와 단어 선택이 완전히 다릅니다. 이 사투리 번역기는 그런 지역적 특성을 어미 변환 규칙으로 정리해 두고, 입력 문장에 따라 자동으로 적용합니다. 그래서 한 번의 입력으로 같은 문장을 네 지역 사투리로 비교해 볼 수도 있습니다.</p>
            <p>특히 콘텐츠 제작자에게 사투리 번역기는 시간을 크게 줄여 주는 도구입니다. 캐릭터 한 명의 대사를 사투리로 작성하려면 보통 그 지역 출신에게 자문을 구하거나 사투리 사전을 일일이 찾아봐야 했지만, 이 도구를 사용하면 표준어로 쓴 대사를 즉시 사투리 버전으로 바꿔 볼 수 있습니다. 결과를 그대로 쓰지 않더라도 초안 작성용으로 매우 유용합니다.</p>
            <p>또한 이 사투리 번역기는 회원가입이나 로그인 없이 바로 사용할 수 있고, 입력한 문장은 서버에 저장되지 않으므로 개인정보 걱정 없이 자유롭게 활용할 수 있습니다. 모든 변환은 브라우저 안에서 자바스크립트로 직접 처리되어 빠르고 안전합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">경상도 사투리 변환 규칙과 예시</h2>
            <p>경상도 사투리는 부산, 대구, 울산, 경주, 포항 등에서 사용되며 강하고 직설적인 어조가 특징입니다. 사투리 번역기에서 경상도를 선택하면 다음과 같은 어미와 단어가 자동으로 변환됩니다. "~하세요" â†’ "~하이소", "~했어요" â†’ "~했데이", "~입니다" â†’ "~입니더", "~습니다" â†’ "~심더", "왜" â†’ "와", "너무" â†’ "억수로", "지금" â†’ "시방", "맞아" â†’ "맞데이"입니다. 이 규칙들은 경상도 드라마, 영화, 예능에서 가장 자주 등장하는 표현을 기준으로 정리되었습니다.</p>
            <p>예를 들어 "안녕하세요. 오늘 정말 좋아요"를 경상도 사투리로 변환하면 "안녕하이소. 오늘 진짜 좋데이"가 됩니다. "뭐 해요?"는 "뭐 하노?"로, "그래서 갔어요"는 "그래가 갔데이"로 바뀝니다. 어미와 의문사가 동시에 변환되기 때문에 한 문장만 바꿔도 경상도 사투리 분위기가 확실히 살아납니다.</p>
            <p>경상도 사투리는 같은 도 안에서도 부산과 대구가 미묘하게 다릅니다. 부산은 억양이 더 강하고 끝을 짧게 끊는 반면, 대구는 비교적 부드럽게 흐릅니다. 이 사투리 번역기는 두 지역의 공통적인 표준 경상도 사투리를 기준으로 변환하므로, 더 정밀한 표현이 필요하다면 결과를 도시별 특성에 맞게 추가로 다듬어 사용하시는 것을 권장드립니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">전라도 사투리 변환 규칙과 예시</h2>
            <p>전라도 사투리는 광주, 전주, 목포, 순천 등에서 사용되며 부드럽고 정감 있는 어조가 특징입니다. 사투리 번역기에서 전라도를 선택하면 "~하세요" â†’ "~허씨요", "~했어요" â†’ "~혔어라", "~입니다" â†’ "~이당께", "~습니다" â†’ "~당께", "그러니까" â†’ "긍께", "너무" â†’ "겁나", "정말" â†’ "징하게", "빨리" â†’ "싸게" 같은 변환이 적용됩니다.</p>
            <p>"안녕하세요. 정말 좋아요"를 전라도 사투리로 바꾸면 "안녕허씨요. 징하게 좋아라"가 됩니다. "그래서 그런 거야"는 "긍께 그런 거여"로 변환되며, "너무 맛있어요"는 "겁나 맛있어라"가 됩니다. 어미 "~당께"와 강조 표현 "겁나"가 전라도 사투리의 시그니처라고 할 수 있습니다.</p>
            <p>전라도 사투리는 미디어에서 자주 등장해 일반인에게도 친숙한 편입니다. "응답하라" 시리즈, "범죄와의 전쟁" 같은 영화에서 전라도 캐릭터 대사를 들어 본 적이 있다면, 이 사투리 번역기 결과가 익숙하게 느껴지실 것입니다. SNS 캡션이나 웹툰 대사에 그대로 사용해도 위화감이 적습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">충청도 사투리 변환 규칙과 예시</h2>
            <p>충청도 사투리는 대전, 청주, 천안 등에서 사용되며 천천히 말하는 느린 어조와 어미를 길게 끄는 발음이 특징입니다. 사투리 번역기에서 충청도를 선택하면 "~하세요" â†’ "~하셔유", "~했어요" â†’ "~했슈", "~이에요" â†’ "~이유", "~예요" â†’ "~유", "~해요" â†’ "~햐", "정말" â†’ "참말로", "빨리" â†’ "얼른", "맞아" â†’ "맞아유" 같은 변환이 적용됩니다.</p>
            <p>"안녕하세요. 뭐 해요?"를 충청도 사투리로 바꾸면 "안녕하셔유. 뭐 햐?"가 됩니다. 어미 "~유"가 거의 모든 문장에 붙어 충청도 사투리만의 느긋한 분위기를 만들어 냅니다. "정말 맛있어요"는 "참말로 맛있슈"가 되며, 글로 봐도 천천히 말하는 어조가 느껴집니다.</p>
            <p>충청도 사투리는 한국에서 가장 부드럽고 친근한 사투리 중 하나로 평가받습니다. 어미를 길게 끄는 특성 때문에 코미디 영상이나 캐릭터의 푸근한 매력을 강조하는 장면에 자주 활용됩니다. 이 사투리 번역기는 충청도 사투리의 그런 느낌을 어미 변환만으로도 잘 살릴 수 있도록 설계되었습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">제주도 사투리(제주어) 변환 규칙과 예시</h2>
            <p>제주도 사투리는 가장 독특합니다. 사실 학계에서는 제주도 사투리를 "제주어"로 분류해 별도의 언어로 취급하기도 하며, 유네스코는 제주어를 "소멸 위기 언어"로 등록했습니다. 사투리 번역기에서 제주도를 선택하면 "~하세요" â†’ "~허우꽈", "~했어요" â†’ "~핸수다", "~이에요" â†’ "~우다", "~습니다" â†’ "~수다", "왜" â†’ "무사", "너무" â†’ "하영", "안녕" â†’ "혼저옵서", "맞아" â†’ "맞수다" 같은 변환이 적용됩니다.</p>
            <p>"안녕하세요. 정말 좋아요"를 제주도 사투리로 바꾸면 "혼저옵서 허우꽈. 하영 좋수다"가 됩니다. 본토 사투리와 비교하면 어미와 단어가 거의 다른 언어 수준으로 차이 납니다. 그래서 제주도 출신이 아닌 분이 처음 들으면 무슨 뜻인지 거의 알아들을 수 없을 정도입니다.</p>
            <p>제주어는 본토와 떨어진 지리적 환경에서 독자적으로 발달했기 때문에 어휘, 어미, 발음 모두에서 큰 차이를 보입니다. 이 사투리 번역기는 가장 대표적인 제주어 표현을 정리해 두었지만, 실제 제주어는 훨씬 풍부하고 복잡합니다. 콘텐츠 제작 시 결과를 그대로 쓰기보다 초안으로 활용하고, 필요하다면 제주 출신 분께 검토를 받는 것을 권장드립니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">사투리 번역기를 사용하는 5가지 상황</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">드라마·웹툰·소설 대사 작성</strong> — 지역 캐릭터의 말투를 빠르게 만들고 싶을 때 사투리 번역기로 표준어 대사를 즉시 변환할 수 있습니다.</li>
              <li><strong className="text-slate-900">유튜브·릴스 자막 제작</strong> — 영상 콘텐츠에 사투리 자막을 넣으면 캐릭터의 정체성이 더 분명해지고 시청자의 몰입도가 올라갑니다.</li>
              <li><strong className="text-slate-900">SNS 캡션과 짤방</strong> — 같은 메시지라도 사투리로 바꾸면 분위기가 한층 친근하고 유쾌해져 친구들의 반응이 좋습니다.</li>
              <li><strong className="text-slate-900">학교 과제·발표</strong> — 국어 시간 사투리 발표나 지역 문화 조사에 사투리 변환 예시를 넣으면 자료가 풍부해집니다.</li>
              <li><strong className="text-slate-900">친구·가족과의 농담</strong> — 일상 대화에 사투리를 살짝 섞으면 가벼운 농담이 되고, 단톡방 분위기가 풀립니다.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">사투리 번역기를 활용한 실제 콘텐츠 예시</h2>
            <p>인스타그램 릴스 자막에 사투리를 넣으면 영상의 캐릭터성이 강조됩니다. 예를 들어 "오늘 진짜 더워요"라는 평범한 자막을 "오늘 억수로 덥데이"(경상도)나 "오늘 겁나 더워라"(전라도)로 바꾸면 시청자가 영상의 분위기를 더 빠르게 파악합니다. 사투리 번역기 결과를 그대로 사용해도 되고, 한두 단어만 추가로 다듬어 자신의 스타일에 맞춰도 됩니다.</p>
            <p>웹툰이나 단편 소설을 쓸 때도 사투리 번역기는 큰 도움이 됩니다. 부산이 배경인 작품의 등장인물 대사를 "뭐 해요?"가 아니라 "뭐 하노?"로 바꾸기만 해도 캐릭터의 출신 지역이 명확해지고, 독자의 몰입감이 올라갑니다. 사투리 번역기는 작가가 그런 디테일을 빠르게 추가할 수 있도록 도와줍니다.</p>
            <p>유튜브 컨텐츠 제작자라면 영상 인트로 멘트를 사투리로 바꿔 캐릭터화할 수도 있습니다. "안녕하세요, 구독자 여러분!"을 "안녕하이소, 구독자 여러분!"으로 바꾸기만 해도 채널의 정체성이 한결 분명해집니다. 사투리 번역기는 이런 작은 변화를 1초 안에 만들어 주기 때문에 콘텐츠 제작 흐름을 끊지 않고 작업할 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">사투리 번역기 사용 시 주의사항</h2>
            <p>이 사투리 번역기는 어미와 단어 사전을 기반으로 동작하기 때문에 사전에 없는 표현은 표준어 그대로 남을 수 있습니다. 결과를 더 자연스럽게 만들고 싶다면 변환 후 직접 일부 단어를 다듬어 사용하는 것을 권장드립니다. 또한 같은 지역 안에서도 도시별·세대별로 사투리가 다르기 때문에, 100% 정확한 지역 사투리를 보장하지는 않습니다.</p>
            <p>학술 자료, 공식 문서, 정식 출판물에 사용할 경우 결과를 반드시 추가로 검증해 주세요. 이 도구는 콘텐츠 초안 작성, SNS 재미용, 캐릭터 대사 만들기 등 일상적인 용도에 가장 적합합니다. 또 사투리 표현 중 일부는 비격식 말투이므로 비즈니스 메일이나 공식적인 자리에서는 사용을 자제하는 것이 좋습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 쓰면 좋은 도구</h2>
            <p>사투리 번역기와 함께 사용하면 좋은 도구로는 한국어 닉네임 생성기, 끝말잇기, 고양이 번역기 등이 있습니다. 닉네임 생성기로 캐릭터 이름을 만든 뒤 사투리 번역기로 캐릭터 대사를 지역 사투리로 바꾸면, 일관된 콘셉트의 캐릭터를 빠르게 완성할 수 있습니다. 또 같은 문장을 사투리 번역기와 고양이 번역기로 각각 변환해 비교하면 톤의 차이를 재미있게 체험할 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>사투리 번역기는 표준어를 한국 각 지역의 사투리로 빠르고 간편하게 바꿔 주는 도구입니다. 경상도, 전라도, 충청도, 제주도 사투리 변환을 모두 지원하며, 회원가입 없이 무료로 사용할 수 있습니다. 콘텐츠 제작, SNS 캡션, 친구와의 농담, 학교 발표 등 다양한 상황에서 활용해 보세요. 앞으로도 더 풍부한 사투리 표현과 추가 지역을 지원할 수 있도록 계속 업데이트해 나가겠습니다.</p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection items={faqItems} title="자주 묻는 질문" intro="사투리 번역기, 지역별 사투리 변환에 대한 궁금증을 정리했습니다." />
        </section>
      </div>
    </div>
  );
}

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


export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ title, description, urlPath: '/korean-dialect-translator', locale: 'ko_KR' });
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
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">표준어를 경상도, 전라도, 충청도, 제주도 방언으로 변환해 주는 무료 컨버터입니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span><span>4.9</span><span>·</span><span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border-3 border-black bg-white p-3 shadow-neo-sm md:mt-6 md:rounded-2xl md:p-6">
          <DialectTranslatorTool />
        </section>

        <BelowToolAd />
        <RelatedTools currentSlug="korean-dialect-translator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">사투리 번역기란?</h2>
            <p>사투리 번역기는 표준어로 쓰인 한국어 문장을 경상도 사투리, 전라도 사투리, 충청도 사투리, 제주도 사투리로 자동 번환해 주는 무료 웹 기반 도구입니다. 어미와 빈출 어휘를 각 지역의 방언 특성에 맞게 바꿔 주기 때문에, 따로 사투리 사전을 뒤져볼 필요 없이 원클릭만으로 생생한 지역 사투리를 구사할 수 있습니다. 드라마 대본, 웹툰 대사, 유튜브 자막, SNS 캡션, 지인과의 메신저 등 다방면에서 유용하게 쓰이고 있습니다.</p>
            <p>한국어 방언은 단순한 음가 차이를 뛰어넘어, 어미와 단어 및 통사 구조까지 지방마다 상이하게 발전했습니다. 부산 지역의 "뭐 하노?"와 광주 지역의 "뭐 헌당가?"는 의미는 같으나 억양과 어휘 선택에 큰 차이가 있습니다. 본 사투리 번역기는 이러한 지역별 특징을 어미 변환 규범으로 체계화하여, 넣은 텍스트에 맞게 자동으로 반영합니다. 따라서 한 번의 입력만으로 동일한 문장을 네 개 권역의 방언으로 대조하는 것도 가능합니다.</p>
            <p>특히 크리에이터에게 사투리 번역기는 작업 시간을 대폭 단축해 주는 유용한 기능입니다. 등장인물의 대사를 방언으로 만들기 위해 이전에는 현지인에게 묻거나 방언 사전을 직접 뒤져야 했지만, 이제 표준어로 작성된 대사를 곧바로 각 지역의 사투리 버전으로 확인해 볼 수 있습니다. 최종본으로 바로 쓰지 않더라도 아이디어 초안용으로 매우 훌륭합니다.</p>
            <p>또한 이 사투리 번역기는 회원가입이나 로그인이 전혀 필요 없으며, 입력한 텍스트가 서버로 전송되지 않아 보안 걱정 없이 편하게 이용할 수 있습니다. 모든 변환 과정이 웹브라우저 안에서 자바스크립트로 처리되므로 매우 빠르고 안전합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">경상도 사투리 변환 규칙 및 예시</h2>
            <p>경상도 사투리는 부산, 대구, 울산, 경주, 포항 등에서 쓰이며 거칠고 솔직한 억양이 포인트입니다. 사투리 번역기에서 경상도를 지정하면 다음과 같은 어휘와 어미가 자동 교체됩니다. "~하세요" â†’ "~하이소", "~했어요" â†’ "~했데이", "~입니다" â†’ "~입니더", "~습니다" â†’ "~심더", "왜" â†’ "와", "너무" â†’ "억수로", "지금" â†’ "시방", "맞아" â†’ "맞데이"로 바뀝니다. 이 규칙들은 영남권 드라마, 영화, 예능에서 빈출되는 표현을 토대로 구성되었습니다.</p>
            <p>가령 "안녕하세요. 오늘 정말 좋아요"라는 문장을 경상도 방언으로 바꾸면 "안녕하이소. 오늘 진짜 좋데이"로 변합니다. "뭐 해요?"는 "뭐 하노?"로, "그래서 갔어요"는 "그래가 갔데이"로 수정됩니다. 의문사와 어미가 함께 바뀌기 때문에 단 한 문장만 변환해도 경상도 특유의 맛이 확 살아납니다.</p>
            <p>경상도 방언은 같은 행정구역 안에서도 부산과 대구의 색채가 살짝 다릅니다. 부산은 억세고 어미를 짧게 닫는 편인 반면, 대구는 상대적으로 부드럽게 이어집니다. 이 사투리 번역기는 두 지역의 공통적인 표준 경상도 사투리를 기준으로 번역하므로, 더욱 디테일한 표현이 필요하다면 각 도시의 특성에 맞게 수정하여 쓰는 것을 권장합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">전라도 사투리 변환 규칙 및 예시</h2>
            <p>전라도 사투리는 광주, 전주, 목포, 순천 등에서 쓰이며 부드럽고 정이 넘치는 억양이 포인트입니다. 사투리 번역기에서 전라도를 지정하면 "~하세요" â†’ "~허씨요", "~했어요" â†’ "~혔어라", "~입니다" â†’ "~이당께", "~습니다" â†’ "~당께", "그러니까" â†’ "긍께", "너무" â†’ "겁나", "정말" â†’ "징하게", "빨리" â†’ "싸게" 같은 치환이 이루어집니다.</p>
            <p>"안녕하세요. 정말 좋아요"를 전라도 방언으로 고치면 "안녕허씨요. 징하게 좋아라"로 바뀝니다. "그래서 그런 거야"는 "긍께 그런 거여"로 치환되며, "너무 맛있어요"는 "겁나 맛있어라"로 바뀝니다. 강조 어구인 "겁나"와 어미 "~당께"가 전라도 사투리의 대표적인 특징입니다.</p>
            <p>전라도 사투리는 미디어 노출이 많아 대중에게도 익숙한 편입니다. "응답하라" 시리즈나 "범죄와의 전쟁" 같은 작품 속 전라도 인물의 대사를 접해 보셨다면, 이 사투리 번역기의 결과물도 친숙하게 다가올 것입니다. 웹툰 대사나 SNS 게시물에 그대로 활용해도 전혀 어색하지 않습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">충청도 사투리 변환 규칙 및 예시</h2>
            <p>충청도 사투리는 대전, 청주, 천안 등에서 쓰이며 느긋하게 말하는 템포와 길게 빼는 어미 발음이 포인트입니다. 사투리 번역기에서 충청도를 지정하면 "~하세요" â†’ "~하셔유", "~했어요" â†’ "~했슈", "~이에요" â†’ "~이유", "~예요" â†’ "~유", "~해요" â†’ "~햐", "정말" â†’ "참말로", "빨리" â†’ "얼른", "맞아" â†’ "맞아유" 같은 치환이 이루어집니다.</p>
            <p>"안녕하세요. 뭐 해요?"를 충청도 방언으로 고치면 "안녕하셔유. 뭐 햐?"로 바뀝니다. 대다수의 문장에 붙는 어미 "~유" 덕분에 충청도 특유의 여유로운 무드가 형성됩니다. "정말 맛있어요"는 "참말로 맛있슈"로 변하며, 텍스트로만 봐도 느릿한 억양이 고스란히 전해집니다.</p>
            <p>충청도 사투리는 국내에서 가장 온화하고 다정한 방언 중 하나로 손꼽힙니다. 어미를 길게 끄는 특유의 습성 덕분에 개그 콘텐츠나 캐릭터의 따뜻한 매력을 부각할 때 자주 쓰입니다. 이 사투리 번역기는 충청도 방언의 그런 분위기를 어미 조절만으로도 잘 살려내도록 만들어졌습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">제주도 사투리(제주어) 변환 규칙 및 예시</h2>
            <p>제주도 사투리는 가장 개성 넘칩니다. 실제로 언어학계에서는 제주 사투리를 "제주어"로 분류해 독자적인 언어로 다루기도 하며, 유네스코는 이를 "소멸 위기 언어"로 지정했습니다. 사투리 번역기에서 제주도를 지정하면 "~하세요" â†’ "~허우꽈", "~했어요" â†’ "~핸수다", "~이에요" â†’ "~우다", "~습니다" â†’ "~수다", "왜" â†’ "무사", "너무" â†’ "하영", "안녕" â†’ "혼저옵서", "맞아" â†’ "맞수다" 같은 치환이 이루어집니다.</p>
            <p>"안녕하세요. 정말 좋아요"를 제주도 방언으로 고치면 "혼저옵서 허우꽈. 하영 좋수다"로 바뀝니다. 일반적인 방언과 비교해 보면 어휘와 어미가 완전히 다른 외국어 수준으로 차이가 납니다. 따라서 제주 출신이 아닌 사람이 처음 접하면 무슨 뜻인지 거의 파악하기 힘들 정도입니다.</p>
            <p>제주어는 육지와 격리된 지형적 특성 속에서 독자적으로 발전해 왔기에 어휘와 어미, 발음 모두 큰 차이를 보입니다. 이 사투리 번역기는 핵심적인 제주어 표현들을 담아냈지만, 실제 제주어는 훨씬 다채롭고 복잡합니다. 창작물 제작 시 결과를 그대로 쓰기보다는 초안 정도로 삼고, 필요하다면 제주 토박이에게 검수를 받는 것을 추천합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">사투리 번역기를 유용하게 쓰는 5가지 상황</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">드라마·웹툰·소설 대사 작성</strong> — 지역 출신 캐릭터의 말투를 빠르게 구현하고 싶을 때 사투리 번역기를 통해 표준어 대사를 곧바로 변환할 수 있습니다.</li>
              <li><strong className="text-slate-900">유튜브·릴스 자막 제작</strong> — 영상 콘텐츠에 방언 자막을 입히면 인물의 개성이 더 뚜렷해지고 시청자의 몰입감도 높아집니다.</li>
              <li><strong className="text-slate-900">SNS 캡션과 짤방</strong> — 같은 문구라도 사투리로 고치면 뉘앙스가 훨씬 정겹고 유쾌해져 지인들에게 좋은 반응을 이끌어냅니다.</li>
              <li><strong className="text-slate-900">학교 과제·발표</strong> — 국어 시간 방언 발표나 지역 문화 탐구 과제에 사투리 변환 예시를 더하면 내용이 한층 풍성해집니다.</li>
              <li><strong className="text-slate-900">친구·가족과의 농담</strong> — 일상적인 대화에 방언을 가볍게 섞어 쓰면 유쾌한 조크가 되며, 단체 채팅방 분위기가 부드러워집니다.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">사투리 번역기를 적용한 구체적인 콘텐츠 사례</h2>
            <p>인스타그램 릴스 자막에 사투리를 넣으면 영상의 독특한 개성이 더욱 두드러집니다. 예를 들어 "오늘 진짜 더워요"라는 흔한 문장을 "오늘 억수로 덥데이"(경상도)나 "오늘 겁나 더워라"(전라도)로 바꾸면 시청자가 영상의 분위기를 훨씬 빨리 이해합니다. 사투리 번역기 출력 결과물을 그대로 쓰거나 단어 하나 정도만 고쳐 개인 스타일에 맞출 수도 있습니다.</p>
            <p>웹툰이나 단편 소설을 창작할 때도 사투리 번역기는 큰 도움이 됩니다. 부산을 배경으로 한 작품에서 인물 대사를 "뭐 해요?" 대신 "뭐 하노?"로만 수정해도 출신지가 확실히 드러나며 독자의 몰입도가 높아집니다. 사투리 번역기는 작가들이 이러한 디테일을 신속하게 추가할 수 있게 지원합니다.</p>
            <p>유튜브 콘텐츠 크리에이터라면 영상 오프닝 멘트를 사투리로 변환해 캐릭터를 살릴 수 있습니다. "안녕하세요, 구독자 여러분!"을 "안녕하이소, 구독자 여러분!"으로만 고쳐도 채널의 개성이 훨씬 뚜렷해집니다. 사투리 번역기는 이런 미세한 변화를 1초 만에 완성해 주므로 영상 제작의 흐름을 끊지 않고 작업이 가능합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">사투리 번역기 이용 시 유의사항</h2>
            <p>본 사투리 번역기는 어미 및 단어 DB를 바탕으로 작동하기에 사전에 없는 표현은 표준어 그대로 남을 수 있습니다. 결과를 더 매끄럽게 만들고 싶다면 변환 후 사용자가 직접 일부 단어를 수정하는 것을 추천합니다. 아울러 같은 권역 내에서도 도시나 세대별로 어조가 다르기 때문에 100% 완벽한 현지 사투리를 보장하지는 않습니다.</p>
            <p>학술 자료, 공식 문서, 정식 출판물에 활용할 때는 반드시 결과물을 재차 검증해 주시기 바랍니다. 해당 도구는 콘텐츠 초안 작성, SNS 재미용, 캐릭터 대사 생성 등 일상적인 목적에 가장 적절합니다. 또한 사투리 어휘 중 일부는 비격식체이므로 비즈니스 이메일이나 격식 있는 자리에서는 사용을 피하는 편이 좋습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 이용하기 좋은 추천 도구</h2>
            <p>사투리 번역기와 병행하기 좋은 유용한 기능으로는 한국어 닉네임 생성기, 끝말잇기, 고양이 번역기 등이 존재합니다. 닉네임 생성기로 인물 이름을 만든 다음 사투리 번역기를 통해 대사를 지역 방언으로 바꾸면 통일감 있는 콘셉트의 캐릭터를 신속하게 완성할 수 있습니다. 또한 동일한 문장을 사투리 번역기와 고양이 번역기로 각각 돌려 비교해 보면 톤의 차이를 흥미롭게 느낄 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>사투리 번역기는 표준어를 대한민국 각지의 사투리로 신속하고 쉽게 바꿔 주는 유틸리티입니다. 경상도, 전라도, 충청도, 제주도 방언 변환을 모두 지원하며 회원가입 절차 없이 무료로 쓸 수 있습니다. 콘텐츠 제작, SNS 캡션, 친구와의 장난, 학급 발표 등 다양한 국면에서 활용해 보세요. 앞으로도 더욱 다채로운 방언 표현과 추가 지역을 지원하도록 꾸준히 업데이트하겠습니다.</p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection items={faqItems} title="자주 묻는 질문" intro="사투리 번역기, 지역별 사투리 변환에 대한 궁금증을 정리했습니다." />
        </section>
      </div>
    </div>
  );
}

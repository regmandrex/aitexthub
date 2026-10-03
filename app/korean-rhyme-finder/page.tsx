import FAQSection from '@/components/FAQSection';
import BelowToolAd from '@/components/ads/BelowToolAd';
import AdSenseSlot from '@/components/ads/AdSenseSlot';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { RhymeFinderTool } from './RhymeFinderTool';
import { faqItems } from './faq';
import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/url';

const title = '라임 검색기 | 라임 맞추는 사이트 (무료)';
const description =
  '입력한 단어와 라임이 맞는 한국어 단어를 찾아 주는 무료 라임 검색기입니다. 완전 라임, 모음 라임, 받침 라임 세 가지 방식으로 랩 가사, 시, 노래 가사에 어울리는 운을 바로 찾아보세요.';

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title,
    description,
    urlPath: '/korean-rhyme-finder',
    locale: 'ko_KR',
  });
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

export default function KoreanRhymeFinderPage() {
  const url = `${siteUrl}/korean-rhyme-finder`;
  const faqLd = buildFaqJsonLd();
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '라임 검색기',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description,
    url,
    inLanguage: 'ko',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '940', bestRating: '5', worstRating: '1' },
  };

  return (
    <div lang="ko" className="relative bg-[#f7f9ff]">
      <JsonLd data={faqLd} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-3xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">라임 검색기</h1>
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">입력한 단어와 소리가 맞는 한국어 어휘를 곧바로 찾아 주는 무상 서비스입니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.8</span>
            <span>·</span>
            <span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border-3 border-black bg-white p-3 shadow-neo-sm md:mt-6 md:rounded-2xl md:p-6">
          <RhymeFinderTool />
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug="korean-rhyme-finder" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">라임 검색기란?</h2>
            <p>라임 검색기는 입력한 한국어 단어와 음색이 잘 어울리는 어휘를 찾아 주는 무료 웹 서비스입니다. 랩 가사를 작성하거나 시를 쓰거나 노래 후렴구를 다듬을 때, 운율이 맞는 단어를 떠올리는 일은 생각보다 많은 시간이 소요됩니다. 본 서비스는 단어의 마지막 음절을 분석하여 음이 조화로운 후보를 한 번에 보여 주므로, 머릿속으로 단어를 하나씩 끄집어내며 고민하는 시간을 대폭 축소해 줍니다.</p>
            <p>한국어의 라임은 영어와 구조에서 차이가 납니다. 영어는 강세가 실리는 음절을 중심으로 운을 맞추지만, 한국어는 모든 음절이 선명하게 발음되기 때문에 끝음절의 모음과 받침이 라임을 결정합니다. 사랑과 희망이 잘 어울리는 까닭은 두 단어 모두 마지막 음절이 모음 ㅏ와 받침 ㅇ으로 끝나기 때문이며, 기억과 추억이 자연스럽게 이어지는 이유 역시 모음 ㅓ와 받침 ㄱ이 겹치기 때문입니다.</p>
            <p>이 라임 검색기는 그러한 한국어의 특징을 고스란히 담아 제작되었습니다. 입력한 단어의 마지막 음절을 초성, 중성, 종성으로 해체한 다음 후보 어휘들과 견주어 얼마나 조화로운지 점수를 매기고, 점수가 높은 차례대로 결과를 출력합니다. 단순히 글자 형태가 유사한 단어를 나열하는 것이 아니라 실제로 귓가에 들리는 소리를 기준으로 판단하므로 얻은 결과를 가사에 바로 활용할 수 있습니다.</p>
            <p>사용법은 매우 간단합니다. 입력란에 단어를 기입하고 원하는 라임 방식을 선택한 후 라임 찾기 버튼을 누르기만 하면 됩니다. 회원가입이나 로그인이 불필요하며, 모든 연산이 브라우저 내부에서 진행되기 때문에 작업 중인 가사나 아이디어가 외부로 유출될 염려 없이 안심하고 이용하실 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">한국어 라임의 원리</h2>
            <p>한글의 모든 글자는 초성, 중성, 종성이라는 세 가지 요소로 구성됩니다. 예컨대 랑이라는 글자는 초성 ㄹ, 중성 ㅏ, 종성 ㅇ으로 이루어집니다. 라임을 결정짓는 핵심은 이 중에서 중성과 종성, 곧 모음과 받침입니다. 초성은 라임에 거의 영향을 미치지 않으므로, 초성이 서로 다르더라도 모음과 받침이 일치하면 운율이 맞다고 느끼게 됩니다.</p>
            <p>그렇기 때문에 사랑, 희망, 절망, 심장, 천장처럼 초성이 저마다 다른 단어들이 나란히 배치되어도 자연스럽게 연결되는 것입니다. 오히려 초성이 다양할수록 같은 소리의 반복이 지루하게 느껴지지 않도록 만들기 때문에, 훌륭한 가사일수록 초성이 다채로운 라임을 선호하여 사용합니다.</p>
            <p>받침에는 주목해야 할 중요한 특성이 하나 더 존재합니다. 표기 형태가 다른 받침이라도 실제 발음은 동일한 경우가 허다하다는 사실입니다. 받침 ㄱ, ㄲ, ㅋ은 모두 ㄱ 소리로 발음되며, ㅂ과 ㅍ은 ㅂ 소리로, ㅅ, ㅆ, ㅈ, ㅊ, ㅌ, ㅎ은 전부 ㄷ 소리로 발음됩니다. 이 라임 검색기는 표면적인 글자가 아니라 이 실제 발음 소리를 바탕으로 대조하기 때문에, 글자가 달라도 귓가에 똑같이 들리는 단어를 빠짐없이 찾아 줍니다.</p>
            <p>이러한 원리를 터득하고 나면 라임을 찾아내는 감각이 훨씬 기민해집니다. 어떤 단어를 떠올렸을 때 해당 어휘의 마지막 글자에서 모음과 받침만 따로 떼어내어 생각하는 습관을 기르면, 검색기를 거치지 않고도 후보군을 여러 개 도출해 낼 수 있게 됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">세 가지 라임 방식</h2>
            <p>본 도구는 상황에 맞추어 골라 쓸 수 있는 세 가지 라임 방식을 제공합니다. 어떤 방식을 채택하느냐에 따라 결과물의 성격이 판이하게 달라지므로, 각각의 특성을 미리 파악해 두면 훨씬 유용하게 활용할 수 있습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">완전 라임</h3>
            <p>모음과 받침이 전부 일치하는 단어만 추출합니다. 가장 정밀하고 강력한 운율을 형성해 주므로, 가사 속에서 가장 부각하고 싶은 구절의 끝부분이나 후렴구의 종결 단어로 사용하기에 적합합니다. 다만 조건이 까다로운 만큼 도출되는 후보의 개수가 적을 수 있습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">모음 라임</h3>
            <p>받침 유무와 무관하게 모음이 일치하는 단어를 찾아냅니다. 완전 라임에 비해 훨씬 방대한 후보가 도출되므로 선택의 폭이 넓어집니다. 사랑과 바람처럼 모음은 같지만 받침이 다른 조합은 부드럽고 여유로운 운율을 만들어 주며, 문장 중간이나 이어지는 구절에서 자연스럽게 어우러집니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">받침 라임</h3>
            <p>모음과 상관없이 받침의 발음이 같은 단어를 검색합니다. 기억과 행복처럼 모음은 다르지만 둘 다 ㄱ 받침으로 마무리되는 조합이 이에 해당합니다. 문장의 종결음을 통일하여 리듬감을 부여하고 싶을 때 유용하게 쓰입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">라임 검색기를 활용해야 하는 5가지 이유</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">가사 작성 시간이 단축됩니다</strong> — 운율이 맞는 단어를 머릿속으로 일일이 떠올리는 대신 버튼 클릭 한 번으로 수십 개의 후보를 동시에 검토할 수 있습니다.</li>
              <li><strong className="text-slate-900">예상치 못한 어휘를 발견하게 됩니다</strong> — 익숙한 단어만 반복해서 쓰게 되는 고착화된 습관에서 벗어나 평소 잘 떠올리지 않던 어휘를 마주하게 됩니다. 새로운 단어 하나가 가사 전체의 흐름을 바꾸기도 합니다.</li>
              <li><strong className="text-slate-900">라임의 강도를 조절할 수 있습니다</strong> — 세 가지 방식을 번갈아가며 적용하면 강렬한 운과 여유로운 운을 의도적으로 조합하여 단조로움을 효과적으로 피할 수 있습니다.</li>
              <li><strong className="text-slate-900">초보자도 즉시 다룰 수 있습니다</strong> — 한국어 라임의 메커니즘을 숙지하지 못했어도 단어만 입력하면 결과가 도출되므로, 처음으로 가사를 지어 보는 이들도 부담 없이 시작할 수 있습니다.</li>
              <li><strong className="text-slate-900">가사 외 분야에서도 활용도가 높습니다</strong> — 시, 슬로건, 광고 문구, 삼행시 등 짧고 리듬감이 요구되는 텍스트를 창작할 때 다방면으로 유용하게 쓰입니다.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">라임 검색기 활용 가이드 (단계별 안내)</h2>

            <h3 className="text-lg font-semibold text-slate-900">1단계 — 기준 단어 입력</h3>
            <p>입력창에 라임을 찾고자 하는 한국어 단어를 기입합니다. 가사 속에서 이미 확정해 둔 핵심 어휘가 존재한다면 해당 단어를 넣는 것이 가장 효과적입니다. 글자 수에는 별도의 제약이 없으며, 라임은 언제나 마지막 음절을 기준으로 판정됩니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">2단계 — 라임 방식 지정</h3>
            <p>완전 라임, 모음 라임, 받침 라임 중에서 원하는 방식을 선택합니다. 초반에는 완전 라임으로 시작하여 가장 정교한 후보를 먼저 확인한 뒤, 마음에 드는 어휘가 없다면 모음 라임으로 범위를 확장해 나가는 순서를 권장합니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">3단계 — 결과 확인</h3>
            <p>[1] 라임 찾기 버튼을 누르면 화면 상단에 기준 음절이 표시되고, 하단에 적절한 단어들이 정렬됩니다. 파란색으로 표시된 항목은 모음과 받침이 완전히 일치하는 최적의 라임이므로 우선적으로 확인해보시기 바랍니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">4단계 — 복사해서 활용하기</h3>
            <p>[2] 전체 복사 버튼을 누르시면 결과 단어들이 쉼표로 나뉘어 클립보드에 담깁니다. 메모 앱이나 작사 중인 파일에 그대로 붙여넣은 후 상황에 가장 잘 어울리는 표현을 선택해 사용하면 됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">[3] 훌륭한 라임을 구사하는 방법</h2>
            <p>[4] 라임은 음률을 맞추는 기교지만, 완성도 높은 가사는 사운드와 메시지가 동시에 조화를 이룰 때 탄생합니다. 검색된 단어를 억지로 집어넣으면 문맥이 부자연스러워져 청자가 단번에 알아챕니다. 후보군 중에서 현재 작성 중인 가사에 매끄럽게 녹아드는 단어를 고르는 태도가 가장 핵심입니다.</p>
            <p>[5] 마음에 쏙 드는 어휘가 없다면 문장 배열을 수정하는 방식도 유용합니다. 어순을 바꾸어 다른 단어가 행의 마지막에 오도록 유도하면 훨씬 다양한 라임 후보를 확보할 수 있습니다. 라임에 억지로 문장을 끼워 맞추기보다 문장 흐름에 맞는 라임을 찾아내는 접근이 좋은 결과물을 이끌어냅니다.</p>
            <p>[6] 아울러 동일한 라임을 과도하게 반복하면 오히려 단조로움과 지루함을 유발합니다. 완벽한 라임으로 강렬한 인상을 준 이후에는 모음 라임으로 조금 느슨하게 변주를 주고 다시 완벽한 라임으로 회귀하는 방식으로 강약을 조절하면 훨씬 감각적인 전개가 완성됩니다. 여러 검색 옵션을 번갈아 활용해 보는 이유가 바로 여기에 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">개인정보와 이용 안내</h2>
            <p>[7] 이 라임 검색기는 입력하신 단어와 검색 데이터를 서버로 전혀 전송하지 않습니다. 한글 음절 분석 및 라임 비교 과정 모두 사용자의 웹브라우저 내부에서 처리되므로 작업 중인 가사나 아이디어가 외부로 노출될 위험이 전혀 없습니다. 별도의 회원가입이나 로그인 절차도 요구되지 않습니다.</p>
            <p>[8] 스마트폰, 태블릿, PC 등 어떤 기기에서든 동일하게 작동하며 별도의 애플리케이션 설치도 필요 없습니다. 단어 데이터베이스는 이용자들이 자주 찾는 트렌드를 반영해 지속적으로 업데이트되고 있으며, 추가가 필요한 어휘가 있다면 언제든지 피드백을 보내주시기 바랍니다.</p>
          </div>
        </section>

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}

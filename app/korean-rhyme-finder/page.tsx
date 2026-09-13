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
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">
            입력한 단어와 라임이 맞는 한국어 단어를 즉시 찾아 주는 무료 도구입니다.
          </p>
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
            <p>
              라임 검색기는 입력한 한국어 단어와 소리가 어울리는 단어를 찾아 주는 무료 온라인 도구입니다. 랩 가사를 쓰거나 시를 짓거나 노래
              후렴구를 다듬을 때, 운이 맞는 단어를 떠올리는 일은 생각보다 오래 걸립니다. 이 도구는 단어의 마지막 음절을 분석해 소리가
              어울리는 후보를 한 번에 보여 주기 때문에, 머릿속으로 단어를 하나씩 떠올리며 고민하는 시간을 크게 줄여 줍니다.
            </p>
            <p>
              한국어의 라임은 영어와 구조가 다릅니다. 영어는 강세가 있는 음절을 중심으로 운을 맞추지만, 한국어는 모든 음절이 또렷하게 발음되기
              때문에 마지막 음절의 모음과 받침이 라임을 결정합니다. 사랑과 희망이 잘 어울리는 이유는 두 단어 모두 마지막 음절이 모음 ㅏ와
              받침 ㅇ으로 끝나기 때문이고, 기억과 추억이 자연스럽게 이어지는 이유도 모음 ㅓ와 받침 ㄱ이 겹치기 때문입니다.
            </p>
            <p>
              이 라임 검색기는 그런 한국어의 구조를 그대로 반영해 만들어졌습니다. 입력한 단어의 마지막 음절을 초성, 중성, 종성으로 분해한 뒤
              후보 단어들과 비교해 얼마나 잘 어울리는지 점수를 매기고, 점수가 높은 순서대로 결과를 보여 줍니다. 단순히 글자 모양이 비슷한
              단어를 나열하는 것이 아니라 실제로 귀에 들리는 소리를 기준으로 판단하기 때문에 결과를 그대로 가사에 쓸 수 있습니다.
            </p>
            <p>
              사용 방법은 간단합니다. 입력창에 단어를 적고 원하는 라임 방식을 고른 뒤 라임 찾기 버튼을 누르면 됩니다. 회원가입이나 로그인이
              필요 없고, 모든 계산이 브라우저 안에서 이루어지기 때문에 작업 중인 가사나 아이디어가 외부로 나갈 걱정 없이 안심하고
              사용하실 수 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">한국어 라임의 원리</h2>
            <p>
              한글의 모든 글자는 초성, 중성, 종성이라는 세 부분으로 이루어져 있습니다. 예를 들어 “랑”이라는 글자는 초성 ㄹ, 중성 ㅏ,
              종성 ㅇ으로 구성됩니다. 라임을 결정하는 것은 이 중에서 중성과 종성, 즉 모음과 받침입니다. 초성은 라임에 거의 영향을 주지 않기
              때문에, 초성이 다르더라도 모음과 받침이 같으면 운이 맞는다고 느끼게 됩니다.
            </p>
            <p>
              그래서 사랑, 희망, 절망, 심장, 천장처럼 초성이 제각각인 단어들이 나란히 놓여도 자연스럽게 이어지는 것입니다. 오히려 초성이
              다를수록 같은 소리의 반복이 지루하지 않게 들리기 때문에, 좋은 가사에서는 초성이 다양한 라임을 즐겨 사용합니다.
            </p>
            <p>
              받침에는 한 가지 더 중요한 특징이 있습니다. 표기가 다른 받침이라도 실제 발음은 같은 경우가 많다는 점입니다. 받침 ㄱ, ㄲ, ㅋ은
              모두 ㄱ 소리로 발음되고, ㅂ과 ㅍ은 ㅂ 소리로, ㅅ, ㅆ, ㅈ, ㅊ, ㅌ, ㅎ은 모두 ㄷ 소리로 발음됩니다. 이 라임 검색기는 표기가
              아니라 이 실제 소리를 기준으로 비교하기 때문에, 글자가 달라도 귀에 같게 들리는 단어를 놓치지 않고 찾아 줍니다.
            </p>
            <p>
              이런 원리를 이해하고 나면 라임을 찾는 감각이 훨씬 빨라집니다. 어떤 단어를 떠올렸을 때 그 단어의 마지막 글자에서 모음과 받침만
              분리해 생각하는 습관을 들이면, 검색기를 쓰지 않고도 후보를 여러 개 떠올릴 수 있게 됩니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">세 가지 라임 방식</h2>
            <p>
              이 도구는 상황에 따라 골라 쓸 수 있는 세 가지 라임 방식을 제공합니다. 어떤 방식을 쓰느냐에 따라 결과의 성격이 크게 달라지므로,
              각각의 특징을 알아 두면 훨씬 유용하게 활용할 수 있습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">완전 라임</h3>
            <p>
              모음과 받침이 모두 일치하는 단어만 찾습니다. 가장 정확하고 강한 운을 만들어 주기 때문에, 가사에서 가장 강조하고 싶은 구절의
              끝이나 후렴구의 마지막 단어에 쓰기 좋습니다. 다만 조건이 엄격한 만큼 후보 수가 적을 수 있습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">모음 라임</h3>
            <p>
              받침과 상관없이 모음이 같은 단어를 찾습니다. 완전 라임보다 훨씬 많은 후보가 나오기 때문에 선택의 폭이 넓어집니다. 사랑과
              바람처럼 모음은 같지만 받침이 다른 조합은 부드럽고 느슨한 운을 만들어 주며, 문장 중간이나 이어지는 구절에서 자연스럽게 쓰입니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">받침 라임</h3>
            <p>
              모음과 상관없이 받침 소리가 같은 단어를 찾습니다. 기억과 행복처럼 모음은 다르지만 둘 다 ㄱ 받침으로 끝나는 조합이 여기에
              해당합니다. 문장의 끝소리를 통일해 리듬을 만들고 싶을 때 유용합니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">라임 검색기를 사용하는 5가지 이유</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong className="text-slate-900">가사 쓰는 시간이 줄어듭니다</strong> — 운이 맞는 단어를 머릿속으로 하나씩 떠올리는 대신
                버튼 한 번으로 수십 개의 후보를 한꺼번에 확인할 수 있습니다.
              </li>
              <li>
                <strong className="text-slate-900">생각하지 못한 단어를 발견합니다</strong> — 익숙한 단어만 반복해서 쓰게 되는 습관을 벗어나
                평소 떠올리지 않던 단어를 만나게 됩니다. 새로운 단어 하나가 가사 전체의 방향을 바꾸기도 합니다.
              </li>
              <li>
                <strong className="text-slate-900">라임의 강도를 조절할 수 있습니다</strong> — 세 가지 방식을 번갈아 쓰면 강한 운과 느슨한 운을
                의도적으로 섞어 단조로움을 피할 수 있습니다.
              </li>
              <li>
                <strong className="text-slate-900">초보자도 바로 쓸 수 있습니다</strong> — 한국어 라임의 원리를 몰라도 단어만 입력하면 결과가
                나오기 때문에, 처음 가사를 써 보는 분도 부담 없이 시작할 수 있습니다.
              </li>
              <li>
                <strong className="text-slate-900">가사 외에도 활용도가 높습니다</strong> — 시, 슬로건, 광고 문구, 삼행시처럼 짧고 리듬감 있는
                글을 쓸 때 두루 쓸 수 있습니다.
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">라임 검색기 사용 방법 (단계별 가이드)</h2>

            <h3 className="text-lg font-semibold text-slate-900">1단계 — 기준 단어 입력</h3>
            <p>
              입력창에 라임을 찾고 싶은 한국어 단어를 적습니다. 가사에서 이미 정해 둔 핵심 단어가 있다면 그 단어를 넣는 것이 가장 좋습니다.
              글자 수에는 제한이 없으며, 라임은 언제나 마지막 음절을 기준으로 판단합니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">2단계 — 라임 방식 선택</h3>
            <p>
              완전 라임, 모음 라임, 받침 라임 중에서 원하는 방식을 고릅니다. 처음에는 완전 라임으로 시작해 가장 정확한 후보를 확인한 뒤,
              마음에 드는 단어가 없다면 모음 라임으로 넓혀 가는 순서를 추천드립니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">3단계 — 결과 확인</h3>
            <p>
              라임 찾기 버튼을 누르면 결과 위에 기준 음절이 표시되고, 아래에 어울리는 단어들이 나열됩니다. 파란색으로 강조된 단어는 모음과
              받침이 정확히 일치하는 완벽한 라임이므로 먼저 살펴보시면 좋습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">4단계 — 복사해서 활용하기</h3>
            <p>
              전체 복사 버튼을 누르면 결과 단어들이 쉼표로 구분되어 클립보드에 복사됩니다. 메모장이나 가사 작업 중인 문서에 붙여 넣고 그중에서
              문맥에 맞는 단어를 골라 사용하시면 됩니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">좋은 라임을 쓰는 요령</h2>
            <p>
              라임은 소리를 맞추는 기술이지만, 좋은 가사는 소리와 의미가 동시에 맞을 때 완성됩니다. 검색 결과에 나온 단어를 억지로 끼워 넣으면
              문장이 어색해지고 듣는 사람도 금방 알아차립니다. 후보 중에서 지금 쓰고 있는 문맥에 자연스럽게 어울리는 단어를 고르는 것이
              가장 중요합니다.
            </p>
            <p>
              마음에 드는 단어가 없다면 문장의 구조를 바꾸는 방법도 있습니다. 어순을 조정해 다른 단어가 문장 끝에 오도록 만들면, 훨씬 넓은
              라임 후보를 활용할 수 있습니다. 라임에 문장을 맞추는 것이 아니라 문장에 맞는 라임을 찾는 태도가 좋은 결과를 만듭니다.
            </p>
            <p>
              또한 같은 라임을 지나치게 반복하면 오히려 지루해집니다. 완전 라임으로 강한 인상을 준 뒤에는 모음 라임으로 살짝 느슨하게 풀어
              주고, 다시 완전 라임으로 돌아오는 식으로 강약을 조절하면 훨씬 세련된 흐름이 만들어집니다. 여러 방식을 오가며 검색해 보는 것이
              그래서 유용합니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">개인정보와 이용 안내</h2>
            <p>
              이 라임 검색기는 입력한 단어와 검색 결과를 서버로 전송하지 않습니다. 한글 음절 분석과 라임 비교가 모두 사용자의 브라우저 안에서
              이루어지기 때문에, 작업 중인 가사나 아이디어가 외부로 유출될 염려가 없습니다. 회원가입이나 로그인도 필요하지 않습니다.
            </p>
            <p>
              휴대폰, 태블릿, PC 어디에서나 동일하게 작동하며 앱 설치도 필요 없습니다. 단어 목록은 이용자들이 자주 찾는 주제를 반영해 꾸준히
              보완하고 있으며, 필요한 단어가 있다면 언제든 의견을 보내 주세요.
            </p>
          </div>
        </section>

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}

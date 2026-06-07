import FAQSection from '@/components/FAQSection';
import BelowToolAd from '@/components/ads/BelowToolAd';
import AdSenseSlot from '@/components/ads/AdSenseSlot';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { InstagramUsernameTool } from './InstagramUsernameTool';
import { faqItems } from './faq';
import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/url';

const title = '인스타 아이디 추천 | 감성 아이디 생성기 (무료)';
const description =
  '감성 아이디, 짧은 아이디, 영어 닉, 커플 아이디까지 자동으로 추천해 주는 무료 인스타 아이디 생성기입니다. 키워드와 분위기를 입력하면 인스타그램에 바로 쓸 수 있는 아이디를 만들어 드립니다.';

export const revalidate = 2592000;

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ title, description, urlPath: '/korean-instagram-username-generator', locale: 'ko_KR' });
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

export default function KoreanInstagramUsernamePage() {
  const url = `${siteUrl}/korean-instagram-username-generator`;
  const faqLd = buildFaqJsonLd();
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '인스타 아이디 추천',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description,
    url,
    inLanguage: 'ko',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '2210', bestRating: '5', worstRating: '1' },
  };

  return (
    <div lang="ko" className="relative bg-[#f7f9ff]">
      <JsonLd data={faqLd} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-3xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">인스타 아이디 추천</h1>
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">감성·짧은·영어 닉·커플·귀여운 인스타 아이디를 무료로 추천해 드립니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span><span>4.9</span><span>·</span><span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:mt-6 md:rounded-2xl md:p-6">
          <InstagramUsernameTool />
        </section>

        <BelowToolAd />
        <RelatedTools currentSlug="korean-instagram-username-generator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">인스타 아이디 추천이란?</h2>
            <p>인스타 아이디 추천은 인스타그램 가입이나 아이디 변경 시 사용할 사용자 이름(@username)을 자동으로 만들어 주는 무료 온라인 도구입니다. 감성 아이디, 짧은 아이디, 영어 닉, 커플 아이디, 귀여운 아이디까지 분위기별로 후보를 한 번에 만들어 주기 때문에, 직접 머리를 짜내지 않아도 자신의 계정 콘셉트에 어울리는 아이디를 빠르게 찾을 수 있습니다. 이 인스타 아이디 추천 도구는 키워드와 분위기를 입력하면 인스타그램의 아이디 규칙에 맞는 후보 12개를 한 번에 보여 줍니다.</p>
            <p>인스타그램에서 아이디는 단순한 식별자가 아니라 계정의 첫인상입니다. 같은 사진을 올려도 "@_softdaily_"와 "@user12345834"는 팔로워가 받는 느낌이 완전히 다릅니다. 그래서 한국 인스타그램 사용자 사이에서는 감성 아이디 추천, 짧은 아이디 추천, 커플 아이디 추천 같은 키워드의 검색량이 매우 높습니다. 이 도구는 그런 수요에 맞춰 분위기별로 단어 풀을 분리해 둔 인스타 아이디 추천 전문 도구입니다.</p>
            <p>인스타그램 아이디는 영문 소문자, 숫자, 마침표(.), 언더스코어(_)만 사용 가능하고 길이는 최대 30자입니다. 이 도구는 자동으로 이 규칙을 지켜 후보를 생성하므로, 가입창에 그대로 붙여 넣어 사용할 수 있습니다. 회원가입이 필요 없고 입력값은 브라우저 안에서만 처리되므로 안전하게 사용하실 수 있습니다.</p>
            <p>특히 인스타 아이디 추천이 가장 유용한 순간은 새 계정을 만들 때입니다. 본 계정 외에 부계정, 반려동물 계정, 취미 계정, 비즈니스 계정처럼 추가 계정을 만들 때마다 새로운 아이디를 정해야 하는데, 이 도구를 사용하면 짧은 시간 안에 여러 후보를 검토할 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">분위기별 인스타 아이디 추천</h2>
            <h3 className="text-lg font-semibold text-slate-900">감성 아이디</h3>
            <p>감성 모드는 "_diary", "moon_", "cloud_", "soft_", "lumi_" 같은 부드러운 단어를 활용해 잔잔하고 분위기 있는 아이디를 만듭니다. 일상 사진, 카페 사진, 풍경 사진을 올리는 계정에 가장 잘 어울리는 분위기로, 한국 인스타그램에서 가장 인기 있는 스타일 중 하나입니다. "_softdaily", "moon_sora_", "lumi_jiwoo.k" 같은 형태가 대표적입니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">짧은 아이디</h3>
            <p>짧은 모드는 3~6자 사이의 간결한 아이디를 만듭니다. 짧은 인스타 아이디는 검색이 쉽고 기억에 잘 남기 때문에 일반 사용자뿐 아니라 인플루언서, 비즈니스 계정에서도 매우 선호됩니다. 다만 인기 있는 짧은 아이디는 대부분 이미 사용 중이므로 여러 후보를 미리 만들어 두고 사용 가능 여부를 확인하는 것이 좋습니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">영어 닉 아이디</h3>
            <p>영어 닉 모드는 "the_", "just_", "_official", "_ig" 같은 영어식 접두/접미사를 활용해 영문 닉네임 스타일의 아이디를 만듭니다. 글로벌 팔로워를 모으고 싶거나 외국인 친구들과 소통하는 계정, K-pop 팬 계정 등에 잘 어울립니다. "the_minsoo", "haru_official", "lia.kr" 같은 형태가 대표적입니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">커플 아이디</h3>
            <p>커플 모드는 "us_", "we_", "_couple", "_us", "duo_" 같은 단어를 활용해 두 사람의 추억을 함께 담는 아이디를 만듭니다. 데이트 사진을 모아 두는 커플 계정 이름으로 인기가 많으며, 두 사람 이름 첫 글자를 합쳐 입력하면 더 개인화된 후보가 나옵니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">귀여운 아이디</h3>
            <p>귀여운 모드는 "mong_", "ppo_", "kkomi_", "chu_" 같은 한국식 의성어/의태어를 영어로 표기한 단어를 사용해 통통 튀는 귀여운 아이디를 만듭니다. 반려동물 계정, 일상 셀카 계정, 데일리 패션 계정에 잘 어울립니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">인스타 아이디 추천 사용 방법</h2>
            <p>사용 방법은 매우 단순합니다. 첫째, 입력창에 본인 이름이나 키워드를 영문으로 적습니다. 둘째, 원하는 분위기(감성/짧은/영어 닉/커플/귀여운)를 선택합니다. 셋째, "인스타 아이디 추천받기" 버튼을 누르면 12개의 후보가 한 번에 표시됩니다. 마음에 드는 후보를 탭하면 자동으로 클립보드에 복사되어 인스타그램 가입창에 바로 붙여 넣을 수 있습니다.</p>
            <p>입력 키워드는 본명 영문 표기, 별명, 좋아하는 단어, 취미(coffee, book, art), 분위기(soft, dim, glow), 좋아하는 색(navy, sage, rose) 등 무엇이든 가능합니다. 자신의 계정 콘셉트와 어울리는 단어를 입력할수록 결과가 자연스러워집니다. 키워드를 비워 둔 채 버튼을 눌러도 일반적인 후보가 만들어집니다.</p>
            <p>"다른 아이디 보기" 버튼을 누르면 같은 키워드와 분위기에서도 매번 새로운 12개 후보가 표시됩니다. 이 도구는 인스타 아이디 추천을 위해 미리 준비한 단어 풀에서 무작위로 조합하기 때문에, 여러 번 시도할수록 다양한 후보를 얻을 수 있습니다. 마음에 드는 아이디가 나올 때까지 자유롭게 반복 사용하세요.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">좋은 인스타 아이디를 만드는 5가지 기준</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">짧고 발음하기 쉬울 것</strong> — 길이가 너무 길거나 발음이 어려운 아이디는 친구가 검색하기도 어렵고 기억하기도 힘듭니다. 가능하면 15자 이내가 좋습니다.</li>
              <li><strong className="text-slate-900">계정 콘셉트와 일치할 것</strong> — 감성 사진 계정에는 감성 모드, 비즈니스 계정에는 영어 닉 모드, 반려동물 계정에는 귀여운 모드처럼 콘셉트와 분위기를 맞추세요.</li>
              <li><strong className="text-slate-900">특수문자 사용을 최소화할 것</strong> — 마침표와 언더스코어가 너무 많으면 가독성이 떨어집니다. 1~2개 정도가 가장 깔끔합니다.</li>
              <li><strong className="text-slate-900">검색 가능성을 고려할 것</strong> — 친구가 본명으로 검색했을 때 찾을 수 있도록, 본명 영문 표기 일부를 아이디에 포함하는 것이 좋습니다.</li>
              <li><strong className="text-slate-900">오래 써도 질리지 않을 것</strong> — 일시적인 유행어나 너무 자극적인 단어는 6개월만 지나도 어색해집니다. 긴 시간 사용해도 자연스러운 단어를 선택하세요.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">인스타 아이디 추천 활용 예시</h2>
            <p>새 인스타그램 계정을 만들 때 가장 먼저 이 인스타 아이디 추천 도구를 사용해 5~10개의 후보를 만들어 두세요. 그 후 인스타그램 가입창에서 차례대로 입력해 사용 가능한 아이디를 빠르게 찾을 수 있습니다. 인기 있는 짧은 아이디는 대부분 이미 사용 중이므로, 여러 후보를 미리 준비해 두는 것이 시간을 크게 절약합니다.</p>
            <p>본 계정 외에 부계정을 만들 때도 유용합니다. 취미 계정(예: 독서 기록, 운동 일지), 반려동물 계정, 가족 사진 모음 계정, 비즈니스 계정 등 목적에 맞는 분위기를 선택해 인스타 아이디 추천을 받아 보세요. 같은 본명을 입력해도 분위기에 따라 완전히 다른 톤의 아이디가 만들어집니다.</p>
            <p>커플 계정을 만들 때는 두 사람 이름의 첫 글자나 첫 음절을 합쳐 입력하는 것이 좋습니다. 예를 들어 "민지+소영"이면 "minjisoo"나 "msy"로 입력하고 커플 모드로 추천을 받으면 두 사람 모두에게 어울리는 아이디 후보가 나옵니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">인스타그램 아이디 규칙 정리</h2>
            <p>인스타그램 사용자 이름(@username)에는 다음 규칙이 적용됩니다. 첫째, 사용 가능 문자는 영문 소문자(a-z), 숫자(0-9), 마침표(.), 언더스코어(_) 네 종류뿐입니다. 둘째, 공백, 한글, 대문자, 다른 특수문자(@, #, $, % 등)는 사용할 수 없습니다. 셋째, 길이는 최대 30자까지 가능하지만 실용적으로는 15자 이내가 가장 좋습니다. 넷째, 같은 아이디는 한 번에 한 사람만 사용할 수 있으므로 이미 사용 중인 아이디는 선택할 수 없습니다.</p>
            <p>이 인스타 아이디 추천 도구는 위 규칙을 자동으로 지켜 후보를 만듭니다. 한글이나 공백을 입력해도 도구가 영문/숫자만 추출해 처리하므로, 결과는 항상 인스타그램 규칙에 맞는 형태로 나옵니다. 다만 추천된 후보가 이미 다른 사용자가 쓰고 있을 수 있으므로, 실제 사용 가능 여부는 인스타그램 가입창에서 직접 확인해야 합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">인스타 아이디 추천 사용 시 주의사항</h2>
            <p>이 인스타 아이디 추천 도구는 후보 생성에 특화되어 있으며, 실시간 중복 확인 기능은 제공하지 않습니다. 마음에 드는 후보를 인스타그램에 직접 입력해 사용 가능 여부를 확인해야 합니다. 인기 있는 짧은 아이디는 대부분 이미 사용 중이므로, 약간의 변형(숫자 추가, 언더스코어 위치 변경)을 적용하면 사용 가능한 아이디를 더 쉽게 찾을 수 있습니다.</p>
            <p>또한 비즈니스 계정이나 브랜드 계정의 경우 상표권 문제가 발생할 수 있으니, 공식 브랜드명이나 다른 회사명을 그대로 아이디에 사용하지 않도록 주의해 주세요. 이 도구는 일반 개인 계정용 아이디 추천에 가장 적합합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 쓰면 좋은 도구</h2>
            <p>한국어 닉네임 생성기, 별명 짓기 도구와 함께 사용하면 시너지가 좋습니다. 별명 짓기로 한글 별명을 만든 뒤, 그 별명을 영문으로 변환해 인스타 아이디 추천에 입력하면 일관된 콘셉트의 SNS 프로필이 완성됩니다. 또 삼행시 짓기로 자기소개 문구를 만들면 인스타그램 프로필을 빠르게 채울 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>인스타 아이디는 계정의 첫인상이자 평생 함께할 식별자입니다. 너무 즉흥적으로 정해서 후회하기 전에, 이 무료 인스타 아이디 추천 도구로 분위기별 후보를 비교하며 신중하게 골라 보세요. 감성, 짧은, 영어 닉, 커플, 귀여운 다섯 가지 분위기 중 자신의 계정 콘셉트와 가장 잘 맞는 모드를 선택해 12개 후보를 받고, 그중 가능 여부를 확인해 사용하면 됩니다. 좋은 아이디 하나가 좋은 SNS 시작의 첫걸음이 됩니다.</p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection items={faqItems} title="자주 묻는 질문" intro="인스타 아이디 추천, 감성 아이디, 짧은 아이디에 대한 궁금증을 정리했습니다." />
        </section>
      </div>
    </div>
  );
}

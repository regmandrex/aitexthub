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
  '감성적인 아이디, 간결한 아이디, 영어 닉, 커플 아이디를 자동으로 제안하는 무료 인스타 아이디 생성기입니다. 검색어와 분위기를 기입하면 인스타그램에 곧바로 적용할 수 있는 아이디를 제작해 줍니다.';


export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ title, description, urlPath: '/korean-instagram-username-generator', locale: 'ko_KR' });
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
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">감성·짧은·영어 닉·커플·귀여운 인스타 아이디를 무상으로 제안합니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span><span>4.9</span><span>·</span><span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border-3 border-black bg-white p-3 shadow-neo-sm md:mt-6 md:rounded-2xl md:p-6">
          <InstagramUsernameTool />
        </section>

        <BelowToolAd />
        <RelatedTools currentSlug="korean-instagram-username-generator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">인스타 아이디 추천이란?</h2>
            <p>인스타 아이디 추천은 인스타그램 가입 또는 아이디 변경에 쓰일 사용자 이름(@username)을 자동으로 생성해 주는 무상 온라인 솔루션입니다. 감성 아이디, 짧은 아이디, 영어 닉, 커플 아이디, 귀여운 아이디까지 스타일별 후보를 한 번에 제공하므로 직접 고민하지 않고도 계정 콘셉트에 딱 맞는 아이디를 신속하게 찾을 수 있습니다. 본 인스타 아이디 추천 유틸리티는 키워드와 분위기를 입력받아 인스타그램 규정에 부합하는 12개의 후보를 한눈에 보여줍니다.</p>
            <p>인스타그램 계정의 아이디는 단순한 표기법이 아니라 프로필의 첫인상을 결정합니다. 동일한 사진을 게시하더라도 '@_softdaily_'와 '@user12345834'가 팔로워에게 주는 느낌은 확연히 다릅니다. 이 때문에 국내 인스타그램 사용자들 사이에서는 감성 아이디 추천, 짧은 아이디 추천, 커플 아이디 추천 같은 키워드 검색 빈도가 상당히 높습니다. 해당 솔루션은 이러한 수요에 발맞춰 분위기별 단어 풀을 구성해 둔 인스타 아이디 추천 전문 유틸리티입니다.</p>
            <p>인스타그램 아이디는 영문 소문자, 숫자, 마침표(.), 언더스코어(_)만 허용되며 최대 길이는 30자입니다. 해당 유틸리티는 자동으로 이 규칙을 준수하여 후보를 만들어내므로 가입창에 바로 복사해 붙여넣을 수 있습니다. 회원가입 절차가 없고 입력된 정보는 브라우저 내부에서만 처리되므로 안심하고 이용하실 수 있습니다.</p>
            <p>특히 인스타 아이디 추천이 가장 유용하게 쓰이는 순간은 새로운 계정을 개설할 때입니다. 메인 계정 외에도 부계정, 반려동물 계정, 취미 계정, 비즈니스 계정 등 새로운 계정을 만들 때마다 매번 독창적인 아이디를 정해야 하는데, 이 유틸리티를 활용하면 짧은 시간 안에 다양한 후보를 비교할 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">분위기별 인스타 아이디 추천</h2>
            <h3 className="text-lg font-semibold text-slate-900">감성 아이디</h3>
            <p>감성 모드는 '_diary', 'moon_', 'cloud_', 'soft_', 'lumi_' 같은 부드러운 어휘를 바탕으로 차분하고 은은한 아이디를 구성합니다. 일상, 카페, 풍경 사진을 업로드하는 계정에 가장 잘 어울리며 한국 인스타그램에서 손꼽히는 인기 스타일 중 하나입니다. '_softdaily', 'moon_sora_', 'lumi_jiwoo.k'와 같은 형태가 대표적입니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">짧은 아이디</h3>
            <p>짧은 모드는 3~6글자 범위의 간결한 아이디를 만들어냅니다. 짧은 인스타 아이디는 검색하기 편하고 기억에 오래 남기 때문에 일반 유저는 물론 인플루언서나 비즈니스 계정에서도 매우 선호합니다. 다만 매력적인 짧은 아이디는 대개 선점되어 있으므로 여러 후보를 미리 생성해 두고 사용 가능 여부를 점검하는 편이 좋습니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">영어 닉 아이디</h3>
            <p>영어 닉 모드는 'the_', 'just_', '_official', '_ig' 같은 영문 접두사와 접미사를 조합해 영문 닉네임 형태의 아이디를 생성합니다. 전 세계 팔로워를 유치하고 싶거나 외국인 친구들과 소통하는 계정, K-pop 팬 페이지 등에 적합합니다. 'the_minsoo', 'haru_official', 'lia.kr' 같은 형식이 주를 이룹니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">커플 아이디</h3>
            <p>커플 모드는 'us_', 'we_', '_couple', '_us', 'duo_' 같은 어휘를 이용하여 두 사람의 추억을 녹여낸 아이디를 만듭니다. 데이트 기록을 모아두는 커플 계정 명칭으로 인기가 높으며, 두 사람의 이름 앞글자를 결합해 입력하면 더욱 개성 있는 후보를 얻을 수 있습니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">귀여운 아이디</h3>
            <p>귀여운 모드는 'mong_', 'ppo_', 'kkomi_', 'chu_'와 같은 한국식 의성어 및 의태어를 영문으로 표기한 표현을 활용해 발랄하고 앙증맞은 아이디를 완성합니다. 반려동물 계정, 일상 셀카 페이지, 데일리 패션 계정에 안성맞춤입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">인스타 아이디 추천 이용 방법</h2>
            <p>활용 방법은 매우 직관적입니다. 첫째, 입력란에 본인 이름이나 키워드를 영문으로 작성합니다. 둘째, 선호하는 분위기(감성/짧은/영어 닉/커플/귀여운)를 지정합니다. 셋째, '인스타 아이디 추천받기' 버튼을 클릭하면 12개의 후보가 일괄적으로 나타납니다. 마음에 드는 후보를 터치하면 클립보드에 곧바로 복사되어 인스타그램 가입 화면에 즉시 붙여넣을 수 있습니다.</p>
            <p>입력 키워드는 실명 영문 표기, 별칭, 좋아하는 단어, 취미(coffee, book, art), 감성(soft, dim, glow), 선호하는 색상(navy, sage, rose) 등 무엇이든 지정할 수 있습니다. 본인의 계정 콘셉트와 어울리는 단어를 적을수록 결과물이 자연스러워집니다. 키워드를 빈칸으로 둔 채 버튼을 눌러도 보편적인 후보들이 생성됩니다.</p>
            <p>'다른 아이디 보기' 버튼을 클릭하면 동일한 키워드와 분위기 조건에서도 매번 새로운 12가지 후보가 출력됩니다. 해당 유틸리티는 인스타 아이디 추천 용도로 사전 구축된 단어 데이터베이스에서 무작위로 조합하기 때문에 여러 차례 시도할수록 다채로운 후보를 만나볼 수 있습니다. 마음에 드는 아이디가 나타날 때까지 자유롭게 반복해서 사용해 보세요.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">매력적인 인스타 아이디를 완성하는 5가지 원칙</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">짧고 발음하기 쉬울 것</strong> — 전체 길이가 과도하게 길거나 발음이 까다로운 아이디는 지인이 검색하기도 어렵고 기억하기도 힘듭니다. 가급적 15자 이내로 구성하는 것이 좋습니다.</li>
              <li><strong className="text-slate-900">계정 콘셉트와 일치할 것</strong> — 감성 사진 계정에는 감성 모드, 비즈니스 계정에는 영어 닉 모드, 반려동물 계정에는 귀여운 모드처럼 전체적인 방향성과 무드를 맞추어야 합니다.</li>
              <li><strong className="text-slate-900">특수문자 사용을 최소화할 것</strong> — 마침표와 언더스코어가 지나치게 많으면 가독성이 떨어집니다. 1~2개 정도만 포함하는 것이 가장 깔끔합니다.</li>
              <li><strong className="text-slate-900">검색 가능성을 고려할 것</strong> — 지인이 실명으로 검색했을 때 쉽게 찾아낼 수 있도록 본명의 영문 표기 일부를 아이디에 반영하는 것을 권장합니다.</li>
              <li><strong className="text-slate-900">오래 써도 질리지 않을 것</strong> — 일시적인 유행어이거나 자극적인 단어는 반년만 지나도 어색하게 느껴집니다. 장기간 사용해도 무난한 어휘를 선택하세요.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">인스타 아이디 추천 사용 사례</h2>
            <p>새로운 인스타그램 계정을 개설할 때 가장 먼저 본 인스타 아이디 추천 유틸리티를 활용해 5~10개의 후보를 마련해 두세요. 그 후 인스타그램 가입 창에서 순서대로 대조해 가며 사용 가능한 아이디를 신속하게 찾아낼 수 있습니다. 인기 있는 짧은 아이디는 대부분 이미 선점되어 있으므로 여러 후보를 미리 준비하는 편이 시간을 크게 단축해 줍니다.</p>
            <p>메인 계정 이외의 서브 계정을 개설할 때도 무척 유용합니다. 취미 계정(예: 독서 기록, 운동 일지), 반려동물 계정, 가족 사진 저장소, 비즈니스 계정 등 목적에 알맞은 분위기를 지정하여 인스타 아이디 추천을 실행해 보세요. 동일한 실명을 입력하더라도 무드에 따라 zupełne(완전히) 다른 결의 아이디가 만들어집니다.</p>
            <p>커플 계정을 만들 때는 두 사람 이름의 초성이나 첫 음절을 함께 적어 넣는 것이 유리합니다. 예를 들어 '민지+소영'이라면 'minjisoo' 또는 'msy'로 입력하고 커플 모드로 추천을 요청하면 두 사람 모두에게 어울리는 아이디 후보들이 도출됩니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">인스타그램 아이디 생성 규정 요약</h2>
            <p>인스타그램 계정 이름(@username) 생성 시 엄수해야 할 지침은 다음과 같습니다. 첫 번째로, 허용되는 글자는 영문 소문자(a-z)를 비롯해 숫자(0-9) 및 마침표(.), 언더스코어(_)까지 총 네 가지뿐입니다. 두 번째로, 띄어쓰기나 한글과 대문자 외에도 @, #, $, % 같은 특수기호는 쓰실 수 없습니다. 세 번째로, 전체 길이는 최대 30자까지 지원하나 실질적으로는 15자 미만이 가장 적당합니다. 네 번째로, 동일한 아이디는 중복으로 쓸 수 없고 오직 한 명에게만 주어지므로 선점된 것은 고를 수 없습니다.</p>
            <p>해당 인스타 아이디 추천 기능은 위 요건을 자동 반영하여 아이디 대안을 만들어 줍니다. 한글이나 공백을 적어 넣더라도 프로그램이 숫자와 영문자만 골라내므로, 결과물은 항상 인스타그램 방침에 부합하게 나타납니다. 단, 제안된 아이디를 다른 사람이 이미 점유하고 있을 확률이 있으므로 실제 등록 가능 여부는 인스타그램 가입 화면에서 직접 체크해 보셔야 합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">인스타 아이디 추천 이용 시 유의사항</h2>
            <p>이 인스타 아이디 추천 유틸리티는 아이디 추천에 특화되어 있으며, 실시간 중복 여부 조회 기능까지는 지원하지 않습니다. 마음에 드는 안을 인스타그램에 직접 입력하여 가입 가능한지 확인해 보셔야 합니다. 인기 있는 짧은 명칭은 대다수 선점되어 있으므로, 약간의 변화(숫자 삽입이나 언더스코어 위치 변경)를 주시면 쓸 수 있는 ID를 훨씬 수월하게 찾아내실 수 있습니다.</p>
            <p>아울러 기업용이나 브랜드용 계정의 경우 상표권 관련 분쟁이 생길 여지가 있으므로, 공식적인 브랜드 명칭이나 타사의 상호를 그대로 계정 이름에 쓰지 않도록 유의해 주시기 바랍니다. 본 도구는 일반 개인용 계정의 닉네임을 구상할 때 가장 알맞습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 이용하기 좋은 추천 도구</h2>
            <p>한국어 닉네임 생성기 및 별명 짓기 기능과 병행하면 더욱 큰 효과를 거둘 수 있습니다. 별명 만들기 기능으로 한글 별칭을 완성한 뒤, 해당 별칭을 영문으로 바꿔 인스타 아이디 추천에 입력하면 통일감 있는 SNS 프로필이 완성됩니다. 또한 삼행시 짓기를 통해 소개 글귀를 작성하면 인스타그램 프로필 페이지를 빠르게 채워 넣을 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>인스타 계정명은 페이지의 첫인상이며 오랫동안 함께할 고유 식별 기호입니다. 즉흥적으로 대충 정해 후회하기 전에, 이 무료 인스타 아이디 추천 프로그램을 통해 무드별 대안을 꼼꼼히 비교하며 신중하게 결정해 보세요. 감성, 짧은, 영어 닉, 커플, 귀여운 등 다섯 가지 스타일 중에서 본인 계정의 분위기에 가장 부합하는 모드를 골라 12개의 아이디 후보를 얻고, 그중에서 가용 여부를 파악해 적용하시면 됩니다. 멋진 ID 하나가 훌륭한 SNS 활동의 첫걸음이 됩니다.</p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection items={faqItems} title="자주 묻는 질문" intro="인스타 아이디 추천, 감성 아이디, 짧은 아이디에 대한 궁금증을 정리했습니다." />
        </section>
      </div>
    </div>
  );
}

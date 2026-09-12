import FAQSection from '@/components/FAQSection';
import BelowToolAd from '@/components/ads/BelowToolAd';
import AdSenseSlot from '@/components/ads/AdSenseSlot';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { CatTranslatorTool } from './CatTranslatorTool';
import { faqItems } from './faq';
import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/url';

const title = '고양이 번역기 | 냥냥체 변환기 (무료)';
const description =
  '한국어 문장을 고양이 말투(냥냥체)로 바꿔주는 무료 고양이 번역기입니다. 사람 말을 고양이 언어처럼 변환하고, 냥냥이 말투로 메시지·인스타 캡션·카톡을 꾸며 보세요.';


export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title,
    description,
    urlPath: '/korean-cat-translator',
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

export default function KoreanCatTranslatorPage() {
  const url = `${siteUrl}/korean-cat-translator`;
  const faqLd = buildFaqJsonLd();
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '고양이 번역기',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description,
    url,
    inLanguage: 'ko',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' },
  };

  return (
    <div lang="ko" className="relative bg-[#f7f9ff]">
      <JsonLd data={faqLd} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-3xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">고양이 번역기</h1>
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">
            한국어 문장을 냥냥체로 바꿔주는 무료 고양이 말투 변환기입니다.
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.9</span>
            <span>·</span>
            <span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:mt-6 md:rounded-2xl md:p-6">
          <CatTranslatorTool />
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug="korean-cat-translator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">고양이 번역기란?</h2>
            <p>
              고양이 번역기는 사람이 쓴 한국어 문장을 고양이 말투, 즉 냥냥체로 바꿔주는 온라인 도구입니다. 문장 끝의 어미를 “냥”, “다냥”, “냐옹”과 같은
              고양이 어미로 변환해 평범한 글을 귀엽고 친근한 냥냥이 말투로 꾸며 줍니다. 진짜 고양이 울음소리를 사람 언어로 해석해 주는 것은 아니지만,
              SNS, 메신저, 인스타 캡션, 블로그 글에 가벼운 분위기를 더하고 싶을 때 가장 많이 쓰이는 한국식 텍스트 변환기입니다.
            </p>
            <p>
              최근 몇 년 사이 한국 인터넷 문화에서는 동물 말투를 흉내내는 텍스트가 큰 인기를 얻고 있습니다. 강아지 말투를 따라 하는 멍멍체,
              고양이 말투를 따라 하는 냥냥체, 햄스터 말투, 토끼 말투까지 다양한 변형이 존재하지만 그중에서도 냥냥체는 가장 부드럽고 도도한
              느낌을 동시에 가지고 있어 친구 사이의 메시지부터 반려묘 SNS 운영까지 폭넓게 사용됩니다. 이 고양이 번역기는 그러한 냥냥체를
              버튼 한 번으로 손쉽게 만들 수 있도록 설계된 무료 도구입니다.
            </p>
            <p>
              사용 방법은 매우 간단합니다. 입력창에 한국어 문장을 입력하고, 냥냥체 강도를 약하게·보통·강하게 중에서 선택한 뒤 “냥냥체로 번역하기”
              버튼을 누르면 즉시 결과가 표시됩니다. 결과가 마음에 들면 복사 버튼을 눌러 카카오톡, 인스타그램 DM, 트위터, 디스코드 등 원하는
              곳에 그대로 붙여 넣을 수 있습니다. 회원가입이나 로그인이 필요 없고, 모든 변환이 브라우저 안에서만 이뤄지기 때문에 개인정보 걱정 없이
              편하게 사용하실 수 있습니다.
            </p>
            <p>
              많은 분들이 “고양이 번역기”를 검색할 때 두 가지 다른 의도를 가지고 있습니다. 첫째는 진짜 고양이의 울음소리를 사람 말로 해석해 주길
              원하는 경우, 둘째는 자기 글을 고양이 말투로 바꾸고 싶은 경우입니다. 이 도구는 두 번째 목적에 특화되어 있습니다. 즉, 고양이의
              감정을 분석하는 음성 인식 도구가 아니라 한국어 문장을 냥냥체 스타일로 변환해 주는 텍스트 변환기입니다. 따라서 일상 대화, 캡션,
              댓글, 블로그 글에 사용하기에 적합합니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">냥냥체란 무엇인가요?</h2>
            <p>
              냥냥체는 문장 끝에 “냥”, “다냥”, “냐옹” 등의 고양이 어미를 붙여 마치 고양이가 말하는 것처럼 표현하는 인터넷 말투입니다. 예를 들어
              “오늘 날씨가 좋아요”를 “오늘 날씨가 좋다냥”으로, “배고프다”를 “배고프다냥 (꼬리살랑)”으로 바꾸는 식입니다. 어미만 살짝 바꿔도
              문장 전체의 분위기가 부드럽고 친근하게 변하기 때문에 가족, 친구, 연인, 반려묘 SNS 팔로워와의 대화에서 두루 사용됩니다.
            </p>
            <p>
              냥냥체의 매력은 단순히 귀여운 어미에만 있는 것이 아닙니다. 냥냥체에는 고양이 특유의 행동을 묘사하는 효과음, 예를 들어 “(꼬리살랑)”,
              “(골골)”, “(앞발꾹꾹)”, “(눈빛초롱)”과 같은 짧은 표현이 자주 함께 등장합니다. 이런 표현은 문장에 시각적인 이미지를 더해 주고,
              읽는 사람이 마치 진짜 고양이를 보고 있는 듯한 기분을 느끼게 만듭니다. 이 고양이 번역기는 강도 설정에 따라 이러한 효과음을
              자동으로 추가해 주기 때문에 결과가 한층 풍부해집니다.
            </p>
            <p>
              또한 냥냥체에서는 일부 명사가 고양이 세계관의 단어로 치환되는 경향이 있습니다. “사람”이나 “주인”이 “집사”로, “고양이”가 “냥냥이”로,
              “사료”가 “츄르”로, “감사”가 “냥큐”로, “안녕”이 “안냥”으로 바뀌는 식입니다. 이 도구는 이러한 단어 치환 규칙도 함께 적용하기 때문에
              단순 어미 변환보다 훨씬 자연스러운 냥냥체를 만들어 줍니다. 결과를 그대로 SNS에 올리거나 친구에게 보내도 어색하지 않을 정도의
              완성도를 목표로 설계되었습니다.
            </p>
            <p>
              냥냥체는 비슷해 보이지만 사람마다 선호하는 톤이 조금씩 다릅니다. 어떤 분은 “냥”만 살짝 붙이는 담백한 스타일을 좋아하고, 어떤 분은
              “다냥냥냥 (골골골)”처럼 강한 냥냥체를 선호합니다. 그래서 이 도구에는 약하게, 보통, 강하게 세 가지 강도가 마련되어 있습니다.
              상황과 분위기에 맞게 강도를 선택하면 같은 입력에서도 다양한 느낌의 냥냥체 결과를 얻을 수 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">고양이 번역기를 사용하는 5가지 이유</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong className="text-slate-900">SNS 글쓰기 시간 단축</strong> — 인스타그램이나 트위터 캡션을 처음부터 냥냥체로 쓰려면
                생각보다 시간이 많이 걸립니다. 평소 말투로 쓴 다음 이 도구에 한 번 통과시키면 1초 만에 냥냥체 캡션이 완성됩니다.
              </li>
              <li>
                <strong className="text-slate-900">반려묘 계정 운영의 일관성</strong> — 고양이 SNS 계정을 운영하다 보면 매번 같은 톤을 유지하기
                어렵습니다. 고양이 번역기를 통과시키면 모든 게시물이 자연스럽게 냥냥체로 통일됩니다.
              </li>
              <li>
                <strong className="text-slate-900">친구와의 대화 분위기 전환</strong> — 어색한 단톡방이나 무거운 대화 분위기를 풀고 싶을 때
                냥냥체 메시지 한 마디면 분위기가 한순간에 부드러워집니다.
              </li>
              <li>
                <strong className="text-slate-900">콘텐츠 크리에이터에게 유용</strong> — 짤방, 카드뉴스, 유튜브 자막, 블로그 일상글에 냥냥체
                포인트를 주면 콘텐츠가 더 친근하고 재밌어집니다.
              </li>
              <li>
                <strong className="text-slate-900">한국어 학습자에게도 흥미로운 자료</strong> — 한국어를 배우는 외국인 친구에게 냥냥체 같은
                인터넷 슬랭을 보여 주면 살아 있는 언어 문화를 자연스럽게 소개할 수 있습니다.
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">고양이 번역기 사용 방법 (단계별 가이드)</h2>
            <p>
              이 고양이 번역기는 누구나 처음 써도 30초 안에 익숙해질 수 있을 만큼 단순합니다. 그래도 기능을 100% 활용하려면 다음 단계를 따라
              사용해 보시기를 추천드립니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">1단계 — 한국어 문장 입력</h3>
            <p>
              가장 위쪽의 입력창에 변환하고 싶은 한국어 문장을 적습니다. 짧은 한 문장도 좋고, 여러 줄로 이루어진 단락도 괜찮습니다. 다만
              영어나 숫자만으로 이루어진 문장은 어미가 없으므로 냥냥체 변환 효과가 잘 드러나지 않으니 한국어 문장을 권장드립니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">2단계 — 냥냥체 강도 선택</h3>
            <p>
              “약하게”는 어미만 살짝 바꾸는 점잖은 냥냥체, “보통”은 어미와 함께 효과음이 가끔 등장하는 균형 잡힌 냥냥체, “강하게”는 문장 중간에도
              “냥”이 자주 들어가는 진한 냥냥체입니다. 인스타 캡션이나 메신저용으로는 보통이 가장 무난하고, 짤이나 캐릭터 콘텐츠에는 강하게가
              잘 어울립니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">3단계 — 변환 버튼 클릭</h3>
            <p>
              “냥냥체로 번역하기” 버튼을 누르면 결과가 즉시 표시됩니다. 같은 입력이라도 도구가 효과음과 어미를 무작위로 선택하기 때문에 다시 누르면
              조금씩 다른 결과가 나옵니다. 마음에 드는 결과가 나올 때까지 자유롭게 여러 번 시도해 보세요.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">4단계 — 결과 복사 및 활용</h3>
            <p>
              결과가 마음에 들면 “결과 복사” 버튼을 눌러 클립보드에 저장합니다. 그 상태에서 카카오톡, 인스타그램, 트위터, 디스코드, 메모장 어디든
              붙여 넣어 사용하실 수 있습니다. 모바일에서도 동일하게 작동하므로 외출 중에도 편하게 쓸 수 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">냥냥체 변환 예시 모음</h2>
            <p>
              실제로 어떤 식으로 변환되는지 감을 잡고 싶다면 아래 예시를 참고해 보세요. 같은 문장도 강도 설정과 무작위 효과음에 따라 결과가
              조금씩 달라집니다.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>“오늘 날씨가 정말 좋아요.” → “오늘 날씨가 정말 좋다냥. (꼬리살랑)”</li>
              <li>“배고프다.” → “배고프다냥 (앞발꾹꾹)”</li>
              <li>“집에 가고 싶어.” → “집에 가고 싶다냥~”</li>
              <li>“사료 다 먹었어.” → “츄르 다 먹었다냥 (골골)”</li>
              <li>“너무 졸려요.” → “너무 졸리다냥 (눈빛초롱)”</li>
              <li>“안녕하세요. 저는 고양이를 키우는 사람이에요.” → “안냥하세요. 저는 냥냥이를 키우는 집사이다냥.”</li>
            </ul>
            <p>
              위 예시처럼 도구는 어미만 바꾸는 것이 아니라 핵심 단어도 고양이 세계관에 맞춰 자동으로 치환합니다. “사람”이 “집사”로, “고양이”가
              “냥냥이”로 바뀌는 식이라 결과가 단순한 어미 추가보다 훨씬 자연스럽고 통일감 있게 느껴집니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">고양이 번역기를 활용하는 상황별 팁</h2>
            <h3 className="text-lg font-semibold text-slate-900">인스타그램 캡션</h3>
            <p>
              고양이 사진을 올릴 때는 “보통” 강도가 잘 어울립니다. 너무 강한 냥냥체는 가독성이 떨어질 수 있으니 핵심 메시지가 분명하게 보이도록
              어미만 살짝 바꾸는 정도가 좋습니다. 해시태그로 #고양이번역기 #냥냥체 #집사일상 같은 태그를 함께 달면 노출 효과도 기대할 수 있습니다.
            </p>
            <h3 className="text-lg font-semibold text-slate-900">카카오톡 메시지</h3>
            <p>
              친구에게 보내는 카톡에는 “약하게” 강도가 적당합니다. 메시지가 너무 길어 보이지 않으면서도 분위기를 부드럽게 만들 수 있습니다.
              단체 채팅방에서 분위기를 띄우고 싶을 때는 “강하게”를 사용해 효과음을 많이 넣으면 반응이 좋습니다.
            </p>
            <h3 className="text-lg font-semibold text-slate-900">반려묘 SNS 계정</h3>
            <p>
              반려묘 인스타그램이나 블로그를 운영하시는 분들은 매 게시물마다 냥냥체로 캡션을 다는 경우가 많습니다. 이 도구로 글의 일관된 톤을
              유지하면 팔로워들이 채널 정체성을 더 쉽게 인식합니다. 캐릭터화된 말투는 곧 반려묘 계정의 브랜딩이 됩니다.
            </p>
            <h3 className="text-lg font-semibold text-slate-900">캐릭터 콘텐츠 제작</h3>
            <p>
              유튜브 영상 자막, 만화 말풍선, 카드뉴스에 냥냥체를 활용하면 캐릭터의 성격이 더 살아납니다. 특히 고양이 캐릭터의 대사를 쓸 때
              매번 직접 어미를 고치는 대신 이 도구를 통과시키면 작업 시간이 크게 단축됩니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">이 고양이 번역기는 어떻게 작동하나요?</h2>
            <p>
              내부적으로는 정해진 규칙에 따라 한국어 어미와 단어를 다른 형태로 치환하는 방식으로 작동합니다. 예를 들어 “습니다”로 끝나는 문장은
              “다냥”으로, “해요”는 “한다냥”으로, “이에요”는 “이다냥”으로 변환됩니다. 단어 사전에는 “사람 → 집사”, “고양이 → 냥냥이”, “사료 → 츄르”
              같은 매핑이 미리 들어 있어 자주 쓰이는 표현을 자연스럽게 고양이 세계관 단어로 바꿔 줍니다.
            </p>
            <p>
              어미와 단어 치환 외에도 강도 설정에 따라 무작위로 “(꼬리살랑)”, “(골골)”, “(앞발꾹꾹)” 같은 효과음이 추가됩니다. 효과음의 종류와
              빈도는 강도가 높을수록 늘어나고, 강하게 모드에서는 문장 중간에도 “냥”이 자주 들어가도록 처리됩니다. 이런 무작위 요소 덕분에 같은
              입력에서도 매번 새로운 분위기의 결과가 나오기 때문에 마음에 드는 버전을 골라 사용할 수 있습니다.
            </p>
            <p>
              모든 변환은 브라우저의 자바스크립트로 처리되며, 입력하신 문장은 외부 서버로 전송되지 않습니다. 즉, 인터넷 연결이 잠깐 불안정해도
              한 번 페이지가 로드된 뒤에는 오프라인에서도 변환이 가능합니다. 또한 외부 API에 의존하지 않기 때문에 사용 한도나 일일 제한 없이
              마음껏 쓰실 수 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">고양이 번역기 사용 시 주의사항</h2>
            <p>
              이 고양이 번역기는 재미와 분위기 전환을 위한 도구입니다. 의미를 정확하게 전달해야 하는 공식 문서, 비즈니스 메일, 학교 과제, 보도
              자료 등에는 사용하지 않는 것이 좋습니다. 또한 진지한 사과나 중요한 안내처럼 가벼운 톤이 어울리지 않는 상황에서도 사용을 자제해
              주세요. 같은 메시지라도 냥냥체로 바뀌면 진심이 가벼워 보일 수 있습니다.
            </p>
            <p>
              결과가 어색하게 보일 때는 보통 입력 문장의 어미가 도구의 변환 규칙에 포함되지 않은 경우입니다. 표준어 어미인 “습니다, 해요, 이에요,
              했어요, 같아, 좋아” 같은 형태에 가장 잘 작동하므로, 사투리나 신조어 어미가 많이 섞인 문장은 한 번 정리한 뒤 변환하는 것을
              권장드립니다. 또 영어와 한국어가 섞인 문장은 한국어 부분만 변환됩니다.
            </p>
            <p>
              마지막으로, 냥냥체 메시지는 받는 사람의 취향에 따라 호감도가 갈릴 수 있습니다. 친한 친구나 가족에게는 좋은 반응을 얻기 쉽지만,
              잘 모르는 사람이나 비즈니스 관계에서는 어색하게 받아들여질 수 있습니다. 받는 사람의 성향과 상황을 고려한 뒤 사용하시면 더 좋은
              경험이 될 것입니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 쓰면 좋은 도구</h2>
            <p>
              고양이 번역기와 함께 사용하면 좋은 도구로는 한국어 닉네임 생성기, 끝말잇기, 삼행시 짓기 등이 있습니다. 예를 들어 반려묘 SNS 계정을
              새로 만들 때 닉네임 생성기로 고양이에게 어울리는 별명을 만든 다음, 이 고양이 번역기로 자기소개 문구를 냥냥체로 꾸미면 통일감 있는
              계정 콘셉트를 빠르게 완성할 수 있습니다.
            </p>
            <p>
              SNS 캡션을 자주 쓰시는 분이라면 텍스트 정리 도구로 복사한 글에 섞인 보이지 않는 공백, 특수 문자, 줄바꿈 문제를 먼저 정리한 뒤
              냥냥체로 변환하는 것을 추천드립니다. 입력 문장이 깔끔할수록 결과 품질이 좋아지기 때문입니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>
              고양이 번역기는 한국 인터넷 문화의 한 부분으로 자리 잡은 냥냥체를 누구나 쉽게 만들 수 있도록 만든 무료 도구입니다. 메시지를
              부드럽게 만들고 싶을 때, SNS 캡션에 포인트를 주고 싶을 때, 반려묘 콘텐츠를 일관된 톤으로 운영하고 싶을 때 가볍게 활용해 보세요.
              회원가입 없이 모든 기능을 사용할 수 있고, 입력값은 서버에 저장되지 않으니 안심하고 쓰실 수 있습니다.
            </p>
            <p>
              앞으로도 더 다양한 냥냥체 패턴, 단어 치환, 효과음을 추가해 결과 품질을 높여 갈 예정입니다. 사용하다가 아쉬운 점이나 추가되었으면
              하는 표현이 있다면 언제든 피드백을 보내 주세요. 여러분의 의견이 도구를 더 자연스러운 한국식 고양이 번역기로 발전시키는 데 큰 도움이
              됩니다.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection
            items={faqItems}
            title="자주 묻는 질문"
            intro="고양이 번역기, 냥냥체 변환, 사용 방법에 대한 궁금증을 정리했습니다."
          />
        </section>
      </div>
    </div>
  );
}

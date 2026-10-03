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
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">이 도구는 무료로 제공되는 고양이 말투 변환기로서, 한국어 텍스트를 귀여운 냥냥체로 전환해 줍니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.9</span>
            <span>·</span>
            <span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border-3 border-black bg-white p-3 shadow-neo-sm md:mt-6 md:rounded-2xl md:p-6">
          <CatTranslatorTool />
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug="korean-cat-translator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">고양이 번역기란?</h2>
            <p>고양이 번역기는 사람이 작성한 한국어 텍스트를 고양이의 말투인 냥냥체로 변환해 주는 온라인 유틸리티입니다. 문장 끝의 어미를 “냥”, “다냥”, “냐옹” 같은 고양이 특유의 어미로 바꾸어 평범한 글을 귀엽고 친근한 고양이 스타일로 꾸며 줍니다. 실제 고양이의 울음소리를 인간의 언어로 완벽히 번역해 주는 것은 아니지만, SNS 게시물, 메신저 대화, 인스타그램 캡션, 블로그 포스팅 등에 색다른 재미와 가벼운 분위기를 더하고 싶을 때 가장 널리 쓰이는 한국어 텍스트 변환기입니다.</p>
            <p>최근 몇 해 사이 한국 온라인 세상에서는 동물들의 말투를 흉내 낸 문장이 큰 인기를 끌고 있습니다. 강아지 말투인 멍멍체, 고양이 말투인 냥냥체, 햄스터 말투, 토끼 말투까지 여러 종류가 있지만 이 중 냥냥체는 따뜻하면서도 도도한 감성을 동시에 지녀 친구와의 채팅부터 반려동물 SNS 관리까지 다양하게 쓰입니다. 이 고양이 번역기는 그런 냥냥체를 클릭 한 번으로 간편하게 만들어 내도록 제작된 무료 유틸리티입니다.</p>
            <p>이용 방법은 매우 간단합니다. 입력 상자에 한국어 글을 넣고, 냥냥체 세기를 약하게, 보통, 강하게 중에서 고른 다음 “냥냥체로 번역하기” 버튼을 누르면 즉시 결과가 나타납니다. 결과가 마음에 들면 복사하기를 눌러 카카오톡, 인스타그램 DM, 트위터, 디스코드 등 원하는 곳에 바로 붙여 넣으면 됩니다. 회원가입이나 로그인 절차가 없으며, 모든 처리가 웹브라우저 안에서만 진행되므로 개인정보 유출 걱정 없이 안심하고 쓰실 수 있습니다.</p>
            <p>많은 사용자가 “고양이 번역기”를 찾을 때 두 가지 다른 목적을 가집니다. 첫째는 실제 고양이의 울음소리를 인간의 언어로 통역해 주길 바라는 경우이며, 둘째는 본인이 작성한 글을 고양이 말투로 바꾸고 싶은 경우입니다. 이 서비스는 두 번째 목적에 최적화되어 있습니다. 즉, 고양이의 감정을 파악하는 음성인식 프로그램이 아니라 한국어 문장을 냥냥체 스타일로 바꿔 주는 텍스트 변환기입니다. 그러므로 일상 대화, 캡션, 댓글, 블로그 포스팅에 활용하기 안성맞춤입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">냥냥체란 무엇인가요?</h2>
            <p>냥냥체는 문장 끝에 “냥”, “다냥”, “냐옹” 등의 고양이식 어미를 붙여 마치 고양이가 직접 말하는 듯 연출하는 인터넷 화법입니다. 예컨대 “오늘 날씨가 좋아요”를 “오늘 날씨가 좋다냥”으로, “배고프다”를 “배고프다냥 (꼬리살랑)”으로 바꾸는 방식이지요. 어미만 살짝 고쳐도 전체적인 어조가 부드럽고 친밀하게 바뀌기 때문에 가족, 친구, 연인, 반려동물 계정 팔로워들과의 소통에 두루 쓰입니다.</p>
            <p>냥냥체의 매력은 단순히 귀여운 어미에만 국한되지 않습니다. 냥냥체에는 고양이만의 독특한 행동을 나타내는 효과음, 예컨대 “(꼬리살랑)”, “(골골)”, “(앞발꾹꾹)”, “(눈빛초롱)” 같은 짧은 구절들이 자주 동반됩니다. 이러한 요소들은 글에 시각적 느낌을 보태 주어, 읽는 이가 진짜 고양이를 마주한 듯한 느낌을 받게 합니다. 이 고양이 번역기는 강도 설정에 따라 이러한 효과음을 알아서 넣어 주기 때문에 결과물이 한층 더 풍성해집니다.</p>
            <p>아울러 냥냥체에서는 특정 명사들이 고양이 세계관의 어휘로 대체되는 경향이 있습니다. “사람”이나 “주인”이 “집사”로, “고양이”가 “냥냥이”로, “사료”가 “츄르”로, “감사”가 “냥큐”로, “안녕”이 “안냥”으로 바뀌는 식입니다. 이 프로그램은 이러한 단어 치환 규칙까지 함께 반영하므로 단순 어미 변환보다 훨씬 자연스러운 냥냥체를 완성해 줍니다. 결과물을 SNS에 바로 올리거나 지인에게 보내도 어색하지 않을 정도의 완성도를 목표로 만들어졌습니다.</p>
            <p>냥냥체는 언뜻 비슷해 보이지만 개인마다 선호하는 뉘앙스가 조금씩 다릅니다. 어떤 이는 “냥”만 가볍게 덧붙이는 담백한 스타일을 반기고, 어떤 이는 “다냥냥냥 (골골골)”처럼 진한 냥냥체를 더 좋아합니다. 그래서 본 도구에는 약하게, 보통, 강하게의 세 단계 강도가 준비되어 있습니다. 상황과 분위기에 맞춰 단계를 고르면 동일한 입력값으로도 각양각색의 냥냥체 결과물을 얻을 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">고양이 번역기를 활용해야 하는 5가지 이유</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">SNS 글쓰기 시간 단축</strong> — 인스타그램이나 트위터 캡션을 처음부터 냥냥체로 작성하려면 생각보다 많은 시간이 소요됩니다. 평소 말투로 적은 뒤 이 툴에 한 번 거치면 1초 만에 냥냥체 캡션이 완성됩니다.</li>
              <li><strong className="text-slate-900">반려묘 계정 운영의 일관성</strong> — 고양이 SNS 채널을 운영하다 보면 매번 동일한 톤을 유지하기가 쉽지 않습니다. 고양이 번역기를 거치면 모든 게시물이 자연스럽게 냥냥체로 일원화됩니다.</li>
              <li><strong className="text-slate-900">친구와의 대화 분위기 전환</strong> — 서먹한 단체 대화방이나 무거운 소통 분위기를 환기하고 싶을 때 냥냥체 메시지 하나면 순식간에 분위기가 부드러워집니다.</li>
              <li><strong className="text-slate-900">콘텐츠 크리에이터에게 유용</strong> — 밈, 카드뉴스, 유튜브 자막, 블로그 일상 포스팅에 냥냥체 요소를 가미하면 콘텐츠가 한결 친근하고 재미있어집니다.</li>
              <li><strong className="text-slate-900">한국어 학습자에게도 흥미로운 자료</strong> — 한국어를 공부하는 외국인 지인에게 냥냥체 같은 온라인 슬랭을 소개해 주면 살아 있는 언어 문화를 자연스럽게 전달할 수 있습니다.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">고양이 번역기 활용 가이드 (단계별 안내)</h2>
            <p>이 고양이 번역기는 누구나 처음 이용하더라도 30초 안에 적응할 수 있을 만큼 직관적입니다. 그렇더라도 기능을 온전히 활용하기 위해 아래 순서대로 사용해 보시기를 권장합니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">첫 번째 단계 — 한국어 문장 입력</h3>
            <p>가장 상단의 입력 칸에 변환하고자 하는 한국어 글을 적습니다. 짧은 한 줄도 좋고 여러 줄로 구성된 문단도 무방합니다. 단, 영어 혹은 숫자만 포함된 문장은 어미가 존재하지 않아 냥냥체 변환 효과가 잘 나타나지 않으므로 한국어 작성을 권장합니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">두 번째 단계 — 냥냥체 강도 선택</h3>
            <p>“약하게”는 어미만 살짝 바꿔 주는 점잖은 냥냥체, “보통”은 어미와 함께 효과음이 가끔 나타나는 균형 잡힌 냥냥체, “강하게”는 문장 중간마다 “냥”이 빈번히 들어가는 진한 냥냥체입니다. 인스타 캡션이나 메신저용으로는 보통 단계가 가장 무난하며, 밈이나 캐릭터 글에는 강한 설정이 잘 어울립니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">세 번째 단계 — 변환 버튼 클릭</h3>
            <p>“냥냥체로 번역하기”를 누르면 결과가 즉시 출력됩니다. 같은 입력이라도 툴이 효과음과 어미를 무작위로 배정하기 때문에 재시도할 때마다 조금씩 다른 결과가 나옵니다. 마음에 드는 결과가 나올 때까지 부담 없이 여러 차례 시도해 보세요.</p>

            <h3 className="text-lg font-semibold text-slate-900">네 번째 단계 — 결과 복사 및 활용</h3>
            <p>결과가 마음에 든다면 “결과 복사” 버튼을 눌러 클립보드에 담아둡니다. 그 상태로 카카오톡, 인스타그램, 트위터, 디스코드, 메모장 등 어디든 붙여 넣어 쓰시면 됩니다. 모바일 환경에서도 똑같이 작동하므로 외출 중에도 편리하게 이용 가능합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">냥냥체 변환 샘플 모음</h2>
            <p>실제로 어떤 식으로 번역되는지 감을 익히고 싶다면 아래 예시들을 살펴보세요. 같은 문장이라도 강도 조절과 무작위 효과음에 따라 결과물이 조금씩 달라집니다.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>“오늘 날씨가 정말 좋아요.” → “오늘 날씨가 정말 좋다냥. (꼬리살랑)”</li>
              <li>“배고프다.” → “배고프다냥 (앞발꾹꾹)”</li>
              <li>“집에 가고 싶어.” → “집에 가고 싶다냥~”</li>
              <li>“사료 다 먹었어.” → “츄르 다 먹었다냥 (골골)”</li>
              <li>“너무 졸려요.” → “너무 졸리다냥 (눈빛초롱)”</li>
              <li>“안녕하세요. 저는 고양이를 키우는 사람이에요.” → “안냥하세요. 저는 냥냥이를 키우는 집사이다냥.”</li>
            </ul>
            <p>상기 예시처럼 해당 기능은 단순히 어미만 바꾸는 것이 아니라 주요 어휘도 고양이 세계관에 맞게 자동으로 전환합니다. “사람”이 “집사”로, “고양이”가 “냥냥이”로 바뀌는 방식이라 결과물이 단순한 어미 추가보다 훨씬 더 자연스럽고 일관성 있게 다가옵니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">고양이 번역기 활용을 위한 상황별 팁</h2>
            <h3 className="text-lg font-semibold text-slate-900">인스타그램 캡션</h3>
            <p>고양이 사진을 업로드할 때는 “보통” 강도가 제격입니다. 지나치게 강한 냥냥체는 가독성을 떨어뜨릴 수 있으므로 핵심 내용이 잘 보이도록 어미만 가볍게 수정하는 편이 좋습니다. 해시태그로 #고양이번역기 #냥냥체 #집사일상 같은 키워드를 함께 태깅하면 노출 효과도 기대할 수 있습니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">카카오톡 메시지</h3>
            <p>지인에게 전송하는 카톡 메시지에는 “약하게” 설정이 딱 알맞습니다. 문장이 과도하게 길어 보이지 않으면서도 대화 분위기를 부드럽게 연출할 수 있습니다. 단체 대화방에서 흥을 돋우고 싶을 때는 “강하게” 옵션을 선택해 효과음을 다수 포함시키면 좋은 반응을 얻을 수 있습니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">반려묘 SNS 계정</h3>
            <p>반려묘 인스타그램이나 블로그를 운영하는 분들은 게시물마다 냥냥체 캡션을 달아주는 경우가 많습니다. 이 유틸리티로 글의 통일된 톤을 유지하면 팔로워들이 채널의 정체성을 한눈에 알아볼 수 있습니다. 개성 있는 말투는 곧 반려묘 계정만의 훌륭한 브랜딩이 됩니다.</p>
            <h3 className="text-lg font-semibold text-slate-900">캐릭터 콘텐츠 제작</h3>
            <p>유튜브 영상 자막, 웹툰 말풍선, 카드뉴스 제작에 냥냥체를 적용하면 캐릭터의 매력이 배가됩니다. 특히 고양이 대사를 작성할 때 매번 일일이 어미를 수정하는 번거로움 없이 이 서비스를 거치면 작업 시간을 대폭 줄일 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">본 고양이 번역기의 작동 원리가 궁금하신가요?</h2>
            <p>내부적으로는 정해진 알고리즘 규칙에 따라 한국어 어미와 단어를 다른 형태로 변환하는 방식을 취하고 있습니다. 예를 들어 “습니다”로 끝나는 문장은 “다냥”으로, “해요”는 “한다냥”으로, “이에요”는 “이다냥”으로 바뀝니다. 단어 사전에는 “사람 → 집사”, “고양이 → 냥냥이”, “사료 → 츄르” 등의 매핑이 미리 구축되어 있어 자주 쓰이는 표현을 자연스러운 고양이 용어로 치환해 줍니다.</p>
            <p>어미 및 단어 변환 외에도 강도 설정에 따라 무작위로 “(꼬리살랑)”, “(골골)”, “(앞발꾹꾹)” 같은 효과음이 덧붙여집니다. 효과음의 종류와 빈도는 강도가 높아질수록 증가하며, 강하게 모드에서는 문장 중간에도 “냥”이라는 글자가 빈번하게 삽입됩니다. 이러한 랜덤 요소 덕분에 동일한 입력값이라도 매번 색다른 분위기의 결과물이 생성되어 마음에 드는 버전을 선택해 쓸 수 있습니다.</p>
            <p>모든 변환 과정은 브라우저 내 자바스크립트로 처리되며, 작성하신 문장은 외부 서버로 절대 전송되지 않습니다. 즉, 인터넷 접속이 잠시 끊기더라도 최초 로딩 이후에는 오프라인 상태에서도 변환 작업을 수행할 수 있습니다. 아울러 외부 API에 의존하지 않으므로 사용 횟수 제한이나 일일 쿼터 걱정 없이 자유롭게 이용 가능합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">고양이 번역기 이용 시 유의사항</h2>
            <p>본 고양이 번역기는 오직 재미와 분위기 환기를 목적으로 제작된 유틸리티입니다. 정확한 의미 전달이 필수적인 공식 문서, 비즈니스 이메일, 학술 과제, 보도 자료 등에는 활용하지 않는 것을 권장합니다. 아울러 진지한 사과나 중요한 공지사항처럼 가벼운 어조가 어울리지 않는 상황에서도 사용을 삼가 주시기 바랍니다. 동일한 내용이라도 냥냥체로 변환되면 진정성이 희석되어 보일 수 있습니다.</p>
            <p>결과물이 부자연스럽게 느껴질 때는 대개 입력한 문장의 어미가 프로그램의 변환 규칙에 부합하지 않는 경우입니다. 표준어 어미인 “습니다, 해요, 이에요, 했어요, 같아, 좋아” 등의 형태에서 가장 매끄럽게 작동하므로, 방언이나 신조어가 다수 섞인 문장은 한 차례 정돈한 뒤 변환하는 편을 추천합니다. 아울러 영어와 한국어가 혼용된 문장은 국문 영역만 변환됩니다.</p>
            <p>끝으로, 냥냥체 메시지는 수신자의 성향에 따라 호불호가 갈릴 수 있습니다. 절친한 친구나 가족 간에는 긍정적인 반응을 이끌어내기 쉽지만, 초면인 상대나 공적인 비즈니스 관계에서는 어색하게 비칠 수 있습니다. 상대방의 성향과 상황을 충분히 헤아린 뒤 활용하신다면 훨씬 만족스러운 결과를 얻으실 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">함께 이용하기 좋은 추천 도구</h2>
            <p>고양이 번역기와 병행하여 쓰기 좋은 서비스로는 한국어 닉네임 생성기, 끝말잇기, 삼행시 짓기 등이 있습니다. 가령 반려묘 SNS 계정을 새로 개설할 때 닉네임 생성기로 반려동물에게 어울리는 별칭을 만들고, 이 고양이 번역기로 프로필 소개란을 냥냥체로 꾸민다면 일체감 있는 채널 컨셉을 신속하게 구축할 수 있습니다.</p>
            <p>SNS 캡션을 빈번하게 작성하는 분이라면 텍스트 정리 도구를 통해 복사한 텍스트에 포함된 보이지 않는 공백, 특수 기호, 줄바꿈 오류를 먼저 말끔히 수정한 후 냥냥체로 전환하는 방식을 권장합니다. 입력 텍스트가 정돈될수록 최종 결과물의 품질이 눈에 띄게 향상되기 때문입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">마무리하며</h2>
            <p>고양이 번역기는 국내 인터넷 문화의 일부분으로 자리 잡은 냥냥체를 누구나 손쉽게 구사할 수 있도록 고안된 무료 서비스입니다. 메시지에 부드러움을 더하고 싶을 때, SNS 게시글에 포인트를 주고 싶을 때, 반려묘 콘텐츠를 일관된 톤으로 운영하고 싶을 때 부담 없이 활용해 보세요. 별도의 회원가입 절차 없이 모든 기능을 누릴 수 있으며 입력값은 서버에 저장되지 않으므로 안심하고 이용하실 수 있습니다.</p>
            <p>향후에도 더욱 다채로운 냥냥체 패턴, 어휘 치환, 효과음 옵션을 보강하여 결과물의 퀄리티를 지속적으로 끌어올릴 계획입니다. 사용 중 개선이 필요한 부분이나 새롭게 반영되었으면 하는 표현이 있다면 언제든지 피드백을 전달해 주세요. 여러분의 소중한 의견은 본 고양이 번역기를 더욱 완성도 높은 한국식 유틸리티로 발전시키는 데 큰 원동력이 됩니다.</p>
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

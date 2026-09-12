import FAQSection from '@/components/FAQSection';
import BelowToolAd from '@/components/ads/BelowToolAd';
import AdSenseSlot from '@/components/ads/AdSenseSlot';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { QuestionGeneratorTool } from './QuestionGeneratorTool';
import { faqItems } from './faq';
import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/url';

const title = '질문 생성기 | 친구·연인·술자리 질문 하기 (무료)';
const description =
  '친구, 연인, 술자리, 모임에서 바로 쓸 수 있는 대화 질문을 무작위로 뽑아 주는 무료 질문 생성기입니다. 아이스브레이킹 질문부터 밸런스 게임, MBTI 성향 질문까지 원하는 개수만큼 즉시 만들어 보세요.';

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title,
    description,
    urlPath: '/korean-question-generator',
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

export default function KoreanQuestionGeneratorPage() {
  const url = `${siteUrl}/korean-question-generator`;
  const faqLd = buildFaqJsonLd();
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '질문 생성기',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description,
    url,
    inLanguage: 'ko',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '1260', bestRating: '5', worstRating: '1' },
  };

  return (
    <div lang="ko" className="relative bg-[#f7f9ff]">
      <JsonLd data={faqLd} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-3xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">질문 생성기</h1>
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">
            친구·연인·술자리에서 바로 쓸 수 있는 질문을 무작위로 뽑아 주는 무료 도구입니다.
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.8</span>
            <span>·</span>
            <span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:mt-6 md:rounded-2xl md:p-6">
          <QuestionGeneratorTool />
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug="korean-question-generator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">질문 생성기란?</h2>
            <p>
              질문 생성기는 사람과 사람 사이의 대화를 시작하게 만들어 주는 온라인 도구입니다. 친구, 연인, 술자리, 모임, 소개팅처럼 이야기를 나눠야
              하는 자리에서 무슨 말을 꺼내야 할지 막막할 때, 버튼 한 번으로 그 상황에 어울리는 질문을 뽑아 줍니다. 회원가입이나 로그인 없이 바로
              사용할 수 있고, 뽑는 횟수에도 제한이 없기 때문에 마음에 드는 질문이 나올 때까지 얼마든지 다시 시도할 수 있습니다.
            </p>
            <p>
              대화가 어려운 이유는 할 말이 없어서가 아니라 어떤 말부터 꺼내야 할지 정하지 못해서인 경우가 많습니다. 특히 처음 만난 사람과 마주
              앉았을 때, 오랜만에 만난 친구와 근황 이야기가 금방 떨어졌을 때, 연인과 늘 같은 대화만 반복하고 있다고 느낄 때 이런 막막함이
              찾아옵니다. 질문 생성기는 바로 그 첫 마디를 대신 만들어 주는 역할을 합니다. 좋은 질문 하나가 던져지면 그 뒤의 대화는 자연스럽게
              이어지기 마련입니다.
            </p>
            <p>
              이 도구는 여섯 가지 상황별 종류를 제공합니다. 가볍게 분위기를 풀고 싶을 때 쓰는 친구 질문, 서로를 더 알아가고 싶을 때 쓰는 연인
              질문, 분위기를 띄우고 싶을 때 쓰는 술자리 질문, 성향을 이야기해 보고 싶을 때 쓰는 MBTI 질문, 진솔한 이야기를 나누고 싶을 때 쓰는
              깊은 대화 질문, 그리고 둘 중 하나를 골라야 하는 밸런스 게임 질문입니다. 상황에 맞는 종류를 고르는 것만으로도 대화의 온도를
              조절할 수 있습니다.
            </p>
            <p>
              사용 방법은 매우 단순합니다. 화면 상단에서 질문 종류를 고르고, 원하는 개수를 선택한 뒤 질문 뽑기 버튼을 누르면 끝입니다. 결과가
              마음에 들면 전체 복사 버튼으로 목록을 통째로 복사해 카카오톡 단체방이나 메모장에 붙여 넣을 수 있습니다. 모든 처리가 브라우저
              안에서 이루어지기 때문에 인터넷이 느린 환경에서도 기다림 없이 즉시 결과가 나옵니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">좋은 질문이 대화를 바꾸는 이유</h2>
            <p>
              같은 사람과 같은 시간을 보내도 어떤 대화는 기억에 오래 남고 어떤 대화는 흔적도 없이 사라집니다. 그 차이를 만드는 것이 바로 질문의
              질입니다. “요즘 어때?”라는 질문에는 “그냥 그래”라는 답이 돌아오지만, “최근에 크게 웃은 일이 뭐야?”라고 물으면 구체적인 장면이
              담긴 이야기가 나옵니다. 답하는 사람이 머릿속에서 특정한 순간을 떠올리게 만드는 질문일수록 대화가 살아납니다.
            </p>
            <p>
              좋은 질문에는 공통점이 있습니다. 첫째, 예 또는 아니오로 끝나지 않습니다. 둘째, 답하는 사람이 자기 경험을 꺼내게 만듭니다. 셋째,
              상대를 평가하거나 부담을 주지 않습니다. 이 질문 생성기에 담긴 질문들은 이 세 가지 기준을 염두에 두고 정리되었습니다. 그래서
              처음 만난 사이에서도 무리 없이 던질 수 있고, 오래된 사이에서도 새로운 이야기를 끌어낼 수 있습니다.
            </p>
            <p>
              반대로 피해야 할 질문도 분명합니다. 연봉, 결혼 계획, 외모에 대한 평가처럼 상대가 답하기 곤란한 주제는 대화를 이어 가기는커녕
              분위기를 얼어붙게 만듭니다. 특히 처음 만난 자리에서는 사적인 영역에 깊이 들어가는 질문을 삼가는 것이 좋습니다. 질문 생성기의
              종류를 상황에 맞게 고르면 이런 실수를 자연스럽게 피할 수 있습니다.
            </p>
            <p>
              또 하나 중요한 것은 질문을 던진 뒤의 태도입니다. 답을 듣고 곧바로 다음 질문으로 넘어가면 대화가 아니라 설문조사가 됩니다. 상대가
              답을 하면 “왜 그렇게 생각했어?”, “그때 기분이 어땠어?”처럼 한 번 더 파고드는 것이 좋습니다. 질문 하나로 5분 이상 이야기를
              나눌 수 있다면 그 질문은 제 역할을 다한 것입니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">질문 생성기를 사용하는 5가지 이유</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong className="text-slate-900">어색한 침묵을 없애 줍니다</strong> — 처음 만난 자리나 오랜만에 만난 사이에서 찾아오는 침묵은
                누구에게나 부담스럽습니다. 미리 질문을 몇 개 뽑아 두면 대화가 끊길 때마다 자연스럽게 다음 주제로 넘어갈 수 있습니다.
              </li>
              <li>
                <strong className="text-slate-900">모임 진행이 훨씬 수월해집니다</strong> — 워크숍, 동아리 첫 모임, 신입 환영회처럼 여러 사람이
                처음 만나는 자리에서 진행자가 질문 목록을 갖고 있으면 분위기를 이끌기가 한결 쉬워집니다.
              </li>
              <li>
                <strong className="text-slate-900">연인 사이의 대화가 깊어집니다</strong> — 오래 만난 커플일수록 대화 주제가 일상에 머무르기 쉽습니다.
                연인 질문을 활용하면 평소 물어보지 않던 이야기를 꺼낼 계기가 생깁니다.
              </li>
              <li>
                <strong className="text-slate-900">술자리가 지루해지지 않습니다</strong> — 마시기만 하는 술자리는 금방 지루해집니다. 질문을
                돌아가며 답하는 방식으로 게임처럼 진행하면 분위기가 훨씬 오래 유지됩니다.
              </li>
              <li>
                <strong className="text-slate-900">스스로를 돌아보는 계기가 됩니다</strong> — 깊은 대화 종류의 질문은 혼자 읽으면서 답을 생각해
                보기만 해도 의미가 있습니다. 일기를 쓰거나 생각을 정리할 때 주제로 활용하기 좋습니다.
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">질문 생성기 사용 방법 (단계별 가이드)</h2>
            <p>
              처음 사용하시는 분도 몇 초면 익숙해질 만큼 단순하지만, 기능을 충분히 활용하려면 다음 순서를 따라 보시기를 권합니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">1단계 — 질문 종류 선택</h3>
            <p>
              화면 위쪽의 버튼에서 상황에 맞는 종류를 고릅니다. 친구, 연인, 술자리, MBTI, 깊은 대화, 밸런스 게임 여섯 가지가 있으며, 각 버튼
              아래에는 어떤 상황에 어울리는지 짧은 설명이 함께 표시됩니다. 종류를 누르면 그 즉시 해당 종류의 질문이 새로 뽑히기 때문에
              여러 종류를 눌러 보면서 분위기를 비교해 볼 수 있습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">2단계 — 개수 선택</h3>
            <p>
              3개, 5개, 10개, 15개 중에서 필요한 만큼 고릅니다. 둘이서 짧게 이야기를 나눌 때는 3~5개면 충분하고, 여러 명이 모인 자리에서
              돌아가며 답할 때는 10~15개를 뽑아 두면 중간에 다시 뽑을 필요가 없어 편합니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">3단계 — 질문 뽑기</h3>
            <p>
              질문 뽑기 버튼을 누르면 선택한 개수만큼 질문이 번호와 함께 나열됩니다. 한 번 뽑을 때는 같은 질문이 중복되지 않으므로 안심하고
              사용하실 수 있습니다. 마음에 들지 않는 질문이 섞여 있다면 버튼을 다시 눌러 새로 뽑으면 됩니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">4단계 — 복사해서 활용하기</h3>
            <p>
              결과가 마음에 들면 전체 복사 버튼을 누릅니다. 번호가 붙은 질문 목록이 그대로 클립보드에 복사되어 카카오톡 단체방, 메모 앱,
              인스타그램 스토리 등 원하는 곳에 바로 붙여 넣을 수 있습니다. 모임 전날 미리 뽑아서 메모해 두면 당일에 훨씬 여유롭게 진행할 수
              있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">상황별 질문 활용법</h2>

            <h3 className="text-lg font-semibold text-slate-900">처음 만난 사이 — 친구 질문</h3>
            <p>
              소개팅, 신입 환영회, 새 학기 첫 모임처럼 서로를 전혀 모르는 상황에서는 가벼운 질문부터 시작하는 것이 정석입니다. 요즘 자주 듣는
              노래, 어릴 때 장래희망, 최근에 크게 웃은 일처럼 누구나 부담 없이 답할 수 있는 주제가 좋습니다. 이런 질문은 답하는 과정에서
              자연스럽게 취향과 성격이 드러나기 때문에, 몇 개만 주고받아도 상대가 어떤 사람인지 감이 잡힙니다.
            </p>
            <p>
              반대로 첫 만남에서 깊은 대화 종류의 질문을 던지는 것은 피하는 것이 좋습니다. “가장 외로웠던 순간은 언제인가요?” 같은 질문은
              충분히 친해진 뒤에야 의미가 있습니다. 아직 신뢰가 쌓이지 않은 상태에서 이런 질문을 받으면 대부분의 사람은 부담을 느끼고
              방어적으로 답하게 됩니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">연인 사이 — 연인 질문</h3>
            <p>
              연인 질문은 기념일이나 여행처럼 특별한 날에 활용하면 더욱 좋습니다. 서로 번갈아 가며 하나씩 답하는 방식으로 진행하면 자연스럽게
              대화가 이어집니다. 첫인상이 어땠는지, 가장 기억에 남는 순간이 언제인지, 앞으로 함께 무엇을 하고 싶은지 같은 질문은 관계를
              돌아보게 만들고 서로에 대한 마음을 다시 확인하는 계기가 됩니다.
            </p>
            <p>
              다만 서운했던 순간을 묻는 질문은 분위기가 좋을 때 꺼내는 것이 좋습니다. 이미 다툰 직후에 이런 질문을 던지면 대화가 아니라
              추궁이 되기 쉽습니다. 편안한 분위기에서 나온 솔직한 이야기가 관계를 단단하게 만듭니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">술자리 — 술자리 질문과 밸런스 게임</h3>
            <p>
              술자리에서는 돌아가며 답하는 게임 형식이 잘 어울립니다. 질문을 하나 뽑아 모두가 답하고, 가장 재미있는 답을 한 사람을 뽑는 식으로
              규칙을 정하면 분위기가 살아납니다. 밸런스 게임 종류는 특히 반응이 좋은데, 둘 중 하나를 고르게 한 다음 왜 그 선택을 했는지
              이유를 물으면 예상하지 못한 이야기가 쏟아져 나옵니다.
            </p>
            <p>
              술자리 질문 중에는 흑역사나 첫사랑처럼 사적인 주제가 포함되어 있습니다. 재미를 위한 질문이지만 상대가 곤란해하는 기색을 보이면
              강요하지 말고 넘어가는 배려가 필요합니다. 모두가 즐거워야 좋은 자리입니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">성향 이야기 — MBTI 질문</h3>
            <p>
              MBTI 질문은 성향의 차이를 이야기해 보기 위한 대화용 질문입니다. 약속이 취소되면 어떤 기분인지, 계획을 미리 세우는 편인지,
              고민이 생기면 누군가에게 말하는지 등 일상적인 상황을 묻기 때문에 답하기도 쉽고 서로의 차이를 발견하는 재미도 있습니다.
              다만 이 질문들은 정식 MBTI 검사가 아니므로 실제 유형을 판정하는 용도로는 사용하지 마세요.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">진솔한 자리 — 깊은 대화 질문</h3>
            <p>
              충분히 가까운 사이에서 오래 이야기를 나누고 싶을 때 사용합니다. 지금의 나를 만든 순간, 가장 두려운 것, 어떤 사람으로 기억되고
              싶은지 같은 질문은 답하는 데 시간이 걸리지만 그만큼 기억에 오래 남는 대화를 만들어 줍니다. 이런 질문을 던질 때는 질문한 사람이
              먼저 자기 이야기를 꺼내는 것이 좋습니다. 그래야 상대도 마음을 열고 답하게 됩니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">대화를 이어 가는 요령</h2>
            <p>
              질문을 뽑는 것보다 중요한 것은 답을 들은 뒤의 반응입니다. 상대가 답을 하면 고개를 끄덕이며 듣고, 이야기 속에서 궁금한 부분을
              하나 골라 다시 물어보세요. “그때 어떤 기분이었어?”, “왜 하필 그걸 골랐어?” 같은 짧은 되물음이 대화를 훨씬 길고 풍성하게
              만듭니다. 질문 목록을 순서대로 다 소화하려고 애쓸 필요는 전혀 없습니다.
            </p>
            <p>
              여러 명이 함께 있을 때는 한 사람만 계속 답하지 않도록 순서를 정해 주는 것이 좋습니다. 말수가 적은 사람에게는 밸런스 게임처럼
              선택만 하면 되는 질문을 먼저 던지면 부담 없이 대화에 참여할 수 있습니다. 대화를 잘 이끄는 사람은 말을 많이 하는 사람이 아니라
              모두가 말할 기회를 갖도록 만드는 사람입니다.
            </p>
            <p>
              마지막으로, 답을 평가하지 않는 태도가 중요합니다. 어떤 답이 나오든 “그렇구나”라고 받아 주는 것만으로도 상대는 편안함을 느낍니다.
              질문 생성기는 대화의 문을 열어 주는 도구일 뿐, 그 대화를 좋은 기억으로 만드는 것은 결국 듣는 사람의 태도입니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">개인정보와 이용 안내</h2>
            <p>
              이 질문 생성기는 사용자가 별도로 입력하는 정보가 없으며, 뽑은 질문 목록도 서버로 전송되거나 저장되지 않습니다. 모든 처리는
              사용자의 브라우저 안에서만 이루어집니다. 회원가입, 로그인, 이메일 입력이 전혀 필요 없으므로 개인정보에 대한 걱정 없이
              사용하실 수 있습니다.
            </p>
            <p>
              또한 휴대폰, 태블릿, PC 어디에서나 동일하게 작동합니다. 앱을 설치할 필요 없이 웹 브라우저만 있으면 되기 때문에, 모임 현장에서
              휴대폰으로 바로 열어 사용하기에 적합합니다. 질문 목록과 종류는 이용자들이 자주 찾는 상황을 반영해 꾸준히 보완하고 있습니다.
            </p>
          </div>
        </section>

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}

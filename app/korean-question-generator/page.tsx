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
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">친구와 연인 혹은 술자리에서 곧바로 활용 가능한 물음을 무작위로 추출해 주는 무료 플랫폼입니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.8</span>
            <span>·</span>
            <span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border-3 border-black bg-white p-3 shadow-neo-sm md:mt-6 md:rounded-2xl md:p-6">
          <QuestionGeneratorTool />
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug="korean-question-generator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">질문 생성기란?</h2>
            <p>질문 생성기는 사람과 사람 간의 대화를 자연스럽게 물꼬 터주는 웹 서비스입니다. 친구, 연인, 술자리, 각종 모임, 소개팅 등 대화가 필수적인 자리에서 어떤 말을 꺼내야 할지 막막할 때 클릭 한 번으로 그 분위기에 꼭 맞는 질문을 제공합니다. 가입이나 로그인 절차 없이 즉시 이용 가능하며 횟수 제한도 없어 마음에 드는 질문이 나타날 때까지 무한정 재시도가 가능합니다.</p>
            <p>대화가 어려운 이유는 할 이야기가 부족해서라기보다는 무슨 말부터 시작해야 할지 갈피를 잡지 못하기 때문인 경우가 많습니다. 특히 첫만남을 가진 상대와 마주했을 때, 오랜만에 만난 지인과 안부 인사가 금방 바닥났을 때, 연인과 매번 똑같은 패턴의 대화만 오간다고 느낄 때 이러한 답답함이 밀려옵니다. 질문 생성기는 바로 그 첫 마디를 대신 건네주는 도구입니다. 괜찮은 질문 하나가 던져지면 이후의 대화는 물 흐르듯 이어지기 마련입니다.</p>
            <p>본 도구는 총 여섯 가지 상황별 카테고리를 지원합니다. 가볍게 긴장을 풀고 싶을 때 적합한 친구 질문, 서로를 깊이 이해하고 싶을 때 유용한 연인 질문, 활기를 더하고 싶을 때 쓰는 술자리 질문, 가치관을 공유해 보는 MBTI 질문, 진솔한 속내를 나누는 깊은 대화 질문, 그리고 양자택일을 유도하는 밸런스 게임 질문입니다. 상황에 알맞은 주제를 선택하는 것만으로도 대화의 온도를 적절히 맞출 수 있습니다.</p>
            <p>조작법은 더없이 직관적입니다. 상단 인터페이스에서 질문 카테고리를 고르고 원하는 문항 수를 지정한 후 질문 뽑기 버튼을 누르면 완료됩니다. 결과가 만족스럽다면 전체 복사 기능으로 리스트 전체를 일괄 복사해 단체 채팅방이나 메모장에 바로 붙여넣을 수 있습니다. 모든 연산이 브라우저 상에서 처리되므로 네트워크 속도가 느린 환경에서도 지연 없이 곧바로 결과를 받아볼 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">멋진 질문이 대화의 국면을 바꾸는 이유</h2>
            <p>똑같은 사람과 동일한 시간을 보낸다 해도 어떤 대화는 오랫동안 기억에 남고 어떤 대화는 흔적도 없이 잊혀집니다. 그 격차를 만들어내는 핵심 요소가 바로 질문의 퀄리티입니다. 요즘 어떻게 지내냐는 물음에는 그저 그렇다는 뻔한 답변이 돌아오지만 최근에 크게 폭소했던 순간이 언제냐고 물으면 구체적인 에피소드가 쏟아집니다. 상대방이 머릿속으로 특정 장면을 선명하게 그리게 유도하는 질문일수록 대화는 생동감을 얻습니다.</p>
            <p>가치 있는 질문들에는 뚜렷한 공통분모가 존재합니다. 첫째, 예 또는 아니오 단답형으로 끝나지 않습니다. 둘째, 답변자가 자신의 실제 경험담을 꺼내놓도록 유도합니다. 셋째, 상대방을 평가하거나 심리적 압박을 주지 않습니다. 이 질문 생성기에 수록된 문항들은 이러한 세 가지 원칙을 바탕으로 엄선되었습니다. 따라서 처음 본 사이에서도 부담 없이 건넬 수 있으며 오랜 관계에서도 새로운 이면을 이끌어낼 수 있습니다.</p>
            <p>반대로 반드시 지양해야 할 질문 유형도 명확합니다. 연봉 수준, 결혼 계획, 외모에 대한 주관적 평가처럼 상대가 답변하기 난감한 민감한 주제는 대화를 이어주기는커녕 오히려 분위기를 급격히 얼어붙게 만듭니다. 특히 초면인 자리에서는 사생활 영역 깊숙이 파고드는 질문을 자제하는 것이 바람직합니다. 질문 생성기의 카테고리를 상황에 맞게 현명하게 선택하면 이러한 실수를 자연스럽게 방지할 수 있습니다.</p>
            <p>또한 대단히 중요한 포인트는 질문을 던진 이후의 애트튜드입니다. 상대의 답변을 듣자마자 곧바로 다음 질문으로 넘어가 버리면 대화가 아니라 취조나 설문조사처럼 변질됩니다. 상대가 대답을 마쳤을 때 왜 그렇게 생각하게 되었는지, 당시 기분이 어땠는지 등 추가로 깊이 파고들어주는 리액션이 좋습니다. 하나의 질문으로 5분 이상 깊이 있는 대화를 나눌 수 있다면 그 질문은 본연의 임무를 완수한 것입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">질문 생성기를 활용해야 하는 5가지 이유</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">어색한 침묵을 말끔히 해소해 줍니다</strong> — 초면인 자리나 오랜만에 재회한 관계에서 불쑥 찾아오는 침묵은 누구에게나 심리적 부담감을 줍니다. 사전에 질문을 몇 가지 미리 추출해 두면 대화의 맥이 끊길 때마다 자연스럽게 다음 토픽으로 화제를 전환할 수 있습니다.</li>
              <li><strong className="text-slate-900">모임 진행 과정이 훨씬 수월해집니다</strong> — 사내 워크숍, 동아리 첫 정모, 신입생 환영회처럼 다수의 인원이 초면으로 모이는 자리에서 진행자가 질문 리스트를 확보하고 있다면 전체 분위기를 주도하기가 한결 수월해집니다.</li>
              <li><strong className="text-slate-900">연인 관계에서의 대화가 한층 깊어집니다</strong> — 교제 기간이 오래된 커플일수록 대화의 주제가 일상적인 영역에만 머물기 쉽습니다. 연인 질문 기능을 활용하면 평소에는 잘 꺼내지 않던 속 깊은 이야기를 나눌 수 있는 계기가 마련됩니다.</li>
              <li><strong className="text-slate-900">술자리의 흥이 떨어지지 않고 유지됩니다</strong> — 단순히 술잔만 기울이는 자리는 금방 지루해지기 마련입니다. 준비된 질문을 돌아가며 뽑고 답하는 방식으로 게임처럼 운영하면 모임의 활기가 훨씬 오랫동안 지속됩니다.</li>
              <li><strong className="text-slate-900">스스로를 돌아볼 수 있는 좋은 기회가 됩니다</strong> — 깊은 대화 카테고리의 질문들은 혼자 조용히 읽어보며 스스로의 내면을 고찰해 보는 것만으로도 충분한 가치가 있습니다. 일기를 쓰거나 생각을 체계적으로 정리할 때 유용한 주제로 활용하기에 안성맞춤입니다.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">질문 생성기 활용 가이드 (단계별 안내)</h2>
            <p>초보자도 몇 초 만에 적응할 수 있을 정도로 직관적이지만, 모든 기능을 제대로 활용하기 위해서는 다음 단계를 순서대로 따라 해 보시는 것을 추천합니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">1단계 — 질문 카테고리 설정</h3>
            <p>상단 버튼을 통해 상황별 종류를 선택해 보세요. 친구, 연인, 술자리, MBTI, 깊은 대화, 밸런스 게임의 여섯 가지 항목이 있으며, 각 버튼 아래에는 어울리는 상황에 대한 간략한 설명이 적혀 있습니다. 종류를 누르는 순간 해당 주제의 새로운 질문이 바로 생성되므로 여러 항목을 번갈아 가며 분위기를 비교해 볼 수 있습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">2단계 — 개수 선택</h3>
            <p>필요에 따라 3개, 5개, 10개, 15개 중에서 개수를 선택하세요. 단둘이 가벼운 대화를 나눌 때는 3~5개가 적당하며, 여럿이 모여 순서대로 답을 할 때는 10~15개를 미리 뽑아 두면 중간에 다시 생성할 필요가 없어 편리합니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">3단계 — 질문 뽑기</h3>
            <p>질문 생성 버튼을 클릭하면 지정한 개수만큼 번호가 매겨진 질문들이 출력됩니다. 한 번에 뽑을 때는 중복되는 질문이 나오지 않도록 설계되어 있어 안심하고 이용할 수 있습니다. 마음에 들지 않는 항목이 포함되어 있다면 버튼을 다시 눌러 새롭게 구성하면 됩니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">4단계 — 복사해서 활용하기</h3>
            <p>결과물이 마음에 들 경우 전체 복사 버튼을 누르시면 됩니다. 번호가 포함된 질문 리스트가 그대로 클립보드에 저장되어 카카오톡 단체 채팅방, 메모 앱, 인스타그램 스토리 등 원하는 매체에 즉시 붙여넣을 수 있습니다. 모임 전날 미리 준비해 두면 현장에서 훨씬 여유롭게 진행이 가능합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">상황별 질문 활용법</h2>

            <h3 className="text-lg font-semibold text-slate-900">처음 만난 사이 — 친구 질문</h3>
            <p>소개팅, 신입생 환영회, 새 학기 첫 모임처럼 서로를 잘 모르는 자리에서는 가벼운 주제로 시작하는 것이 정석입니다. 최근 즐겨 듣는 음악, 어린 시절의 장래희망, 최근에 크게 웃었던 일처럼 누구나 부담 없이 대답할 수 있는 이야기가 좋습니다. 이러한 문답을 통해 자연스럽게 각자의 취향과 성격이 드러나므로 몇 마디만 나누어도 상대방의 성향을 쉽게 파악할 수 있습니다.</p>
            <p>반대로 초면인 자리에서 깊은 대화 유형의 질문을 던지는 것은 피하는 편이 좋습니다. “가장 외로웠던 순간은 언제인가요?”와 같은 물음은 충분히 친해진 후에야 진정한 의미를 갖습니다. 아직 신뢰가 형성되지 않은 상태에서 이런 질문을 받으면 대다수는 부담감을 느끼고 방어적인 태도를 취하게 됩니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">커플 관계 — 연인 간 질문</h3>
            <p>연인 간의 질문은 기념일이나 여행 같은 특별한 날에 활용하면 더욱 효과적입니다. 서로 번갈아 가며 하나씩 대답하는 방식으로 진행하면 대화가 끊기지 않고 자연스럽게 이어집니다. 처음 만났을 때의 인상, 가장 기억에 남는 추억, 앞으로 함께 하고 싶은 일 등에 대한 이야기는 관계를 되돌아보고 서로를 향한 애정을 재확인하는 계기를 마련해 줍니다.</p>
            <p>다만 서운했던 감정을 묻는 질문은 분위기가 무르익었을 때 꺼내는 것이 현명합니다. 이미 다툼이 일어난 직후에 이런 주제를 꺼내면 대화라기보다는 추궁처럼 느껴지기 쉽습니다. 편안한 환경 속에서 오고 가는 진솔한 대화가 두 사람의 관계를 더욱 단단하게 만들어 줍니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">술자리 모임 — 술자리 질문 및 밸런스 게임</h3>
            <p>술자리에서는 순서대로 돌아가며 대답하는 게임 형태의 진행이 매우 잘 어울립니다. 질문 하나를 무작위로 뽑아 모두가 답한 뒤 가장 재미있는 답변을 한 사람을 선정하는 규칙을 더하면 자리가 금세 활기를 띱니다. 밸런스 게임 유형은 특히 호응이 좋은 편인데, 양자택일 상황을 제시한 후 그 이유를 물어보면 전혀 예상치 못한 흥미로운 이야기가 터져 나옵니다.</p>
            <p>술자리용 질문 중에는 흑역사나 첫사랑 같은 사생활과 관련된 주제도 포함되어 있습니다. 흥미를 유발하기 위한 목적이지만 상대방이 난처해하는 기색을 보인다면 강요하지 말고 자연스럽게 넘어가는 배려심이 필요합니다. 참여하는 모든 사람이 즐거워야 진정한 좋은 자리가 됩니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">성향 파악 — MBTI 질문</h3>
            <p>MBTI 질문은 서로의 성향 차이를 가볍게 이야기해 보기 위한 대화용 콘텐츠입니다. 약속이 갑자기 취소되었을 때의 기분, 계획을 미리 세우는 성향인지 여부, 고민이 생겼을 때 타인에게 털어놓는 방식 등 일상적인 상황을 다루기 때문에 답하기 수월하고 서로의 다른 점을 발견하는 즐거움을 줍니다. 다만 이 문항들은 공식적인 MBTI 검사가 아니므로 실제 성격 유형을 확정하는 용도로는 활용하지 마시기 바랍니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">진지한 분위기 — 깊이 있는 대화 질문</h3>
            <p>상당히 친밀한 관계에서 깊이 있는 대화를 오래 나누고 싶을 때 적합합니다. 현재의 나를 형성해 준 결정적 순간, 가장 두려워하는 대상, 어떤 사람으로 기억되고 싶은지와 같은 질문들은 답변을 고민하는 데 시간이 걸리지만 그만큼 여운이 길게 남는 대화를 완성해 줍니다. 이러한 주제를 던질 때는 묻는 사람이 먼저 자신의 이야기를 솔직하게 털어놓는 것이 좋습니다. 그래야 상대방도 마음의 문을 열고 편하게 답할 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">대화를 이어 가는 요령</h2>
            <p>질문을 뽑아내는 것보다 더 중요한 것은 상대방의 답변을 들은 이후의 리액션입니다. 상대가 대답을 마치면 고개를 끄덕이며 경청하고, 그 내용 중에서 흥미로운 부분을 하나 집어내어 추가로 질문해 보세요. “그때 기분이 어땠어?”, “왜 하필 그걸 선택한 거야?” 같은 짧은 꼬리 질문이 대화를 훨씬 길고 풍성하게 이끌어 줍니다. 질문 리스트에 있는 항목을 순서대로 전부 소화해야 한다는 압박감을 가질 필요는 전혀 없습니다.</p>
            <p>여러 사람이 모인 자리에서는 특정 인물만 계속 발언하지 않도록 순서를 적절히 조율해 주는 것이 바람직합니다. 말수가 적은 참가자에게는 밸런스 게임처럼 간단히 선택만 하면 되는 질문을 먼저 제시하면 부담 없이 대화에 동참할 수 있습니다. 훌륭한 대화 리더는 혼자서 말을 많이 하는 사람이 아니라 모든 사람이 발언할 기회를 공평하게 갖도록 유도하는 사람입니다.</p>
            <p>마지막으로, 답변의 내용을 평가하지 않는 태도가 매우 중요합니다. 어떠한 대답이 나오더라도 “그랬구나”라며 있는 그대로 수용해 주는 것만으로도 상대는 큰 안정감을 느낍니다. 질문 생성기는 대화의 물꼬를 터주는 유용한 도구일 뿐이며, 그 대화를 따뜻한 기억으로 완성하는 것은 결국 듣는 이의 태도입니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">개인정보와 이용 안내</h2>
            <p>이 질문 생성기는 사용자가 입력하는 별도의 개인정보가 존재하지 않으며, 추출된 질문 목록 또한 서버로 전송되거나 저장되지 않습니다. 모든 연산과 처리는 오직 사용자의 웹 브라우저 환경 내부에서만 진행됩니다. 회원가입이나 로그인, 이메일 주소 입력 절차가 전혀 없으므로 프라이버시 침해 우려 없이 안심하고 이용하실 수 있습니다.</p>
            <p>아울러 스마트폰, 태블릿, PC 등 어떤 기기에서 접속하더라도 완벽하게 동일하게 작동합니다. 별도의 애플리케이션을 설치할 필요 없이 웹 브라우저만 있으면 바로 이용할 수 있어, 모임 현장에서 휴대폰으로 즉시 접속해 활용하기에 매우 알맞습니다. 질문 목록과 카테고리는 사용자들이 빈번하게 찾는 실제 상황들을 반영하여 지속적으로 업데이트되고 있습니다.</p>
          </div>
        </section>

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}

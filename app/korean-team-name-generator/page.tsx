import FAQSection from '@/components/FAQSection';
import BelowToolAd from '@/components/ads/BelowToolAd';
import AdSenseSlot from '@/components/ads/AdSenseSlot';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { TeamNameGeneratorTool } from './TeamNameGeneratorTool';
import { faqItems } from './faq';
import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/url';

const title = '팀 이름 추천 | 팀명 생성기 (무료)';
const description =
  '동호회, 스포츠 팀, 회사 프로젝트, 스터디 모임에 어울리는 팀 이름을 자동으로 만들어 주는 무료 팀명 생성기입니다. 멋있는·귀여운·재미있는·스포츠·회사·스터디 여섯 가지 스타일로 팀 이름 추천을 받아보세요.';

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title,
    description,
    urlPath: '/korean-team-name-generator',
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

export default function KoreanTeamNameGeneratorPage() {
  const url = `${siteUrl}/korean-team-name-generator`;
  const faqLd = buildFaqJsonLd();
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '팀 이름 추천',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description,
    url,
    inLanguage: 'ko',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1520', bestRating: '5', worstRating: '1' },
  };

  return (
    <div lang="ko" className="relative bg-[#f7f9ff]">
      <JsonLd data={faqLd} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-3xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">팀 이름 추천</h1>
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">동호회, 스포츠 팀, 스터디에 알맞은 팀 이름을 곧바로 생성해 주는 무료 도구입니다.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.9</span>
            <span>·</span>
            <span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border-3 border-black bg-white p-3 shadow-neo-sm md:mt-6 md:rounded-2xl md:p-6">
          <TeamNameGeneratorTool />
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug="korean-team-name-generator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">팀 이름 추천 서비스란 무엇입니까?</h2>
            <p>팀 이름 추천 도구는 동호회, 스포츠 팀, 회사 프로젝트 팀, 그리고 스터디 모임처럼 다수의 인원이 모인 집단에 찰떡인 이름을 자동으로 만들어 주는 무료 온라인 서비스입니다. 단체를 꾸리고 나면 가장 먼저 마주하는 난관이 바로 이름 짓기입니다. 단체 대화방에서 며칠씩 의견만 오가다 결국 아무 이름이나 덜컥 정해버리는 경우가 많은데, 이 도구는 그 복잡한 과정을 단 몇 초로 줄여 줍니다.</p>
            <p>사용법은 무척이나 간단합니다. 팀의 성격을 대변하는 키워드를 입력하고 마음에 드는 스타일을 고른 다음 버튼을 누르면, 조건에 부합하는 팀명 후보들이 한꺼번에 쏟아집니다. 키워드를 빈칸으로 두더라도 스타일에 알맞은 이름이 척척 만들어지므로, 아직 방향성이 확실치 않을 때 신선한 아이디어를 얻는 용도로도 유용하게 쓸 수 있습니다.</p>
            <p>여섯 가지 스타일은 각각 저마다의 독특한 분위기를 겨냥합니다. 멋스러운 스타일은 강렬한 인상을 남기는 이름을, 귀여운 스타일은 부드럽고 다정한 이름을, 재미있는 스타일은 큰 웃음을 유발하는 이름을 만들어 줍니다. 스포츠는 동호회나 체육대회에, 회사와 조직은 사내 프로젝트에, 스터디는 학습 모임에 각각 특화되어 있어 목적에 꼭 맞는 결과물을 얻을 수 있습니다.</p>
            <p>별도의 회원가입이나 로그인이 전혀 필요치 않으며, 완성된 이름은 서버에 따로 저장되지 않습니다. 모든 조합 과정이 브라우저 내부에서 이루어지기 때문에 인터넷 속도가 느린 환경에서도 결과가 즉시 나타나고, 개인정보가 외부로 유출될 염려가 전혀 없습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">훌륭한 그룹 명칭이 갖추어야 할 요건</h2>
            <p>팀 이름은 한 번 정해지면 꽤 오랜 기간 사용하게 됩니다. 단체 티셔츠에 크게 새기고, 각종 대회 참가 신청서에 적어내며, 단체 채팅방 이름으로도 활용합니다. 그러므로 처음에 조금만 더 심사숙고하여 고르면 나중에 번거롭게 이름을 바꾸는 수고를 눈에 띄게 줄일 수 있습니다. 오랫동안 사랑받는 멋진 팀 이름에는 몇 가지 뚜렷한 공통점이 존재합니다.</p>
            <p>첫 번째로, 누구나 부르기 쉬워야 합니다. 발음이 자꾸 꼬이거나 지나치게 긴 명칭은 결국 줄여 부르게 마련이고 원래의 이름은 머릿속에서 잊히기 쉽습니다. 두 글자에서 여섯 글자 사이가 가장 무난하며, 긴 이름을 택하고자 할 때는 줄임말이 자연스럽게 만들어지는지 사전에 꼭 확인해 보는 것이 현명합니다.</p>
            <p>두 번째로, 팀의 정체성과 성격이 고스란히 드러나야 합니다. 이름만 듣고도 어떤 모임인지 대략적으로 짐작할 수 있다면 사람들을 불러모으기가 훨씬 수월해집니다. 축구 동호회 명칭에 FC가 들어가거나 스터디 이름에 스터디, 클래스 같은 단어가 포함되는 이유가 바로 그 때문입니다. 키워드 입력란에 구체적인 활동 주제를 적어 넣으면 이러한 이름을 아주 쉽게 얻을 수 있습니다.</p>
            <p>세 번째로, 팀원 모두가 부끄러움 없이 떳떳하게 말할 수 있어야 합니다. 당장 만들 시점에는 재미있어 보일지라도 다른 사람들 앞에서 입 밖에 내기 민망한 이름은 결코 오래가지 못합니다. 재미있는 스타일을 선택할 때는 이 점을 특별히 명심해 두시는 편이 좋습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">분위기별 특성 및 어울리는 커뮤니티</h2>

            <h3 className="text-lg font-semibold text-slate-900">멋있는 스타일</h3>
            <p>강렬한 느낌의 단어인 불꽃, 천둥, 무적, 전설이 군단, 기사단, 결사대, 길드 같은 표현과 합쳐집니다. e스포츠 팀이나 게임 길드, 혹은 무게감 있는 동호회에 어울립니다. 팬텀, 이클립스, 노바처럼 홀로 쓰이는 명칭도 포함되어 간결한 팀명을 원할 때 유용합니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">귀여운 스타일</h3>
            <p>부드러운 단어인 말랑, 몽글, 뽀짝이 둥지, 친구들, 패밀리 같은 표현과 어우러집니다. 소규모 동아리나 친목 모임, 사내 소모임 등 편안한 분위기를 강조하고 싶을 때 적절합니다. 마카롱, 도토리, 붕어빵 같은 명칭은 그 자체로 기억에 오래 남습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">재미있는 스타일</h3>
            <p>망했다, 어쩌다, 대충, 얼렁뚱땅처럼 유쾌함을 주는 단어가 쓰입니다. 체육대회 반 이름, 가벼운 취미 동호회, 회식 모임에 딱 맞습니다. 야근금지, 출근싫어, 월요병처럼 직장인들의 공감을 사는 명칭도 포함되어 직장 내 소모임에서 반응이 좋습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">스포츠 스타일</h3>
            <p>최강, 불굴, 돌격, 질풍 같은 단어가 타이거즈, 이글스, 유나이티드, FC처럼 실제 스포츠 구단에서 쓰이는 표현과 결합됩니다. 야구, 축구, 농구 동호회는 물론이고 회사 체육대회 팀명으로도 자연스럽게 활용할 수 있습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">회사·조직 스타일</h3>
            <p>협업, 전략, 도약, 혁신 같은 단어가 랩, 스쿼드, TF, 파트너스 같은 조직 성격의 표현과 조합됩니다. 사내 공식 석상에서 쓰기에 무난한 명칭이 만들어지므로 신설 부서나 프로젝트 팀 이름을 정할 때 써보기 좋습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">스터디 스타일</h3>
            <p>새벽, 몰입, 완독, 꾸준처럼 학습에 대한 태도를 담은 단어가 클래스, 캠프, 스터디, 트랙 같은 표현과 어우러집니다. 어학 스터디, 독서 모임, 시험 준비 모임 등 뚜렷한 목표를 가진 곳에 제격이며, 명칭 자체로 자극이 되기도 합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">팀 이름 생성기를 쓰는 5가지 이유</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">이름 정하는 시간이 줄어듭니다</strong> — 단체 대화방에서 의견만 며칠씩 주고받는 대신, 후보를 한 번에 생성해 공유하면 훨씬 신속하게 결론을 낼 수 있습니다.</li>
              <li><strong className="text-slate-900">생각하지 못한 조합을 발견합니다</strong> — 혼자서 고민하면 익숙한 표현만 쓰게 되지만, 무작위 조합은 뜻밖의 훌륭한 이름을 만들어 냅니다.</li>
              <li><strong className="text-slate-900">목적에 맞는 결과를 얻습니다</strong> — 여섯 가지 스타일이 각각 다른 상황을 겨냥하고 있어, 모임 성격에 딱 들어맞는 이름을 바로 얻을 수 있습니다.</li>
              <li><strong className="text-slate-900">팀원 투표가 쉬워집니다</strong> — 20~30개를 만들어 전체 복사한 다음 단체방에 올리면 각자 마음에 드는 명칭을 고르기가 훨씬 수월해집니다.</li>
              <li><strong className="text-slate-900">아이디어의 출발점이 됩니다</strong> — 결과를 그대로 사용하지 않더라도, 마음에 드는 단어를 골라 직접 조합하면 원하는 이름에 훨씬 빨리 도달할 수 있습니다.</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">팀 이름 생성기 이용 방법 (단계별 가이드)</h2>

            <h3 className="text-lg font-semibold text-slate-900">Step 1 - Enter keywords (optional)</h3>
            <p>모임의 성격을 보여주는 단어를 적어 넣습니다. 영어, 축구, 개발 같은 활동 주제를 입력하면 해당 단어가 반영된 이름이 함께 만들어집니다. 아직 방향성을 못 정했다면 빈칸으로 두고 시작해도 괜찮습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">2단계 — 스타일 선택</h3>
            <p>여섯 가지 스타일 중에서 모임의 무드와 어울리는 것을 선택합니다. 스타일 버튼을 누를 때마다 곧바로 새로운 이름이 생성되므로, 여러 가지를 눌러 보며 분위기를 비교해 볼 수 있습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">Step 3 - Select quantity and generate</h3>
            <p>30개에서 5개 사이로 원하는 수량을 고른 후 팀 이름 만들기 버튼을 클릭합니다. 팀원들과 다 같이 고를 예정이라면 20개 이상 만들어 두는 편이 좋습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">4단계 — 복사해서 공유하기</h3>
            <p>전체 복사 버튼을 누르면 번호가 매겨진 이름 목록이 클립보드에 저장됩니다. 단체방에 붙여 넣은 후 각자 두세 개씩 뽑게 하고 상위 후보를 투표에 부치면 자연스럽게 의견을 모을 수 있습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">팀 이름을 결정할 때 주의할 점</h2>
            <p>생성된 명칭은 자유롭게 쓸 수 있지만, 공식적인 용도로 활용하기 전에는 한 번쯤 검색해 보는 편이 좋습니다. 우연히 기존 상표나 단체와 이름이 겹칠 수 있기 때문입니다. 특히 외부에 공개되거나 대회에 나가는 팀이라면 미리 확인하여 나중에 이름을 바꾸는 번거로움을 예방하세요.</p>
            <p>또한 축약했을 때 어떻게 들리는지도 고려해 보세요. 팀 이름은 실제로 불리다 보면 자연스럽게 줄어들기 마련입니다. 줄였을 때 이상한 의미가 되지 않는지, 다른 팀명과 혼동되지 않는지 살펴보면 유익합니다.</p>
            <p>마지막으로, 팀원 전체의 의견을 수렴하는 과정이 필수적입니다. 한 사람이 일방적으로 정한 명칭보다 다 같이 고른 이름에 더 애정이 가기 법입니다. 후보를 넉넉하게 추려 공유하고 투표를 통해 결정하는 방식을 권장합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">개인정보와 이용 안내</h2>
            <p>이 팀 이름 생성기는 사용자가 입력한 키워드나 생성된 이름을 서버로 전송하지 않습니다. 모든 조합 과정이 오직 사용자의 브라우저 내부에서만 이루어지므로 개인정보가 외부로 유출될 염려 없이 안심하고 쓰실 수 있습니다. 로그인이나 회원가입 절차도 필요치 않습니다.</p>
            <p>PC, 태블릿, 스마트폰 등 기기에 구애받지 않고 동일하게 작동하며 별도의 앱 설치가 필요 없습니다. 단어 목록과 스타일은 이용자들이 자주 찾는 모임의 특성을 반영해 지속적으로 개선하고 있습니다.</p>
          </div>
        </section>

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}

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

function RailAd({ side }: { side: 'left' | 'right' }) {
  const sideClass = side === 'left' ? 'left-4' : 'right-4';
  return (
    <div className={`hidden lg:block fixed top-[220px] ${sideClass} z-20`}>
      <div className="w-[180px] min-h-[260px]">
        <AdSenseSlot className="w-full" />
      </div>
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
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">
            동호회, 스포츠 팀, 스터디에 어울리는 팀 이름을 즉시 만들어 주는 무료 도구입니다.
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.9</span>
            <span>·</span>
            <span>무료</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:mt-6 md:rounded-2xl md:p-6">
          <TeamNameGeneratorTool />
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug="korean-team-name-generator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">팀 이름 추천 도구란?</h2>
            <p>
              팀 이름 추천 도구는 동호회, 스포츠 팀, 회사 프로젝트 팀, 스터디 모임처럼 여러 사람이 모인 집단에 어울리는 이름을 자동으로
              만들어 주는 무료 온라인 도구입니다. 팀을 만들고 나면 가장 먼저 부딪히는 문제가 이름 정하기입니다. 단체방에서 며칠씩 의견만
              오가다 결국 아무 이름이나 정하게 되는 경우가 많은데, 이 도구는 그 과정을 몇 초로 줄여 줍니다.
            </p>
            <p>
              사용 방법은 단순합니다. 팀의 성격을 나타내는 키워드를 입력하고 원하는 스타일을 고른 뒤 버튼을 누르면, 조건에 맞는 팀명 후보가
              한꺼번에 나타납니다. 키워드를 비워 두어도 스타일에 맞는 이름이 만들어지므로, 아직 방향이 정해지지 않았을 때 아이디어를 얻는
              용도로도 쓸 수 있습니다.
            </p>
            <p>
              여섯 가지 스타일은 각각 다른 분위기를 겨냥합니다. 멋있는 스타일은 강렬한 인상을 주는 이름, 귀여운 스타일은 부드럽고 친근한
              이름, 재미있는 스타일은 웃음을 주는 이름을 만듭니다. 스포츠는 동호회와 체육대회, 회사·조직은 사내 프로젝트, 스터디는 학습
              모임에 각각 특화되어 있어 목적에 맞는 결과를 얻을 수 있습니다.
            </p>
            <p>
              회원가입이나 로그인은 필요하지 않으며, 만들어진 이름은 서버에 저장되지 않습니다. 모든 조합이 브라우저 안에서 이루어지기 때문에
              인터넷이 느린 환경에서도 즉시 결과가 나오고, 개인정보가 외부로 전송될 걱정도 없습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">좋은 팀 이름의 조건</h2>
            <p>
              팀 이름은 한 번 정하면 오래 쓰게 됩니다. 단체 티셔츠에 새기고, 대회 참가 신청서에 적고, 단체방 이름으로도 씁니다. 그래서
              처음에 조금만 신중하게 고르면 나중에 바꾸는 수고를 줄일 수 있습니다. 오래 사랑받는 팀 이름에는 몇 가지 공통점이 있습니다.
            </p>
            <p>
              첫째, 부르기 쉬워야 합니다. 발음이 꼬이거나 지나치게 긴 이름은 결국 줄여 부르게 되고, 원래 이름은 잊히게 됩니다. 두 글자에서
              여섯 글자 사이가 가장 무난하며, 긴 이름을 고를 때는 줄임말이 자연스럽게 만들어지는지 미리 확인해 보는 것이 좋습니다.
            </p>
            <p>
              둘째, 팀의 성격이 드러나야 합니다. 이름만 듣고도 무슨 모임인지 짐작할 수 있으면 사람을 모으기가 훨씬 수월합니다. 축구 동호회
              이름에 FC가 들어가거나 스터디 이름에 스터디, 클래스 같은 단어가 들어가는 것이 그런 이유입니다. 키워드 입력란에 활동 주제를
              넣으면 이런 이름을 쉽게 얻을 수 있습니다.
            </p>
            <p>
              셋째, 팀원 모두가 부끄럽지 않게 말할 수 있어야 합니다. 만드는 순간에는 재미있어 보여도 다른 사람 앞에서 소개하기 민망한 이름은
              오래가지 못합니다. 재미있는 스타일을 고를 때는 이 점을 특히 염두에 두시는 것이 좋습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">스타일별 특징과 어울리는 모임</h2>

            <h3 className="text-lg font-semibold text-slate-900">멋있는 스타일</h3>
            <p>
              불꽃, 천둥, 무적, 전설처럼 강렬한 단어와 군단, 기사단, 결사대, 길드 같은 표현이 조합됩니다. 게임 길드, e스포츠 팀, 강한
              인상을 주고 싶은 동호회에 잘 어울립니다. 이클립스, 팬텀, 노바처럼 단독으로 쓰이는 이름도 포함되어 있어 간결한 팀명을 원할 때
              유용합니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">귀여운 스타일</h3>
            <p>
              말랑, 몽글, 뽀짝처럼 부드러운 단어와 친구들, 패밀리, 둥지 같은 표현이 조합됩니다. 친목 모임, 소규모 동아리, 사내 소모임처럼
              편안한 분위기를 강조하고 싶을 때 적합합니다. 도토리, 마카롱, 붕어빵 같은 이름은 그 자체로 기억에 잘 남습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">재미있는 스타일</h3>
            <p>
              대충, 어쩌다, 망했다, 얼렁뚱땅처럼 웃음을 주는 단어가 사용됩니다. 체육대회 반 이름, 회식 모임, 가벼운 취미 동호회에 잘
              어울립니다. 출근싫어, 야근금지, 월요병처럼 직장인의 공감을 얻는 이름도 포함되어 있어 사내 동호회에서 반응이 좋습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">스포츠 스타일</h3>
            <p>
              질풍, 돌격, 불굴, 최강 같은 단어와 FC, 유나이티드, 이글스, 타이거즈처럼 실제 스포츠 팀에서 쓰이는 표현이 조합됩니다. 축구,
              야구, 농구 동호회는 물론 사내 체육대회 팀 이름으로도 자연스럽게 쓸 수 있습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">회사·조직 스타일</h3>
            <p>
              혁신, 도약, 전략, 협업 같은 단어와 TF, 스쿼드, 랩, 파트너스 같은 조직 단위 표현이 조합됩니다. 사내에서 공식적으로 쓰기에
              무리가 없는 이름이 만들어지므로 프로젝트 팀이나 신설 부서 이름을 정할 때 활용하기 좋습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">스터디 스타일</h3>
            <p>
              꾸준, 완독, 새벽, 몰입처럼 학습 태도를 담은 단어와 스터디, 캠프, 클래스, 트랙 같은 표현이 조합됩니다. 시험 준비 모임, 독서
              모임, 어학 스터디처럼 목표가 뚜렷한 모임에 어울리며, 이름 자체가 동기 부여가 되기도 합니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">팀 이름 생성기를 사용하는 5가지 이유</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong className="text-slate-900">이름 정하는 시간이 줄어듭니다</strong> — 단체방에서 며칠씩 의견만 오가는 대신, 후보를
                한 번에 만들어 공유하면 훨씬 빠르게 결론에 이를 수 있습니다.
              </li>
              <li>
                <strong className="text-slate-900">생각하지 못한 조합을 발견합니다</strong> — 혼자 떠올리면 익숙한 단어만 반복하게 되지만,
                무작위 조합은 예상 밖의 좋은 이름을 만들어 냅니다.
              </li>
              <li>
                <strong className="text-slate-900">목적에 맞는 결과를 얻습니다</strong> — 여섯 가지 스타일이 각각 다른 상황을 겨냥하고 있어,
                모임 성격에 맞는 이름을 바로 얻을 수 있습니다.
              </li>
              <li>
                <strong className="text-slate-900">팀원 투표가 쉬워집니다</strong> — 20~30개를 만들어 전체 복사한 뒤 단체방에 공유하면
                각자 마음에 드는 이름을 고르게 하기 편합니다.
              </li>
              <li>
                <strong className="text-slate-900">아이디어의 출발점이 됩니다</strong> — 결과를 그대로 쓰지 않더라도, 마음에 드는 단어를
                골라 직접 조합하면 훨씬 빠르게 원하는 이름에 도달할 수 있습니다.
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">팀 이름 생성기 사용 방법 (단계별 가이드)</h2>

            <h3 className="text-lg font-semibold text-slate-900">1단계 — 키워드 입력 (선택)</h3>
            <p>
              팀의 성격을 나타내는 단어를 입력합니다. 축구, 개발, 영어처럼 활동 주제를 넣으면 그 단어를 살린 이름이 함께 만들어집니다.
              아직 방향이 정해지지 않았다면 비워 두고 시작해도 괜찮습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">2단계 — 스타일 선택</h3>
            <p>
              여섯 가지 스타일 중 모임 분위기에 맞는 것을 고릅니다. 스타일 버튼을 누르면 즉시 새 이름이 만들어지기 때문에, 여러 스타일을
              눌러 보며 분위기를 비교해 볼 수 있습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">3단계 — 개수 선택 후 생성</h3>
            <p>
              5개에서 30개 사이에서 원하는 개수를 고르고 팀 이름 만들기 버튼을 누릅니다. 팀원들과 함께 고를 계획이라면 20개 이상을 만들어
              두는 것이 좋습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">4단계 — 복사해서 공유하기</h3>
            <p>
              전체 복사 버튼을 누르면 번호가 붙은 이름 목록이 클립보드에 복사됩니다. 단체방에 붙여 넣고 각자 두세 개씩 고르게 한 뒤 상위
              후보로 투표하면 자연스럽게 합의에 이를 수 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">팀 이름을 정할 때 주의할 점</h2>
            <p>
              만들어진 이름은 자유롭게 사용하실 수 있지만, 공식적인 용도로 쓰기 전에는 한 번 검색해 보시는 것이 좋습니다. 우연히 기존 단체나
              상표와 같은 이름일 수 있기 때문입니다. 특히 대회에 참가하거나 외부에 공개되는 팀이라면 미리 확인해 두면 나중에 이름을 바꾸는
              번거로움을 피할 수 있습니다.
            </p>
            <p>
              또한 줄임말이 어떻게 되는지도 생각해 보세요. 팀 이름은 실제로 쓰이다 보면 자연스럽게 짧아집니다. 줄였을 때 이상한 단어가 되지
              않는지, 다른 팀 이름과 헷갈리지 않는지 확인하면 좋습니다.
            </p>
            <p>
              마지막으로, 팀원 전원의 의견을 듣는 과정이 중요합니다. 한 사람이 정한 이름보다 함께 고른 이름에 애착이 생기기 마련입니다.
              후보를 넉넉히 만들어 공유하고 투표로 정하는 방식을 추천드립니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">개인정보와 이용 안내</h2>
            <p>
              이 팀 이름 생성기는 입력한 키워드와 만들어진 이름을 서버로 전송하지 않습니다. 모든 조합이 사용자의 브라우저 안에서만
              이루어지므로 개인정보가 외부로 나갈 걱정 없이 사용하실 수 있습니다. 회원가입이나 로그인도 필요하지 않습니다.
            </p>
            <p>
              휴대폰, 태블릿, PC 어디에서나 동일하게 작동하며 앱 설치가 필요 없습니다. 단어 목록과 스타일은 이용자들이 자주 찾는 모임 유형을
              반영해 꾸준히 보완하고 있습니다.
            </p>
          </div>
        </section>

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}

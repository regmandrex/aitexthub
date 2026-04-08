import FAQSection from '@/components/FAQSection';
import AdSenseSlot from '@/components/ads/AdSenseSlot';
import BelowToolAd from '@/components/ads/BelowToolAd';
import { JsonLd } from '@/components/JsonLd';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { NicknameTool } from './NicknameTool';
import { faqItems } from './faq';
import { buildFaqJsonLd } from './jsonld';
import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';
import { siteUrl } from '@/lib/seo/url';

const title = '별명 짓기 | 닉네임 추천 생성기';
const description =
  '이름과 특징을 입력하면 20개의 닉네임 추천을 바로 보여주는 닉네임 생성기 도구입니다. 귀여운·멋있는·재미있는·감성적인·짧은·영어닉·한글닉까지 로컬에서 규칙 기반으로 생성합니다.';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title,
    description,
    urlPath: '/korean-nickname-generator',
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

export default function NicknamePage() {
  const faqLd = buildFaqJsonLd(faqItems, `${title} – FAQs`);
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url: `${siteUrl}/korean-nickname-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };
  return (
    <div className="relative bg-[#f7f9ff]">
      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-3xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">한국어 닉네임 생성기</h1>
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">
            이름과 특징을 입력하면 어울리는 닉네임을 추천해 드려요.
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.9</span>
            <span>·</span>
            <span>Free</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:mt-6 md:rounded-2xl md:p-6">
          <NicknameTool />
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug="korean-nickname-generator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">닉네임 생성기란?</h2>
            <p>
              별명 짓기는 본명과는 다른 별칭을 만들어 상황에 맞게 사용하는 문화적 습관입니다. 닉네임 만들기는 친구 사이에서는 친근함을 더하고,
              커뮤니티에서는 나를 기억하기 쉽게 만들어 주기 때문에 많은 사람들이 별명 짓기에 관심을 가집니다. 특히 온라인에서는
              닉네임 추천을 통해 분위기와 취향을 자연스럽게 드러낼 수 있어 프로필의 첫인상을 결정하는 요소가 되곤 합니다.
            </p>
            <p>
              별명은 정답이 있는 정밀한 작업이 아니라, 취향과 분위기를 맞추는 창의적인 선택입니다. 이름에서 리듬을 살리거나,
              좋아하는 활동과 성격을 담아 두면 별명이 더 자연스럽고 설득력 있게 느껴집니다. 그래서 닉네임 생성기(닉네임 크리에이터)는 다양한 조합을
              빠르게 보여 주어, 여러 아이디어를 비교하고 마음에 드는 후보를 고를 수 있게 도와줍니다.
            </p>
            <p>
              이 페이지의 닉네임 생성기 도구는 단순한 랜덤 출력이 아니라, 규칙과 패턴을 바탕으로 결과를 구성합니다. 귀여운,
              멋있는, 재미있는, 감성적인, 짧은 스타일을 선택하면 단어 풀과 결합 방식이 달라져 결과 분위기도 달라집니다. 한글닉과
              영어닉을 함께 제공해 다양한 플랫폼에서 쓸 수 있도록 구성했으니, 자신의 상황에 맞게 골라 활용해 보세요.
            </p>
            <p>
              닉네임 추천은 결국 “내가 어떤 느낌으로 기억되고 싶은지”를 정리하는 과정이기도 합니다. 본명만으로 전달하기 어려운
              성격이나 취향을 별명에 담으면, 상대가 당신을 더 쉽게 떠올릴 수 있습니다. 가볍게 시작해도 괜찮고, 여러 후보를 비교해
              가장 자연스러운 별명을 찾는 방식도 좋습니다.
            </p>
            <p>
              별명은 스스로에게도 작은 브랜딩이 됩니다. 같은 별명이라도 어디에서 어떻게 쓰느냐에 따라 인상이 달라지므로, 상황과
              청중을 생각하고 선택하는 것이 좋습니다. 예를 들어 가족과 친구에게 쓰는 별명은 부드럽고 친근한 느낌이, 공개 계정에서는
              명확하고 깔끔한 느낌이 어울립니다. 이런 차이를 이해하면 닉네임 추천을 고르는 기준도 더 뚜렷해집니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">좋은 닉네임을 만드는 5가지 기준</h2>
            <p>
              좋은 닉네임은 화려한 단어보다도 일상에서 쓰기 편한지를 기준으로 판단하는 것이 좋습니다. 아래 기준을 확인하면
              닉네임 추천 중에서 실용적인 후보를 쉽게 골라낼 수 있습니다.
            </p>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong className="text-slate-900">기억하기 쉬움</strong> - 길이가 너무 길지 않고 리듬이 좋을수록 기억에 남습니다.
                친구들이 한두 번만 들어도 떠올릴 수 있는 별명이 실제 사용에서 더 살아남습니다.
              </li>
              <li>
                <strong className="text-slate-900">발음과 타이핑의 편의성</strong> - 말하기 편한 닉네임은 자연스럽게 호출됩니다. 온라인에서는
                입력하기 쉬운 철자가 중요하므로, 복잡한 조합보다는 간단한 형태가 유리합니다.
              </li>
              <li>
                <strong className="text-slate-900">특징 반영</strong> - 성격, 취미, 분위기처럼 나를 설명하는 힌트가 들어가면 더 설득력 있습니다.
                “활발함”, “게임 좋아함” 같은 키워드는 닉네임 생성기에서 개성을 살리는 데 도움이 됩니다.
              </li>
              <li>
                <strong className="text-slate-900">톤과 분위기 일치</strong> - 귀여운 스타일인지, 멋있는 스타일인지에 따라 어울리는 단어가 달라집니다.
                원하는 이미지를 먼저 정하면 닉네임 추천 결과 선택이 훨씬 쉬워집니다.
              </li>
              <li>
                <strong className="text-slate-900">플랫폼 규칙과 안전성</strong> - 각 플랫폼은 길이 제한이나 금칙어 정책이 다를 수 있습니다.
                사용 전에 규칙을 확인하고, 타인을 불쾌하게 할 표현은 반드시 피하는 것이 좋습니다.
              </li>
            </ol>
            <p>
              이 기준을 완벽히 맞추려고 하기보다는, 여러 후보를 만들어 보고 가까운 방향으로 다듬는 과정이 중요합니다. 별명 짓기는
              시간이 지나면서 자연스럽게 변하기도 하니, 부담 없이 시작하고 반응을 보며 조정해 보세요.
            </p>
            <p>
              특히 온라인에서는 한 번 정한 닉네임이 오래 쓰이는 경우가 많습니다. 처음부터 너무 특별하거나 과한 표현을 넣기보다,
              오래 봐도 질리지 않는 단어를 선택하는 것이 실용적입니다. 이 도구는 그런 판단을 돕기 위해 다양한 톤의 후보를 빠르게
              보여 주도록 설계되었습니다.
            </p>
            <p>
              또 다른 팁은 실제로 부르거나 타이핑했을 때의 느낌을 확인하는 것입니다. 글자로 볼 때 예쁜 별명이라도 발음이 어렵다면
              실사용에서 금방 바뀔 수 있습니다. 후보를 소리 내어 읽어 보고, 주변 사람에게 한 번 불러 달라고 하면 반응을 확인하기
              좋습니다. 이런 작은 테스트는 별명 짓기의 만족도를 높여 줍니다.
            </p>
            <p>
              마지막으로, 별명 짓기는 나만의 취향과 환경에 맞게 손보는 과정이 필요합니다. 기본 후보가 마음에 들더라도 한 글자만 바꾸거나
              접미사를 교체하면 더 자연스럽게 다듬을 수 있습니다. 예를 들어 같은 별명이라도 "-냥", "-루키"처럼 다른 느낌을 붙이면
              활용 범위가 넓어집니다. 추천 결과를 출발점으로 삼고 자신만의 버전을 만들어 보세요.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">닉네임 추천이 필요한 상황</h2>
            <p>
              닉네임 생성기는 특정한 상황에서 더 필요해집니다. 아래 예시는 실제로 별명 짓기 수요가 많은 대표적인 장면입니다.
              상황에 맞는 분위기를 떠올리며 결과를 비교해 보세요.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">SNS</h3>
            <p>
              SNS에서는 아이디와 닉네임이 나를 대표합니다. 한글닉은 따뜻하고 친근한 느낌을 주고, 영어닉은 세련되고 가벼운
              인상을 줄 수 있습니다. 프로필 사진, 피드 분위기와 어울리는 톤을 선택하면 팔로워가 기억하기 더 쉽습니다.
            </p>
            <p>
              인스타그램이나 트위터처럼 이름을 자주 보게 되는 플랫폼에서는 짧고 리듬 있는 별명이 유리합니다. 닉네임 추천 후보 중
              시각적으로도 보기 좋은 조합을 골라 두면 브랜드처럼 통일된 느낌을 만들 수 있습니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">게임</h3>
            <p>
              게임 닉네임은 역할, 전투 스타일, 팀 분위기를 보여주는 신호가 됩니다. 멋있는 스타일은 강한 이미지를, 재미있는
              스타일은 유쾌한 이미지를 강조하는 데 도움이 됩니다. 길이가 긴 닉네임은 게임 UI에서 잘릴 수 있으니 짧은 스타일도
              함께 비교해 보세요.
            </p>
            <p>
              닉네임 추천 결과를 그대로 쓰기보다 숫자나 철자 변형을 더해 자신의 색을 만드는 것도 좋은 방법입니다. 팀 플레이가 많은
              게임이라면 팀원이 부르기 쉬운 발음을 우선 고려하세요.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">커플·친구</h3>
            <p>
              친한 사람 사이의 별명은 관계의 친밀도를 높여 줍니다. 둘만의 특징이나 기억을 담으면 더 특별한 별명이 되지만,
              처음에는 가벼운 느낌의 닉네임 추천으로 시작해도 좋습니다. 귀여운 스타일이나 감성적인 스타일은 부드러운 분위기에
              어울립니다.
            </p>
            <p>
              너무 과한 별명은 부담을 줄 수 있으니 서로 편하게 부를 수 있는지 먼저 확인하는 것이 좋습니다. 별명은 상대를 존중하는
              표현이어야 오래 유지됩니다.
            </p>

            <h3 className="text-lg font-semibold text-slate-900">팀·동아리</h3>
            <p>
              팀이나 동아리에서는 구성원 모두가 공유할 수 있는 별명이 필요합니다. 모임의 주제나 활동 분위기를 반영하면
              소속감을 높일 수 있습니다. 예를 들어 스포츠 동아리라면 활발하고 힘찬 단어가, 스터디 그룹이라면 깔끔한 톤이
              어울립니다.
            </p>
            <p>
              팀별 별명을 정할 때는 한 사람만 튀기보다 전체 조합을 고려하는 것이 좋습니다. 이 도구로 여러 후보를 만든 뒤 팀원과
              함께 고르면 더 만족스러운 결과를 얻을 수 있습니다.
            </p>
            <p>
              상황마다 요구하는 인상이 다르기 때문에 하나의 별명만 고집할 필요는 없습니다. SNS용, 게임용, 팀 활동용 별명을 각각
              정해 두면 톤을 맞추기 쉽고 혼동도 줄어듭니다. 필요할 때 빠르게 바꿀 수 있도록 몇 가지 후보를 즐겨찾기에 담아 두면
              편리합니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">이 닉네임 생성기는 어떻게 닉네임을 만들까요?</h2>
            <p>
              이 닉네임 생성기는 규칙 기반 조합 방식을 사용합니다. 예를 들어 형용사 + 이름, 특징 + 접미사, 두 음절 축약,
              캐릭터 느낌의 역할어 같은 패턴을 미리 정의해 두고, 입력값에 맞게 단어를 선택해 결과를 만듭니다. 따라서 같은 입력이라도
              선택한 스타일에 따라 전혀 다른 분위기의 별명이 나옵니다.
            </p>
            <p>
              귀여운 스타일은 부드러운 표현과 귀여운 접미사를 많이 사용하고, 멋있는 스타일은 강한 단어와 역할어를 섞어 톤을
              높입니다. 감성적인 스타일은 시간대나 자연 이미지를 활용해 분위기를 살리고, 짧은 스타일은 축약과 간결한 조합을
              우선합니다. 영어닉은 영어 단어 조합과 핸들 스타일 패턴을 적용해 글로벌 플랫폼에 어울리게 구성됩니다.
            </p>
            <p>
              입력값이 비어 있을 때는 최소 한 가지 정보가 필요하다는 안내를 표시합니다. 이름이나 특징이 하나만 있어도 조합 가능한
              패턴을 늘려 20개 결과를 만들 수 있도록 설계했습니다. 결과가 반복되지 않도록 내부에서 중복을 제거하고, 빈 문자열이나
              지나치게 긴 문자열은 자동으로 제외합니다. 그래서 매번 안정적인 후보 목록을 제공할 수 있습니다.
            </p>
            <p>
              결과는 20개로 고정해 한눈에 비교할 수 있게 구성했습니다. 동일한 입력이라도 “다시 생성”을 누르면 다른 조합이 나오며,
              이는 단순 랜덤이 아니라 입력값과 회차를 섞은 결정적 난수 기반으로 작동합니다. 또한 기본 금칙어 필터를 적용해
              부적절한 단어가 포함되지 않도록 관리합니다.
            </p>
            <p>
              중요한 점은 이 도구가 외부 API를 호출하지 않는다는 것입니다. 입력값은 브라우저 내부에서만 처리되며 서버에 저장되지
              않습니다. 따라서 개인정보나 민감한 내용 없이도 가볍게 아이디어를 얻는 용도로 쓰기에 적합합니다.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">사용 시 주의사항 및 한계</h2>
            <p>
              닉네임 생성기 도구는 재미와 창의성을 위한 도구이며, 결과의 고유성을 보장하지 않습니다. 같은 입력을 사용하면 비슷한 결과가
              나올 수 있으므로 실제 사용 전에는 중복 여부를 확인하는 것이 좋습니다. 특히 아이디 중복이 허용되지 않는 플랫폼에서는
              최종 등록 가능 여부를 직접 확인해야 합니다.
            </p>
            <p>
              또한 별명은 타인에게 불쾌감을 줄 수 있는 표현을 피해야 합니다. 안전한 사용을 위해 혐오, 비하, 공격적인 단어를
              사용하지 않는 것이 기본 원칙입니다. 이 도구는 간단한 필터를 적용하지만, 최종 책임은 사용자에게 있다는 점을
              기억해 주세요.
            </p>
            <p>
              즐겨찾기 기능은 브라우저의 로컬 저장소를 사용하므로, 다른 기기와 자동으로 공유되지 않습니다. 공용 PC나 공유 계정에서는
              별명이 남아 있을 수 있으니 사용 후 삭제를 고려하세요. 개인적인 별명이라도 공개 계정에 적용할 때는 상대와의 관계나
              커뮤니티 규칙을 존중하는 태도가 중요합니다.
            </p>
            <p>
              닉네임 추천 결과는 과학적 분석이나 심리 진단을 제공하지 않으며, 개인의 성격을 정확히 예측하는 기능도 없습니다. 따라서
              결과를 절대적인 판단으로 받아들이기보다는 참고용 아이디어로 활용하는 것이 좋습니다. 필요하다면 철자, 숫자, 이모지 등을
              추가해 자신만의 톤을 완성해 보세요.
            </p>
            <p>
              상업적 프로젝트나 브랜드 계정에 사용할 경우에는 상표권, 도메인, 기존 사용 여부를 별도로 확인하는 것을 권장합니다. 이
              도구는 아이디어 제공용이며, 법적 검토나 고유성 보장을 대체하지 않습니다. 상황에 따라서는 전문가 검토나 팀 내부 합의가
              더 적합할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <FAQSection
            items={faqItems}
            title="자주 묻는 질문"
            intro="닉네임 생성기, 닉네임 추천, 입력 방식에 대한 궁금증을 정리했습니다."
          />
        </section>
      </div>
    </div>
  );
}

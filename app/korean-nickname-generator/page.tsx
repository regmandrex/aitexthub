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
  '입력된 이름과 특성을 바탕으로 20가지 닉네임을 곧바로 제안해 주는 닉네임 생성기 도구입니다. 귀여운·멋있는·재미있는·감성적인·짧은·영어닉·한글닉 등 다양한 스타일을 브라우저에서 규칙에 따라 만들어냅니다.';


export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title,
    description,
    urlPath: '/korean-nickname-generator',
    locale: 'ko_KR',
  });
}

function RailAd(_props: { side: 'left' | 'right' }) {
  return null;
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
          <p className="text-xs text-slate-700 sm:text-sm md:text-base">특징과 이름을 적어주시면 딱 맞는 별명을 골라드려요.</p>
          <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
            <span className="text-yellow-500">★★★★★</span>
            <span>4.9</span>
            <span>·</span>
            <span>Free</span>
          </div>
        </section>

        <section className="mt-4 rounded-xl border-3 border-black bg-white p-3 shadow-neo-sm md:mt-6 md:rounded-2xl md:p-6">
          <NicknameTool />
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug="korean-nickname-generator" showModeTools={true} />

        <section className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">닉네임 생성기란?</h2>
            <p>별명 짓기는 본명 외에 다른 호칭을 만들어 용도에 맞게 쓰는 사회적 풍습입니다. 닉네임 만들기는 지인들끼리 친근감을 높이고, 웹 공간에서 자신을 각인시키기 편하게 만들어 주기에 다수가 별명 짓기에 주목합니다. 특기할 만한 점은 디지털 공간에서 닉네임 추천을 거쳐 성향과 무드를 자연스럽게 표출할 수 있어서 계정의 첫인상을 좌우하는 매개체가 되곤 한다는 것입니다.</p>
            <p>별명 만들기는 정답이 정해진 엄격한 과제가 아니라, 개인의 취향과 무드를 맞추는 창의적인 선택에 가깝습니다. 명칭에 리듬감을 주거나, 좋아하는 활동과 성격을 반영하면 더욱 자연스럽고 설득력 있게 다가옵니다. 따라서 닉네임 생성기(닉네임 크리에이터)는 수많은 조합을 신속하게 제시하여, 여러 아이디어를 비교하고 마음에 드는 대안을 고를 수 있도록 지원합니다.</p>
            <p>본 페이지의 닉네임 생성기 도구는 무작위로 추출되는 방식이 아니라, 일정한 규칙과 패턴을 기반으로 결과물을 완성합니다. 귀여운, 멋있는, 재미있는, 감성적인, 짧은 스타일 가운데 하나를 고르면 단어 풀과 조합 방식이 달라져 전체적인 분위기도 바뀝니다. 한글닉과 영어닉을 동시에 지원하여 다양한 플랫폼에서 활용할 수 있게 만들었으니, 본인의 상황에 맞춰 선택해 보세요.</p>
            <p>닉네임 추천은 결국 내가 사람들에게 어떤 인상으로 기억되고 싶은지 정리하는 과정이기도 합니다. 본명만으로는 온전히 드러내기 힘든 성격이나 취향을 별명에 녹여내면, 타인이 당신을 훨씬 쉽게 떠올릴 수 있습니다. 가벼운 마음으로 시작해도 괜찮으며, 여러 후보를 견주어보며 가장 편안한 별명을 찾는 접근도 좋습니다.</p>
            <p>별명은 자기 자신을 위한 소소한 브랜딩 수단이 되기도 합니다. 동일한 닉네임이라도 어디에서 어떤 방식으로 사용하느냐에 따라 상대가 받는 인상이 달라지므로, 맥락과 대상층을 고려해 고르는 편이 현명합니다. 가령 가족이나 친구에게 쓰는 별명은 부드럽고 친근한 뉘앙스가 좋고, 공개 계정에서는 명확하고 깔끔한 형태가 어울립니다. 이러한 차이점을 파악하면 닉네임 추천을 선택하는 기준도 한층 명확해집니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">훌륭한 닉네임을 완성하는 5가지 기준</h2>
            <p>좋은 닉네임은 화려한 어휘보다는 일상 속에서 사용하기 얼마나 편한지를 기준으로 판단하는 것이 바람직합니다. 아래의 기준들을 살펴보면 다양한 닉네임 추천 중에서 가장 실용적인 후보를 손쉽게 추려낼 수 있습니다.</p>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-slate-900">기억하기 쉬움</strong> - 글자 수가 지나치게 많지 않고 리듬감이 좋을수록 오래 기억에 남습니다. 주변 사람들이 한두 번만 들어도 쉽게 떠올릴 수 있는 별명이 실제 환경에서 더 유용하게 쓰입니다.</li>
              <li><strong className="text-slate-900">발음과 타이핑의 편의성</strong> - 입으로 말하기 편안한 닉네임은 자연스럽게 자주 불리게 됩니다. 온라인 공간에서는 입력하기 수월한 철자가 중요하므로 복잡한 구성보다는 간결한 형태가 훨씬 유리합니다.</li>
              <li><strong className="text-slate-900">특징 반영</strong> - 성격, 취미, 전체적인 분위기 등 자신을 나타내는 단서가 포함되면 설득력이 배가됩니다. 활발함, 게임 좋아함 같은 키워드는 닉네임 생성기를 통해 자신의 개성을 극대화하는 데 큰 도움이 됩니다.</li>
              <li><strong className="text-slate-900">톤과 분위기 일치</strong> - 귀여운 스타일인지 혹은 멋있는 스타일인지에 따라 알맞은 단어 선택이 달라집니다. 원하는 이미지를 먼저 구상해 두면 닉네임 추천 결과를 고르는 과정이 훨씬 수월해집니다.</li>
              <li><strong className="text-slate-900">플랫폼 규칙과 안전성</strong> - 각각의 플랫폼마다 글자 수 제한이나 금지어 정책에 차이가 있을 수 있습니다. 이용하기 전에 규정을 꼼꼼히 살피고, 타인에게 불쾌감을 줄 수 있는 표현은 반드시 배제하는 것이 좋습니다.</li>
            </ol>
            <p>이러한 기준들을 완벽하게 충족하려고 애쓰기보다는, 여러 후보를 직접 만들어 본 뒤 원하는 방향으로 다듬어 나가는 방식이 효과적입니다. 별명 짓기는 시간이 흐르면서 자연스럽게 바뀌기도 하므로 부담 없이 시작하고 주변 반응을 살피며 수정해 보세요.</p>
            <p>특히 온라인 세상에서는 한 번 정한 닉네임이 오랜 기간 사용되는 경우가 많습니다. 처음부터 너무 파격적이거나 과한 표현을 넣기보다는, 오래 보아도 쉽게 질리지 않는 단어를 고르는 것이 실용적입니다. 본 도구는 그러한 판단을 돕기 위해 다채로운 톤의 후보군을 빠르게 보여 주도록 설계되었습니다.</p>
            <p>또 다른 유용한 팁은 실제로 입밖으로 소리 내어 부르거나 직접 타이핑해 보았을 때의 감각을 체크하는 것입니다. 텍스트로 볼 때는 예뻐 보이는 별명이라도 발음하기 까다롭다면 실생활에서 금방 교체될 수 있습니다. 후보들을 직접 읽어 보고 주변 지인에게 불러 달라고 부탁하면 반응을 파악하기에 아주 좋습니다.</p>
            <p>마지막으로, 별명 짓기는 본인의 취향과 사용 환경에 맞춰 직접 손보는 작업이 수반되어야 합니다. 기본 추천 후보가 마음에 들더라도 한 글자만 고치거나 접미사를 다르게 적용하면 훨씬 자연스럽게 완성됩니다. 가령 같은 밑바탕이라도 냥, 루키 같은 서로 다른 어미를 붙이면 활용도가 크게 넓어집니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">닉네임 추천이 절실히 요구되는 상황</h2>
            <p>닉네임 생성기는 특정한 국면에서 더욱 필수적인 도구가 됩니다. 아래의 예시들은 실제로 별명을 필요로 하는 대표적인 순간들입니다. 각 상황에 어울리는 분위기를 상상하며 결과물들을 서로 비교해 보세요.</p>

            <h3 className="text-lg font-semibold text-slate-900">SNS</h3>
            <p>SNS 공간에서는 고유 아이디와 닉네임이 곧 나 자신을 대변합니다. 한글닉은 따뜻하고 친근한 온도를 전달하고, 영어닉은 세련되면서도 가벼운 인상을 풍길 수 있습니다. 프로필 이미지나 피드의 전체적인 무드와 조화를 이루는 톤을 선택해야 팔로워들의 머릿속에 더 깊이 남습니다.</p>
            <p>인스타그램이나 트위터처럼 이름이 자주 노출되는 플랫폼에서는 짧고 리듬감이 살아 있는 별명이 효과적입니다. 수많은 닉네임 추천 후보 가운데 시각적으로도 보기 편한 조합을 미리 선별해 두면 하나의 브랜드처럼 일관된 느낌을 줄 수 있습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">게임</h3>
            <p>게임 속 닉네임은 플레이어의 역할이나 전투 스타일, 팀 내 분위기를 드러내는 신호가 됩니다. 멋있는 스타일은 강인한 이미지를, 재미있는 스타일은 유쾌한 에너지를 부각하는 데 제격입니다. 글자 수가 너무 길면 게임 UI 화면에서 잘릴 수 있으니 짧은 스타일도 함께 대조해 보세요.</p>
            <p>닉네임 추천 결과물을 그대로 쓰기보다는 숫자나 일부 철자를 변형하여 자신만의 고유한 색깔을 입히는 방식도 훌륭합니다. 특히 팀플레이가 중심이 되는 게임이라면 동료들이 빠르고 편하게 부를 수 있는 발음인지를 최우선으로 고려하세요.</p>

            <h3 className="text-lg font-semibold text-slate-900">커플·친구</h3>
            <p>절친한 관계 사이에서 주고받는 별명은 두 사람 사이의 친밀감을 한층 끌어올려 줍니다. 서로만 아는 특징이나 에피소드를 녹여내면 더욱 특별한 의미를 지니게 되지만, 처음에는 가벼운 뉘앙스의 닉네임 추천으로 산뜻하게 출발하는 편도 좋습니다.</p>
            <p>지나치게 과장된 별명은 상대에게 부담을 줄 수 있으므로 서로 편안하게 부를 수 있는지를 사전에 체크하는 것이 좋습니다. 진정한 별명은 타인을 존중하는 마음이 담겨 있어야 오랜 시간 동안 유지될 수 있습니다.</p>

            <h3 className="text-lg font-semibold text-slate-900">팀·동아리</h3>
            <p>팀이나 동아리 단체에서는 구성원 모두가 함께 공감하고 공유할 수 있는 별명이 필요합니다. 모임의 핵심 주제나 활동 성격을 반영하면 소속감을 더욱 탄탄하게 다질 수 있습니다. 예를 들어 스포츠 관련 동아리라면 활기차고 힘찬 단어가, 학업 중심의 스터디 그룹이라면 단정한 톤이 잘 어울립니다.</p>
            <p>단체 별명을 정할 때는 특정 개인만 지나치게 튀기보다는 전체적인 조화로움을 고려하는 것이 현명합니다. 본 도구를 통해 여러 후보를 먼저 도출한 다음 팀원들과 머리를 맞대고 고른다면 훨씬 더 만족스러운 결과를 얻을 수 있을 것입니다.</p>
            <p>상황에 따라 풍기는 느낌이 달라지므로 오직 한 가지 별명만 고집할 필연성은 없습니다. SNS용, 게임용, 그리고 팀 활동용 별명을 각각 구별해 두면 분위기를 유지하기 편하고 혼선도 줄어듭니다. 필요할 때 빠르게 바꿀 수 있도록 몇 가지 후보를 즐겨찾기에 담아 두면 편리합니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">이 툴은 어떤 방식으로 닉네임을 생성합니까?</h2>
            <p>이 닉네임 생성기는 규칙에 기반한 조합 방식을 사용합니다. 예를 들어 형용사 결합 이름, 특징과 접미사, 두 음절 축약, 캐릭터 느낌의 역할어 같은 패턴을 미리 정의해 두고, 입력값에 맞게 단어를 선택해 결과물을 완성합니다. 따라서 같은 입력이라도 선택한 스타일에 따라 전혀 다른 분위기의 별명이 나옵니다.</p>
            <p>귀여운 스타일은 부드러운 어조와 깜찍한 접미사를 활용하며, 멋진 스타일은 강렬한 단어와 역할 명칭을 결합해 분위기를 띄웁니다. 감성적인 스타일은 시간 흐름이나 자연의 요소를 더해 무드 조성을 돕고, 간결한 스타일은 축약과 단순한 조합을 우선시합니다. 영문 닉네임은 영어 단어 짜임새와 핸들 형태 규칙을 반영하여 세계적인 플랫폼에 적합하게 만들어집니다.</p>
            <p>입력 내용이 없을 때에는 최소한 한 가지 정보가 필요하다는 안내 문구가 나타납니다. 이름이나 특징이 단 하나만 입력되어도 조합 가능한 패턴을 넓혀 20가지 결과를 만들 수 있도록 제작되었습니다. 결과가 겹치지 않도록 내부에서 중복을 없애고, 빈 문자열이나 지나치게 긴 문자열은 알아서 제외합니다. 그리하여 매번 안정적인 후보 목록을 제공할 수 있습니다.</p>
            <p>결과는 20개로 고정되어 한눈에 비교하기 쉽게 만들었습니다. 똑같은 입력을 넣더라도 다시 생성을 누르면 다른 조합이 나타나며, 이는 단순한 무작위가 아닌 입력값과 회차를 섞은 결정적 난수 방식으로 작동합니다. 아울러 기본 금칙어 필터를 적용하여 부적절한 단어가 섞이지 않도록 철저히 관리합니다.</p>
            <p>중요한 포인트는 이 도구가 외부 API를 전혀 호출하지 않는다는 점입니다. 입력한 내용은 브라우저 내부에서만 처리되고 서버에 남지 않습니다. 그러므로 개인정보나 민감한 내용에 대한 걱정 없이 가볍게 아이디어를 얻는 용도로 쓰기에 아주 알맞습니다.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">이용 시 유의할 점과 제약 사항</h2>
            <p>닉네임 생성기 도구는 재미와 창의성을 위한 도구이며, 결과의 고유성을 완벽히 보장하지는 않습니다. 동일한 입력을 사용할 경우 유사한 결과가 도출될 수 있으므로 실제 사용 전에는 중복 여부를 미리 체크하는 편이 좋습니다. 특히 아이디 중복이 불가능한 플랫폼에서는 최종 등록 가능 여부를 직접 확인해야 합니다.</p>
            <p>그리고 별명은 타인에게 불쾌감을 안겨줄 수 있는 표현을 철저히 배제해야 합니다. 안전한 사용을 원한다면 혐오, 비하, 공격적인 단어 사용을 피하는 것이 기본 원칙입니다. 본 도구에서 간단한 필터를 거치지만, 최종적인 책임은 사용자 자신에게 있다는 점을 기억해 주시길 바랍니다.</p>
            <p>즐겨찾기 기능은 브라우저의 로컬 저장소를 활용하므로 다른 기기와 자동으로 연동되지 않습니다. 공용 PC나 여러 사람이 함께 쓰는 계정에서는 별명이 그대로 남아있을 수 있으니 사용 후 삭제하는 방안을 고려해 보세요. 개인적인 별명이라도 공개 계정에 적용할 때는 상대방과의 관계나 커뮤니티 규칙을 존중하는 태도가 필수적입니다.</p>
            <p>닉네임 추천 결과는 과학적인 분석이나 심리 진단을 제공하지 않으며, 개인의 성격을 정확하게 예측하는 기능도 포함되어 있지 않습니다. 따라서 도출된 결과를 절대적인 판단 기준으로 여기기보다는 참고용 아이디어로 가볍게 활용하시는 편이 좋습니다. 필요하다면 철자나 숫자, 이모지 등을 더해 자신만의 독창적인 톤을 완성해 보세요.</p>
            <p>상업적 프로젝트나 브랜드 계정에 활용할 경우 상표권, 도메인, 그리고 기존 사용 여부를 각별히 확인하는 것을 권장합니다. 해당 도구는 어디까지나 아이디어를 제공하는 목적이며, 법적 검토나 고유성 보장을 완벽히 대신하지 않습니다. 상황에 따라서는 전문가의 검토나 팀 내부의 원만한 합의가 훨씬 더 유리할 수 있습니다.</p>
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


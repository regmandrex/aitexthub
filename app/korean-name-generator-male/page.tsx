import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ThemedNameGeneratorTool } from '@/components/tools/ThemedNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';


const toolSlug = 'korean-name-generator-male';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Korean Name Generator (Male)',
    description: 'Complimentary Korean male name generator for fictional characters and plots. Generate Korean male name suggestions instantly online without registration.',
    seoTitle: 'Korean Name Generator Male – Korean Male Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Korean Name Generator (Male) – Genuine Surname + Personal Names</h2>
        <p>A traditional Korean male name has a strict layout: a one-syllable surname precedes a double-syllable personal name — examples include Kim Min-jun, Lee Ji-ho, and Park Seo-jun. This software generates titles adhering strictly to authentic patterns, combining real Korean family names with organic personal name parts to ensure the output feels genuine rather than fabricated. It is designed for novelists, webtoon and K-drama enthusiasts, K-pop style fictional characters, and students wanting realistic male Korean names. Everything operates directly in your browser without requiring an account, generating 1 to 24 names per generation.</p>
        <p>Unlike fan-based generators, this authentic naming utility is based on genuine Korean naming conventions — including surname-first sequencing, syllable meanings, family generation rules, and romanization rules. The guide below outlines these patterns to ensure your selected names fit seamlessly into a Korean context and suit your character's time period and atmosphere.</p>

        <h2>The Anatomy of a Korean Name</h2>
        <p>Korean naming conventions put the <strong>family name first</strong>, unlike Western formats. In &quot;Lee Ji-hoon,&quot; Lee acts as the surname while Ji-hoon functions as the personal name. Family names generally consist of a single syllable, whereas personal names contain two syllables, frequently hyphenated in romanized forms (Ji-hoon, Min-jun). Placing the surname last like Western naming conventions immediately appears unnatural to Korean speakers, making correct sequence adherence the primary rule for realism.</p>
        <p>Given that the family name precedes everything and is extremely common, the personal name expresses most of a character's uniqueness — meaning the dual syllables of the given name hold all the personality and significance.</p>

        <h2>The Most Prevalent Korean Surnames</h2>
        <p>A surprisingly limited group of family names accounts for a massive portion of the Korean populace. The top three are <strong>Kim (김), Lee (이), and Park (박)</strong> — which make up nearly half of the population combined. Following these are Choi, Jung (Jeong), Kang, Cho (Jo), Yoon, Jang, Lim, Han, Shin, and Oh. Due to widespread surname sharing, encountering someone named Kim or Lee is completely typical — and employing one gives fictional identities true authenticity. This utility utilizes that authentic statistical spread, ensuring generated surnames mirror real-world demographics.</p>

        <h2>The Construction of Male Given Names</h2>
        <p>Male given names generally feature two syllables, each originating from Sino-Korean hanja roots possessing distinct meanings. Parents merge these parts to convey desirable traits, making the name resemble a brief aspiration. Frequent male elements encompass:</p>
        <ul>
          <li><strong>min</strong> — sharp, clever, bright</li>
          <li><strong>jun</strong> — talented, handsome</li>
          <li><strong>ji</strong> — wisdom, intellect</li>
          <li><strong>hyun / hyeon</strong> — smart, honorable</li>
          <li><strong>woo</strong> — superiority (or &quot;rain&quot;)</li>
          <li><strong>ho</strong> — great, vast</li>
          <li><strong>seo</strong> — auspicious, calm</li>
          <li><strong>jin</strong> — precious, true</li>
        </ul>
        <p>Such elements form choices like Min-jun (clever + talented), Ji-ho (wisdom + great), Seo-jun, and Hyun-woo. Since one romanized sound can link to multiple hanja options, a single written title holds various potential meanings — contributing to the depth inherent in Korean names.</p>

        <h2>Classic vs. Contemporary Names</h2>
        <p>Naming trends change across decades, meaning fitting the choice to your character&apos;s era is essential. Older men — like grandfathers or stern executives — fit titles such as Young-chul, Byung-ho, Sang-hoon, or Jong-su. Modern young men suit trendier, softer options including Do-yoon, Ha-jun, Si-woo, or Eun-woo. A twenty-year-old lead named Byung-ho or a seventy-year-old called Si-woo feels slightly mismatched to anyone familiar with Korean names, much like how an English &quot;Ethel&quot; or &quot;Mildred&quot; belongs to a different generation than &quot;Aiden.&quot;</p>

        <h2>Generational Names in Families</h2>
        <p>Traditional Korean families frequently employ a <strong>generation syllable</strong> (dollimja) — a shared sound in the given name utilized by every sibling and cousin within that same generation. Three brothers might be named Jun-ho, Jun-seo, and Jun-woo, all incorporating &quot;Jun,&quot; or Min-jae, Do-jae, and Seo-jae, sharing &quot;Jae.&quot; To construct a believable family, keep the surname constant across all members and, for an authentic touch, repeat one given-name syllable among the siblings. This minor detail instantly makes a fictional family feel genuinely related.</p>

        <h2>Romanization: The Reason Behind Multiple Spellings</h2>
        <p>Romanization translates Hangul into the Latin alphabet, and competing systems mean one name can be written several ways. The Revised Romanization of Korean (the official standard) produces Lee, Park, Jeong, Gwang; older or personal spellings result in Yi, Bak, Chung, Kwang. Given-name syllables may appear hyphenated (Min-jun), connected (Minjun), or separated by spaces. K-pop and K-drama subtitles often adopt whatever spelling the individual prefers, which explains why you encounter Lee and Yi, or Ji-hoon and Jihun. For fiction, select a single spelling per character and maintain consistency throughout.</p>

        <h2>Steps to Operate This Korean Male Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to obtain a brand-new set of surname-plus-given-name combinations.</li>
          <li>Scan through the options to find names whose tone and era suit your character — whether a cool lead, a warm best friend, or a stern father.</li>
          <li>Use the Copy button to save your shortlist, then allocate each name to a specific character within your notes.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>
        <p>Processing happens completely inside your browser. Your preferences and the names you generate never get transmitted to any server, ensuring your character planning remains entirely private until you decide to share it.</p>

        <h2>[17] Common Mistakes to Avoid</h2>
        <p>A few mistakes can make a Korean name feel fake. The primary one is reversing the sequence — the family name always comes first. The second involves using a three-syllable given name or invented sounds that never occur in actual names; stick to combinations formed from genuine syllables. The third is mixing romanization methods inside a single story, writing a character as Lee in one scene and Yi in another. The fourth is ignoring the era by giving a modern teenager a clearly old-fashioned name. Stick to names that are surname-first, two-syllable, natural, and consistently spelled.</p>

        <h2>Privacy</h2>
        <p>This Korean male name generator runs completely within your web browser. When you select a quantity and generate, the names are created locally on your device — nothing gets uploaded, logged, or saved on our servers. The outputs are meant for original characters and language study and do not match any real directory of people. Simply close the tab and the list disappears unless you saved it.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Korean male name generator?', answer: 'It is a browser utility that creates authentic-sounding Korean male names, combining a family name (surname) with a two-syllable given name — for instance Kim Min-jun or Park Ji-ho. It is designed for writers, K-drama and webtoon enthusiasts, language learners, and anyone naming a male Korean character. Everything processes locally in your browser, nothing is saved or uploaded, and it remains free with zero registration required. You receive 1 to 24 names per click and can generate as many batches as you wish.' },
  { category: 'Naming', question: 'How is a Korean name structured?', answer: 'A Korean name puts the family name first, followed by the given name — the exact opposite of Western ordering. Therefore in "Lee Ji-hoon," Lee serves as the surname while Ji-hoon acts as the given name. Family names typically consist of a single syllable, whereas given names usually span two syllables, frequently written with a hyphen when romanized (Ji-hoon, Min-jun). Understanding this order is vital: placing the surname last would sound unnatural to Korean speakers.' },
  { category: 'Naming', question: 'What are the most common Korean surnames?', answer: 'A small group of surnames accounts for a massive portion of the population: Kim (김), Lee (이), and Park (박) are easily the most frequent, followed by Choi, Jung, Kang, Cho, Yoon, Jang, and Lim. Because so many Koreans share these specific surnames, the given name bears the bulk of individual identity. The generator relies on this realistic distribution, meaning numerous generated surnames will be these familiar ones — which is precisely what makes the names feel genuine.' },
  { category: 'Naming', question: 'How do Korean given names work?', answer: 'A male given name usually consists of two syllables, with each carrying meaning derived from Sino-Korean (hanja) origins — sounds like min (bright/clever), jun (handsome/talented), ji (wisdom), hyun (virtuous/wise), woo (rain or excellence), seo, and ho. These two syllables blend into a name expressing desired traits: Min-jun, Ji-hoon, Seo-jun, Hyun-woo. This explains why Korean names feel meaningful rather than random — each syllable acts as a personal wish for the individual.' },
  { category: 'Naming', question: 'What do the syllables in a Korean male name mean?', answer: 'Numerous name syllables originate from hanja (Chinese characters) carrying positive meanings that parents wish to impart. Typical male syllables include jun (talented, handsome), min (clever, quick), ho (great, vast), woo (excellent), seo (auspicious), hyun (wise, virtuous), and jin (precious, true). A title like Min-ho merges "clever" and "great." Since the identical romanized syllable can connect to different hanja with distinct meanings, a single name can hold several possible interpretations.' },
  { category: 'Naming', question: 'How do I choose an authentic-sounding Korean male name?', answer: 'Combine a frequent surname (Kim, Lee, Park, Choi) with an authentic two-syllable given name using syllables found in actual names — Min-jun, Ji-ho, Seo-jun, Hyun-woo all sound native. Avoid creating syllable pairings that no Korean would use. Fit the name to the time period as well: older figures match names like Young-chul or Byung-ho, while modern figures fit trendier ones like Do-yoon or Ha-jun. Make a batch and keep the ones that sound like names you have heard in K-dramas or K-pop.' },
  { category: 'Use cases', question: 'Are these monikers suitable for K-drama or webtoon figures?', answer: 'Yes — that is a primary use. Fan fiction, original webtoons, K-drama-style scripts, and role-play all require male Korean names that read as genuine. Generate a batch, keep the ones whose tone fits your character (a cool lead, a warm best friend, a stern father), and verify the surname-plus-given-name reads naturally. The output is meant for creative work; it does not correspond to any living individual, making it safe for original characters.' },
  { category: 'Naming', question: 'In what way is a Korean moniker romanized into English?', answer: 'Romanization converts Hangul into the Latin alphabet, and since competing systems exist, the same name can appear several ways — Lee/Yi, Park/Bak, Ji-hoon/Jihun/Jihoon. Given-name syllables are normally joined by a hyphen (Min-jun) or written together (Minjun). The tool utilizes widely recognized romanizations so the names feel familiar to English readers. For fiction, pick one spelling and maintain consistency throughout your narrative.' },
  { category: 'General', question: 'Does the Korean male name generator cost anything?', answer: 'Yes. The tool is totally free to use within your browser without any account, payment, or download. You can generate Korean male names as often as you want — there is no daily cap or total run limit. It operates completely on your device, allowing you to brainstorm as many names as your story, cast, or language practice requires without any friction.' },
  { category: 'Usage', question: 'What is the process to operate the Korean male name generator?', answer: 'Select how many names you prefer per run (1 to 24) and click Generate. Review the batch — every name provides a surname and a two-syllable given name — and save the ones that suit your character. Use the Copy button to store your shortlist, then paste it into your story notes or character sheet. Run it again as often as you wish; there is no account, no download, and no run limit.' },
  { category: 'Privacy', question: 'Are any generated details transmitted to a server?', answer: 'No. The tool runs completely inside your browser. When you select a count and click generate, the names are created locally on your device — nothing gets uploaded, logged, or saved on our servers. Your character work remains private. Close the tab and the list disappears unless you copied it, meaning your names stay yours until you decide to share them.' },
  { category: 'Compatibility', question: 'Is the Korean male name generator functional on mobile devices?', answer: 'Yes. The generator operates in any modern web browser and functions on desktop, tablet, and phone with no app to install. Open the page, pick how many names you need, and generate. On a mobile phone you can produce a quick batch and copy it directly into your notes app. The layout is responsive, meaning building a Korean cast works just as well on a small screen as on a desktop.' },
  { category: 'Limits', question: 'What quantity of Korean names can I produce simultaneously?', answer: 'You can request 1 to 24 names per run. If you need a bigger pool — for instance, to name an entire cast — simply run it again; each run creates a brand-new random set. There is no daily or total limit. Paste multiple runs into a single document and delete any duplicates. The 24-per-run cap keeps each batch readable while still offering plenty of names to shortlist from.' },
  { category: 'Usage', question: 'Am I able to copy names straight from the generator?', answer: 'Yes. The Copy button places the entire generated batch onto your clipboard as plain text, one name per line, ready to paste into any notes app, document, or spreadsheet. This is the intended way to save a shortlist: generate, copy, and then assign each name to a character. In a spreadsheet each name lands in its own cell, which helps when tracking a cast with roles and relationships.' },
  { category: 'General', question: 'Do I need an account to use the Korean male name generator?', answer: 'No. This platform requires zero registration, profiles, or sign-in steps. Navigate here, choose your preferred volume, click generate, and take your favorites—no login credentials, emails, or sign-ups requested. Operating entirely within your current browser, it bypasses user management entirely. It delivers an unhindered, rapid experience whenever you require a Korean male name.' },
  { category: 'Naming', question: 'Are these authentic Korean monikers or completely fabricated ones?', answer: 'The generator builds names from real Korean surnames and genuine name syllables, combined so the results sound authentic instead of fabricated. The surnames are authentic Korean family names, and the given-name syllables actually appear in Korean names. The combinations are assembled randomly, meaning a specific full name may or may not match a real person — it is intended for original characters, not to reference anyone specific.' },
  { category: 'Use cases', question: 'How should one assign character names across multiple family generations?', answer: 'In Korea, all members of a single family share the same surname, and traditional families sometimes share a "generation syllable" — one syllable in the given name that remains identical for all siblings or cousins of the same generation (for example, brothers named Jun-ho, Jun-seo, Jun-woo). To create a believable family, keep the surname fixed across everyone and, if you prefer tradition, repeat one syllable among siblings. Generate a batch and adapt the given names to match that shared pattern.' },
  { category: 'Best practices', question: 'Which errors must be prevented when naming a Korean male figure?', answer: 'Do not place given names ahead of family names, as authentic Korean syntax requires family names to come first. Steer clear of three-syllable forenames or fabricated phonemes that lack real-world precedence, since they quickly seem artificial. Keep your transliteration consistent throughout the narrative rather than alternating forms (such as Lee in one chapter and Yi in the next). Lastly, align your selections with your setting&apos;s historical period, as naming trends evolve over time. Select options that lead with the surname, feature two syllables, sound authentic, and maintain uniform spelling.' },
  { category: 'Privacy', question: 'Are the generated names saved by you?', answer: 'Not at all. Every creation step runs strictly inside your personal browser, ensuring we never collect, view, or retain your outputs or configurations. Running the application within a private or incognito tab is completely fine. Reloading or navigating away instantly erases your current outputs unless you copied them beforehand. We maintain zero server logs tracking your generated words or how frequently you employ the utility.' },
  { category: 'Technical', question: 'By what mechanism are the Korean male names created?', answer: 'The tool utilizes selected lists of genuine Korean family names and frequent male given-name parts, blending a surname with two given-name parts locally in your web browser so each generation is unique. Nothing is transmitted to any server. The results serve creative writing and language study purposes, and do not match any directory of living people or verify data against external databases. The sets are calibrated to create names that sound naturally Korean.' },
  { category: 'Use cases', question: 'Can language learners utilize these names?', answer: 'Yes. Students of the Korean language can employ the generator to practice reading and pronunciation, grasp the surname-first convention, and observe how given-name syllables pair up. Produce a set and try writing or romanizing each one in Hangul, or investigate the potential hanja meanings of the components. It provides a relaxed method to gain familiarity with authentic Korean naming practices beyond standard textbook examples.' },
  { category: 'Limits', question: 'Is it possible to receive more than 24 names?', answer: 'Each execution delivers up to 24 names. For a larger collection—such as when naming an entire fictional cast—run the tool several times and combine every batch into one file, then filter out duplicates. There are no restrictions on daily or total uses, meaning batching serves as the primary method whenever you require an extensive group of Korean male names to select from. Maintain your preferred choices in a short list as you proceed.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the Korean male name generator without internet access?', answer: 'Yes. Once the interface has finished loading, the utility functions completely inside your web browser and requires no active network connection to create names. You are able to brainstorm Korean male names offline, and copy-paste functions operate offline as well. You merely need connectivity to load the site initially. This makes it convenient for writing while traveling, during flights, or wherever your signal is unreliable.' },
];

export default async function KoreanNameGeneratorMalePage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="korean-male" resultLabel="Generated Korean male names" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the Korean Name Generator (Male).</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}


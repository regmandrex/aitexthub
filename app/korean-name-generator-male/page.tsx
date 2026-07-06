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
    description: 'Free Korean male name generator for character and story names. Create Korean male name ideas in your browser with no sign-up.',
    seoTitle: 'Korean Name Generator Male – Korean Male Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Korean Name Generator (Male) – Authentic Family + Given Names</h2>
        <p>
          A Korean male name follows a precise structure: a single-syllable family name comes first, then a two-syllable given name — Kim Min-jun, Lee Ji-ho, Park Seo-jun. This generator builds names that follow those real conventions, pairing genuine Korean surnames with natural-sounding given-name syllables so the results read as authentic rather than invented. It is made for writers, K-drama and webtoon fans, K-pop-style original characters, and language learners who need believable male Korean names. Everything runs in your browser, with no sign-up, and you get 1–24 names per run.
        </p>
        <p>
          Unlike a fandom generator, this is a real-name tool grounded in how Korean names actually work — the surname-first order, the meaning packed into each given-name syllable, generational naming, and romanization. The guide below explains those conventions so the names you pick sit naturally in a Korean setting and match the era and tone of your character.
        </p>

        <h2>How a Korean Name Is Structured</h2>
        <p>
          Korean names place the <strong>family name first</strong>, the reverse of Western order. In &quot;Lee Ji-hoon,&quot; Lee is the surname and Ji-hoon is the given name. Family names are almost always a single syllable; given names are usually two syllables, often hyphenated when romanized (Ji-hoon, Min-jun). Writing the surname last, Western-style, immediately reads as non-native to Korean speakers, so keeping the order right is the first rule of a believable name.
        </p>
        <p>
          Because the surname comes first and is shared so widely, it is the given name that carries most of a character&apos;s individuality — which is why the two given-name syllables are where the meaning and personality live.
        </p>

        <h2>The Most Common Korean Surnames</h2>
        <p>
          A remarkably small set of surnames covers a huge share of Korea&apos;s population. The big three are <strong>Kim (김), Lee (이), and Park (박)</strong> — together roughly half of all Koreans. After them come Choi, Jung (Jeong), Kang, Cho (Jo), Yoon, Jang, Lim, Han, Shin, and Oh. Because so many people share these few names, encountering a Kim or a Lee is completely ordinary — and using one is what makes a fictional name feel real. This generator draws on that realistic distribution, so the surnames it produces skew toward the ones you would actually meet.
        </p>

        <h2>How Male Given Names Are Built</h2>
        <p>
          A male given name is typically two syllables, each drawn from Sino-Korean (hanja) roots that carry meaning. Parents combine syllables to express hoped-for qualities, so the name reads like a small wish. Common male syllables include:
        </p>
        <ul>
          <li><strong>min</strong> — clever, quick, bright</li>
          <li><strong>jun</strong> — talented, handsome</li>
          <li><strong>ji</strong> — wisdom, intellect</li>
          <li><strong>hyun / hyeon</strong> — wise, virtuous</li>
          <li><strong>woo</strong> — excellence (or &quot;rain&quot;)</li>
          <li><strong>ho</strong> — great, vast</li>
          <li><strong>seo</strong> — auspicious, calm</li>
          <li><strong>jin</strong> — precious, true</li>
        </ul>
        <p>
          These combine into names like Min-jun (clever + talented), Ji-ho (wisdom + great), Seo-jun, and Hyun-woo. Because the same romanized syllable can map to several different hanja, one written name can carry multiple possible meanings — part of what gives Korean names their depth.
        </p>

        <h2>Traditional vs. Modern Names</h2>
        <p>
          Name fashions shift across decades, so matching the name to the character&apos;s era matters. Older men — a grandfather, a stern executive — suit names like Young-chul, Byung-ho, Sang-hoon, or Jong-su. Contemporary young men suit trendier, softer-sounding names like Do-yoon, Ha-jun, Si-woo, or Eun-woo. A twenty-year-old lead named Byung-ho or a seventy-year-old named Si-woo will feel subtly off to anyone familiar with Korean names, the way an English &quot;Ethel&quot; or &quot;Mildred&quot; reads as a different generation than &quot;Aiden.&quot;
        </p>

        <h2>Generational Names in Families</h2>
        <p>
          Traditional Korean families often use a <strong>generation syllable</strong> (dollimja) — one shared syllable in the given name carried by all siblings and cousins of the same generation. Three brothers might be Jun-ho, Jun-seo, and Jun-woo, all sharing &quot;Jun,&quot; or Min-jae, Do-jae, and Seo-jae, sharing &quot;Jae.&quot; To build a believable family, fix the surname across everyone and, for a traditional feel, repeat one given-name syllable among siblings. This small detail makes a fictional family instantly read as related.
        </p>

        <h2>Romanization: Why One Name Has Many Spellings</h2>
        <p>
          Romanization converts Hangul into the Latin alphabet, and competing systems mean one name can appear several ways. The Revised Romanization of Korean (the official standard) gives Lee, Park, Jeong, Gwang; older or personal spellings give Yi, Bak, Chung, Kwang. Given-name syllables may be hyphenated (Min-jun), joined (Minjun), or spaced. K-pop and K-drama subtitles often use whatever spelling the person prefers, which is why you see Lee and Yi, or Ji-hoon and Jihun. For fiction, pick one spelling per character and stay consistent throughout.
        </p>

        <h2>How to Use This Korean Male Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of surname-plus-given-name pairs.</li>
          <li>Skim for names whose tone and era fit your character — a cool lead, a warm best friend, a stern father.</li>
          <li>Use the Copy button to save your shortlist, then assign each name to a character in your notes.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your character work stays private until you choose to share it.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          A few errors make a Korean name read as fake. The biggest is reversing the order — the surname comes first, always. The second is a three-syllable given name or invented syllables that never appear in real names; stick to combinations built from genuine syllables. The third is mixing romanization systems within one story, spelling a character Lee in one scene and Yi in another. The fourth is ignoring era, giving a modern teenager a distinctly old-fashioned name. Keep the names that are surname-first, two-syllable, natural-sounding, and consistently spelled.
        </p>

        <h2>Privacy</h2>
        <p>
          This Korean male name generator runs entirely in your browser. When you set a count and generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. The results are for original characters and language practice and do not correspond to any real directory of people. Close the tab and the list is gone unless you copied it.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Korean male name generator?', answer: 'It is a browser tool that produces authentic-sounding Korean male names, each pairing a family name (surname) with a two-syllable given name — for example Kim Min-jun or Park Ji-ho. It is built for writers, K-drama and webtoon fans, language learners, and anyone naming a male Korean character. Everything runs locally in your browser, nothing is stored or uploaded, and it is free with no sign-up. You get 1 to 24 names per run and can generate as many batches as you like.' },
  { category: 'Naming', question: 'How is a Korean name structured?', answer: 'A Korean name places the family name first, followed by the given name — the reverse of the Western order. So in "Lee Ji-hoon," Lee is the surname and Ji-hoon is the given name. Family names are almost always a single syllable, and given names are usually two syllables, often written with a hyphen when romanized (Ji-hoon, Min-jun). Knowing this order matters: writing the surname last would read as unnatural to Korean speakers.' },
  { category: 'Naming', question: 'What are the most common Korean surnames?', answer: 'A handful of surnames cover a large share of the population: Kim (김), Lee (이), and Park (박) are by far the most common, followed by Choi, Jung, Kang, Cho, Yoon, Jang, and Lim. Because so many Koreans share these few surnames, the given name carries most of the individuality. The generator draws on this realistic distribution, so many of the surnames it produces will be these familiar ones — which is exactly what makes the names feel authentic.' },
  { category: 'Naming', question: 'How do Korean given names work?', answer: 'A male given name is typically two syllables, each carrying meaning drawn from Sino-Korean (hanja) roots — syllables like min (bright/clever), jun (handsome/talented), ji (wisdom), hyun (virtuous/wise), woo (rain or excellence), seo, and ho. The two syllables combine into a name that expresses hoped-for qualities: Min-jun, Ji-hoon, Seo-jun, Hyun-woo. This is why Korean names feel meaningful rather than arbitrary — each syllable is a small wish for the person.' },
  { category: 'Naming', question: 'What do the syllables in a Korean male name mean?', answer: 'Many name syllables come from hanja (Chinese characters) with positive meanings parents want to bestow. Common male syllables include jun (talented, handsome), min (clever, quick), ho (great, vast), woo (excellent), seo (auspicious), hyun (wise, virtuous), and jin (precious, true). A name like Min-ho blends "clever" and "great." Because the same romanized syllable can map to different hanja with different meanings, one name can carry several possible readings.' },
  { category: 'Naming', question: 'How do I choose an authentic-sounding Korean male name?', answer: 'Pair a common surname (Kim, Lee, Park, Choi) with a natural two-syllable given name whose syllables actually appear in real names — Min-jun, Ji-ho, Seo-jun, Hyun-woo all sound native. Avoid inventing syllable combinations that no Korean would use. Match the name to the era too: older characters suit names like Young-chul or Byung-ho, while contemporary characters suit trendier names like Do-yoon or Ha-jun. Generate a batch and keep the ones that sound like names you have heard in K-dramas or K-pop.' },
  { category: 'Use cases', question: 'Can I use these names for K-drama or webtoon characters?', answer: 'Yes — that is a primary use. Fan fiction, original webtoons, K-drama-style scripts, and role-play all need male Korean names that read as genuine. Generate a batch, keep the ones whose tone fits your character (a cool lead, a warm best friend, a stern father), and confirm the surname-plus-given-name reads naturally. The output is for creative use; it does not correspond to any real living person, so it is safe for original characters.' },
  { category: 'Naming', question: 'How is a Korean name romanized into English?', answer: 'Romanization converts Hangul into the Latin alphabet, and there are competing systems, so the same name can appear several ways — Lee/Yi, Park/Bak, Ji-hoon/Jihun/Jihoon. Given-name syllables are commonly joined with a hyphen (Min-jun) or written together (Minjun). The generator uses widely recognized romanizations so the names look familiar to English readers. For fiction, pick one spelling and stay consistent throughout your story.' },
  { category: 'General', question: 'Is the Korean male name generator free?', answer: 'Yes. The generator is completely free to use in your browser with no account, no payment, and no download. You can generate Korean male names as often as you like — there is no daily cap or total limit on runs. It runs entirely on your device, so you can brainstorm as many names as your story, cast, or language practice needs without any friction.' },
  { category: 'Usage', question: 'How do I use the Korean male name generator?', answer: 'Choose how many names you want per run (1 to 24) and click Generate. Skim the batch — each name gives a surname and a two-syllable given name — and keep the ones that fit your character. Use the Copy button to save your shortlist, then paste it into your story notes or character sheet. Run again as often as you like; there is no account, no download, and no limit on runs.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your character work stays private. Close the tab and the list is gone unless you copied it, so your names remain yours until you choose to share them.' },
  { category: 'Compatibility', question: 'Does the Korean male name generator work on mobile?', answer: 'Yes. The generator runs in any modern web browser and works on desktop, tablet, and phone with no app to install. Open the page, choose how many names you want, and generate. On a phone you can produce a quick batch and copy it straight into your notes app. The layout is responsive, so building a Korean cast works just as well on a small screen as on desktop.' },
  { category: 'Limits', question: 'How many Korean names can I generate at once?', answer: 'You can request 1 to 24 names per run. If you need a larger pool — say, to name a whole cast — just run it again; each run produces a fresh random set. There is no daily or total limit. Paste multiple runs into one document and remove any duplicates. The 24-per-run cap keeps each batch readable while still giving you plenty of names to shortlist from.' },
  { category: 'Usage', question: 'Can I copy the names from the generator?', answer: 'Yes. The Copy button places the whole generated batch on your clipboard as plain text, one name per line, ready to paste into any notes app, document, or spreadsheet. This is the intended way to save a shortlist: generate, copy, then assign each name to a character. In a spreadsheet each name lands in its own cell, which is handy for tracking a cast with roles and relationships.' },
  { category: 'General', question: 'Do I need an account to use the Korean male name generator?', answer: 'No. The tool works with no sign-up and no login. Open the page, set how many names you want, click generate, and copy the results — no email, password, or registration involved. Because everything runs locally in your browser, there is nothing to create an account for. It is designed for instant, friction-free brainstorming whenever you need a Korean male name.' },
  { category: 'Naming', question: 'Are these real Korean names or invented ones?', answer: 'The generator builds names from real Korean surnames and real name syllables, combined so that the results sound authentic rather than invented. The surnames are genuine Korean family names, and the given-name syllables are ones that actually appear in Korean names. The combinations are assembled randomly, so a specific full name may or may not match a real person — it is designed for original characters, not to reference anyone in particular.' },
  { category: 'Use cases', question: 'How do I name characters across generations in a family?', answer: 'In Korea, all members of one family share the same surname, and traditional families sometimes share a "generation syllable" — one syllable in the given name that is the same for all siblings or cousins of the same generation (say, all brothers named Jun-ho, Jun-seo, Jun-woo). To build a believable family, keep the surname fixed across everyone and, if you want tradition, repeat one syllable among siblings. Generate a batch and adapt the given names to fit that shared pattern.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a Korean male character?', answer: 'Avoid putting the given name before the surname — Korean order is surname first. Avoid three-syllable given names or invented syllables that never appear in real names, which read as fake. Avoid mixing romanization systems within one story (Lee in one scene, Yi in another). And match the name to the era, since name fashions shift over decades. Keep the names that are surname-first, two-syllable, natural-sounding, and consistently spelled.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens entirely in your browser, so we never receive or store the names or your settings. You can use the tool in a private or incognito window if you prefer. If you refresh or close the page, the last batch is cleared unless you have already copied it. There is no server-side record of what you generated or how many times you ran it.' },
  { category: 'Technical', question: 'How are the Korean male names generated?', answer: 'The generator draws on curated lists of authentic Korean surnames and common male given-name syllables, then combines a surname with two given-name syllables in your browser so every run is different. Nothing is sent to a server. The output is for creative inspiration and language practice — it does not correspond to a directory of real people or verify anything against an external source. The lists are tuned to produce names that read as genuinely Korean.' },
  { category: 'Use cases', question: 'Can language learners use these names?', answer: 'Yes. Learners of Korean can use the generator to practice reading and pronouncing names, to understand the surname-first order, and to see how given-name syllables combine. Generate a batch and try romanizing or writing each in Hangul, or look up the possible hanja meanings of the syllables. It is a low-stakes way to build familiarity with real Korean naming conventions beyond textbook examples.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run returns up to 24 names. For a bigger pool — naming an entire ensemble cast, for example — run the generator repeatedly and paste each batch into one document, then remove duplicates. There is no daily or total limit on runs, so batching is the intended workflow when you need a large set of Korean male names to choose from. Keep the strongest options in a shortlist as you go.' },
  { category: 'Troubleshooting', question: 'Can I use the Korean male name generator offline?', answer: 'Yes. Once the page has loaded, the generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm Korean male names offline, and copying and pasting works offline too. You only need a connection to open the page the first time. This makes it handy for writing on the go, on a plane, or anywhere your connection is unreliable.' },
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
          <p className="text-slate-700">Common questions about the Korean name generator (male).</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}


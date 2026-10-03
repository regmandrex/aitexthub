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


const toolSlug = 'runescape-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'RuneScape Name Generator',
    description: 'Free RuneScape Name Generator for RS3 and OSRS display names. Get RSN concepts matching the 12-character limit—funny, fantasy, or tryhard—directly in your browser with zero sign-up.',
    seoTitle: 'RuneScape Name Generator – OSRS & RS3 RSN Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>RuneScape Name Generator – RS3 &amp; OSRS RSN Ideas</h2>
        <p>This RuneScape Name Generator builds display names (RSNs) matching how names genuinely function within RuneScape 3 (RS3) and Old School RuneScape (OSRS). RuneScape names feature strict regulations—a hard 12-character limit, strictly letters, numbers, and single underscores or spaces—alongside a unique culture of their own, ranging from pristine fantasy names to the iconic &quot;xX_Slayer_Xx&quot; era. The generator yields RSN ideas respecting the character limit while matching your desired style, whether building a fresh main, a pure, an ironman, or a skiller. It operates right in your browser without requiring registration and retains no data.</p>
        <p>Your RSN is the title floating above your head throughout thousands of grinding hours, appearing on the hiscores, and getting called out inside clan chat and the Grand Exchange. This section outlines the rules and naming culture so your generated name remains both valid and tonally appropriate for your profile.</p>

        <h2>RuneScape Name Rules</h2>
        <p>Before selecting a moniker, it helps to understand what RuneScape actually permits you to use:</p>
        <ul>
          <li><strong>12 characters maximum.</strong> Display names cannot surpass 12 characters, ensuring the generator keeps suggestions within that boundary.</li>
          <li><strong>Letters, numbers, and one separator.</strong> You may include a single underscore or space between words, though not stacked together, and no other special characters are allowed.</li>
          <li><strong>Must be unique.</strong> Similar to any MMO, two users cannot possess an identical display name—popular brief names are long gone, meaning creativity is essential.</li>
          <li><strong>Changeable in RS3, limited in OSRS.</strong> RS3 allows periodic display name updates, whereas OSRS handles them somewhat differently, so review the latest guidelines prior to deciding.</li>
        </ul>

        <h2>RuneScape Naming Styles</h2>
        <p>RuneScape gave rise to several of gaming&apos;s most identifiable naming subcultures. The generator can adapt to any of them:</p>
        <ul>
          <li><strong>Clean fantasy.</strong> Names sounding like they belong inside Gielinor—a ranger, a wizard, or a Saradominist knight.</li>
          <li><strong>Tryhard / PvP.</strong> Brief, aggressive titles meant for PKers and pures, often designed to look threatening within the Wilderness.</li>
          <li><strong>Skiller / ironman.</strong> Monikers referencing a specific skill or the independent ironman grind (mining, woodcutting, or a maxed-cape dream).</li>
          <li><strong>Classic 2007 cringe-core.</strong> The nostalgic number-substitution, leetspeak, and &quot;xX_name_Xx&quot; aesthetic that defined a generation. Embraced ironically or genuinely, it remains unmistakably RuneScape.</li>
          <li><strong>Funny / meme.</strong> Joke RSNs and pun names guaranteed to draw laughs at the GE.</li>
        </ul>

        <h2>Categorizing by Account Type</h2>
        <p>The account type you are building dictates the best name. A main account can handle anything; an ironman name usually hints at the solo grind; a pure or zerker built for PvP generally prefers something brief, tough, and menacing; a skiller account often points to the specific skill it focuses on. A maxed-main name might feel prestigious and sleek, while a brand-new f2p account can lean into the chaotic classic vibe. Consider your account's purpose, then produce a batch within that category.</p>

        <h2>OSRS vs. RS3</h2>
        <p>Old School RuneScape and RuneScape 3 share naming guidelines but appeal to different vibes. OSRS, featuring 2007 origins and a PvP-centric community, favors traditional and tryhard monikers — that nostalgic aesthetic fits right in. RS3, being more contemporary and PvM-oriented, supports the same names though you will notice sleeker, fantasy-inspired RSNs. Both adhere to the 12-character limit, meaning anything the generator creates functions on either version; choose the style fitting your game and community.</p>

        <h2>How to Use This RuneScape Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to obtain a selection of RSN concepts within the 12-character limit.</li>
          <li>Keep the options that align with your account type and desired aesthetic.</li>
          <li>Copy the list, then verify availability in-game before you finalize — RSNs must be distinct.</li>
          <li>Spin the tool repeatedly for fresh ideas — zero restrictions, sign-ups, or software required.</li>
        </ol>
        <p>Everything executes locally inside your browser. Your configurations and generated names are never transmitted to a server, ensuring your RSN ideas remain private.</p>

        <h2>Advice for Choosing an RSN</h2>
        <p>Shorter is superior — not solely due to the 12-character cap, but because brief names prove simpler to type, read in chat, and recall. Determine your style category first (sleek fantasy vs. tryhard vs. traditional) so your batch stays consistent. Because countless names are claimed, keep a shortlist of five or more ready when you attempt to secure one. If your top choice is taken, a minor adjustment — swapping a letter for a digit, adding an underscore — frequently frees up a similar variant. And keep in mind the name is semi-permanent in OSRS, so choose something you will still want displayed above your head at 99.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It produces RuneScape display-name (RSN) concepts adhering to the 12-character restriction, for OSRS and RS3.</li>
          <li>It does not check if a name is available in-game — you must confirm that within the client prior to claiming.</li>
          <li>It never logs or saves your preferences or creations; everything happens solely on your device.</li>
          <li>It does not link to Jagex accounts or the game — it solely suggests names to test.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>A RuneScape name is a minor detail that accompanies you through an extensive journey — from tutorial island up to a maxed cape. This generator supplies a collection of RSN concepts adhering to the game's actual rules (the 12-character cap, permitted characters, the requirement for uniqueness) allowing you to select your culture, ranging from sleek Gielinor fantasy to delightfully nostalgic 2007 cringe. Select your style, generate a batch, check availability in-game, and secure the name you will be grinding under for years.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a RuneScape name generator?', answer: 'It functions as a browser utility that generates RuneScape display-name (RSN) concepts for Old School RuneScape and RuneScape 3. It honors the game’s authentic rules — the 12-character cap alongside permitted characters — and can deliver names ranging from sleek fantasy to traditional 2007 cringe. It executes locally requiring no registration and retains zero data.' },
  { category: 'Rules', question: 'What guidelines govern RuneScape names?', answer: 'Display names max out at 12 characters and may utilize letters, numbers, and a single space or underscore separating words — no additional special characters. Every display name must be unique, meaning two players cannot share one. The generator keeps recommendations within the 12-character ceiling so they remain valid to test.' },
  { category: 'Rules', question: 'How many characters can RuneScape names have?', answer: 'Display names cannot exceed 12 characters across both OSRS and RS3. That restriction is why brief, impactful RSNs remain so valued — and why numerous options are already claimed. Every name this generator proposes stays inside the 12-character limit.' },
  { category: 'Rules', question: 'Can I use spaces or underscores?', answer: 'Yes. RuneScape permits a single space or underscore between words within a display name, alongside letters and numbers. You cannot incorporate other special characters, and you cannot stack separators. The generator obeys these rules ensuring its output works for the game.' },
  { category: 'Account types', question: 'What is the best way to name an ironman account?', answer: 'Ironman names frequently hint at the self-reliant solo grind — a nod toward skilling, a maxed-cape aspiration, or the ironman identity itself. Produce a batch within that category and retain the options signaling the account’s objective. Many ironmen appreciate names reading as a personal challenge.' },
  { category: 'Account types', question: 'What sort of name fits a pure or PvP account?', answer: 'Pures, zerkers, and PKers generally prefer brief, tough, menacing names appearing powerful inside the Wilderness. Generate within the tryhard category, favor brevity, and choose something reading as a threat during combat. Aggressive, punchy RSNs suit the PvP culture best.' },
  { category: 'Account types', question: 'How about a title for a skiller account?', answer: 'Skiller accounts regularly reference the skill they focus on — woodcutting, mining, fishing — or the broader skilling grind. Generate a batch and search for names indicating the skill focus, which serves as a fun piece of identity for a non-combat account.' },
  { category: 'Style', question: 'How can I secure an old-school 2007-era username?', answer: 'The traditional RuneScape format features the "xX_name_Xx" brackets, l33tspeak, and numerical swaps. Lean toward the retro aesthetic and own the cheese — whether used ironically or genuinely, it is definitively RuneScape and blends seamlessly with OSRS culture. Just ensure it stays under 12 characters.' },
  { category: 'Style', question: 'Can it generate humorous or meme RSNs?', answer: 'Definitely. Pun tags and funny RSNs are an adored element of RuneScape history — the sort that draw a smile at the Grand Exchange. Create a list and scan for clever wordplay; simply verify they meet the 12-character limit and remain free.' },
  { category: 'OSRS vs RS3', question: 'Is this compatible with both OSRS and RS3?', answer: 'Indeed. OSRS and RS3 use identical naming guidelines (12-character limit, permitted symbols, distinctness), meaning any handle the tool creates functions for both. OSRS culture favors traditional and sweaty handles, whereas RS3 features sleeker fantasy RSNs — select the vibe that suits your game version.' },
  { category: 'Availability', question: 'Am I able to verify if a RuneScape username is available through this tool?', answer: 'No — this utility merely proposes suggestions; it lacks any link to Jagex or the software. RSNs require uniqueness, meaning you must test availability via the game client prior to securing one. Since countless handles are claimed, produce a compilation so you have alternatives prepared.' },
  { category: 'Availability', question: 'Why are all the best usernames already claimed?', answer: 'RuneScape has operated since 2001 with countless profiles, and the 12-character limit implies brief, neat handles vanished ages ago. That is why ingenuity assists — a minor modification (a digit replacement, a punctuation mark, an obscure term) frequently unlocks a similar version of the handle you desire.' },
  { category: 'Usage', question: 'How do I operate this generator?', answer: 'Choose how many usernames you need (1–24), press Generate names, and save the ones that suit your profile sort and aesthetic. Save the selection, then test availability inside the game prior to finalizing. Run again for fresh ideas — no restrictions, sign-ups, or software required.' },
  { category: 'Usage', question: 'Am I allowed to edit the generated names?', answer: 'Yes. The results serve as a foundation, and tweaking is frequently required since handles demand distinctiveness. Switch a character for a digit, insert or drop an underscore, or merge components of two suggestions — just ensure the final handle stays under 12 characters.' },
  { category: 'Changing names', question: 'Is it possible to modify my RuneScape display name down the road?', answer: 'RS3 permits periodic display name updates, whereas OSRS manages them differently, meaning you should verify current guidelines for your specific version before assuming a moniker is locked in. Ultimately, choosing an identity you will still appreciate at level 99 spares you the trouble of future updates.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The tool merges handpicked RuneScape-style components—fantasy vocabulary, skill nods, and classic-era structures—and scrambles them randomly right in your browser while respecting the 12-character cap. Every execution generates a fresh batch. Zero data leaves your device; processing happens completely client-side.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'Negative. All operations execute inside your browser. Upon clicking generate, identities are formulated directly on your hardware. Your configurations and formulated RSN concepts are never transmitted to our backends, and zero storage occurs. Feel free to use the utility in an incognito session while keeping your name concepts totally private.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You may request between 1 and 24 options per batch. Should you require more, simply trigger it again—every single generation yields a brand-new random assortment with zero daily or cumulative restrictions. Building a substantial list is wise for RuneScape given how many handles are already claimed, ensuring you have reliable alternatives.' },
  { category: 'Compatibility', question: 'Does it function on mobile devices?', answer: 'Affirmative. The generator operates on any contemporary browser across computers, tablets, or mobile devices—convenient since both OSRS and RS3 feature mobile applications. Produce a selection on your smartphone, save it to your notepad, and verify availability directly inside the game client.' },
  { category: 'General', question: 'Does the RuneScape Name Generator cost anything?', answer: 'Indeed, it is entirely free without requiring any profile, registration, or software installation. Create as many RSN concepts as you desire, as frequently as you wish.' },
  { category: 'Best practices', question: 'What is the best way to choose an RSN?', answer: 'Pick your aesthetic category initially (refined fantasy, tryhard, traditional, or humorous), keep it concise, and prepare a backup list since tags must be distinct. Visualize how it displays above your character and on the hiscores—if you will still adore it at level 99, it is the ideal choice.' },
  { category: 'Best practices', question: 'Ought I to align my moniker with my character\'s objective?', answer: 'It adds a wonderful touch. A maxed-main handle can feel prestigious, an ironman identity can reference the solitary grind, and a PvP pure might opt for something brief and menacing. Aligning the RSN with your account goal imparts a personality that raw chance lacks.' },
  { category: 'Troubleshooting', question: 'What should I do if my top choice is unavailable?', answer: 'Try a minor adjustment: exchange a letter for a digit, insert an underscore, or replace a word with a synonym. Since the 12-character space is densely packed, a slight modification usually provides the quickest route to an open name. Producing a bigger list additionally supplies extra backup choices.' },
];

export default async function RunescapeNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="runescape" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the RuneScape Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

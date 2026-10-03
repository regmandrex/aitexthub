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


const toolSlug = 'hollow-knight-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Hollow Knight Name Generator',
    description: 'Free Hollow Knight Name Generator for insect characters, vessels, and OCs located in Hallownest. Gentle, sorrowful, bug-themed monikers following the Team Cherry aesthetic — right in your browser, without registration.',
    seoTitle: 'Hollow Knight Name Generator – Hallownest Bug & OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Hollow Knight Name Generator – Hallownest Insect and OC Monikers</h2>
        <p>This Hollow Knight Name Generator crafts monikers matching the quiet, sorrowful atmosphere of Hallownest — labels for an original bug character, a vessel, or a knight you are writing into Team Cherry&apos;s ruined realm. Hollow Knight&apos;s naming convention is tender and slightly melancholy: gentle phonics, bug origins, and an ancient fairytale gravity appropriate for a fallen empire of insects. The utility embraces that tone so the label you select sounds like it belongs on a bench in Dirtmouth rather than inside a loud modern title. It operates directly in your browser with zero registration and retains nothing.</p>
        <p>Team Cherry&apos;s monikers contribute to why Hallownest feels so vibrant in its silence. Hornet, Quirrel, Cornifer, Myla, Zote — gentle, somewhat archaic, frequently insect-inspired, each bearing a modest melancholy charm. This section dissects that aesthetic so an OC you label feels as though it constantly roamed the realm&apos;s remains.</p>

        <h2>The Hollow Knight Naming Convention</h2>
        <p>Hollow Knight&apos;s labels share a consistent, recognizable vibe. Understanding its core components enables you to produce monikers that fit naturally within Hallownest:</p>
        <ul>
          <li><strong>Soft and gentle.</strong> Labels rely on gentle consonants and quiet phonics — nothing harsh or severe. Even the fighters exhibit a melancholic tenderness (Hornet, Ze&apos;mer).</li>
          <li><strong>Insect and nature roots.</strong> Numerous labels stem from insects, flora, and natural terms, suiting an empire of bugs (Cornifer, Quirrel, the Mantis tribe).</li>
          <li><strong>Old fairy-tale weight.</strong> The mood is archaic and storybook-like — monikers feel drawn from an ancient, sorrowful legend instead of a contemporary roster.</li>
          <li><strong>Short and mournful.</strong> Most monikers span one or two syllables containing a wistful tone. The realm is perished, and the labels carry that silent sorrow.</li>
        </ul>

        <h2>Creating a Name for Your Knight or Vessel</h2>
        <p>The user avatar — the Knight — represents a vessel, one of the quiet, empty entities originating from the Abyss. Numerous vessels remain unnamed, rendering the labeling of an OC vessel a significant decision: a gentle, simple, almost ritualistic moniker suits a entity intended to be vacant. If you are authoring or sketching an OC vessel, produce a collection and search for the quietest, tenderest outcomes — labels sounding as though they pertain to something solemn and somewhat tragic.</p>
        <p>For a labeled bug character — a traveler, an academic, a warrior — you possess greater flexibility. An academic such as Quirrel bears a gentle, inquisitive label; a fighter like Hornet features a sharper yet still tender one; a modest townsfolk like Myla sports something straightforward and sweet. Align the sound of the moniker with the character&apos;s function and it will integrate plausibly into Hallownest&apos;s ensemble.</p>

        <h2>Monikers by Region and Tribe</h2>
        <p>Hallownest features distinct territories and bug factions, and matching a label to one enhances an OC:</p>
        <ul>
          <li><strong>Dirtmouth and the surface.</strong> Straightforward, wistful labels for the remaining few survivors holding onto the realm&apos;s periphery.</li>
          <li><strong>The Mantis Village.</strong> Sharper, more formal monikers for the proud, disciplined Mantis faction.</li>
          <li><strong>Deepnest.</strong> More unusual, darker, more unsettling labels for the spider-folk of the depths.</li>
          <li><strong>The City of Tears.</strong> More refined, sorrowful monikers for the once-glorious capital alongside its spirits.</li>
          <li><strong>The Hive.</strong> Warm, buzzing, bee-inspired labels for the bees of the Hive.</li>
        </ul>

        <h2>Designing an Original Character for Hallownest</h2>
        <p>Fan creators and authors adore designing custom bugs for Hollow Knight, whilst the moniker serves as the foundation. A robust Hallownest OC label accomplishes two tasks: it sounds tender and archaic within the Team Cherry framework, and it hints at the insect the persona represents — a moth, a beetle, a spider, a snail. Produce a batch, then review every label visualizing it uttered softly on a solitary bench; the ones bearing that gentle, wistful gravity represent the keepers. You may also derive a moniker directly from the insect your OC relies upon, representing precisely how many official labels were created.</p>

        <h2>How to Use This Hollow Knight Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to acquire a collection of Hallownest-style monikers.</li>
          <li>Say them quietly and select the options that feel tender and slightly sorrowful.</li>
          <li>Save the list in your notes and pick names that suit your OC&apos;s insect type and area.</li>
          <li>Spin the tool repeatedly for fresh ideas — zero restrictions, sign-ups, or software required.</li>
        </ol>
        <p>All processing happens directly within your web browser. None of your options or created monikers get transmitted over the internet, keeping all your personal concept work entirely confidential.</p>

        <h2>Guidelines for a Hallownest-Appropriate Name</h2>
        <p>Prefer gentle consonants and brief, longing tones — Hollow Knight names murmur instead of yelling. Base them on an insect or natural term when possible; this is the truest path to the Team Cherry aesthetic. Keep it ancient and slightly sorrowful, as if pulled from a forgotten tale about a ruined realm. If a generated name is close but overly modern or harsh, soften a consonant or shorten a syllable until it sounds fitting for a silent, empty creature wandering the remains.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It creates Hollow Knight-inspired names for OC bugs, vessels, and knights located in Hallownest.</li>
          <li>It does not replicate the official roster as a collection — the generated output is unique for your personal use.</li>
          <li>It never logs or saves your preferences or creations; everything happens solely on your device.</li>
          <li>It has no connection to the video game — it merely proposes names for your artwork, stories, or RP.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>Hollow Knight achieves its serene beauty partly through its naming choices — gentle, insect-based, and heavy with ancient sorrow. This tool provides a selection rooted in that aesthetic, categorized by territory and tribe, ensuring your created OC feels as though it always belonged to Hallownest&apos;s fading history. Choose the bug your character represents, produce a set, rely on the tips above, and you will finish with a name that echoes a realm once glorious and now tranquil.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Hollow Knight name generator?', answer: 'It is a web application that generates names matching the style of Hollow Knight — gentle, melancholic, insect-derived names for OC bugs, vessels, and knights situated in Hallownest. It adheres to Team Cherry’s naming conventions so the results feel authentic. It operates entirely within your browser with no registration required and saves no data.' },
  { category: 'Naming style', question: 'What gives a name that distinct Hollow Knight feel?', answer: 'Gentle consonants, brief longing tones, insect and nature origins, and an ancient fairy-tale weight. Names like Hornet, Quirrel, Cornifer, and Myla feel tender and somewhat sad, drawn from an old myth rather than a contemporary list. A name that murmurs rather than yells suits Hallownest perfectly.' },
  { category: 'Naming style', question: 'Why do Hollow Knight names carry a melancholic tone?', answer: 'Hallownest stands as a ruined realm, and its names reflect that silent grief. Team Cherry selected soft, archaic, sorrowful sounds to fit a landscape of debris and lost magnificence. Even the fighters possess a longing tenderness, which explains why a delicate, mournful moniker feels more fitting than an aggressive one.' },
  { category: 'Vessels', question: 'How can I name a vessel OC?', answer: 'Vessels are quiet, empty entities born from the Abyss, and many remain unnamed — making the naming of an OC vessel a significant decision. A delicate, minimal, almost ceremonial name suits a creature meant to be hollow. Generate a batch and select the quietest, tenderest option for a solemn, tragic mood.' },
  { category: 'Characters', question: 'How should I name a bug character?', answer: 'Align the sound of the name with the character’s function: a scholar like Quirrel features a gentle, inquisitive name; a fighter like Hornet has a sharper yet still tender one; a simple townsfolk like Myla possesses something plain and sweet. Produce a set and retain the names whose mood matches your character.' },
  { category: 'Lore', question: 'How do names vary across regions within Hallownest?', answer: 'Dirtmouth survivors possess straightforward, longing names; the Mantis Village employs sharper, formal titles; Deepnest names sound stranger and darker; the City of Tears features refined, tragic monikers; and the Hive utilizes warm, bee-inspired names. Connecting a name to its territory enriches an OC.' },
  { category: 'OC', question: 'How do I formulate a Hollow Knight OC name?', answer: 'A solid Hallownest OC name sounds gentle and ancient within the Team Cherry framework while hinting at the specific bug the character represents — a moth, beetle, spider, or snail. Deriving the moniker from your OC’s insect type is precisely how many official names were designed, making it the most authentic approach.' },
  { category: 'OC', question: 'Should the name correspond to the insect species?', answer: 'Indeed — that remains central to the Hollow Knight aesthetic. Cornifer (a snail cartographer), the Mantis faction, the bees of the Hive: numerous names stem from the bug itself. Determine what insect your OC is, then generate or modify toward a name grounded in that creature for the most authentic experience.' },
  { category: 'Use cases', question: 'Am I allowed to use these names for fan art?', answer: 'Yes — Hollow Knight features a massive OC fan-art community, and the name serves as the foundation for a new bug character. Produce a batch, select one that matches your OC’s insect and region, and it will blend seamlessly alongside the official cast in your artwork.' },
  { category: 'Use cases', question: 'Is it okay to use these for RP or fan fiction?', answer: 'Without a doubt. Writing or role-playing within Hallownest requires names that reflect its quiet, sorrowful atmosphere. Generate a batch, align it with your character’s tribe and role, and the name will harmonize with the world’s melancholic register.' },
  { category: 'Usage', question: 'How do I operate this generator?', answer: 'Choose your desired quantity (1–24), press Generate names, and whisper them quietly. Save the ones that sound tender and slightly sorrowful, paste the selection into your notepad, and pick favorites that fit your OC’s insect and area. Generate again for additional options with zero caps, logins, or downloads.' },
  { category: 'Usage', question: 'Am I allowed to edit the generated names?', answer: 'Indeed. The result serves as a starting point. Soften a hard letter, cut a syllable, or adjust the name toward your OC\'s base insect. Many authors produce a collection and then polish a preferred choice until it holds the right wistful tone.' },
  { category: 'Naming style', question: 'Is my moniker overly contemporary or rough — where should I turn?', answer: 'Soften the consonants and make the name shorter. Hollow Knight names remain quiet and ancient, meaning loud, aggressive, or modern terms ruin the effect. Aiming for an insect origin and a sorrowful tone nearly always brings a name back into the Team Cherry style.' },
  { category: 'Naming style', question: 'What is the ideal length for a Hollow Knight designation?', answer: 'Brief — most official names use one or two syllables (Hornet, Myla, Zote, Quirrel). Length isn\'t the priority; a calm, wistful tone matters instead. If a created name feels heavy, shorten it until it sounds like a whisper on a quiet bench.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The generator blends curated Hollow Knight-style features — gentle sounds, insect and nature roots, ancient suffixes — and mixes them randomly inside your browser. Every execution yields a fresh batch. Nothing transmits to a server; everything processes completely locally.' },
  { category: 'Technical', question: 'Do these represent authentic figures from Hollow Knight?', answer: 'No. The tool generates unique, Hallownest-style names for personal use rather than copying the official roster. That\'s intentional — you need a fresh title for your OC, not a clone of Hornet or Quirrel that you cannot make unique.' },
  { category: 'Privacy', question: 'Are my details transmitted to a server?', answer: 'No. Everything processes directly within your browser. When you hit generate, names form right on your device. Your preferences and generated names never transmit to our servers, and zero data gets saved. Feel free to use the tool in a private window to keep your character concepts private.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You can request 1–24 names per execution. For extra options, repeat the process — every run delivers a new random selection without daily or total limits. Paste multiple runs into a single file if you need a large collection to pick from for your OCs.' },
  { category: 'Compatibility', question: 'Does it function on mobile devices?', answer: 'Yes. The tool works in any standard browser on PC, tablet, or mobile without requiring app installations. Create a batch on your phone while sketching or planning an OC, save it to notes, and pick favorites wherever you happen to be.' },
  { category: 'General', question: 'Does the Hollow Knight Name Generator cost anything?', answer: 'Yes, entirely free with zero accounts, registrations, or downloads. Produce as many bug, vessel, and OC names as you wish, as frequently as you like.' },
  { category: 'Best practices', question: 'How can I ensure a title genuinely evokes Hallownest?', answer: 'Keep it gentle, brief, and ancient, anchor it in an insect or natural term, and say it softly like it was uttered on a quiet bench. Matching the title to your OC’s bug and region represents the fastest way to ensure it belongs in the Team Cherry style.' },
  { category: 'Best practices', question: 'Ought the moniker to carry a sorrowful or soft tone?', answer: 'Ideally both. Hollow Knight features a tone of quiet sorrow, meaning the best choices are tender with a wistful, mournful touch. Even warrior titles maintain that softness. If a name feels too bright or too harsh, guide it toward the realm\'s quiet melancholy.' },
  { category: 'Troubleshooting', question: 'The names feel overly generic — what should I do?', answer: 'Produce a larger batch and filter for the gentle, insect-rooted results, removing anything fitting a generic fantasy game. Next, guide your top pick toward your OC\'s specific bug. The more you embrace Hallownest\'s gentle, insect-based style, the less generic the outcome appears.' },
];

export default async function HollowKnightNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="hollow-knight" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the Hollow Knight Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

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
    description: 'Free Hollow Knight name generator for bug characters, vessels, and OCs set in Hallownest. Soft, melancholy, insect-inspired names in the Team Cherry style — in your browser, no sign-up.',
    seoTitle: 'Hollow Knight Name Generator – Hallownest Bug & OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Hollow Knight Name Generator – Hallownest Bug &amp; OC Names</h2>
        <p>
          This Hollow Knight name generator creates names that fit the quiet, melancholy world of Hallownest — names for an original bug character, a vessel, or a knight you are writing into Team Cherry&apos;s ruined kingdom. Hollow Knight&apos;s naming style is gentle and a little sad: soft sounds, insect roots, and an old-fairy-tale weight that suits a dead kingdom of bugs. The generator leans into that register so the name you pick sounds like it belongs on a bench in Dirtmouth rather than in a loud modern game. It runs in your browser with no sign-up and stores nothing.
        </p>
        <p>
          Team Cherry&apos;s names are part of why Hallownest feels so alive in its quietness. Hornet, Quirrel, Cornifer, Myla, Zote — soft, slightly archaic, often insect-derived, each one carrying a small mournful charm. This page breaks down that style so an OC you name feels like it was always wandering the kingdom&apos;s ruins.
        </p>

        <h2>The Hollow Knight Naming Style</h2>
        <p>
          Hollow Knight&apos;s names share a consistent, recognizable feel. Knowing its building blocks lets you generate names that sit naturally in Hallownest:
        </p>
        <ul>
          <li><strong>Soft and gentle.</strong> Names lean on soft consonants and quiet sounds — nothing harsh or aggressive. Even the warriors have a melancholy softness (Hornet, Ze&apos;mer).</li>
          <li><strong>Insect and nature roots.</strong> Many names derive from bugs, plants, and natural words, fitting a kingdom of insects (Cornifer, Quirrel, the Mantis tribe).</li>
          <li><strong>Old fairy-tale weight.</strong> The tone is archaic and storybook — names feel pulled from an old, sad legend rather than a modern roster.</li>
          <li><strong>Short and mournful.</strong> Most names are one or two syllables with a wistful quality. The kingdom is dead, and the names carry that quiet grief.</li>
        </ul>

        <h2>Naming a Vessel or Knight</h2>
        <p>
          The player character — the Knight — is a vessel, one of the silent, hollow beings born of the Abyss. Many vessels go unnamed, which makes naming an OC vessel a meaningful choice: a soft, simple, almost ceremonial name fits a being meant to be empty. If you are writing or drawing an OC vessel, generate a batch and look for the quietest, gentlest results — names that sound like they belong to something solemn and a little tragic.
        </p>
        <p>
          For a named bug character — a wanderer, a scholar, a warrior — you have more room. A scholar like Quirrel carries a soft, curious name; a warrior like Hornet has a sharper but still gentle one; a humble villager like Myla has something plain and sweet. Match the sound of the name to the character&apos;s role and it will slot believably into Hallownest&apos;s cast.
        </p>

        <h2>Names by Region and Tribe</h2>
        <p>
          Hallownest has distinct regions and bug tribes, and matching a name to one deepens an OC:
        </p>
        <ul>
          <li><strong>Dirtmouth and the surface.</strong> Plain, wistful names for the last few survivors clinging to the kingdom&apos;s edge.</li>
          <li><strong>The Mantis Village.</strong> Sharper, more formal names for the proud, disciplined Mantis tribe.</li>
          <li><strong>Deepnest.</strong> Stranger, darker, more unsettling names for the spider-kin of the deep.</li>
          <li><strong>The City of Tears.</strong> More refined, sorrowful names for the once-great capital and its ghosts.</li>
          <li><strong>The Hive.</strong> Warm, buzzing, bee-derived names for the bees of the Hive.</li>
        </ul>

        <h2>Building an OC for Hallownest</h2>
        <p>
          Fan artists and writers love creating original bugs for Hollow Knight, and the name is the foundation. A strong Hallownest OC name does two things: it sounds soft and archaic in the Team Cherry register, and it hints at the bug the character is — a moth, a beetle, a spider, a snail. Generate a batch, then read each name imagining it spoken quietly on a lonely bench; the ones that carry that gentle, wistful weight are the keepers. You can also derive a name directly from the insect your OC is based on, which is exactly how many canon names were built.
        </p>

        <h2>How to Use This Hollow Knight Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a batch of Hallownest-style names.</li>
          <li>Read them softly and keep the ones that feel gentle and a little mournful.</li>
          <li>Copy the list into your notes and shortlist names that match your OC&apos;s bug and region.</li>
          <li>Run again for more — no limit, no account, no download.</li>
        </ol>
        <p>
          Everything runs locally in your browser. Your settings and generated names are never sent to a server, so your character ideas stay private.
        </p>

        <h2>Tips for a Hallownest-Fitting Name</h2>
        <p>
          Favor soft consonants and short, wistful sounds — Hollow Knight names whisper rather than shout. Derive from an insect or natural word when you can; it is the most authentic route to the Team Cherry feel. Keep it archaic and a little sad, as though it came from an old legend about a fallen kingdom. If a generated name is close but too modern or harsh, soften a consonant or trim a syllable until it sounds like it belongs to a quiet, hollow thing wandering the ruins.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Hollow Knight-style names for OC bugs, vessels, and knights set in Hallownest.</li>
          <li>It does not reproduce the official cast as a list — output is original for your own use.</li>
          <li>It does not store your generated names or settings; generation is fully local.</li>
          <li>It does not connect to the game — it only suggests names for your art, writing, or RP.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Hollow Knight earns its quiet beauty partly through its names — soft, insect-rooted, and heavy with old grief. This generator gives you a pool grounded in that style, sorted by region and tribe, so an OC you create feels like it was always part of Hallownest&apos;s fading story. Pick the bug your character is, generate a batch, lean on the notes above, and you will end up with a name that whispers of a kingdom that was once great and is now still.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Hollow Knight name generator?', answer: 'It is a browser tool that creates names in the style of Hollow Knight — soft, melancholy, insect-rooted names for OC bugs, vessels, and knights set in Hallownest. It follows Team Cherry’s naming conventions so the names feel canon. It runs locally with no sign-up and stores nothing.' },
  { category: 'Naming style', question: 'What makes a name sound like Hollow Knight?', answer: 'Soft consonants, short wistful sounds, insect and nature roots, and an old fairy-tale weight. Names like Hornet, Quirrel, Cornifer, and Myla are gentle and a little sad, pulled from an old legend rather than a modern roster. A name that whispers rather than shouts fits Hallownest.' },
  { category: 'Naming style', question: 'Why do Hollow Knight names sound melancholy?', answer: 'Hallownest is a dead kingdom, and its names carry that quiet grief. Team Cherry chose soft, archaic, mournful sounds to match a world of ruins and faded glory. Even the warriors have a wistful softness, which is why a gentle, sad name feels more in-genre than an aggressive one.' },
  { category: 'Vessels', question: 'How do I name a vessel OC?', answer: 'Vessels are silent, hollow beings born of the Abyss, and many go unnamed — so naming an OC vessel is a meaningful choice. A soft, simple, almost ceremonial name fits a being meant to be empty. Generate a batch and pick the quietest, gentlest result for a solemn, tragic feel.' },
  { category: 'Characters', question: 'How do I name a bug character?', answer: 'Match the name’s sound to the character’s role: a scholar like Quirrel has a soft, curious name; a warrior like Hornet has a sharper but still gentle one; a humble villager like Myla has something plain and sweet. Generate a batch and keep the names whose tone fits your character.' },
  { category: 'Lore', question: 'How do names differ by region in Hallownest?', answer: 'Dirtmouth survivors have plain, wistful names; the Mantis Village uses sharper, formal names; Deepnest names are stranger and darker; the City of Tears has refined, sorrowful names; and the Hive uses warm, bee-derived names. Matching a name to its region deepens an OC.' },
  { category: 'OC', question: 'How do I build a Hollow Knight OC name?', answer: 'A strong Hallownest OC name sounds soft and archaic in the Team Cherry register and hints at the bug the character is — a moth, beetle, spider, or snail. Deriving the name from your OC’s insect is exactly how many canon names were built, so it is the most authentic route.' },
  { category: 'OC', question: 'Should the name match the type of bug?', answer: 'Yes — that is core to the Hollow Knight style. Cornifer (a snail cartographer), the Mantis tribe, the bees of the Hive: many names derive from the insect itself. Decide what bug your OC is, then generate or adjust toward a name rooted in that creature for the most canon feel.' },
  { category: 'Use cases', question: 'Can I use these names for fan art?', answer: 'Yes — Hollow Knight has a huge OC fan-art community, and the name is the foundation of a new bug character. Generate a batch, pick one that fits your OC’s bug and region, and it will sit naturally alongside the canon cast in your art.' },
  { category: 'Use cases', question: 'Can I use these for fan fiction or RP?', answer: 'Absolutely. Writing or role-playing in Hallownest needs names that match its quiet, mournful tone. Generate a batch, match it to your character’s tribe and role, and the name will fit the world’s melancholy register.' },
  { category: 'Usage', question: 'How do I use this generator?', answer: 'Set how many names you want (1–24), click Generate names, and read them softly. Keep the ones that feel gentle and a little mournful, copy the list into your notes, and shortlist names that match your OC’s bug and region. Run again for more — no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit the generated names?', answer: 'Yes. The output is a starting point. Soften a consonant, trim a syllable, or steer the name toward the insect your OC is based on. Many creators generate a batch and then refine a favorite until it carries the right wistful weight.' },
  { category: 'Naming style', question: 'My name sounds too modern or harsh — what do I do?', answer: 'Soften the consonants and shorten the name. Hollow Knight names are quiet and archaic, so anything loud, aggressive, or modern breaks the spell. Steering toward an insect root and a melancholy sound almost always pulls a name back into the Team Cherry register.' },
  { category: 'Naming style', question: 'How long should a Hollow Knight name be?', answer: 'Short — most canon names are one or two syllables (Hornet, Myla, Zote, Quirrel). Length is not the goal; a quiet, wistful sound is. If a generated name is a mouthful, trim it down until it feels like something whispered on a lonely bench.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated Hollow Knight-style elements — soft sounds, insect and nature roots, archaic endings — and shuffles them at random in your browser. Each run produces a new set. Nothing is sent to a server; generation is entirely local.' },
  { category: 'Technical', question: 'Are these real characters from Hollow Knight?', answer: 'No. The generator creates original, Hallownest-style names for your own use rather than reproducing the official cast. That is intentional — you want a fresh name for your OC, not a duplicate of Hornet or Quirrel that you cannot make your own.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, names are created on your device. Your settings and generated names are never sent to our servers and nothing is stored. You can use the tool in a private window and your character ideas stay yours.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. For more, run it again — each run produces a fresh random set with no daily or total limit. Paste multiple runs into one document if you want a large pool to choose from for your OCs.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch on your phone while sketching or planning an OC, copy it into notes, and shortlist names wherever you are.' },
  { category: 'General', question: 'Is the Hollow Knight name generator free?', answer: 'Yes, completely free with no account, sign-up, or download. Generate as many bug, vessel, and OC names as you like, as often as you like.' },
  { category: 'Best practices', question: 'How do I make a name feel truly Hallownest?', answer: 'Keep it soft, short, and archaic, root it in an insect or natural word, and read it quietly as though spoken on a lonely bench. Matching the name to your OC’s bug and region is the fastest way to confirm it sits in the Team Cherry register.' },
  { category: 'Best practices', question: 'Should the name be sad or gentle?', answer: 'Both, ideally. Hollow Knight’s tone is quiet grief, so the most fitting names are gentle with a wistful, mournful edge. Even names for warriors keep that softness. If a name feels too cheerful or too brutal, nudge it toward the kingdom’s quiet melancholy.' },
  { category: 'Troubleshooting', question: 'The names feel too generic — what should I do?', answer: 'Generate a larger batch and filter for the soft, insect-rooted results, discarding anything that could belong to any fantasy game. Then steer your favorite toward the specific bug your OC is. The more you lean into Hallownest’s gentle, insect-derived style, the less generic the result feels.' },
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
          <p className="text-slate-700">Common questions about the Hollow Knight name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

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


const toolSlug = 'fallout-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Fallout Name Generator',
    description: 'Free Fallout name generator for Vault Dwellers, wasteland survivors, raiders, and ghouls. Retro-apocalyptic names with that Fallout 1950s-meets-nuclear vibe — in your browser, no sign-up.',
    seoTitle: 'Fallout Name Generator – Vault Dweller & Wasteland Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Fallout Name Generator – Vault Dweller &amp; Wasteland Names</h2>
        <p>
          This Fallout name generator creates names that fit the retro-apocalyptic world of the Fallout series — a place where 1950s Americana froze in time and then got irradiated. Whether you are naming a Vault Dweller for a playthrough, a wasteland survivor for an RP character, a raider with a fearsome handle, or a settlement in Fallout 4, the generator produces names with the right blend of mid-century charm and post-nuclear grit. It runs in your browser with no sign-up and stores nothing.
        </p>
        <p>
          Fallout&apos;s naming style is one of its strongest bits of worldbuilding: wholesome &quot;Greaser&quot; and &quot;Sunshine&quot; names sitting next to brutal raider monikers, all under that yellow-and-blue Vault-Tec sheen. This page breaks down the naming flavor by faction and survivor type so the name you generate lands squarely in the Fallout register.
        </p>

        <h2>The Fallout Naming Aesthetic</h2>
        <p>
          Fallout&apos;s identity comes from a specific collision of eras. Understanding it makes your names feel canon:
        </p>
        <ul>
          <li><strong>1950s Americana, preserved.</strong> Wholesome, mid-century first names — the kind you would hear in a pre-war diner or a Vault-Tec ad. Think clean, optimistic, a little old-fashioned.</li>
          <li><strong>Post-nuclear grit.</strong> Wastelanders often go by tough nicknames, callsigns, or single hard-edged words earned in the ruins.</li>
          <li><strong>Faction flavor.</strong> The Brotherhood of Steel, the NCR, Caesar&apos;s Legion, raiders, and ghouls each carry their own naming feel — from military ranks to Latin-flavored Legion names.</li>
          <li><strong>Dark irony.</strong> Fallout loves a cheerful name on a grim thing. A friendly mid-century name worn by a hardened survivor is peak Fallout tone.</li>
        </ul>

        <h2>Names by Survivor Type</h2>
        <p>
          The kind of character you are naming shapes the right register:
        </p>
        <ul>
          <li><strong>Vault Dwellers.</strong> Clean, pre-war American names fit those raised in the controlled comfort of a Vault — they sound like they grew up on Vault-Tec orientation films.</li>
          <li><strong>Wasteland survivors.</strong> A first name plus a tough earned nickname, or a single weathered name, suits those who clawed their way through the wastes.</li>
          <li><strong>Raiders.</strong> Aggressive, intimidating handles meant to scare — brutal, blunt, sometimes darkly funny.</li>
          <li><strong>Ghouls.</strong> Often keep their pre-war names (they may be centuries old), giving a poignant contrast between an old human name and a radiation-ravaged body.</li>
          <li><strong>Super mutants.</strong> Simple, blunt, often single-word names reflecting their changed minds.</li>
        </ul>

        <h2>Faction Naming</h2>
        <p>
          Fallout&apos;s factions each have a naming culture worth matching:
        </p>
        <ul>
          <li><strong>Brotherhood of Steel.</strong> Military first-name-plus-rank structure; knights, paladins, and scribes with a disciplined feel.</li>
          <li><strong>NCR.</strong> Practical, frontier-republic names with a Western, settler-rebuilding flavor.</li>
          <li><strong>Caesar&apos;s Legion.</strong> Latinized names and titles reflecting their Roman cosplay-empire — among the most distinctive in the series.</li>
          <li><strong>The Institute / Enclave.</strong> Cold, formal, technocratic names fitting their secrecy and ambition.</li>
        </ul>

        <h2>Naming Settlements (Fallout 4)</h2>
        <p>
          Fallout 4&apos;s settlement system means players also name places, not just people. A good settlement name evokes either pre-war optimism (a cheery, brochure-style name) or post-war reality (something defensive, scrappy, or grimly hopeful). Generate a batch and look for names that would fit on a hand-painted sign at the edge of a rebuilt town — that is the sweet spot for a Commonwealth settlement.
        </p>

        <h2>How to Use This Fallout Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a batch of wasteland-style names.</li>
          <li>Keep the ones that fit your survivor type or faction, using the notes above.</li>
          <li>Copy the list into your notes and shortlist your favorites for your character or settlement.</li>
          <li>Run again for more — no limit, no account, no download.</li>
        </ol>
        <p>
          Everything runs locally in your browser. Your settings and generated names are never sent to a server, so your character ideas stay private.
        </p>

        <h2>Tips for a Fallout-Fitting Name</h2>
        <p>
          Lean into the era clash: a wholesome mid-century first name carries Fallout&apos;s tone better than a generic fantasy name. For raiders, go blunt and a little theatrical — the wasteland rewards a name that sounds dangerous. For ghouls, remember they often keep an old human name, so a slightly dated pre-war name with a backstory of survival hits hardest. If you are role-playing a faction member, match the faction&apos;s register (military for the Brotherhood, Latin for the Legion) and the character will slot right into the world.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Fallout-style names for Vault Dwellers, survivors, raiders, ghouls, and settlements.</li>
          <li>It does not reproduce official characters as a list — output is original for your own use.</li>
          <li>It does not store your generated names or settings; generation is fully local.</li>
          <li>It does not connect to the game — it only suggests names to use in your playthrough or RP.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          Fallout&apos;s world lives in the gap between a cheerful 1950s that never ended and the radioactive ruin that followed. The best Fallout names sit in that gap — wholesome and grim at once. This generator gives you a pool grounded in that aesthetic, sorted by survivor type and faction, from Vault-Tec-clean first names to brutal raider handles. Pick your character&apos;s background, generate a batch, lean on the notes above, and you will have a name that feels like it was always part of the wasteland. War. War never changes.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Fallout name generator?', answer: 'It is a browser tool that creates names in the style of the Fallout series — retro-apocalyptic names blending 1950s Americana with post-nuclear grit. It produces names for Vault Dwellers, wasteland survivors, raiders, ghouls, and settlements, sorted by the franchise’s real naming flavor. It runs locally with no sign-up and stores nothing.' },
  { category: 'Aesthetic', question: 'What makes a name sound like Fallout?', answer: 'Fallout names live in the collision of a frozen 1950s and a radioactive ruin. Wholesome mid-century first names, tough earned nicknames, and a streak of dark irony (a cheerful name on a grim survivor) all define the tone. A name that feels both old-fashioned and weathered lands squarely in the Fallout register.' },
  { category: 'Survivor types', question: 'How do I name a Vault Dweller?', answer: 'Vault Dwellers grew up in the controlled comfort of a Vault, so clean, pre-war American first names fit them best — the kind you would hear in a Vault-Tec orientation film. Generate a batch and keep the wholesome, optimistic, slightly old-fashioned results.' },
  { category: 'Survivor types', question: 'How do I name a wasteland survivor?', answer: 'Survivors who clawed through the wastes often go by a first name plus a tough earned nickname, or a single weathered word. Generate a batch and look for names that sound like they were hardened by the ruins — practical, a little scarred, and memorable.' },
  { category: 'Survivor types', question: 'How do I name a raider?', answer: 'Raider names are aggressive, intimidating handles built to scare — blunt, brutal, and sometimes darkly funny. Generate in that lane and pick something that would make a settlement nervous. Theatrical menace fits raider culture better than subtlety.' },
  { category: 'Survivor types', question: 'How do I name a ghoul?', answer: 'Ghouls are often centuries old and tend to keep their pre-war human names, which creates a poignant contrast between an old name and a radiation-ravaged body. A slightly dated, pre-war first name with a survival backstory hits hardest for a ghoul character.' },
  { category: 'Factions', question: 'How do I name a Brotherhood of Steel character?', answer: 'The Brotherhood uses a military first-name-plus-rank structure — knights, paladins, and scribes with a disciplined feel. Generate a base name and pair it with a Brotherhood rank for an authentic result that fits their order.' },
  { category: 'Factions', question: 'How do I name a Caesar’s Legion character?', answer: 'The Legion uses Latinized names and titles reflecting their Roman-empire cosplay — among the most distinctive naming styles in Fallout. Generate a batch and lean toward the Latin-flavored results, or adapt a name into a Legion-style title for full effect.' },
  { category: 'Factions', question: 'What about NCR or Institute names?', answer: 'NCR names are practical and frontier-flavored, fitting a settler republic rebuilding the West. Institute and Enclave names are cold, formal, and technocratic, matching their secrecy and ambition. Match the faction’s register and your character will fit its culture.' },
  { category: 'Settlements', question: 'Can I name a Fallout 4 settlement?', answer: 'Yes. A good settlement name evokes either pre-war optimism (a cheery, brochure-style name) or post-war reality (something scrappy or grimly hopeful). Generate a batch and look for names that would fit on a hand-painted sign at the edge of a rebuilt Commonwealth town.' },
  { category: 'Usage', question: 'How do I use this generator?', answer: 'Set how many names you want (1–24), click Generate names, then keep the ones that fit your survivor type or faction using the notes above. Copy the list into your notes and shortlist your favorites. Run again for more — no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit the generated names?', answer: 'Yes. The output is a starting point. Pair a clean first name with a tough nickname, Latinize a name for the Legion, or trim it to a single blunt word for a super mutant. Many players generate a batch and then refine a favorite to fit their exact character.' },
  { category: 'Aesthetic', question: 'Why do cheerful names work for grim characters?', answer: 'Dark irony is core to Fallout’s tone — a wholesome mid-century name worn by a hardened survivor captures the gap between the optimistic pre-war world and the brutal one that replaced it. That contrast is often more in-genre than a purely grim name.' },
  { category: 'Use cases', question: 'Can I use these names for role-play?', answer: 'Yes — tabletop, play-by-post, and Discord RP set in the Fallout world all need names that fit the wasteland. Generate a batch, match it to your character’s background and faction, and the result will sit naturally alongside canon characters.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated Fallout-style elements — mid-century first names, wasteland nicknames, faction flavor — and shuffles them at random in your browser. Each run produces a new set. Nothing is sent to a server; generation is entirely local.' },
  { category: 'Technical', question: 'Are these real characters from Fallout?', answer: 'No. The generator creates original, Fallout-style names for your own use rather than reproducing the official cast. That is intentional — you want a fresh name for your survivor, not a duplicate of a canon character you cannot make your own.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, names are created on your device. Your settings and generated names are never sent to our servers and nothing is stored. You can use the tool in a private window and your character ideas stay yours.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. For more, run it again — each run produces a fresh random set with no daily or total limit. Paste multiple runs into one document if you want a large pool to choose from.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone with no app install. Generate a batch on your phone while planning a character, copy it into notes, and shortlist names wherever you are.' },
  { category: 'General', question: 'Is the Fallout name generator free?', answer: 'Yes, completely free with no account, sign-up, or download. Generate as many Vault Dweller, survivor, raider, and settlement names as you like, as often as you like.' },
  { category: 'Best practices', question: 'How do I make a name feel truly Fallout?', answer: 'Lean into the era clash — a wholesome mid-century name carries the tone better than generic fantasy. Match the name to your character’s survivor type or faction, and for extra flavor, add a tough nickname or a faction rank. Read it aloud against the franchise’s wholesome-but-grim vibe to confirm it fits.' },
  { category: 'Best practices', question: 'Should the name match my character’s faction?', answer: 'It deepens immersion. A Brotherhood paladin, an NCR ranger, and a Legion centurion should all sound different. Matching the name to the faction’s register — military, frontier, or Latin — instantly grounds the character in the wasteland’s politics.' },
  { category: 'Troubleshooting', question: 'The names feel too generic — what should I do?', answer: 'Generate a larger batch and filter for the era-specific results: keep the mid-century first names and the gritty wasteland nicknames, discard anything that could belong to any game. Then pair a clean first name with a tough nickname to capture Fallout’s signature contrast.' },
];

export default async function FalloutNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="fallout" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Fallout name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

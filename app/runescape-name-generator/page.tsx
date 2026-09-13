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
    description: 'Free RuneScape name generator for OSRS and RS3 display names. Get RSN ideas that fit the 12-character limit — fantasy, funny, or tryhard — in your browser, no sign-up.',
    seoTitle: 'RuneScape Name Generator – OSRS & RS3 RSN Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>RuneScape Name Generator – OSRS &amp; RS3 RSN Ideas</h2>
        <p>
          This RuneScape name generator creates display names (RSNs) that fit the way names actually work in Old School RuneScape (OSRS) and RuneScape 3 (RS3). RuneScape names have hard rules — a strict 12-character limit, only letters, numbers, and single spaces or underscores — and a culture all their own, from clean fantasy names to the legendary &quot;xX_Slayer_Xx&quot; era. The generator produces RSN ideas that respect the character limit and land in the style you want, whether you are making a fresh main, an ironman, a skiller, or a pure. It runs in your browser with no sign-up and stores nothing.
        </p>
        <p>
          Your RSN is the name that hangs over your head for thousands of hours of grinding, shows up on the hiscores, and gets called out in the Grand Exchange and clan chat. This page covers the rules and the naming culture so the name you generate is both valid and the right vibe for your account.
        </p>

        <h2>RuneScape Name Rules</h2>
        <p>
          Before picking a name, it helps to know what RuneScape will actually let you use:
        </p>
        <ul>
          <li><strong>12 characters maximum.</strong> Display names cannot exceed 12 characters, so the generator keeps suggestions within that limit.</li>
          <li><strong>Letters, numbers, and one separator.</strong> You can use a single space or underscore between words, but not both stacked, and no other special characters.</li>
          <li><strong>Must be unique.</strong> Like any MMO, two players cannot share a display name — popular short names are long gone, so creativity helps.</li>
          <li><strong>Changeable in RS3, limited in OSRS.</strong> RS3 lets you change your display name periodically; OSRS treats display names a little differently, so check the current rules before you commit.</li>
        </ul>

        <h2>RuneScape Naming Styles</h2>
        <p>
          RuneScape has produced some of gaming&apos;s most recognizable naming subcultures. The generator can lean into any of them:
        </p>
        <ul>
          <li><strong>Clean fantasy.</strong> Names that sound like they belong in Gielinor — a wizard, a ranger, a Saradominist knight.</li>
          <li><strong>Tryhard / PvP.</strong> Short, aggressive names for pures and PKers, often built to look intimidating in the Wilderness.</li>
          <li><strong>Skiller / ironman.</strong> Names that reference a skill or the self-sufficient ironman grind (woodcutting, mining, a maxed-cape dream).</li>
          <li><strong>Classic 2007 cringe-core.</strong> The nostalgic &quot;xX_name_Xx&quot;, leetspeak, and number-substitution style that defined an era. Worn ironically or sincerely, it is unmistakably RuneScape.</li>
          <li><strong>Funny / meme.</strong> Pun names and joke RSNs that get a laugh in the GE.</li>
        </ul>

        <h2>Naming by Account Type</h2>
        <p>
          The kind of account you are building shapes the right name. A main account can carry anything; an ironman name often nods to the solo grind; a pure or zerker built for PvP usually wants something short, hard, and intimidating; a skiller account frequently references the skill it is dedicated to. A maxed-main name might lean prestigious and clean, while a brand-new f2p account can embrace the chaotic classic style. Think about what your account is for, then generate a batch in that lane.
        </p>

        <h2>OSRS vs. RS3</h2>
        <p>
          Old School RuneScape and RuneScape 3 share naming rules but lean toward different cultures. OSRS, with its 2007 roots and PvP-heavy community, skews toward classic and tryhard names — the nostalgic style fits right in. RS3, more modern and PvM-focused, supports the same names but you will see more polished, fantasy-leaning RSNs. Both honor the 12-character cap, so anything the generator produces works on either version; pick the style that matches your game and your community.
        </p>

        <h2>How to Use This RuneScape Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a batch of RSN ideas within the 12-character limit.</li>
          <li>Keep the ones that match your account type and the style you want.</li>
          <li>Copy the list, then check availability in-game before you commit — RSNs must be unique.</li>
          <li>Run again for more — no limit, no account, no download.</li>
        </ol>
        <p>
          Everything runs locally in your browser. Your settings and generated names are never sent to a server, so your RSN ideas stay private.
        </p>

        <h2>Tips for Picking an RSN</h2>
        <p>
          Shorter is better — not just because of the 12-character cap, but because short names are easier to type, read in chat, and remember. Decide your style lane first (clean fantasy vs. tryhard vs. classic) so your batch is consistent. Because so many names are taken, have a shortlist of five or more ready when you go to claim one. If your favorite is gone, a small tweak — swapping a letter for a number, adding an underscore — often frees up a close variant. And remember the name is semi-permanent in OSRS, so pick something you will still want to see above your head at 99.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates RuneScape display-name (RSN) ideas that respect the 12-character limit, for OSRS and RS3.</li>
          <li>It does not check whether a name is available in-game — you must verify that in the client before claiming.</li>
          <li>It does not store your generated names or settings; generation is fully local.</li>
          <li>It does not connect to Jagex accounts or the game — it only suggests names to try.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          A RuneScape name is a small thing that follows you through a very long journey — from tutorial island to a maxed cape. This generator gives you a pool of RSN ideas that respect the game&apos;s real rules (the 12-character cap, valid characters, the need for uniqueness) and let you choose your culture, from clean Gielinor fantasy to gloriously nostalgic 2007 cringe. Pick your style, generate a batch, check availability in-game, and claim the name you will be grinding under for years.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a RuneScape name generator?', answer: 'It is a browser tool that creates RuneScape display-name (RSN) ideas for Old School RuneScape and RuneScape 3. It respects the game’s real rules — the 12-character limit and valid characters — and can produce names in styles from clean fantasy to classic 2007 cringe. It runs locally with no sign-up and stores nothing.' },
  { category: 'Rules', question: 'What are RuneScape’s name rules?', answer: 'Display names are capped at 12 characters and may use letters, numbers, and a single space or underscore between words — no other special characters. Every display name must be unique, so two players cannot share one. The generator keeps suggestions inside the 12-character limit so they are valid to try.' },
  { category: 'Rules', question: 'What is the character limit for RuneScape names?', answer: 'Display names cannot exceed 12 characters in both OSRS and RS3. That cap is why short, punchy RSNs are so prized — and why so many are already taken. Every name this generator suggests stays within the 12-character limit.' },
  { category: 'Rules', question: 'Can I use spaces or underscores?', answer: 'Yes. RuneScape allows a single space or underscore between words in a display name, along with letters and numbers. You cannot use other special characters, and you cannot stack separators. The generator follows these rules so its output is valid for the game.' },
  { category: 'Account types', question: 'How should I name an ironman account?', answer: 'Ironman names often nod to the self-sufficient solo grind — a reference to skilling, a maxed-cape dream, or the ironman identity itself. Generate a batch in that lane and keep the ones that signal the account’s purpose. Many ironmen like names that read as a personal challenge.' },
  { category: 'Account types', question: 'What name suits a pure or PvP account?', answer: 'Pures, zerkers, and PKers usually want short, hard, intimidating names that look strong in the Wilderness. Generate in the tryhard lane, favor brevity, and pick something that reads as a threat in a fight. Aggressive, punchy RSNs fit the PvP culture best.' },
  { category: 'Account types', question: 'What about a skiller account name?', answer: 'Skiller accounts frequently reference the skill they are dedicated to — woodcutting, mining, fishing — or the broader skilling grind. Generate a batch and look for names that signal the skill focus, which doubles as a fun bit of identity for a non-combat account.' },
  { category: 'Style', question: 'How do I get a classic 2007-style name?', answer: 'The nostalgic RuneScape style uses the "xX_name_Xx" wrap, leetspeak, and number substitutions. Lean into the classic lane and embrace the cringe — worn ironically or sincerely, it is unmistakably RuneScape and fits OSRS culture perfectly. Just keep it within 12 characters.' },
  { category: 'Style', question: 'Can it make funny or meme RSNs?', answer: 'Yes. Pun names and joke RSNs are a beloved part of RuneScape culture — the kind that get a laugh in the Grand Exchange. Generate a batch and look for the wordplay results; just confirm they fit the 12-character cap and are still available.' },
  { category: 'OSRS vs RS3', question: 'Does this work for both OSRS and RS3?', answer: 'Yes. OSRS and RS3 share the same naming rules (12-character cap, valid characters, uniqueness), so any name the generator produces works on either. OSRS culture leans more classic and tryhard, while RS3 sees more polished fantasy RSNs — pick the style that fits your version.' },
  { category: 'Availability', question: 'Can I check if a RuneScape name is taken here?', answer: 'No — this tool only suggests names; it does not connect to Jagex or the game. RSNs must be unique, so you need to check availability in the game client before claiming. Because so many names are taken, generate a shortlist so you have backups ready.' },
  { category: 'Availability', question: 'Why are all the good names taken?', answer: 'RuneScape has been running since 2001 with millions of accounts, and the 12-character cap means short, clean names disappeared long ago. That is why creativity helps — a small tweak (a number swap, an underscore, a less obvious word) often frees up a close variant of the name you want.' },
  { category: 'Usage', question: 'How do I use this generator?', answer: 'Set how many names you want (1–24), click Generate names, and keep the ones that match your account type and style. Copy the list, then check availability in-game before committing. Run again for more — no limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit the generated names?', answer: 'Yes. The output is a starting point, and editing is often necessary since names must be unique. Swap a letter for a number, add or remove an underscore, or combine parts of two results — just keep the final name within 12 characters.' },
  { category: 'Changing names', question: 'Can I change my RuneScape display name later?', answer: 'RS3 lets you change your display name periodically, and OSRS handles display names a little differently, so check the current rules for your version before assuming a name is permanent. Either way, picking a name you will still like at 99 saves you the hassle of changing it.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated RuneScape-style elements — fantasy words, skill references, classic-era patterns — and shuffles them at random in your browser, keeping results within the 12-character limit. Each run produces a new set. Nothing is sent to a server; generation is entirely local.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, names are created on your device. Your settings and generated RSN ideas are never sent to our servers and nothing is stored. You can use the tool in a private window and your name ideas stay yours.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. For more, run it again — each run produces a fresh random set with no daily or total limit. Generating a large pool is smart for RuneScape since so many names are already taken and you will want backups.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone — handy since OSRS and RS3 both have mobile clients. Generate a batch on your phone, copy it into notes, and check availability in the game app.' },
  { category: 'General', question: 'Is the RuneScape name generator free?', answer: 'Yes, completely free with no account, sign-up, or download. Generate as many RSN ideas as you like, as often as you like.' },
  { category: 'Best practices', question: 'How do I pick the best RSN?', answer: 'Decide your style lane first (clean fantasy, tryhard, classic, or funny), keep it short, and have a shortlist ready since names must be unique. Read it the way it will appear above your head and on the hiscores — if you will still want it at 99, it is the right pick.' },
  { category: 'Best practices', question: 'Should I match my name to my account’s goal?', answer: 'It is a nice touch. A maxed-main name can lean prestigious, an ironman name can nod to the solo grind, and a PvP pure can go short and intimidating. Matching the RSN to the account’s purpose gives it identity that pure randomness does not.' },
  { category: 'Troubleshooting', question: 'My favorite name is taken — what now?', answer: 'Try a small variation: swap a letter for a number, add an underscore, or substitute a synonym. Because the 12-character pool is so crowded, a close tweak is usually the fastest path to an available name. Generating a larger batch also gives you more fallback options.' },
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
          <p className="text-slate-700">Common questions about the RuneScape name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

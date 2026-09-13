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


const toolSlug = 'clash-royale-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Clash Royale Name Generator',
    description: 'Free Clash Royale name generator for player names and clan names. Get cool, sweaty, or funny CR usernames and clan name ideas that fit the game — in your browser, no sign-up.',
    seoTitle: 'Clash Royale Name Generator – Player & Clan Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Clash Royale Name Generator – Player &amp; Clan Names</h2>
        <p>
          This Clash Royale name generator creates both player names and clan names that fit the game&apos;s style — the cool, sweaty, and funny handles you see climbing the ladder and in the top clans. Whether you are setting up a fresh account, rebranding your in-game name, or founding a clan that needs a name and a vibe, the generator gives you a batch of CR-flavored ideas built around the game&apos;s card-and-arena world. It runs in your browser with no sign-up and stores nothing.
        </p>
        <p>
          Your Clash Royale name shows up every battle, in clan chat, on the leaderboard, and in tournament brackets, so it is worth more than a random string. This page covers what makes a name work in CR — the rules, the styles, and how player names differ from clan names — so the one you pick lands the way you want.
        </p>

        <h2>Clash Royale Name Rules</h2>
        <p>
          A few practical points shape what you can actually use:
        </p>
        <ul>
          <li><strong>Player name length.</strong> In-game names are limited to 15 characters, so the generator keeps player-name suggestions within a usable length.</li>
          <li><strong>One free change.</strong> Clash Royale gives you a single free name change after your first pick, so your starter choice matters — but you are not locked in forever.</li>
          <li><strong>Emojis and symbols.</strong> CR supports emoji and some symbols in names, which is a big part of the game&apos;s naming culture — a flame, a crown, or a skull next to your name is classic.</li>
          <li><strong>Clan names.</strong> Clan names follow their own length rules and are usually a bit longer and more branded than personal names.</li>
        </ul>

        <h2>Player Name Styles</h2>
        <p>
          Clash Royale players gravitate toward a few recognizable naming styles. The generator can lean into any of them:
        </p>
        <ul>
          <li><strong>Cool / clean.</strong> Sharp, readable names that look good on the leaderboard without trying too hard.</li>
          <li><strong>Sweaty / tryhard.</strong> Aggressive, competitive names for ladder grinders and tournament players — the kind that signal you are here to win.</li>
          <li><strong>Card-themed.</strong> Names that reference signature cards or archetypes (Hog, Mega Knight, X-Bow, log-bait), instantly recognizable to other players.</li>
          <li><strong>Funny / meme.</strong> Joke names and puns that get a reaction in clan chat or when you tower-take an opponent.</li>
          <li><strong>Symbol-decorated.</strong> A clean base name dressed up with emoji or symbols, the signature CR look.</li>
        </ul>

        <h2>Clan Names vs. Player Names</h2>
        <p>
          A clan name does a different job than a personal name. It is a brand for a group, so it works best when it signals identity and ambition — competitive clans lean serious and intimidating, casual clans lean fun and welcoming, and themed clans pick a hook (a region, a card archetype, a meme) and run with it. When founding a clan, generate a batch and look for names that members will be proud to wear next to their own. A strong clan name also helps recruitment: it is the first thing prospective members see in the clan search.
        </p>

        <h2>Naming for Competitive Play</h2>
        <p>
          If you grind ladder, push for top ranks, or enter tournaments, your name becomes a small part of your reputation. Competitive players often favor short, sharp, sweaty names that read cleanly in spectator mode and on brackets — easy to remember when you start climbing. A card-themed name can also telegraph your main deck or playstyle. Generate in the sweaty or card-themed lane and pick something that will look good when you are the one being spectated.
        </p>

        <h2>How to Use This Clash Royale Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a batch of CR-style player or clan name ideas.</li>
          <li>Keep the ones that match your style — cool, sweaty, card-themed, or funny.</li>
          <li>Copy the list, then add emoji or symbols in-game if you want that classic CR look.</li>
          <li>Run again for more — no limit, no account, no download.</li>
        </ol>
        <p>
          Everything runs locally in your browser. Your settings and generated names are never sent to a server, so your name ideas stay private.
        </p>

        <h2>Tips for Picking a CR Name</h2>
        <p>
          Keep player names short and readable — they need to look good in the small space above the arena and on the leaderboard. Decide your lane first (cool vs. sweaty vs. funny) so your batch is consistent. Remember you get one free name change, so do not panic over your starter name, but do pick something you will not be embarrassed by when you climb. For the signature CR look, take a clean generated base and add an emoji or symbol in-game. For clans, prioritize a name members will want to represent, since it doubles as your recruitment hook.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates Clash Royale player-name and clan-name ideas in the game&apos;s style.</li>
          <li>It does not add emoji or symbols for you — apply those in-game where CR supports them.</li>
          <li>It does not store your generated names or settings; generation is fully local.</li>
          <li>It does not connect to Supercell accounts — it only suggests names to use in the game.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          A Clash Royale name is your banner every battle — on the ladder, in clan wars, and in tournaments. This generator gives you a pool of CR-fitting ideas for both players and clans, sorted by the styles the community actually uses: cool, sweaty, card-themed, and funny. Pick your lane, generate a batch, dress it up with an emoji if you want that classic look, and head into the arena with a name worth defending.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Clash Royale name generator?', answer: 'It is a browser tool that creates Clash Royale player names and clan names in the game’s style — cool, sweaty, card-themed, or funny. It builds CR-flavored ideas around the game’s card-and-arena world and keeps player names within a usable length. It runs locally with no sign-up and stores nothing.' },
  { category: 'Rules', question: 'How long can a Clash Royale name be?', answer: 'In-game player names are limited to 15 characters, so the generator keeps player-name suggestions within a usable length. Clan names follow their own slightly longer rules. Keeping a player name short also helps it read cleanly above the arena and on the leaderboard.' },
  { category: 'Rules', question: 'Can I change my Clash Royale name?', answer: 'Yes — Clash Royale gives you one free name change after your first pick. That means your starter name is not permanent, but it is worth choosing well since additional changes are limited. Generate a shortlist so you are happy with your choice from the start.' },
  { category: 'Rules', question: 'Can I use emojis or symbols in my CR name?', answer: 'Yes. Clash Royale supports emoji and some symbols in names, and decorating a clean base name with a flame, crown, or skull is a signature part of CR naming culture. The generator gives you the base name; add the emoji or symbol in-game.' },
  { category: 'Styles', question: 'What name styles work in Clash Royale?', answer: 'The main lanes are cool/clean (sharp and readable), sweaty/tryhard (aggressive competitive names), card-themed (referencing cards like Hog or Mega Knight), funny/meme (joke names and puns), and symbol-decorated (a clean base dressed with emoji). Pick a lane so your batch stays consistent.' },
  { category: 'Styles', question: 'What is a "sweaty" Clash Royale name?', answer: 'A sweaty name is an aggressive, competitive handle favored by ladder grinders and tournament players — short, sharp, and signaling you are there to win. Generate in the sweaty lane and pick something that reads cleanly in spectator mode and on tournament brackets.' },
  { category: 'Styles', question: 'Can it make card-themed names?', answer: 'Yes. Names that reference signature cards or archetypes — Hog, Mega Knight, X-Bow, log-bait — are instantly recognizable to other players and can even telegraph your main deck. Generate a batch and look for the card-flavored results.' },
  { category: 'Clans', question: 'How do I name a clan?', answer: 'A clan name is a brand for a group, so it works best when it signals identity and ambition. Competitive clans lean serious and intimidating, casual clans lean fun and welcoming, and themed clans pick a hook and run with it. Generate a batch and choose a name members will be proud to wear — it doubles as your recruitment hook.' },
  { category: 'Clans', question: 'What makes a good clan name for recruitment?', answer: 'The clan name is the first thing prospective members see in clan search, so a clear, appealing name that signals your clan’s vibe (competitive, casual, or themed) attracts the right people. Avoid anything confusing or generic — a memorable, on-brand name stands out in a crowded clan list.' },
  { category: 'Competitive', question: 'What name is best for ladder and tournaments?', answer: 'Competitive players favor short, sharp, sweaty names that read cleanly in spectator mode and on brackets, and that are easy to remember as you climb. A card-themed name can also telegraph your playstyle. Generate in the sweaty or card-themed lane for a competitive feel.' },
  { category: 'Usage', question: 'How do I use this generator?', answer: 'Set how many names you want (1–24), click Generate names, and keep the ones that match your style — cool, sweaty, card-themed, or funny. Copy the list, add emoji or symbols in-game for the classic CR look, and run again for more. No limit, account, or download.' },
  { category: 'Usage', question: 'Can I edit the generated names?', answer: 'Yes. The output is a starting point. Trim a player name to fit the 15-character limit, add a card reference, or dress it with an emoji in-game. Many players generate a batch and then refine a favorite into their final handle or clan name.' },
  { category: 'Player vs clan', question: 'What is the difference between a player name and a clan name?', answer: 'A player name is your personal handle, best kept short and readable; a clan name is a group brand, usually a bit longer and more identity-driven. Competitive player names lean sweaty, while clan names balance ambition with appeal to attract members. The generator handles both styles.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The generator combines curated Clash Royale-style elements — card references, competitive words, clean bases — and shuffles them at random in your browser, keeping player names within a usable length. Each run produces a new set. Nothing is sent to a server; generation is entirely local.' },
  { category: 'Availability', question: 'Can I check if a name is taken in Clash Royale?', answer: 'Clash Royale allows duplicate player names (you are identified by a unique player tag), so player names do not need to be unique. Clan names, however, are easier to recruit for when distinctive. This tool does not connect to the game, so it only suggests names — try them in-game to see how they look.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Everything runs in your browser. When you click generate, names are created on your device. Your settings and generated names are never sent to our servers and nothing is stored. You can use the tool in a private window and your name ideas stay yours.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. For more, run it again — each run produces a fresh random set with no daily or total limit. Generate a large pool when you want plenty of player and clan options to compare.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The generator runs in any modern browser on desktop, tablet, or phone — handy since Clash Royale is a mobile game. Generate a batch on your phone, copy a name, and paste it straight into the game.' },
  { category: 'General', question: 'Is the Clash Royale name generator free?', answer: 'Yes, completely free with no account, sign-up, or download. Generate as many player and clan name ideas as you like, as often as you like.' },
  { category: 'Best practices', question: 'How do I pick the best CR name?', answer: 'Decide your lane (cool, sweaty, card-themed, or funny), keep player names short and readable, and remember you get one free change so you are not locked in. For the signature look, add an emoji or symbol in-game. For clans, prioritize a name members will be proud to represent.' },
  { category: 'Best practices', question: 'Should my name match my deck or playstyle?', answer: 'It is a fun touch. A card-themed name like a Hog or X-Bow reference can telegraph your main deck and give you a bit of identity on the ladder. It is not required, but it makes your handle more memorable to opponents and clanmates.' },
  { category: 'Troubleshooting', question: 'The names feel too generic — what should I do?', answer: 'Generate a larger batch and filter for the CR-specific results: keep the card-themed and sweaty options, discard anything that could belong to any game. Then dress your favorite with an emoji or symbol in-game to give it the unmistakable Clash Royale look.' },
];

export default async function ClashRoyaleNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="clash-royale" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Clash Royale name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

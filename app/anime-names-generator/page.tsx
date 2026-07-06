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


const toolSlug = 'anime-names-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Anime Names Generator',
    description: 'Free anime names generator for character names and nicknames. Create anime-style name ideas in your browser with no sign-up.',
    seoTitle: 'Anime Names Generator – Character Names & Nicknames',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Anime Names Generator – Character Names &amp; Nicknames</h2>
        <p>
          Anime characters live and die by their names. A name in the style of anime and manga sets the tone before a character moves — soft and lyrical for a gentle heroine, sharp and hard for a rival, dramatic and ornate for a final boss. This anime names generator builds Japanese-flavored given names, family names, and evocative nicknames so you can name original characters (OCs) for fan fiction, role-play, art, and cosplay. It runs entirely in your browser, needs no sign-up, and gives you 1–24 names per run.
        </p>
        <p>
          Anime naming is not arbitrary. Writers pick names whose sounds map to kanji meanings, lean on nature and virtue words, and use honorifics and nicknames to show relationships. The guide below walks through those real conventions — name order, meaning, tropes, romaji, and honorifics — so the names you generate feel at home in an anime world rather than randomly assembled.
        </p>

        <h2>How Japanese Name Order Works</h2>
        <p>
          In Japanese, the <strong>family name comes before the given name</strong> — Uzumaki Naruto, Kurosaki Ichigo, Yagami Light. English-language releases usually flip this to given-name-first (Naruto Uzumaki), which is why the same character appears in both orders depending on the source. When you build an OC, decide which order fits your project — traditional Japanese order for authenticity, or Western order to match dubbed and subtitled media your audience knows — and stay consistent throughout.
        </p>

        <h2>Names That Carry Hidden Meaning</h2>
        <p>
          One hallmark of anime naming is meaning woven into the sound. Because Japanese names are written in kanji, and most kanji have several possible readings, writers choose characters whose meaning quietly foreshadows the arc: a name built on the kanji for &quot;light&quot; on a protagonist, or &quot;darkness&quot; on a villain. Common meaning-elements include:
        </p>
        <ul>
          <li><strong>Nature:</strong> hana (flower), yuki (snow), sora (sky), tsuki (moon), umi (sea), kaze (wind).</li>
          <li><strong>Virtue &amp; strength:</strong> makoto (sincerity), takeshi (strong/warrior), akira (bright/clear), rei (grace).</li>
          <li><strong>Light &amp; season:</strong> hikari (light), haru (spring), aki (autumn), hoshi (star).</li>
        </ul>
        <p>
          If meaning matters to your character, take a generated name you like and look up kanji whose reading matches, so the written form reinforces the personality you have in mind.
        </p>

        <h2>Common Anime Naming Tropes</h2>
        <p>
          Certain naming patterns recur across the medium, and echoing them makes an OC feel genuinely anime. Protagonists often get bright, hopeful, easy-to-shout names. Rivals and antagonists get sharper sounds or darker imagery. Cool, aloof characters frequently have short, clipped names. Comic-relief characters may carry slightly silly or overly grand names for contrast. Meanwhile, whole casts are sometimes named on a shared theme — flowers, numbers, celestial bodies — so a group reads as connected. Deciding a character&apos;s archetype first helps you keep the names from the generator that fit their role.
        </p>

        <h2>Nicknames, Honorifics, and Epithets</h2>
        <p>
          Anime relationships are often signaled through how characters address one another. <strong>Honorifics</strong> — -san (polite), -kun (familiar, often for boys), -chan (affectionate, cute), -senpai (senior), -sama (great respect) — attach to names and reveal closeness and status; while this generator produces the base name, you add the honorific to fit the scene. <strong>Nicknames</strong> come from shortening a given name or adding an affectionate suffix, and <strong>epithets</strong> are dramatic titles earned in battle — &quot;the Crimson Blade,&quot; &quot;the Silent Fang.&quot; Pull short, punchy results for nicknames, and pair an evocative word with a trait for an epithet.
        </p>

        <h2>Romaji: Spelling Japanese Names in English</h2>
        <p>
          Romaji is the romanized spelling of Japanese, and there are competing systems, so long vowels and certain sounds can be written several ways — Yuki or Yuuki, Ono or Ōno, Shinichi or Shin&apos;ichi. For fiction, pick one romaji spelling per character and keep it consistent, since switching between Yuki and Yuuki mid-story reads as an error. Simpler spellings are usually easier for English-speaking readers, while macrons or doubled vowels signal a more precise transliteration.
        </p>

        <h2>Naming Heroes vs. Villains</h2>
        <p>
          Tone steers the choice between a hero name and a villain name. Heroic and gentle characters suit softer, flowing sounds with pleasant vowels; rivals and villains suit sharper names with hard consonants or ominous imagery. Anime frequently names its cast so you can sense alignment before a character speaks, and you can lean into that. Generate a batch, sort the options by mood, and assign the smoother names to protagonists and the harsher ones to antagonists so your cast telegraphs its dynamics at a glance.
        </p>

        <h2>How to Use This Anime Names Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of anime-style character names.</li>
          <li>Read each aloud and mark the ones that suit specific characters and roles.</li>
          <li>Use the Copy button to save your shortlist, then decide on Japanese or Western name order and add honorifics or nicknames.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your unpublished OCs and story notes stay private until you choose to share them.
        </p>

        <h2>Combining and Tweaking Names</h2>
        <p>
          The strongest anime names often come from bending a generated result rather than taking any single line untouched. Mix a given name from one result with a family name from another, adjust spelling to soften or sharpen a sound, or trim a name into a nickname. The generator gives you flavorful building blocks; shape each one until it truly fits the character in your head, then look up matching kanji if you want the written form to carry meaning.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          A few missteps weaken an anime cast. The first is giving several characters names that sound too alike, which confuses readers — vary the vowels and consonants across your cast. The second is a tone that fights the character, like a harsh name on a soft healer. The third is accidentally reusing a famous canon name (Naruto, Sasuke, Goku), which reads as unoriginal, so a quick search before you commit is worth it. The fourth is mixing romaji spellings for one character. Keep the names that are distinct, on-tone, consistently spelled, and not tied to a well-known existing character.
        </p>

        <h2>Privacy</h2>
        <p>
          This anime names generator runs entirely in your browser. When you set a count and generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. The results are original combinations for your own characters, not entries from any official series. Close the tab and the list is gone unless you copied it.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is an anime names generator?', answer: 'An anime names generator is a browser tool that creates character names and nicknames in the style of anime and manga. It mixes Japanese-flavored given names, family names, and evocative word elements so you can name original characters (OCs) for fan fiction, role-play, art, or cosplay. It runs entirely in your browser, needs no sign-up, and gives you 1–24 name ideas per run. The names are creative inspiration you can adjust and build a character around, not entries from any official series.' },
  { category: 'Naming', question: 'What makes a good anime character name?', answer: 'A strong anime name usually sounds smooth to say, hints at the character\'s personality or role, and fits the tone of the story — soft and lyrical for a gentle heroine, sharp and hard for a rival or villain. Many memorable anime names carry a subtle meaning, like a nature or virtue word woven into the sound. Generate a batch, read each aloud, and keep the ones that already suggest a face and a temperament for your character.' },
  { category: 'Naming', question: 'How does Japanese name order work for anime characters?', answer: 'In Japanese, the family name comes before the given name (for example, Uzumaki Naruto), while English-language releases usually flip it to given-name-first. When you build a character, decide which order fits your project and stay consistent. If you generate separate given and family names, you can pair them in either order — traditional Japanese order for authenticity, or Western order to match dubbed and translated media your audience knows.' },
  { category: 'Naming', question: 'Do anime names carry hidden meanings?', answer: 'Often, yes. Anime writers frequently pick names whose sounds map to kanji meanings — words for flowers, seasons, light, or strength — so a name quietly foreshadows a character\'s arc. This generator leans on evocative elements to echo that habit, but it does not assign real kanji. If meaning matters to you, take a generated name you like and look up kanji whose readings match, so the written form reinforces the character you have in mind.' },
  { category: 'Use cases', question: 'Can I use this to name an OC for fan fiction?', answer: 'Yes. Naming original characters (OCs) is one of the main uses. Generate a batch, pick names that fit each character\'s role and vibe, and drop them into your fan fiction or crossover. Assign contrasting names to allies and antagonists so readers can tell them apart, and tweak spelling or pairing to suit your world. The tool gives you a fast pool of anime-flavored names; the personality and backstory are yours to write.' },
  { category: 'Usage', question: 'How do I use the anime names generator?', answer: 'Choose how many names you want (1–24) and click Generate names to get a fresh batch of anime-style character names. Skim the list, mark the ones that fit your characters, and use the Copy button to save your shortlist to a notes app. Run it again for more options — there is no limit and no account needed. Then read your favorites aloud and picture the character each one belongs to before you commit.' },
  { category: 'General', question: 'Is the anime names generator free?', answer: 'Yes. This anime names generator is completely free to use in your browser. You can generate character names and nicknames as often as you like without creating an account, paying, or downloading anything. There is no daily or total cap on runs, so you can name a whole cast for a fan project, sit with the ideas, and generate more whenever you add new characters.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The anime names generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your character notes stay private, which matters when you are developing an unpublished story or OC. Close the tab and the list is gone unless you copied it.' },
  { category: 'Compatibility', question: 'Does the anime names generator work on mobile?', answer: 'Yes. The generator is responsive and runs in any modern mobile browser, so you can brainstorm character names on your phone during a writing session or a con. Open the page, choose how many names you want, tap Generate, and copy your favorites straight into notes. No app install is required — it works the same on phone, tablet, and desktop.' },
  { category: 'Limits', question: 'How many anime names can I generate at once?', answer: 'You can request 1–24 names per run. For a larger cast, just run it again — each run produces a fresh random set with no daily or total limit. Paste several runs into one document and remove any repeats. The 1–24 range keeps each batch easy to skim so you can quickly spot the names that fit the characters you are building.' },
  { category: 'Usage', question: 'Can I copy the anime names I like?', answer: 'Yes. Use the Copy button to send all generated names to your clipboard as plain text, one per line, then paste them into notes, a manuscript, or a character sheet. This is the intended way to keep a shortlist while you decide, since the generator does not save your runs. Copy each promising batch before generating again so you do not lose a name that fit one of your characters.' },
  { category: 'General', question: 'Do I need an account or download?', answer: 'No. The anime names generator works with no sign-up, login, or install. Open the page, set how many names you want, click generate, and copy the results. There is no email or registration step and nothing to download — it is a self-contained browser tool, easy to pull up whenever you need a name for a new OC or side character.' },
  { category: 'Naming', question: 'How do I name a villain versus a hero in anime style?', answer: 'Tone steers the choice. Heroic and gentle characters suit softer, flowing names with pleasant sounds; rivals and villains suit sharper names with hard consonants or darker imagery. Generate a batch, sort the options by mood, and assign the smoother names to protagonists and the harsher ones to antagonists. Anime often names its cast so you can sense a character\'s alignment before they speak, and you can lean into that with your pairings.' },
  { category: 'Use cases', question: 'Can I use these names for role-play or a game character?', answer: 'Absolutely. Role-players and gamers use anime-style names for RP profiles, MMO characters, and Discord personas. Generate a set, keep the ones that fit your character concept, and adjust spelling to make it your own. Because names may need to be unique on a given platform, keep a shortlist of backups in case your first pick is taken. The tool supplies the anime flavor; you shape the character it belongs to.' },
  { category: 'Technical', question: 'How are the anime names generated?', answer: 'The generator draws from curated word lists tuned for anime naming — Japanese-flavored given and family name elements plus evocative nature and virtue words — and randomly combines them in your browser each time you click generate. Nothing is sent to a server, and every run is independent, so the list differs each time. The output is creative inspiration, not an official character database, so treat each result as raw material to refine.' },
  { category: 'Best practices', question: 'What is the best workflow for naming an anime cast?', answer: 'Set the count to 12 or 24, generate, and copy the batch into a notes app. Read each name aloud and mark the ones that suit specific characters. Shortlist several per role, decide on Japanese or Western name order, then assign the strongest fits to your cast. Run the generator again for fresh options whenever you add a character — the no-account flow is built for this kind of iterative worldbuilding.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming anime characters?', answer: 'A common misstep is giving several characters names that sound too alike, which confuses readers, so vary the sounds across your cast. Another is a name whose tone fights the character — a harsh name on a soft healer, or vice versa. A third is accidentally reusing a famous canon name, which reads as unoriginal. Favor names that are distinct from each other, on-tone, and not tied to a well-known existing character.' },
  { category: 'Naming', question: 'Can I create anime-style nicknames or epithets?', answer: 'Yes. Anime loves nicknames and title-style epithets — a shortened given name, an affectionate suffix feel, or a dramatic moniker earned in battle. Generate a batch and pull short, punchy results to use as nicknames, or combine an evocative word with a character trait for an epithet like a "Crimson" or "Silent" title. These add texture and let other characters address your OC in ways that reveal their relationship.' },
  { category: 'Naming', question: 'Can I combine or tweak the generated names?', answer: 'Yes, and it usually helps. Mix a given name from one result with a family name from another, adjust spelling to soften or sharpen a sound, or add a nickname. The generator gives you flavorful building blocks, and the strongest anime names often come from bending a promising result rather than taking any single line untouched. Shape each one until it truly fits the character in your head.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run tops out at 24 names, but there is no limit on how many times you can run it. To name a large ensemble, generate several batches and paste them into one document, then remove duplicates. This batching approach is the intended way to gather a big pool of candidates before assigning distinct names to every character in your story or campaign.' },
  { category: 'Privacy', question: 'Do you store the anime names I generate?', answer: 'No. Generation happens locally in your browser, so we never receive or store your generated names or settings. You can run the tool in a private or incognito window if you like. Refreshing the page clears the last batch unless you have already copied it, which is why copying your favorites as you go is the safe habit while you are still naming your characters.' },
  { category: 'Troubleshooting', question: 'Can I use the anime names generator offline?', answer: 'Yes. Once the page has loaded, the anime names generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm character names offline — at a convention, on a trip, or anywhere without signal — and copying to your clipboard works offline too. You only need a connection to load the page the first time.' },
  { category: 'General', question: 'Are the generated names from real anime or original?', answer: 'The names are random original combinations, not pulled from any specific anime or manga, though they are styled to feel at home in one. Because some combinations can accidentally resemble a well-known character\'s name, it is worth a quick search before you build your OC around a favorite, so your character reads as original. Keep a shortlist so you have alternatives if one turns out to be too close to an existing name.' },
];

export default async function AnimeNamesGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="anime" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Anime Names Generator name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}


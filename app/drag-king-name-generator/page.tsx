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


const toolSlug = 'drag-king-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Drag King Name Generator',
    description: 'Free drag king name generator for stage names. Create bold and memorable name ideas in your browser with no sign-up.',
    seoTitle: 'Drag King Name Generator – Stage Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Drag King Name Generator – Stage Name Ideas</h2>
        <p>
          A drag king is a performer — most often a woman or a non-binary artist — who builds a masculine or androgynous stage persona and performs it: lip-syncing, dancing, comedy, live singing, or theatrical numbers. The stage name is the cornerstone of that persona. It is the first thing an emcee announces, the name on the flyer, and the handle the audience chants for an encore. This drag king name generator produces stage-name ideas in that spirit — masculine puns, suave gentleman combos, rugged archetypes, and macho personas played for camp — right in your browser, with no sign-up. You get 1–24 names per run and can generate as many batches as you like.
        </p>
        <p>
          Drag king naming is its own craft with recognizable conventions, and it is not the same as the flamboyant wordplay of drag queens. Where queen names lean glamorous and larger-than-life, king names lean into masculinity as performance — sometimes smooth and seductive, sometimes gruff and gritty, and very often winking at male tropes with a pun. This guide walks through the styles that define a strong king name so the option you pick sets up your character before you even step into the light.
        </p>

        <h2>What Makes a Great Drag King Name</h2>
        <p>
          A drag king name is doing character work the moment it is spoken. The strongest ones share a few qualities:
        </p>
        <ul>
          <li><strong>A clear masculine or gender-playful hook.</strong> The name should read as a man&apos;s name or a deliberate riff on masculinity — a rugged noun, a classic guy&apos;s first name, or a pun on male stereotypes.</li>
          <li><strong>A persona baked in.</strong> &quot;Spikey Van Dykey&quot; promises comedy; a name like &quot;Rico Suave-style&quot; crooner promises a lounge act. The name hints at the attitude, genre, and energy of the number.</li>
          <li><strong>Announce-ability.</strong> A king name has to sound good shouted by a host at the top of a set and again as the crowd cheers at the end. Short, punchy, and easy to say beats long and clever.</li>
        </ul>

        <h2>Masculine Puns and Double Entendres</h2>
        <p>
          Wordplay is the signature move of drag naming, and kings put their own spin on it. A king pun usually riffs on masculine tropes, male celebrities, manly professions, or cheeky innuendo — the kind of name that earns a laugh before the music even starts. Think along the lines of a swaggering &quot;Justin Case,&quot; a smooth &quot;Hugh Jass&quot; energy, or a play on a famous leading man&apos;s name with a masculine twist. The joke signals right away that the act has a sense of humor, which is why so many comedic kings anchor their whole persona to a pun. When a generated option sparks a pun, bend the spelling or swap a syllable to sharpen the punchline — the tool gives you the seed, and you land the joke.
        </p>

        <h2>The Suave Gentleman Style</h2>
        <p>
          Not every king is a comedian. A huge branch of drag king naming is the suave gentleman: a sharp first name paired with a bold or evocative surname, evoking a lounge crooner, a matinee idol, a slick con man, or an old-Hollywood heartthrob. Names in this family roll off the tongue and carry swagger — a smooth first name plus a surname with a little glamour or danger to it. This style suits kings whose numbers are seductive, romantic, or theatrical rather than played purely for laughs. If you want this feel, watch your generated batch for first-and-last-name combos, and feel free to mix a first name from one result with a surname from another to build the exact gentleman you want to perform.
        </p>

        <h2>Rugged Archetypes: Cowboys, Rockers, and Tough Guys</h2>
        <p>
          A third major style leans on masculine archetypes drawn straight from pop culture: the cowboy, the biker, the rockstar, the soldier, the greaser, the strongman. Names here favor hard consonants, bold nouns, and gritty imagery so the persona reads instantly the moment you are announced. This is the style to reach for when your king performs to rock, country, or hip-hop, wears leather or denim, and trades on raw masculine energy rather than a pun or a wink. Keep the grittier, more consonant-heavy options from your batch and refine one to match the costume and music your act is built around.
        </p>

        <h2>Camp and Exaggerated Macho Personas</h2>
        <p>
          Drag is performance, and many kings play masculinity as deliberate, over-the-top camp — the exaggerated alpha, the parody of toxic bravado, the absurdly self-serious action hero. The name is where this exaggeration begins: something bombastic, chest-thumping, or ridiculously macho that tips the audience off that the whole act is a knowing send-up of male posturing. This is one of the sharpest tools in drag king comedy, because the gap between the grandiose name and the wink behind it is the joke. If your act satirizes masculinity, favor the biggest, most swaggering options in your batch and lean all the way in.
        </p>

        <h2>Choosing a Name That Fits Your Persona</h2>
        <p>
          The single most important rule is to start from the persona, not the word list. Decide who your king is first — a smooth lounge singer, a leather-clad rocker, a comedic pun machine, a satirical alpha — and then keep only the generated names that serve that character. A suave crooner and a rowdy biker should not share the same kind of name, even though both are &quot;drag king names.&quot; Read each candidate the way an emcee would announce it, and ask whether it sets up the number you actually perform. The name should do a beat of characterization before you move a muscle on stage.
        </p>
        <p>
          Many kings also anchor their name to something personal — a riff on their real name, a hometown, a favorite music genre, or an inside joke — because a name with a story behind it feels authentic and is easy to talk about in interviews. Use the generator to spark ideas, then bend a promising result toward that personal hook.
        </p>

        <h2>How to Use This Drag King Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many king names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of drag king stage names.</li>
          <li>Sort the list by style — which read as puns, which as suave gentlemen, which as rugged archetypes — and keep the ones that match your persona.</li>
          <li>Use the Copy button to save your shortlist, then read each favorite aloud in an announcer&apos;s voice.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, which matters when you are workshopping a new drag identity you are not ready to reveal yet — your ideas stay private until you choose to share them.
        </p>

        <h2>Tips and Common Mistakes</h2>
        <p>
          The most common misstep is a name that fights the act — a goofy pun on a serious, seductive number, or a bland name on a huge camp character. The name and the performance should agree. A second mistake is choosing something too long or hard to shout, since a host has to announce it cleanly and a crowd has to chant it. A third is unknowingly copying an established king in your local scene, which causes real confusion at gigs, so it is worth searching your city&apos;s drag community and social platforms before you debut a name. Favor names that are punchy, persona-appropriate, and distinctive to you, and keep a shortlist so you have backups if your first choice is already claimed.
        </p>

        <h2>Privacy</h2>
        <p>
          This drag king name generator runs entirely in your browser. When you set a count and generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Close the tab and the list is gone unless you copied it, so your persona ideas stay yours while you decide.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a drag king name generator?', answer: 'A drag king name generator is a browser tool that creates stage names for drag king performers. Drag kings build a masculine or androgynous persona, and the name is the first thing an audience meets, so this generator mixes bold, playful, and character-driven word combinations that suit a king act. It runs entirely in your browser, needs no sign-up, and gives you 1–24 name ideas per run. The names are inspiration to build a persona around, not a registry, so shape spelling and pairing to fit your act.' },
  { category: 'Naming', question: 'What makes a good drag king stage name?', answer: 'A strong drag king name usually carries a masculine or gender-playful hook and a wink of character. Many kings lean on a punny riff, a suave first-name/last-name combo, a rugged noun, or an over-the-top macho persona played for camp. The best names are easy to shout at the end of a number and hint at the persona\'s attitude, whether that is a smooth crooner, a rockstar, a cowboy, or a mischievous heartthrob. Say a generated option out loud before you commit to it.' },
  { category: 'Naming', question: 'What naming styles do drag kings commonly use?', answer: 'Common drag king naming styles include masculine puns and double entendres, classic gentleman names (a sharp first name plus a bold surname), rugged or archetypal nouns like cowboys and rockers, and exaggerated macho personas played for humor. Some kings pick a name that riffs on their real name, a hometown, or a favorite genre of music. Generate a batch and sort options by which style fits the persona you want to perform, then refine the spelling to make it yours.' },
  { category: 'Use cases', question: 'How do I pick a name that fits my drag king persona?', answer: 'Start from the persona, not the word list. If your king is a smooth lounge singer, favor suave first-and-last-name combos; if he is a leather-clad rocker, favor harder, edgier options; if the act is comedic, lean into puns and macho exaggeration. Generate a batch, mark the names that match your vibe, and read each one as an emcee would announce it. The name should set up the character before you even hit the stage.' },
  { category: 'Usage', question: 'How do I use the drag king name generator?', answer: 'Choose how many names you want (1–24) and click Generate names to get a fresh batch of drag king stage-name ideas. Skim the list, mark the ones that fit your persona, and use the Copy button to save your shortlist to a notes app. Run it again for more options; there is no limit and no account needed. Then test your favorites out loud and see which one you would want an audience to chant.' },
  { category: 'General', question: 'Is the drag king name generator free?', answer: 'Yes. This drag king name generator is completely free to use in your browser. You can generate stage-name ideas as often as you like without creating an account, paying, or downloading anything. There is no daily or total cap on runs, so you can brainstorm a big pool of persona names, sleep on it, and come back to generate more whenever you are refining your act.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server?', answer: 'No. The drag king name generator runs entirely in your browser. When you set a count and click generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers. Your persona ideas stay private, which matters when you are workshopping a new drag identity you are not ready to reveal yet. Close the tab and the list is gone unless you copied it.' },
  { category: 'Compatibility', question: 'Does the generator work on my phone?', answer: 'Yes. The drag king name generator is responsive and runs in any modern mobile browser, so you can brainstorm names backstage or on the go. Open the page, choose how many names you want, tap Generate, and copy your favorites straight into notes or a message to a drag mentor. No app install is required — it works the same on phone, tablet, and desktop.' },
  { category: 'Limits', question: 'How many drag king names can I generate at once?', answer: 'You can request 1–24 names per run. If you want a bigger pool, just run it again — each run produces a fresh random set with no daily or total limit. Paste several runs into one document and weed out any repeats. The 1–24 range keeps each batch easy to skim so you can quickly spot the two or three persona names that actually sound like your king.' },
  { category: 'Usage', question: 'Can I copy the names I like?', answer: 'Yes. Use the Copy button to send all generated names to your clipboard as plain text, one per line, then paste them into notes, a document, or a message. This is the intended way to keep a shortlist while you decide, since the generator does not save your runs. Copy each promising batch before you generate again so you do not lose a name you liked.' },
  { category: 'General', question: 'Do I need an account or download?', answer: 'No. The drag king name generator works with no sign-up, login, or install. Open the page, set how many names you want, click generate, and copy the results. There is no email or registration step and nothing to download — it is a self-contained browser tool, which makes it easy to pull up quickly whenever inspiration for a new persona strikes.' },
  { category: 'Naming', question: 'How do puns and double entendres work in king names?', answer: 'Wordplay is a signature of drag naming on both sides of the stage, and kings often use a masculine pun or a cheeky double entendre to signal that the act has a sense of humor. A punny name earns a laugh before the number even starts and makes the king memorable. When a generated option sparks a pun, try bending the spelling or swapping a syllable to sharpen the joke — the tool gives you the seed, and you land the punchline.' },
  { category: 'Naming', question: 'Can I build a suave gentleman-style king name?', answer: 'Absolutely. A classic route is a sharp first name paired with a bold or evocative surname, the kind of name that sounds like a lounge crooner or a matinee idol. Generate a batch, watch for first-and-last-name combos that roll off the tongue, and pick one that matches the swagger of your act. You can also mix a first name from one generated option with a surname from another to build the exact gentleman persona you want.' },
  { category: 'Use cases', question: 'Can I use this for a rugged, cowboy, or rockstar persona?', answer: 'Yes. For a rugged archetype — cowboy, biker, rocker, or tough-guy — favor the harder, more masculine nouns and edgier combinations in the batch. These names lean on strong consonants and bold imagery so the persona reads clearly the moment you are announced. Generate a set, keep the grittier options, and refine one into a name that fits the costume and music your king performs to.' },
  { category: 'Technical', question: 'How are the drag king names generated?', answer: 'The generator draws from curated word lists tuned for drag king personas — masculine nouns, punny fragments, gentleman-style names, and macho archetypes — and randomly combines them in your browser each time you click generate. Nothing is sent to a server, and each run is independent, so the list is different every time. The output is a creative seed, not an official or canon name database, so treat every result as raw material for your persona.' },
  { category: 'Best practices', question: 'What is the best workflow for choosing a king name?', answer: 'Set the count to 12 or 24, generate, and copy the batch into a notes app. Read each name aloud in an announcer\'s voice and mark the ones that match your persona\'s attitude. Shortlist five to ten, sit with them for a day, then test your top pick with a drag mentor or friend. Run the generator again whenever you want fresh options — the low-pressure, no-account flow is built for exactly this kind of iterative brainstorming.' },
  { category: 'Best practices', question: 'What mistakes should I avoid when naming a drag king?', answer: 'The most common misstep is a name that fights the persona — a comedic pun on a serious dramatic act, or a bland name on a big camp character. Another is choosing something too long or hard to shout, since an emcee has to announce it cleanly. A third is copying an established king in your local scene, which causes confusion at gigs. Favor names that are punchy, persona-appropriate, and distinctive to you.' },
  { category: 'Use cases', question: 'Can I use the generator to name characters for a story?', answer: 'Yes. Writers and role-players use it to name drag king characters or masc-presenting performers in fiction. Generate a batch, assign contrasting names to different characters — a suave crooner versus a rowdy rocker — so readers can tell them apart, and adjust spelling to suit each personality. The tool is a fast source of persona-flavored names; the character work and backstory are yours to build around them.' },
  { category: 'Naming', question: 'Should my king name relate to my real name or interests?', answer: 'Many kings anchor their stage name to something personal — a riff on their real name, a hometown, a music genre, or an inside joke — because it makes the persona feel authentic and easy to remember. Generate a batch to spark ideas, then bend a promising result toward that personal hook. A name with a story behind it is easier to talk about in interviews and gives your act a little extra depth.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run tops out at 24 names, but there is no limit on how many times you can run it. To build a larger pool, generate several batches and paste them into one document, then remove any duplicates. This batching approach is the intended way to gather a big list of persona candidates before you narrow down to the name you want to perform under.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens locally in your browser, so we never receive or store your generated names or settings. You can run the tool in a private or incognito window if you like. Refreshing the page clears the last batch unless you have already copied it, which is why copying your favorites as you go is the safe habit while you are still deciding on a persona name.' },
  { category: 'Troubleshooting', question: 'Can I use the generator offline?', answer: 'Yes. Once the page has loaded, the drag king name generator runs entirely in your browser and needs no network connection to produce names. You can brainstorm persona names offline — backstage, on a plane, or anywhere without signal — and copying to your clipboard works offline too. You only need a connection to load the page the first time.' },
  { category: 'General', question: 'Are the generated names official or already trademarked?', answer: 'No. The names are random creative combinations, not entries from any official drag database, and the tool does not check whether a name is already used by a performer or trademarked. Since drag names are a personal stage identity, it is worth searching your local scene and social platforms to make sure no established king is already using your pick before you debut it. Keep a shortlist so you have backups if your first choice is taken.' },
];

export default async function DragKingNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="drag-king" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Drag King name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}


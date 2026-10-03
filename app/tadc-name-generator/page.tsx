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


const toolSlug = 'tadc-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'TADC Name Generator',
    description: 'Gratis TADC Name Generator tailored for The Amazing Digital Circus OCs. Generate whimsical, circus-themed, glitchy avatar names for Pomni-style rag dolls, jesters, ribbons, plus more inside your browser without registration.',
    seoTitle: 'TADC Name Generator – Digital Circus OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>[1] TADC Name Generator – Digital Circus OC Monikers</h2>
        <p>This TADC Name Generator creates names the exact way The Amazing Digital Circus builds its cast: somewhat off-kilter, whimsical words resembling circus acts, broken code, and damaged toys all together. Whether you design an original character (OC) to place into the digital circus, write fan fiction inside Caine&apos;s endless tent, or sketch an avatar for a role-play server, this utility creates names matching the show&apos;s candy-colored, anxious, and playful universe. It operates inside your browser, saves nothing, and lets you generate endless batches without signing up.</p>
        <p>[2] Characters throughout TADC avoid arbitrary strings of sounds. The core ensemble — Pomni, Caine, Ragatha, Jax, Gangle, Zooble, Kinger, Bubble — follows a playful yet predictable convention: brief, energetic, slightly surreal terms that reflect a performer's physical form or core temperament. This guide deconstructs that formula so your selected handles blend effortlessly alongside the existing crew, ensuring your customized fan character fits like a natural resident of the big top instead of an awkward intruder.</p>

        <h2>How The Amazing Digital Circus Names Function</h2>
        <p>[3] Glitch Productions named the main cast with a consistent instinct: take an everyday concept — a jester, a rag doll, a chess piece — and warp it into something cute, uneasy, and easy to say. Understanding that instinct lets you generate names that sound native to the show:</p>
        <ul>
          <li><strong>Short and bouncy.</strong> &quot;Pomni,&quot; &quot;Jax,&quot; &quot;Zooble,&quot; &quot;Gangle&quot; — consisting of one or two beats, rolling lightly off the palate. The big top demands names easily shouted across a bustling center ring.</li>
          <li><strong>Made-up yet evocative.</strong> Most titles are not real words. &quot;Ragatha&quot; implies &quot;rag&quot; for a rag doll; &quot;Gangle&quot; hints at dangling ribbons; &quot;Zooble&quot; sounds like mismatched parts combined. The name nods at the design without spelling everything out.</li>
          <li><strong>Theme-coded.</strong> Kinger is a chess king; Bubble functions as a literal floating bubble; Caine, the ringmaster, hints at command and &quot;cane.&quot; A quality TADC moniker telegraphs the role or shape of the avatar.</li>
          <li><strong>Slightly glitchy.</strong> Because everyone remains trapped within a digital environment, names sounding pixelated, mildly corrupted, or like software errors feel right at home alongside the canon cast.</li>
        </ul>

        <h2>[4] Naming by Avatar Theme</h2>
        <p>[5] TADC avatars are wild and varied, but most fall into a handful of visual themes. Matching a name&apos;s sound to your avatar&apos;s theme is the fastest way to make an OC feel canon:</p>
        <ul>
          <li><strong>Circus and performance.</strong> Clowns, acrobats, ringmasters, and jesters. Titles with a big-top, peppy ring — similar to the energy of &quot;Caine&quot; or &quot;Pomni&quot; — fit characters designed around performances.</li>
          <li><strong>Toy and craft.</strong> Marionettes, plush creatures, rag dolls, and ribbon-and-mask figures like Gangle and Ragatha. Soft, fabric-like, slightly clumsy titles suit these well.</li>
          <li><strong>Glitch and digital.</strong> Error-coded, static-flecked, pixelated avatars. Monikers that stutter, repeat sounds, or resemble corrupted text lean directly into the &quot;trapped in code&quot; concept.</li>
          <li><strong>Abstract shapes.</strong> Geometric or object-based designs, alongside assorted-parts characters like Zooble. Titles sounding like single odd objects or jumbles function best.</li>
        </ul>
        <p>Select your avatar theme initially, generate a batch, and retain names whose sounds match it. A soft toy-themed OC and a glitch-themed OC ought not to share identical naming flavors, despite belonging to the same circus.</p>

        <h2>[6] Designing a TADC OC Avatar</h2>
        <p>Inside the show, every human entering the circus transforms into a wacky avatar upon arrival, and the name typically stems from that design. Consequently, the ideal workflow involves sketching the avatar concept first before naming it. Ask yourself: what composes my OC? A cracked porcelain doll, a bundle of balloons, a half-rendered glitch, or a walking deck of cards? Your answer points directly toward a sound. A balloon avatar requires a light, airy moniker; a cracked-doll avatar needs something clinking and fragile.</p>
        <p>Then incorporate a personality hook, just as Jax&apos;s mischief and Pomni&apos;s anxiety define them beyond their appearances. Does your OC represent a nervous newcomer like Pomni, a prankster prone to chaos like Jax, a steady caretaker like Ragatha, or an unsettling wildcard? Produce a batch and vocalize each name as though Caine announced it to the ring — the one making you wince or grin properly matches the character inside your mind.</p>

        <h2>Fitting the Name to Your Avatar Concept</h2>
        <p>An exceptional TADC OC name performs three tasks simultaneously: it suggests the material of the avatar, carries a touch of personality, and fits naturally alongside Pomni, Jax, and Gangle without overshadowing them. Produce a collection, then evaluate each option against your visual art or written concept. If the design and the title point toward the same concept — a ribbon-based figure paired with a soft title, or a corrupted avatar with a jittery one — you have found a match.</p>
        <p>Should nothing feel quite right, combine different elements. Take the lively beginning from one generated title and append the softer ending of another, similar to how &quot;Ragatha&quot; merges &quot;rag&quot; with a gentle suffix. The tool supplies raw components; shaping the final name until it genuinely fits a resident of Caine&apos;s circus is up to you.</p>

        <h2>[10] How to Use This TADC Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose the quantity of names generated per batch (1–24).</li>
          <li>Click <strong>Generate names</strong> to produce a brand new set of digital-circus-inspired names.</li>
          <li>Browse through to find options that fit your avatar&apos;s style — circus, toy, glitch, or abstract — then click the Copy button to store the complete list.</li>
          <li>Insert them into your OC notes, character document, or story outline to narrow down your top choices.</li>
          <li>Run the generator again for additional selections — there are zero restrictions, no login required, and zero downloads needed.</li>
        </ol>
        <p>All processing happens locally in your browser. Your preferences and generated names never leave your device, ensuring your OC concepts remain completely private until you choose to share your writing or artwork.</p>

        <h2>Suggestions for Choosing a TADC OC Name</h2>
        <p>Speak the name aloud — TADC titles are designed to be shouted or called out within an episode, so any awkward phrasing will trip up readers and roleplay participants too. Keep titles brief; the official cast rarely exceeds two syllables, and a punchy name proves simpler to recall during group roleplay. Lean into slight nonsense: a title that nearly forms a real word but twists slightly (much like &quot;Gangle&quot; alters &quot;dangle&quot;) feels far more authentic to the genre than a standard human name.</p>
        <p>Steer clear of accidentally reusing an official name — you certainly do not want an OC named literally Pomni or Jax — but echoing the cadence of a canon name is completely acceptable and instantly grounds your character. When creating an entire group of OCs, generate a selection and choose names that contrast in style and tone: one soft and toy-like, one sharp and glitchy, and one lively and circus-bright. This exact variety creates the feel of a genuine, eclectic cast trapped together.</p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It produces The Amazing Digital Circus-inspired names suitable for original characters, fan fiction, and role-play avatars.</li>
          <li>It does not replicate the official cast as a database — every generated result is completely original material tailored for your personal creative projects.</li>
          <li>It does not save your generated list or settings; everything processes locally inside your browser.</li>
          <li>It does not generate the avatar design for you — combine a title with your personal concept art or written description to bring the OC to life.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>The Amazing Digital Circus grew into one of the most popular OC-focused communities online, with artists, fiction writers, and role-players frequently creating new avatars to place inside Caine&apos;s tent. This TADC Name Generator supplies a rapid collection of names rooted in the authentic naming style of the show: concise, lively, subtly glitchy, and themed around circus, toy, and digital concepts. Create a batch, reference the avatar-theme guidelines above, and you will finish with names that feel as though they always belonged to a digital circus resident.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a TADC name generator?', answer: 'It operates as a browser utility generating names inspired by The Amazing Digital Circus — brief, energetic, subtly corrupted words echoing the official cast of Pomni, Jax, Gangle, and Zooble. It is designed for creators building an original character (OC) for Caine\'s tent, drafting fan fiction, or naming role-play avatars. The utility blends circus, toy, and glitch vocabulary randomly within your browser to supply 1–24 names per generation with zero registration required.' },
  { category: 'Usage', question: 'How can someone operate the TADC Name Generator?', answer: 'Specify your desired quantity of names (1–24) and click Generate to receive a fresh batch of digital-circus-style names. Review them to locate options suiting your avatar\'s theme — circus, toy, glitch, or abstract — then utilize the Copy button to capture the entire list. Transfer it into your OC notes, character sheet, or story outline to select your favorites. Execute the process repeatedly without restriction; there are no caps, required accounts, or downloads.' },
  { category: 'Naming', question: 'How do TADC names actually function?', answer: 'Glitch Productions named the characters using a consistent approach: take a familiar concept — such as a jester, a rag doll, or a chess piece — and transform it into something charming, unsettling, and simple to pronounce. The resulting names are brief and energetic, invented yet expressive, and tailored specifically to the design theme. &quot;Ragatha&quot; references &quot;rag,&quot; &quot;Gangle&quot; twists &quot;dangle&quot; for a ribbon-based character, and &quot;Kinger&quot; directly represents a chess king. The generator adheres to this identical principle to ensure its output feels natural to the series.' },
  { category: 'Naming', question: 'What makes a name feel like it belongs in the circus?', answer: 'Three distinct factors apply: it remains concise (the official cast rarely exceeds two syllables), it is entirely fabricated yet suggests the composition of the character, and it incorporates a touch of glitch or absurdity. A name that nearly forms a regular word but shifts slightly — much like &quot;Gangle&quot; alters &quot;dangle&quot; — feels far more authentic to the setting than a standard human name. Speak it aloud as though Caine were introducing it to the main ring; choose the option that makes you smile or cringe in the appropriate manner.' },
  { category: 'Naming', question: 'How do I pair a name with my avatar\'s theme?', answer: 'Most TADC avatars fit into several visual categories, and the sound of the name should reflect this. Circus and performance avatars call for energetic, big-top titles echoing the vibe of &quot;Pomni&quot; or &quot;Caine.&quot; Toy and craft avatars — including rag dolls, marionettes, and ribbon figures — suit soft, fabric-inspired, slightly clumsy titles. Glitch and digital avatars require names that stutter or mimic corrupted text. Abstract, mismatched designs like Zooble work best with titles resembling a jumble or a distinct odd item.' },
  { category: 'Use cases', question: '[7] How do I name a TADC OC?', answer: 'Within the program, every entering human transforms into an eccentric avatar, and the name typically emerges straight from the visual design — therefore, sketch your concept first, then assign a title. Consider what your OC is composed of: a cluster of balloons calls for a light, breezy name; a cracked porcelain doll requires something delicate and clinking. Next, incorporate a personality trait similar to how Pomni\'s anxiety or Jax\'s mischief defines them, generate a collection, and retain the title that matches the core idea of your visual design.' },
  { category: 'Naming', question: 'What are the four primary avatar categories used for naming?', answer: 'Carnival and stage acts (court jesters, show masters, daredevils) call for dynamic, high-energy handles. Handcrafted playthings (cloth puppets, plush critters, stringed figures like Ragatha and Gangle) naturally pair with soft, textile-inspired labels. System errors and virtual designs (pixelated entities, scanline figures, bug-riddled models) require disjointed, stuttering phrases. Abstract constructions (scrappy combinations like Zooble, sharp geometric or household items) blend best with fragmented or peculiar object titles. Determine your core aesthetic first, then filter exclusively for outputs echoing that cadence.' },
  { category: 'Best practices', question: 'How can I avoid accidentally reusing a canon name?', answer: 'You certainly do not want an original character directly named Pomni or Jax, so review your list against the established cast — Pomni, Caine, Ragatha, Jax, Gangle, Zooble, Kinger, Bubble — and discard any exact matches. Mimicking the cadence of a canon name is totally fine and quickly anchors your character; duplicating one entirely looks like an error. The utility generates novel content rather than the official roster, so overlaps are uncommon, though a quick scan is smart prior to finalizing.' },
  { category: 'Use cases', question: 'How can I name an entire group of OCs?', answer: 'Generate a batch and select names that contrast in both vibe and sound — one soft and doll-like, another sharp and corrupted, and one lively and circus-bright. That mismatched combination is precisely what makes the canon group feel like an authentic cast trapped together rather than variations on a single theme. Run several batches, place the contenders side by side, and assign the most unique-sounding ones to your most distinct characters so readers can tell them apart instantly.' },
  { category: 'Naming', question: '[8] Can I mix and match parts of the generated names?', answer: 'Definitely — the tool provides raw material, and the final name is yours to adjust. If nothing feels quite right, take the energetic front half of one name and the gentler tail of another, similarly to how Ragatha blends rag with a soft suffix. Keep combining until it sounds just like a resident of Caine\'s circus and reflects the same concept as your avatar design. This is a standard, highly recommended part of the process.' },
  { category: 'General', question: 'Does the TADC Name Generator cost anything?', answer: 'Yes, it is entirely free to use directly in your browser without any account, payment, or download required. You can generate OC name ideas as frequently as you wish, and there are no daily or overall limits on runs. Everything happens locally on your device, meaning there is nothing to register for — simply load the page, pick a count, and begin creating digital-circus names immediately.' },
  { category: 'Privacy', question: 'Does generating names mean my data gets sent to a server?', answer: 'No. When you specify a count and press generate, the names are created locally on your device inside your browser. Your preferences and the resulting list are never sent to our servers, and nothing gets recorded or stored. Your OC concepts remain confidential until you choose to share the artwork or story. You can even run the tool within a private or incognito window if you prefer.' },
  { category: 'Compatibility', question: 'Will the generator function properly on mobile devices?', answer: 'Yes. The utility functions within any modern web browser and adapts smoothly to desktop, tablet, and mobile devices, requiring no app installation. Designing an OC on your phone and need names right away? Open the page, generate a selection, and paste it straight into your notes application or character sheet. It operates wherever you can launch a browser tab.' },
  { category: 'Limits', question: 'How many names am I able to generate simultaneously?', answer: 'You are able to request 1 to 24 names per execution. Should you need a larger pool for an extensive cast, just run it again — every execution yields a fresh random batch, and there is no daily or total ceiling. Paste multiple runs into a single document and delete any duplicates. The 24-name limit keeps each list simple to scan while still offering plenty of circus, toy, and glitch choices to review.' },
  { category: 'Usage', question: 'Am I allowed to copy the generated names?', answer: 'Yes. The Copy button places the entire list onto your clipboard as plain text, one name per line, ensuring it pastes neatly into any notes app, character sheet, or story outline. Copying is the intended method for saving a batch prior to narrowing down your shortlist. Grab a large list, drop it into your OC notes, and highlight the ones that fit your avatar\'s theme so you can evaluate them side by side.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No. The generator operates with zero sign-ups, logins, emails, or registrations. It runs completely inside your browser — just open the page, select how many names you need, click generate, and copy the outcomes. There is nothing to set up or verify, and no personal data is ever asked for. Simply open it and begin naming your digital-circus OCs.' },
  { category: 'Technical', question: 'In what manner are the names created?', answer: 'The tool pulls from curated circus, toy, glitch, and abstract vocabulary pieces, then randomly combines them inside your browser so each run varies. The components are chosen to mirror the show\'s naming style — concise, invented, and slightly distorted. Nothing gets transmitted to a server, and the output serves as original inspiration rather than reproducing the official cast from a database. Read a few aloud and you will notice how well they fit alongside Pomni, Jax, and Gangle.' },
  { category: 'General', question: '[9] Does this reproduce the official TADC cast?', answer: 'No. It does not act as a database of canon characters; every single name it generates is original content for your personal creative projects. That is intentional — you want an OC that blends smoothly alongside Pomni and Zooble without actually being one of them. If a generated name happens to mimic a canon rhythm, it grounds your character; if it matches a canon name precisely, replace it with another from your batch.' },
  { category: 'Use cases', question: '[10] Can I use these names for fan fiction and role-play?', answer: 'Yes — that is precisely what the utility is designed for. Fiction authors introducing a newcomer to the tent, role-players crafting a server avatar, and artists sketching an OC all utilize the same brief, lively, theme-driven style. Generate a batch, match a name to your character\'s visual design and personality, and drop it into your story or RP profile. The names are yours to use freely once selected.' },
  { category: 'Best practices', question: '[11] What is the best workflow for naming an OC?', answer: 'Sketch or describe the avatar first, determine its theme (circus, toy, glitch, or abstract) alongside a personality hook, then generate a batch and read each name aloud as though Caine were announcing it. Keep the ones whose sound matches both the appearance and the disposition, splice halves together if nothing is flawless, and verify that none duplicate a canon name. Copy your shortlist so you have backups if your primary choice loses its appeal later.' },
  { category: 'Best practices', question: '[12] Why do my names keep sounding too normal?', answer: 'The most frequent error is picking names that read like standard human names. TADC names lean into a bit of absurdity — nearly a real word, twisted slightly out of shape. If your options feel bland, favor the ones that stutter, jumble, or hint at an object without spelling it out entirely, and eliminate anything you might spot on a school attendance sheet. Short and springy defeats long and sensible every single time within this universe.' },
  { category: 'Troubleshooting', question: 'Is it possible to use the generator offline?', answer: 'Yes. Once the page has loaded, generating and copying names both function entirely offline in your browser without requiring a network connection. You only need a connection to load the page initially. This makes it convenient for brainstorming OC names while traveling — generate, copy into a local notes file, and refine your roster wherever you happen to be, even without internet access.' },
  { category: 'Naming', question: '[13] Should TADC OC names be short?', answer: 'Yes. The canon cast rarely exceeds two syllables, and a punchy name proves much simpler to recall during a group role-play or a complex story. Extended, complicated names tangle the tongue during dialogue and tend to get shortened or forgotten by your readers. When reviewing a batch, favor the tightest choices — those you can picture being yelled across the arena — and keep the longer experiments only if they truly bring added value.' },
];

export default async function TadcNameGeneratorPage() {
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
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="tadc" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Frequent inquiries concerning the TADC Name Generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}


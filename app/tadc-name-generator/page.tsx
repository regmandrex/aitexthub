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
    description: 'Free TADC name generator for The Amazing Digital Circus OCs. Spin up whimsical, glitchy, circus-themed avatar names for Pomni-style jesters, rag dolls, ribbons, and more — in your browser, no sign-up.',
    seoTitle: 'TADC Name Generator – Digital Circus OC Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>TADC Name Generator – Digital Circus OC Names</h2>
        <p>
          This TADC name generator builds names the way The Amazing Digital Circus builds its cast: whimsical, slightly off-kilter words that sound like circus acts, broken toys, and glitching code all at once. Whether you are designing an original character (OC) to drop into the digital circus, writing a fan fiction set in Caine&apos;s endless tent, or sketching an avatar for a role-play server, the tool produces names that fit the show&apos;s playful, anxious, candy-colored world. It runs in your browser, stores nothing, and you can spin up as many batches as you like with no sign-up.
        </p>
        <p>
          TADC names are not random syllables. The canon cast — Pomni, Caine, Ragatha, Jax, Gangle, Zooble, Kinger, Bubble — follows a loose but recognizable logic: short, bouncy, faintly nonsensical words that hint at what a character is made of or how they behave. This page breaks down that logic so the names you keep actually feel like they belong beside the existing avatars, and so an OC you create reads as a real resident of the circus rather than a stranger who wandered in.
        </p>

        <h2>How The Amazing Digital Circus Names Work</h2>
        <p>
          Glitch Productions named the main cast with a consistent instinct: take an everyday concept — a jester, a rag doll, a chess piece — and warp it into something cute, uneasy, and easy to say. Understanding that instinct lets you generate names that sound native to the show:
        </p>
        <ul>
          <li><strong>Short and bouncy.</strong> &quot;Pomni,&quot; &quot;Jax,&quot; &quot;Zooble,&quot; &quot;Gangle&quot; — one or two syllables, springy on the tongue. The circus rewards names you could shout across a ring.</li>
          <li><strong>Made-up but evocative.</strong> Most names are not real words. &quot;Ragatha&quot; suggests &quot;rag&quot; for a rag doll; &quot;Gangle&quot; suggests dangling ribbons; &quot;Zooble&quot; sounds like a jumble of mismatched parts. The name nods at the design without spelling it out.</li>
          <li><strong>Theme-coded.</strong> Kinger is a chess king; Bubble is literally a floating bubble; Caine, the ringmaster, carries a hint of &quot;cane&quot; and command. A good TADC name telegraphs the avatar&apos;s shape or role.</li>
          <li><strong>A little glitchy.</strong> Because everyone is trapped inside a digital world, names that sound mildly corrupted, pixelated, or like a software error feel right at home next to the canon cast.</li>
        </ul>

        <h2>Naming by Avatar Theme</h2>
        <p>
          TADC avatars are wild and varied, but most fall into a handful of visual themes. Matching a name&apos;s sound to your avatar&apos;s theme is the fastest way to make an OC feel canon:
        </p>
        <ul>
          <li><strong>Circus and performance.</strong> Jesters, ringmasters, acrobats, and clowns. Names with a peppy, big-top ring — think the energy of &quot;Pomni&quot; or &quot;Caine&quot; — suit a character built around an act.</li>
          <li><strong>Toy and craft.</strong> Rag dolls, plush creatures, marionettes, and ribbon-and-mask figures like Ragatha and Gangle. Soft, fabric-y, slightly clumsy-sounding names fit here.</li>
          <li><strong>Glitch and digital.</strong> Pixelated, static-flecked, error-coded avatars. Names that stutter, repeat a sound, or feel like corrupted text lean into the &quot;trapped in code&quot; premise.</li>
          <li><strong>Abstract shapes.</strong> Assorted-parts characters like Zooble, or geometric and object-based designs. Names that sound like a jumble or a single odd object work best.</li>
        </ul>
        <p>
          Pick your avatar&apos;s theme first, then generate a batch and keep the names whose sound matches it. A glitch-themed OC and a soft toy-themed OC should not share the same naming flavor, even though both belong to the same circus.
        </p>

        <h2>Designing a TADC OC Avatar</h2>
        <p>
          In the show, every human who enters the circus is reshaped into a wacky avatar the moment they arrive — and the name usually grows out of the design. So the strongest workflow is to sketch the avatar concept first, then name it. Ask yourself: what is my OC made of? A bundle of balloons, a cracked porcelain doll, a walking deck of cards, a half-rendered glitch? The answer points straight at a sound. A balloon avatar wants a light, airy name; a cracked-doll avatar wants something fragile and clinking.
        </p>
        <p>
          Then add a personality hook, the way Pomni&apos;s anxiety and Jax&apos;s mischief define them far more than their looks. Is your OC a nervous newcomer like Pomni, a chaotic prankster like Jax, a steady caretaker like Ragatha, or an unsettling wildcard? Generate a batch and read each name out loud as if Caine were announcing it to the ring — the one that makes you grin or wince in the right way is the one that fits the character you have in your head.
        </p>

        <h2>Matching the Name to Your Avatar Concept</h2>
        <p>
          A great TADC OC name does three jobs at once: it hints at what the avatar is made of, it carries a hint of personality, and it sits comfortably in a line-up beside Pomni, Jax, and Gangle without stealing their spotlight. Generate a list, then test each candidate against your concept art or written description. If the name and the design point at the same idea — a ribbon character with a danglingly soft name, a glitch character with a stuttering one — you have a match.
        </p>
        <p>
          If nothing lands perfectly, mix and match. Take the bouncy front half of one generated name and the softer tail of another, the same way &quot;Ragatha&quot; fuses &quot;rag&quot; with a gentle ending. The generator gives you raw material; the final name is yours to tune until it sounds exactly like a resident of Caine&apos;s circus.
        </p>

        <h2>How to Use This TADC Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many names you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of digital-circus-style names.</li>
          <li>Skim for names that match your avatar&apos;s theme — circus, toy, glitch, or abstract — then use the Copy button to save the whole list.</li>
          <li>Paste into your OC notes, character sheet, or fic outline and shortlist your favorites.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Everything happens in your browser. Your settings and the names you create are never sent to a server, so your OC ideas stay private until you decide to post the art or the fic.
        </p>

        <h2>Tips for Picking a TADC OC Name</h2>
        <p>
          Say the name out loud — TADC names are made to be cheered or yelped in an episode, so anything that trips the tongue will trip your readers and roleplay partners too. Keep names short; the canon cast rarely runs past two syllables, and a punchy name is easier to remember in a group RP. Lean into a little nonsense: a name that is almost a real word but bent slightly off (the way &quot;Gangle&quot; bends &quot;dangle&quot;) feels far more in-genre than something that reads like a normal human name.
        </p>
        <p>
          Avoid accidentally reusing a canon name — you do not want an OC literally called Pomni or Jax — but echoing the rhythm of a canon name is fair game and instantly grounds the character. If you are naming a whole friend group of OCs, generate a batch and pick names that contrast in theme and sound: one soft and toy-like, one sharp and glitchy, one bouncy and circus-bright. That mix is exactly what makes the canon ensemble feel like a real, mismatched cast trapped together.
        </p>

        <h2>What This Tool Does and Does Not Do</h2>
        <ul>
          <li>It generates The Amazing Digital Circus-style names for OCs, fan fiction, and role-play avatars.</li>
          <li>It does not reproduce the official cast as a database — output is original material for your own creative use.</li>
          <li>It does not store your generated list or settings; everything runs locally in your browser.</li>
          <li>It does not design the avatar for you — pair a name with your own concept art or description to bring the OC to life.</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          The Amazing Digital Circus exploded into one of the most OC-heavy fandoms online, with artists, fic writers, and role-players constantly inventing new avatars to drop into Caine&apos;s tent. This TADC name generator gives you a fast pool of names grounded in the show&apos;s real naming feel: short, bouncy, faintly glitchy, and theme-coded to circus, toy, and digital ideas. Generate a batch, lean on the avatar-theme notes above, and you will end up with names that sound like they were always meant for a resident of the digital circus.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a TADC name generator?', answer: 'It is a browser tool that creates names in the spirit of The Amazing Digital Circus — short, bouncy, faintly glitchy words that sound like the canon cast of Pomni, Jax, Gangle, and Zooble. It is built for people inventing an original character (OC) to drop into Caine\'s tent, writing fan fiction, or naming a role-play avatar. The generator combines circus-, toy-, and glitch-flavored word pieces at random in your browser and gives you 1–24 names per run with no sign-up.' },
  { category: 'Usage', question: 'How do I use the TADC name generator?', answer: 'Set how many names you want (1–24) and click Generate to get a fresh batch of digital-circus-style names. Skim for ones that match your avatar\'s theme — circus, toy, glitch, or abstract — then use the Copy button to save the whole list. Paste it into your OC notes, character sheet, or fic outline and shortlist your favorites. Run again as often as you like; there is no limit, no account, and no download.' },
  { category: 'Naming', question: 'How do TADC names actually work?', answer: 'Glitch Productions named the cast with a consistent instinct: take an everyday concept — a jester, a rag doll, a chess piece — and warp it into something cute, uneasy, and easy to say. The names are short and bouncy, made-up but evocative, and theme-coded to the design. "Ragatha" nods at "rag," "Gangle" bends "dangle" for a ribbon character, and "Kinger" is literally a chess king. The generator follows that same logic so its output sounds native to the show.' },
  { category: 'Naming', question: 'What makes a name sound like it belongs in the circus?', answer: 'Three things: it is short (the canon cast rarely runs past two syllables), it is made-up but hints at what the character is made of, and it carries a little glitch or nonsense. A name that is almost a real word but bent slightly off — the way "Gangle" bends "dangle" — feels far more in-genre than a normal human name. Say it out loud as if Caine were announcing it to the ring; the one that makes you grin or wince in the right way fits.' },
  { category: 'Naming', question: 'How do I match a name to my avatar\'s theme?', answer: 'Most TADC avatars fall into a few visual themes, and the name\'s sound should match. Circus and performance avatars want peppy, big-top names with the energy of "Pomni" or "Caine." Toy and craft avatars — rag dolls, marionettes, ribbon figures — suit soft, fabric-y, slightly clumsy names. Glitch and digital avatars want names that stutter or feel like corrupted text. Abstract, assorted-parts designs like Zooble want names that sound like a jumble or a single odd object.' },
  { category: 'Use cases', question: 'How do I name a TADC OC?', answer: 'In the show, every human who enters is reshaped into a wacky avatar, and the name usually grows out of the design — so sketch the concept first, then name it. Ask what your OC is made of: a bundle of balloons wants a light, airy name; a cracked porcelain doll wants something fragile and clinking. Then add a personality hook the way Pomni\'s anxiety or Jax\'s mischief defines them, generate a batch, and keep the name that points at the same idea as your design.' },
  { category: 'Naming', question: 'What are the four main avatar themes for naming?', answer: 'Circus and performance (jesters, ringmasters, acrobats) suit peppy, energetic names. Toy and craft (rag dolls, plush creatures, marionettes like Ragatha and Gangle) suit soft, fabric-y names. Glitch and digital (pixelated, static-flecked, error-coded avatars) suit names that stutter or feel corrupted. Abstract shapes (assorted-parts characters like Zooble, geometric or object-based designs) suit jumbled or single-odd-object names. Pick your theme first, then keep only the generated names whose sound matches it.' },
  { category: 'Best practices', question: 'How do I avoid accidentally reusing a canon name?', answer: 'You do not want an OC literally called Pomni or Jax, so skim your batch against the known cast — Pomni, Caine, Ragatha, Jax, Gangle, Zooble, Kinger, Bubble — and drop any exact matches. Echoing the rhythm of a canon name is fair game and instantly grounds your character; copying one outright reads as a mistake. The generator produces original material rather than the official roster, so collisions are rare, but a quick check is worth it before you commit.' },
  { category: 'Use cases', question: 'How do I name a whole group of OCs?', answer: 'Generate a batch and pick names that contrast in theme and sound — one soft and toy-like, one sharp and glitchy, one bouncy and circus-bright. That mismatched mix is exactly what makes the canon ensemble feel like a real cast trapped together rather than variations on one idea. Run a few batches, lay the candidates side by side, and assign the most distinct-sounding ones to your most distinct characters so readers can tell them apart at a glance.' },
  { category: 'Naming', question: 'Can I mix and match parts of the generated names?', answer: 'Absolutely — the generator gives you raw material, and the final name is yours to tune. If nothing lands perfectly, take the bouncy front half of one name and the softer tail of another, the same way "Ragatha" fuses "rag" with a gentle ending. Keep splicing until it sounds exactly like a resident of Caine\'s circus and points at the same idea as your avatar concept. This is a normal, encouraged part of the workflow.' },
  { category: 'General', question: 'Is the TADC name generator free?', answer: 'Yes, it is completely free to use in your browser with no account, no payment, and no download. You can generate OC name ideas as often as you like, and there is no daily or total limit on runs. Everything happens locally on your device, so there is nothing to sign up for — open the page, set a count, and start spinning up digital-circus names right away.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I generate names?', answer: 'No. When you set a count and click generate, the names are created locally on your device inside your browser. Your settings and the generated list are never uploaded to our servers, and nothing is logged or stored. Your OC ideas stay private until you decide to post the art or the fic. You can even run the tool in a private or incognito window if you prefer.' },
  { category: 'Compatibility', question: 'Does the generator work on mobile?', answer: 'Yes. The tool runs in any modern web browser and is responsive on desktop, tablet, and phone, with no app to install. Sketching an OC on your phone and want names on the spot? Open the page, generate a batch, and copy it straight into your notes app or a character sheet. It works anywhere you can open a browser tab.' },
  { category: 'Limits', question: 'How many names can I generate at once?', answer: 'You can request 1–24 names per run. If you want a bigger pool for a large cast, just run it again — each run produces a fresh random batch, and there is no daily or total cap. Paste several runs into one document and remove any duplicates. The 24-name limit keeps each list easy to skim while still giving you plenty of circus, toy, and glitch options to sort through.' },
  { category: 'Usage', question: 'Can I copy the generated names?', answer: 'Yes. The Copy button puts the whole list on your clipboard as plain text, one name per line, so it pastes cleanly into any notes app, character sheet, or fic outline. Copying is the intended way to save a batch before you shortlist. Grab a big list, drop it into your OC notes, and mark the ones that match your avatar\'s theme so you can compare them side by side.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No. The generator works with no sign-up, login, email, or registration. It runs entirely in your browser — open the page, choose how many names you want, click generate, and copy the results. There is nothing to create or verify, and no personal information is ever requested. Just open it and start naming your digital-circus OCs.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool draws from curated circus, toy, glitch, and abstract word pieces, then randomly combines them in your browser so each run is different. The pieces are chosen to echo the show\'s naming feel — short, made-up, faintly corrupted. Nothing is sent to a server, and the output is original inspiration, not the official cast reproduced from a database. Read a few aloud and you will hear how they slot in beside Pomni, Jax, and Gangle.' },
  { category: 'General', question: 'Does this reproduce the official TADC cast?', answer: 'No. It does not function as a database of canon characters; every name it produces is original material for your own creative use. That is deliberate — you want an OC that sits comfortably beside Pomni and Zooble without being one of them. If a generated name happens to echo a canon rhythm, that grounds your character; if it matches a canon name exactly, swap it for another from your batch.' },
  { category: 'Use cases', question: 'Can I use these names for fan fiction and role-play?', answer: 'Yes — that is exactly what the tool is for. Fic writers naming a newcomer to the tent, role-players building a server avatar, and artists sketching an OC all use the same short, bouncy, theme-coded style. Generate a batch, match a name to your character\'s design and personality, and drop it into your story or RP profile. The names are yours to use freely once you pick them.' },
  { category: 'Best practices', question: 'What is the best workflow for naming an OC?', answer: 'Sketch or describe the avatar first, decide its theme (circus, toy, glitch, or abstract) and a personality hook, then generate a batch and read each name out loud as if Caine were announcing it. Keep the ones whose sound matches both the design and the personality, splice halves together if nothing is perfect, and check none of them duplicate a canon name. Copy your shortlist so you have backups if your first pick does not sit right later.' },
  { category: 'Best practices', question: 'Why do my names keep sounding too normal?', answer: 'The most common mistake is picking names that read like ordinary human names. TADC names lean into a little nonsense — almost a real word, bent slightly off. If your candidates feel flat, favor the ones that stutter, jumble, or nod at an object without spelling it out, and cut anything you could imagine on a class roster. Short and springy beats long and sensible every time in this world.' },
  { category: 'Troubleshooting', question: 'Can I use the generator offline?', answer: 'Yes. Once the page has loaded, generating and copying names both work entirely offline in your browser with no network connection needed. You only need a connection to open the page the first time. That makes it handy for brainstorming OC names on the go — generate, copy into a local notes file, and refine your list wherever you are, even without internet.' },
  { category: 'Naming', question: 'Should TADC OC names be short?', answer: 'Yes. The canon cast rarely runs past two syllables, and a punchy name is far easier to remember in a group role-play or a busy fic. Long, complicated names trip the tongue in dialogue and get shortened or forgotten by your readers. When you review a batch, lean toward the tightest options — the ones you could imagine being shouted across the ring — and save the longer experiments only if they genuinely add something.' },
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
          <p className="text-slate-700">Common questions about the TADC name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}


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
  { category: 'General', question: 'What is a TADC name generator?', answer: 'A TADC name generator is an online tool that creates character names for TADC and other fan fiction. You get unique TADC name ideas at the click of a button. The generator combines curated The Amazing Digital Circus-style words at random in your browser so each run produces new combinations. This free TADC name generator runs locally with no sign-up and does not send generated names to any server. Always check your game or story for availability before committing to a name.' },
  { category: 'Usage', question: 'How do I use the TADC name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list of character name ideas, then use the Copy button to copy all names to your clipboard. Paste into a notes app and check your game or story for availability. Run again for more options; no sign-up is required. The TADC name generator runs in your browser so your settings and generated names are not sent to any server. Building a shortlist of five to ten options before checking availability is a good habit.' },
  { category: 'General', question: 'Is the TADC name generator free?', answer: 'Yes. This TADC name generator is free to use in your browser. You can generate TADC name ideas as often as you like without creating an account or paying. The tool runs locally on your device and does not require a download. There is no daily or total limit on how many times you can run the generator.' },
  { category: 'Use cases', question: 'Can I use the names for Steam?', answer: 'Yes. The TADC name generator produces username ideas that you can use on Steam. Names must be unique on the platform, so always check Steam\'s availability before committing. Run the generator multiple times to build a shortlist of character name ideas, then check which names are available on Steam. The tool does not reserve or validate names; it only suggests combinations for you to verify on the platform.' },
  { category: 'Privacy', question: 'Is my data sent to a server when I use the TADC name generator?', answer: 'No. This TADC name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated TADC name ideas are not sent to our servers. We do not store your inputs or the generated list. Generation is fully local and private.' },
  { category: 'Compatibility', question: 'Does the TADC name generator work on mobile?', answer: 'Yes. The TADC name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes or check availability on Steam\'s app. The tool is responsive and works on any device with a modern browser.' },
  { category: 'Limits', question: 'How many names can I generate with the TADC name generator?', answer: 'You can request 1–24 names per run with this TADC name generator. If you need more than 24 character name ideas, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed. The batch size is designed to keep the list manageable while giving you enough TADC name options to shortlist.' },
  { category: 'Usage', question: 'Can I copy the names from the TADC name generator?', answer: 'Yes. Use the Copy button on this TADC name generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line, so they work in any editor or form. Check your game or story for availability before choosing a name. Copying is the intended way to save your shortlist of character name ideas.' },
  { category: 'General', question: 'Do I need an account to use the TADC name generator?', answer: 'No. This TADC name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it. Open the page, set how many TADC name ideas you want, click generate, and copy the results. No email, password, or registration is required.' },
  { category: 'Use cases', question: 'Can I use the TADC name generator for other platforms?', answer: 'Yes. The names work as ideas for any gaming or social platform—Discord, Xbox, PlayStation, or others. The TADC name generator is built for Steam-style character names but the output can inspire usernames elsewhere. Check each platform\'s availability; names must be unique on each service. The generator does not check availability for you, so always verify on the platform where you plan to use the name.' },
  { category: 'Privacy', question: 'Do you store the names I generate with the TADC name generator?', answer: 'No. Generation happens in your browser. We do not receive or store the TADC name ideas or your settings. The TADC name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer. If you refresh the page, the last generated list is cleared unless you have already copied it.' },
  { category: 'Limits', question: 'Can I get more than 24 names from the TADC name generator?', answer: 'Each run of this TADC name generator gives up to 24 names. To get more character name ideas, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit. Batching runs is the intended workflow when you need a large pool of TADC name options.' },
  { category: 'General', question: 'Why "Steam" specifically in a TADC name generator?', answer: 'TADC is a major gaming platform, and people often search for TADC name ideas and character name generators. The TADC name generator serves that intent and produces names that fit TADC and similar gaming environments. The same ideas work for other platforms—Discord, Xbox, PlayStation—as inspiration. Use the names as character names wherever you need a unique username; always check availability on the platform you choose.' },
  { category: 'Use cases', question: 'Can I use the TADC name generator for esports?', answer: 'Yes. Use the TADC name generator as inspiration for in-game names or stream handles. Run it multiple times to get a shortlist of character name ideas, then check availability on your platform. The tool is free and runs in your browser with no sign-up. Many esports and streamers use TADC name generators to brainstorm handles before verifying availability on Steam, Twitch, or other services.' },
  { category: 'Technical', question: 'How are the names generated in the TADC name generator?', answer: 'This TADC name generator uses curated The Amazing Digital Circus-style words and elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for inspiration only; we do not check TADC or any platform for availability. The word lists are designed to sound like gaming character names—bold, memorable, and easy to type.' },
  { category: 'General', question: 'Are the names from the TADC name generator unique?', answer: 'The names are randomly combined from our word list, so each run can produce new combinations. We do not check TADC or any platform for availability. You must check yourself whether a TADC name or character name is available before using it on your profile. The generator helps you discover ideas; uniqueness on a given platform depends on that platform\'s current registrations.' },
  { category: 'Use cases', question: 'Can teachers use the TADC name generator?', answer: 'Yes. Teachers can use this TADC name generator for creative or tech-related activities—for example when students are learning about usernames, digital identity, or online profiles. Emphasize that the tool is for inspiration and that names must be checked for availability on any platform. The TADC name generator is free and runs in the browser with no sign-up, so it is easy to use in a classroom or workshop setting.' },
  { category: 'General', question: 'How do I cite the TADC name generator?', answer: 'For academic or formal use you can cite this TADC name generator as a source of inspiration for character names. The generated names are algorithm-produced; you can use them freely. A brief acknowledgment is optional. We do not require attribution. The tool is a free, browser-based utility for TADC name ideas and character name brainstorming.' },
  { category: 'Use cases', question: 'Can I use the TADC name generator for a new TADC account?', answer: 'Yes. When creating a new TADC account you need a unique username. Run this TADC name generator to get character name ideas, copy the list, then check TADC for availability. Pick a name that is available and that you like. The tool runs in your browser with no sign-up. Building a shortlist of five to ten options before you start the sign-up process saves time, since many TADC names are already taken.' },
  { category: 'General', question: 'Do the names from the TADC name generator work for streaming?', answer: 'Yes. The TADC name generator produces username ideas that can work for streaming platforms, in-game names, or social handles. Use the names as inspiration and check your platform for availability. Run the generator multiple times to build a shortlist of options. Many streamers use TADC name generators to brainstorm stream handles before checking availability on Twitch, YouTube, or other services.' },
  { category: 'Best practices', question: 'What is the best workflow for the TADC name generator?', answer: 'Open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app. Check your game or story for availability for each name you like. If your first choice is taken, try the next. Run the TADC name generator again for more options. Keep a shortlist of five to ten character name ideas so you have backups. The tool is free and runs in your browser with no sign-up.' },
  { category: 'Best practices', question: 'Should I run the TADC name generator multiple times?', answer: 'Yes. Running the TADC name generator multiple times is the intended workflow when you want a large pool of TADC name ideas. Paste each run into one document and remove duplicates if any appear. Then check availability on your game or story for each name you like. Having a shortlist saves time compared to checking one idea at a time. There is no daily or total limit on how many times you can run the generator.' },
  { category: 'Troubleshooting', question: 'Why is my first choice from the TADC name generator taken?', answer: 'Popular character names are often already in use on TADC and other platforms. The TADC name generator does not check availability; it only suggests combinations. Always have a shortlist of five to ten options so you have backups. Run the generator again for more TADC name ideas and check availability on your platform before committing. This is normal when using any name generator for fan fiction.' },
  { category: 'Troubleshooting', question: 'Can I use the TADC name generator offline?', answer: 'Yes. Once the page is loaded, the TADC name generator runs entirely in your browser and does not require a network connection to generate names. You can generate character name ideas offline. Copying and pasting also works offline. You will need a connection only to open the page initially and to check availability on TADC or another platform.' },
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


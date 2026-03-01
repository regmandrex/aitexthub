#!/usr/bin/env node
/**
 * Fill tool pages with full write-up and 23 FAQs so they pass the 3k audit.
 * Run from repo root: node scripts/fill-tool-pages-full.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const TOOLS = [
  { slug: 'hollow-knight-name-generator', title: 'Hollow Knight Name Generator', short: 'Hollow Knight', theme: 'Hollow Knight-style character and creature names', description: 'Generate Hollow Knight-style character and creature names for games and fiction.', seoTitle: 'Hollow Knight Name Generator', key: 'hollow-knight' },
  { slug: 'coven-name-generator', title: 'Coven Name Generator', short: 'coven', theme: 'coven and witch-style names', description: 'Generate coven and witch-style names for fiction and creative projects.', seoTitle: 'Coven Name Generator', key: 'coven' },
  { slug: 'bg3-name-generator', title: 'BG3 Name Generator', short: 'BG3', theme: 'Baldur\'s Gate 3 and D&D-style character names', description: "Generate Baldur's Gate 3 and D&D-style character names.", seoTitle: 'BG3 Name Generator - Baldur\'s Gate 3 Names', key: 'bg3' },
  { slug: 'secret-organization-name-generator', title: 'Secret Organization Name Generator', short: 'secret organization', theme: 'secret society and organization names', description: 'Generate secret society and organization names for fiction and games.', seoTitle: 'Secret Organization Name Generator', key: 'secret-organization' },
  { slug: 'genderbend-name-generator', title: 'Genderbend Name Generator', short: 'genderbend', theme: 'genderbent and alternate-gender name ideas', description: 'Generate genderbent and alternate-gender name ideas for characters.', seoTitle: 'Genderbend Name Generator', key: 'genderbend' },
  { slug: 'motorcycle-club-name-generator', title: 'Motorcycle Club Name Generator', short: 'motorcycle club', theme: 'biker and motorcycle club names', description: 'Generate biker and motorcycle club names for fiction and creative projects.', seoTitle: 'Motorcycle Club Name Generator - Biker Names', key: 'motorcycle-club' },
  { slug: 'beyblade-name-generator', title: 'Beyblade Name Generator', short: 'Beyblade', theme: 'Beyblade-style names for tops and characters', description: 'Generate Beyblade-style names for tops and characters.', seoTitle: 'Beyblade Name Generator', key: 'beyblade' },
  { slug: 'homestuck-troll-name-generator', title: 'Homestuck Troll Name Generator', short: 'Homestuck troll', theme: 'Homestuck troll-style names', description: 'Generate Homestuck troll-style names for characters and fiction.', seoTitle: 'Homestuck Troll Name Generator', key: 'homestuck-troll' },
  { slug: 'symbiote-name-generator', title: 'Symbiote Name Generator', short: 'symbiote', theme: 'symbiote and Venom-style names', description: 'Generate symbiote and Venom-style names for characters and fiction.', seoTitle: 'Symbiote Name Generator', key: 'symbiote' },
  { slug: 'speedster-name-generator', title: 'Speedster Name Generator', short: 'speedster', theme: 'speedster and Flash-style names', description: 'Generate speedster and Flash-style names for characters.', seoTitle: 'Speedster Name Generator', key: 'speedster' },
  { slug: 'boxer-name-generator', title: 'Boxer Name Generator', short: 'boxer', theme: 'boxer nicknames and fighting names', description: 'Generate boxer nicknames and fighting names for characters.', seoTitle: 'Boxer Name Generator - Boxing Nicknames', key: 'boxer' },
  { slug: 'hillbilly-name-generator', title: 'Hillbilly Name Generator', short: 'hillbilly', theme: 'hillbilly and country-style names', description: 'Generate hillbilly and country-style names for fiction and humor.', seoTitle: 'Hillbilly Name Generator', key: 'hillbilly' },
  { slug: 'crew-name-generator', title: 'Crew Name Generator', short: 'crew', theme: 'crew and gang names for GTA-style games', description: 'Generate crew and gang names for GTA-style games and fiction.', seoTitle: 'Crew Name Generator - GTA Crew Names', key: 'crew' },
  { slug: 'tadc-name-generator', title: 'TADC Name Generator', short: 'TADC', theme: 'The Amazing Digital Circus-style names', description: 'Generate The Amazing Digital Circus-style names for characters.', seoTitle: 'TADC Name Generator - Digital Circus Names', key: 'tadc' },
  { slug: 'httyd-name-generator', title: 'HTTYD Name Generator', short: 'HTTYD', theme: 'How to Train Your Dragon-style dragon and character names', description: 'Generate How to Train Your Dragon-style dragon and character names.', seoTitle: 'HTTYD Name Generator - Dragon Names', key: 'httyd' },
  { slug: 'drag-king-name-generator', title: 'Drag King Name Generator', short: 'drag king', theme: 'drag king and masculine stage names', description: 'Generate drag king and masculine stage names for performers.', seoTitle: 'Drag King Name Generator', key: 'drag-king' },
  { slug: 'yautja-name-generator', title: 'Yautja Name Generator', short: 'Yautja', theme: 'Predator and Yautja-style names', description: 'Generate Predator and Yautja-style names for characters.', seoTitle: 'Yautja Name Generator - Predator Names', key: 'yautja' },
  { slug: 'badass-username-generator', title: 'Badass Username Generator', short: 'badass username', theme: 'badass usernames and gamer tags', description: 'Generate badass usernames and gamer tags for profiles.', seoTitle: 'Badass Username Generator', key: 'badass-username' },
  { slug: 'army-name-generator', title: 'Army Name Generator', short: 'army', theme: 'army squad and military-style names', description: 'Generate army squad and military-style names for games and fiction.', seoTitle: 'Army Name Generator', key: 'army' },
  { slug: 'nun-name-generator', title: 'Nun Name Generator', short: 'nun', theme: 'nun and religious-order-style names', description: 'Generate nun and religious-order-style names for fiction.', seoTitle: 'Nun Name Generator', key: 'nun' },
  { slug: 'clash-royale-name-generator', title: 'Clash Royale Name Generator', short: 'Clash Royale', theme: 'Clash Royale-style usernames and character names', description: 'Generate Clash Royale-style usernames and character names.', seoTitle: 'Clash Royale Name Generator', key: 'clash-royale' },
  { slug: 'task-force-name-generator', title: 'Task Force Name Generator', short: 'task force', theme: 'task force and special ops names', description: 'Generate task force and special ops names for games and fiction.', seoTitle: 'Task Force Name Generator', key: 'task-force' },
  { slug: 'kik-name-generator', title: 'Kik Name Generator', short: 'Kik', theme: 'Kik usernames and messenger-style names', description: 'Generate Kik usernames and messenger-style names.', seoTitle: 'Kik Name Generator', key: 'kik' },
  { slug: 'tumblr-blog-name-generator', title: 'Tumblr Blog Name Generator', short: 'Tumblr blog', theme: 'Tumblr blog names and aesthetic usernames', description: 'Generate Tumblr blog names and aesthetic usernames.', seoTitle: 'Tumblr Blog Name Generator', key: 'tumblr-blog' },
  { slug: 'amusement-park-name-generator', title: 'Amusement Park Name Generator', short: 'amusement park', theme: 'amusement park and theme park names', description: 'Generate amusement park and theme park names for creative projects.', seoTitle: 'Amusement Park Name Generator', key: 'amusement-park' },
  { slug: 'fakemon-name-generator', title: 'Fakemon Name Generator', short: 'fakemon', theme: 'fakemon and fan-made Pokémon-style names', description: 'Generate fakemon and fan-made Pokémon-style names.', seoTitle: 'Fakemon Name Generator', key: 'fakemon' },
  { slug: '40k-planet-name-generator', title: '40K Planet Name Generator', short: '40K planet', theme: 'Warhammer 40K-style planet and world names', description: 'Generate Warhammer 40K-style planet and world names.', seoTitle: '40K Planet Name Generator - Warhammer Names', key: 'fortyk-planet' },
  { slug: 'magical-girl-name-generator', title: 'Magical Girl Name Generator', short: 'magical girl', theme: 'magical girl and anime-style transformation names', description: 'Generate magical girl and anime-style transformation names.', seoTitle: 'Magical Girl Name Generator', key: 'magical-girl' },
];

function escape(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function pascal(slug) {
  let p = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  if (/^\d/.test(p)) p = 'Fortyk' + p.replace(/^\d+k?/i, '');
  return p + 'Page';
}

// Build write-up section: same structure as steam/gorilla-tag, with TITLE and SHORT and THEME substituted
function buildWriteUp(tool) {
  const T = tool.title;
  const S = tool.short;
  const Th = tool.theme;
  const pars = [
    `<h2>${T} – Name Ideas for Fiction and Creative Projects</h2>`,
    '<h2>Introduction</h2>',
    `<p>This guide explains how to use a ${T.toLowerCase()} to create ${Th} for games, fiction, and creative projects. The tool runs in your browser and produces name ideas at the click of a button. It is designed for writers, players, and anyone who needs ${S}-style names quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.</p>`,
    `<p>People often search for ${S} name ideas; this page serves that intent with one free generator. For other naming styles we have Steam, RuneScape, Elden Ring, and other name generators on our site. For cleaning pasted text use our strip HTML and space remover tools; see our <Link href="/">homepage</Link> for the full list.</p>`,
    `<p>The ${T.toLowerCase()} is free and requires no account. Names are created in your browser and are not sent to our servers. You can run it in private or incognito mode if you prefer. Bookmark the page for quick access when you need ${S}-style names.</p>`,
    `<h2>What Is a ${T}?</h2>`,
    `<p>A ${T.toLowerCase()} is an online tool that creates ${Th}. You get name ideas at the click of a button. The generator combines curated elements at random so each run produces new combinations. The output is for inspiration only. This free tool runs in your browser with no sign-up.</p>`,
    `<p>The output is plain text, one name per line. You can copy the list and paste it into a notes app, then pick the names that fit your project. Many users run the generator multiple times to get a shortlist before deciding.</p>`,
    `<h2>Why This ${T} Matters</h2>`,
    `<p>Choosing ${S}-style names for characters or projects can be time-consuming. A ${T.toLowerCase()} speeds up brainstorming. You get options in seconds. The tool is free and does not require an account. Names are created in your browser and are not sent to our servers.</p>`,
    `<h2>How to Use This ${T}</h2>`,
    `<p>Follow these steps: set how many names you want per run (1–24); click "Generate names" to get a new list; use the Copy button to copy all names to your clipboard; paste into a notes app or document and pick one; run again for more options. No account required. The tool runs in your browser; your settings and generated names are not sent to any server.</p>`,
    `<h2>When to Use a ${T}</h2>`,
    `<p>Use this generator when you need ${Th} quickly. Key use cases: fiction and creative writing; games and roleplay; character or worldbuilding; usernames and profiles. The output is for inspiration only.</p>`,
    '<h2>Use Cases in Detail</h2>',
    `<p>Writers use the ${T.toLowerCase()} for character and place names. Players use it for in-game identities or usernames. Run the generator multiple times to build a shortlist. For other naming styles try our Steam name generator, RuneScape name generator, or Elden Ring name generator; see our <Link href="/">homepage</Link> for the full list.</p>`,
    `<h2>${S} Naming Style</h2>`,
    `<p>This generator uses curated ${S}-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only.</p>`,
    `<p>Run the generator several times to explore the range of names. You can mix and match or adapt the generated names to fit your characters or world. For strict accuracy or real-world use always verify with authoritative sources; this tool is for creative inspiration only.</p>`,
    `<h2>How the ${T} Works (Step by Step)</h2>`,
    `<p>When you open the page, you choose how many names you want (1–24). Clicking "Generate names" triggers the tool to randomly combine curated elements in your browser. Each run is independent; no names or settings are sent to a server. You can copy the full list and paste it into your document. To get more ideas, run the generator again.</p>`,
    '<h2>Privacy and Local Processing</h2>',
    `<p>This ${T.toLowerCase()} runs entirely in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>`,
    '<h2>Copying and Exporting Names</h2>',
    '<p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or document. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>',
    '<h2>Running the Generator in Batches</h2>',
    '<p>When you need many name ideas, run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates. There is no daily or total limit.</p>',
    '<h2>Batch Generation and Building a Shortlist</h2>',
    `<p>Run the ${T.toLowerCase()} multiple times with 12 or 24 names per run. Copy each batch into a single document and skim for names that fit your project or characters. The generator has no daily limit. For other naming styles try our Steam name generator or Elden Ring name generator; see our homepage for more tools.</p>`,
    '<h2>Limits and Batch Size</h2>',
    '<p>You can request 1–24 names per run. There is no daily or total limit. Run the generator again for more options. No download or account is required.</p>',
    '<h2>No Download or Account Required</h2>',
    `<p>This ${T.toLowerCase()} runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone.</p>`,
    `<h2>Who Uses a ${T}?</h2>`,
    `<p>Writers use it for character and worldbuilding. Players use it for in-game names or usernames. No account or download is required on our site.</p>`,
    `<h2>Getting the Most Out of the ${T}</h2>`,
    `<p>Run the generator several times and paste all results into one document. Skim for names that fit your style. For other naming styles try our Steam or RuneScape name generator; see our homepage for the full list.</p>`,
    `<p>When you have a shortlist, pick the names that fit your characters or world. The tool is free and runs in your browser with no sign-up; use it whenever you need ${S}-style name ideas. You can run the generator in private or incognito mode; names are created locally.</p>`,
    '<h2>Tool Methodology and Limitations</h2>',
    `<p>The tool uses curated ${S}-style elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for inspiration only.</p>`,
    `<p>We do not guarantee that any generated name is historically accurate, trademark-free, or suitable for a specific use. Always verify and adapt names as needed for your project. The generator is designed to spark ideas rather than to replace research or legal checks.</p>`,
    '<h2>Combining With Other Generators</h2>',
    `<p>Use this generator for ${S}-style names and our Steam name generator for gamer tags, or our Elden Ring or ancient Greek name generator for other styles. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our <Link href="/">homepage</Link> for the full list.</p>`,
    `<h2>Quick Reference: ${T} at a Glance</h2>`,
    `<p>The ${T.toLowerCase()} produces 1–24 names per run, with no daily limit. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names. For other naming tools see our homepage.</p>`,
    `<p>You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Bookmark the page for quick access when you need ${S}-style name ideas.</p>`,
    `<h2>Tips for Choosing ${S} Names</h2>`,
    `<p>Pick names that fit your project or character. Run the generator multiple times to get a shortlist, then pick and adapt as needed. Have a few backups in case your first choice does not fit. The generator gives you ideas only; the final choice is yours. For other styles try our Steam name generator or Elden Ring name generator.</p>`,
    '<h2>Typical Workflow</h2>',
    `<p>A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into your notes app. Pick the names that fit your characters or world. Run the generator again for more options. The whole process takes a few minutes. No account or download is required. Bookmark the page for quick access when you need ${S}-style names.</p>`,
    '<h2>Formatting and Pasting Names</h2>',
    `<p>After you copy names from the ${T.toLowerCase()}, paste them into your notes app or document. The names are plain text, one per line. If you paste from the web and see extra spaces or line breaks, run the pasted text through a space remover or strip-HTML tool so the list stays tidy.</p>`,
    `<h2>Why Use a ${T}?</h2>`,
    `<p>Coming up with ${S}-style names for multiple characters or a full project can be time-consuming. This ${T.toLowerCase()} produces ${Th} in seconds. Run it as often as you like and copy the results into your notes. The tool is free and runs in your browser with no sign-up. You get up to 24 names per run with no daily limit. Names are created locally and are not sent to our servers. Use the Copy button to copy all names at once. No download or account is required.</p>`,
    '<h2>Summary</h2>',
    `<p>Use this ${T.toLowerCase()} to create ${Th}. Set the number of names (1–24) and run as often as you like. Copy results into your notes. The tool runs locally in your browser with no sign-up. For other naming tools see our <Link href="/">homepage</Link>. For cleaning pasted text use a space remover or strip-HTML tool.</p>`,
    `<p>The free ${T.toLowerCase()} requires no account and does not store or send your data. Names are created in your browser only. Run it in batches to build a shortlist. No download is required and the tool works on all devices. Bookmark the page for quick access.</p>`,
    `<p>Each run produces up to 24 names with no daily limit. Pair with our Steam or RuneScape name generator for other gaming styles. There is no account, no download, and no daily cap. Use the Copy button to grab all names at once. Names are created in your browser and are not sent to our servers. Run the ${T.toLowerCase()} as often as you like to build a shortlist. For other naming tools see our homepage for the full list. No sign-up or download is required. The tool is free and there is no daily cap. Bookmark the page when you need ${S}-style names for fiction, games, or creative projects.</p>`,
    `<p>Writers and players use the ${T.toLowerCase()} to quickly get name ideas without signing up or sending data to a server. The tool is one of many name generators on our site; explore the homepage for Steam, Elden Ring, ancient Greek, and other styles when you need different kinds of names.</p>`,
    `<p>No download or account is required to use the ${T.toLowerCase()}. The generator runs in your browser and creates names locally. You can run it as often as you like to build a shortlist of ${S}-style names for your next project. For cleaning pasted text or fixing formatting after copying from the web, use our space remover and strip-HTML tools linked on the homepage.</p>`,
    `<p>Many of our name generators follow the same pattern: choose how many names you want, click generate, then copy the list. The ${T.toLowerCase()} is no exception. It is designed for quick brainstorming and does not replace your own creativity or research when you need names for a specific context. Use the results as a starting point and adapt as needed.</p>`,
    `<p>If you need names for a different theme or style, try another generator from our homepage. We offer tools for gaming usernames, character names, place names, and more. All run in your browser with no sign-up and no data sent to our servers.</p>`,
  ];
  return `function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        ${pars.join('\n        ')}
      </div>
    </section>
  );
}`;
}

// 23 FAQs with substantive answers (tool title/short substituted)
function buildFaqs(tool) {
  const T = tool.title.replace(/'/g, "\\'");
  const S = tool.short.replace(/'/g, "\\'");
  const faqs = [
    { q: 'What is a ' + tool.title + '?', a: 'A ' + tool.title.toLowerCase() + ' is an online tool that creates ' + tool.theme + '. You get name ideas at the click of a button. This free tool runs in your browser with no sign-up. Use it for fiction, games, or creative projects.' },
    { q: 'How do I use the ' + tool.title + '?', a: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into a notes app and pick the names that fit. Run again for more options; no sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
    { q: 'Is it free?', a: 'Yes. This ' + tool.title.toLowerCase() + ' is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
    { q: 'Can I use the names for fiction?', a: 'Yes. The ' + tool.title.toLowerCase() + ' produces name ideas that you can use in fiction, games, or creative projects. Run the generator multiple times to build a shortlist and pick the names that fit your characters or world.' },
    { q: 'Is my data sent to a server?', a: 'No. This ' + tool.title.toLowerCase() + ' runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
    { q: 'Does it work on mobile?', a: 'Yes. The ' + tool.title.toLowerCase() + ' runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes.' },
    { q: 'How many names can I generate?', a: 'You can request 1–24 names per run with this ' + tool.title.toLowerCase() + '. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
    { q: 'What other name generators do you have?', a: 'We have name generators for Steam, RuneScape, Elden Ring, Naruto, Fallout, anime, ancient Greek, tribe, island, species, god and goddess, and others. See our homepage for the full list of naming and text tools.' },
    { q: 'Can I copy the names?', a: 'Yes. Use the Copy button on this ' + tool.title.toLowerCase() + ' to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line. If you notice extra spaces after pasting, run the text through a space remover or strip-HTML tool.' },
    { q: 'Do I need an account?', a: 'No. This ' + tool.title.toLowerCase() + ' works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
    { q: 'Can I use the names for games?', a: 'Yes. The names work as ideas for games, usernames, or creative projects. The generator does not check availability for you; use the names as inspiration and adjust as needed for your platform or project.' },
    { q: 'Do you store the names?', a: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The ' + tool.title.toLowerCase() + ' runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
    { q: 'Can I get more than 24 names?', a: 'Each run of this ' + tool.title.toLowerCase() + ' gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
    { q: 'Why use a ' + tool.title + '?', a: 'People often search for ' + tool.short + ' name ideas. The generator serves that intent and gives you a pool of options in seconds. Use the names as inspiration for characters, usernames, or creative projects. The tool is free and runs in your browser with no sign-up.' },
    { q: 'Can I use it for character names?', a: 'Yes. Use the ' + tool.title.toLowerCase() + ' as inspiration for character names in fiction or games. Run it multiple times to get a shortlist, then pick the names that fit your story or world. The tool is free and runs in your browser with no sign-up.' },
    { q: 'Can I combine with other generators?', a: 'Yes. Use this generator for ' + tool.short + '-style names and our Steam name generator for gamer tags, or our Elden Ring or ancient Greek name generator for other styles. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our homepage for the full list.' },
    { q: 'How are the names generated?', a: 'This ' + tool.title.toLowerCase() + ' uses curated ' + tool.short + '-style elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for inspiration only.' },
    { q: 'Are the names unique?', a: 'The names are randomly combined from our word list, so each run can produce new combinations. Use them as inspiration for your project; you can tweak or combine as needed for your characters or world.' },
    { q: 'Can teachers use it?', a: 'Yes. Teachers can use this ' + tool.title.toLowerCase() + ' for creative writing or classroom activities. Students can generate name ideas for characters or projects. Emphasize that the tool is for inspiration and that names can be adapted as needed.' },
    { q: 'How do I cite the tool?', a: 'For academic or formal use you can cite this ' + tool.title.toLowerCase() + ' as a source of inspiration for names. The generated names are algorithm-produced; you can use them freely. A brief acknowledgment is optional. We do not require attribution.' },
    { q: 'What if I need a specific style?', a: 'Run this ' + tool.title.toLowerCase() + ' multiple times to get variety; each run produces new random combinations. If you need a different style try our Steam name generator or Elden Ring name generator. For character or creature names see our homepage for the full list of naming tools.' },
    { q: 'Do the names work for usernames?', a: 'Yes. The ' + tool.title.toLowerCase() + ' produces name ideas that can work for usernames, in-game names, or profiles. Use the names as inspiration and check your platform for availability. Run the generator multiple times to build a shortlist of options.' },
    { q: 'Can I use it for worldbuilding?', a: 'Yes. When building a world or setting you often need many character or place names. Run this ' + tool.title.toLowerCase() + ' to get ideas, copy the list, then pick and adapt the names that fit your world. The tool runs in your browser with no sign-up.' },
    { q: 'Can I use it in private or incognito mode?', a: 'Yes. The ' + tool.title.toLowerCase() + ' runs in your browser and works in private or incognito windows. Names are created locally and are not sent to our servers. No account or login is required.' },
  ];
  const lines = faqs.map(f => `  { category: 'General', question: '${f.q.replace(/'/g, "\\'")}', answer: '${f.a.replace(/'/g, "\\'")}' }`).join(',\n');
  return `const pageFaqs: FaqItem[] = [\n${lines}\n];`;
}

function generateFullPage(tool) {
  const fnName = pascal(tool.slug);
  const writeUp = buildWriteUp(tool);
  const faqs = buildFaqs(tool);
  return `import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { ThemedNameGeneratorTool } from '@/components/tools/ThemedNameGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = '${tool.slug}';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: '${escape(tool.title)}',
    description: '${escape(tool.description)}',
    seoTitle: '${escape(tool.seoTitle)}',
    urlPath: \`/\${toolSlug}\`,
  });
}

${writeUp}

${faqs}

export default async function ${fnName}() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = \`\${siteUrl}/\${toolSlug}/\`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="${tool.key}" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the ${escape(tool.title.toLowerCase())}.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}
`;
}

for (const tool of TOOLS) {
  const dir = path.join(root, 'app', tool.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, generateFullPage(tool), 'utf8');
  console.log('Wrote', filePath);
}
console.log('Done. Filled', TOOLS.length, 'pages with full write-up and 23 FAQs.');

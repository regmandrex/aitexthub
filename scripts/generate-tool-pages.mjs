#!/usr/bin/env node
/**
 * Generate placeholder tool pages. Run from repo root: node scripts/generate-tool-pages.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const PLACEHOLDER_ANSWER = 'This is a placeholder answer. Replace with your actual FAQ content when you have it. The site owner will paste in the full write-up and FAQs.';

const TOOLS = [
  { slug: 'hollow-knight-name-generator', title: 'Hollow Knight Name Generator', description: 'Generate Hollow Knight-style character and creature names for games and fiction.', seoTitle: 'Hollow Knight Name Generator', key: 'hollow-knight' },
  { slug: 'coven-name-generator', title: 'Coven Name Generator', description: 'Generate coven and witch-style names for fiction and creative projects.', seoTitle: 'Coven Name Generator', key: 'coven' },
  { slug: 'bg3-name-generator', title: 'BG3 Name Generator', description: "Generate Baldur's Gate 3 and D&D-style character names.", seoTitle: 'BG3 Name Generator - Baldur\'s Gate 3 Names', key: 'bg3' },
  { slug: 'secret-organization-name-generator', title: 'Secret Organization Name Generator', description: 'Generate secret society and organization names for fiction and games.', seoTitle: 'Secret Organization Name Generator', key: 'secret-organization' },
  { slug: 'genderbend-name-generator', title: 'Genderbend Name Generator', description: 'Generate genderbent and alternate-gender name ideas for characters.', seoTitle: 'Genderbend Name Generator', key: 'genderbend' },
  { slug: 'motorcycle-club-name-generator', title: 'Motorcycle Club Name Generator', description: 'Generate biker and motorcycle club names for fiction and creative projects.', seoTitle: 'Motorcycle Club Name Generator - Biker Names', key: 'motorcycle-club' },
  { slug: 'beyblade-name-generator', title: 'Beyblade Name Generator', description: 'Generate Beyblade-style names for tops and characters.', seoTitle: 'Beyblade Name Generator', key: 'beyblade' },
  { slug: 'homestuck-troll-name-generator', title: 'Homestuck Troll Name Generator', description: 'Generate Homestuck troll-style names for characters and fiction.', seoTitle: 'Homestuck Troll Name Generator', key: 'homestuck-troll' },
  { slug: 'symbiote-name-generator', title: 'Symbiote Name Generator', description: 'Generate symbiote and Venom-style names for characters and fiction.', seoTitle: 'Symbiote Name Generator', key: 'symbiote' },
  { slug: 'speedster-name-generator', title: 'Speedster Name Generator', description: 'Generate speedster and Flash-style names for characters.', seoTitle: 'Speedster Name Generator', key: 'speedster' },
  { slug: 'boxer-name-generator', title: 'Boxer Name Generator', description: 'Generate boxer nicknames and fighting names for characters.', seoTitle: 'Boxer Name Generator - Boxing Nicknames', key: 'boxer' },
  { slug: 'hillbilly-name-generator', title: 'Hillbilly Name Generator', description: 'Generate hillbilly and country-style names for fiction and humor.', seoTitle: 'Hillbilly Name Generator', key: 'hillbilly' },
  { slug: 'crew-name-generator', title: 'Crew Name Generator', description: 'Generate crew and gang names for GTA-style games and fiction.', seoTitle: 'Crew Name Generator - GTA Crew Names', key: 'crew' },
  { slug: 'tadc-name-generator', title: 'TADC Name Generator', description: 'Generate The Amazing Digital Circus-style names for characters.', seoTitle: 'TADC Name Generator - Digital Circus Names', key: 'tadc' },
  { slug: 'httyd-name-generator', title: 'HTTYD Name Generator', description: 'Generate How to Train Your Dragon-style dragon and character names.', seoTitle: 'HTTYD Name Generator - Dragon Names', key: 'httyd' },
  { slug: 'drag-king-name-generator', title: 'Drag King Name Generator', description: 'Generate drag king and masculine stage names for performers.', seoTitle: 'Drag King Name Generator', key: 'drag-king' },
  { slug: 'yautja-name-generator', title: 'Yautja Name Generator', description: 'Generate Predator and Yautja-style names for characters.', seoTitle: 'Yautja Name Generator - Predator Names', key: 'yautja' },
  { slug: 'badass-username-generator', title: 'Badass Username Generator', description: 'Generate badass usernames and gamer tags for profiles.', seoTitle: 'Badass Username Generator', key: 'badass-username' },
  { slug: 'army-name-generator', title: 'Army Name Generator', description: 'Generate army squad and military-style names for games and fiction.', seoTitle: 'Army Name Generator', key: 'army' },
  { slug: 'nun-name-generator', title: 'Nun Name Generator', description: 'Generate nun and religious-order-style names for fiction.', seoTitle: 'Nun Name Generator', key: 'nun' },
  { slug: 'clash-royale-name-generator', title: 'Clash Royale Name Generator', description: 'Generate Clash Royale-style usernames and character names.', seoTitle: 'Clash Royale Name Generator', key: 'clash-royale' },
  { slug: 'task-force-name-generator', title: 'Task Force Name Generator', description: 'Generate task force and special ops names for games and fiction.', seoTitle: 'Task Force Name Generator', key: 'task-force' },
  { slug: 'kik-name-generator', title: 'Kik Name Generator', description: 'Generate Kik usernames and messenger-style names.', seoTitle: 'Kik Name Generator', key: 'kik' },
  { slug: 'tumblr-blog-name-generator', title: 'Tumblr Blog Name Generator', description: 'Generate Tumblr blog names and aesthetic usernames.', seoTitle: 'Tumblr Blog Name Generator', key: 'tumblr-blog' },
  { slug: 'amusement-park-name-generator', title: 'Amusement Park Name Generator', description: 'Generate amusement park and theme park names for creative projects.', seoTitle: 'Amusement Park Name Generator', key: 'amusement-park' },
  { slug: 'fakemon-name-generator', title: 'Fakemon Name Generator', description: 'Generate fakemon and fan-made Pokémon-style names.', seoTitle: 'Fakemon Name Generator', key: 'fakemon' },
  { slug: '40k-planet-name-generator', title: '40K Planet Name Generator', description: 'Generate Warhammer 40K-style planet and world names.', seoTitle: '40K Planet Name Generator - Warhammer Names', key: 'fortyk-planet' },
  { slug: 'magical-girl-name-generator', title: 'Magical Girl Name Generator', description: 'Generate magical girl and anime-style transformation names.', seoTitle: 'Magical Girl Name Generator', key: 'magical-girl' },
];

function pascal(slug) {
  let p = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  if (/^\d/.test(p)) p = 'Fortyk' + p.replace(/^\d+k?/i, '');
  return p + 'Page';
}

function faqEntries() {
  const items = [];
  for (let i = 1; i <= 23; i++) {
    items.push("  { category: 'General', question: 'FAQ question placeholder " + i + "', answer: '" + PLACEHOLDER_ANSWER.replace(/'/g, "\\'") + "' }");
  }
  return items.join(',\n');
}

function escape(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function generatePage(tool) {
  const fnName = pascal(tool.slug);
  return `import type { Metadata } from 'next';
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

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>${escape(tool.title)} – Write-up placeholder</h2>
        <p>Write-up content to be added by site owner. Replace this section with your full article and FAQs.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
${faqEntries()}
];

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
  fs.writeFileSync(filePath, generatePage(tool), 'utf8');
  console.log('Wrote', filePath);
}
console.log('Done. Generated', TOOLS.length, 'pages.');

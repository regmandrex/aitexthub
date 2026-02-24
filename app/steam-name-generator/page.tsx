import type { Metadata } from 'next';
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

const toolSlug = 'steam-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Steam Name Generator',
    description: 'Generate Steam usernames and gamer tags for your gaming profile.',
    seoTitle: 'Steam Name Generator - Gaming Usernames',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 font-medium">
          A Steam name generator is a free online tool that creates usernames and gamer tags for Steam and other gaming platforms. Get 1–24 cool, unique name ideas per run. No sign-up; runs in your browser.
        </p>
        <h2>What Is a Steam Name Generator?</h2>
        <p>A Steam name generator creates usernames and gamer tags for Steam and other gaming platforms. Use it to find a unique, cool-sounding name. This free tool runs in your browser with no sign-up. For other gaming names try our <Link href="/runescape-name-generator">RuneScape name generator</Link> or <Link href="/elden-ring-name-generator">Elden Ring name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
        <h2>How to Use This Steam Name Generator</h2>
        <p>Follow these steps: set how many names you want per run (1–24); click &quot;Generate names&quot; to get a new list; use the Copy button to copy all names to your clipboard; check Steam or your platform for availability and pick one; run again for more options. No account required. The tool runs in your browser; your settings and generated names are not sent to any server. When pasting lists from the web, use our <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. For other naming tools see our <Link href="/naruto-name-generator">Naruto name generator</Link>, <Link href="/fallout-name-generator">Fallout name generator</Link>, <Link href="/species-name-generator">species name generator</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>When to Use a Steam Name Generator</h2>
        <p>Use this generator when you need Steam or gamer-style username ideas quickly. Key use cases: new Steam or gaming profile names; esports or stream handles; username ideas for other platforms. Names must be unique on each platform; always check availability. For other gaming styles try our <Link href="/runescape-name-generator">RuneScape name generator</Link>, <Link href="/elden-ring-name-generator">Elden Ring name generator</Link>, or <Link href="/fallout-name-generator">Fallout name generator</Link>. For creature or character names use the <Link href="/species-name-generator">species name generator</Link> and <Link href="/god-goddess-name-generator">god and goddess name generator</Link>.</p>
        <h2>Steam and Gamer Naming Style</h2>
        <p>Steam and gamer usernames often use bold, memorable word combinations. This generator uses curated gamer-style elements and combines them at random so you get new combinations that fit that style. The output is for inspiration only; check Steam or your platform for availability. For other naming styles see our <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link>, <Link href="/muslim-name-generator">Muslim name generator</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This Steam name generator runs in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list. For more naming tools—<Link href="/naruto-name-generator">Naruto</Link>, <Link href="/runescape-name-generator">RuneScape</Link>, <Link href="/island-name-generator">island name generator</Link>, <Link href="/tribe-name-generator">tribe name generator</Link>—see our <Link href="/">homepage</Link>. For cleaning pasted text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or document. Check Steam or your platform for availability before committing to a name. If you notice extra spaces or line breaks after pasting, run the text through our <Link href="/space-remover">space remover</Link> or <Link href="/strip-html">strip HTML</Link>. For more tools see our <Link href="/">homepage</Link>.</p>
        <h2>Why &quot;Steam&quot; Specifically?</h2>
        <p>Steam is a major gaming platform; people often search for Steam username ideas. The generator serves that intent and works for other platforms too. For other gaming or character names see our <Link href="/runescape-name-generator">RuneScape</Link>, <Link href="/elden-ring-name-generator">Elden Ring</Link>, <Link href="/fallout-name-generator">Fallout name generator</Link>, and <Link href="/">homepage</Link>.</p>
        <h2>Combining With Other Generators</h2>
        <p>Your project may need more than one naming style. Use this generator for Steam-style names and our <Link href="/runescape-name-generator">RuneScape name generator</Link> for MMO-style, or our <Link href="/naruto-name-generator">Naruto</Link>, <Link href="/fallout-name-generator">Fallout</Link>, or <Link href="/ancient-greek-name-generator">ancient Greek name generator</Link> for character names. When assembling lists from multiple tools, keep a single naming document and use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link> when pasting from the web.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated gamer-style first and second elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for inspiration only; we do not check Steam or any platform for availability. For creature or deity names use our <Link href="/species-name-generator">species name generator</Link> and <Link href="/god-goddess-name-generator">god and goddess name generator</Link>.</p>
        <h2>Summary</h2>
        <p>Use this Steam name generator to create username and gamer tag ideas for Steam and other platforms. Set the number of names (1–24) and run as often as you like. Copy results and check your platform for availability. The tool runs locally in your browser with no sign-up. For other naming styles see our <Link href="/">homepage</Link>. For cleaning pasted text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Steam name generator?', answer: 'A Steam name generator is an online tool that creates usernames and gamer tags for Steam and other gaming platforms. You get cool, unique name ideas for your profile.' },
  { category: 'Usage', question: 'How do I use the Steam name generator?', answer: 'Set the number of names (1–24) and click "Generate names." Copy or run again. No sign-up required.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. It runs in your browser for free.' },
  { category: 'Use cases', question: 'Can I use the names for Steam?', answer: 'Yes. Check Steam\'s availability; names must be unique on the platform.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. Generation runs in your browser.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: '1–24 per run. Run again for more.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have RuneScape, Elden Ring, Naruto, and more. See our homepage.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No.' },
  { category: 'Use cases', question: 'Can I use the names for other platforms?', answer: 'Yes. The names work as ideas for any gaming or social platform; check each platform\'s availability.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Run again for more.' },
  { category: 'General', question: 'Why "Steam" specifically?', answer: 'Steam is a major gaming platform; people often search for Steam username ideas. The generator serves that intent and works for other platforms too.' },
  { category: 'Use cases', question: 'Can I use it for esports?', answer: 'Yes. Use as inspiration for in-game or stream names.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Try RuneScape or Elden Ring for different gaming styles. See our homepage.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'The tool combines curated gamer-style first and second elements at random.' },
  { category: 'General', question: 'Are the names unique?', answer: 'They are randomly combined. Check Steam (or your platform) to see if a name is available.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes, for creative or tech-related activities.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'You can cite it as a source of inspiration.' },
  { category: 'General', question: 'What if I need a specific style?', answer: 'Run the generator multiple times for variety.' },
];

export default async function SteamNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="steam" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Steam name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

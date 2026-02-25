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

const toolSlug = 'shopify-store-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Shopify Store Name Generator',
    description: 'Generate business and store name ideas for Shopify and e-commerce.',
    seoTitle: 'Shopify Store Name Generator - Business Names',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Shopify Store Name Generator - Business and Store Names</h2>
        <h2>Introduction</h2>
        <p>This guide explains how to use a Shopify store name generator (or Shopify business name generator) to create business and store name ideas for Shopify and e-commerce. The tool runs in your browser and produces memorable name options at the click of a button. It is designed for anyone who needs store or business name inspiration quickly. The generator does not store data and runs entirely in your browser. You get 1–24 names per run and can run it as often as you like with no sign-up.</p>
        <p>People search for Shopify store name generator or Shopify business name ideas; this page serves those intents with one free generator. For other naming try our <Link href="/bracket-name-generator">bracket name generator</Link> (teams/events) or <Link href="/tribe-name-generator">tribe name generator</Link>. For cleaning text use <Link href="/strip-html">strip HTML</Link> and <Link href="/space-remover">space remover</Link>. More on our <Link href="/">homepage</Link>.</p>
        <h2>What Is a Shopify Store Name Generator?</h2>
        <p>A Shopify store name generator (or Shopify business name generator) creates store and business name ideas for Shopify and e-commerce. You get memorable name options at the click of a button. The generator combines curated business- and store-style elements at random so each run produces new combinations. The output is for inspiration only. This free tool runs in your browser with no sign-up.</p>
        <p>The output is plain text, one name per line. You can copy the list and paste it into a notes app, then check availability on Shopify and trademark databases before using a name.</p>
        <h2>Why This Shopify Store Name Generator Matters</h2>
        <p>Choosing a memorable store name can be tricky. A Shopify store name generator speeds up brainstorming. You get options in seconds. The tool is free and does not require an account. Names are created in your browser and are not sent to our servers.</p>
        <h2>How to Use This Shopify Store Name Generator</h2>
        <p>Follow these steps: set how many names you want per run (1–24); click &quot;Generate names&quot; to get a new list; use the Copy button to copy all names to your clipboard; paste into your notes and check availability on Shopify and trademark databases; run again for more options. No account required. The tool runs in your browser; your settings and generated names are not sent to any server.</p>
        <h2>When to Use a Shopify Store Name Generator</h2>
        <p>Use this generator when you need store or business name ideas quickly. Key use cases: new Shopify stores; e-commerce brands; business name brainstorming. The output is for inspiration only; always verify domain and trademark availability before committing to a name.</p>
        <h2>Use Cases in Detail</h2>
        <p>Store owners use the Shopify store name generator when launching or rebranding. Marketers use it for brand name brainstorming. Run the generator multiple times to build a shortlist, then check availability on Shopify and trademark databases. For team or event names try our bracket or tribe name generator; see our homepage for the full list.</p>
        <h2>Store Naming Style</h2>
        <p>Store names often use memorable, brandable word combinations. This generator uses curated business- and store-style first and second elements and combines them at random so you get new combinations. The output is for creative use only; you must verify availability.</p>
        <h2>How the Shopify Store Name Generator Works (Step by Step)</h2>
        <p>When you open the page, you choose how many names you want (1–24). Clicking &quot;Generate names&quot; triggers the tool to randomly combine curated elements in your browser. Each run is independent; no names or settings are sent to a server. You can copy the full list and paste it into a notes app. To get more ideas, run the generator again.</p>
        <h2>Privacy and Local Processing</h2>
        <p>This Shopify store name generator runs entirely in your browser. Names are created locally; your choices and generated names are not sent to our servers. No account or login is required. We do not store your inputs or the generated list.</p>
        <h2>Copying and Exporting Names</h2>
        <p>Use the Copy button to copy all names to your clipboard (one per line). Paste into a notes app or document. If you notice extra spaces or line breaks after pasting, run the text through a space remover or strip-HTML tool.</p>
        <h2>Running the Generator in Batches</h2>
        <p>When you need many name ideas, run the generator multiple times. Each run gives up to 24 names. Paste each run into the same document and remove duplicates. There is no daily or total limit.</p>
        <h2>Limits and Batch Size</h2>
        <p>You can request 1–24 names per run. There is no daily or total limit. Run the generator again for more options. No download or account is required.</p>
        <h2>No Download or Account Required</h2>
        <p>This Shopify store name generator runs entirely in your browser. You do not need to download software or create an account. Open the page, set how many names you want, and click generate. The tool is free and works on desktop, tablet, and phone.</p>
        <h2>Who Uses a Shopify Store Name Generator?</h2>
        <p>Store owners use it when launching or rebranding a Shopify store. Marketers use it for brand name brainstorming. The same tool works for any e-commerce or business name need. No account or download is required on our site.</p>
        <h2>Getting the Most Out of the Shopify Store Name Generator</h2>
        <p>Run the generator several times and paste all results into one document. Skim for names that fit your niche, then check availability on Shopify and trademark databases. For team or event names try our bracket or tribe name generator; see our homepage for the full list.</p>
        <h2>Tool Methodology and Limitations</h2>
        <p>The tool uses curated business- and store-style first and second elements. When you click generate, it randomly combines these in your browser so each run is different. No names or settings are sent to a server. The output is for inspiration only; you must verify domain and trademark availability.</p>
        <h2>Combining With Other Generators</h2>
        <p>Use this generator for store names and our bracket or tribe name generator for team or event names. When assembling lists from multiple tools, keep one document and use a space remover or strip-HTML tool when pasting from the web. See our <Link href="/">homepage</Link> for the full list.</p>
        <h2>Typical Workflow</h2>
        <p>A typical workflow is: open the page, set the number of names (e.g. 12 or 24), click generate, then copy the list. Paste into a notes app and check availability on Shopify and trademark databases. Run the generator again for more options. No account or download is required.</p>
        <h2>Quick Reference: Shopify Store Name Generator at a Glance</h2>
        <p>The Shopify store name generator produces 1–24 names per run, with no daily limit. Names are business- and store-style and suitable for Shopify and e-commerce. The tool runs in your browser with no sign-up; names are created locally and are not sent to our servers. Use the Copy button to copy all names. For other naming tools see our homepage.</p>
        <p>You can run the generator as often as you like. Each run is independent and produces a new random set. There is no account, no download, and no daily cap. Always verify domain and trademark availability before using a name.</p>
        <h2>Checking Name Availability for Shopify</h2>
        <p>After you have a shortlist from the Shopify store name generator, check whether each name is available on Shopify and as a domain. Shopify lets you search for store name availability when you sign up. Use a domain registrar to check if the matching .com or other TLD is free. Then search trademark databases (e.g. in your country) to reduce the risk of conflict. The generator does not check availability; it only supplies name ideas.</p>
        <p>If a name is taken on Shopify but you like it, try adding a short prefix or suffix (e.g. "The" or "Co") or using a different TLD. Keep the name easy to spell and remember. The generator can be run again for more options if you need a larger shortlist.</p>
        <h2>Store Names for Different Niches</h2>
        <p>The Shopify store name generator produces general business- and store-style names. You can use them as-is or combine them with your niche. For example, if you sell jewelry, you might take a generated name and add "Jewelry" or "Boutique." For a broader brand, the generated name alone might work. Run the generator multiple times and paste results into one document; then pick and refine the names that fit your niche and brand.</p>
        <h2>Why Use a Generator Instead of Brainstorming Alone?</h2>
        <p>Brainstorming store names can feel slow or repetitive. A Shopify store name generator gives you a stream of options in seconds. You can run it several times and mix generated ideas with your own. The combination of random elements often sparks new directions you would not have thought of alone. After you have a shortlist, check availability on Shopify and in trademark databases before committing.</p>
        <h2>Batch Generation and Building a Shortlist</h2>
        <p>Run the Shopify store name generator multiple times with 12 or 24 names per run. Copy each batch into a single document and skim for names that fit your brand and niche. Remove duplicates and then check availability on Shopify and for domains and trademarks. The generator has no daily limit so you can build a long shortlist quickly. For team or event names try our bracket or tribe name generator; see our homepage for more tools.</p>
        <p>When you have a few finalists, say them out loud and imagine them on packaging or a website. Short, memorable names often work best. The generator is for inspiration only; you are responsible for checking that a name is available and does not infringe any trademark.</p>
        <h2>Tips for Choosing a Store Name</h2>
        <p>Keep the name easy to spell and type so customers can find you in search. Avoid hyphens or numbers if they make the name harder to remember. The Shopify store name generator gives you combinations; you can use one as-is or blend two ideas. Check that the name is not too similar to an existing brand in your niche to reduce confusion and legal risk.</p>
        <p>Once you have a shortlist, test the name with friends or target customers. The generator does not replace market research; it speeds up the brainstorming phase. For team or event names try our bracket or tribe name generator; see our homepage for more tools.</p>
        <p>The tool runs in your browser with no sign-up and no daily limit. Names are created locally and are not sent to our servers. Always verify domain and trademark availability before committing to a name for your store.</p>
        <p>Run the generator as often as you like to build a shortlist. Paste results into one document and remove duplicates. For team or event names use our bracket or tribe name generator; see our homepage for the full list of naming and text tools. Always check Shopify and trademark databases before using a name for your store. The generator runs in your browser with no sign-up.</p>
        <h2>Formatting and Pasting Generated Names</h2>
        <p>The Shopify store name generator outputs one name per line in plain text. When you paste into a notes app or document, the formatting is preserved. If you see extra spaces or odd line breaks after pasting from the web, run the text through a space remover or strip-HTML tool. Our site has both; see the homepage for links. Use the Copy button to copy all names at once.</p>
        <h2>Summary</h2>
        <p>Use this Shopify store name generator to create store and business name ideas for Shopify and e-commerce. Set the number of names (1–24) and run as often as you like. Copy results into your notes and check availability on Shopify and trademark databases. The tool runs locally in your browser with no sign-up. For other naming tools—bracket, tribe, island, and more—see our <Link href="/">homepage</Link>. For cleaning pasted text use a space remover or strip-HTML tool. You get up to 24 names per run with no daily limit; always verify availability before using a name. Bookmark the page for quick access when brainstorming store names. The free Shopify store name generator does not require an account or download. Names are created in your browser only and are not sent to our servers.</p>
        <p>The generator is free, requires no account, and does not store or send your data. Names are created in your browser only. Always verify domain and trademark availability before using a name for your store. For team or event names try our bracket or tribe name generator.</p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Shopify store name generator?', answer: 'A Shopify store name generator is an online tool that creates business and store name ideas for Shopify and e-commerce. You get memorable name options at the click of a button. This free tool runs in your browser with no sign-up. The output is for inspiration only; always verify domain and trademark availability before using a name.' },
  { category: 'Usage', question: 'How do I use the Shopify store name generator?', answer: 'Set how many names you want per run (1–24), click "Generate names" to get a new list, then use the Copy button to copy all names to your clipboard. Paste into your notes and check availability on Shopify and trademark databases. Run again for more options; no sign-up is required. The tool runs in your browser so your settings and generated names are not sent to any server.' },
  { category: 'General', question: 'What is a Shopify business name generator?', answer: 'It is the same as a Shopify store name generator: it produces business and store name ideas for Shopify and e-commerce. You get memorable name options at the click of a button. The tool runs in your browser for free with no sign-up.' },
  { category: 'General', question: 'Is it free?', answer: 'Yes. This Shopify store name generator is free to use in your browser. You can generate names as often as you like without creating an account or paying. The tool runs locally on your device.' },
  { category: 'Use cases', question: 'Can I use the names for my Shopify store?', answer: 'Yes. Use the names as inspiration, then check availability on Shopify and trademark databases before committing. The generator does not guarantee that a name is available or trademark-free. Always verify yourself.' },
  { category: 'Privacy', question: 'Is my data sent to a server?', answer: 'No. This Shopify store name generator runs in your browser. When you set the number of names and click generate, the names are created locally on your device. Your choices and the generated names are not sent to our servers. We do not store your inputs or the generated list.' },
  { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. The Shopify store name generator runs in a web browser and works on desktop, tablet, and phone. You do not need to install an app. Open the page, choose how many names you want, then generate. On a phone you can generate a short list and copy it into notes.' },
  { category: 'Limits', question: 'How many names can I generate?', answer: 'You can request 1–24 names per run with this Shopify store name generator. If you need more than 24, run the generator again; each run produces a new random set. There is no daily or total limit. Paste multiple runs into one document and remove duplicates if needed.' },
  { category: 'General', question: 'What other name generators do you have?', answer: 'We have bracket, tribe, island, and many others for teams, events, and business names. See our homepage for the full list of naming and text tools.' },
  { category: 'Usage', question: 'Can I copy the names?', answer: 'Yes. Use the Copy button on this Shopify store name generator to copy all generated names to your clipboard. Paste into a notes app or document. The names are plain text, one per line. If you notice extra spaces after pasting, run the text through a space remover or strip-HTML tool.' },
  { category: 'General', question: 'Do I need an account?', answer: 'No. This Shopify store name generator works without sign-up or login. The tool runs entirely in your browser. You do not need to create an account on our site to use it.' },
  { category: 'Use cases', question: 'Can I use the names for other platforms?', answer: 'Yes. The names work as ideas for any e-commerce or business platform. Use them as inspiration and check availability on each platform and in trademark databases before using a name.' },
  { category: 'Privacy', question: 'Do you store the names?', answer: 'No. Generation happens in your browser. We do not receive or store the names or your settings. The Shopify store name generator runs locally on your device. You can use the tool in a private or incognito window if you prefer.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run of this Shopify store name generator gives up to 24 names. To get more, run the generator again; each run produces a new random set. You can paste multiple runs into one document and then remove duplicates. There is no daily or total limit.' },
  { category: 'General', question: 'Why "Shopify" specifically?', answer: 'Many people search for Shopify store name ideas. The generator serves that intent and works for any e-commerce or business name need. The same tool is useful for other platforms; always verify availability per platform.' },
  { category: 'Use cases', question: 'Can I use it for a brand name?', answer: 'Yes. Use the names as inspiration for brand names. Then verify domain and trademark availability before committing. The generator does not guarantee that a name is available or trademark-free.' },
  { category: 'General', question: 'Can I combine with other generators?', answer: 'Yes. Use this Shopify store name generator for store names and our bracket or tribe name generator for team or event names. When you assemble lists from multiple tools keep one document and use a space remover or strip-HTML tool when pasting from the web. See our homepage for the full list.' },
  { category: 'Technical', question: 'How are the names generated?', answer: 'This Shopify store name generator uses curated business- and store-style first and second elements. When you click generate, the tool randomly combines these in your browser so each run is different. No names or settings are sent to a server. The result is for inspiration only.' },
  { category: 'General', question: 'Are the names trademark-free?', answer: 'The names are algorithm-generated. We do not check trademark or domain availability. You must verify trademark and domain availability yourself before using a name for your store or brand.' },
  { category: 'Use cases', question: 'Can teachers use it?', answer: 'Yes. Teachers can use this Shopify store name generator for business or marketing exercises. Students might generate a list of store name ideas and then discuss availability and branding. The tool is free and runs in the browser with no sign-up.' },
  { category: 'General', question: 'How do I cite the tool?', answer: 'For academic or formal use you can cite this Shopify store name generator as a source of inspiration for store or business names. A brief acknowledgment is optional. We do not require attribution.' },
  { category: 'General', question: 'What if I need a specific niche?', answer: 'Run this Shopify store name generator multiple times to get variety; each run produces new random combinations. You can also combine a chosen name with your niche keyword manually (e.g. add "Boutique" or "Co"). For other naming styles see our homepage.' },
  { category: 'Use cases', question: 'Can I use it for a new e-commerce store?', answer: 'Yes. The Shopify store name generator is designed for store and business name ideas. Run the generator multiple times to get a shortlist, then check availability on Shopify and trademark databases. The tool is free and runs in your browser with no sign-up.' },
];

export default async function ShopifyStoreNameGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;
  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<ThemedNameGeneratorTool generatorKey="shopify" resultLabel="Generated store names" />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions about the Shopify store name generator.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

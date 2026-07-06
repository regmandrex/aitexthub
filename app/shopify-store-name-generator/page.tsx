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


const toolSlug = 'shopify-store-name-generator';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: 'Shopify Store Name Generator',
    description: 'Free Shopify store name generator for business and store names. Create Shopify store name ideas in your browser with no sign-up.',
    seoTitle: 'Shopify Store Name Generator – Store & Business Name Ideas',
    urlPath: `/${toolSlug}`,
  });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Shopify Store Name Generator – Ecommerce Brand Names</h2>
        <p>
          Your store name is your brand. Before a customer sees a single product, the name shapes what they expect — whether your shop feels premium or playful, niche or general, trustworthy or forgettable. It becomes your domain, your logo, your social handles, and the word customers type when they come back. This Shopify store name generator builds brandable, memorable ecommerce names in your browser — no sign-up, 1–24 ideas per run — so you can move fast from a blank field to a shortlist worth checking for a matching .com and trademark.
        </p>
        <p>
          Naming an online store is a branding decision with real stakes, not a throwaway username. The best names are easy to say, easy to spell, available as a domain, clear about (or at least compatible with) what you sell, and legally clear to use. The guide below walks through each of those factors so the name you choose is one you can build a business on rather than one you have to abandon after your first sales.
        </p>

        <h2>What Makes a Strong Store Name</h2>
        <p>
          A good ecommerce brand name balances several qualities at once. Keeping these in mind turns a generated idea into a real candidate:
        </p>
        <ul>
          <li><strong>Memorable and easy to spell.</strong> Customers who hear your name should be able to type it correctly on the first try — clever misspellings and hard-to-say words cost you traffic.</li>
          <li><strong>Brandable.</strong> Short, distinctive, and pleasant to say, with room to grow beyond one product category.</li>
          <li><strong>Available.</strong> A matching domain (ideally .com), free social handles, and no conflicting trademark — a name you cannot own is not really available.</li>
          <li><strong>Relevant.</strong> It fits your niche or evokes the right feeling, without boxing you in so tightly you cannot expand later.</li>
        </ul>

        <h2>Types of Store Names</h2>
        <p>
          Ecommerce names generally fall into a few families, and knowing them helps you decide the direction to steer the generator. <strong>Descriptive</strong> names say what you sell (&quot;Modern Rug Co.&quot;) and are clear but harder to make unique. <strong>Evocative or suggestive</strong> names hint at a feeling or benefit (&quot;Bloom,&quot; &quot;Everlane&quot;-style) and balance meaning with brandability. <strong>Invented or abstract</strong> names are made-up words (&quot;Zappos,&quot; &quot;Glossier&quot;) that are highly ownable and trademarkable but need marketing to build meaning. <strong>Founder or personal</strong> names lend authenticity to a personal brand. Generate a batch, then sort the results into these buckets and decide which fits your ambitions — a descriptive name is fine for a focused niche shop, while an invented name gives a scaling brand the most room and legal protection.
        </p>

        <h2>The Domain and Handle Problem</h2>
        <p>
          The single biggest constraint in modern store naming is domain availability. Most short, obvious .com domains were registered long ago, so a name you love is often already owned. This is exactly why invented words and unexpected two-word combinations have taken over ecommerce naming — they are the names still available as a clean .com. When you review generated ideas, treat the domain check as a hard gate: a great name with no available domain (and no acceptable close variant) is not usable. Aim for a matching .com if you can, since customers default to typing it, and check that the equivalent social handles are open too so your brand stays consistent across Instagram, TikTok, and the rest.
        </p>

        <h2>Naming for Your Niche</h2>
        <p>
          A store name should fit the products and the audience it serves. A luxury skincare line, a rugged outdoor-gear shop, and a whimsical children&apos;s toy store each call for a different tone in the name — the words, the rhythm, and the feeling should match what a customer in that niche expects. A useful trick is to leave a little room for growth: a name tied too literally to one product (&quot;The Yoga Mat Store&quot;) can hold you back if you later add apparel or accessories, whereas a slightly broader evocative name grows with the catalog. Decide who your customer is, then keep the generated names whose tone would earn their trust.
        </p>

        <h2>Trademark and Legal Caution</h2>
        <p>
          Because a store name is a business asset, it carries legal weight a gamer tag never does. Before you commit, it is worth checking that your chosen name is not already trademarked in your product category, since building a brand on a name someone else owns can force a costly rebrand or a legal dispute down the line. Search the trademark database in your country, look for existing businesses using the same or a confusingly similar name in your space, and favor distinctive or invented names, which are both easier to trademark yourself and less likely to collide with an established mark. This tool suggests creative ideas only — it does not check trademarks or availability, so that due diligence is on you before you launch.
        </p>

        <h2>How to Use This Shopify Store Name Generator</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Set how many store name ideas you want per run (1–24).</li>
          <li>Click <strong>Generate names</strong> to get a fresh batch of brandable ecommerce names.</li>
          <li>Keep the memorable, easy-to-spell options that fit your niche and tone, and sort them by name type (descriptive, evocative, or invented).</li>
          <li>Use the Copy button to save your shortlist, then check each favorite for an available .com domain, open social handles, and trademark conflicts.</li>
          <li>Run again for more options — there is no limit, no account, and no download.</li>
        </ol>
        <p>
          Generation happens entirely in your browser. Your settings and the names you create are never sent to a server, so your unlaunched brand ideas stay private until you register the domain.
        </p>

        <h2>Tips and Common Mistakes</h2>
        <p>
          The most expensive mistake is falling in love with a name before checking that you can actually own it — always verify the domain, the handles, and the trademark before you build a logo or print packaging. A second is choosing a name that is hard to spell or say; if you cannot tell a friend your store name and have them find it, neither can your customers. A third is boxing yourself in with a name so narrow it cannot cover your next product line, or so generic it disappears among competitors. Generate a broad batch, shortlist the names that are brandable and niche-appropriate, and let the domain and trademark checks make the final cut — the goal is a name you can own, grow, and defend, not just one that sounds nice today.
        </p>

        <h2>Privacy</h2>
        <p>
          This Shopify store name generator runs entirely in your browser. When you set a count and generate, the names are created locally on your device — nothing is uploaded, logged, or stored on our servers, and the tool has no connection to Shopify itself. Close the tab and the list is gone unless you copied it, so your brand ideas stay yours until you launch.
        </p>
      </div>
    </section>
  );
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: 'What is a Shopify store name generator?', answer: 'It is a browser tool that produces brandable name ideas for an online store or ecommerce business, whether you sell on Shopify, WooCommerce, Etsy, or your own site. It combines evocative words, short brandable coinages, and niche-friendly modifiers into names that could plausibly sit above a storefront. Everything runs locally in your browser, it is free, and nothing you generate is stored or sent to a server. Treat the output as a brainstorming pool, then vet your favorites for domains and trademarks.' },
  { category: 'Usage', question: 'How do I use the Shopify store name generator?', answer: 'Set how many names you want per run (1 to 24) and click Generate for a fresh batch of store-name ideas. Skim for names that fit your niche and feel brandable, then use the Copy button to save the batch to your notes. Shortlist five to ten, then check the .com domain and a trademark search for each. Run again as often as you like; there is no sign-up and no download.' },
  { category: 'Naming', question: 'What makes a good ecommerce store name?', answer: 'A strong store name is short, easy to spell after hearing it once, and easy to remember, so customers can find you again and tell friends. It should hint at what you sell or the feeling of your brand without boxing you in as you expand. Avoid awkward spellings, hyphens, and numbers, which hurt word-of-mouth. Above all it needs an available domain and no trademark conflict, so test those before you fall in love with one.' },
  { category: 'Naming', question: 'Should my Shopify store name include a keyword like "shop" or my product?', answer: 'A relevant keyword can help customers instantly understand what you sell and can aid search, but a name built only from generic keywords is hard to trademark and easy to confuse with rivals. A common sweet spot is a distinctive brand word paired with a light category hint, like "Everlane" (fashion) or "Lumen Candle Co." Generate a batch, then keep names that signal your niche while still feeling like a unique brand rather than a description.' },
  { category: 'Naming', question: 'How important is getting the .com domain?', answer: 'For a serious store, matching the .com still matters most, since shoppers default to typing it and it signals legitimacy. If the exact .com is taken, options include a short brandable coinage that is more likely to be free, adding a word (getX, shopX, Xgoods), or a strong alternative like .co or .store, though .com remains the safest. Because this tool does not check domains, run your shortlist through a registrar before committing.' },
  { category: 'General', question: 'Is the Shopify store name generator free?', answer: 'Yes, it is completely free with no account, email, or payment. You can generate as many batches of store-name ideas as you want, with no daily or total limit. Nothing is gated and there is nothing to install. Because it runs in your browser, it costs you nothing and keeps your ideas private while you brainstorm.' },
  { category: 'Naming', question: 'What is a brandable name versus a descriptive name?', answer: 'A descriptive name says exactly what you sell (Cheap Yoga Mats), which is clear but generic, hard to own, and limiting if you expand. A brandable name is a distinctive, often coined or evocative word (Nike, Glossier, Warby Parker) that becomes meaningful as your brand grows and is far easier to trademark and rank for. This generator leans brandable, then you can add a category hint if you want more clarity.' },
  { category: 'Best practices', question: 'How do I check a store name is not already trademarked?', answer: 'Before committing, run the name through your national trademark database (the USPTO TESS search in the US) and a plain web search to spot an existing brand in your category. A name can be free as a domain yet still be trademarked, which is a legal risk once you sell. This tool only suggests word combinations and does not check trademarks, so treat that check as a required step, not an optional one.' },
  { category: 'Privacy', question: 'Is anything I generate sent to a server or stored?', answer: 'No. The generator runs entirely in your browser, so names are assembled on your device and never transmitted anywhere. We do not log or save the names you create, your settings, or how many times you run it. You can brainstorm store names in a private window, and closing the tab clears the last batch unless you copied it.' },
  { category: 'Compatibility', question: 'Does the Shopify store name generator work on mobile?', answer: 'Yes. It is a responsive web page that works on phones, tablets, and desktops without any app. On a phone you can generate a batch, tap Copy, and paste the names into your notes to research later. Any modern mobile browser works, and generation stays fast because it runs locally rather than calling a server.' },
  { category: 'Limits', question: 'How many store names can I generate at once?', answer: 'Each run produces 1 to 24 names, and you choose the count before generating. If you want a wider pool, run it again; every run is a fresh random set. There is no daily or total limit, so keep generating until something clicks. Paste multiple runs into one document and remove duplicates to build a longer shortlist for domain checking.' },
  { category: 'Usage', question: 'Can I copy the generated store names?', answer: 'Yes. The Copy button puts the whole batch on your clipboard as plain text, one name per line, ready to paste into a doc or spreadsheet. A spreadsheet is handy here: put each name in a row and add columns for domain availability, trademark check, and gut feel. Copying is the intended way to save your list, since the tool does not export a file.' },
  { category: 'General', question: 'Do I need an account to use it?', answer: 'No account, login, or email is required. Open the page, set how many names you want, click Generate, and copy the results. There is no registration and nothing hidden behind a sign-up. It stays quick and anonymous so you can brainstorm freely.' },
  { category: 'Naming', question: 'How do I make a store name fit my niche?', answer: 'Decide your niche and the feeling you want first, luxe, playful, natural, techy, and generate several batches, keeping only names whose tone matches. A candle brand might want soft, warm words (Lumen, Ember, Hearth), while a fitness brand wants punchy, energetic ones. You can also pair a brandable word with a subtle category cue, but keep it broad enough to allow future product lines.' },
  { category: 'Technical', question: 'How are the store names generated?', answer: 'The tool draws from curated lists of brandable words, evocative roots, and short modifiers, then randomly combines and shuffles them in your browser each time you click Generate. That randomness surfaces coinages and pairings you might not brainstorm alone. Nothing is sent to a server, and the results are inspiration only, so always verify a name is legally and technically usable before adopting it.' },
  { category: 'Best practices', question: 'Should I test a store name before committing?', answer: 'Yes. Say it aloud to a few people to check it is easy to hear and spell, then confirm the .com is available and run a trademark search. Also check social handles and make sure the name has no unfortunate meaning or existing brand in your space. A name that passes the say-it, spell-it, own-it test is far safer to build a store around than one you simply liked at first glance.' },
  { category: 'Naming', question: 'What are common mistakes when naming a Shopify store?', answer: 'The frequent traps are: picking a name so descriptive it cannot be trademarked or expanded, using tricky spellings or hyphens that break word-of-mouth, ignoring domain availability until after you fall in love with a name, and copying a name too close to an existing brand. Another is boxing yourself in with a hyper-specific name you outgrow. Generate broadly, then filter for names that are distinctive, spellable, and legally clear.' },
  { category: 'Use cases', question: 'Can I use these names for Etsy, Amazon, or a WooCommerce store?', answer: 'Yes. The naming principles, brandable, memorable, spellable, ownable, apply to any ecommerce channel, so the same generated names work for Etsy shops, Amazon brands, WooCommerce sites, or a standalone store. Each marketplace still requires a unique shop name and may have its own rules, so check availability there as well as the domain and trademark. The generator gives ideas; you confirm they fit your platform.' },
  { category: 'Privacy', question: 'Do you store the names I generate?', answer: 'No. Generation happens in your browser and nothing reaches our servers. We do not keep the names, your settings, or a count of your runs. Refreshing or closing the page clears the last batch, so copy anything you want to keep before leaving.' },
  { category: 'Limits', question: 'Can I get more than 24 names?', answer: 'Each run caps at 24, but you can run it as many times as you like. Do several runs and paste them into one document to build a large candidate list, then remove duplicates. There is no daily or total limit, so batching runs is the normal way to gather plenty of options before you start checking domains and trademarks.' },
  { category: 'Best practices', question: 'What is the best workflow for choosing a store name?', answer: 'Define your niche and brand feel, generate a batch of 24, and copy it into a spreadsheet. For your top ten, check the .com domain, run a trademark search, and grab the social handles that are free. Say the finalists aloud to a few people, then pick the one that is brandable, available everywhere, and easy to remember. Building this checklist upfront saves an expensive rebrand later.' },
  { category: 'Use cases', question: 'Is this only for Shopify stores?', answer: 'No. Despite the name, the ideas suit any online business: dropshipping stores, print-on-demand brands, subscription boxes, digital-product shops, or a service brand. The tool focuses on brandable, ecommerce-friendly names, and the platform you sell on does not change what makes a good name. Generate, shortlist, and vet for domain and trademark wherever you plan to launch.' },
  { category: 'Troubleshooting', question: 'Can I use the Shopify store name generator offline?', answer: 'Yes. Once the page has loaded it runs entirely in your browser, so you can keep generating store-name ideas with no connection, and the Copy button works offline too. You will need a connection only to load the page initially and, later, to check domain availability and trademarks, which happen on external sites.' },
];

export default async function ShopifyStoreNameGeneratorPage() {
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


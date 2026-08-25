import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { DandysWorldOcMakerTool } from '@/components/tools/DandysWorldOcMakerTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/seo/url';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'dandys-world-oc-maker';

export async function generateMetadata(): Promise<Metadata> {
  return buildToolMeta({
    title: "Dandy's World OC Maker",
    description: "Create an original Dandy's World OC with a Toon type, role, appearance, personality, and AI-generated reference image.",
    seoTitle: "Dandy's World OC Maker - Create Your Original Toon",
    urlPath: `/${toolSlug}`,
  });
}

const pageFaqs: FaqItem[] = [
  { category: 'General', question: "What is a Dandy's World OC maker?", answer: "A Dandy's World OC maker helps you develop an original Toon character concept with a shape, role, material, palette, personality, and reference image. It is designed for fan-made ideas, not official characters." },
  { category: 'Usage', question: "How do I make a Dandy's World OC?", answer: 'Enter an idea or use the inspiration button, choose the Toon type and appearance details, then select Make my Dandy\'s World OC. The tool turns those choices into one character reference image and a short character sheet.' },
  { category: 'Ideas', question: "What are good Dandy's World OC ideas?", answer: 'Start with an everyday object, snack, animal, plant, job, or toy. Give it one clear role and one personality contrast, such as a cheerful shopkeeper who is afraid of empty shelves or a brave explorer who gets distracted by shiny objects.' },
  { category: 'Originality', question: "Does this Dandy's World OC generator copy canon Toons?", answer: 'No. It is intended to create original fan-made concepts. Avoid official names, exact character designs, logos, and recognizable combinations when developing or publishing your OC.' },
  { category: 'Output', question: "Does the Dandy's World OC maker generate an image?", answer: 'Yes. The tool creates one reference-style image based on the selected Toon type, role, colors, materials, outfit, accessory, and personality.' },
  { category: 'Output', question: 'Will it show one OC or several?', answer: 'The current tool generates one Dandy\'s World OC at a time. This keeps the result focused and avoids spending multiple image-generation requests on one click.' },
  { category: 'Design', question: 'What Toon types can I create?', answer: 'You can start with a Toon animal, living object, food-inspired Toon, toy-like creature, plant or nature Toon, or a surprise combination.' },
  { category: 'Design', question: 'What roles can a Dandy\'s World Toon have?', answer: 'The role options include explorer, shopkeeper, performer, helper, troublemaker, and quiet observer. You can also describe a more specific job in the concept field.' },
  { category: 'Design', question: 'How do I make a memorable Toon silhouette?', answer: 'Choose one dominant shape, one material, and one signature accessory. A readable outline works better than filling the character with unrelated details.' },
  { category: 'Ideas', question: "Can I use the tool for Dandy's World OC ideas?", answer: 'Yes. Use the inspiration button or combine a Toon type, world role, body shape, material, palette, and personality. That combination gives you a usable starting point for an OC idea.' },
  { category: 'Ideas', question: "Can I make a Dandy's World OC base?", answer: 'Yes. Treat the generated character as a base, then lock the silhouette, colors, material, role, and signature accessory before designing alternate outfits or expressions.' },
  { category: 'Ideas', question: 'What should a Dandys World OC base include?', answer: 'A useful Dandys World OC base includes the Toon silhouette, face, main colors, material, role, signature prop, and one personality hook. Keep those details stable before making alternate outfits or scene versions.' },
  { category: 'Ideas', question: 'Can I use this as a Dandys World OC template?', answer: 'Yes. Generate the visual base, then record the Toon type, role, palette, material, expression, accessory, habits, and weaknesses in a reusable template for art, stories, or role-play.' },
  { category: 'Art', question: "Can I use the result for a Dandy's World OC reference sheet?", answer: 'Yes. Use the image and character details as a reference starting point. You can add front, side, back, expression, and prop views when you redraw or refine the design.' },
  { category: 'Art', question: 'Can I use it for fan art?', answer: 'Yes. The generator can help you explore a silhouette, palette, prop, and personality before drawing your own fan art. Review the result and add your own creative decisions.' },
  { category: 'Writing', question: 'Can I use the OC for stories or role-play?', answer: 'Yes. Expand the role and personality into goals, fears, habits, relationships, and scene ideas. The generated concept is a starting brief rather than a complete story.' },
  { category: 'Quality', question: 'Why does my Dandy\'s World OC look generic?', answer: 'Add a concrete anchor such as a specific object, job, unusual behavior, or prop. “A Toon” is broad; “a nervous ticket seller who collects broken buttons” gives the design a stronger direction.' },
  { category: 'Quality', question: 'How can I make my OC feel original?', answer: 'Change the silhouette, role, material, palette, accessory, and personality together. Avoid copying a canon Toon and changing only its color.' },
  { category: 'Technical', question: 'Does the Dandy\'s World character maker work on mobile?', answer: 'Yes. The controls stack on smaller screens and the tool works in a modern mobile browser. A larger screen may be more comfortable for reviewing the generated image.' },
  { category: 'Technical', question: 'Do I need to install an app?', answer: 'No. The Dandy\'s World OC maker runs in a browser. You need an internet connection to load the page and generate an image.' },
  { category: 'Access', question: "Is the Dandy's World OC maker free?", answer: 'The page can be opened for free, but image generation requires an active Pro plan so that image-service costs and usage limits can be managed.' },
  { category: 'Access', question: 'Why do I see the Pro payment plans?', answer: 'The payment plans appear before a paid image request is made. This keeps the tool from spending image credits for visitors who do not have access and explains the available generation limits.' },
  { category: 'Privacy', question: 'Is my character idea stored?', answer: 'The controls and character sheet are used in the current browser session. Avoid entering private or sensitive information into a creative concept.' },
  { category: 'Originality', question: "Is this an official Dandy's World tool?", answer: "No. This is a fan-made creative tool inspired by Dandy's World. It is not affiliated with, endorsed by, or operated by the official creators or rights holders." },
  { category: 'Best practices', question: "What should I do after making a Dandy's World OC?", answer: 'Choose the strongest details, revise the silhouette, give the Toon a memorable name, and write a short scene that shows the role and personality. Your own revision is what turns a generated idea into a character.' },
];

function createWriteUp() {
  return <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6"><div className="prose prose-slate max-w-none">
    <h2>Dandy's World OC Maker - Create an Original Toon</h2>
    <p>This Dandy's World OC maker helps you turn a loose idea into an original Toon character concept. Choose what kind of character it is, what role it plays, how its body is shaped, what it is made from, and what personality comes through in its expressions. The tool then creates one reference-style image so you have something concrete to refine.</p>
    <p>Use it for Dandy's World OC ideas, fan art planning, role-play profiles, character sheets, short stories, and design exercises. The result is fan-made inspiration. It is not an official character and should not be presented as official artwork or approval.</p>

    <h2>How to Make a Dandy's World OC</h2>
    <ol className="list-decimal pl-6"><li>Enter one clear concept, such as a snack-cart Toon, a shy mailbox, or a curious plant character.</li><li>Choose a Toon type and world role so the character has a readable identity.</li><li>Pick a body shape, material, color palette, outfit, and signature accessory.</li><li>Generate one image, then revise the details you want to keep in your own character sheet.</li></ol>

    <h2>Start With a Strong Toon Concept</h2>
    <p>The strongest Dandy's World OC concepts usually begin with a simple noun. It may be an animal, food, household object, toy, plant, tool, or piece of scenery. The noun gives the design a visual anchor. A lunchbox Toon suggests a shape and a way to carry things. A potted plant Toon suggests leaves, soil, watering, and a relationship with growth. A wind-up toy suggests movement, noise, and a mechanism.</p>
    <p>After choosing the anchor, add a role. A character who sells, repairs, explores, performs, organizes, or observes has a reason to appear in scenes. The role can be ordinary or strange, but it should help you decide what the Toon carries, where it spends time, and how it reacts to other characters.</p>

    <h2>Choose a Readable Dandy's World OC Silhouette</h2>
    <p>A memorable OC should still be recognizable when reduced to a small sketch. Start with the largest shape: round, square, tall, wide, narrow, soft, or oddly asymmetrical. Then add one secondary shape that supports the concept. A round snack Toon might have a long paper wrapper, while a small shopkeeper might have an oversized key ring or satchel.</p>
    <p>Do not solve every design problem with another accessory. Too many small details make a character hard to draw and harder to keep consistent. Pick one signature item and let the body shape, face, and colors do most of the work.</p>

    <h2>Use Materials and Colors to Build Identity</h2>
    <p>Material gives a character visual behavior. Rubber can stretch or bounce, felt can show seams and soft edges, painted vinyl can catch bright highlights, and cardboard can fold, crease, or tear. Select one dominant material and use secondary materials only where they support the concept.</p>
    <p>A focused color palette also helps the character stay recognizable. Two main colors and one accent are usually enough for a strong starting point. Put the accent on a face detail, button, prop, bow, or other feature that should attract attention. A limited palette makes later outfit variations easier to manage.</p>

    <h2>Give the Toon a Role and a Personality</h2>
    <p>A job or world role creates story opportunities. An explorer notices routes and hidden places. A shopkeeper remembers what everyone buys. A helper wants to solve problems but may interfere. A performer understands timing and attention. A quiet observer may know more than they say. These roles make the Dandy's World OC useful in scenes rather than decorative.</p>
    <p>Personality becomes more interesting when it contains a contradiction. A cheerful character may dislike crowds. A brave explorer may be nervous about small noises. A dramatic performer may secretly want a quiet job. Give the contradiction a behavior, not only an adjective, so it can appear in dialogue, expressions, and choices.</p>

    <h2>Build a Dandy's World OC Base</h2>
    <p>When you use the result as a Dandy's World OC base, separate stable details from changeable details. Stable details include the silhouette, face, palette, material, role, and signature accessory. Changeable details include the outfit, pose, mood, stage, and condition of the character.</p>
    <p>Lock the stable details first. Then create one variation at a time. If you change the colors, body shape, outfit, accessory, and personality simultaneously, you may accidentally design a completely different character. A repeatable base helps artists, writers, and role-play partners recognize the same Toon across different scenes.</p>

    <h2>Dandy's World OC Ideas by Toon Type</h2>
    <p>Object-based Toons work well when the object has a clear everyday purpose. A mailbox can be curious about private messages, a lunchbox can worry about being empty, and a paint tube can leave colorful traces wherever it goes. Food-inspired Toons can use texture, packaging, and serving habits as part of their personality. Plant Toons can express mood through leaves, petals, growth, or wilting without needing a complicated costume.</p>
    <p>Animal and toy-like Toons offer a different starting point. Use an animal's movement or a toy's mechanism to suggest how the character behaves in a scene. The goal is not to add random cuteness; it is to connect the body, role, and personality so the Dandys World OC feels like one deliberate character.</p>

    <h2>Use the Image as a Reference, Not a Final Design</h2>
    <p>The generated image is a quick visual starting point. It may change a small accessory, simplify a material, or combine details in an unexpected way. Review the image and decide which choices belong to your character. Keep the strongest silhouette and remove anything that makes the design harder to understand.</p>
    <p>For a complete Dandy's World character sheet, add front, side, and back views, several expressions, the signature prop, and a short note about movement. If the Toon has a special mechanism, show how it opens, stretches, folds, or changes. Those details make the character easier to draw and role-play.</p>

    <h2>Dandy's World OC Ideas for Fan Art and Stories</h2>
    <p>For fan art, use the maker to explore shapes and palettes before committing to a finished illustration. Sketch three thumbnail silhouettes, choose the clearest one, and redraw it with your own line work. Add details that communicate the role rather than decorating empty space.</p>
    <p>For stories and role-play, expand the character beyond appearance. Decide what the Toon wants, what it avoids, what it misunderstands, and who it trusts. A role gives the character a daily routine, while a contradiction gives the routine a problem. That combination can produce scenes without needing a complicated backstory.</p>

    <h2>Improve a Generic OC Result</h2>
    <p>If your result looks generic, replace broad words with specific objects and actions. Instead of “a cute character,” try “a tiny repair-shop Toon who keeps every broken screw.” Instead of “a scary character,” try “a polite umbrella Toon that opens whenever it hears a secret.” Specific behavior gives the image and the written character a direction.</p>
    <p>You can also remove details. A character often becomes more memorable when it has one clear prop instead of five competing props. Keep the feature that explains the role, the personality, or the visual silhouette, and let the rest stay simple.</p>

    <h2>Publish Fan-Made Work Responsibly</h2>
    <p>This is a fan-made character tool inspired by Dandy's World. It does not grant rights to the franchise, its official characters, names, logos, or protected artwork. Review the rules of the platform where you publish, especially if you plan to monetize fan work.</p>
    <p>Give every generated concept your own revision pass. Rename generic details, redraw important features, rewrite the personality, and make decisions about how the Toon fits into your project. The final character should reflect your creative choices rather than being presented as an official design.</p>
  </div></section>;
}

export default function DandysWorldOcMakerPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();
  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'DesignApplication', operatingSystem: 'Web', description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } };
  return <><JsonLd data={webPageSchema({ name: title, url, description })} /><JsonLd data={webAppSchema} /><ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<DandysWorldOcMakerTool />} related={<RelatedTools currentSlug={toolData.slug} />}>{createWriteUp()}<div className="mt-10 space-y-3"><h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2><p className="text-slate-700">Common questions about creating an original Dandy's World Toon.</p></div><FAQSection items={pageFaqs} /><FaqJsonLd faqs={pageFaqs} /></ToolPageShell></>;
}

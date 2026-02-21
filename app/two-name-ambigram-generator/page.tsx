import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import FaqJsonLd from '@/components/FaqJsonLd';
import type { FaqItem } from '@/components/faqData';
import { RelatedTools } from '@/components/tool/RelatedTools';
import { ToolPageShell } from '@/components/tool/ToolPageShell';
import { TwoNameAmbigramGeneratorTool } from '@/components/tools/TwoNameAmbigramGeneratorTool';
import { buildToolMeta } from '@/lib/seo-meta';
import { siteUrl } from '@/lib/schema/site';
import { webPageSchema } from '@/lib/schema/webpage';
import { getToolBySlug } from '@/lib/tools/registry';

const toolSlug = 'two-name-ambigram-generator';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Two Name Ambigram Generator';
  const description = 'Create ambigram designs that read as two different names when rotated or viewed from different angles.';
  const seoTitle = 'Ambigram Tattoo Generator - Two Name Ambigram Creator';
  return buildToolMeta({ title, description, seoTitle, urlPath: `/${toolSlug}` });
}

function createWriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Two Name Ambigram Generator: Ambigram Tattoo Creator</h2>
        <p>A two-name ambigram generator is an online tool that helps you create ambigrams that read as one name when viewed normally and as another name when rotated (usually 180 degrees) or viewed from a different angle. Ambigrams are popular for tattoos, logos, and gifts—for example, a couple's two names in one design, or a name that reads the same upside down. You enter two names (or one name for a self-reading ambigram), and the tool suggests or generates a design concept, or connects you to ambigram design options.</p>
        <p>This free two-name ambigram generator runs in your browser. You enter your two names, run the tool, and get ambigram ideas or design instructions. Creating a true ambigram that reads clearly as two different names usually requires custom typography or design; the generator helps you explore the concept and prepare for a tattoo artist or designer. In this guide we explain what an ambigram is, how to use a two-name ambigram generator, when to use it for tattoos and gifts, and what to expect from ambigram generation.</p>

        <h2>What Is an Ambigram?</h2>
        <p>An ambigram is lettering that reads as one or more words when viewed from different orientations—typically right-side up and upside down (180° rotation). A two-name ambigram reads as one name in one orientation and as a second name when rotated. For example, a design might read "John" one way and "Jane" the other. Ambigrams require careful letter design so that the same shapes work for both readings. They are used in tattoos, logos, book covers, and art.</p>

        <h2>How to Use a Two-Name Ambigram Generator</h2>
        <p>Open the two-name ambigram generator and enter your two names (e.g., first name and partner name, or two words you want combined). Click Generate or Create. The tool may return design concepts, font-style suggestions, or instructions for working with an ambigram designer. Copy or save the result. For a real tattoo or logo, take the concept to a skilled ambigram or tattoo artist who can refine the design.</p>

        <h2>When to Use a Two-Name Ambigram</h2>
        <p>Use a two-name ambigram generator when you want one design that shows two names—for couple tattoos, friendship tattoos, or personalized gifts. It is ideal for wedding or anniversary ideas, matching tattoos, and unique logos. The generator gives you a starting point; a professional can turn it into a clean, readable ambigram for tattooing or print.</p>

        <h2>Ambigram Tattoos: What to Know</h2>
        <p>Ambigram tattoos are popular but require a designer or tattoo artist who understands ambigram lettering. Not every name pair works equally well—similar letter shapes (e.g., E and W when rotated) make design easier. The generator can suggest whether your names are feasible and what style might work. Always review a final design with your artist before inking.</p>

        <h2>Limitations</h2>
        <p>Automatic ambigram generation is limited: true two-name ambigrams often need custom design. The generator may output concepts, examples, or instructions rather than a finished graphic. For tattoos and professional use, plan to work with an ambigram designer or experienced tattoo artist to get a clear, readable result.</p>

        <h2>Privacy</h2>
        <p>Many ambigram generators run in the browser and do not send your names to a server. Check the tool. This tool is designed to process locally when possible.</p>

        <h2>Conclusion</h2>
        <p>Use a two-name ambigram generator to explore ambigram ideas for two names—for tattoos, gifts, or logos. This free two-name ambigram generator lets you enter names and get concepts or design guidance. For a final tattoo or logo, work with an ambigram or tattoo professional to create a design that reads clearly in both orientations.</p>
      </div>
    </section>
  );
}

export default async function TwoNameAmbigramGeneratorPage() {
  const toolData = getToolBySlug(toolSlug);
  if (!toolData) return notFound();

  const title = toolData.title;
  const description = toolData.shortDescription;
  const url = `${siteUrl}/${toolSlug}/`;

  const pageFaqs: FaqItem[] = [
    { category: 'General', question: 'What is a two-name ambigram generator?', answer: 'A two-name ambigram generator helps you create or explore ambigrams that read as one name in one orientation and as a second name when rotated (e.g., 180°). You enter two names and get design concepts or instructions for tattoos, logos, or gifts.' },
    { category: 'General', question: 'Is the two-name ambigram generator free?', answer: 'Yes. This two-name ambigram generator is free to use. You enter two names and get ambigram ideas or design guidance. Many tools run in the browser. Final custom designs from artists may be paid.' },
    { category: 'Usage', question: 'How do I use the two-name ambigram generator?', answer: 'Enter your two names (e.g., your name and a partner\'s name) and click Generate or Create. Review the concepts or instructions. For a tattoo or logo, take the idea to an ambigram or tattoo artist for a finished design.' },
    { category: 'Technical', question: 'What is an ambigram?', answer: 'An ambigram is lettering that reads as one or more words when viewed from different orientations—often right-side up and upside down. A two-name ambigram reads as one name one way and a second name when rotated.' },
    { category: 'Use cases', question: 'When would I use a two-name ambigram?', answer: 'Use it for couple or friendship tattoos, wedding or anniversary gifts, matching tattoos, or unique logos. One design shows both names depending on how you look at it.' },
    { category: 'Use cases', question: 'Can I use this for an ambigram tattoo?', answer: 'Yes. The generator gives you a starting point. For a real tattoo, work with a tattoo artist who can create or refine an ambigram so it reads clearly in both orientations.' },
    { category: 'General', question: 'Do both names read clearly?', answer: 'In a good two-name ambigram, both names are readable—one in the normal view and one when rotated. Not every name pair is easy to design; the generator can suggest feasibility.' },
    { category: 'Technical', question: 'How does rotation work?', answer: 'Typically the ambigram is designed so that when you rotate it 180 degrees, the same shapes form the second name. Letterforms are crafted to work both ways.' },
    { category: 'Privacy', question: 'Is my input sent to a server?', answer: 'Many ambigram generators run in the browser and do not send your names to a server. Check the tool. This tool is designed to process locally when possible.' },
    { category: 'Limits', question: 'Do my names have to be the same length?', answer: 'No, but similar length can make design easier. Skilled designers can create two-name ambigrams for names of different lengths using spacing and letter choices.' },
    { category: 'Compatibility', question: 'Does it work on mobile?', answer: 'Yes. Browser-based ambigram generators work on phones and tablets. You can enter names and get ideas on the go.' },
    { category: 'General', question: 'Do I need to install anything?', answer: 'No. Online two-name ambigram generators run in your browser. No download or install required.' },
    { category: 'Use cases', question: 'Can I get a printable or image file?', answer: 'It depends on the tool. Some generators output concepts or text instructions; others may offer a simple image. For high-quality print or tattoo, use a professional designer.' },
    { category: 'Formatting', question: 'What styles of ambigram are there?', answer: 'Ambigrams can be typographic, script, or illustrated. Rotation (180°) is most common; some ambigrams read differently in mirror image. The generator may suggest styles that suit your names.' },
    { category: 'Privacy', question: 'Do you store my names?', answer: 'When the tool runs locally, your names are not stored on our servers. Check the tool and privacy policy.' },
    { category: 'General', question: 'What is an ambigram tattoo?', answer: 'An ambigram tattoo is a tattoo that uses ambigram lettering—readable as one or more words when viewed from different angles. Two-name ambigram tattoos often show two people\'s names in one design.' },
    { category: 'Workflow', question: 'Can I share the design with my tattoo artist?', answer: 'Yes. Use the generator output as a concept to share with your artist. They can create a custom, clean design suitable for tattooing.' },
    { category: 'Technical', question: 'Why are some name pairs harder?', answer: 'Letters that look similar when rotated (e.g., N and Z, E and W) can be reused in both names, making design easier. Very different letter sets may require more creative design.' },
    { category: 'Use cases', question: 'Is this good for wedding gifts?', answer: 'Yes. Two-name ambigrams are popular for couples—wedding gifts, anniversary art, or couple tattoos. The generator helps you explore the idea before commissioning a final design.' },
    { category: 'General', question: 'Can I do a one-name ambigram (same name upside down)?', answer: 'Yes. Some tools support a single name that reads the same when rotated (self-ambigram). Enter the same name twice or choose "self-reading" if the tool offers it.' },
    { category: 'Limits', question: 'Does the generator create a finished image?', answer: 'It depends on the tool. Some output concepts or text; others may produce a simple graphic. For tattoo or professional use, a custom design from an artist is usually needed.' },
    { category: 'Use cases', question: 'Who uses a two-name ambigram generator?', answer: 'Couples, friends, and anyone wanting a shared tattoo or personalized gift. Designers and tattoo artists also use generators for ideas before creating custom ambigrams.' },
    { category: 'General', question: 'What is the difference between ambigram and palindrome?', answer: 'A palindrome reads the same forward and backward (e.g., "noon"). An ambigram reads as one or more words when rotated or viewed from another angle. They are different concepts.' },
    { category: 'Use cases', question: 'Can I use the ambigram for a logo?', answer: 'Yes. Two-name ambigrams can be used for logos (e.g., brand and tagline, or two partners\' names). Have a designer refine the concept for clear, professional use.' },
  ];

  return (
    <>
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <ToolPageShell tool={{ ...toolData, title, shortDescription: description }} ui={<TwoNameAmbigramGeneratorTool />} related={<RelatedTools currentSlug={toolData.slug} />}>
        {createWriteUp()}
        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-slate-700">Common questions and answers about the Two Name Ambigram Generator and ambigram tattoos.</p>
        </div>
        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </ToolPageShell>
    </>
  );
}

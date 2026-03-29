import Link from 'next/link';
import dynamic from 'next/dynamic';
import FaqJsonLd from '../components/FaqJsonLd';
import { faqItems } from '../components/faqData';
import ToolWorkbench from '../components/ToolWorkbench';
import { buildMeta } from '@/lib/seo-meta';
import { JsonLd } from '../components/JsonLd';
import { webPageSchema } from '../lib/schema/webpage';
import { siteUrl } from '@/lib/seo/url';
import BelowToolAd from '../components/ads/BelowToolAd';
import RailAd from '../components/ads/RailAd';

const RelatedTools = dynamic(
  () => import('../components/tool/RelatedTools').then((m) => m.RelatedTools),
  { ssr: true }
);

const FAQSection = dynamic(() => import('../components/FAQSection'), { ssr: true });

const HomePageArticle = dynamic(() => import('../components/HomePageArticle'), { ssr: true });

export async function generateMetadata() {
  return buildMeta({
    title: 'ChatGPT Text Cleaner - Remove Hidden Characters & Fix AI Spacing | GPTCLEANUP AI',
    description: 'Clean and normalize AI output: remove hidden Unicode (ZWSP, NBSP, BOM), fix spacing, and keep paragraphs intact for Word, Docs, and SEO-friendly publishing.',
    urlPath: '/',
  });
}

// Cache at edge for 24h to reduce Fast Origin Transfer
export const revalidate = 86400;

export default async function HomePage() {

  return (
    <div className="relative bg-[#f7f9ff]">
      <JsonLd
        data={webPageSchema({
          name: 'ChatGPT Text Cleaner',
          url: siteUrl,
          description: 'Clean and normalize AI output: remove hidden Unicode (ZWSP, NBSP, BOM), fix spacing, and keep paragraphs intact for Word, Docs, and SEO-friendly publishing.',
        })}
      />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-4xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">ChatGPT Text Cleaner</h1>
          <p className="max-w-2xl mx-auto text-xs text-slate-700 sm:text-sm md:text-[15px]">
            Clean and normalize AI output: remove hidden Unicode (ZWSP, NBSP, BOM), fix spacing, and keep paragraphs intact for Word, Docs, and SEO-friendly publishing.
          </p>
        </section>

        <section className="relative w-full mt-4 md:mt-6">
          <div className="w-full max-w-none rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:rounded-2xl md:p-6">
            <ToolWorkbench
              processor="chatgptTextCleaner"
              primaryLabel="Clean Text"
              inputLabel="Paste your messy AI text"
              outputLabel="Clean result"
              inputPlaceholder="Paste text from ChatGPT, Gemini, Claude..."
              outputPlaceholder="Your cleaned text will appear here."
            />
          </div>
        </section>

        <BelowToolAd />

        <div id="tools">
          <RelatedTools currentSlug="" showModeTools={false} />
        </div>

        <HomePageArticle />

        <FAQSection items={faqItems} />

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
          <h2 className="text-xl font-semibold text-slate-900">Learn more</h2>
          <p className="mt-2 text-sm text-slate-700">
            Read our guides on keeping AI text tidy:{' '}
            <Link href="/blog/why-chatgpt-text-looks-messy-and-how-to-fix-it" className="font-semibold">
              Why ChatGPT text looks messy
            </Link>{' '}
            and{' '}
            <Link href="/blog/chatgpt-formatting-fixer-for-word-and-docs" className="font-semibold">
              ChatGPT formatting fixer for Word & Docs
            </Link>
            . Also try the{' '}
            <Link href="/grok-watermark-detector" className="font-semibold">
              Grok Watermark Detector
            </Link>
            .
          </p>
        </section>
        <FaqJsonLd faqs={faqItems} />
      </div>
    </div>
  );
}

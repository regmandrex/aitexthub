'use client';

import type { ReactNode } from 'react';
import FAQSection from '../FAQSection';
import FaqJsonLd from '../FaqJsonLd';
import type { FaqItem } from '../faqData';
import { WatermarkDetectorTool } from '@/components/tools/WatermarkDetectorTool';
import { JsonLd } from '../JsonLd';
import { webPageSchema } from '../../lib/schema/webpage';
import { siteUrl } from '@/lib/seo/url';
import { RelatedTools } from '../tool/RelatedTools';
import AdSenseSlot from '../ads/AdSenseSlot';
import BelowToolAd from '../ads/BelowToolAd';
import ProFunnelBanner from '../ProFunnelBanner';

type Props = {
  modelName: string;
  modelSlug: string;
  faqItems: FaqItem[];
  content?: ReactNode;
  faqIntro?: string;
};

function RailAd({ side }: { side: 'left' | 'right' }) {
  const sideClass = side === 'left' ? 'left-4' : 'right-4';

  return (
    <div className={`hidden lg:block fixed top-[220px] ${sideClass} z-20`}>
      <div className="w-[180px] min-h-[260px]">
        <AdSenseSlot className="w-full" />
      </div>
    </div>
  );
}

export default function WatermarkDetectorPage({ modelName, modelSlug, faqItems, content, faqIntro }: Props) {
  const url = `${siteUrl}/${modelSlug}-watermark-detector`;
  const title = `${modelName} Watermark Detector`;
  const subtitle = 'Scan text for formatting artifacts like hidden Unicode characters, whitespace patterns, and repeated punctuation marks.';
  const description = `Inspect ${modelName} text for possible formatting artifacts, hidden Unicode, and whitespace patterns.`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  return (
    <div className="relative bg-[#f7f9ff]">
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-4xl px-4 py-5 min-h-screen sm:py-8 md:py-10">
        <section className="space-y-2 text-center md:space-y-3">
          <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">{title}</h1>
          <div className="space-y-2">
            <p className="max-w-2xl mx-auto text-xs text-slate-700 sm:text-sm md:text-[15px]">
              {subtitle}
            </p>
            <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
              <span className="text-yellow-500">★★★★★</span>
              <span>4.9</span>
              <span>·</span>
              <span>Free</span>
            </div>
          </div>
        </section>

        <div className="mt-4 -mx-4 md:mx-0">
          <ProFunnelBanner />
        </div>

        <section className="relative w-full mt-4 md:mt-6">
          <div className="w-full max-w-none rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:rounded-2xl md:p-6">
            <WatermarkDetectorTool modelName={modelName} />
          </div>
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug={`${modelSlug}-watermark-detector`} showModeTools={false} />

        {content ? (
          content
        ) : (
          <section className="space-y-6 mt-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Scans for hidden Unicode (e.g. zero-width spaces, non-breaking spaces).</li>
                <li>Highlights irregular spacing and repeated punctuation.</li>
                <li>Reports structural patterns; does not determine authorship.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">What it can / can&apos;t do</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Can highlight formatting artifacts and hidden characters.</li>
                <li>Cannot confirm authorship or AI origin.</li>
                <li>Not a bypass tool; for analysis and cleanup only.</li>
                <li>Review output and use responsibly.</li>
              </ul>
            </div>
          </section>
        )}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{modelName} Watermark Detector – FAQ</h2>
          <p className="text-slate-700">
            {faqIntro ?? 'Common questions about watermark detection and text analysis.'}
          </p>
        </div>

        <FAQSection items={faqItems} />
        <FaqJsonLd faqs={faqItems} />
      </div>
    </div>
  );
}

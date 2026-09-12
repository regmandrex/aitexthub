'use client';

import type { ReactNode } from 'react';
import FAQSection from '../FAQSection';
import FaqJsonLd from '../FaqJsonLd';
import type { FaqItem } from '../faqData';
import { SpaceRemoverTool } from './SpaceRemoverTool';
import { JsonLd } from '../JsonLd';
import { webPageSchema } from '../../lib/schema/webpage';
import { siteUrl } from '@/lib/seo/url';
import { RelatedTools } from '../tool/RelatedTools';
import AdSenseSlot from '../ads/AdSenseSlot';
import BelowToolAd from '../ads/BelowToolAd';

type Props = {
  modelName: string;
  modelSlug: string;
  faqItems: FaqItem[];
  content?: ReactNode;
};

function RailAd(_props: { side: 'left' | 'right' }) {
  return null;
}


export default function SpaceRemoverPage({ modelName, modelSlug, faqItems, content }: Props) {
  const url = `${siteUrl}/${modelSlug}-space-remover`;
  const title = `${modelName} Space Remover`;
  const subtitle = 'Remove extra spaces and tidy lines for clean, paste-ready text.';
  const description = `Tighten whitespace, trim messy spacing, and make ${modelName} text easier to paste into docs and CMS editors.`;
  const webAppSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: title, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', description: description, url, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1840', bestRating: '5', worstRating: '1' } };

  return (
    <div className="relative bg-[#f7f9ff]">
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <JsonLd data={webAppSchema} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-4xl px-4 py-10 min-h-screen">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h1>
          <div className="space-y-2">
            <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
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

        <section className="relative w-full mt-6">
          <div className="w-full max-w-none rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <SpaceRemoverTool modelName={modelName} />
          </div>
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug={`${modelSlug}-space-remover`} showModeTools={false} />

        {content ? (
          content
        ) : (
          <section className="space-y-6 mt-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Collapses repeated spaces while keeping your line breaks intact.</li>
                <li>Trims leading and trailing line whitespace for cleaner paragraphs.</li>
                <li>Normalizes tabs and line endings for consistent formatting across tools.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">What it can / can&apos;t do</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Can reduce formatting glitches caused by inconsistent spacing.</li>
                <li>Can&apos;t verify authorship, provenance, or model identity.</li>
                <li>Not a bypass tool; it only adjusts spacing and formatting.</li>
                <li>Not a guarantee; use responsibly and review the output before publishing.</li>
              </ul>
            </div>
          </section>
        )}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{modelName} Space Remover – Frequently Asked Questions</h2>
          <p className="text-slate-700">
            This FAQ covers common spacing issues, what the tool changes, and what it does not. Review the cleaned output to confirm spacing and formatting match your intended use.
          </p>
        </div>

        <FAQSection items={faqItems} />
        <FaqJsonLd faqs={faqItems} />
      </div>
    </div>
  );
}

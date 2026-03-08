'use client';

import { Children, type ReactNode } from 'react';
import FAQSection from '../FAQSection';
import FaqJsonLd from '../FaqJsonLd';
import type { FaqItem } from '../faqData';
import { LineSpacingTool } from './LineSpacingTool';
import { JsonLd } from '../JsonLd';
import { webPageSchema } from '../../lib/schema/webpage';
import { cleanUrl } from '@/lib/seo/url';
import { RelatedTools } from '../tool/RelatedTools';
import AdSenseSlot from '../ads/AdSenseSlot';
import BelowToolAd from '../ads/BelowToolAd';

type Props = {
  modelName: string;
  modelSlug: string;
  faqItems: FaqItem[];
  content?: ReactNode;
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

export default function LineSpacingPage({ modelName, modelSlug, faqItems, content }: Props) {
  const url = cleanUrl(`${modelSlug}-line-spacing`);
  const title = `${modelName} Line Spacing`;
  const subtitle = 'Adjust line spacing in text for better readability and formatting.';
  const description = `Adjust line spacing in ${modelName} text to single, 1.5, double, or custom spacing for better readability and formatting.`;
  const normalizedContent = content ? Children.toArray(content) : null;

  return (
    <div className="relative bg-[#f7f9ff]">
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-4xl px-4 py-10 min-h-screen">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h1>
          <div className="space-y-2">
            <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
              {subtitle}
            </p>
          </div>
        </section>

        <section className="relative w-full mt-6">
          <div className="w-full max-w-none rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <LineSpacingTool modelName={modelName} />
          </div>
        </section>

        <BelowToolAd />

        <RelatedTools currentSlug={`${modelSlug}-line-spacing`} showModeTools={false} />

        {normalizedContent ? (
          normalizedContent
        ) : (
          <section className="space-y-6 mt-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Choose single, 1.5, double, or custom line spacing.</li>
                <li>Paste text and get consistently spaced output.</li>
                <li>Use for readability and formatting in docs or CMS.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">What it can / can&apos;t do</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Can normalize line spacing for cleaner layout.</li>
                <li>Can&apos;t verify authorship or AI origin.</li>
                <li>Not a bypass tool; formatting only.</li>
                <li>Review output before publishing.</li>
              </ul>
            </div>
          </section>
        )}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{modelName} Line Spacing – FAQ</h2>
          <p className="text-slate-700">
            Common questions about line spacing and formatting.
          </p>
        </div>

        <FAQSection items={faqItems} />
        <FaqJsonLd faqs={faqItems} />
      </div>
    </div>
  );
}


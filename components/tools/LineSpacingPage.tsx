'use client';

import { Children, type ReactNode } from 'react';
import FAQSection from '../FAQSection';
import FaqJsonLd from '../FaqJsonLd';
import type { FaqItem } from '../faqData';
import { LineSpacingTool } from './LineSpacingTool';
import { JsonLd } from '../JsonLd';
import { webPageSchema } from '../../lib/schema/webpage';
import { siteUrl } from '../../lib/schema/site';
import { RelatedTools } from '../tool/RelatedTools';
import AdSenseSlot from '../ads/AdSenseSlot';
import BelowToolAd from '../ads/BelowToolAd';
import { useI18n } from '../../lib/client-i18n';

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
  const { t } = useI18n();
  const url = `${siteUrl}/${modelSlug}-line-spacing/`;
  const title = t('LineSpacingPage.title', { modelName });
  const description = `Adjust line spacing in ${modelName} text to single, 1.5, double, or custom spacing for better readability and formatting.`;
  const normalizedContent = content ? Children.toArray(content) : null;

  return (
    <div className="relative min-h-screen bg-[#f7f9ff]">
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h1>
          <div className="space-y-2">
            <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
              {t('LineSpacingPage.subtitle')}
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
              <h2 className="text-xl font-semibold text-slate-900">{t('LineSpacingPage.howItWorks')}</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>{t('LineSpacingPage.howItWorks1')}</li>
                <li>{t('LineSpacingPage.howItWorks2')}</li>
                <li>{t('LineSpacingPage.howItWorks3')}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">{t('LineSpacingPage.whatCanCant')}</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>{t('LineSpacingPage.whatCanCant1')}</li>
                <li>{t('LineSpacingPage.whatCanCant2')}</li>
                <li>{t('LineSpacingPage.whatCanCant3')}</li>
                <li>{t('LineSpacingPage.whatCanCant4')}</li>
              </ul>
            </div>
          </section>
        )}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('LineSpacingPage.faqHeading', { modelName })}</h2>
          <p className="text-slate-700">
            {t('LineSpacingPage.faqIntro')}
          </p>
        </div>

        <FAQSection items={faqItems} />
        <FaqJsonLd faqs={faqItems} />
      </div>
    </div>
  );
}


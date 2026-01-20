'use client';

import type { ReactNode } from 'react';
import FAQSection from '../FAQSection';
import FaqJsonLd from '../FaqJsonLd';
import type { FaqItem } from '../faqData';
import { SpaceRemoverTool } from './SpaceRemoverTool';
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

export default function SpaceRemoverPage({ modelName, modelSlug, faqItems, content }: Props) {
  const { t } = useI18n();
  const url = `${siteUrl}/${modelSlug}-space-remover/`;
  const title = t('SpaceRemoverPage.title', { modelName });
  const description = `Tighten whitespace, trim messy spacing, and make ${modelName} text easier to paste into docs and CMS editors.`;

  return (
    <div className="relative min-h-screen bg-[#f7f9ff]">
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h1>
          <div className="space-y-2">
            <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
              {t('SpaceRemoverPage.subtitle')}
            </p>
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
              <h2 className="text-xl font-semibold text-slate-900">{t('SpaceRemoverPage.howItWorks')}</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>{t('SpaceRemoverPage.howItWorks1')}</li>
                <li>{t('SpaceRemoverPage.howItWorks2')}</li>
                <li>{t('SpaceRemoverPage.howItWorks3')}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">{t('SpaceRemoverPage.whatCanCant')}</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>{t('SpaceRemoverPage.whatCanCant1')}</li>
                <li>{t('SpaceRemoverPage.whatCanCant2')}</li>
                <li>{t('SpaceRemoverPage.whatCanCant3')}</li>
                <li>{t('SpaceRemoverPage.whatCanCant4')}</li>
              </ul>
            </div>
          </section>
        )}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{t('SpaceRemoverPage.faqHeading', { modelName })}</h2>
          <p className="text-slate-700">
            {t('SpaceRemoverPage.faqIntro')}
          </p>
        </div>

        <FAQSection items={faqItems} translationPrefix="FAQ.spaceRemover" />
        <FaqJsonLd faqs={faqItems} />
      </div>
    </div>
  );
}

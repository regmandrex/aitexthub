import type { ReactNode } from 'react';
import FAQSection from '../FAQSection';
import FaqJsonLd from '../FaqJsonLd';
import type { FaqItem } from '../faqData';
import { WatermarkDetectorTool } from '@/components/tools/WatermarkDetectorTool';
import { JsonLd } from '../JsonLd';
import { webPageSchema } from '../../lib/schema/webpage';
import { siteUrl } from '../../lib/schema/site';
import { RelatedTools } from '../tool/RelatedTools';
import AdSenseSlot from '../ads/AdSenseSlot';

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
    <div className={`hidden xl:block fixed top-[220px] ${sideClass} z-20`}>
      <div className="w-[180px] min-h-[260px]">
        <AdSenseSlot className="w-full" />
      </div>
    </div>
  );
}

function TopBannerAd() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4">
      <div className="mt-4 mb-6">
        <div className="w-full overflow-hidden">
          <AdSenseSlot className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default function WatermarkDetectorPage({ modelName, modelSlug, faqItems, content, faqIntro }: Props) {
  const url = `${siteUrl}/${modelSlug}-watermark-detector/`;
  const title = `${modelName} Watermark Detector`;
  const description = `Inspect ${modelName} text for possible formatting artifacts, hidden Unicode, and whitespace patterns.`;

  return (
    <div className="relative min-h-screen bg-[#f7f9ff]">
      <JsonLd data={webPageSchema({ name: title, url, description })} />
      <RailAd side="left" />
      <RailAd side="right" />
      <TopBannerAd />

      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h1>
          <div className="space-y-2">
            <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
              Scan text for formatting artifacts like hidden Unicode characters, whitespace patterns, and repeated punctuation marks.
            </p>
          </div>
        </section>

        <section className="relative w-full mt-6">
          <div className="w-full max-w-none rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <WatermarkDetectorTool modelName={modelName} />
          </div>
        </section>

        <RelatedTools currentSlug={`${modelSlug}-watermark-detector`} showModeTools={false} />

        {content ? (
          content
        ) : (
          <section className="space-y-6 mt-10">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Scans for hidden or invisible Unicode, including zero-width characters, BOM, NBSP, and soft hyphens.</li>
                <li>Checks for whitespace structure issues like excess spacing or mixed tabs/spaces.</li>
                <li>Flags repeated punctuation patterns that can indicate formatting artifacts.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">What it can / can&apos;t do</h2>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Can highlight possible artifacts so you can clean formatting and improve consistency.</li>
                <li>Can&apos;t confirm authorship or detect proprietary watermarks with certainty.</li>
                <li>Not a bypass tool; it only reports informational signals.</li>
                <li>Not a guarantee; use responsibly and follow relevant policies.</li>
              </ul>
            </div>
          </section>
        )}

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">{modelName} Watermark Detector - Frequently Asked Questions</h2>
          <p className="text-slate-700">
            {faqIntro ??
              'These answers explain what the scan checks and how to interpret results. The detector reports possible formatting artifacts, not proof.'}
          </p>
        </div>

        <FAQSection items={faqItems} />
        <FaqJsonLd faqs={faqItems} />
      </div>
    </div>
  );
}

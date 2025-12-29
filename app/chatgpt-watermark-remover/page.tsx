import FAQSection from "../../components/FAQSection";
import FaqJsonLd from "../../components/FaqJsonLd";
import type { FaqItem } from "../../components/faqData";
import ToolWorkbench from "../../components/ToolWorkbench";
import { buildMeta } from '@/lib/seo-meta';
import { JsonLd } from "../../components/JsonLd";
import { webPageSchema } from "../../lib/schema/webpage";
import { siteUrl } from "../../lib/schema/site";
import { RelatedTools } from "../../components/tool/RelatedTools";
import AdSenseSlot from "../../components/ads/AdSenseSlot";

function RailAd({ side }: { side: 'left' | 'right' }) {
  const sideClass = side === 'left' ? 'left-4' : 'right-4';

  return (
    <div className={`hidden xl:block fixed top-[220px] ${sideClass} z-20`}>
      <div className="w-[180px] min-h-[260px] border border-dashed border-[#d7d7d7] rounded-lg p-4 text-center text-sm text-[#666] flex items-center justify-center bg-[#f7f9ff]">
        <AdSenseSlot className="w-full" />
      </div>
    </div>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What does the ChatGPT Watermark Remover do?',
    answer:
      'It removes invisible Unicode (ZWSP, NBSP, BOM) and spacing artifacts that can appear in ChatGPT AI text so your copy pastes cleanly into docs, CMS, and forms.',
  },
  {
    category: 'Usage',
    question: 'Does this change the meaning of my text?',
    answer:
      'No. The cleaner focuses on technical cleanup only: normalizing punctuation, spacing, and hidden characters while keeping your wording intact.',
  },
  {
    category: 'Privacy',
    question: 'Is my text sent to a server?',
    answer:
      'Processing runs in your browser. Content stays on your device, and no text is uploaded.',
  },
];

export const metadata = buildMeta({
  title: 'ChatGPT Watermark Remover - Remove Hidden Characters from ChatGPT AI Text',
  description:
    'Remove hidden characters and watermarks from ChatGPT output. Strip zero-width/NBSP Unicode, fix spacing, and prepare clean text for Word, Docs, and CMS.',
  urlPath: '/chatgpt-watermark-remover',
});

const pageFaqs = faqs.map((item) => ({
  ...item,
  question: item.question.replace('ChatGPT', 'ChatGPT'),
  answer: item.answer.replace(/ChatGPT/g, 'ChatGPT'),
}));

export default function ChatGPTWatermarkCleanerPage() {
  return (
    <div className="relative min-h-screen bg-[#f7f9ff]">
      <JsonLd
        data={webPageSchema({
          name: 'ChatGPT Watermark Remover',
          url: `${siteUrl}/chatgpt-watermark-remover/`,
          description:
            'Remove hidden characters and watermarks from ChatGPT output. Strip zero-width/NBSP Unicode, fix spacing, and prepare clean text for Word, Docs, and CMS.',
        })}
      />
      <RailAd side="left" />
      <RailAd side="right" />

      <div className="mx-auto w-full max-w-[1400px] px-4">
        <div className="mt-4 mb-6">
          <div className="w-full overflow-hidden rounded-xl border border-dashed border-slate-300/70 bg-slate-50/40 px-4 py-6 text-center text-sm font-medium text-slate-500">
            <AdSenseSlot className="w-full" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <section className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">ChatGPT Watermark Remover</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-700 md:text-[15px]">
            Remove hidden characters and watermarks from ChatGPT outputs. Keep paragraphs intact and prepare clean, editor-safe text for Word,
            Docs, and SEO-friendly publishing.
          </p>
        </section>

        <section className="relative w-full mt-6">
          <div className="w-full max-w-none rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <ToolWorkbench
              processor="chatgptTextCleaner"
              primaryLabel="Clean Text"
              inputLabel="Paste your ChatGPT AI text"
              outputLabel="Clean result"
              inputPlaceholder="Paste text from ChatGPT..."
              outputPlaceholder="Your cleaned text will appear here."
            />
          </div>
        </section>

        <RelatedTools currentSlug="chatgpt-watermark-remover" />

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-4 mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">ChatGPT Watermark Remover for Text</h2>
          <p>
            Copy and paste can introduce invisible Unicode, odd line breaks, or formatting noise from ChatGPT. The ChatGPT Watermark Remover strips
            those artifacts so your text behaves like plain, predictable copy in docs, CMS, email, and forms.
          </p>
          <p>
            The cleaner focuses on technical hygiene: removing zero-width characters, normalizing whitespace, and keeping paragraphs intact. It
            does not rewrite your wording or alter meaning, so you can clean quickly without changing intent or tone.
          </p>
          <p>
            Everything runs in your browser. No uploads, no storage, just fast cleanup for reliable pasting.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 space-y-3 mt-10">
          <h3 className="text-xl font-semibold text-slate-900">How to clean ChatGPT text</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>Paste your ChatGPT output into the input box.</li>
            <li>Click Clean Text to remove hidden characters, normalize spacing, and keep paragraphs stable.</li>
            <li>Copy the result into Word, Docs, your CMS, or any form without layout surprises.</li>
          </ol>
        </section>

        <FAQSection items={pageFaqs} />
        <FaqJsonLd faqs={pageFaqs} />
      </div>
    </div>
  );
}

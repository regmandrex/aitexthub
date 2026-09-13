'use client';

import { faqItems as defaultFaqItems, type FaqItem } from './faqData';

const CATEGORY_LABELS: Record<string, string> = {
  'General': 'General',
  'Technical': 'Technical',
  'Usage': 'Usage',
  'Detection and Limits': 'Detection and Limits',
  'Compatibility and Formats': 'Compatibility and Formats',
  'Privacy and Security': 'Privacy and Security',
  'Advanced Workflow': 'Advanced Workflow',
  'Troubleshooting and Comparison': 'Troubleshooting and Comparison',
  'Additional Questions': 'Additional Questions',
};

type FAQSectionProps = {
  items?: FaqItem[];
  title?: string;
  intro?: string;
  showCategories?: boolean;
};

export default function FAQSection({ items, title, intro, showCategories = true }: FAQSectionProps) {
  const resolvedTitle = title ?? 'FAQ';
  const data = items ?? defaultFaqItems;

  // Use FAQ items as-is (already in English)
  const translatedItems = data.map((faq) => ({
    ...faq,
    category: CATEGORY_LABELS[faq.category] || faq.category,
  }));

  return (
    <div className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo md:p-6">
      <h2 className="text-xl font-semibold text-slate-900">{resolvedTitle}</h2>
      {intro ? <p className="mt-2 text-sm text-slate-700 whitespace-pre-line">{intro}</p> : null}
      <div className="mt-4 space-y-3">
        {translatedItems.map((faq, idx) => {
          const previousCategory = idx > 0 ? translatedItems[idx - 1]?.category : null;
          const shouldShowCategory = showCategories && faq.category !== previousCategory;
          const categoryHeading =
            shouldShowCategory ? (
              <h3 key={`${faq.category}-heading`} className="mt-3 text-sm font-semibold uppercase text-slate-600 first:mt-0">
                {faq.category}
              </h3>
            ) : null;
          return (
            <div key={`${faq.question}-${idx}`}>
              {categoryHeading}
              <details className="group rounded-xl border-2 border-black bg-slate-50 px-4 py-3 transition">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-800">
                  <span className="mr-2 text-brand-700">{idx + 1}.</span>
                  <span className="group-open:text-brand-700">{faq.question}</span>
                </summary>
                <p className="mt-2 whitespace-pre-line text-sm text-slate-700">{faq.answer}</p>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}

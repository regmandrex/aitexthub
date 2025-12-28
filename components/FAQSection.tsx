import { faqItems as defaultFaqItems, type FaqItem } from './faqData';

type FAQSectionProps = {
  items?: FaqItem[];
  title?: string;
  intro?: string;
  showCategories?: boolean;
};

export default function FAQSection({ items, title = 'FAQ', intro, showCategories = true }: FAQSectionProps) {
  const data = items ?? defaultFaqItems;
  let lastCategory: string | null = null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      {intro ? <p className="mt-2 text-sm text-slate-700 whitespace-pre-line">{intro}</p> : null}
      <div className="mt-4 space-y-3">
        {data.map((faq, idx) => {
          const shouldShowCategory = showCategories && faq.category !== lastCategory;
          const categoryHeading =
            shouldShowCategory ? (
              <h3 key={`${faq.category}-heading`} className="mt-3 text-sm font-semibold uppercase text-slate-600 first:mt-0">
                {faq.category}
              </h3>
            ) : null;
          if (showCategories) {
            lastCategory = faq.category;
          }
          return (
            <div key={faq.question}>
              {categoryHeading}
              <details className="group rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-brand-200">
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

'use client';

import { faqItems as defaultFaqItems, type FaqItem } from './faqData';
import { useI18n } from '../lib/client-i18n';

type FAQSectionProps = {
  items?: FaqItem[];
  title?: string;
  intro?: string;
  showCategories?: boolean;
  translationPrefix?: string; // e.g., "FAQ.home" or "FAQ.spaceRemover"
};

export default function FAQSection({ items, title, intro, showCategories = true, translationPrefix }: FAQSectionProps) {
  const { t } = useI18n();
  const defaultTitle = t('FAQ.title') === 'FAQ.title' ? 'FAQ' : t('FAQ.title');
  const resolvedTitle = title ?? defaultTitle;
  const data = items ?? defaultFaqItems;

  // Translate FAQ items
  const translatedItems = data.map((faq, idx) => {
    // Use translation prefix from prop or FAQ item
    const prefix = translationPrefix || faq.translationKey || 'FAQ';
    
    // Try to translate using the prefix
    const questionKey = `${prefix}.items.${idx}.question`;
    const answerKey = `${prefix}.items.${idx}.answer`;
    const translatedQuestion = t(questionKey);
    const translatedAnswer = t(answerKey);
    
    // If translation not found, try category-based keys
    const categoryQuestionKey = `FAQ.${faq.category}.${idx}.question`;
    const categoryAnswerKey = `FAQ.${faq.category}.${idx}.answer`;
    const categoryTranslatedQuestion = t(categoryQuestionKey);
    const categoryTranslatedAnswer = t(categoryAnswerKey);
    
    return {
      ...faq,
      question: translatedQuestion !== questionKey 
        ? translatedQuestion 
        : (categoryTranslatedQuestion !== categoryQuestionKey ? categoryTranslatedQuestion : faq.question),
      answer: translatedAnswer !== answerKey 
        ? translatedAnswer 
        : (categoryTranslatedAnswer !== categoryAnswerKey ? categoryTranslatedAnswer : faq.answer),
      category: t(`FAQ.categories.${faq.category}`) !== `FAQ.categories.${faq.category}` 
        ? t(`FAQ.categories.${faq.category}`) 
        : faq.category,
    };
  });

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
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

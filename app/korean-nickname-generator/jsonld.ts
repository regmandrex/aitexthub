import type { FaqItem } from '@/components/faqData';

export function buildFaqJsonLd(items: FaqItem[], name = 'Frequently Asked Questions') {
  const valid = items.filter((item) => item?.question?.trim() && item?.answer?.trim());
  if (valid.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name,
    mainEntity: valid.map((item) => ({
      '@type': 'Question',
      name: item.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.trim(),
      },
    })),
  };
}

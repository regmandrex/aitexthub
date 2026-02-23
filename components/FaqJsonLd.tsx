import type { FaqItem } from './faqData';

type Props = {
  faqs: FaqItem[];
  /** Optional name for the FAQ page (e.g. page title). Defaults to "Frequently Asked Questions". */
  name?: string;
};

export default function FaqJsonLd({ faqs, name = 'Frequently Asked Questions' }: Props) {
  const validFaqs = faqs.filter((item) => item?.question?.trim() && item?.answer?.trim());
  if (validFaqs.length === 0) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name,
    mainEntity: validFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.trim(),
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

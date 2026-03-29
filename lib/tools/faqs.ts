import type { FaqItem } from '../../components/faqData';

export function buildSpaceRemoverFaq(modelName: string): FaqItem[] {
  return [
    {
      category: 'General',
      question: `What does the ${modelName} Space Remover do?`,
      answer: `It cleans ${modelName} text by collapsing extra spaces, optionally removing all spaces, trimming lines, and normalizing tabs/newlines. Meaning stays the same; only formatting is adjusted.`,
    },
    {
      category: 'General',
      question: 'Does it change my wording or meaning?',
      answer: 'No. It only alters whitespace. It does not rewrite sentences or change your intent.',
    },
    {
      category: 'Usage',
      question: 'What does normalize whitespace do?',
      answer: 'It converts tabs to spaces and standardizes line endings so text behaves consistently across editors and platforms.',
    },
    {
      category: 'Usage',
      question: 'When should I use remove-all-spaces mode?',
      answer: 'Use it for compact strings, identifiers, or data cleanup. For readable drafts, prefer collapsing extra spaces.',
    },
    {
      category: 'Limits',
      question: 'Will it remove paragraph breaks?',
      answer: 'No. Line breaks are preserved so your paragraphs stay intact.',
    },
    {
      category: 'Limits',
      question: 'Does it affect AI detection outcomes?',
      answer: 'It only adjusts spacing. Detection decisions involve many factors beyond whitespace, so results may vary.',
    },
    {
      category: 'Trust',
      question: 'Is my text stored?',
      answer: 'The tool runs client-side in your browser. Keep sensitive data safe and use responsibly.',
    },
  ];
}

export function buildDetectorFaq(modelName: string): FaqItem[] {
  return [
    {
      category: 'General',
      question: `What does the ${modelName} Watermark Detector check?`,
      answer: `It scans ${modelName} text for formatting artifacts like zero-width characters, NBSP, soft hyphens, repeated punctuation, and unusual whitespace. It reports possible signals, not certainties.`,
    },
    {
      category: 'General',
      question: 'Does it confirm AI authorship or watermarks?',
      answer: 'No. It only reports possible formatting artifacts. It does not prove origin or authorship.',
    },
    {
      category: 'Usage',
      question: 'What do the yes/no flags mean?',
      answer: 'They indicate whether hidden Unicode or whitespace patterns were found. They are hints for cleanup, not proof of AI authorship.',
    },
    {
      category: 'Usage',
      question: 'Can I fix issues the detector finds?',
      answer: 'Yes. Clean hidden characters and normalize spacing with a text cleanup tool, then recheck to confirm formatting changes.',
    },
    {
      category: 'Limits',
      question: 'Does it read metadata or connect to models?',
      answer: 'No. It works only on the pasted text and does not contact any model or platform.',
    },
    {
      category: 'Limits',
      question: 'Does it guarantee detection outcomes?',
      answer: 'No. Results are informational and may miss artifacts or flag benign formatting.',
    },
    {
      category: 'Trust',
      question: 'Is my text uploaded?',
      answer: 'Processing runs in your browser. Avoid sensitive data and follow your organization policies.',
    },
  ];
}

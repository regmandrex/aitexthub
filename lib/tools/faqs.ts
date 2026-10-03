import type { FaqItem } from '../../components/faqData';

export function buildSpaceRemoverFaq(modelName: string): FaqItem[] {
  return [
    {
      category: 'General',
      question: `What function does the ${modelName} Space Remover perform?`,
      answer: `It sanitizes ${modelName} copy by reducing redundant spaces, optionally stripping all spaces, tidying lines, and standardizing tabs/newlines. The meaning remains unchanged; solely the layout is modified.`,
    },
    {
      category: 'General',
      question: 'Does it alter my phrasing or significance?',
      answer: 'Negative. It merely modifies whitespace. It never rewrites clauses or modifies your purpose.',
    },
    {
      category: 'Usage',
      question: 'What purpose does normalize whitespace serve?',
      answer: 'It transforms tabs into spaces and unifies line breaks so text functions uniformly across platforms and editors.',
    },
    {
      category: 'Usage',
      question: 'In what situations ought I employ remove-all-spaces mode?',
      answer: 'Apply it for dense strings, codes, or dataset sanitation. For legible drafts, favor reducing redundant spaces.',
    },
    {
      category: 'Limits',
      question: 'Will it eliminate paragraph breaks?',
      answer: 'Negative. Line breaks remain untouched so your paragraphs stay structured.',
    },
    {
      category: 'Limits',
      question: 'Does it influence artificial intelligence detection results?',
      answer: 'It merely modifies spacing. Detection outcomes rely on numerous elements besides whitespace, meaning results fluctuate.',
    },
    {
      category: 'Trust',
      question: 'Is my text saved anywhere?',
      answer: 'The utility executes locally within your web browser. Protect confidential information and apply with care.',
    },
  ];
}

export function buildDetectorFaq(modelName: string): FaqItem[] {
  return [
    {
      category: 'General',
      question: `What aspects does the ${modelName} Watermark Detector examine?`,
      answer: `It analyzes ${modelName} copy for layout anomalies like zero-width characters, NBSP, soft hyphens, duplicate punctuation, and atypical whitespace. It highlights potential indicators, not absolute proofs.`,
    },
    {
      category: 'General',
      question: 'Does it validate artificial intelligence authorship or watermarks?',
      answer: 'Negative. It merely flags potential formatting anomalies. It offers no proof of source or creator.',
    },
    {
      category: 'Usage',
      question: 'What is the significance of the yes/no flags?',
      answer: 'They show if concealed Unicode or spacing structures were detected. They serve as repair guides, not evidence of artificial intelligence writing.',
    },
    {
      category: 'Usage',
      question: 'Is it possible to resolve problems identified by the scanner?',
      answer: 'Affirmatively. Eradicate concealed symbols and standardize spacing using a text cleanup utility, afterwards scan again to verify formatting updates.',
    },
    {
      category: 'Limits',
      question: 'Does it examine file data or interface with models?',
      answer: 'Negative. It operates exclusively on the inserted content and reaches out to no model or service.',
    },
    {
      category: 'Limits',
      question: 'Does it assure detection results?',
      answer: 'Negative. Outcomes are educational and could overlook anomalies or mark harmless formatting.',
    },
    {
      category: 'Trust',
      question: 'Is my writing transmitted?',
      answer: 'Computation happens inside your web application. Refrain from inputting confidential info and adhere to your enterprise guidelines.',
    },
  ];
}

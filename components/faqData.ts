export type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    category: 'General',
    question: 'What is the ChatGPT AI Text Cleaner?',
    answer:
      'The ChatGPT AI Text Cleaner from GPT CLEAN UP is a browser-based utility that performs ChatGPT Text Clean Up, often called GPT Clean Up. It removes hidden Unicode such as zero-width spaces, NBSP, and BOM, normalizes punctuation when selected, and stabilizes spacing so text behaves predictably. Unlike paraphrasing tools, GPT CLEAN UP focuses on technical cleanup only, preserving your meaning and voice while delivering editor-safe plain text.',
  },
  {
    category: 'General',
    question: 'What does GPT Clean Up include?',
    answer:
      'GPT Clean Up on GPT CLEAN UP includes four core steps: remove invisible characters, normalize punctuation, collapse redundant whitespace, and output clean plain text. This sequence helps essays, reports, and posts paste cleanly into LMS and CMS editors. The ChatGPT AI Text Cleaner is designed for speed, privacy, and clarity.',
  },
  {
    category: 'General',
    question: 'Is ChatGPT Text Clean Up the same as bypassing detectors?',
    answer:
      'No. GPT CLEAN UP provides technical cleanup that removes avoidable artifacts; it does not attempt to imitate human style. Some automated systems analyze writing patterns beyond formatting. ChatGPT Text Clean Up reduces technical noise so your content is clearer and more compatible.',
  },
  {
    category: 'General',
    question: 'Why does AI-assisted text carry hidden characters?',
    answer:
      'Copy-and-paste between rich editors can bring across non-printing Unicode and stealth formatting. GPT CLEAN UP targets these artifacts with the ChatGPT AI Text Cleaner so your text is stable, readable, and portable across platforms. This is practical hygiene for digital writing, not a substitute for authorship.',
  },
  {
    category: 'General',
    question: 'Who should use GPT CLEAN UP?',
    answer:
      'Students, professionals, creators, researchers, and teams who need clean, reliable text benefit from GPT CLEAN UP. If you move content between apps, editors, or portals, ChatGPT Text Clean Up prevents spacing glitches and invisible characters from breaking your work.',
  },
  {
    category: 'Technical',
    question: '6. What are zero-width characters and why remove them?',
    answer:
      'Zero-width characters such as U+200B are invisible in normal editors but can disrupt counting, wrapping, and validation. GPT CLEAN UP removes them during GPT Clean Up so the ChatGPT AI Text Cleaner outputs text that systems interpret consistently. This improves reliability when you paste into forms, docs, or code blocks.',
  },
  {
    category: 'Technical',
    question: '7. How does the tool handle NBSP (U+00A0)?',
    answer:
      'Non-breaking space prevents natural wrapping and can create odd gaps. GPT CLEAN UP replaces NBSP with standard space during ChatGPT Text Clean Up, making paragraphs flow normally. The goal is predictable, readable output without unwanted layout issues.',
  },
  {
    category: 'Technical',
    question: '8. Will punctuation be changed by default?',
    answer:
      'You control punctuation normalization in GPT CLEAN UP. If enabled, the ChatGPT AI Text Cleaner converts curly quotes to straight quotes and em/en dashes to hyphens. If you want to retain curly quotes or em dashes, turn normalization off before GPT Clean Up.',
  },
  {
    category: 'Technical',
    question: '9. Does the tool preserve code and Markdown?',
    answer:
      'Yes. GPT CLEAN UP targets non-printing Unicode and stealth formatting while avoiding syntax characters. As a result, ChatGPT Text Clean Up leaves code tokens and Markdown structure intact while improving copy-paste reliability.',
  },
  {
    category: 'Technical',
    question: '10. What about BOM (U+FEFF) and stray control codes?',
    answer:
      'The ChatGPT AI Text Cleaner on GPT CLEAN UP removes BOM and obscure control codes that can confuse systems. This is part of the GPT Clean Up sequence that ensures clean, plain text ready for any destination.',
  },
  {
    category: 'Usage',
    question: '11. How do I run ChatGPT Text Clean Up?',
    answer:
      'Open GPT CLEAN UP, paste your draft, choose normalization options, and click Clean. The ChatGPT AI Text Cleaner runs instantly because processing is local to your browser. Copy the output and paste it where you need it.',
  },
  {
    category: 'Usage',
    question: '12. Is there a maximum length?',
    answer:
      'Modern browsers handle long inputs well. GPT CLEAN UP is tuned for essays and reports; if you hit a practical limit, split the text, run GPT Clean Up twice, and rejoin the output.',
  },
  {
    category: 'Usage',
    question: '13. Does it work on mobile and tablets?',
    answer:
      'Yes. GPT CLEAN UP supports modern mobile browsers, so you can perform ChatGPT Text Clean Up from anywhere. The interface is simple enough for quick, on-the-go usage.',
  },
  {
    category: 'Usage',
    question: '14. Can I customize the cleanup rules?',
    answer:
      'Yes. GPT CLEAN UP lets you toggle punctuation normalization and spacing behavior. That means the ChatGPT AI Text Cleaner can be strict or gentle depending on your target editor.',
  },
  {
    category: 'Detection and Limits',
    question: '15. Will Turnitin still flag my writing after cleanup?',
    answer:
      'GPT CLEAN UP reduces technical signals by removing hidden Unicode and odd spacing with ChatGPT Text Clean Up. Some systems also analyze style, which cleanup does not change. The best practice is to pair GPT Clean Up with authentic edits that reflect your perspective.',
  },
  {
    category: 'Detection and Limits',
    question: '16. What about GPTZero and similar tools?',
    answer:
      'GPT CLEAN UP addresses technical artifacts that could influence automated checks; it does not attempt to mimic human style. The ChatGPT AI Text Cleaner keeps the focus on clarity, compatibility, and predictable formatting.',
  },
  {
    category: 'Detection and Limits',
    question: '17. Is full bypass realistic?',
    answer:
      'No solution can promise that. GPT CLEAN UP provides practical, transparent cleanup so your text is technically sound. Authentic writing choices are still up to you.',
  },
  {
    category: 'Compatibility and Formats',
    question: '18. Does GPT CLEAN UP support multilingual text?',
    answer:
      'Yes. GPT CLEAN UP preserves legitimate characters across most Unicode scripts while removing non-printing ones during ChatGPT Text Clean Up. This keeps content readable in languages that use diacritics, ligatures, or RTL direction.',
  },
  {
    category: 'Compatibility and Formats',
    question: '19. Will hyperlinks and lists survive cleaning?',
    answer:
      'Yes. The ChatGPT AI Text Cleaner focuses on character-level artifacts and spacing cleanup. Bulleted lists, numbered steps, and links remain usable in plain text.',
  },
  {
    category: 'Compatibility and Formats',
    question: '20. Can I clean JSON, CSV, XML, or YAML?',
    answer:
      'Yes. GPT CLEAN UP removes hidden characters without touching structural syntax, so ChatGPT Text Clean Up helps data remain parseable.',
  },
  {
    category: 'Compatibility and Formats',
    question: '21. Is the output SEO-friendly?',
    answer:
      'Cleaner text from GPT CLEAN UP often improves crawlability and reduces encoding surprises. GPT Clean Up does not change your topic; it ensures the text renders as intended.',
  },
  {
    category: 'Privacy and Security',
    question: '22. Is my text uploaded to servers?',
    answer:
      'No. GPT CLEAN UP runs the ChatGPT AI Text Cleaner locally in your browser. ChatGPT Text Clean Up does not transmit your text or store it on our servers.',
  },
  {
    category: 'Privacy and Security',
    question: '23. Do you log or analyze content?',
    answer:
      'No. GPT CLEAN UP does not log inputs or outputs; GPT Clean Up is a client-side operation designed for privacy and speed.',
  },
  {
    category: 'Privacy and Security',
    question: '24. Can I use this for confidential drafts?',
    answer:
      "Yes. Because GPT CLEAN UP is local, the ChatGPT AI Text Cleaner never sends your confidential text over the network. Follow your organization's policies and keep an original for your records.",
  },
  {
    category: 'Advanced Workflow',
    question: '25. Can I keep curly quotes and em dashes?',
    answer:
      'Yes. In GPT CLEAN UP you can disable punctuation normalization so ChatGPT Text Clean Up leaves those characters intact. If you need maximum compatibility, enable normalization for straight quotes and hyphens.',
  },
  {
    category: 'Advanced Workflow',
    question: '26. Can I compare before and after?',
    answer:
      'You can review cleaned output against your source to understand changes. GPT CLEAN UP keeps ChatGPT Text Clean Up transparent and predictable.',
  },
  {
    category: 'Advanced Workflow',
    question: '27. Do you support bulk or API access?',
    answer:
      'We are exploring batch options. Today, GPT CLEAN UP emphasizes reliability and privacy with in-browser GPT Clean Up.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: '28. My spacing still looks odd in another editor-why?',
    answer:
      'Some editors auto-format on paste. Try paste-as-plain-text or rerun GPT CLEAN UP with adjusted spacing. ChatGPT Text Clean Up removes artifacts, but downstream editors may impose additional rules.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: '29. How is GPT CLEAN UP different from single-purpose sites?',
    answer:
      'GPT CLEAN UP is a platform. Beyond the ChatGPT AI Text Cleaner you will find space tools, detectors, PDF and SEO helpers, and more. That ecosystem supports an end-to-end workflow for clean, portable text.',
  },
  {
    category: 'Troubleshooting and Comparison',
    question: '30. Where can I request a feature?',
    answer:
      'Use the contact link on GPT CLEAN UP to suggest enhancements to the ChatGPT AI Text Cleaner and the overall GPT Clean Up experience.',
  },
  {
    category: 'Additional Questions',
    question: '31. Can GPT CLEAN UP customize ChatGPT Text Clean Up for specific editors?',
    answer:
      'Yes. GPT CLEAN UP lets you tune normalization so the ChatGPT AI Text Cleaner aligns with strict editors and form fields. You can retain curly quotes, keep em dashes, or favor ASCII for maximum compatibility. This flexibility ensures GPT Clean Up produces text that behaves correctly where you paste it.',
  },
  {
    category: 'Additional Questions',
    question: '32. How does GPT CLEAN UP differ from paraphrasers like Quillbot or rewriting tools in gpt clean up workflows?',
    answer:
      'Paraphrasers rewrite sentences and may change meaning. GPT CLEAN UP focuses on AI text cleanup, normalizing watermark-like token patterns while preserving your message, citations, and anchors. This approach supports SEO consistency and safer edits than heavy paraphrasing.',
  },
  {
    category: 'Additional Questions',
    question: '33. Can the ChatGPT AI Text Cleaner help with content from Jasper (formerly Jarvis), Copy.ai, Writesonic, or Sudowrite?',
    answer:
      'Yes. Many modern assistants share statistical footprints. GPT CLEAN UP performs gpt clean up on drafts created with Jasper (Jarvis), Copy.ai, Writesonic, Sudowrite, Claude, Gemini, Llama-based tools, and more-reducing detectable markers while keeping your voice.',
  },
  {
    category: 'Additional Questions',
    question: "34. What are the main AI 'watermark' types that AI text cleanup targets?",
    answer:
      'In practice, most flags come from token regularities, repetition, odd Unicode/zero-width characters, spacing artifacts, and over-templated phrasing. GPT CLEAN UP focuses on these patterns during gpt clean up without overhauling your copy.',
  },
  {
    category: 'Additional Questions',
    question: '35. Will gpt clean up alter brand style guides, tone of voice, or numeric data?',
    answer:
      'No. The ChatGPT AI Text Cleaner preserves tone, brand terms, figures, and references. Always proofread numeric tables and inline stats after AI text cleanup to validate formatting.',
  },
  {
    category: 'Additional Questions',
    question: '36. How does GPT CLEAN UP compare to gptcleanup.com from a privacy and workflow perspective?',
    answer:
      `Both aim to remove AI traces. GPT CLEAN UP emphasizes client-side privacy, fast UI, and versatile gpt clean up for SEO writers, students, and agencies. It's a strong gptcleanup alternative for multi-tool stacks.`,
  },
  {
    category: 'Additional Questions',
    question: '37. Does GPT CLEAN UP help with Gemini/Bard, Claude 3, Llama 3, and Mistral outputs?',
    answer:
      'Yes. Our AI text cleanup normalizes common statistical patterns across popular models (Gemini, Claude, Llama, Mistral, etc.). For best results, add light human edits after gpt clean up.',
  },
  {
    category: 'Additional Questions',
    question: '38. Can I use gpt clean up on HTML/Markdown without breaking tags?',
    answer:
      'Yes. Paste the content and run AI text cleanup. Semantics remain intact while spacing and token regularities are normalized. Always preview in your CMS after cleaning.',
  },
  {
    category: 'Additional Questions',
    question: '39. What limits should I consider for very long documents or ebooks?',
    answer:
      'For stability, process 8-12k characters per pass. Split chapters, run ChatGPT AI Text Cleaner on each, then merge. This keeps gpt clean up fast and consistent.',
  },
  {
    category: 'Additional Questions',
    question: '40. Does GPT CLEAN UP help reduce false positives from detectors like GPTZero, Originality.ai, or Turnitin?',
    answer:
      'It often lowers AI-likelihood signals by normalizing watermark patterns, but no tool can guarantee bypass. Combine AI text cleanup with unique insights, citations, and editing for best outcomes.',
  },
  {
    category: 'Additional Questions',
    question: '41. Should I run gpt clean up before or after SEO optimization (headings, links, schema)?',
    answer:
      'Run ChatGPT AI Text Cleaner first to stabilize the text, then optimize headings, internal links, and schema. This keeps SEO changes intact while minimizing AI patterns.',
  },
  {
    category: 'Additional Questions',
    question: "42. What's the best workflow with Jasper (Jarvis) or Copy.ai drafts?",
    answer:
      'Generate your draft. 2) Run gpt clean up in GPT CLEAN UP. 3) Add brand tone and examples. 4) Optimize for SEO. 5) Publish. This layered flow keeps authenticity and reduces AI signatures.',
  },
  {
    category: 'Additional Questions',
    question: 'Can GPT CLEAN UP support academic integrity while cleaning AI-assisted drafts?',
    answer:
      `Yes-AI text cleanup is a formatting/normalization step; it is not a plagiarism bypass. Always cite sources, disclose AI assistance if required, and follow your institution's policies.`,
  },
  {
    category: 'Additional Questions',
    question: 'Will gpt clean up improve readability or only remove patterns?',
    answer:
      'The goal is natural cadence, not rewriting. Many users report better readability after ChatGPT AI Text Cleaner passes because repetitive sequences and spacing anomalies are reduced.',
  },
  {
    category: 'Additional Questions',
    question: 'Can I safely use the tool for legal, medical, or financial text?',
    answer:
      'Yes, but compliance remains your responsibility. Use AI text cleanup to normalize structure, then have a domain expert review facts and language.',
  },
  {
    category: 'Additional Questions',
    question: 'Does GPT CLEAN UP preserve anchors, footnotes, and cross-references?',
    answer:
      'Yes. The remover targets statistical signals and hidden characters, not your references. Re-check anchor text and numbering after gpt clean up.',
  },
  {
    category: 'Additional Questions',
    question: 'How does GPT CLEAN UP behave with multilingual drafts (Spanish, French, German, Arabic, etc.)?',
    answer:
      'It supports many languages. Token distributions differ by language, so always skim the cleaned text to confirm idioms and punctuation post-cleanup.',
  },
  {
    category: 'Additional Questions',
    question: 'Can gpt clean up sanitize AI-generated code comments, READMEs, or technical docs?',
    answer:
      'Yes. It keeps code blocks intact while smoothing robotic phrasing in comments. After ChatGPT AI Text Cleaner, run linters/tests to confirm formatting.',
  },
  {
    category: 'Additional Questions',
    question: 'What are realistic expectations for highly templated AI content?',
    answer:
      'AI text cleanup reduces repetitiveness and flags, but templated drafts can still feel generic. Add examples, data, and analysis to restore originality.',
  },
  {
    category: 'Additional Questions',
    question: 'Does GPT CLEAN UP remove zero-width characters, non-breaking spaces, and strange Unicode?',
    answer:
      'Yes. The tool normalizes zero-width, nbsp, and similar hidden markers often caught by detectors, supporting safer gpt clean up.',
  },
  {
    category: 'Additional Questions',
    question: 'How do I combine AI text cleanup with human editing for best outcomes?',
    answer:
      'Use ChatGPT AI Text Cleaner to normalize patterns first, then refine for clarity, add sources, and ensure brand voice. This two-step approach produces the most natural result.',
  },
  {
    category: 'Additional Questions',
    question: 'Can GPT CLEAN UP help localization teams post-translate drafts from LLMs?',
    answer:
      'Yes. Post-MT cleanup with gpt clean up can mitigate repetitive phrasing and spacing artifacts. Native editors should still finalize idioms and style.',
  },
  {
    category: 'Additional Questions',
    question: 'Will gpt clean up affect keyword order, structured data, or meta tags for SEO?',
    answer:
      'No. GPT CLEAN UP avoids modifying intended keyword order or schema properties while it normalizes repetitive patterns.',
  },
  {
    category: 'Additional Questions',
    question: 'How should agencies use GPT CLEAN UP at scale?',
    answer:
      'Run AI text cleanup on sections in parallel, maintain an internal checklist, and consider upcoming API/batch features. This standardizes voice across accounts.',
  },
  {
    category: 'Additional Questions',
    question: 'Is GPT CLEAN UP a gptcleanup alternative for teams that need client-side privacy?',
    answer:
      'Yes. Many users adopt it as a gptcleanup alternative due to client-side processing and fast UI tailored to ChatGPT AI Text Cleaner workflows.',
  },
  {
    category: 'Additional Questions',
    question: 'Does gpt clean up work equally on Claude, Gemini, Llama, and Mistral outputs?',
    answer:
      'Patterns differ by model, but GPT CLEAN UP targets common signals across ecosystems. Always review edited passages for nuance and domain accuracy.',
  },
  {
    category: 'Additional Questions',
    question: 'Can I use GPT CLEAN UP to prepare content for marketplaces or UGC platforms?',
    answer:
      'Yes. Normalize drafts with AI text cleanup, then customize tone and disclosures per platform policy before submission.',
  },
  {
    category: 'Additional Questions',
    question: 'How does GPT CLEAN UP interact with plagiarism checks?',
    answer:
      `It doesn't remove plagiarism; it removes watermark-like patterns. Always produce original text and cite sources. ChatGPT text clean up is not a bypass.`,
  },
  {
    category: 'Additional Questions',
    question: 'What should I change if detectors still flag my text after cleanup?',
    answer:
      'Increase human edits: vary sentence length, add original examples/data, and reduce templated phrasing. Re-run gpt clean up if spacing artifacts persist.',
  },
  {
    category: 'Additional Questions',
    question: 'Can GPT CLEAN UP be used for knowledge bases and help centers?',
    answer:
      'Yes. It helps unify tone while preserving steps and code snippets. After AI text cleanup, verify links, screenshots, and version numbers.',
  },
  {
    category: 'Additional Questions',
    question: 'What are common formatting issues that AI text cleanup can fix?',
    answer:
      'Hidden symbols, odd spacing, rogue attributes, and repeated function words. GPT CLEAN UP resolves these while respecting your structure.',
  },
  {
    category: 'Additional Questions',
    question: 'Does GPT CLEAN UP support right-to-left languages like Arabic or Hebrew?',
    answer:
      'Yes. After gpt clean up, confirm directionality and punctuation spacing in your CMS preview to ensure layout integrity.',
  },
  {
    category: 'Additional Questions',
    question: 'Is the ChatGPT AI Text Cleaner useful for social captions and ads?',
    answer:
      'Yes. Short-form copy benefits from normalization to remove robotic cadence while retaining CTAs and brand voice.',
  },
  {
    category: 'Additional Questions',
    question: 'Will gpt clean up change anchor text crucial for internal linking?',
    answer:
      'No. AI text cleanup preserves anchors and link destinations. Reconfirm with your SEO plugin after publishing.',
  },
  {
    category: 'Additional Questions',
    question: 'How often is the remover updated to track new watermarking or detection methods?',
    answer:
      'We iterate regularly so GPT CLEAN UP remains effective as watermarking/detection evolves across LLMs and detectors.',
  },
  {
    category: 'Additional Questions',
    question: 'Can I preview exactly what changed during gpt clean up?',
    answer:
      'Yes. Use before/after panels to see what the ChatGPT AI Text Cleaner normalized while keeping your message intact.',
  },
  {
    category: 'Additional Questions',
    question: 'Is there a browser extension or VS Code integration planned?',
    answer:
      'Yes. A lightweight extension and editor integrations are on the roadmap to streamline AI text cleanup.',
  },
  {
    category: 'Additional Questions',
    question: 'Will gpt clean up help with editorial acceptance for premium publications?',
    answer:
      'It often improves cadence and reduces repetitive phrasing. Editors still expect strong reporting, voice, and sourcing alongside cleanup.',
  },
  {
    category: 'Additional Questions',
    question: 'Does GPT CLEAN UP work with Perplexity, You.com, or Neeva-style assistants?',
    answer:
      'Yes. You can run AI text cleanup on summaries and citations from these tools, then validate links and attributions.',
  },
  {
    category: 'Additional Questions',
    question: 'What disclaimers should I consider for academic or compliance contexts?',
    answer:
      'Disclose AI assistance where required, cite sources properly, and treat gpt clean up as a formatting tool-not a detector bypass.',
  },
  {
    category: 'Additional Questions',
    question: 'Will AI text cleanup preserve headings, tables, and lists from LLM outputs?',
    answer:
      'Yes. It targets statistical patterns and hidden characters, not your document structure. Review table alignment post-paste.',
  },
  {
    category: 'Additional Questions',
    question: 'Does GPT CLEAN UP help with multilingual SEO (hreflang sites)?',
    answer:
      'Yes-normalize drafts per locale with gpt clean up, then local editors finalize idioms and compliance for each market.',
  },
  {
    category: 'Additional Questions',
    question: 'Should I run cleanup before or after enterprise editing passes (style, legal, brand)?',
    answer:
      'Run ChatGPT AI Text Cleaner first to stabilize the text. Subsequent legal/brand edits then remain intact without re-introducing artifacts.',
  },
  {
    category: 'Additional Questions',
    question: 'Can GPT CLEAN UP be used for transcripts, podcasts, and interview write-ups?',
    answer:
      'Yes. AI text cleanup smooths repetitive fillers and spacing issues. Human editing should still craft narrative flow and context.',
  },
  {
    category: 'Additional Questions',
    question: 'Does the tool impact structured content like FAQs, glossaries, or API docs?',
    answer:
      'It preserves structure. For FAQs and glossaries, run gpt clean up on each entry to prevent drift while maintaining keywords.',
  },
  {
    category: 'Additional Questions',
    question: 'Is there any risk of over-cleaning or losing stylistic flair?',
    answer:
      'Minimal. The remover aims for subtle normalization. If style feels flattened, add human variations and examples after AI text cleanup.',
  },
  {
    category: 'Additional Questions',
    question: 'How does GPT CLEAN UP compare to manual find-and-replace for zero-width or nbsp artifacts?',
    answer:
      'Manual cleanup misses deeper token patterns. GPT CLEAN UP automates both hidden-character removal and statistical normalization in one pass.',
  },
  {
    category: 'Additional Questions',
    question: 'Can GPT CLEAN UP assist in compliance write-ups (GDPR, HIPAA, SOC 2)?',
    answer:
      'It can normalize drafting artifacts, but compliance accuracy and legal review are essential. Treat gpt clean up as a formatting aid only.',
  },
  {
    category: 'Additional Questions',
    question: 'What improvements can I expect on highly formulaic AI product reviews?',
    answer:
      'Less repetitive phrasing and more natural flow. Add unique testing notes and photos post-cleanup for credibility and ranking.',
  },
  {
    category: 'Additional Questions',
    question: 'Does the remover work on hybrid drafts that mix human and AI text?',
    answer:
      'Yes. GPT CLEAN UP is designed for mixed authorship. AI text cleanup brings consistency while preserving human edits.',
  },
  {
    category: 'Additional Questions',
    question: 'Is GPT CLEAN UP a viable gptcleanup alternative for agencies working with Jasper (Jarvis) and Copy.ai stacks?',
    answer:
      'Yes. Agencies use it as a gptcleanup alternative due to client-side privacy, speed, and natural results with the ChatGPT AI Text Cleaner in large content pipelines.',
  },
  {
    category: 'Additional Questions',
    question: 'What does "clean ChatGPT text" actually do?',
    answer:
      'It removes invisible characters, normalizes spacing/line breaks, and strips leftover HTML/markdown so your text is easy to copy, search, and publish.',
  },
  {
    category: 'Additional Questions',
    question: 'Will cleaning change my meaning or tone?',
    answer:
      'No, the cleaner only targets formatting noise and hidden characters. Your words stay the same.',
  },
  {
    category: 'Additional Questions',
    question: 'Do I need to install anything?',
    answer:
      'No, it runs right in your browser. Paste, clean, copy-done.',
  },
  {
    category: 'Additional Questions',
    question: 'Is the tool safe for sensitive drafts?',
    answer:
      'Yes, processing is local to your session. For highly sensitive data, avoid pasting into any online tool.',
  },
  {
    category: 'Additional Questions',
    question: 'Can this help with AI watermarks?',
    answer:
      'Cleaning removes common non-printing artifacts and formatting fingerprints often left in AI outputs, which helps deliver clean, professional text.',
  },
];

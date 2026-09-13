import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Word Frequency Counter: The Complete Guide to Text Analysis and Keyword Density</h2>
      <p>
        A word frequency counter is one of the most foundational tools in computational linguistics, natural language processing, and content strategy. At its core, it counts how many times each unique word appears in a body of text and ranks those words by their occurrence count. This seemingly simple operation unlocks a surprisingly wide range of practical applications — from SEO keyword density analysis to academic corpus linguistics, from plagiarism detection to readability assessment, from chatbot training data inspection to competitive content research.
      </p>
      <p>
        Whether you are a content writer checking keyword density before publishing, a data scientist preprocessing a text dataset, a student analyzing literary themes, or a developer debugging a tokenizer, a word frequency counter gives you an immediate statistical window into your text. It transforms raw prose — often thousands of words — into a ranked, sortable table of quantitative insight that no amount of manual reading could efficiently provide.
      </p>

      <h2>How Word Frequency Analysis Works</h2>
      <p>
        The process of counting word frequencies involves several discrete steps, each of which can meaningfully affect your results. Understanding these steps helps you interpret the output correctly and configure the tool to match your use case.
      </p>

      <h3>Tokenization</h3>
      <p>
        Tokenization is the process of splitting raw text into individual units called tokens. For word frequency analysis, tokens are typically words. The simplest tokenization strategy splits text on whitespace — any sequence of spaces, tabs, or newlines. A more sophisticated tokenizer also strips punctuation, handles contractions (<em>don't → do/n't or dont</em>), and normalizes Unicode characters.
      </p>
      <p>
        The tokenization boundary choice profoundly affects results. Consider the sentence <em>"Hello, world! Hello."</em> A naive whitespace split produces <code>Hello,</code>, <code>world!</code>, <code>Hello.</code> — three different tokens, none matching each other. After stripping punctuation: <code>Hello</code>, <code>world</code>, <code>Hello</code> — now "Hello" has frequency 2. Whether you strip punctuation is a configuration decision that should match your goal.
      </p>

      <h3>Case Normalization</h3>
      <p>
        Case normalization — converting all characters to lowercase before counting — ensures that "The", "the", and "THE" all map to the same token "the". This is almost always desirable for frequency analysis because humans treat these as the same word regardless of capitalization. The main exception is case-sensitive analysis of code or branded terms where capitalization carries semantic meaning (e.g., distinguishing the Python built-in <code>set</code> from the proper noun <code>Set</code> in a data structure context).
      </p>

      <h3>Stop Word Removal</h3>
      <p>
        Stop words are extremely common words that carry little semantic content in isolation: articles (<em>a, an, the</em>), prepositions (<em>in, on, at, by, with, from, to, of</em>), conjunctions (<em>and, or, but</em>), pronouns (<em>I, you, he, she, it, they</em>), and auxiliary verbs (<em>is, are, was, were, be, been, being, have, has, had, do, does, did</em>). In any general English text, these words will dominate the frequency list, appearing far more than any meaningful content word.
      </p>
      <p>
        Standard English stop word lists contain 50–300+ words depending on the source. NLTK's English stop word list has 179 words. spaCy's has 326. Scikit-learn's has 318. The right stop word list depends on your task — for SEO keyword density, you want to see content words without function words cluttering the top of the list; for authorship attribution, even stop word patterns are informative.
      </p>

      <h3>Stemming and Lemmatization</h3>
      <p>
        Two more advanced normalization techniques group morphological variants of the same root word together:
      </p>
      <ul>
        <li><strong>Stemming</strong> uses heuristic rules to strip word endings. The Porter stemmer, for example, reduces "running", "runs", "runner", and "ran" all to "run" (though results are sometimes non-words like "comput" from "computing"). Stemming is fast but crude.</li>
        <li><strong>Lemmatization</strong> uses a dictionary and grammatical analysis to map each word to its canonical dictionary form (lemma). "Better" → "good", "running" → "run", "mice" → "mouse". Lemmatization is slower but produces linguistically valid root forms.</li>
      </ul>
      <p>
        For most SEO and content analysis purposes, basic case normalization and stop word removal are sufficient. Stemming and lemmatization are more important in NLP research, machine learning feature engineering, and cross-language text analysis.
      </p>

      <h3>The Counting Algorithm</h3>
      <p>
        After tokenization and normalization, counting is straightforward: maintain a hash map (dictionary) from token to integer count. For each token in the token stream, look it up in the map and increment its count (or insert it with count 1 if absent). This runs in O(n) time where n is the number of tokens, making it efficient even on multi-million word corpora.
      </p>
      <p>
        The final step is sorting the frequency map by count descending to produce the ranked list. Standard sort is O(k log k) where k is the number of unique tokens. For a typical English novel (~100,000 words, ~10,000 unique tokens), this sort is negligible — under a millisecond in any modern language.
      </p>

      <h2>Zipf's Law: The Universal Pattern of Word Frequencies</h2>
      <p>
        One of the most remarkable empirical findings in linguistics is Zipf's Law, formulated by George Kingsley Zipf in 1935. It states that the frequency of a word is inversely proportional to its rank in the frequency table. Specifically, the most common word appears approximately twice as often as the second most common, three times as often as the third most common, and so on.
      </p>
      <p>
        This power-law distribution appears consistently across virtually all natural languages and text corpora. In the Brown Corpus of American English, "the" appears about 69,971 times, "of" about 36,411 times (roughly half), "and" about 28,852 times. The pattern continues through millions of words, with thousands of words appearing only once (hapax legomena).
      </p>
      <p>
        The practical implication: your word frequency list will always show a sharp drop-off. The top 100–200 words account for a disproportionate share of total word count in most texts. The long tail contains thousands of rare words that each appear only 1–3 times. This is why stop word removal is so important — without it, Zipf's law guarantees that function words will always dominate your frequency list regardless of your actual topic.
      </p>
      <p>
        Zipf's Law also applies to keywords in SEO contexts: a few high-competition keywords dominate search volume, while the vast "long tail" of specific queries has lower individual volume but collectively represents most searches. Word frequency analysis helps identify which long-tail terms appear naturally in your content.
      </p>

      <h2>Word Frequency Analysis for SEO and Content Marketing</h2>
      <p>
        Search engine optimization teams use word frequency analysis as a core technique for on-page content optimization. The underlying theory is that search engines analyze the statistical distribution of terms in a document to understand its topic and determine relevance to queries. Documents that naturally and proportionately use topically relevant terms rank better for those terms.
      </p>

      <h3>Keyword Density Analysis</h3>
      <p>
        Keyword density is the percentage of times a target keyword appears relative to the total word count. A basic formula: Keyword Density = (Keyword Count / Total Words) × 100. If "word frequency counter" appears 15 times in a 3,000-word article, its density is 0.5%.
      </p>
      <p>
        Historical SEO advice recommended keyword densities of 1–3%. Modern search engines, however, are far more sophisticated — they understand semantic context, not just keyword counts. Obsessing over exact keyword density at the expense of natural writing quality is counterproductive. The goal is natural, thorough coverage of a topic, not hitting an arbitrary percentage.
      </p>
      <p>
        That said, frequency analysis remains useful for spotting under-use of important terms (your target keyword appears only once in a 5,000-word article) or over-use that reads as unnatural keyword stuffing. It also helps ensure that related terms, synonyms, and topically relevant phrases appear with appropriate frequency.
      </p>

      <h3>TF-IDF: A Smarter Frequency Metric</h3>
      <p>
        TF-IDF (Term Frequency–Inverse Document Frequency) is a refinement of raw word frequency that accounts for how common a word is across all documents, not just within one document. It is calculated as:
      </p>
      <p>
        <strong>TF-IDF = TF(t,d) × IDF(t,D)</strong>
      </p>
      <p>
        Where TF(t,d) is the frequency of term t in document d, and IDF(t,D) is the log of the ratio of total documents to documents containing term t. Words that appear often in one document but rarely across the corpus receive high TF-IDF scores — these are the distinctive, topically specific terms that most characterize a document.
      </p>
      <p>
        TF-IDF is the foundation of many information retrieval and search systems. While a basic word frequency counter doesn't compute TF-IDF directly, it provides the raw TF component. Understanding TF-IDF helps explain why comprehensive coverage of a topic (using many relevant but not universally common terms) tends to perform better in search than simple keyword repetition.
      </p>

      <h3>Competitor Content Analysis</h3>
      <p>
        Paste a top-ranking competitor's article into a word frequency counter, remove stop words, and review the top 50–100 terms. This reveals which concepts and keywords the competitor covers thoroughly. Comparing your own article's frequency list against a competitor's highlights:
      </p>
      <ul>
        <li>Topics your competitor covers that you've missed entirely (zero frequency in your text)</li>
        <li>Terms your competitor uses extensively that appear only once or twice in your content</li>
        <li>The vocabulary and framing your competitor uses around the target topic</li>
        <li>Related terms and synonyms you haven't thought to include</li>
      </ul>
      <p>
        This is one of the most efficient techniques for rapidly improving content depth and topical coverage without requiring keyword research tool subscriptions.
      </p>

      <h3>Content Gap Analysis</h3>
      <p>
        When planning a content upgrade for an existing article, run the current version through a frequency counter. Cross-reference the top terms against your target keyword list and semantic keyword clusters. Low-frequency or absent important keywords indicate content gaps to fill in the next revision.
      </p>

      <h2>Academic and Literary Applications</h2>
      <p>
        Long before SEO existed, linguists, literary scholars, and historians used word frequency analysis to study texts. These applications remain as relevant today as ever.
      </p>

      <h3>Authorship Attribution</h3>
      <p>
        Different authors have characteristic word frequency signatures — their "stylometric fingerprint." Common function words like "the", "a", "of", "in", "that" vary in subtle but statistically consistent ways between authors. This is the basis of computational authorship attribution, which has been applied to disputed historical texts, anonymous publications, and literary forgeries.
      </p>
      <p>
        Famous examples include the disputed Federalist Papers (attributed to Madison vs. Hamilton using function word frequencies), the unmasking of J.K. Rowling as Robert Galbraith, and analysis of Shakespeare's collaborative works. Word frequency analysis, combined with statistical methods, provides objective evidence where intuition alone fails.
      </p>

      <h3>Historical Corpus Linguistics</h3>
      <p>
        Google's Ngram Viewer, built on digitized books from 1500–2019, is essentially a massive word frequency counter over time. By charting how frequently words appear across decades or centuries, researchers can trace the rise of concepts, the shift in cultural concerns, the adoption of new technologies, and the fading of archaic terms.
      </p>
      <p>
        The frequency of "democracy", "freedom", "nation", "God", and "science" across different historical periods tells a story about intellectual history that no single text reveals. Corpus linguistics is now a mainstream methodology in history, sociology, and cultural studies, all built on word frequency analysis at scale.
      </p>

      <h3>Vocabulary Analysis in Language Learning</h3>
      <p>
        Paul Nation's work on vocabulary learning established that a learner needs to know the most frequent ~2,000 words in a language to understand 80–90% of common text. The BNC/COCA Word Families list and the Academic Word List are both frequency-ordered resources derived from large corpus frequency counts.
      </p>
      <p>
        For language learners, running target language texts through a word frequency counter and cross-referencing against known vocabulary reveals which unknown words appear most often and are therefore most worth learning for that specific text or domain.
      </p>

      <h3>Readability and Complexity Assessment</h3>
      <p>
        Texts with higher proportions of rare words (lower-frequency words) are generally more complex and harder to read. Readability formulas like Flesch-Kincaid, SMOG, and the Gunning Fog Index incorporate syllable counts and sentence lengths, but word frequency provides a complementary signal: high frequency of low-frequency vocabulary is a marker of technical or academic writing complexity.
      </p>

      <h2>Natural Language Processing and Machine Learning Applications</h2>
      <p>
        In data science and NLP, word frequency analysis is often the first step in understanding a text dataset and is fundamental to several important algorithms and techniques.
      </p>

      <h3>Bag of Words (BoW) Representation</h3>
      <p>
        The bag of words model represents documents as vectors of word frequencies (or binary presence/absence). Each unique word in the corpus vocabulary becomes a dimension in a high-dimensional vector space. A document's coordinate in that space is its word frequency count for that term.
      </p>
      <p>
        Despite ignoring word order and grammatical structure, BoW is surprisingly effective for many text classification tasks: spam detection, sentiment analysis, topic classification, and document clustering. Naive Bayes classifiers, logistic regression, and support vector machines trained on BoW features outperform many more complex approaches on short-text classification tasks.
      </p>

      <h3>Topic Modeling (LDA)</h3>
      <p>
        Latent Dirichlet Allocation (LDA), the most widely used topic modeling algorithm, is built on word co-occurrence statistics derived from word frequencies. LDA assumes that each document is a mixture of latent topics, and each topic is characterized by a probability distribution over words (which is, functionally, a scaled word frequency distribution for that topic).
      </p>
      <p>
        Analyzing word frequencies lets you do a quick sanity check before running LDA: are the highest-frequency terms (after stop word removal) topically coherent? Do they suggest the number of meaningful topics you'd expect? Frequency analysis informs hyperparameter choices like the number of topics.
      </p>

      <h3>Vocabulary Statistics for Model Training</h3>
      <p>
        When training word embedding models (Word2Vec, GloVe, FastText) or large language models, vocabulary size and word frequency distribution are critical design parameters. Words below a minimum frequency threshold are typically replaced with an UNK (unknown) token to keep vocabulary size manageable.
      </p>
      <p>
        A word frequency analysis of your training corpus tells you where to set that threshold: if you keep all words with frequency ≥ 5, how many unique tokens are in your vocabulary? What percentage of total tokens are covered? Word frequency histograms guide these decisions.
      </p>

      <h3>Detecting Data Quality Issues</h3>
      <p>
        High-frequency words that shouldn't be high-frequency signal data quality problems. If "undefined", "null", "NaN", or "error" appear in the top 20 words of a dataset that should contain customer reviews, something is wrong with data collection or preprocessing. Frequency analysis is a fast sanity check on text data quality before investing in longer analysis.
      </p>

      <h2>Practical Use Cases Across Industries</h2>

      <h3>Customer Feedback and Survey Analysis</h3>
      <p>
        Analyzing open-ended survey responses, product reviews, or customer support tickets with word frequency reveals the language customers use to describe problems, benefits, and experiences. High-frequency negative terms identify pain points; high-frequency positive terms identify selling points. This is faster than reading thousands of responses manually and surfaces patterns no individual human reviewer would notice.
      </p>

      <h3>Legal Document Analysis</h3>
      <p>
        Legal professionals use word frequency analysis to understand contract language, identify frequently used terms and definitions, spot unusual clauses (low-frequency terms compared to standard contracts), and verify that key required terms appear with appropriate frequency. Due diligence reviews of large document sets benefit from frequency analysis to prioritize manual review attention.
      </p>

      <h3>Competitive Intelligence</h3>
      <p>
        Analyzing competitor websites, press releases, earnings call transcripts, and marketing materials with word frequency tools reveals strategic priorities, messaging frameworks, and emerging focus areas. When a competitor's communications suddenly feature a term with increasing frequency over several quarters, it signals a strategic shift worth investigating.
      </p>

      <h3>Journalism and Fact-Checking</h3>
      <p>
        News organizations use frequency analysis to study political speech patterns, detect coordinated messaging campaigns, and identify which issues dominate political discourse in different periods. Sudden frequency spikes for specific terms in social media corpora can indicate breaking news, emerging trends, or coordinated influence operations.
      </p>

      <h3>Software Documentation Quality</h3>
      <p>
        Technical writers use word frequency analysis to ensure documentation uses terminology consistently. If the same concept is referred to by three different names with roughly equal frequency, readers will be confused. Frequency analysis identifies inconsistent terminology early in the writing process.
      </p>

      <h2>Configuring Your Word Frequency Analysis</h2>

      <h3>Should You Include Numbers?</h3>
      <p>
        Numbers in text are usually not meaningful as standalone tokens for most analysis purposes. The number "2023" appearing frequently in a document about a 2023 event is uninformative compared to the substantive topic words. Most frequency counters allow excluding numeric tokens. However, in contexts where numbers are semantically meaningful — financial documents, sports statistics, scientific papers — retaining and counting numbers makes sense.
      </p>

      <h3>Minimum Frequency Threshold</h3>
      <p>
        Setting a minimum frequency threshold filters out hapax legomena (words appearing only once) and low-frequency noise. In a 10,000-word article, filtering to words appearing ≥ 3 times reduces the unique token list dramatically while keeping all statistically significant terms. The right threshold depends on total word count and your analysis goal.
      </p>

      <h3>N-gram Analysis</h3>
      <p>
        Single-word frequencies miss multi-word phrases. "Machine learning" means something very different from "machine" and "learning" counted separately. N-gram analysis counts sequences of n consecutive words. Bigram (2-gram) and trigram (3-gram) frequency analysis is particularly important for SEO, where multi-word phrases are the actual search queries you're targeting.
      </p>
      <p>
        A phrase frequency tool (which extends the basic word frequency counter to n-grams) reveals which two- and three-word phrases dominate your content and whether your target long-tail keyphrases appear with appropriate frequency.
      </p>

      <h3>Character-Level Frequency</h3>
      <p>
        Character frequency analysis (counting letters rather than words) is used in cryptography for frequency analysis attacks on classical ciphers, in compression algorithm design (Huffman coding assigns shorter codes to more frequent characters), and in detecting encoding issues (unexpected high-frequency of replacement characters or escape sequences).
      </p>

      <h2>Interpreting Frequency Outputs: Common Pitfalls</h2>

      <h3>Frequency ≠ Importance</h3>
      <p>
        The most frequent content word in a text is not necessarily the most important concept in that text. "Problem" might appear 40 times in a 5,000-word article that is actually about "solutions" — "solutions" might appear only 20 times but be the organizing concept. Frequency is one signal; semantic centrality requires more sophisticated analysis.
      </p>

      <h3>Domain Stop Words</h3>
      <p>
        Standard stop word lists are designed for general text. Domain-specific corpora have their own "stop words" — extremely common terms in that domain that add no discriminating information. In medical text, "patient", "treatment", and "clinical" might be so universal as to be uninformative. In legal text, "shall", "party", and "agreement" are near-ubiquitous. Effective frequency analysis for specialized domains requires domain-specific stop word customization.
      </p>

      <h3>Sentence Length and Writing Style Effects</h3>
      <p>
        An author who writes long, complex sentences with many subordinate clauses will naturally produce higher frequencies of conjunctions and relative pronouns than an author who writes short, punchy sentences. These stylistic differences can swamp topical signals if you're not careful about interpreting function word frequencies.
      </p>

      <h3>Multi-lingual Text</h3>
      <p>
        Code-switching (mixing languages within a text) produces frequency distributions that are meaningless if you apply single-language stop word lists. A Spanish stop word list won't filter English function words, and vice versa. Multi-lingual corpora require either language detection and per-segment processing, or language-agnostic analysis approaches.
      </p>

      <h2>Tools and Libraries for Programmatic Word Frequency Analysis</h2>

      <h3>Python</h3>
      <p>
        Python is the dominant language for text analysis. The <code>collections.Counter</code> class provides a one-line frequency counter:
      </p>
      <pre><code>{`from collections import Counter
import re

text = "your text here"
words = re.findall(r"\\b[a-z]+\\b", text.lower())
freq = Counter(words)
print(freq.most_common(20))`}</code></pre>
      <p>
        For NLP-grade analysis with stop words, stemming, and lemmatization, use NLTK or spaCy. For large-scale corpus analysis, scikit-learn's <code>CountVectorizer</code> and <code>TfidfVectorizer</code> provide production-ready frequency analysis with built-in stop word lists and n-gram support.
      </p>

      <h3>JavaScript</h3>
      <pre><code>{`function wordFrequency(text, stopWords = new Set()) {
  const words = text.toLowerCase().match(/\\b[a-z]+\\b/g) || [];
  const freq = {};
  for (const word of words) {
    if (!stopWords.has(word)) {
      freq[word] = (freq[word] || 0) + 1;
    }
  }
  return Object.entries(freq).sort((a, b) => b[1] - a[1]);
}`}</code></pre>

      <h3>R</h3>
      <p>
        R's <code>tidytext</code> package provides frequency analysis with <code>unnest_tokens()</code> and <code>count()</code>. The <code>tm</code> (text mining) package provides a full corpus analysis framework. R is particularly strong for statistical visualization of frequency distributions using ggplot2.
      </p>

      <h3>Command Line</h3>
      <pre><code>{`# Unix pipeline for word frequency
cat document.txt | tr '[:upper:]' '[:lower:]' | tr -cs 'a-z' '\\n' | sort | uniq -c | sort -rn | head -50`}</code></pre>

      <h2>Word Frequency in the Context of Modern Search Engines</h2>
      <p>
        Google's ranking algorithms have evolved far beyond simple word frequency matching. BERT (2019) and subsequent large language model-based ranking systems understand semantic meaning, query intent, and contextual relevance in ways that pure frequency analysis cannot capture.
      </p>
      <p>
        However, word frequency analysis remains a useful proxy and diagnostic tool for SEOs because:
      </p>
      <ul>
        <li>It reveals topical coverage — whether your content addresses all aspects of a topic</li>
        <li>It identifies natural language use — high-frequency terms tend to be those semantically associated with a topic in training data</li>
        <li>It surfaces potential over-optimization — unnaturally high frequency of exact-match keywords</li>
        <li>It provides an actionable signal — you can directly act on frequency data by adding, removing, or restructuring content</li>
      </ul>
      <p>
        The most effective content strategy combines word frequency analysis with user intent research, comprehensive topical coverage, and high-quality writing. Frequency is a means to an end — understanding and serving reader needs — not an end in itself.
      </p>

      <h2>Privacy and Data Handling</h2>
      <p>
        A client-side word frequency counter processes all text entirely within your browser. No text is transmitted to any server. This matters for analyzing sensitive content: confidential business documents, unpublished manuscripts, personal communications, proprietary research, or any text you cannot share externally.
      </p>
      <p>
        Always verify that any online tool you use for sensitive text either processes locally (client-side only) or has a clear, trustworthy privacy policy. For highly sensitive content, running a local Python script or command-line tool is the safest option, as it involves no network communication whatsoever.
      </p>

      <h2>Conclusion</h2>
      <p>
        Word frequency analysis is a deceptively powerful technique that bridges computational linguistics, content strategy, literary analysis, and data science. From identifying SEO keyword gaps to uncovering authorial style to preprocessing machine learning training data, the simple act of counting and ranking word occurrences generates insight that raw text reading cannot efficiently provide.
      </p>
      <p>
        The key to effective word frequency analysis is not just counting, but configuring the analysis — choosing appropriate tokenization, normalization, stop word filtering, and interpretation — to match your specific goal. Combined with context and domain knowledge, word frequency data is one of the most cost-effective analytical tools available for anyone who works with text at scale.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a word frequency counter?',
    answer: 'A word frequency counter is a tool that analyzes a body of text and counts how many times each unique word appears, then ranks the results by occurrence count. It helps reveal the most prominent terms in any text, useful for SEO analysis, content research, NLP preprocessing, and literary study.',
  },
  {
    category: 'General',
    question: 'What is word frequency used for in SEO?',
    answer: 'In SEO, word frequency analysis helps check keyword density, identify topical coverage gaps, ensure target keywords appear with appropriate frequency, analyze competitor content, and surface related terms and synonyms you should include to comprehensively cover a topic.',
  },
  {
    category: 'General',
    question: 'What are stop words and why should I remove them?',
    answer: 'Stop words are extremely common function words (a, an, the, in, on, of, and, or, but, is, are, etc.) that appear in virtually all texts but carry little topical meaning. Removing them reveals the substantive content words that actually characterize your text\'s subject matter.',
  },
  {
    category: 'General',
    question: 'What is a good keyword density percentage?',
    answer: 'Modern SEO guidance discourages obsessing over specific keyword density percentages. Historically, 1–3% was recommended, but search engines now evaluate semantic context and topical completeness rather than raw frequency. Focus on natural, thorough topic coverage rather than hitting a density target.',
  },
  {
    category: 'Analysis',
    question: 'What is Zipf\'s Law and how does it apply to word frequency?',
    answer: 'Zipf\'s Law states that in any natural language corpus, word frequency is inversely proportional to rank — the most common word appears roughly twice as often as the second most common, three times as often as the third, and so on. This power-law distribution means your frequency list will always be heavily dominated by a small number of very frequent words.',
  },
  {
    category: 'Analysis',
    question: 'What is TF-IDF and how does it differ from raw word frequency?',
    answer: 'TF-IDF (Term Frequency–Inverse Document Frequency) weights word frequency by how rare that word is across a larger document collection. High TF-IDF scores identify words that appear often in one document but are uncommon generally — these are the most topically distinctive terms. Raw frequency alone cannot distinguish distinctive terms from universally common ones.',
  },
  {
    category: 'Analysis',
    question: 'What is the difference between stemming and lemmatization?',
    answer: 'Stemming uses heuristic rules to strip word endings, sometimes producing non-words (e.g., "comput" from "computing"). Lemmatization uses dictionary lookup to map words to their canonical form (lemma), producing valid words (e.g., "running" → "run", "better" → "good"). Lemmatization is more accurate but slower.',
  },
  {
    category: 'Analysis',
    question: 'Should I count numbers in my word frequency analysis?',
    answer: 'For most content analysis and SEO purposes, excluding numbers is preferable since numeric tokens (years, quantities) are rarely the terms you\'re trying to optimize. For financial documents, scientific papers, or statistical reports where numbers carry topical meaning, including them makes sense.',
  },
  {
    category: 'Analysis',
    question: 'What are n-grams and why are they useful?',
    answer: 'N-grams are sequences of n consecutive words. Bigrams (2-grams) and trigrams (3-grams) capture multi-word phrases that single-word frequency misses. "Machine learning" means something very different from "machine" and "learning" counted separately. Phrase frequency analysis is particularly important for SEO targeting long-tail keyword phrases.',
  },
  {
    category: 'NLP',
    question: 'How is word frequency used in machine learning and NLP?',
    answer: 'Word frequency is the foundation of the Bag of Words (BoW) model used in text classification, spam detection, and sentiment analysis. It also underlies TF-IDF feature extraction, topic modeling (LDA), vocabulary construction for word embedding models (Word2Vec, GloVe), and corpus statistics for language model training.',
  },
  {
    category: 'NLP',
    question: 'What is a Bag of Words model?',
    answer: 'The Bag of Words model represents documents as vectors of word frequency counts, ignoring word order. Each unique word in the corpus vocabulary becomes one dimension. Despite its simplicity, BoW is effective for many classification tasks including spam detection, topic classification, and sentiment analysis.',
  },
  {
    category: 'NLP',
    question: 'What are hapax legomena?',
    answer: 'Hapax legomena (from Greek: "said only once") are words that appear exactly once in a corpus. In any large natural language corpus, thousands of words appear only once, forming the extreme long tail of the Zipfian distribution. In NLP, hapax legomena are often filtered out or mapped to UNK tokens to keep vocabulary size manageable.',
  },
  {
    category: 'Applications',
    question: 'Can word frequency analysis detect authorship?',
    answer: 'Yes. Stylometric authorship attribution uses the characteristic frequency patterns of function words (the, a, of, in, that, which) — not content words — to fingerprint an author\'s style. This technique has been applied to disputed historical texts, the Federalist Papers attribution debate, and unmasking of anonymous authors like Robert Galbraith (J.K. Rowling).',
  },
  {
    category: 'Applications',
    question: 'How do I use word frequency to analyze competitor content?',
    answer: 'Paste a competitor\'s top-ranking article into the frequency counter, remove stop words, and review the top 50–100 terms. Compare against your own content\'s frequency list. Terms that appear frequently in the competitor\'s content but rarely or never in yours indicate topics and concepts you should add to achieve comparable topical coverage.',
  },
  {
    category: 'Applications',
    question: 'How is word frequency used in customer feedback analysis?',
    answer: 'Analyzing open-ended survey responses, product reviews, or support tickets with word frequency reveals the most common terms customers use to describe problems and benefits. High-frequency negative terms identify pain points; high-frequency positive terms identify selling propositions, enabling faster insight than manual review of thousands of responses.',
  },
  {
    category: 'Technical',
    question: 'What tokenization approach is best for word frequency analysis?',
    answer: 'For general text analysis, tokenize by splitting on whitespace and stripping punctuation, then lowercase all tokens. For code analysis, preserve capitalization and treat punctuation as meaningful. For multilingual text, use language-specific tokenizers. The right approach depends on whether you need case-sensitive, punctuation-sensitive, or Unicode-normalized analysis.',
  },
  {
    category: 'Technical',
    question: 'How do I handle multi-lingual text in word frequency analysis?',
    answer: 'Multi-lingual text requires either language detection followed by per-segment processing with language-appropriate stop word lists, or language-agnostic analysis that ignores stop words entirely. Applying a single-language stop word list to mixed-language text will fail to filter function words in the other language(s).',
  },
  {
    category: 'Technical',
    question: 'What minimum frequency threshold should I use?',
    answer: 'For a 1,000-word text, a minimum of 2 occurrences filters noise. For 10,000+ words, minimum 3–5 occurrences is reasonable. For corpus-level analysis (millions of words), minimum 10–50 occurrences is common. The right threshold depends on total length and how many unique terms you can meaningfully analyze.',
  },
  {
    category: 'Privacy',
    question: 'Is it safe to analyze confidential text with an online word frequency counter?',
    answer: 'Only if the tool processes text entirely client-side (in your browser) without sending data to a server. Always verify this before pasting confidential business documents, unpublished manuscripts, personal data, or proprietary research. For maximum security with sensitive text, use a local Python script or command-line tool with no network communication.',
  },
  {
    category: 'Comparison',
    question: 'How does word frequency analysis relate to readability scoring?',
    answer: 'Texts with higher proportions of low-frequency (rare) words are generally more complex and harder to read. While readability formulas like Flesch-Kincaid focus on syllable counts and sentence length, word frequency provides a complementary complexity signal. Academic and technical writing tends to use more low-frequency specialized vocabulary than general-audience writing.',
  },
  {
    category: 'Comparison',
    question: 'What is the difference between word frequency and word density?',
    answer: 'Word frequency is the raw count of how many times a word appears. Word density (or keyword density) is the frequency expressed as a percentage of total words: (count / total words) × 100%. Density is more useful for comparing across documents of different lengths, while raw frequency is more useful for understanding absolute importance within a single document.',
  },
  {
    category: 'Tools',
    question: 'How do I perform word frequency analysis in Python?',
    answer: 'Use collections.Counter with a regex tokenizer: `from collections import Counter; import re; words = re.findall(r"\\b[a-z]+\\b", text.lower()); freq = Counter(words); print(freq.most_common(20))`. For NLP-grade analysis with stop words and lemmatization, use NLTK or spaCy. For large datasets with TF-IDF, use scikit-learn\'s TfidfVectorizer.',
  },
  {
    category: 'Tools',
    question: 'How do I perform word frequency analysis from the command line?',
    answer: 'On Unix/Mac: `cat file.txt | tr \'[:upper:]\' \'[:lower:]\' | tr -cs \'a-z\' \'\\n\' | sort | uniq -c | sort -rn | head -50`. This pipeline lowercases text, splits on non-letter characters, sorts, counts unique occurrences, sorts by count descending, and shows the top 50 results.',
  },
  {
    category: 'General',
    question: 'What is lexical diversity and how does it relate to word frequency?',
    answer: 'Lexical diversity measures the variety of vocabulary in a text, typically as the Type-Token Ratio (TTR): unique words (types) divided by total words (tokens). A TTR near 1.0 means almost every word is unique; a low TTR means heavy repetition. Word frequency analysis produces both the type count and token count needed to calculate TTR, making it a direct indicator of vocabulary richness.',
  },
];

export const wordFrequencyCounterContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};

import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { getUserPlan, incrementWordsUsed } from '@/lib/subscription';

const OPENROUTER_API = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = process.env.OPENROUTER_MODEL ?? 'openrouter/auto';

// Matches the advertised free tier on /pro ("500 words per run").
// Pro users are metered against their plan's words_limit instead.
const FREE_WORDS_PER_RUN = 500;

const PROMPTS: Record<string, (text: string) => string> = {
  humanizer: (text) =>
    `Rewrite the following AI-generated text to sound natural, human, and conversational. Vary sentence lengths, use contractions where appropriate, avoid overly formal phrasing, and make it read like a real person wrote it. Return only the rewritten text with no commentary.\n\n${text}`,

  detector: (text) =>
    `Analyze the following text and determine whether it was likely written by an AI or a human. Provide:
1. A verdict: "Likely AI-generated", "Possibly AI-generated", "Likely human-written", or "Unclear"
2. A confidence score (e.g. 87% AI)
3. Key signals detected (3-5 bullet points)
4. A brief overall assessment (2-3 sentences)

Text:
${text}`,

  grammar: (text) =>
    `Check the following text for grammar, spelling, and punctuation errors. Return only the corrected text with all errors fixed - no explanations.\n\n${text}`,

  essay_checker: (text) =>
    `Review the following essay and provide:
1. Overall quality (score out of 10)
2. Structure and organization (score out of 10)
3. Argument strength (score out of 10)
4. Grammar and style (score out of 10)
5. Specific suggestions for improvement (3-5 bullet points)
6. Brief overall assessment

Essay:
${text}`,

  assignment_checker: (text) =>
    `Review the following assignment and provide:
1. Overall quality score (out of 10)
2. Whether it appears AI-generated (Yes/No/Possibly) with reasoning
3. Key strengths (2-3 bullet points)
4. Areas for improvement (2-3 bullet points)
5. Brief overall feedback

Assignment:
${text}`,

  readability: (text) =>
    `Analyze the readability of the following text and provide:
1. Estimated reading level (e.g. Grade 8, College)
2. Flesch Reading Ease estimate (0-100, higher = easier)
3. Average sentence length
4. Average word length
5. Top 3 suggestions to improve readability
6. Overall readability assessment (2-3 sentences)

Text:
${text}`,

  paraphraser: (text) =>
    `Paraphrase the following text. Keep the same meaning but use different words and sentence structures. Return only the paraphrased text - no commentary.\n\n${text}`,

  sentence_rewriter: (text) =>
    `Rewrite each sentence in the following text to be clearer and more engaging, keeping the meaning identical. Return only the rewritten text - no commentary.\n\n${text}`,

  paragraph_rewriter: (text) =>
    `Rewrite each paragraph in the following text to be clearer, more engaging, and better structured, keeping the core meaning intact. Return only the rewritten text - no commentary.\n\n${text}`,

  passive_voice_fixer: (text) =>
    `Rewrite the following text to eliminate passive voice, replacing with active voice. Only change passive voice sentences. Return only the rewritten text - no commentary.\n\n${text}`,

  tone_analyzer: (text) =>
    `Analyze the tone and style of the following text and provide:
1. Primary tone (e.g. formal, casual, persuasive, academic, conversational)
2. Secondary tones detected (if any)
3. Emotional register (positive, negative, neutral, mixed)
4. Writing style characteristics (3-5 bullet points)
5. Audience fit assessment
6. Overall tone summary (2-3 sentences)

Text:
${text}`,

  style_analyzer: (text) =>
    `Analyze the writing style of the following text and provide:
1. Writing style category (e.g. journalistic, academic, literary, conversational, technical)
2. Voice (first/second/third person)
3. Vocabulary level (basic/intermediate/advanced)
4. Sentence variety assessment
5. Distinctive style traits (3-5 bullet points)
6. Style improvement suggestions (2-3 bullet points)

Text:
${text}`,

  turnitin_checker: (text) =>
    `Analyze the following text for AI-content patterns that might be flagged by Turnitin. Provide:
1. AI-content risk level (Low/Medium/High)
2. Originality assessment
3. Phrasing patterns that could trigger detection (3-5 bullet points)
4. Suggestions to reduce detection risk (3-5 bullet points)
5. Overall assessment (2-3 sentences)

Note: This is an educational analysis tool only.

Text:
${text}`,

  originality_checker: (text) =>
    `Assess the originality of the following text. Provide:
1. Originality score estimate (out of 100)
2. Signs of original thinking vs. generic content
3. Formulaic or repeated phrases (3-5 points)
4. Suggestions to make it more original (3-5 bullet points)
5. Overall originality assessment (2-3 sentences)

Text:
${text}`,

  gptzero_checker: (text) =>
    `Analyze the following text using GPTZero-style criteria (perplexity and burstiness). Provide:
1. Perplexity level (Low/Medium/High - higher = more human-like)
2. Burstiness assessment (Low/Medium/High - higher = more human-like)
3. Overall verdict: Likely AI / Possibly AI / Likely Human
4. Confidence estimate (e.g. 78%)
5. Key signals that influenced the verdict (3-5 bullet points)

Text:
${text}`,

  copyleaks_checker: (text) =>
    `Analyze the following text using Copyleaks-style AI detection criteria. Provide:
1. AI probability estimate (percentage)
2. Human-written probability estimate (percentage)
3. Key AI indicators detected (3-5 bullet points)
4. Key human indicators (if any)
5. Verdict and overall assessment (2-3 sentences)

Text:
${text}`,

  research_paper_checker: (text) =>
    `Review the following research paper excerpt and provide:
1. Academic quality score (out of 10)
2. Citation style compliance (if citations present)
3. Argument and evidence strength
4. Clarity and academic tone
5. Specific weaknesses (3-5 bullet points)
6. Suggested improvements (3-5 bullet points)
7. Overall assessment (2-3 sentences)

Text:
${text}`,

  thesis_checker: (text) =>
    `Review the following thesis text and provide:
1. Thesis quality score (out of 10)
2. Clarity of thesis statement
3. Argument development
4. Evidence and support quality
5. Academic writing quality
6. Key issues to address (3-5 bullet points)
7. Improvement recommendations (3-5 bullet points)
8. Overall assessment (2-3 sentences)

Text:
${text}`,

  academic_humanizer: (text) =>
    `Rewrite the following academic text to sound more natural and human while maintaining academic tone. Vary sentence structures, avoid repetitive phrasing, make it read like a knowledgeable human scholar wrote it. Return only the rewritten text - no commentary.\n\n${text}`,

  cover_letter_humanizer: (text) =>
    `Rewrite the following cover letter to sound more authentic, personal, and human. Remove generic AI phrases, add personality, vary sentence structure. Return only the rewritten cover letter - no commentary.\n\n${text}`,

  email_humanizer: (text) =>
    `Rewrite the following email to sound more natural and conversational. Remove stiff AI phrasing, keep the core message. Return only the rewritten email - no commentary.\n\n${text}`,

  resume_humanizer: (text) =>
    `Rewrite the following resume content to sound more authentic. Remove generic buzzwords, vary phrasing, make bullet points feel like real experiences. Return only the rewritten resume content - no commentary.\n\n${text}`,

  essay_rewriter: (text) =>
    `Rewrite the following essay to be more engaging, original, and human-sounding. Improve structure, vary sentence lengths, strengthen arguments, eliminate AI patterns. Return only the rewritten essay - no commentary.\n\n${text}`,

  linkedin_rewriter: (text) =>
    `Rewrite the following LinkedIn profile content to sound more authentic, engaging, and human. Remove corporate jargon, add personality. Return only the rewritten content - no commentary.\n\n${text}`,

  product_description_improver: (text) =>
    `Improve the following product description to be more compelling, clear, and customer-focused. Highlight benefits over features, make it sound human. Return only the improved description - no commentary.\n\n${text}`,

  press_release_polisher: (text) =>
    `Polish the following press release to be more professional, newsworthy, and engaging. Tighten the language, follow press release conventions. Return only the polished press release - no commentary.\n\n${text}`,

  meta_description_generator: (text) =>
    `Generate an SEO-optimized meta description for the following content. Must be 150-160 characters, include the main keyword naturally, be compelling. Return only the meta description - no commentary.\n\nContent:\n${text}`,

  title_tag_generator: (text) =>
    `Generate 5 SEO-optimized title tags for the following content. Each must be 50-60 characters, include the primary keyword, be compelling. Return as a numbered list.\n\nContent:\n${text}`,

  alt_text_generator: (text) =>
    `Generate descriptive, SEO-friendly alt text based on the following image description. Provide 3 options: brief (under 50 chars), standard (50-100 chars), detailed (100-150 chars). Return as a numbered list.\n\nImage context:\n${text}`,

  blog_post_validator: (text) =>
    `Validate the following blog post and provide:
1. Overall quality score (out of 10)
2. SEO readiness (out of 10)
3. Readability score (out of 10)
4. Content completeness
5. Issues to fix (3-5 bullet points)
6. SEO improvements (3-5 bullet points)
7. Verdict and next steps (2-3 sentences)

Blog post:
${text}`,

  medieval_translator: (text) =>
    `Translate the following modern English text into authentic medieval English style, using archaic vocabulary, thee/thou/thy pronouns, and period-appropriate expressions. Return only the translated text - no commentary.\n\n${text}`,

  middle_english_translator: (text) =>
    `Translate the following modern English text into Middle English (the style of Chaucer, circa 1400s), using appropriate archaic spelling, vocabulary, and grammar. Return only the translated text - no commentary.\n\n${text}`,

  old_english_translator: (text) =>
    `Translate the following modern English text into Old English (Anglo-Saxon style, circa 900 AD), approximating the vocabulary, grammar, and feel of that era. Return only the translated text - no commentary.\n\n${text}`,

  shakespearean_translator: (text) =>
    `Translate the following modern English text into authentic Shakespearean English, using thee/thou/thy, hath/doth/wilt, iambic feel, and Elizabethan vocabulary. Return only the translated text - no commentary.\n\n${text}`,

  fancy_english_translator: (text) =>
    `Rewrite the following text in an extremely formal, flowery, and sophisticated English style - using elaborate vocabulary, complex sentence structures, and a grandiose tone. Return only the rewritten text - no commentary.\n\n${text}`,

  gibberish_translator: (text) =>
    `Transform the following text into funny, whimsical gibberish that sounds like a made-up language but is still vaguely recognizable. Add random syllables, swap vowels, and make it playful. Return only the gibberish version - no commentary.\n\n${text}`,

  ganglish_translator: (text) =>
    `Rewrite the following text in a street slang / urban gang style with heavy use of slang terms, abbreviations, and casual street vernacular. Keep it fun and exaggerated. Return only the rewritten text - no commentary.\n\n${text}`,

  simlish_translator: (text) =>
    `Translate the following text into Simlish - the fictional language from The Sims game. Use characteristic Simlish sounds and phrases like "Sul sul", "Dag dag", "Nooboo", "Hooba noobie", etc. Make it sound authentically Simlish. Return only the Simlish translation - no commentary.\n\n${text}`,

  navajo_translator: (text) =>
    `Translate the following text into the Navajo language (Dine Bizaad). Provide an accurate translation using proper Navajo vocabulary and grammar. Return only the Navajo translation - no commentary.\n\n${text}`,

  cartinese_translator: (text) =>
    `Translate the following text into "Cartinese" - the mumble rap style associated with Playboi Carti, featuring heavy use of "la la la", "ra ra ra", baby voice phonetics, and melodic mumble patterns. Make it sound like Carti lyrics. Return only the translation - no commentary.\n\n${text}`,

  playboi_carti_translator: (text) =>
    `Rewrite the following text in the style of Playboi Carti's lyrics - use "ra", "la", "ya", baby voice, melodic mumbling, hype words like "gang", "slatt", "woo", and his characteristic ad-libs. Return only the rewritten text - no commentary.\n\n${text}`,

  word_descrambler: (text) =>
    `Given the scrambled letters "${text.trim()}", list all valid English words that can be formed using some or all of those letters. Group by word length (2-letter, 3-letter, 4-letter, etc.). Include as many valid words as possible. Return only the grouped word list - no explanations.`,

  ambigram_generator: (text) =>
    `Create an ambigram concept for the two names: ${text.trim()}. An ambigram is a typographic design where a word or name can be read in more than one way (rotated 180°, mirrored, etc.). Provide: 1. The type of ambigram that works best for these names (rotational, mirror, or chain), 2. A detailed description of how the letters would interlock or transform, 3. Which letters from each name can be shared or morphed into each other, 4. Recommended font styles and design tips, 5. Step-by-step instructions for a designer to recreate this. Be creative and specific.`,

  species_name_generator: (text) =>
    `Generate 10 creative scientific-style species names based on these keywords or description: "${text.trim()}". For each name provide: 1. The binomial name (Genus species in italics format), 2. What kind of creature it is, 3. A brief 1-sentence description of what makes it unique. Make the names sound authentically Latin/Greek scientific. Return as a numbered list.`,

  themed_name_generator: (text) => text,
};

export async function POST(req: NextRequest) {
  try {
    const { tool, text } = await req.json();

    if (!text?.trim()) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 });
    }

    const promptFn = PROMPTS[tool];
    if (!promptFn) {
      return NextResponse.json({ error: `Unknown tool: ${tool}` }, { status: 400 });
    }

    // ── Quota enforcement ────────────────────────────────────────────────
    // Pro: metered against the plan's words_limit (null = unlimited).
    // Free / signed-out: capped per run, matching the advertised free tier.
    const wordCount = text.trim().split(/\s+/).length;
    const session = await auth.api.getSession({ headers: await headers() });
    const userId = session?.user?.id ?? null;
    let isPro = false;

    if (userId) {
      const plan = await getUserPlan(userId);
      isPro = plan.isPro;
      if (isPro && plan.wordsLimit !== null && plan.wordsUsed + wordCount > plan.wordsLimit) {
        return NextResponse.json(
          {
            error: `This request (${wordCount.toLocaleString()} words) would exceed your plan's remaining quota (${Math.max(0, plan.wordsLimit - plan.wordsUsed).toLocaleString()} of ${plan.wordsLimit.toLocaleString()} words left). Your quota resets at renewal.`,
            quotaExceeded: true,
          },
          { status: 403 },
        );
      }
    }

    if (!isPro && wordCount > FREE_WORDS_PER_RUN) {
      return NextResponse.json(
        {
          error: `Free tools are limited to ${FREE_WORDS_PER_RUN} words per run (you sent ${wordCount.toLocaleString()}). Upgrade to Pro for 50,000+ words.`,
          upgradeRequired: true,
        },
        { status: 403 },
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey || apiKey === 'your-openrouter-key-here') {
      return NextResponse.json({ error: 'API key not configured.' }, { status: 500 });
    }

    const res = await fetch(OPENROUTER_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gptcleanuptools.com',
        'X-Title': 'GPT Cleanup Tools',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: 'user', content: promptFn(text) }],
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[ai-tool] OpenRouter error:', res.status, err);
      return NextResponse.json({ error: `AI service error (${res.status}): ${err}` }, { status: 502 });
    }

    const data = await res.json();
    const output = data.choices?.[0]?.message?.content ?? '';

    // Record usage only after a successful run so failures never burn quota.
    if (userId && isPro) {
      await incrementWordsUsed(userId, wordCount);
    }

    return NextResponse.json({ output });
  } catch (err) {
    console.error('[ai-tool]', err);
    return NextResponse.json({ error: 'Failed to process text. Please try again.' }, { status: 500 });
  }
}

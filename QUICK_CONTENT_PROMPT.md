# Quick Content Generation Prompt

## For AI Content Generator (Claude, ChatGPT, etc.)

Generate 3,000-word SEO-optimized articles for these 3 tools:

1. **Combination Generator** - `/combination-generator`
2. **Line Combination Generator** - `/line-combination-generator`  
3. **Permutation Generator** - `/permutation-generator`

---

## Requirements Per Tool:

### Article Content (2,500-2,800 words):
- Must include keyword "all possible combinations generator" naturally throughout
- Cover: definitions, how it works, mathematical formulas, use cases, features, best practices
- Include tables, examples, and practical scenarios
- Use H2/H3 headings properly
- Natural keyword integration (1-2% primary keyword density)

### FAQ Section (25+ questions, 200-500 words total):
- Minimum 25 detailed FAQs per tool
- Categories: General, Input, Output, Usage, Technical, Security, Limitations
- Each answer: 50-150 words
- Include target keywords naturally in questions/answers

---

## Target Keywords Per Tool:

### Combination Generator:
- "all possible combinations generator" (PRIMARY)
- combination generator, combinations calculator, generate all combinations, combination finder, online combination tool

### Line Combination Generator:
- line combination generator, combine lines generator, text line combinations, multi-line combination tool, all possible line combinations

### Permutation Generator:
- permutation generator, all possible permutations, permutation calculator, generate permutations, arrangement generator

---

## Output Format:

**Article:** JSX/HTML ready content in a `<section>` with prose classes
**FAQs:** TypeScript array with category, question, answer structure

---

## Full detailed prompt available in: `CONTENT_GENERATION_PROMPT.md`

# FAQ template by tool group

Use this to keep FAQs consistent, keyword-aware, and flowing well across tool pages.

## Keyword in questions

Include the **tool name** (primary keyword) in **about half** of the FAQ questions—not every one. Use it where it reads naturally:

- **Always:** What is [tool name]? | Is the [tool name] free? | How do I use the [tool name]? | Does the [tool name] work on mobile? | Does the [tool name] store my text / send data to a server?
- **Often:** When would I use a [tool name]? | Do I need to install the [tool name]? | Can I use the [tool name] for [use case]?
- **Sometimes:** Leave generic when the question is clearly about the page (e.g. “What is an ambigram?” on an ambigram page).

Avoid stuffing: if the question is “What does trim do?” on a remove-whitespace page, “remove whitespace tool” in the question is enough.

## Recommended FAQ order (flow)

Group FAQs in this order so the block reads logically:

1. **General** – What is it? Is it free? Do I need an account/install? What other tools do you have?
2. **Usage** – How do I use it? How do I copy/export? Step-by-step.
3. **Technical** – How does it work? What is [concept]? Accuracy, limits, characters.
4. **Use cases** – When would I use it? Can I use it for X, Y, Z?
5. **Privacy** – Is my data sent to a server? Do you store my text/input?
6. **Limits** – Character limit? How many per run? Rate limits?
7. **Compatibility** – Does it work on mobile? Browser?
8. **Workflow / Formatting** – Can I combine with other tools? Formatting tips.
9. **Related tools** (optional) – One FAQ: “What other tools do you have?” with a generic answer.

Within each category, put the most important or common question first.

## By group

### Translators (e.g. Shakespearean, Ganglish, Old English, Navajo)

- Tool name in questions: “Shakespearean translator”, “Ganglish translator”, “Old English translator”, “Navajo translator”.
- Categories: General → Usage → Technical → Use cases → Privacy → Limits → Compatibility → Workflow → Related.
- Typical questions: What is [X] translator? | Is the [X] translator free? | How do I use the [X] translator? | Does the [X] translator work on mobile? | Does the [X] translator store my text?

### Name generators (e.g. God & Goddess, Muslim, Transformers, Two-name ambigram)

- Tool name in questions: “god and goddess name generator”, “Muslim name generator”, “two-name ambigram generator”.
- Categories: General → Usage → Use cases → Privacy → Compatibility → Limits → Technical → Workflow → Related.
- Typical questions: What is a [X] name generator? | Is the [X] name generator free? | How do I use the [X] name generator? | Does the [X] name generator work on mobile? | How many names can I generate with the [X] name generator?

### Text utilities (e.g. Remove line breaks, Remove whitespace, Word descrambler)

- Tool name in questions: “remove line breaks tool”, “remove whitespace tool”, “word descrambler”.
- Categories: General → Usage → Technical → Formatting → Privacy → Workflow → Compatibility → Limits → Use cases → SEO (if relevant).
- Typical questions: What does the [X] tool do? | Is the [X] tool free? | How do I use the [X] tool? | Does the [X] tool work on mobile? | Is my text sent to a server when I use the [X] tool?

## Checklist

- [ ] At least 23 FAQs per page.
- [ ] Tool name (keyword) in 5–10 questions, naturally.
- [ ] Categories in the order above (or close).
- [ ] Answers substantive (roughly 20+ words average); no one-line answers.
- [ ] Same `faqs` array passed to `FAQSection` and `FaqJsonLd`.

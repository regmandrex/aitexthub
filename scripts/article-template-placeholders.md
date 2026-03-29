# Article template placeholders

Use these placeholders when writing or generating tool-page articles so copy stays on-topic and avoids cross-tool spam. Fill them from the tool’s config (see `scripts/config/` and `scripts/fill-article-template.mjs`).

## Placeholders

| Placeholder        | Example (Ganglish)     | Use for |
|-------------------|------------------------|--------|
| `{tool_name}`     | Ganglish translator    | H2s, intro, body, FAQs |
| `{tool_name_lower}`| ganglish translator    | When you need lowercase |
| `{slug}`          | ganglish-translator    | URLs, paths, code |
| `{primary_keyword}`| Ganglish translator   | Same as tool_name unless you define a separate SEO keyword |
| `{short_description}` | Translate text into Ganglish… | Meta description, one-liners |
| `{what_it_does}`  | converts English into Ganglish-style text | “This tool {what_it_does}.” |
| `{language_style}`| Ganglish               | “What is {language_style}?” |

## Rules when generating articles

- **One tool per page.** Mention only `{tool_name}` (and variants) in the write-up. Do not list “space remover”, “strip HTML”, “Simlish translator”, “word descrambler”, “species name generator”, “ambigram”, “visit the site”, or “full list of tools” in the article body.
- **Related tools:** At most one short, generic line (e.g. “Use a plain-text tool to clean pasted content”) and one FAQ like “What other tools do you offer?” with a generic answer (e.g. “Our site offers other translators and text tools; explore the homepage.”).
- **FAQ questions:** Include the tool name in questions where natural (e.g. “Does the {tool_name} work on mobile?”).
- Follow `docs/tool-page-seo-checklist.md`: ~3k words write-up, ≥23 FAQs, tool name in 2–4 H2s, structure (intro, How it works, Who/Why, How to use, Limitations, FAQ).

## Using the fill script

```bash
# List tools in a group
node scripts/fill-article-template.mjs --list translators

# Fill a template for one tool (reads from stdin or a template file)
node scripts/fill-article-template.mjs translators ganglish-translator < template.txt

# Output is filled copy you can paste into the page or use as a generation prompt.
```

Config files in `scripts/config/` define per-group tools with `slug`, `toolName`, and optional `primaryKeyword`, `shortDescription`, `whatItDoes`, `languageStyle`.

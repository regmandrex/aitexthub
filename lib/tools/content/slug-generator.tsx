import React from 'react';
import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>Slug Generator: Free Online URL Slug Creator for SEO-Friendly URLs</h2>
        <p>
          A &quot;slug&quot; is the URL-friendly version of a title or name "” the part of a URL that identifies a specific page in a human-readable way. Where a page title might be &quot;The Best JavaScript Frameworks in 2024: A Complete Guide!&quot;, the slug becomes <code>the-best-javascript-frameworks-in-2024-a-complete-guide</code>. Properly formatted slugs are essential for SEO, user experience, and technical URL hygiene. Our free slug generator converts any text "” blog post titles, product names, category labels, API endpoint names, file names "” into clean, URL-safe slugs following best practices for search engine optimization and web standards.
        </p>
        <p>
          Generate slugs from plain English, languages with accented characters (French, German, Spanish, Portuguese, Scandinavian languages), Cyrillic, Arabic, Chinese, Japanese, and other scripts with automatic transliteration. Customize the separator (hyphen, underscore, period), case (lowercase, uppercase, or as-is), and stop word removal behavior. All processing runs in your browser "” no text is sent to any server.
        </p>

        <h2>What Is a URL Slug?</h2>
        <p>
          The term &quot;slug&quot; comes from the publishing world, where it referred to a short identifier for a news article used in editorial systems. In web development, a URL slug is the human-readable segment of a URL that identifies the resource, typically appearing after the domain and path:
        </p>
        <p>
          <code>https://blog.example.com/posts/<strong>the-best-javascript-frameworks-2024</strong></code>
        </p>
        <p>
          The slug is everything after the last slash (or between slashes in hierarchical paths). It differs from a URL path parameter (which is a database ID) in that it is semantic "” it describes the content rather than just identifying it with a number.
        </p>
        <p>
          Well-crafted slugs serve multiple purposes simultaneously:
        </p>
        <ul>
          <li>
            <strong>SEO</strong>: search engines use URL content as a ranking signal. A URL containing the target keyword ranks better than a URL with a random ID. Google&apos;s guidelines explicitly recommend using words in URLs.
          </li>
          <li>
            <strong>User experience</strong>: a user looking at a URL can understand what the page is about before clicking. Meaningful URLs build trust and improve click-through rates.
          </li>
          <li>
            <strong>Shareability</strong>: a descriptive URL shared in a messaging app gives the recipient context even before they click.
          </li>
          <li>
            <strong>Analytics</strong>: meaningful URL paths make analytics reports readable "” you can understand which pages perform well without looking up IDs in a database.
          </li>
          <li>
            <strong>Copy-paste safety</strong>: URLs with only alphanumeric characters and hyphens copy correctly from PDFs, emails, and documents without encoding issues.
          </li>
        </ul>

        <h2>What Makes a Good Slug?</h2>

        <h3>Lowercase Only</h3>
        <p>
          URL paths are case-sensitive on most web servers (Linux/Unix). <code>/Blog/Post</code> and <code>/blog/post</code> are technically different URLs. Using all-lowercase slugs avoids duplicate content issues (the same page accessible at two different URLs), simplifies URL handling in code, and prevents case-sensitivity bugs when URLs are typed manually or shared in case-mangling contexts like email clients.
        </p>
        <p>
          Google and all major search engines treat URL case as meaningful. If <code>/Blog/Post</code> and <code>/blog/post</code> both exist, you have two competing URLs for the same content "” splitting SEO link equity and potentially triggering duplicate content penalties. Canonical URLs and 301 redirects can fix this, but avoiding it from the start by using only lowercase is the cleanest approach.
        </p>

        <h3>Hyphens, Not Underscores</h3>
        <p>
          Google treats hyphens as word separators in URLs. A URL containing <code>javascript-frameworks</code> is treated as containing the words &quot;javascript&quot; and &quot;frameworks&quot; separately. Underscores are NOT treated as word separators "” <code>javascript_frameworks</code> is treated as a single compound word &quot;javascript_frameworks&quot;, which no one searches for.
        </p>
        <p>
          This was explicitly confirmed by Google in 2009 and remains policy. Always use hyphens in URL slugs for maximum SEO benefit. Our generator defaults to hyphens; underscores are available for cases where the consuming system requires them (some programming conventions, Python package names, database column names).
        </p>

        <h3>Remove Special Characters</h3>
        <p>
          Characters outside the ASCII alphanumeric range and a few safe characters (<code>- _ . ~</code>) must be percent-encoded in URLs. A title like &quot;What&apos;s New?&quot; becomes <code>what%27s-new%3F</code> when naively URL-encoded "” which is ugly, difficult to type, and breaks in some contexts. The correct approach is to remove special characters entirely (or transliterate accented characters to their ASCII equivalents) during slug generation.
        </p>

        <h3>Remove or Replace Stop Words</h3>
        <p>
          Stop words are common words with little semantic value for SEO: &quot;a&quot;, &quot;an&quot;, &quot;the&quot;, &quot;and&quot;, &quot;or&quot;, &quot;but&quot;, &quot;in&quot;, &quot;on&quot;, &quot;at&quot;, &quot;to&quot;, &quot;for&quot;, &quot;of&quot;, &quot;with&quot;, &quot;by&quot;, &quot;from&quot;, &quot;is&quot;, &quot;are&quot;, &quot;was&quot;, &quot;were&quot;.
        </p>
        <p>
          &quot;The Best Guide to JavaScript Frameworks in 2024&quot; → with stop word removal → <code>best-guide-javascript-frameworks-2024</code>. Shorter, still descriptive, and emphasizes the meaningful keywords. Most CMS systems (WordPress, Ghost, Strapi) offer stop word removal as a slug generation option.
        </p>
        <p>
          Stop word removal is generally recommended for blog post slugs but should be used with judgment "” sometimes the stop word is semantically important (&quot;is-this-a-bug&quot; vs &quot;this-bug&quot;) or omitting it changes the meaning.
        </p>

        <h3>Limit Length</h3>
        <p>
          Google displays up to 60 characters in URL breadcrumbs in search results. Long slugs are truncated in display, reducing their value. Generally, aim for slugs under 60 characters. The entire URL (including domain and path) should ideally be under 100 characters, though there is no hard technical limit.
        </p>
        <p>
          More importantly, long slugs dilute keyword density. If your target keyword is &quot;javascript frameworks&quot; and your slug is &quot;the-ultimate-comprehensive-guide-to-the-best-javascript-frameworks-in-2024&quot;, the keyword appears at the end of a very long URL. A tighter slug like &quot;javascript-frameworks-guide-2024&quot; puts the keyword closer to the domain.
        </p>

        <h3>Be Unique</h3>
        <p>
          Every slug in your site should be unique. Two pages with the same slug create URL conflicts "” one overwrites the other, or one becomes inaccessible. CMS systems typically handle this by appending a number (<code>my-post-2</code>, <code>my-post-3</code>) but this breaks the readability the slug was supposed to provide. Plan your URL structure to avoid needing disambiguation suffixes.
        </p>

        <h2>Transliteration: Non-Latin Characters in Slugs</h2>
        <p>
          Many languages use characters outside the Latin alphabet. While modern browsers and web standards support Unicode in URLs (internationalized domain names, Unicode path characters), Unicode URLs create practical problems: they are percent-encoded when copied, display inconsistently across browsers and tools, and can be fragile in systems not designed for Unicode URLs.
        </p>
        <p>
          Transliteration converts non-Latin characters to their closest Latin equivalents:
        </p>
        <ul>
          <li>Accented Latin: é → e, ü → u, ñ → n, ç → c, ø → o, å → a</li>
          <li>German: ä → ae, ö → oe, ü → ue, ß → ss</li>
          <li>Cyrillic: ÐŸÑ€Ð¸Ð²ÐµÑ‚ → privet</li>
          <li>Greek: Î•Î»Î»Î¬Î´Î± → Ellada</li>
          <li>Chinese: ä½ å¥½ → ni hao</li>
          <li>Japanese: ã“ã‚“ã«ã¡ã¯ → konnichiwa (hiragana romanization)</li>
          <li>Arabic: Ù…Ø±Ø­Ø¨Ø§ → mrhba (transliterated, as Arabic has no vowel letters in most positions)</li>
        </ul>
        <p>
          Our generator uses the Unicode Consortium&apos;s CLDR (Common Locale Data Repository) transliteration rules for maximum accuracy across languages. For Chinese and Japanese, we use standard Pinyin and Hepburn romanization respectively.
        </p>

        <h2>Slug Generation in CMS and Framework Ecosystems</h2>

        <h3>WordPress</h3>
        <p>
          WordPress generates slugs from post titles automatically using its <code>sanitize_title()</code> function, which removes HTML, special characters, and converts to lowercase with hyphens. You can customize the auto-generated slug before publishing. WordPress stores the slug in the <code>post_name</code> column of the <code>wp_posts</code> table. WordPress also supports custom permalink structures where slugs appear within date-based or category-based URL patterns: <code>/2024/01/%postname%/</code> or <code>/%category%/%postname%/</code>.
        </p>
        <p>
          When migrating a WordPress site or changing its permalink structure, proper 301 redirect handling becomes critical. The Redirection plugin for WordPress can automatically create redirects when post slugs change, preserving link equity during site restructuring. Always test slugs in staging before changing slugs on live pages with established backlinks.
        </p>

        <h3>Shopify</h3>
        <p>
          Shopify auto-generates URL handles (Shopify&apos;s term for slugs) from product titles and collection names. The handle is the unique identifier for a product in URLs: <code>/products/my-product-handle</code>. Shopify handles are lowercase, hyphenated, and stripped of special characters. You can edit handles in the product editor under the &quot;Search engine listing preview&quot; section. Shopify maintains automatic redirects when handles change, which protects SEO equity but can accumulate many redirects over time.
        </p>

        <h3>Webflow</h3>
        <p>
          Webflow generates slugs from CMS collection item names. The slug field is editable directly in the CMS editor and applies the same lowercase-hyphen convention. Webflow&apos;s CMS slug validation prevents duplicate slugs within a collection. For Webflow sites with large product catalogs or blog archives, bulk slug editing via the Webflow API is the most efficient approach when renaming content at scale.
        </p>

        <h3>Ghost</h3>
        <p>
          Ghost generates slugs from post titles using a similar algorithm. Ghost slugs are URL-encoded and stripped of special characters. Custom slugs can be set in the post settings panel. Ghost&apos;s URL structure is straightforward: <code>/post-slug</code> for posts, <code>/tag/tag-slug</code> for tags, and <code>/author/author-slug</code> for author pages.
        </p>

        <h3>Strapi</h3>
        <p>
          Strapi, the Node.js headless CMS, includes a <code>slugify</code> plugin that auto-generates slugs from title fields. Configuration options include separator, lowercase enforcement, and strict mode (removes all non-alphanumeric characters except the separator). Strapi&apos;s API makes it easy to query content by slug: <code>GET /api/articles?filters[slug][$eq]=my-slug</code>.
        </p>

        <h3>Django</h3>
        <p>
          Django provides <code>django.utils.text.slugify()</code> which converts any string to a slug following Django&apos;s conventions: lowercase, hyphens, removing characters that aren&apos;t alphanumerics, hyphens, or underscores. The <code>SlugField</code> model field uses this automatically with <code>prepopulated_fields</code> in the Django admin.
        </p>

        <h3>Rails</h3>
        <p>
          Rails provides <code>ActiveSupport::Inflector.parameterize()</code>: <code>&quot;Hello World!&quot;.parameterize</code> → <code>&quot;hello-world&quot;</code>. The popular <code>friendly_id</code> gem adds slug generation with history (preserving old slugs as redirects), scoping, and UUID fallbacks for Rails models.
        </p>

        <h3>Node.js / JavaScript</h3>
        <p>
          The <code>slugify</code> npm package: <code>slugify(&apos;Hello World!&apos;, &#123; lower: true, strict: true &#125;)</code> → <code>&apos;hello-world&apos;</code>. Supports locale-aware transliteration, custom character maps, and stop word removal with additional configuration. The <code>@sindresorhus/slugify</code> package is a modern alternative with full Unicode support and sensible defaults.
        </p>

        <h2>Programmatic Slug Generation Code Examples</h2>

        <h3>JavaScript (Vanilla)</h3>
        <p>
          A robust slug function for modern JavaScript:
        </p>
        <pre>{`function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\\s-]/g, '')     // Remove special chars
    .trim()
    .replace(/[\\s_]+/g, '-')          // Spaces/underscores → hyphens
    .replace(/-+/g, '-');              // Collapse multiple hyphens
}`}</pre>

        <h3>Python</h3>
        <p>
          Using the <code>python-slugify</code> package (recommended for production):
        </p>
        <pre>{`pip install python-slugify
from slugify import slugify

slug = slugify("Hello World! Café au lait", allow_unicode=False)
# → "hello-world-cafe-au-lait"

# With custom separator
slug = slugify("My Article Title", separator="_")
# → "my_article_title"
`}</pre>

        <h3>PHP (Laravel)</h3>
        <p>
          <code>Str::slug(&apos;Hello World! Café&apos;, &apos;-&apos;)</code> → <code>&apos;hello-world-cafe&apos;</code>. Built on iconv and transliteration support in PHP. WordPress also provides <code>sanitize_title(&apos;Hello World!&apos;)</code> which handles transliteration for the configured locale.
        </p>

        <h3>Go</h3>
        <p>
          The <code>github.com/gosimple/slug</code> package: <code>slug.Make(&quot;Hello World!&quot;)</code> → <code>&quot;hello-world&quot;</code>. Supports over 40 languages&apos; transliteration through a comprehensive character map. Ideal for Go-based static site generators and web services.
        </p>

        <h2>Slug Best Practices for SEO</h2>
        <p>
          Google&apos;s John Mueller and Gary Illyes have provided the following guidance on URL structure and slugs that forms the basis for SEO best practices:
        </p>
        <ul>
          <li>Use real words that describe the content "” avoid meaningless IDs or codes in URLs</li>
          <li>Keep URLs as short as possible while remaining descriptive</li>
          <li>Use hyphens as word separators "” never underscores</li>
          <li>Avoid excessive subdirectories "” 2-3 levels is usually sufficient</li>
          <li>Changing URL slugs after a page is indexed harms SEO unless proper 301 redirects are set up</li>
          <li>Include the target keyword in the slug, but don&apos;t keyword-stuff</li>
          <li>Avoid dates in slugs for evergreen content "” <code>/best-laptops</code> is better than <code>/best-laptops-2022</code> for content you&apos;ll update</li>
          <li>Keep the primary keyword as close to the domain root as possible in the URL path</li>
        </ul>

        <h2>URL Slug Architecture: Flat vs Hierarchical</h2>
        <p>
          One of the most consequential decisions in site architecture is whether to use flat URLs (<code>/post-slug</code>) or hierarchical URLs (<code>/category/post-slug</code>). Both approaches have trade-offs:
        </p>
        <p>
          <strong>Flat URLs</strong> are shorter, avoid the problem of content changing categories, and concentrate all link equity at the top level of the domain. They work best for sites where content does not have a strict categorical hierarchy "” portfolios, landing pages, SaaS product pages.
        </p>
        <p>
          <strong>Hierarchical URLs</strong> provide contextual signals to both users and search engines. <code>/blog/category/post-slug</code> immediately communicates that this is a blog post in a specific category. They can also help avoid slug conflicts when the same topic has multiple posts. The downside: if a post moves categories, the URL changes, requiring redirects. Hierarchical URLs also make individual pages harder to share (longer URLs) and can dilute link equity across nested levels.
        </p>
        <p>
          For most content sites (blogs, documentation, news), a single level of path prefix is optimal: <code>/blog/post-slug</code> or <code>/docs/topic-slug</code>. Avoid going deeper than three levels unless the content hierarchy genuinely benefits from it.
        </p>

        <h2>URL Slug Conflicts and Resolution</h2>
        <p>
          When two pages would generate the same slug (&quot;Introduction&quot; and &quot;Introduction&quot;), a conflict resolution strategy is needed. Common approaches:
        </p>
        <ul>
          <li>
            <strong>Numeric suffix</strong>: <code>introduction-2</code>, <code>introduction-3</code>. Simple but visually ugly.
          </li>
          <li>
            <strong>Date suffix</strong>: <code>introduction-2024-01</code>. Adds temporal context but makes longer slugs.
          </li>
          <li>
            <strong>Parent path context</strong>: <code>/products/introduction</code> and <code>/blog/introduction</code>. Resolved by hierarchy, not suffix.
          </li>
          <li>
            <strong>UUID suffix</strong>: <code>introduction-550e8400</code>. Unique but less readable.
          </li>
          <li>
            <strong>Disambiguating term</strong>: <code>introduction-to-react</code> vs <code>introduction-to-vue</code>. Best option when a term is available "” produces meaningful slugs.
          </li>
        </ul>

        <h2>Internationalization: Slugs for Global Sites</h2>
        <p>
          Sites targeting multiple languages and locales face unique slug challenges. Two approaches are common:
        </p>
        <p>
          <strong>Transliterated slugs</strong>: All slugs are in ASCII regardless of the page language. A French page titled &quot;Meilleurs Restaurants à Paris&quot; gets slug <code>meilleurs-restaurants-a-paris</code>. This approach maximizes URL portability and avoids percent-encoding issues, but loses the SEO benefit of having the keyword in the native script for searches conducted in that language.
        </p>
        <p>
          <strong>Unicode slugs</strong>: Slugs use the native script. The French page becomes <code>/meilleurs-restaurants-à-paris</code> (with the accented character preserved). Modern browsers display these correctly, and they provide strong SEO signals for searches in that language. The downside: when copied and pasted in older software or some email clients, these URLs may percent-encode the non-ASCII characters.
        </p>
        <p>
          Most modern international SEO practitioners recommend Unicode slugs for non-Latin-script languages (Chinese, Japanese, Korean, Arabic, Hebrew, Thai) and transliterated slugs for Latin-script languages with accented characters (French, German, Spanish). Google supports both approaches, but Unicode slugs in native script tend to perform better for searches in those languages.
        </p>

        <h2>Slug Generators vs URL Encoders: Key Differences</h2>
        <p>
          A slug generator and a URL encoder serve different purposes and should not be confused. A <strong>slug generator</strong> produces clean, human-readable URL segments by removing or replacing characters that are not URL-friendly. The process is lossy "” information (special characters, accents, capitalization) is deliberately discarded to create a clean result.
        </p>
        <p>
          A <strong>URL encoder</strong> (percent-encoder) converts any character to its percent-encoded equivalent, preserving all information: &quot;Hello World!&quot; → <code>Hello%20World%21</code>. URL encoding is necessary for embedding arbitrary data in URLs (query parameters, path segments with special characters), but the result is not human-readable and is inappropriate as a page slug.
        </p>
        <p>
          Use slug generation for creating page URLs. Use URL encoding when passing data as URL parameters or when a URL must preserve all characters exactly.
        </p>

        <h2>Privacy and Performance</h2>
        <p>
          All slug generation runs entirely in your browser using JavaScript. No title text, generated slugs, or transliteration lookups are sent to our servers. The tool processes Unicode transliteration locally using bundled character maps. Privacy matters when converting proprietary product names, internal project titles, or client-specific content "” none of it reaches our servers. The generator handles batches of slugs (multiple lines) instantly.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a URL slug?',
    answer:
      'A URL slug is the human-readable segment of a URL that identifies a specific page. In https://example.com/blog/my-awesome-post, the slug is "my-awesome-post". Slugs use lowercase letters, numbers, and hyphens "” no spaces, special characters, or uppercase letters.',
  },
  {
    category: 'General',
    question: 'Why are URL slugs important for SEO?',
    answer:
      'Search engines use URL content as a ranking signal. A URL containing your target keyword ranks better than a URL with a random ID. Google explicitly recommends using descriptive words in URLs. Hyphens in URLs are treated as word separators, so "javascript-frameworks" signals relevance for both "javascript" and "frameworks" searches.',
  },
  {
    category: 'General',
    question: 'What characters are allowed in URL slugs?',
    answer:
      'URL slugs should contain only: lowercase letters (a-z), numbers (0-9), and hyphens (-). All other characters should be removed or replaced. Spaces become hyphens. Accented characters (é, ü, ñ) should be transliterated to their ASCII equivalents (e, u, n). Special characters (!, ?, &) are removed entirely.',
  },
  {
    category: 'General',
    question: 'What is a URL slug generator?',
    answer:
      'A URL slug generator is a tool that converts text "” typically a blog post title, product name, or page heading "” into a URL-safe slug. The generator removes special characters, replaces spaces with hyphens, converts uppercase to lowercase, and strips accents from non-ASCII characters. The result is a clean, readable URL segment like "best-javascript-frameworks-2024" that search engines and users can easily parse.',
  },
  {
    category: 'Best Practices',
    question: 'Should I use hyphens or underscores in URL slugs?',
    answer:
      'Always use hyphens. Google treats hyphens as word separators "” "javascript-frameworks" contains the searchable words "javascript" and "frameworks". Underscores are NOT treated as word separators "” "javascript_frameworks" is treated as one unsearchable compound word. This was confirmed by Google in 2009 and remains policy.',
  },
  {
    category: 'Best Practices',
    question: 'Should URL slugs be lowercase?',
    answer:
      'Yes "” always use all-lowercase slugs. URL paths are case-sensitive on most servers (Linux/Apache/Nginx). Having /Blog/Post and /blog/post as different URLs creates duplicate content issues that split SEO equity. Lowercase slugs prevent these problems and are simpler to handle in code.',
  },
  {
    category: 'Best Practices',
    question: 'How long should a URL slug be?',
    answer:
      'Aim for under 60 characters "” Google displays up to 60 characters in URL breadcrumbs in search results. Shorter is usually better (keywords closer to the domain have more weight). Remove stop words (the, a, an, and, of, in, etc.) to keep slugs concise while retaining meaning.',
  },
  {
    category: 'Best Practices',
    question: 'Should I remove stop words from slugs?',
    answer:
      'Generally yes for blog posts and SEO content. "The Best Guide to JavaScript Frameworks in 2024" → "best-guide-javascript-frameworks-2024" is shorter and emphasizes keywords. However, use judgment "” sometimes stop words are semantically significant or removing them changes the meaning.',
  },
  {
    category: 'Best Practices',
    question: 'Should I include dates in URL slugs?',
    answer:
      'Avoid dates in slugs for evergreen content you&#39;ll update over time. /best-laptops-2022 ages poorly "” visitors see a 2022 slug in 2025 and assume the content is outdated. Better: /best-laptops (timeless). Use dates only for truly time-specific content like news articles or event announcements.',
  },
  {
    category: 'Best Practices',
    question: 'Is it better to use flat or hierarchical URL slugs?',
    answer:
      'Flat URLs (/post-slug) are shorter and keep link equity concentrated. Hierarchical URLs (/blog/category/post-slug) provide context and avoid slug conflicts. For most content sites, one level of prefix is optimal (/blog/post-slug or /docs/topic). Avoid nesting deeper than three levels unless the hierarchy is genuinely meaningful to users.',
  },
  {
    category: 'SEO',
    question: 'Does changing a URL slug hurt SEO?',
    answer:
      'Yes "” changing a published slug loses inbound links and search rankings unless you set up a 301 redirect from the old slug to the new one. The 301 passes most (but not all) link equity. Get slugs right before publishing. Once a page is indexed and has backlinks, the cost of changing its URL is significant.',
  },
  {
    category: 'SEO',
    question: 'Should I include my target keyword in the slug?',
    answer:
      'Yes "” include the primary keyword you&#39;re targeting. If your article targets "JavaScript frameworks", the slug javascript-frameworks-guide is better than complete-developers-guide. Don&#39;t keyword-stuff "” Google penalizes this. One natural use of the keyword is sufficient.',
  },
  {
    category: 'SEO',
    question: 'How does a slug affect SEO?',
    answer:
      'A well-formed slug has a direct positive effect on SEO. Search engines use the URL slug as a signal for the topic and relevance of a page. Slugs containing the target keyword improve keyword prominence in the URL, which is a confirmed ranking factor. Short, descriptive slugs also improve click-through rates in search results because users can read the URL and understand the page content before clicking.',
  },
  {
    category: 'Unicode',
    question: 'How are accented characters handled in slugs?',
    answer:
      'Accented characters are transliterated to their closest ASCII equivalents: é → e, ü → u, ñ → n, ø → o, ç → c, ß → ss. "Café au lait" becomes "cafe-au-lait". Our generator handles transliteration for Latin-script languages (French, German, Spanish, Portuguese, Scandinavian) automatically.',
  },
  {
    category: 'Unicode',
    question: 'Can slugs contain non-Latin characters (Chinese, Arabic, Cyrillic)?',
    answer:
      'Technically yes "” modern browsers and servers support Unicode URLs. However, when copied or shared, these are percent-encoded (%E4%BD%A0%E5%A5%BD), which is ugly and fragile. Best practice is to transliterate: ä½ å¥½ → ni-hao, ÐŸÑ€Ð¸Ð²ÐµÑ‚ → privet. Our generator performs transliteration for common scripts.',
  },
  {
    category: 'Technical',
    question: 'How do I generate slugs in JavaScript?',
    answer:
      'Using the slugify npm package: import slugify from "slugify"; slugify("Hello World!", {lower: true, strict: true}) → "hello-world". Without library: text.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9\\s]/g, "").trim().replace(/\\s+/g, "-").',
  },
  {
    category: 'Technical',
    question: 'How do I generate slugs in Python?',
    answer:
      'Using python-slugify: pip install python-slugify; from slugify import slugify; slugify("Hello World! Café") → "hello-world-cafe". For simple ASCII cases: import re, unicodedata; unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode().lower() then replace non-alphanumeric with hyphens.',
  },
  {
    category: 'Technical',
    question: 'How does Django generate slugs?',
    answer:
      'Django provides django.utils.text.slugify() which converts to lowercase, removes non-alphanumeric characters (except hyphens and underscores), and replaces spaces/hyphens with hyphens. In models: use SlugField with prepopulated_fields = {"slug": ("title",)} in admin. The slug is auto-generated from the title field.',
  },
  {
    category: 'Technical',
    question: 'How does Rails generate slugs?',
    answer:
      '"Hello World!".parameterize → "hello-world" using ActiveSupport&#39;s parameterize method. The friendly_id gem adds slug history (preserving old slugs as redirects), scoping (unique per category), and finders (User.friendly.find("john-doe")). Widely used in Rails apps needing SEO-friendly URLs.',
  },
  {
    category: 'CMS',
    question: 'How does WordPress generate slugs?',
    answer:
      'WordPress auto-generates slugs from post titles using sanitize_title(), which strips HTML, converts to lowercase, replaces spaces with hyphens, and removes characters not safe in URLs. You can edit the slug manually in the URL field in the post editor before publishing.',
  },
  {
    category: 'CMS',
    question: 'How does Shopify handle URL slugs?',
    answer:
      'Shopify calls slugs "handles." They are auto-generated from product and collection names: lowercase, hyphens, no special characters. Edit handles in the product editor under Search engine listing preview. Shopify automatically creates redirects when handles change, preserving SEO equity.',
  },
  {
    category: 'Conflicts',
    question: 'What happens when two pages would have the same slug?',
    answer:
      'CMS systems typically append a number: introduction-2, introduction-3. Better approaches: use hierarchical URLs (/blog/introduction vs /docs/introduction), add a disambiguating term (introduction-to-react vs introduction-to-vue), or include a date for dated content. Plan your URL structure to avoid needing disambiguation suffixes.',
  },
  {
    category: 'Conflicts',
    question: 'Should I use category paths in slugs (e.g., /blog/category/post-slug)?',
    answer:
      'Hierarchical URLs add context but increase URL length and create rigidity "” moving a post to a different category changes its URL. For blogs: /blog/post-slug (flat) or /blog/category/post-slug (hierarchical) both work well. Avoid deep nesting (more than 2-3 levels). The target keyword in the slug is more important than the path depth.',
  },
  {
    category: 'Privacy',
    question: 'Is it safe to paste proprietary product names or internal project titles?',
    answer:
      'Yes "” all slug generation runs entirely in your browser. No text is transmitted to our servers. Safe for proprietary product names, internal project titles, client-specific content, or any sensitive text you need to slugify.',
  },
  {
    category: 'Batch',
    question: 'Can I generate slugs for multiple titles at once?',
    answer:
      'Yes "” enter multiple titles (one per line) and our generator outputs a corresponding slug for each line. Useful for bulk slug generation when migrating content, creating product catalog URLs, or processing lists of page titles for a new site.',
  },
];

export const slugGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};

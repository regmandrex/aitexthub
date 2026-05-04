import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Robots.txt Generator: The Complete Guide to Robots Exclusion Protocol, Crawl Management, and Search Engine Control</h2>
      <p>
        The robots.txt file is one of the oldest and most fundamental tools in web development and SEO. Located at the root of every domain (https://example.com/robots.txt), it provides instructions to web crawlers — search engine bots, link checkers, archive bots, and other automated agents — about which parts of your site they are and are not permitted to access. Every website from a personal blog to a Fortune 500 enterprise benefits from a properly configured robots.txt file.
      </p>
      <p>
        The Robots Exclusion Standard was proposed by Martijn Koster in 1994 and has been the informal standard for crawler behavior ever since. Despite being nearly thirty years old, robots.txt remains relevant, actively read by all major search engines, and a critical component of any serious SEO and site management strategy. In 2019, Google formally published robots.txt as RFC 9309, finally giving the long-used informal standard an official RFC specification.
      </p>

      <h2>Robots.txt Syntax: The Complete Reference</h2>
      <p>
        A robots.txt file is a plain text file with a simple, line-based syntax. Each meaningful section is called a "record" and consists of one or more <code>User-agent</code> directives followed by one or more <code>Allow</code> or <code>Disallow</code> directives.
      </p>

      <h3>User-agent Directive</h3>
      <p>
        Specifies which crawler the following rules apply to. The wildcard <code>*</code> applies to all crawlers not covered by a specific rule.
      </p>
      <pre><code>{`User-agent: *          # Applies to all bots
User-agent: Googlebot  # Applies only to Google's main crawler
User-agent: Bingbot    # Applies only to Bing's crawler
User-agent: GPTBot     # Applies only to OpenAI's crawlers`}</code></pre>
      <p>
        User-agent names are case-insensitive. A crawler applies the rules of the most specific matching User-agent group — if there's a specific rule for Googlebot and a wildcard rule, Googlebot follows only the Googlebot rule, not the wildcard rule.
      </p>

      <h3>Disallow Directive</h3>
      <p>
        Prevents a crawler from accessing a specific path or any URL that starts with that path:
      </p>
      <pre><code>{`Disallow: /admin/          # Block /admin/ and everything under it
Disallow: /private/        # Block /private/ directory
Disallow: /user-profiles/  # Block all user profile pages
Disallow: /api/            # Block API endpoints from crawling
Disallow: /search?         # Block search result pages`}</code></pre>
      <p>
        An empty Disallow allows everything: <code>Disallow:</code> (with no path) = allow all. This is equivalent to no Disallow directive at all.
      </p>

      <h3>Allow Directive</h3>
      <p>
        Explicitly permits access to a path that would otherwise be blocked by a broader Disallow. The Allow directive makes a path an exception to a Disallow rule:
      </p>
      <pre><code>{`User-agent: Googlebot
Disallow: /images/         # Block /images/ directory
Allow: /images/hero/       # But allow /images/hero/ specifically
Allow: /images/og/         # And allow /images/og/ for social crawlers`}</code></pre>
      <p>
        When a URL matches both an Allow and a Disallow rule, the more specific rule wins (longer path takes precedence). If both have the same specificity, Allow wins over Disallow.
      </p>

      <h3>Sitemap Directive</h3>
      <p>
        Points crawlers to your XML sitemap(s). This can appear anywhere in the robots.txt file and is not associated with any particular User-agent group — it's treated as a global directive:
      </p>
      <pre><code>{`Sitemap: https://example.com/sitemap.xml
Sitemap: https://example.com/sitemap-news.xml
Sitemap: https://example.com/sitemap-images.xml`}</code></pre>
      <p>
        Including your sitemap URL in robots.txt is the most reliable way to ensure all major search engines discover it. You can include multiple Sitemap directives. The URL must be absolute (including protocol and domain).
      </p>

      <h3>Crawl-delay Directive</h3>
      <p>
        Requests that a crawler wait a specified number of seconds between requests:
      </p>
      <pre><code>{`User-agent: *
Crawl-delay: 10    # Wait 10 seconds between requests`}</code></pre>
      <p>
        Important: <strong>Googlebot does not respect Crawl-delay</strong>. Google provides crawl rate management through Google Search Console instead. Bing, Yandex, and some other crawlers do respect Crawl-delay. For most sites, Crawl-delay is unnecessary — only use it if aggressive crawling is causing server load issues.
      </p>

      <h3>Comments</h3>
      <p>
        Lines beginning with # are comments and are ignored by crawlers. Use comments to document your robots.txt for your team:
      </p>
      <pre><code>{`# robots.txt for example.com
# Updated: 2024-01-15
# Contact: webmaster@example.com

# Block all bots from admin areas
User-agent: *
Disallow: /admin/`}</code></pre>

      <h2>How Robots.txt Path Matching Works</h2>
      <p>
        Understanding path matching is essential for writing effective robots.txt rules. The matching rules are prefix-based by default, with support for wildcards.
      </p>

      <h3>Prefix Matching</h3>
      <p>
        A path in robots.txt matches any URL that begins with that path:
      </p>
      <ul>
        <li><code>Disallow: /admin</code> blocks /admin, /admin/, /admin/users, /administrator, /admins — anything starting with "/admin"</li>
        <li><code>Disallow: /admin/</code> blocks /admin/ and everything under it, but NOT /administrator (the trailing slash restricts to the exact directory)</li>
      </ul>
      <p>
        To block a specific page only (not its children), use the exact path without a trailing slash: <code>Disallow: /private-page</code> blocks /private-page and /private-page.html but not necessarily /private-page/section (depends on implementation).
      </p>

      <h3>Wildcard Matching (* and $)</h3>
      <p>
        Google and most modern crawlers support two wildcard characters:
      </p>
      <ul>
        <li><strong>*</strong> (asterisk): Matches any sequence of characters (zero or more)</li>
        <li><strong>$</strong> (dollar sign): Matches the end of the URL</li>
      </ul>
      <pre><code>{`# Block all URLs containing ?utm_
Disallow: /*?utm_

# Block all PDF files
Disallow: /*.pdf$

# Block all search result pages (any query string starting with ?)
Disallow: /*?*

# Block /category/ but allow category pages ending in specific patterns
Disallow: /category/
Allow: /category/*.html$

# Block any URL with "session" in it
Disallow: /*session*

# Block URLs with query parameters
Disallow: /*?`}</code></pre>

      <h3>Important: Robots.txt Does Not Apply to Sitemaps</h3>
      <p>
        Disallowing a URL in robots.txt prevents crawlers from accessing it, but it does not remove the URL from search indexes if the URL is already indexed, and it does not prevent the URL from being indexed if another page links to it. The crawler won't re-crawl it, but the URL can still appear in search results based on previously crawled content or link signals.
      </p>
      <p>
        To actually remove a URL from search results, you need to use the <code>noindex</code> meta tag, the X-Robots-Tag HTTP header, or the URL Removal Tool in Google Search Console. Robots.txt disallow ≠ deindexing.
      </p>

      <h2>Common Robots.txt Patterns</h2>

      <h3>Allow Everything (Default Open Policy)</h3>
      <pre><code>{`User-agent: *
Disallow:

Sitemap: https://example.com/sitemap.xml`}</code></pre>
      <p>
        An empty Disallow explicitly allows everything. This is functionally the same as having no robots.txt file but is best practice to include to confirm intent and to add the Sitemap directive.
      </p>

      <h3>Block Everything (Coming Soon or Maintenance)</h3>
      <pre><code>{`User-agent: *
Disallow: /`}</code></pre>
      <p>
        Prevents all crawlers from accessing any page. Use for staging sites, development environments, or sites under construction. Note: Google may still index the homepage from external links even with <code>Disallow: /</code> — for complete deindexing, use noindex as well.
      </p>

      <h3>Block Admin and Private Areas</h3>
      <pre><code>{`User-agent: *
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /wp-login.php
Disallow: /private/
Disallow: /staging/
Disallow: /dev/

Sitemap: https://example.com/sitemap.xml`}</code></pre>

      <h3>Block Search Result Pages and Faceted Navigation</h3>
      <pre><code>{`User-agent: *
# Block internal search results (duplicate content)
Disallow: /search
Disallow: /search/
# Block sorting and filtering parameters
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /*?color=
Disallow: /*?size=
Disallow: /*?page=

Sitemap: https://example.com/sitemap.xml`}</code></pre>
      <p>
        Faceted navigation (filtered product listings) creates enormous amounts of near-duplicate content — different URLs for the same products in different sort/filter combinations. Blocking these from crawling prevents crawl budget waste and duplicate content dilution.
      </p>

      <h3>Block AI Training Crawlers</h3>
      <pre><code>{`# OpenAI crawlers
User-agent: GPTBot
Disallow: /

# ChatGPT browsing plugin
User-agent: ChatGPT-User
Disallow: /

# Google Gemini / Bard
User-agent: Google-Extended
Disallow: /

# Common Crawl (used by many AI training datasets)
User-agent: CCBot
Disallow: /

# Anthropic
User-agent: anthropic-ai
Disallow: /

# Cohere
User-agent: cohere-ai
Disallow: /

# ByteDance
User-agent: Bytespider
Disallow: /

# Meta AI
User-agent: FacebookBot
Disallow: /

# Apple Applebot-Extended
User-agent: Applebot-Extended
Disallow: /

# Perplexity
User-agent: PerplexityBot
Disallow: /`}</code></pre>
      <p>
        Since the rise of large language models, many website owners wish to prevent their content from being used in AI training datasets. The above user-agent names are the crawlers associated with major AI companies' training data collection (as of 2024). Note: blocking these crawlers affects AI-powered search features but may not affect models already trained on previously crawled versions of your content.
      </p>

      <h3>WordPress Specific</h3>
      <pre><code>{`User-agent: *
# WordPress admin
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php    # Allow AJAX endpoint used by themes
# WordPress content
Disallow: /wp-login.php
Disallow: /wp-register.php
# Pagination (optional — may want to allow for large sites)
Disallow: /*?paged=
# Duplicate content from tags/categories/dates (if handled another way)
# Disallow: /tag/
# Disallow: /author/
# Disallow: /?m=  (year/month archives)

Sitemap: https://example.com/sitemap.xml`}</code></pre>

      <h3>E-commerce Site</h3>
      <pre><code>{`User-agent: *
# Account and checkout pages
Disallow: /account/
Disallow: /cart/
Disallow: /checkout/
Disallow: /orders/
Disallow: /wishlist/
# Search and filter pages (duplicate content)
Disallow: /search
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /*?color=
Disallow: /*?size=
# Tracking parameters
Disallow: /*?ref=
Disallow: /*?utm_
Disallow: /*?gclid=
# Session and user-specific
Disallow: /*?session_id=

Sitemap: https://example.com/sitemap.xml`}</code></pre>

      <h2>Crawl Budget: Why Robots.txt Matters for Large Sites</h2>
      <p>
        Crawl budget is the number of URLs Googlebot crawls on your site within a given timeframe. For small sites (under 1,000 pages), crawl budget is rarely a concern — Google crawls all pages easily. For large sites (tens of thousands to millions of pages), crawl budget management is critical to ensure your most important content is crawled and indexed.
      </p>
      <p>
        Using robots.txt to block low-value URLs (pagination, faceted navigation, search results, print pages, tracking parameter variants) concentrates your crawl budget on high-value indexable content. Signs that crawl budget may be a problem:
      </p>
      <ul>
        <li>Important new pages taking weeks or months to get indexed</li>
        <li>Coverage reports in Google Search Console showing many "Crawled but not indexed" URLs</li>
        <li>Large numbers of URL variants from parameters (e-commerce filter combinations)</li>
        <li>Log analysis showing Googlebot crawling many low-value URLs</li>
      </ul>
      <p>
        Monitor crawl budget through Google Search Console's "Crawl stats" report (Settings &gt; Crawl stats). It shows crawl frequency, response codes, and file types crawled, helping you identify what Googlebot spends its time on.
      </p>

      <h2>What Robots.txt Cannot Do</h2>
      <p>
        Understanding the limitations of robots.txt prevents costly misunderstandings:
      </p>
      <ul>
        <li><strong>Robots.txt is advisory, not enforced</strong>: Malicious bots and scrapers ignore robots.txt entirely. It only works with compliant crawlers (search engines, reputable tools). Treat robots.txt as a polite request, not a security control.</li>
        <li><strong>Disallowed pages can still be indexed</strong>: If a disallowed page receives links from other pages, search engines may index it based on those links without crawling it — the title and description will be missing, but the URL may appear in search results.</li>
        <li><strong>Robots.txt doesn't protect sensitive data</strong>: Never rely on robots.txt to prevent access to sensitive pages (API keys, admin panels, private data). Use authentication instead.</li>
        <li><strong>Robots.txt doesn't affect currently indexed pages</strong>: Blocking a previously indexed URL removes it from the crawl queue but doesn't immediately remove it from the index. Use noindex for that.</li>
        <li><strong>Subdomain robots.txt applies only to that subdomain</strong>: robots.txt at example.com/robots.txt does not apply to blog.example.com — that subdomain needs its own robots.txt.</li>
        <li><strong>HTTP and HTTPS are separate</strong>: robots.txt at https://example.com/robots.txt doesn't apply to http://example.com. In practice, most crawlers follow redirects, but be explicit with HTTPS.</li>
      </ul>

      <h2>Robots.txt and JavaScript Rendering</h2>
      <p>
        Googlebot renders JavaScript when crawling, meaning it can access JavaScript-rendered content in most cases. However, Googlebot respects robots.txt for JS resources (scripts, CSS files loaded by those scripts). If you block JS or CSS files in robots.txt, Googlebot may be unable to render your pages correctly, potentially missing content and leading to poor indexing.
      </p>
      <p>
        Best practice: don't block any CSS or JavaScript files needed for rendering in robots.txt. Google has explicitly stated that blocking rendering resources is harmful to how they understand and index your pages.
      </p>

      <h2>Verifying Your Robots.txt</h2>

      <h3>Google Search Console Robots.txt Tester</h3>
      <p>
        Google Search Console provides a robots.txt tester (under Crawl &gt; robots.txt Tester in the legacy interface, or via the URL Inspection tool in the new interface). It shows the current robots.txt Google sees, lets you test specific URLs against specific user-agents, and highlights syntax errors.
      </p>

      <h3>Bing Webmaster Tools</h3>
      <p>
        Bing Webmaster Tools provides similar robots.txt validation and testing for Bing's crawler. If you care about Bing traffic (which now powers ChatGPT search and Copilot), verify your robots.txt in Bing Webmaster Tools as well.
      </p>

      <h3>Manual Verification</h3>
      <p>
        Verify your robots.txt is accessible: visit https://yourdomain.com/robots.txt in a browser. It should return plain text with a 200 HTTP status code. A 404 response means all crawlers are effectively allowed (no robots.txt = no restrictions). A 500 server error may cause some crawlers to treat the site as fully blocked.
      </p>

      <h2>Robots Meta Tags vs. Robots.txt</h2>
      <p>
        Robots.txt operates at the URL/directory level. For page-level control, use the robots meta tag in the HTML <code>&lt;head&gt;</code>:
      </p>
      <pre><code>{`<!-- Prevent indexing and following links on this page -->
<meta name="robots" content="noindex, nofollow">

<!-- Prevent indexing but allow link following -->
<meta name="robots" content="noindex, follow">

<!-- Prevent Google specifically from indexing -->
<meta name="googlebot" content="noindex">

<!-- Prevent caching -->
<meta name="robots" content="noarchive">

<!-- Prevent snippet in search results -->
<meta name="robots" content="nosnippet">`}</code></pre>
      <p>
        For even more control, use the X-Robots-Tag HTTP response header, which works for non-HTML files (PDFs, images) and can be set dynamically:
      </p>
      <pre><code>{`X-Robots-Tag: noindex, nofollow
X-Robots-Tag: googlebot: noindex
X-Robots-Tag: noarchive`}</code></pre>

      <h2>Robots.txt for Different Site Types</h2>

      <h3>SaaS Application (Private App)</h3>
      <pre><code>{`User-agent: *
# Block the entire application behind authentication
Disallow: /app/
Disallow: /dashboard/
Disallow: /settings/
Disallow: /api/
# Allow the public marketing pages
Allow: /
Allow: /blog/
Allow: /pricing/
Allow: /features/

Sitemap: https://example.com/sitemap.xml`}</code></pre>

      <h3>News/Media Site</h3>
      <pre><code>{`User-agent: *
Disallow: /author/
Disallow: /tag/
Disallow: /print/
Disallow: /*?print=
Disallow: /comments/feed/
Disallow: /trackback/
# Allow important crawlable content
Allow: /

Sitemap: https://example.com/sitemap.xml
Sitemap: https://example.com/news-sitemap.xml`}</code></pre>

      <h3>API Documentation (No CMS, Only Docs)</h3>
      <pre><code>{`User-agent: *
# Allow everything — docs should be indexed
Disallow:

Sitemap: https://docs.example.com/sitemap.xml`}</code></pre>

      <h2>RFC 9309: The Official Robots.txt Specification</h2>
      <p>
        Google published RFC 9309 in 2022, officially standardizing the robots.txt format after 28 years of informal use. Key clarifications in the RFC:
      </p>
      <ul>
        <li>Files must use UTF-8 encoding</li>
        <li>File size limit: parsers should handle at least 500 kibibytes; data beyond that may be ignored</li>
        <li>User-agent matching is case-insensitive</li>
        <li>When a URL matches both Allow and Disallow rules of the same length, Allow wins</li>
        <li>Parsers should be lenient with whitespace and non-standard directives</li>
        <li>Unknown directives must be ignored (not treated as errors)</li>
      </ul>
      <p>
        The practical implication: keep your robots.txt file well under 500 KB. Very large robots.txt files (common on sites with thousands of disallow rules) may have the tail end ignored.
      </p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a robots.txt file?',
    answer: 'A robots.txt file is a plain text file at the root of a domain (example.com/robots.txt) that provides instructions to web crawlers — search engines, archive bots, AI crawlers — about which pages they are permitted to access. It follows the Robots Exclusion Protocol (REP), now formalized as RFC 9309. It\'s advisory only — malicious bots ignore it.',
  },
  {
    category: 'General',
    question: 'Where does robots.txt need to be located?',
    answer: 'robots.txt must be at the root of the domain: https://example.com/robots.txt. It cannot be in a subdirectory (/about/robots.txt won\'t work). Each subdomain needs its own robots.txt: blog.example.com/robots.txt applies only to blog.example.com, not example.com. HTTP and HTTPS are separate — place robots.txt on your HTTPS version.',
  },
  {
    category: 'General',
    question: 'What happens if a site has no robots.txt file?',
    answer: 'If robots.txt returns a 404 (not found), crawlers treat the entire site as crawlable — no restrictions apply. If robots.txt returns a 500 server error, some crawlers may temporarily treat the site as fully blocked. A missing robots.txt is not a problem for most sites, but having one (even with just `Disallow:`) lets you add a Sitemap directive and document your crawl policy.',
  },
  {
    category: 'Syntax',
    question: 'What does Disallow: / mean?',
    answer: 'Disallow: / blocks the crawler from accessing all pages on the site (the / path matches everything). Use this for staging sites, development environments, or "coming soon" pages you don\'t want indexed. Note: even with Disallow: /, a page can still appear in search results if other sites link to it — the URL is indexed but the content won\'t be crawled.',
  },
  {
    category: 'Syntax',
    question: 'What is the difference between Disallow: /folder and Disallow: /folder/?',
    answer: 'Disallow: /folder blocks /folder, /folder/, /folder/page, /folderpage, /folder-archive — anything starting with "/folder". Disallow: /folder/ (with trailing slash) is more restrictive — it blocks /folder/ and everything inside it, but NOT /folderpage or /folder-archive (which don\'t start with "/folder/"). Use the trailing slash version to block a specific directory without affecting similarly-named paths.',
  },
  {
    category: 'Syntax',
    question: 'How do wildcards work in robots.txt?',
    answer: 'Two wildcards are supported by Google and most modern crawlers: * (asterisk) matches any sequence of characters. $ (dollar sign) matches the end of the URL. Examples: Disallow: /*.pdf$ blocks all PDF files. Disallow: /*?* blocks all URLs with query strings. Disallow: /search?* blocks all search URLs. Disallow: /*session* blocks URLs containing "session".',
  },
  {
    category: 'Syntax',
    question: 'How does the Allow directive work with Disallow?',
    answer: 'Allow creates exceptions to Disallow rules. When a URL matches both, the more specific rule (longer path) wins. Example: Disallow: /images/ with Allow: /images/hero/ means all of /images/ is blocked except /images/hero/. If both rules are the same length, Allow wins over Disallow. This lets you block an entire directory while allowing specific subdirectories.',
  },
  {
    category: 'Syntax',
    question: 'Does Googlebot respect Crawl-delay in robots.txt?',
    answer: 'No. Google explicitly ignores the Crawl-delay directive. To control Googlebot\'s crawl rate, use Google Search Console: Settings > Crawling > Configure Google crawl rate. Bing, Yandex, and some other crawlers do respect Crawl-delay. For Googlebot, manage crawl rate through Search Console rather than robots.txt.',
  },
  {
    category: 'Crawling',
    question: 'Will blocking a page in robots.txt remove it from Google search results?',
    answer: 'No. Blocking a page in robots.txt prevents Google from crawling it, but does NOT remove it from the index. If the page was previously crawled and indexed, or if other sites link to it, it may still appear in search results (often with a "No information is available for this page" message). To remove a page from Google\'s index, use noindex meta tag or Google Search Console\'s URL Removal Tool.',
  },
  {
    category: 'Crawling',
    question: 'What is crawl budget and why does robots.txt affect it?',
    answer: 'Crawl budget is the number of pages Google crawls on your site in a given timeframe. For large sites (thousands+ pages), blocking low-value pages (pagination, filtered navigation, search results) in robots.txt conserves crawl budget for high-value content, ensuring important pages get crawled and indexed faster. For small sites under ~1,000 pages, crawl budget is rarely a concern.',
  },
  {
    category: 'Crawling',
    question: 'What is the difference between robots.txt and noindex meta tag?',
    answer: 'robots.txt controls whether a page can be crawled. noindex meta tag controls whether a crawled page should be included in the search index. Key distinction: a noindex tag on a blocked page is invisible (Google can\'t crawl it to see the tag). To remove pages from the index, use noindex — Google must be able to crawl the page to read the noindex instruction. Use robots.txt to save crawl budget, noindex to prevent indexing.',
  },
  {
    category: 'AI Crawlers',
    question: 'How do I block AI training crawlers in robots.txt?',
    answer: 'Use specific User-agent blocks for each AI crawler: GPTBot (OpenAI), ChatGPT-User (ChatGPT browsing), Google-Extended (Gemini/Bard), anthropic-ai (Anthropic/Claude), CCBot (Common Crawl, used by many AI datasets), Bytespider (ByteDance), PerplexityBot (Perplexity). Add `Disallow: /` under each to block them from your entire site.',
  },
  {
    category: 'AI Crawlers',
    question: 'Does blocking AI crawlers prevent my content from being used in LLMs?',
    answer: 'Blocking current crawlers prevents future collection of your content, but does not affect AI models already trained on previously crawled versions. Common Crawl archives dating back years have been used in many LLM training datasets, so your content may already be in some models regardless. Blocking is a forward-looking protection, not a retroactive one.',
  },
  {
    category: 'SEO',
    question: 'Should I block search result pages in robots.txt?',
    answer: 'Yes, for most sites. Internal search result pages (e.g., /search?q=...) are typically near-duplicate content and waste crawl budget without adding indexable value. Block them with Disallow: /search or Disallow: /*?q=. For e-commerce, also block faceted navigation filter combinations (Disallow: /*?color=, Disallow: /*?sort=) to prevent crawl budget being spent on thousands of filter combination pages.',
  },
  {
    category: 'SEO',
    question: 'Should I block my staging or development site with robots.txt?',
    answer: 'Yes, always. Use Disallow: / in your staging site\'s robots.txt to prevent search engines from indexing duplicate pre-production content. Also add a noindex meta tag as a backup. Never use robots.txt as the only protection for a staging site — use HTTP authentication as the primary control, with robots.txt as a secondary signal.',
  },
  {
    category: 'SEO',
    question: 'How should I handle URL parameters in robots.txt?',
    answer: 'Block parameter variants that create duplicate content: tracking parameters (Disallow: /*?utm_), session IDs (Disallow: /*?session_id=), pagination-via-parameter (Disallow: /*?page=). A better approach for Googlebot is Google Search Console\'s URL Parameters tool (now deprecated) or parameter handling via canonical tags. Use Disallow for parameters that create genuinely useless duplicate pages.',
  },
  {
    category: 'Security',
    question: 'Can I use robots.txt to protect sensitive pages?',
    answer: 'No. robots.txt is a public file — anyone can view it. Blocking /admin/ in robots.txt actually advertises that an /admin/ path exists. Malicious actors specifically check robots.txt for sensitive paths. Use authentication (login requirement, HTTP auth, IP allowlisting) to protect sensitive pages. robots.txt is for managing crawler behavior, not security.',
  },
  {
    category: 'Security',
    question: 'Is robots.txt legally binding or can bots ignore it?',
    answer: 'robots.txt is advisory only — it\'s a request, not a legal enforcement mechanism. Compliant crawlers (Google, Bing, reputable tools) respect it. Malicious bots, scrapers, and spam crawlers ignore it. There is no technical enforcement, though violations of robots.txt may have legal implications under the Computer Fraud and Abuse Act (US) in some circumstances, as courts have debated.',
  },
  {
    category: 'Technical',
    question: 'How large can a robots.txt file be?',
    answer: 'RFC 9309 specifies that parsers should handle at least 500 kibibytes (512 KB). Content beyond that limit may be ignored by compliant parsers. Keep your robots.txt well under this limit. Very large robots.txt files (from sites with thousands of individually blocked URLs) may have their tail end silently ignored. Use directory-level rules instead of listing individual URLs when possible.',
  },
  {
    category: 'Technical',
    question: 'How quickly do search engines pick up changes to robots.txt?',
    answer: 'Search engines typically re-crawl robots.txt within 24–48 hours of changes. Google may take up to a few days. To speed up the process, request a crawl via Google Search Console (URL Inspection > Request Indexing for the robots.txt URL). Changes take effect for new crawls — pages already in the crawl queue may be fetched before the new rules are seen.',
  },
  {
    category: 'Technical',
    question: 'Does robots.txt apply to CSS and JavaScript files?',
    answer: 'Yes, and blocking them can harm your site. Googlebot renders JavaScript and uses CSS/JS to understand your page layout and content. If robots.txt blocks your CSS or JS files, Googlebot cannot render pages correctly, potentially missing content and misunderstanding page structure. Do not block any CSS, JavaScript, or font files that are needed for rendering your pages.',
  },
  {
    category: 'Validation',
    question: 'How do I test if my robots.txt is working correctly?',
    answer: 'Use Google Search Console\'s robots.txt tester to check specific URLs against your rules. Verify the file is accessible at https://yourdomain.com/robots.txt (should return HTTP 200 with plain text). Check the Bing Webmaster Tools robots.txt tester for Bing-specific validation. For AI crawlers, you can verify blocking by checking server access logs for requests from the bot\'s user-agent string.',
  },
  {
    category: 'WordPress',
    question: 'How does WordPress handle robots.txt?',
    answer: 'WordPress generates a virtual robots.txt file if no physical robots.txt file exists at the root. The virtual file is minimal — it disallows /wp-admin/ (except admin-ajax.php) and lists the sitemap. For more control, create a physical robots.txt file at the root of your WordPress installation (it overrides the virtual one), or use a plugin like Yoast SEO which provides a robots.txt editor in the admin interface.',
  },
  {
    category: 'Sitemap',
    question: 'Should I include my sitemap in robots.txt?',
    answer: 'Yes, always. Include `Sitemap: https://example.com/sitemap.xml` in your robots.txt. This is the most reliable way to inform all major search engines of your sitemap location. You can list multiple sitemaps. The Sitemap directive is not associated with any User-agent group — it\'s a global declaration. Also submit your sitemap directly in Google Search Console and Bing Webmaster Tools for faster discovery.',
  },
];

export const robotsTxtGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};

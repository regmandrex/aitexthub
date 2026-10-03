import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Robots.txt Generator: Everything You Need to Know About Robots Exclusion Protocol, Crawl Management, and Search Engine Control</h2>
      <p>The robots.txt document stands as one of the oldest and most vital tools for search engine optimization and web development. Placed at the base directory of every domain (https://example.com/robots.txt), it delivers commands to web crawlers — including search bots, link validators, archiving bots, and other scripts — detailing which site sections they are authorized or restricted from accessing. Every web property, ranging from personal blogs to Fortune 500 portals, benefits from a correctly structured robots.txt document.</p>
      <p>The Robots Exclusion Standard was originally proposed by Martijn Koster back in 1994 and has served as the informal guideline for crawler actions ever since. Despite nearing thirty years of age, robots.txt remains fully relevant, actively parsed by all major search engines, and forms a critical element of any comprehensive SEO and site administration strategy. In 2019, Google officially published robots.txt as RFC 9309, finally providing an official RFC definition to the long-standing informal standard.</p>

      <h2>Robots.txt Syntax: A Comprehensive Reference</h2>
      <p>A robots.txt document is a simple text file featuring a straightforward, line-based format. Every distinct section is known as a "record" and is composed of one or more <code>User-agent</code> rules followed by one or more <code>Allow</code> or <code>Disallow</code> entries.</p>

      <h3>User-agent Directive</h3>
      <p>Defines which crawler the subsequent rules apply to. The wildcard character <code>*</code> targets all crawlers not addressed by a specific rule.</p>
      <pre><code>{`User-agent: *          # Applies to all bots
User-agent: Googlebot  # Applies only to Google's main crawler
User-agent: Bingbot    # Applies only to Bing's crawler
User-agent: GPTBot     # Applies only to OpenAI's crawlers`}</code></pre>
      <p>User-agent titles are case-insensitive. A crawler processes the instructions from the most precise matching User-agent section — if a dedicated rule exists for Googlebot alongside a wildcard entry, Googlebot obeys solely the Googlebot instructions, ignoring the wildcard settings.</p>

      <h3>Disallow Directive</h3>
      <p>Stops a crawler from accessing a designated path or any URL beginning with that path:</p>
      <pre><code>{`Disallow: /admin/          # Block /admin/ and everything under it
Disallow: /private/        # Block /private/ directory
Disallow: /user-profiles/  # Block all user profile pages
Disallow: /api/            # Block API endpoints from crawling
Disallow: /search?         # Block search result pages`}</code></pre>
      <p>A blank Disallow permits unrestricted access: <code>Disallow:</code> (leaving out any path) = allow everything. This behaves identically to omitting the Disallow rule completely.</p>

      <h3>Allow Directive</h3>
      <p>Explicitly grants entry to a path that would otherwise be blocked by a broader Disallow rule. The Allow statement turns a path into an exception for a Disallow command:</p>
      <pre><code>{`User-agent: Googlebot
Disallow: /images/         # Block /images/ directory
Allow: /images/hero/       # But allow /images/hero/ specifically
Allow: /images/og/         # And allow /images/og/ for social crawlers`}</code></pre>
      <p>When a URL matches an Allow as well as a Disallow instruction, the more specific directive takes precedence (longer paths win). If both match with equal specificity, Allow overrides Disallow.</p>

      <h3>Sitemap Directive</h3>
      <p>Directs crawlers toward your XML sitemap files. This line can be placed anywhere within the robots.txt document and is not tied to any specific User-agent section — it functions as a global instruction:</p>
      <pre><code>{`Sitemap: https://example.com/sitemap.xml
Sitemap: https://example.com/sitemap-news.xml
Sitemap: https://example.com/sitemap-images.xml`}</code></pre>
      <p>Adding your sitemap URL to robots.txt remains the surest method to guarantee that all top search engines find it. Multiple Sitemap directives can be added. The URL needs to be absolute, containing both the protocol and domain.</p>

      <h3>Crawl-delay Directive</h3>
      <p>Asks that a bot pause for a given number of seconds between actions:</p>
      <pre><code>{`User-agent: *
Crawl-delay: 10    # Wait 10 seconds between requests`}</code></pre>
      <p>Note: <strong>Googlebot does not respect Crawl-delay</strong>. Instead, Google offers crawl rate control through Google Search Console. Bing, Yandex, and certain other bots do honor Crawl-delay. For the majority of websites, Crawl-delay isn't needed — employ it solely when heavy crawling leads to server performance problems.</p>

      <h3>Comments</h3>
      <p>Rows starting with # serve as comments and bots skip them. Employ comments to explain your robots.txt for your colleagues:</p>
      <pre><code>{`# robots.txt for example.com
# Updated: 2024-01-15
# Contact: webmaster@example.com

# Block all bots from admin areas
User-agent: *
Disallow: /admin/`}</code></pre>

      <h2>The Mechanics of Robots.txt Path Matching</h2>
      <p>Knowing path matching proves vital for crafting successful robots.txt instructions. The matching logic relies on prefixes by default, alongside wildcard support.</p>

      <h3>Prefix Matching</h3>
      <p>A path within robots.txt applies to every URL starting with that specific path:</p>
      <ul>
        <li><code>Disallow: /admin</code> prevents access to /admin, /admin/, /admin/users, /administrator, /admins — any path beginning with "/admin"</li>
        <li><code>Disallow: /admin/</code> blocks /admin/ and all contents beneath it, yet leaves out /administrator (the final slash limits it strictly to that folder)</li>
      </ul>
      <p>To restrict just a single page rather than its subpages, use the precise path omitting a trailing slash: <code>Disallow: /private-page</code> blocks /private-page and /private-page.html while not necessarily blocking /private-page/section (varies by parser).</p>

      <h3>Wildcard Matching (* and $)</h3>
      <p>Google alongside most contemporary crawlers accept a pair of wildcard symbols:</p>
      <ul>
        <li><strong>*</strong> (asterisk): Matches any string of characters, whether empty or longer</li>
        <li><strong>$</strong> (dollar sign): Matches the conclusion of the URL</li>
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

      <h3>Note: Robots.txt Does Not Apply to Sitemaps</h3>
      <p>Restricting a URL via robots.txt stops bots from visiting it, but fails to erase the URL from search indices if already indexed, nor does it block indexing when an external link points there. The bot refrains from fetching it anew, but the URL might still show up in search outcomes leveraging prior crawled data or inbound links.</p>
      <p>To genuinely wipe a URL from search listings, you must deploy the <code>noindex</code> meta tag, the X-Robots-Tag HTTP header, or the URL Removal Tool inside Google Search Console. Robots.txt disallow ≠ deindexing.</p>

      <h2>Frequently Used Robots.txt Patterns</h2>

      <h3>Permit All Traffic (Default Open Policy)</h3>
      <pre><code>{`User-agent: *
Disallow:

Sitemap: https://example.com/sitemap.xml`}</code></pre>
      <p>A blank Disallow openly permits all access. This acts identically to lacking any robots.txt file yet serves as best practice to declare purpose and supply the Sitemap directive.</p>

      <h3>Restrict Everything (Coming Soon or Maintenance)</h3>
      <pre><code>{`User-agent: *
Disallow: /`}</code></pre>
      <p>Stops all bots from viewing any page. Apply this for staging servers, test environments, or pages being built. Caution: Google might still index the main page via external links despite <code>Disallow: /</code> — for total deindexing, combine it with noindex.</p>

      <h3>Restrict Admin and Private Areas</h3>
      <pre><code>{`User-agent: *
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /wp-login.php
Disallow: /private/
Disallow: /staging/
Disallow: /dev/

Sitemap: https://example.com/sitemap.xml`}</code></pre>

      <h3>Restrict Search Result Pages and Faceted Navigation</h3>
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
      <p>Faceted navigation, meaning sorted product views, generates massive volumes of near-identical material through varied URLs for identical items across sorting permutations. Stopping bots here saves crawl budget and avoids duplicate content penalty.</p>

      <h3>Restrict AI Training Crawlers</h3>
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
      <p>Ever since large language models emerged, numerous site owners have sought to block their materials from AI training sets. The user-agent titles listed above represent the scrapers tied to major AI firms' training data collection efforts as of 2024. Keep in mind: stopping these bots impacts AI-driven search features but might leave models unaffected if they were already trained on previously scraped versions of your material.</p>

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

      <h2>Crawl Budget: The Importance of Robots.txt for Large Sites</h2>
      <p>Crawl budget represents the total URLs Googlebot visits on your website inside a specific timeframe. For compact sites (under 1,000 pages), crawl budget is rarely an issue since Google handles all pages easily. For extensive sites (tens of thousands up to millions of pages), managing crawl budget is vital to guarantee your most crucial content gets fetched and indexed.</p>
      <p>Utilizing robots.txt to restrict low-value URLs (pagination, faceted navigation, search results, print pages, tracking parameter variants) focuses your crawl budget on high-value indexable content. Indications that crawl budget might present an obstacle:</p>
      <ul>
        <li>Crucial new pages taking weeks or months to get indexed</li>
        <li>Coverage reports within Google Search Console displaying numerous "Crawled but not indexed" web addresses</li>
        <li>High volumes of address variations from parameters (such as online store filter combinations)</li>
        <li>Server log reviews revealing Googlebot browsing a multitude of low-value web addresses</li>
      </ul>
      <p>Track crawl budget via Google Search Console's "Crawl stats" dashboard (Settings &gt; Crawl stats). It displays fetch frequency, response codes, along with file types accessed, helping you determine where Googlebot spends its time.</p>

      <h2>What Robots.txt Is Unable To Do</h2>
      <p>Realizing the limitations of robots.txt prevents costly misconceptions:</p>
      <ul>
        <li><strong>Robots.txt is advisory, not enforced</strong>: Aggressive scrapers and malicious crawlers completely disregard robots.txt. The standard depends entirely on cooperative bots, such as trusted search crawlers and verified services. Consider robots.txt as an informal guideline rather than a defensive boundary.</li>
        <li><strong>Disallowed pages can still be indexed</strong>: Should an excluded URL accumulate hyperlinks across the wider web, indexing systems might list that address strictly using referenced anchor contexts, producing search listings that show the URL while lacking page descriptions and title text.</li>
        <li><strong>Robots.txt doesn't protect sensitive data</strong>: Do not treat robots.txt directives as an authorization layer to conceal confidential resources like administrative dashboards, sensitive user records, or API keys. Restrict these assets using robust authentication instead.</li>
        <li><strong>Robots.txt doesn't affect currently indexed pages</strong>: Adding crawl blocks to URLs already indexed merely pauses future crawl requests rather than wiping them from search directories. To purge entries effectively, configure a noindex directive instead.</li>
        <li><strong>Each subdomain requires an individual robots.txt file</strong>: directives found under example.com/robots.txt will not govern blog.example.com — you must configure an independent robots.txt specifically for that subdomain.</li>
        <li><strong>Protocols require distinct rules</strong>: rules set within https://example.com/robots.txt are not inherited by http://example.com. Although search bots generally track redirects, maintaining explicit directives for your HTTPS address is critical.</li>
      </ul>

      <h2>Robots.txt and JavaScript Rendering</h2>
      <p>Googlebot executes JavaScript while crawling, meaning it can access JavaScript-rendered content in most situations. However, Googlebot obeys robots.txt regarding JS resources (scripts, CSS files loaded by those scripts). If you block JS or CSS files in robots.txt, Googlebot may fail to render your pages properly, potentially missing content and resulting in poor indexing.</p>
      <p>Best practice: do not block any CSS or JavaScript files required for rendering within robots.txt. Google has explicitly stated that blocking rendering resources harms how they interpret and index your pages.</p>

      <h2>Verifying Your Robots.txt</h2>

      <h3>Google Search Console Robots.txt Tester</h3>
      <p>Google Search Console offers a robots.txt tester (found under Crawl &gt; robots.txt Tester in the legacy interface, or through the URL Inspection tool in the newer interface). It displays the active robots.txt Google encounters, lets you test specific URLs against certain user-agents, and points out syntax errors.</p>

      <h3>Bing Webmaster Tools</h3>
      <p>Bing Webmaster Tools provides comparable robots.txt verification and testing for Bing's crawler. If you care about Bing traffic (which currently powers ChatGPT search and Copilot), verify your robots.txt inside Bing Webmaster Tools too.</p>

      <h3>Manual Verification</h3>
      <p>Verify your robots.txt is reachable: navigate to https://yourdomain.com/robots.txt inside a web browser. It should yield plain text paired with a 200 HTTP status code. A 404 response signifies all crawlers are effectively allowed (no robots.txt = no restrictions). A 500 server error might cause certain crawlers to treat the site as fully blocked.</p>

      <h2>Robots.txt vs. Robots Meta Tags</h2>
      <p>Robots.txt functions at the directory and URL level. To manage specific pages, insert the robots meta tag within the HTML <code>&lt;head&gt;</code>:</p>
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
      <p>For greater management, utilize the X-Robots-Tag HTTP response header, which applies to non-HTML documents like images and PDFs and can be applied dynamically:</p>
      <pre><code>{`X-Robots-Tag: noindex, nofollow
X-Robots-Tag: googlebot: noindex
X-Robots-Tag: noarchive`}</code></pre>

      <h2>Robots.txt for Various Website Categories</h2>

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

      <h3>Documentation for APIs (Solely Docs, No CMS)</h3>
      <pre><code>{`User-agent: *
# Allow everything — docs should be indexed
Disallow:

Sitemap: https://docs.example.com/sitemap.xml`}</code></pre>

      <h2>RFC 9309: The Standard Robots.txt Specification</h2>
      <p>Google released RFC 9309 in 2022, formally establishing a standard for robots.txt following nearly three decades of unofficial usage. Main details within the RFC:</p>
      <ul>
        <li>UTF-8 character encoding is mandatory for files</li>
        <li>Maximum file size: parsers ought to process up to 500 kibibytes; extra data could be discarded</li>
        <li>Matching for user-agents is case-insensitive</li>
        <li>Whenever a URL fits matching Allow and Disallow rules of identical length, Allow takes precedence</li>
        <li>Parsers ought to remain forgiving regarding extra whitespace and non-standard commands</li>
        <li>Unrecognized directives must be disregarded rather than treated as errors</li>
      </ul>
      <p>The real-world consequence: maintain your robots.txt file well below 500 KB. Excessively large robots.txt documents, often seen on pages possessing countless disallow instructions, risk having their final sections ignored.</p>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What defines a robots.txt file?',
    answer: 'A robots.txt file is a simple text document situated at a domain\'s root (example.com/robots.txt) that supplies directions to web scrapers, including search engines, AI scrapers, and archive bots, regarding what content they are allowed to visit. It adheres to the Robots Exclusion Protocol, currently standardized as RFC 9309. It serves merely as guidance, meaning bad actors bypass it.',
  },
  {
    category: 'General',
    question: 'Where does robots.txt need to be located?',
    answer: 'robots.txt has to reside at the domain root: https://example.com/robots.txt. It cannot sit inside a subdirectory, meaning /about/robots.txt fails to function. Every subdomain requires its individual robots.txt, so blog.example.com/robots.txt affects solely blog.example.com instead of example.com. Since HTTP and HTTPS function independently, ensure you upload robots.txt to the secure HTTPS variant.',
  },
  {
    category: 'General',
    question: 'What occurs when a website lacks a robots.txt document?',
    answer: 'Should robots.txt yield a 404 error, scrapers assume the entire website is open for crawling without limitations. If robots.txt produces a 500 server error, certain crawlers might temporarily view the domain as entirely restricted. An absent robots.txt harms very few websites, but implementing one, even containing simply `Disallow:`, enables the inclusion of a Sitemap command alongside establishing your scraping guidelines.',
  },
  {
    category: 'Syntax',
    question: 'What is the definition of Disallow: /?',
    answer: 'Disallow: / stops bots from visiting every single page across the website, because the / rule encompasses all paths. Apply this to development sites, staging environments, or launch pages you wish to keep hidden. Caution: despite utilizing Disallow: /, a URL might still show up in search outcomes if external pages reference it, meaning the address gets listed while the text remains uncrawled.',
  },
  {
    category: 'Syntax',
    question: 'What is the difference between Disallow: /folder and Disallow: /folder/?',
    answer: 'Disallow: /folder blocks /folder, /folder/, /folder/page, /folderpage, and /folder-archive, matching any path beginning with "/folder". Conversely, Disallow: /folder/ containing a trailing slash restricts access further by blocking /folder/ alongside all contained items, while permitting /folderpage and /folder-archive since they lack the trailing slash. Implement the slash-inclusive variant to restrict a specific folder without altering similarly named URLs.',
  },
  {
    category: 'Syntax',
    question: 'In what way do wildcards function inside robots.txt?',
    answer: 'Google alongside most contemporary crawlers supports two wildcards: * (asterisk) matches any character string. $ (dollar sign) denotes the URL conclusion. Examples: Disallow: /*.pdf$ stops all PDF documents. Disallow: /*?* halts all URLs containing query strings. Disallow: /search?* restricts every search URL. Disallow: /*session* blocks URLs featuring "session".',
  },
  {
    category: 'Syntax',
    question: 'How does the Allow directive interact with Disallow?',
    answer: 'Allow establishes exceptions to Disallow rules. Whenever a URL satisfies both, the more specific directive (longer path) prevails. Example: Disallow: /images/ paired with Allow: /images/hero/ signifies that the entirety of /images/ is restricted excluding /images/hero/. Should both directives share equal length, Allow triumphs over Disallow. This allows blocking an entire folder while permitting distinct subdirectories.',
  },
  {
    category: 'Syntax',
    question: 'Does Googlebot pay attention to Crawl-delay within robots.txt?',
    answer: 'No. Google deliberately ignores the Crawl-delay directive. To regulate Googlebot\'s crawling speed, utilize Google Search Console: Settings > Crawling > Configure Google crawl rate. Bing, Yandex, and select other crawlers do observe Crawl-delay. For Googlebot, handle crawl speed via Search Console instead of robots.txt.',
  },
  {
    category: 'Crawling',
    question: 'Will omitting a page through robots.txt eliminate it from Google search outcomes?',
    answer: 'No. Restricting a page inside robots.txt prevents Google from fetching it, yet fails to remove it from the index. Provided the page was previously crawled and indexed, or if alternative sites link toward it, it might still display in search listings (frequently accompanied by a "No information is available for this page" text). To purge a page from Google\'s index, deploy a noindex meta tag or Google Search Console\'s URL Removal Tool.',
  },
  {
    category: 'Crawling',
    question: 'What defines crawl budget and why does robots.txt influence it?',
    answer: 'Crawl budget represents the quantity of pages Google crawls across your website in a specific period. For massive sites (thousands plus pages), restricting low-value pages (pagination, filtered navigation, search results) via robots.txt preserves crawl budget for high-value materials, ensuring critical pages get crawled and indexed quicker. For compact sites under ~1,000 pages, crawl budget seldom poses a worry.',
  },
  {
    category: 'Crawling',
    question: 'How does a noindex meta tag differ from a robots.txt file?',
    answer: 'robots.txt dictates whether a page is eligible for crawling. The noindex meta tag governs whether a fetched page ought to be incorporated into the search index. Essential distinction: a noindex tag situated on a blocked page remains hidden (Google cannot crawl it to perceive the tag). To eradicate pages from the index, implement noindex — Google must possess the ability to crawl the page to parse the noindex command. Apply robots.txt to conserve crawl budget, and noindex to thwart indexing.',
  },
  {
    category: 'AI Crawlers',
    question: 'How can I restrict AI training crawlers via robots.txt?',
    answer: 'Employ tailored User-agent restrictions for every AI crawler: GPTBot (OpenAI), ChatGPT-User (ChatGPT browsing), Google-Extended (Gemini/Bard), anthropic-ai (Anthropic/Claude), CCBot (Common Crawl, utilized across numerous AI datasets), Bytespider (ByteDance), PerplexityBot (Perplexity). Append `Disallow: /` beneath each to block them across your entire website.',
  },
  {
    category: 'AI Crawlers',
    question: 'Does restricting AI crawlers stop my material from being utilized in LLMs?',
    answer: 'Blocking current crawlers deters future harvesting of your content, but leaves AI models already trained on prior versions unaffected. Common Crawl archives spanning years have fueled multiple LLM training datasets, meaning your content might already reside within certain models regardless. Blocking serves as a forward-looking safeguard, rather than a retroactive one.',
  },
  {
    category: 'SEO',
    question: 'Ought I to restrict search result pages within robots.txt?',
    answer: 'Yes, for the majority of sites. Internal search result pages (e.g., /search?q=...) typically represent near-duplicate content and consume crawl budget without delivering indexable value. Block those using Disallow: /search or Disallow: /*?q=. For e-commerce, additionally restrict faceted navigation filter combinations (Disallow: /*?color=, Disallow: /*?sort=) to prevent crawl budget wastage on thousands of filter combination pages.',
  },
  {
    category: 'SEO',
    question: 'Should I shield my staging or development website using robots.txt?',
    answer: 'Yes, consistently. Apply Disallow: / within your staging site\'s robots.txt to stop search engines from indexing duplicate pre-production content. Furthermore, include a noindex meta tag as a fallback. Never rely on robots.txt as the exclusive safeguard for a staging site — employ HTTP authentication as the primary control, with robots.txt acting as a secondary signal.',
  },
  {
    category: 'SEO',
    question: 'How should I manage URL parameters inside robots.txt?',
    answer: 'Restrict parameter variations that generate duplicate content: tracking parameters (Disallow: /*?utm_), session IDs (Disallow: /*?session_id=), pagination-via-parameter (Disallow: /*?page=). A superior option for Googlebot is Google Search Console\'s URL Parameters tool (presently deprecated) or parameter handling via canonical tags. Utilize Disallow for parameters creating genuinely pointless duplicate pages.',
  },
  {
    category: 'Security',
    question: 'Am I able to leverage robots.txt to safeguard confidential pages?',
    answer: 'No. robots.txt is a public document — anyone is able to view it. Restricting /admin/ inside robots.txt actually advertises that an /admin/ route exists. Malicious entities specifically scan robots.txt for sensitive routes. Implement authentication (login requirement, HTTP auth, IP allowlisting) to secure confidential pages. robots.txt is meant for managing crawler conduct, not security.',
  },
  {
    category: 'Security',
    question: 'Is robots.txt legally binding or are bots permitted to disregard it?',
    answer: 'robots.txt functions strictly as guidance — it represents a polite request rather than a legally binding rule. Well-behaved crawlers like Google, Bing, and trustworthy tools obey it. Conversely, malicious bots, scrapers, and automated spammers disregard it entirely. There is no automated technical block, though breaking robots.txt rules can sometimes carry legal risks under the Computer Fraud and Abuse Act (US) depending on the situation, as legal experts have discussed.',
  },
  {
    category: 'Technical',
    question: 'What is the maximum allowable size for a robots.txt file?',
    answer: 'RFC 9309 states that parsers ought to process at least 500 kibibytes (512 KB). Data exceeding that threshold might be disregarded by standard-compliant parsers. Ensure your robots.txt stays well below this limit. Excessively large robots.txt files originating from websites featuring thousands of specifically blocked URLs could have their final portions quietly ignored. Apply directory-based rules instead of enumerating individual URLs whenever possible.',
  },
  {
    category: 'Technical',
    question: 'How fast do search engines detect updates made to robots.txt?',
    answer: 'Search engines generally re-crawl robots.txt within a window of 24–48 hours following modifications. Google can occasionally take up to a few days. To accelerate this procedure, submit a crawl request via Google Search Console by navigating to URL Inspection > Request Indexing for the robots.txt URL. Modifications apply to fresh crawls — pages already queued in the crawling system might be retrieved prior to the detection of your new directives.',
  },
  {
    category: 'Technical',
    question: 'Are CSS and JavaScript files affected by robots.txt?',
    answer: 'Yes, and restricting access to them can negatively impact your website. Googlebot processes JavaScript and relies on CSS/JS to comprehend your layout and material. Should robots.txt block your CSS or JS assets, Googlebot fails to render pages properly, potentially overlooking information and misinterpreting site architecture. Avoid blocking any CSS, JavaScript, or font resources necessary for rendering your web pages.',
  },
  {
    category: 'Validation',
    question: 'How can I test whether my robots.txt functions properly?',
    answer: 'Utilize the robots.txt tester in Google Search Console to examine specific URLs against your directives. Confirm that the file remains accessible at https://yourdomain.com/robots.txt, which should yield an HTTP 200 response alongside plain text. Review the Bing Webmaster Tools robots.txt tester for validations specific to Bing. Regarding AI crawlers, verify blocking effectiveness by inspecting server access logs for incoming hits carrying the bot\'s user-agent string.',
  },
  {
    category: 'WordPress',
    question: 'How does WordPress manage robots.txt?',
    answer: 'WordPress automatically creates a virtual robots.txt file if no physical counterpart exists at the root directory. This virtual version remains basic, disallowing /wp-admin/ while omitting admin-ajax.php and displaying the sitemap. For greater oversight, generate a physical robots.txt file at the root of your WordPress setup, which overrides the virtual one, or employ a plugin like Yoast SEO offering an integrated robots.txt editor inside the dashboard.',
  },
  {
    category: 'Sitemap',
    question: 'Ought I to incorporate my sitemap inside robots.txt?',
    answer: 'Indeed, always do so. Add `Sitemap: https://example.com/sitemap.xml` within your robots.txt. This serves as the most dependable method to notify all major search engines regarding your sitemap destination. Multiple sitemaps can be listed. The Sitemap directive remains independent of any User-agent category, functioning as a global declaration. Furthermore, submit your sitemap directly through Google Search Console alongside Bing Webmaster Tools to achieve quicker discovery.',
  },
];

export const robotsTxtGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};

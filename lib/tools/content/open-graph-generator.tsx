import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

const WriteUp = () => (
  <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
    <div className="prose prose-slate max-w-none">
      <h2>Open Graph Generator: The Complete Guide to OG Tags, Social Media Meta Tags, and Link Previews</h2>
      <p>
        When someone shares a link on Facebook, Twitter/X, LinkedIn, Slack, Discord, WhatsApp, or virtually any modern platform, what appears in the preview card — the image, title, and description — is controlled by Open Graph meta tags embedded in the page's HTML. These tiny HTML elements are the difference between a bare, unappealing URL and a rich, compelling link preview that drives clicks, shares, and engagement. Open Graph (OG) tags are one of the highest-leverage SEO and social media marketing tools available, requiring only a few lines of HTML to implement but providing disproportionate benefits to click-through rates and social sharing performance.
      </p>
      <p>
        The Open Graph protocol was created by Facebook in 2010 and has since become the de facto standard for web content metadata, adopted by every major social platform, messaging app, and link-sharing service. Understanding how to implement Open Graph tags correctly — including the nuances between platforms, image size requirements, character limits, and debugging techniques — is essential for any web developer, SEO practitioner, or content marketer.
      </p>

      <h2>What Is the Open Graph Protocol?</h2>
      <p>
        Open Graph is a metadata protocol that enables web pages to become rich objects in a social graph. When Facebook created the protocol, the concept was that any web page should be able to declare its own semantic identity — what type of content it is (article, product, video, website), what its title is, what image represents it, and what description summarizes it — so that social platforms could display it correctly without attempting to infer this information from page content.
      </p>
      <p>
        OG tags are HTML <code>&lt;meta&gt;</code> elements placed in the <code>&lt;head&gt;</code> section of a page, using the <code>property</code> attribute with an <code>og:</code> prefix. The protocol is defined at ogp.me and uses RDFa (Resource Description Framework in Attributes) syntax:
      </p>
      <pre><code>{`<html prefix="og: https://ogp.me/ns#">
<head>
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Your Page Title" />
  <meta property="og:description" content="A compelling description." />
  <meta property="og:image" content="https://example.com/image.jpg" />
  <meta property="og:url" content="https://example.com/page" />
</head>`}</code></pre>
      <p>
        The <code>prefix</code> attribute on the <code>&lt;html&gt;</code> element is technically required by the OG spec but in practice universally omitted — all platforms parse OG tags correctly without it.
      </p>

      <h2>The Essential Open Graph Tags</h2>

      <h3>og:title</h3>
      <p>
        The title of your page as it should appear in the social share preview. This is distinct from the HTML <code>&lt;title&gt;</code> tag and can (should, often) differ from it. The OG title is the headline in the preview card — it should be compelling and click-worthy without being clickbait.
      </p>
      <p>
        Best practices for og:title:
      </p>
      <ul>
        <li>Keep it under 60–70 characters to avoid truncation on most platforms</li>
        <li>Don't append the site name — platforms often append it themselves using og:site_name</li>
        <li>Make it specific and descriptive rather than generic</li>
        <li>For articles and blog posts, match the H1 headline</li>
        <li>For product pages, include the product name and key differentiator</li>
      </ul>

      <h3>og:description</h3>
      <p>
        A one-to-two sentence description of the content. This appears as the body text of the preview card beneath the title. Like og:title, this can differ from the HTML <code>&lt;meta name="description"&gt;</code> tag, though they're often the same.
      </p>
      <p>
        Best practices for og:description:
      </p>
      <ul>
        <li>Aim for 100–150 characters — most platforms truncate around 200 characters but shorter is more reliably displayed</li>
        <li>Focus on value proposition — what does the reader gain from clicking?</li>
        <li>Don't duplicate the title — add information the title doesn't contain</li>
        <li>Include a soft call to action if appropriate</li>
        <li>Write for human readers, not algorithms</li>
      </ul>

      <h3>og:image</h3>
      <p>
        The image URL that appears in the preview card. This is the single most impactful OG tag — a striking image dramatically increases click-through rate and social sharing. Studies consistently show that posts with images receive 3× more engagement than text-only posts.
      </p>
      <p>
        Critical requirements for og:image:
      </p>
      <ul>
        <li><strong>URL must be absolute</strong> (https://example.com/image.jpg, not /image.jpg)</li>
        <li><strong>HTTPS required</strong> — HTTP images are blocked or ignored by most platforms</li>
        <li><strong>Must be publicly accessible</strong> — no authentication, no IP restrictions, no staging environments</li>
        <li><strong>Minimum recommended size</strong>: 1200×630 pixels (1.91:1 aspect ratio for Facebook, Twitter, LinkedIn)</li>
        <li><strong>Minimum file size for crawling</strong>: Facebook requires images larger than 200×200 pixels to show a preview card</li>
        <li><strong>Maximum file size</strong>: Facebook recommends under 8 MB; Twitter under 5 MB</li>
        <li><strong>Supported formats</strong>: JPEG, PNG, GIF (animated GIF works on some platforms), WebP (support varies)</li>
      </ul>

      <h3>og:url</h3>
      <p>
        The canonical URL of the page. This is the URL that will be associated with social engagement metrics when the page is shared from different URLs (e.g., https://example.com/page and https://www.example.com/page or a URL with UTM parameters). Setting og:url to the canonical URL consolidates likes and shares to one URL.
      </p>
      <p>
        Best practices:
      </p>
      <ul>
        <li>Match the canonical URL in your <code>&lt;link rel="canonical"&gt;</code> tag</li>
        <li>Use HTTPS, not HTTP</li>
        <li>Include or exclude www consistently with your canonical URL strategy</li>
        <li>Do not include tracking parameters (UTM, fbclid, etc.) in og:url</li>
      </ul>

      <h3>og:type</h3>
      <p>
        Declares the type of content. The most common values:
      </p>
      <ul>
        <li><code>website</code> — General website or web page (default, use for homepages and tool pages)</li>
        <li><code>article</code> — A news article, blog post, or editorial content</li>
        <li><code>product</code> — A product for sale</li>
        <li><code>video.movie</code>, <code>video.episode</code>, <code>video.tv_show</code> — Video content</li>
        <li><code>music.song</code>, <code>music.album</code>, <code>music.playlist</code> — Music content</li>
        <li><code>book</code> — A book</li>
        <li><code>profile</code> — A person's profile page</li>
      </ul>
      <p>
        Each type has additional type-specific properties. For <code>article</code>: <code>article:author</code>, <code>article:published_time</code>, <code>article:modified_time</code>, <code>article:section</code>, <code>article:tag</code>. For <code>product</code> (mostly relevant for Facebook Shops): price, currency, availability.
      </p>

      <h2>Additional Open Graph Tags</h2>

      <h3>og:site_name</h3>
      <p>
        The name of the overall website (not the page). Many platforms display this separately from the title, often in smaller text above or below the title. Example: <code>&lt;meta property="og:site_name" content="My Awesome Site" /&gt;</code>. This helps users understand which site the content is from when the domain alone isn't recognizable.
      </p>

      <h3>og:locale</h3>
      <p>
        The locale of the content in the format <code>language_TERRITORY</code>. Examples: <code>en_US</code>, <code>en_GB</code>, <code>fr_FR</code>, <code>de_DE</code>, <code>ja_JP</code>, <code>zh_CN</code>. Defaults to <code>en_US</code> if not specified. Use <code>og:locale:alternate</code> for multilingual pages. This tag influences which language version of the page Facebook's crawler indexes and how it's categorized.
      </p>

      <h3>og:image:width and og:image:height</h3>
      <p>
        Specifying the dimensions of your og:image allows Facebook's crawler to render the preview card immediately without first fetching the image to determine its dimensions. This is particularly important for first-time shares of a URL — without dimensions, Facebook may show a placeholder while it fetches and processes the image.
      </p>
      <pre><code>{`<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />`}</code></pre>

      <h3>og:image:alt</h3>
      <p>
        Alt text for the OG image — important for accessibility and used by screen readers when the shared link is encountered in accessible contexts. Write a descriptive alternative text that conveys the image's content and context: <code>&lt;meta property="og:image:alt" content="Screenshot showing the tool interface with example output" /&gt;</code>
      </p>

      <h2>Twitter Card Meta Tags</h2>
      <p>
        While Twitter/X reads many OG tags, it has its own meta tag system called Twitter Cards that provides Twitter-specific control over how links appear. Twitter Cards use the <code>name</code> attribute (not <code>property</code>) with a <code>twitter:</code> prefix.
      </p>

      <h3>twitter:card</h3>
      <p>
        Required for Twitter Cards. Specifies the card type:
      </p>
      <ul>
        <li><code>summary</code> — Small image on the left, title and description on the right</li>
        <li><code>summary_large_image</code> — Large image above the title and description (recommended for most content)</li>
        <li><code>app</code> — App download card for mobile apps</li>
        <li><code>player</code> — Video/audio player card</li>
      </ul>
      <p>
        For most web content, <code>summary_large_image</code> provides the best visual presentation and highest click-through rates.
      </p>

      <h3>twitter:title and twitter:description</h3>
      <p>
        Twitter-specific title and description. Twitter falls back to og:title and og:description if these aren't present. Twitter's character limits: title up to 70 characters, description up to 200 characters (though displays truncate earlier). Having explicit twitter: tags lets you optimize specifically for Twitter's preview format.
      </p>

      <h3>twitter:image</h3>
      <p>
        The image for the Twitter card. Twitter's recommended size: 1200×628 or 1200×630 pixels. Twitter supports JPEG, PNG, WebP, and GIF (animated GIFs play in cards). Twitter crops images differently based on card type — summary cards show a square crop of the image, while summary_large_image shows the full image with top/bottom cropping if needed.
      </p>

      <h3>twitter:site and twitter:creator</h3>
      <p>
        <code>twitter:site</code> is the @username of the website's Twitter account (e.g., @yoursite). <code>twitter:creator</code> is the @username of the content's creator/author. These are used by Twitter for attribution and may appear in the card display. Format: <code>&lt;meta name="twitter:site" content="@yourtwitterhandle" /&gt;</code>
      </p>

      <h2>Complete Open Graph + Twitter Card Implementation</h2>
      <pre><code>{`<!-- Open Graph / Facebook -->
<meta property="og:type" content="article" />
<meta property="og:url" content="https://example.com/blog/my-post" />
<meta property="og:title" content="Your Compelling Article Title" />
<meta property="og:description" content="A concise description that makes people want to read more. Keep it under 150 characters for best display." />
<meta property="og:image" content="https://example.com/images/article-cover.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Description of the image content" />
<meta property="og:site_name" content="Your Site Name" />
<meta property="og:locale" content="en_US" />

<!-- Article-specific Open Graph tags -->
<meta property="article:author" content="https://example.com/authors/jane-doe" />
<meta property="article:published_time" content="2024-04-15T09:00:00+00:00" />
<meta property="article:modified_time" content="2024-04-20T14:30:00+00:00" />
<meta property="article:section" content="Technology" />
<meta property="article:tag" content="SEO" />
<meta property="article:tag" content="Web Development" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@yoursite" />
<meta name="twitter:creator" content="@authorhandle" />
<meta name="twitter:title" content="Your Compelling Article Title" />
<meta name="twitter:description" content="Twitter-optimized description." />
<meta name="twitter:image" content="https://example.com/images/article-cover.jpg" />
<meta name="twitter:image:alt" content="Description of the image content" />`}</code></pre>

      <h2>Platform-Specific Behavior and Requirements</h2>

      <h3>Facebook</h3>
      <p>
        Facebook is the origin of the OG protocol and the most feature-complete implementation. Facebook's crawler (user-agent: facebookexternalhit) fetches pages when links are first shared. Key Facebook-specific behaviors:
      </p>
      <ul>
        <li>Images smaller than 200×200 pixels don't generate a preview card — only a text link is shown</li>
        <li>Facebook caches OG data aggressively — use the Facebook Sharing Debugger to force a re-scrape after updates</li>
        <li>Facebook uses og:url for consolidating engagement metrics across URL variants</li>
        <li>HTTPS required for images since 2018</li>
        <li>Facebook reads article:published_time and displays "X hours ago" style timestamps</li>
      </ul>

      <h3>LinkedIn</h3>
      <p>
        LinkedIn reads og: tags but also has specific requirements:
      </p>
      <ul>
        <li>Recommended image size: 1200×627 pixels</li>
        <li>LinkedIn's crawler (LinkedInBot) may be blocked by some WAFs and CDNs — ensure your User-Agent policy allows it</li>
        <li>LinkedIn uses og:description prominently and truncates at approximately 120 characters</li>
        <li>LinkedIn Post Inspector: post.linkedin.com/check for debugging</li>
        <li>LinkedIn doesn't support Twitter Card tags — relies entirely on OG tags</li>
      </ul>

      <h3>Twitter/X</h3>
      <p>
        Twitter reads both twitter: and og: tags, with twitter: taking precedence when both are present. Key behaviors:
      </p>
      <ul>
        <li>summary_large_image cards show images with a 2:1 aspect ratio crop focus center</li>
        <li>Twitter's Card Validator was deprecated; use Twitter's developer portal for testing</li>
        <li>Twitter truncates titles at approximately 70 characters</li>
        <li>gif, mp4 video previews require twitter:player card type</li>
        <li>Twitter images must be under 5 MB; recommended 1200×628 for large summary cards</li>
      </ul>

      <h3>Slack</h3>
      <p>
        Slack generates link previews (called "unfurls") using OG tags. Slack's behavior:
      </p>
      <ul>
        <li>Slack reads og:title, og:description, og:image, and og:site_name</li>
        <li>Slack truncates descriptions at approximately 130 characters</li>
        <li>Slack respects og:image:width and og:image:height to avoid extra fetches</li>
        <li>Slack caches unfurls for a short time — post the URL again to re-fetch after updates</li>
        <li>Slack Custom Unfurls (via Slack app API) can override OG-based unfurls for specific domains</li>
      </ul>

      <h3>Discord</h3>
      <p>
        Discord reads OG tags and also has specific embed behavior:
      </p>
      <ul>
        <li>Discord reads og:title, og:description, og:image, and og:color (non-standard)</li>
        <li><code>&lt;meta name="theme-color" content="#FF5733" /&gt;</code> sets the left-side accent color of Discord embeds</li>
        <li>Discord supports og:video for video embeds — inline video playback in Discord messages</li>
        <li>Images larger than 8 MB may not display; Discord recommends under 5 MB</li>
        <li>Discord bot permissions and channel settings can override link preview display</li>
      </ul>

      <h3>WhatsApp</h3>
      <p>
        WhatsApp generates link previews for shared URLs using OG tags:
      </p>
      <ul>
        <li>WhatsApp reads og:title, og:description, and og:image</li>
        <li>WhatsApp shows the domain name as site attribution (not og:site_name)</li>
        <li>Image aspect ratio matters — WhatsApp crops to approximately square</li>
        <li>WhatsApp previews can be disabled by the user in settings</li>
      </ul>

      <h2>Dynamic Open Graph Images</h2>
      <p>
        Static OG images work for fixed pages, but content-heavy sites (blogs, news, e-commerce, documentation) benefit enormously from dynamically generated OG images — images that are automatically created with the page's title, author, date, and branding.
      </p>

      <h3>Server-Side Generation Approaches</h3>
      <p>
        Next.js provides a built-in <code>opengraph-image</code> file convention that generates OG images using the ImageResponse API (built on Satori and React). Place an <code>opengraph-image.tsx</code> file in any route segment:
      </p>
      <pre><code>{`// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return new ImageResponse(
    <div style={{ background: '#1a1a2e', width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column', padding: 60 }}>
      <h1 style={{ color: 'white', fontSize: 60, fontWeight: 700 }}>
        {post.title}
      </h1>
      <p style={{ color: '#94a3b8', fontSize: 28 }}>{post.author}</p>
    </div>
  );
}`}</code></pre>

      <h3>Vercel OG (Satori)</h3>
      <p>
        Satori is an open-source library (vercel/satori) that converts HTML/CSS to SVG, which is then rasterized to PNG or JPEG. It runs at the edge in the Vercel/Cloudflare Workers runtime, enabling fast, low-latency OG image generation without a full Node.js server.
      </p>

      <h3>Puppeteer/Playwright Screenshot</h3>
      <p>
        For complex OG images with full CSS support, use a headless browser (Puppeteer, Playwright) to render an HTML template and take a screenshot. This approach supports any CSS including animations, WebGL, and complex layouts, but is significantly slower and more resource-intensive than Satori.
      </p>

      <h2>Debugging and Testing Open Graph Tags</h2>

      <h3>Facebook Sharing Debugger</h3>
      <p>
        The Facebook Sharing Debugger (developers.facebook.com/tools/debug/) is the canonical tool for checking and refreshing Facebook's OG tag cache. Enter a URL to see exactly what Facebook reads, including any warnings or errors. Use "Scrape Again" to force Facebook to re-fetch the page after you update OG tags. This is essential because Facebook caches OG data aggressively — changes won't appear in new shares until Facebook re-scrapes.
      </p>

      <h3>LinkedIn Post Inspector</h3>
      <p>
        LinkedIn's Post Inspector (linkedin.com/post-inspector/) shows how LinkedIn reads your OG tags and lets you clear the cache to see updates. The LinkedIn crawler can sometimes have access issues — if your tags look correct but LinkedIn shows incorrect data, check that LinkedInBot is not blocked by your server or CDN.
      </p>

      <h3>Browser DevTools</h3>
      <p>
        Use browser DevTools to inspect OG tags locally. In the Elements panel, search for <code>og:</code> or <code>twitter:</code> in the head section. Extensions like "OGP Checker" or "MetaSEO Inspector" display all meta tags in a structured format.
      </p>

      <h3>Common OG Tag Errors</h3>
      <ul>
        <li><strong>Missing og:image</strong>: No image appears in preview — add an og:image with an absolute HTTPS URL</li>
        <li><strong>Relative image URL</strong>: og:image="/images/cover.jpg" fails — must be absolute (https://example.com/images/cover.jpg)</li>
        <li><strong>Image too small</strong>: Facebook shows no card — image must be at least 200×200 pixels</li>
        <li><strong>HTTP image URL</strong>: Blocked on HTTPS pages — use HTTPS image URLs</li>
        <li><strong>Bot blocked</strong>: Server blocks crawler user-agents — allow facebookexternalhit, LinkedInBot, Twitterbot</li>
        <li><strong>JavaScript-rendered content</strong>: Crawlers often don't execute JavaScript — OG tags must be in the static HTML, not injected by JavaScript</li>
        <li><strong>Missing og:url</strong>: Engagement metrics split across URL variants — always set og:url to canonical URL</li>
      </ul>

      <h2>Open Graph and SEO</h2>
      <p>
        While OG tags are not directly ranking factors in Google Search (Google ignores most OG tags in favor of its own semantic analysis), they have indirect SEO benefits:
      </p>
      <ul>
        <li><strong>Improved CTR from social traffic</strong>: Better-looking link previews drive more social traffic to your site</li>
        <li><strong>Social signals</strong>: While their direct SEO weight is debated, pages with high social engagement tend to attract more backlinks</li>
        <li><strong>Brand recognition</strong>: Consistent, professional-looking OG images build brand recognition in social feeds</li>
        <li><strong>Indirect link building</strong>: Compelling shared content earns natural backlinks from people who discover it via social media</li>
      </ul>
      <p>
        The og:description does not substitute for <code>&lt;meta name="description"&gt;</code> in search engine results. Maintain both — the meta description for search result snippets, and og:description for social media previews. They may differ in length and tone.
      </p>

      <h2>Implementing Open Graph in Popular Frameworks</h2>

      <h3>Next.js (App Router)</h3>
      <pre><code>{`// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: \`https://example.com/blog/\${params.slug}\`,
      siteName: 'My Site',
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}`}</code></pre>

      <h3>React Helmet (React SPA)</h3>
      <pre><code>{`import { Helmet } from 'react-helmet-async';

<Helmet>
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>`}</code></pre>

      <h3>WordPress (Yoast SEO or All in One SEO)</h3>
      <p>
        Both major WordPress SEO plugins automatically generate OG tags from your post/page data. Yoast SEO: set the "Social" tab in the post meta box to customize per-page OG data. You can upload a specific social image, override the title, and write a custom social description. All in One SEO provides similar controls under the "Social" section.
      </p>

      <h2>Open Graph Image Design Best Practices</h2>
      <p>
        The OG image is your social media advertisement. Treat it with as much care as a display ad:
      </p>
      <ul>
        <li><strong>Brand consistency</strong>: Use consistent colors, fonts, and logo placement across all OG images</li>
        <li><strong>Text legibility</strong>: Any text in the image should be readable at the thumbnail size shown in feeds — minimum 32px equivalent after scaling</li>
        <li><strong>Safe zone</strong>: Keep important content within the central 1000×500 pixels — platforms crop differently</li>
        <li><strong>Contrast</strong>: Ensure text has sufficient contrast against the background</li>
        <li><strong>Avoid clutter</strong>: One clear focal point beats a busy composition in a small card format</li>
        <li><strong>Test at small size</strong>: Preview at 400×210 — that's roughly how it appears in many social feeds</li>
        <li><strong>Template system</strong>: Create templates so different content types have consistent, professional OG images without manual work for each piece of content</li>
      </ul>
    </div>
  </section>
);

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What are Open Graph tags and why do they matter?',
    answer: 'Open Graph (OG) tags are HTML meta elements in your page\'s <head> that control how your content appears when shared on social media platforms like Facebook, Twitter, LinkedIn, Slack, and Discord. They define the title, description, image, and URL shown in link preview cards. Well-optimized OG tags dramatically improve click-through rates and social sharing engagement.',
  },
  {
    category: 'General',
    question: 'What are the most important Open Graph tags to include?',
    answer: 'The four essential OG tags are: og:title (the preview card headline), og:description (the preview body text), og:image (the preview card image — must be absolute HTTPS URL, at least 1200×630 pixels), and og:url (the canonical URL of the page). Add og:type (website or article) and og:site_name for completeness.',
  },
  {
    category: 'General',
    question: 'Where do Open Graph tags go in the HTML?',
    answer: 'OG tags go in the <head> section of your HTML document, along with other meta tags. They use the property attribute with an og: prefix: <meta property="og:title" content="Your Title" />. They must be in the static HTML — search crawlers and social scrapers typically don\'t execute JavaScript, so OG tags injected via JavaScript may not be read.',
  },
  {
    category: 'Images',
    question: 'What are the recommended dimensions for an Open Graph image?',
    answer: 'The standard recommendation is 1200×630 pixels (a 1.91:1 ratio), which works well across Facebook, LinkedIn, and Twitter summary_large_image cards. Minimum for Facebook to show a card: 200×200 pixels. For Twitter large image cards: 1200×628 pixels. Keep important content within the central area as platforms may crop edges differently.',
  },
  {
    category: 'Images',
    question: 'Does the og:image need to be an absolute URL?',
    answer: 'Yes, og:image must be an absolute URL including the protocol and domain: https://example.com/images/og.jpg. A relative URL like /images/og.jpg will not work — social scrapers fetch the image from outside the context of your page, so they cannot resolve relative URLs. Additionally, the URL must use HTTPS — HTTP images are blocked by most platforms on HTTPS pages.',
  },
  {
    category: 'Images',
    question: 'What image formats are supported for og:image?',
    answer: 'JPEG and PNG are universally supported. GIF is supported on most platforms (animated GIFs play on some). WebP has growing support but isn\'t universal. For maximum compatibility, use JPEG (smaller file size for photos) or PNG (for graphics and transparent backgrounds). Avoid WebP if targeting older integrations or email clients.',
  },
  {
    category: 'Twitter',
    question: 'What is a Twitter Card and how does it differ from Open Graph?',
    answer: 'Twitter Cards are Twitter\'s own meta tag system using <meta name="twitter:..."> attributes. They provide Twitter-specific control over link previews. Twitter falls back to og: tags if twitter: tags aren\'t present, so you can use just OG tags for basic support. Twitter-specific tags let you control the card type (summary vs summary_large_image), and provide Twitter-optimized title/description/image overrides.',
  },
  {
    category: 'Twitter',
    question: 'What is twitter:card and which value should I use?',
    answer: 'twitter:card specifies the card display format. Values: "summary" (small square image left, text right), "summary_large_image" (large image above text — recommended for most content), "app" (app download card), "player" (video/audio player). Use summary_large_image for articles, blog posts, and product pages — it provides the most visual impact and typically higher click-through rates.',
  },
  {
    category: 'Platforms',
    question: 'How do I debug Open Graph tags on Facebook?',
    answer: 'Use the Facebook Sharing Debugger at developers.facebook.com/tools/debug/. Enter your URL to see what Facebook reads. Click "Scrape Again" to force Facebook to re-fetch and update its cache after you\'ve made changes — without this, old OG data may display for new shares for hours or days. The tool also shows warnings for missing tags and image size issues.',
  },
  {
    category: 'Platforms',
    question: 'How do I debug Open Graph tags on LinkedIn?',
    answer: 'Use LinkedIn\'s Post Inspector at linkedin.com/post-inspector/. Enter your URL to see the preview LinkedIn generates. If you\'ve updated OG tags, click "Inspect" to force a refresh. If LinkedIn\'s crawler can\'t access your page, check that LinkedInBot user-agent isn\'t blocked by your server or WAF. LinkedIn caches previews and may take a few minutes to update.',
  },
  {
    category: 'Platforms',
    question: 'How do I set the accent color for Discord embeds?',
    answer: 'Discord reads the <meta name="theme-color" content="#HEXCODE"> tag to set the left-side accent color of link embeds. This is a non-standard extension not part of OG spec. Example: <meta name="theme-color" content="#5865F2"> for a Discord-branded blue. Discord also supports og:video for inline video playback within Discord messages.',
  },
  {
    category: 'SEO',
    question: 'Do Open Graph tags affect Google Search rankings?',
    answer: 'Google primarily ignores OG tags for ranking, using its own semantic analysis instead. However, OG tags have indirect SEO benefits: better social preview cards drive more social traffic, popular content earns natural backlinks, and increased brand visibility from consistent social sharing can improve brand search volume over time. Keep og:description separate from meta description — they serve different purposes.',
  },
  {
    category: 'SEO',
    question: 'Is og:description the same as meta description?',
    answer: 'No. og:description (<meta property="og:description">) is for social media preview cards. meta description (<meta name="description">) is for search engine result snippets. You should have both. They can have different content — og:description can be more conversational and engaging, while meta description should be SEO-optimized and fit Google\'s ~155 character display limit.',
  },
  {
    category: 'Implementation',
    question: 'How do I add Open Graph tags in Next.js?',
    answer: 'In Next.js App Router, use the generateMetadata function to return metadata including an openGraph object: `return { openGraph: { title, description, images: [{ url: imageUrl, width: 1200, height: 630 }], type: "article" } }`. For dynamic OG images, create an opengraph-image.tsx file in the route segment using Next.js\'s ImageResponse API.',
  },
  {
    category: 'Implementation',
    question: 'How do I implement dynamic Open Graph images for each blog post?',
    answer: 'Options: (1) Next.js opengraph-image.tsx with ImageResponse API — renders React JSX to a PNG at the edge. (2) Vercel/Satori library — converts HTML/CSS to SVG/PNG, very fast. (3) Puppeteer/Playwright screenshot — full CSS support but slower. (4) Pre-generate and store static images per post at build time. Next.js + Satori is the recommended approach for most modern web apps.',
  },
  {
    category: 'Implementation',
    question: 'How do I implement Open Graph tags in WordPress?',
    answer: 'Use Yoast SEO (most popular) or All in One SEO plugin. Both automatically generate OG tags from post data. Customize per page: in Yoast, use the "Social" tab in the post meta box to set a custom social image, title, and description. The plugins handle og:type, og:url, and article: tags automatically based on post type.',
  },
  {
    category: 'Technical',
    question: 'Why aren\'t my updated Open Graph tags showing up in social media?',
    answer: 'Social platforms cache OG data. Use the platform\'s debug tool to force a re-scrape: Facebook Sharing Debugger (click "Scrape Again"), LinkedIn Post Inspector (click "Inspect"). For Twitter, post a new tweet with the URL. For Slack, post the URL again in a channel. Cached data can persist for hours to days without forced refresh.',
  },
  {
    category: 'Technical',
    question: 'Why do my Open Graph tags work in the browser but not in social media previews?',
    answer: 'Social scrapers often don\'t execute JavaScript. If your OG tags are injected by JavaScript (React, Vue, Angular without SSR), scrapers see the pre-JavaScript HTML without OG tags. Fix: use server-side rendering (Next.js, Nuxt.js), static site generation, or server-side rendering middleware that injects OG tags before the response. OG tags must be in the initial HTML response.',
  },
  {
    category: 'Technical',
    question: 'What is og:url and why is it important?',
    answer: 'og:url declares the canonical URL for the page. Platforms use this to consolidate social engagement metrics (likes, shares, comments) when a page is accessed from different URLs (www vs non-www, HTTP vs HTTPS, with UTM parameters). Without og:url, likes from example.com/page and www.example.com/page are counted separately. Set it to your canonical URL without tracking parameters.',
  },
  {
    category: 'Article Tags',
    question: 'What are article: Open Graph tags and when should I use them?',
    answer: 'Article-type OG tags (article:author, article:published_time, article:modified_time, article:section, article:tag) provide metadata for news articles and blog posts. Use them when og:type is "article". article:published_time enables Facebook to display "Published X hours ago." article:author links to the author\'s profile. They\'re particularly important for news sites using Google\'s News features.',
  },
  {
    category: 'Best Practices',
    question: 'Should og:title be different from the HTML <title> tag?',
    answer: 'Often yes. The HTML <title> tag is optimized for search results (often includes site name: "Article Title | Site Name"). The og:title should be optimized for social sharing — typically just the compelling headline without the site name suffix (platforms often display site name from og:site_name separately). Keep og:title under 60–70 characters to avoid truncation.',
  },
  {
    category: 'Best Practices',
    question: 'How long should og:description be?',
    answer: 'Keep og:description under 150 characters for reliable display across all platforms. Facebook and LinkedIn truncate around 200 characters, Twitter around 200 characters, Slack around 130. A description of 100–150 characters displays fully on nearly every platform. Focus on a concise value proposition rather than fitting as much information as possible.',
  },
  {
    category: 'Best Practices',
    question: 'What makes a good Open Graph image?',
    answer: 'Effective OG images: (1) 1200×630px, HTTPS, under 5MB. (2) Clear, readable text if any — minimum 32px effective at thumbnail size. (3) Brand consistency — recognizable colors, logo placement. (4) Single focal point — not cluttered. (5) Important content within central safe zone. (6) Good contrast. Test how it looks at 400×210px (typical feed display size). Dynamic template-generated images at scale maintain consistency.',
  },
];

export const openGraphGeneratorContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};

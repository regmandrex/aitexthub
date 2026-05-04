import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>URL Shortener: Free Online Tool to Create Short, Trackable Links</h2>
        <p>
          Long URLs are a persistent pain point in digital communication. A URL with query parameters,
          UTM tracking codes, and deep path components can easily exceed 200 characters "” making it
          impossible to tweet, awkward in emails, unreadable in print, and error-prone when typed
          manually. URL shorteners solve this by mapping a long destination URL to a compact, memorable
          short link that redirects visitors to the original. Our free URL shortener creates short links
          instantly, with optional custom slugs, click tracking, QR code generation, and expiration
          date control.
        </p>
        <p>
          Short URLs have become essential infrastructure in digital marketing (UTM parameter links
          for attribution), social media sharing (character-limited platforms), print marketing
          (scannable QR codes on physical materials), email campaigns (avoiding wrapping and tracking
          clicks), developer APIs (webhook URLs shared in documentation), and anywhere a clean,
          memorable link improves communication.
        </p>

        <h2>How URL Shortening Works</h2>
        <p>
          A URL shortener is fundamentally a redirect service. When you shorten <code>https://example.com/very/long/path?with=parameters&amp;and=more</code>
          to <code>https://short.ly/abc123</code>, the shortener stores a mapping in a database:
          <code>abc123 â†’ https://example.com/very/long/path?...</code>.
        </p>
        <p>
          When someone visits <code>https://short.ly/abc123</code>, the shortener's server looks up
          <code>abc123</code> in the database and responds with an HTTP redirect to the original URL.
          The two most common redirect types are:
        </p>
        <ul>
          <li>
            <strong>301 Moved Permanently</strong>: the original URL has permanently moved to this
            destination. Browsers and search engines cache this redirect, meaning subsequent visits
            go directly to the destination without hitting the shortener's server. Lower server load,
            but click tracking becomes inaccurate after caching. Best for link permanence.
          </li>
          <li>
            <strong>302 Found (Temporary Redirect)</strong>: the destination may change. Browsers
            do not cache this redirect "” every visit goes through the shortener's server, enabling
            accurate click counting and destination URL changes. Best for marketing campaigns that
            need tracking and the ability to update the destination.
          </li>
          <li>
            <strong>307 Temporary Redirect</strong>: similar to 302 but strictly preserves the HTTP
            method (POST remains POST through the redirect). Less commonly used by URL shorteners
            but technically correct for non-GET redirects.
          </li>
        </ul>
        <p>
          Most URL shortening services use 302 redirects for tracking purposes, even for links that
          will never change, because it enables accurate click analytics.
        </p>

        <h2>The Short Code: Base62 Encoding</h2>
        <p>
          The short code at the end of a shortened URL (the "abc123" in "short.ly/abc123") is typically
          generated using Base62 encoding. Base62 uses the 62-character alphabet of uppercase letters
          (A-Z), lowercase letters (a-z), and digits (0-9), producing URL-safe strings without any
          special characters that need encoding.
        </p>
        <p>
          With Base62:
        </p>
        <ul>
          <li>4 characters = 62^4 = 14,776,336 unique codes</li>
          <li>5 characters = 62^5 = 916,132,832 unique codes (~1 billion)</li>
          <li>6 characters = 62^6 = 56,800,235,584 unique codes (~57 billion)</li>
          <li>7 characters = 62^7 = 3,521,614,606,208 unique codes (~3.5 trillion)</li>
        </ul>
        <p>
          Most URL shorteners start with 5-6 character codes and increase length as the code space
          fills. The short codes are generated either randomly (secure, no sequential guessing) or
          from an auto-incrementing integer converted to Base62 (predictable but compact).
        </p>

        <h2>Custom Short Links: Branded and Memorable</h2>
        <p>
          Custom slugs let you replace a random code with a meaningful word: <code>short.ly/summer-sale</code>
          instead of <code>short.ly/xK9mP2</code>. Branded short links using custom domains
          (<code>yourcompany.link/sale</code>) are even more effective "” they reinforce brand
          recognition, increase click-through rates (users are more likely to click links from
          recognizable domains), and survive link scanning that blocks generic shortener domains.
        </p>
        <p>
          Best practices for custom slugs:
        </p>
        <ul>
          <li>Keep them short "” the whole point is brevity</li>
          <li>Use hyphens for readability: <code>black-friday</code> not <code>blackfriday</code></li>
          <li>Make them campaign-specific: <code>webinar-jan15</code> not just <code>webinar</code></li>
          <li>Avoid ambiguous characters (1/l, 0/O) for manually-typed links</li>
          <li>Be consistent with naming conventions across your team</li>
        </ul>

        <h2>UTM Parameters and Marketing Attribution</h2>
        <p>
          UTM (Urchin Tracking Module) parameters are query string parameters added to URLs to track
          the source, medium, and campaign of traffic in web analytics tools like Google Analytics,
          Adobe Analytics, and Mixpanel. A typical UTM-tagged URL looks like:
        </p>
        <p>
          <code>https://example.com/product?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=spring-launch&amp;utm_content=hero-cta&amp;utm_term=buy-now</code>
        </p>
        <p>
          This 130+ character URL is unwieldy in email or print. Shortening it to <code>short.ly/spring</code>
          makes it usable while the UTM parameters are preserved in the destination URL and tracked in
          analytics. The shortener click count provides an additional data point: total clicks vs.
          conversions (analytics-tracked sessions).
        </p>
        <p>
          The five standard UTM parameters:
        </p>
        <ul>
          <li><strong>utm_source</strong>: the referrer (newsletter, google, facebook, partner)</li>
          <li><strong>utm_medium</strong>: the channel (email, cpc, social, banner, affiliate)</li>
          <li><strong>utm_campaign</strong>: the campaign name (spring-launch, black-friday-2024)</li>
          <li><strong>utm_content</strong>: distinguishes ads/links within a campaign (hero-image, sidebar-text)</li>
          <li><strong>utm_term</strong>: for paid search, the keyword that triggered the ad</li>
        </ul>

        <h2>QR Codes and Short URLs</h2>
        <p>
          QR codes and URL shorteners are natural complements. A QR code encoding a full 200-character
          URL with UTM parameters produces a dense, error-prone matrix that scanning apps struggle with
          in poor lighting or at small print sizes. A QR code encoding a short 20-character URL produces
          a simple, easily scannable matrix that remains readable even when printed small, scratched,
          or photographed at an angle.
        </p>
        <p>
          Our URL shortener generates a QR code alongside the short link. The QR code uses the short
          URL, not the destination URL, so:
        </p>
        <ul>
          <li>The QR code pattern is simpler and more reliable to scan</li>
          <li>The destination can be changed without reprinting the QR code (if using 302 redirect)</li>
          <li>Click analytics work even for scans (the redirect goes through the tracking server)</li>
          <li>The QR code can be embedded in PDFs, slide decks, and print designs immediately</li>
        </ul>

        <h2>Click Analytics and Link Performance</h2>
        <p>
          The analytics capabilities of URL shorteners vary significantly by service. Our shortener
          provides:
        </p>
        <ul>
          <li><strong>Total clicks</strong>: cumulative click count since link creation</li>
          <li><strong>Unique clicks</strong>: de-duplicated by IP address and user agent (approximate unique visitors)</li>
          <li><strong>Click timeline</strong>: clicks over time (hourly, daily, weekly views)</li>
          <li><strong>Geographic breakdown</strong>: top countries and cities by click volume</li>
          <li><strong>Referrer data</strong>: which websites or apps sent clicks to your short link</li>
          <li><strong>Device and browser breakdown</strong>: mobile vs desktop, browser types</li>
          <li><strong>UTM click attribution</strong>: if the destination URL has UTM parameters, attribution is transparent</li>
        </ul>
        <p>
          Click analytics are invaluable for measuring campaign performance, A/B testing (different
          short links to the same destination), and understanding audience behavior.
        </p>

        <h2>URL Shortener Privacy and Security Concerns</h2>

        <h3>Link Scanning and Malicious Redirects</h3>
        <p>
          URL shorteners can obscure the true destination of a link, which has been exploited to hide
          phishing URLs, malware downloads, and scam pages. Reputable shorteners address this through:
          destination URL scanning against known malicious URL lists, requiring login for link creation
          (reduces anonymous abuse), rate limiting, and flagging links reported by users.
        </p>
        <p>
          Users have learned to be suspicious of shortened links from unknown senders. Hover over
          links to preview the shortener domain (though not the destination), use browser extensions
          that expand short URLs before clicking, or preview-check at services like longurl.org.
        </p>

        <h3>Link Rot</h3>
        <p>
          Short links break when the shortener service shuts down. bit.ly links from 2009 that pointed
          to content on companies that no longer exist are doubly dead "” the shortener is gone and the
          destination is gone. This "link rot" is a serious problem for web archival, academic citations,
          and long-term documentation.
        </p>
        <p>
          Best practices: for permanent content, use canonical long URLs in official documentation.
          Use short links primarily for temporary campaigns, social sharing, and print materials where
          brevity is essential. Consider self-hosted shorteners (yourls.org, kutt.it) for organizational
          links that must remain functional long-term.
        </p>

        <h3>Tracking and Privacy</h3>
        <p>
          URL shorteners track clicks, often including IP addresses, browser fingerprints, and referrer
          data. Users clicking your short link should be aware that their click is logged. For privacy-
          conscious audiences, either use links to privacy-respecting content, avoid tracking-heavy
          shorteners, or use short links only where analytics are essential and disclose tracking in
          your privacy policy.
        </p>

        <h2>Building Your Own URL Shortener</h2>
        <p>
          A basic URL shortener is a classic beginner-to-intermediate web development project that
          teaches database design, HTTP redirects, and URL generation. Core components:
        </p>

        <h3>Database Schema</h3>
        <p>
          A minimal URL mapping table:
        </p>
        <pre>{`CREATE TABLE short_links (
    id          BIGINT PRIMARY KEY AUTO_INCREMENT,
    short_code  VARCHAR(10) NOT NULL UNIQUE,
    long_url    TEXT NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at  TIMESTAMP NULL,
    click_count BIGINT DEFAULT 0
);
CREATE INDEX idx_short_code ON short_links (short_code);`}</pre>

        <h3>Short Code Generation</h3>
        <p>
          Option 1 (Base62 from auto-increment ID): convert the auto-incremented ID to Base62. ID=1
          â†’ "1", ID=62 â†’ "10", ID=1000 â†’ "g8". Simple but exposes record count.
        </p>
        <p>
          Option 2 (Random): generate a cryptographically random 6-character Base62 string, check for
          collisions (rare but possible), retry if collision detected. Safe but requires a collision check.
        </p>
        <p>
          Option 3 (Hashids): use the hashids library to convert integers to unique, obfuscated strings.
          Deterministic (same ID always â†’ same code) and collision-free, but reversible by anyone
          with your salt.
        </p>

        <h3>Redirect Handler</h3>
        <p>
          GET /:code â†’ look up in database â†’ if found, increment click_count, return 302 redirect
          â†’ if not found, return 404. Add caching (Redis or in-memory) for high-traffic links.
          Log analytics data asynchronously to avoid adding latency to the redirect.
        </p>

        <h3>Scaling Considerations</h3>
        <p>
          Popular URL shorteners handle billions of redirects per day. At scale: use a cache layer
          (Redis with TTL matching link expiration) to avoid database hits on every redirect; use
          async analytics writes (message queue + background worker) to keep redirect latency under 10ms;
          distribute the database geographically (replicas near users reduce latency); and use CDN edge
          workers for ultra-low-latency redirects.
        </p>

        <h2>Self-Hosted URL Shorteners</h2>
        <p>
          For organizations that need control over their URL namespace, self-hosted open-source
          shorteners are available:
        </p>
        <ul>
          <li>
            <strong>YOURLS</strong> (Your Own URL Shortener): PHP-based, self-hosted, plugin ecosystem.
            The most widely deployed self-hosted shortener.
          </li>
          <li>
            <strong>Kutt</strong>: Node.js + PostgreSQL, modern UI, API, analytics, custom domains.
          </li>
          <li>
            <strong>Shlink</strong>: PHP, comprehensive REST API, QR code generation, GeoLite analytics.
          </li>
          <li>
            <strong>Polr</strong>: PHP/Laravel, clean interface, user management.
          </li>
          <li>
            <strong>Simple Redirect (Cloudflare Workers)</strong>: serverless, zero-cost at low volumes,
            deployable in minutes.
          </li>
        </ul>

        <h2>URL Shorteners in APIs and Integrations</h2>
        <p>
          Major URL shortening services provide REST APIs for programmatic link creation:
        </p>
        <ul>
          <li>
            <strong>Bitly API</strong>: the most widely integrated shortener. Supported by email
            marketing platforms (Mailchimp, HubSpot), social media scheduling tools, CRM systems.
          </li>
          <li>
            <strong>TinyURL</strong>: simple API, no authentication required for basic shortening.
          </li>
          <li>
            <strong>Rebrandly</strong>: branded links API with custom domain support, widely used
            for enterprise link management.
          </li>
        </ul>
        <p>
          When integrating a URL shortener into your application, consider: rate limits (most free
          plans limit API calls per minute), link permanence (what happens if the service shuts down),
          and analytics data ownership (who owns the click data "” you or the shortener service).
        </p>

        <h2>Privacy of Our URL Shortener</h2>
        <p>
          When you create a short link with our tool, we store the mapping between your short code
          and your long URL to enable the redirect service. We collect minimal analytics data (click
          counts, general geographic data) to provide the analytics features. We do not sell link
          data to third parties. Links can be set to expire automatically. Our privacy policy details
          all data handling practices.
        </p>
        <p>
          For the URL preview and generation features on this page, all processing happens in your
          browser. For actual link shortening (which requires server-side storage for the redirect),
          see our link management dashboard.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a URL shortener?',
    answer:
      'A URL shortener maps a long URL to a short alias. When someone visits the short link, they are redirected (via HTTP 301 or 302) to the original long URL. This makes long URLs with parameters shareable on social media, in print, and anywhere brevity matters.',
  },
  {
    category: 'General',
    question: 'What is the difference between a 301 and 302 redirect?',
    answer:
      '301 (Moved Permanently): browsers cache this redirect "” subsequent visits bypass the shortener and go directly to the destination. Better for SEO but makes click tracking inaccurate after caching. 302 (Found/Temporary): browsers do not cache "” every visit goes through the shortener, enabling accurate click counting and destination URL changes.',
  },
  {
    category: 'General',
    question: 'Are short URLs permanent?',
    answer:
      'Only if the shortening service stays operational. Short links break when the service shuts down (link rot). For permanent content, prefer canonical long URLs in official documentation. Use short links primarily for campaigns, social sharing, and print materials where brevity is essential.',
  },
  {
    category: 'Custom Links',
    question: 'What is a custom slug?',
    answer:
      'A custom slug replaces a random code (short.ly/xK9mP2) with a meaningful word (short.ly/summer-sale). Custom slugs are more memorable, trustworthy to click, and campaign-specific. Best practices: use hyphens, keep short, make campaign-specific, avoid ambiguous characters.',
  },
  {
    category: 'Custom Links',
    question: 'What are branded short links?',
    answer:
      'Branded short links use a custom domain you own (yourcompany.link/sale) instead of a generic shortener domain. They reinforce brand recognition, increase click-through rates, and survive URL scanning that blocks generic shortener domains. Require a custom domain and a shortener that supports custom domains (Bitly, Rebrandly, Kutt).',
  },
  {
    category: 'Analytics',
    question: 'What analytics do URL shorteners provide?',
    answer:
      'Most shorteners provide: total click count, unique clicks (approximate by IP), clicks over time (daily/weekly chart), geographic breakdown (country/city), referrer data (where clicks came from), and device/browser breakdown (mobile vs desktop). Premium plans often include more detailed analytics.',
  },
  {
    category: 'Analytics',
    question: 'Do URL shorteners track the IP addresses of people who click?',
    answer:
      'Yes "” most URL shorteners log IP addresses to count unique clicks and provide geographic analytics. IPs are typically hashed or anonymized for analytics display but may be retained in logs. Review the shortener&#39;s privacy policy to understand data retention. Clicking a short link is always a privacy-exposing action.',
  },
  {
    category: 'UTM',
    question: 'What are UTM parameters and why use them with short links?',
    answer:
      'UTM parameters (utm_source, utm_medium, utm_campaign, utm_content, utm_term) are query string parameters that tell analytics tools (Google Analytics) where traffic came from. A UTM-tagged URL is often 100+ characters "” shortening it makes it shareable while preserving attribution data in the destination URL.',
  },
  {
    category: 'UTM',
    question: 'How do UTM parameters work with URL shorteners?',
    answer:
      'Shorten the full UTM-tagged URL: https://example.com?utm_source=email&utm_campaign=spring â†’ short.ly/spring. When clicked, the redirect goes to the full UTM URL. Analytics tools see the UTM parameters and attribute the session correctly. The shortener click count plus analytics session count give you complete attribution data.',
  },
  {
    category: 'QR Codes',
    question: 'Why use a short URL for QR codes instead of the full URL?',
    answer:
      'Shorter URLs produce simpler QR code patterns with fewer modules. Simpler patterns are easier to scan (especially at small print sizes, in poor lighting, or when printed/displayed at low resolution). A QR code for a 20-character short URL is far more reliable than one for a 200-character UTM-tagged URL.',
  },
  {
    category: 'Security',
    question: 'Are short links safe to click?',
    answer:
      'Short links can hide malicious destinations "” this is a known phishing technique. Precautions: hover to see the shortener domain (not destination) before clicking, use browser extensions that expand short URLs, only click from trusted senders. Reputable shorteners scan destinations against malware/phishing databases.',
  },
  {
    category: 'Security',
    question: 'How do reputable URL shorteners prevent abuse?',
    answer:
      'Measures include: scanning destination URLs against Google Safe Browsing API, requiring account login for link creation, rate limiting, user reporting of malicious links, blocking certain destination URL patterns, and suspending accounts that create malicious links.',
  },
  {
    category: 'Technical',
    question: 'How is the short code generated?',
    answer:
      'Most shorteners use Base62 encoding (A-Z, a-z, 0-9 = 62 characters), producing URL-safe 5-7 character codes. Generation methods: (1) convert auto-increment database ID to Base62 (simple, no collisions, but exposes record count); (2) random Base62 string with collision check (secure); (3) Hashids (deterministic, obfuscated integer encoding).',
  },
  {
    category: 'Technical',
    question: 'How does a URL shortener handle millions of redirects efficiently?',
    answer:
      'At scale: cache short code â†’ long URL mappings in Redis (microsecond lookup vs millisecond database), write analytics asynchronously (message queue, not in the redirect path), use CDN edge workers for global low-latency redirects, and use read replicas for database scalability. The redirect handler should complete in under 10ms.',
  },
  {
    category: 'Self-Hosted',
    question: 'What are good self-hosted URL shortener options?',
    answer:
      'YOURLS (PHP, plugin ecosystem, most widely used), Kutt (Node.js + PostgreSQL, modern API, analytics), Shlink (PHP, comprehensive REST API, GeoLite analytics), Polr (PHP/Laravel, clean UI), or a Cloudflare Workers-based solution (serverless, zero-cost at low volumes). Self-hosting ensures link permanence and data ownership.',
  },
  {
    category: 'Link Rot',
    question: 'What is link rot and how do I prevent it?',
    answer:
      'Link rot occurs when short links stop working "” because the shortener shuts down, changes its domain, or deletes old links. Prevention: use self-hosted shorteners for organizational links that must persist, document original long URLs alongside short links, use service with long track records (Bitly has been running since 2008), and avoid relying on short links in permanent documentation.',
  },
  {
    category: 'Features',
    question: 'What is a link expiration date?',
    answer:
      'A link expiration date causes a short link to stop redirecting after a set date/time. Useful for: time-limited promotions (link expires when sale ends), temporary access (temporary download link), event links (webinar registration closes after event). Our shortener supports optional expiration with custom 410 Gone or redirect-to-homepage behavior after expiry.',
  },
  {
    category: 'Features',
    question: 'Can I edit the destination of a short link after creating it?',
    answer:
      'With 302 (temporary) redirects, yes "” update the stored long URL and all future visitors go to the new destination. With 301 (permanent) redirects, cached browsers may continue going to the old destination even after you update it. Most shorteners use 302 to preserve the ability to change destinations.',
  },
  {
    category: 'API',
    question: 'How do I shorten URLs programmatically?',
    answer:
      'Most shorteners provide REST APIs. Bitly API example: POST https://api-ssl.bitly.com/v4/shorten with Authorization: Bearer {token} and body {"long_url": "https://example.com/..."}. Returns {"link": "https://bit.ly/abc123"}. TinyURL has a simple API requiring no authentication. Check rate limits on free plans.',
  },
  {
    category: 'Best Practices',
    question: 'When should I use a URL shortener?',
    answer:
      'Use URL shorteners for: social media posts (character limits), print marketing (QR codes, typed URLs), email campaigns (cleaner appearance, click tracking), sharing complex URLs with UTM parameters, A/B testing different destinations, and any context where brevity or tracking is essential. For permanent documentation and canonical links, use full URLs.',
  },
  {
    category: 'General',
    question: 'What is a free URL shortener?',
    answer:
      'A free URL shortener is an online tool that converts a long web address into a compact short link at no cost. Free URL shorteners work by storing the long URL in a database and assigning it a short random or custom alias. When a visitor clicks the short link, the service looks up the original URL and redirects the browser automatically. This tool is a free URL shortener that requires no account or sign-up.',
  },
  {
    category: 'General',
    question: 'How do I create a short URL for free?',
    answer:
      'To create a short URL for free, paste your long URL into the input field above and click the Shorten button. The tool generates a compact short link instantly. You can optionally enter a custom alias to make the short URL more memorable. The short URL is ready to copy and share immediately "” no account required.',
  },
  {
    category: 'Technical',
    question: 'What is a custom URL shortener?',
    answer:
      'A custom URL shortener lets you choose the alias that appears after the domain in the short link, rather than using a random character string. For example, instead of a random short URL, a custom URL shortener lets you create a branded link. Custom URL shorteners are used for branded links in marketing campaigns, memorable vanity URLs for presentations and print materials, and internal tools where readable short links improve usability.',
  },
];

export const urlShortenerContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};

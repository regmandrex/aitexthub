import { buildMeta } from '@/lib/seo-meta';
import type { Metadata } from 'next';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: 'Cookie Policy - GPTCLEANUP AI Privacy & Tracking',
    description: 'Cookie Policy for GPTCLEANUP AI tools.',
    urlPath: '/cookie-policy',
  });
}

export default function CookiePolicyPage() {
  return (
    <article className="prose max-w-none prose-slate">
      <h1>Cookie Policy</h1>
      <p>Last Updated: July 7, 2023</p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your computer, tablet, or mobile device when you visit a website. They help websites function
        properly, improve performance, remember preferences, and deliver relevant ads or analytics.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>GPT CLEAN UP uses cookies to ensure our tools and website work smoothly and securely. We use the following types of cookies:</p>

      <h3>Essential Cookies</h3>
      <p>
        These cookies are necessary for basic site functionality, such as navigation, tool operation, and access to secure areas. The site
        cannot function properly without them.
      </p>

      <h3>Analytics Cookies</h3>
      <p>We use analytics tools (such as Google Analytics) to gather anonymized information about:</p>
      <ul>
        <li>how visitors use our site</li>
        <li>which pages are most popular</li>
        <li>how tools perform</li>
      </ul>
      <p>This helps us improve user experience.</p>

      <h3>Advertising Cookies</h3>
      <p>GPT CLEAN UP displays ads to support our free service. Advertising partners (such as Google AdSense) may use cookies to:</p>
      <ul>
        <li>deliver relevant ads</li>
        <li>limit how often you see an ad</li>
        <li>measure ad performance</li>
        <li>customize ads based on general browsing behavior</li>
      </ul>
      <p>Your input text is never shared with advertisers.</p>

      <h2>3. Third-Party Services</h2>
      <p>We use trusted third-party providers to help operate the site:</p>
      <ul>
        <li>Google AdSense - used to display ads. AdSense may use cookies to personalize ads.</li>
        <li>Google Analytics - used for anonymous site usage statistics.</li>
      </ul>
      <p>These services have their own privacy and cookie policies, which you can review here:</p>
      <ul>
        <li>
          Google Privacy &amp; Terms:{' '}
          <a href="https://policies.google.com/privacy" rel="noreferrer" target="_blank">
            https://policies.google.com/privacy
          </a>
        </li>
        <li>
          Google Analytics Data Practices:{' '}
          <a href="https://support.google.com/analytics/answer/6004245" rel="noreferrer" target="_blank">
            https://support.google.com/analytics/answer/6004245
          </a>
        </li>
      </ul>

      <h2>4. Managing Cookies &amp; Opt-Out Options</h2>
      <p>You have full control over how cookies are used.</p>
      <p>You can:</p>
      <ul>
        <li>disable cookies through your browser settings</li>
        <li>block analytics cookies using browser add-ons</li>
        <li>opt-out of personalized advertising</li>
      </ul>
      <p>Useful Links:</p>
      <ul>
        <li>Google Ads Settings</li>
        <li>Network Advertising Initiative Opt-Out Tool</li>
        <li>Google Analytics Opt-Out Browser Add-On</li>
      </ul>
      <p>If you disable certain cookies, some parts of the website may not function as designed.</p>

      <h2>5. Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy when laws, services, or technologies change. Updated versions will be posted here with a revised
        &quot;Last Updated&quot; date.
      </p>
      <p>Continued use of GPT CLEAN UP after updates means you accept the changes.</p>

      <h2>6. Contact Us</h2>
      <p>For questions about this Cookie Policy, contact us at:</p>
      <p>
        <a href="mailto:support@gpthelpertools.com">support@gpthelpertools.com</a>
      </p>
    </article>
  );
}

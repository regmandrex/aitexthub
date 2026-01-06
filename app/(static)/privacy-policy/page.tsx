import { buildMeta } from '@/lib/seo-meta';

export const metadata = buildMeta({
  title: 'Privacy Policy | GPT CLEAN UP',
  description: 'Privacy details for GPT CLEAN UP tools.',
  urlPath: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <article className="prose max-w-none prose-slate">
      <h1>Privacy Policy</h1>
      <p>Last Updated: July 7, 2023</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to GPT CLEAN UP (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Your privacy is extremely important to us. GPT CLEAN
        UP was built with a privacy-first foundation, meaning your text remains fully under your control at all times.
      </p>
      <p>Our philosophy is simple: Your words belong to you we do not collect, store, or analyze them.</p>
      <p>This Privacy Policy explains how we handle information when you use our website and tools.</p>

      <h2>2. Privacy by Design (Local Processing)</h2>
      <p>GPT CLEAN UP uses client-side processing, which means:</p>
      <ul>
        <li>All text cleaning and formatting operations occur directly in your browser.</li>
        <li>Your text never leaves your device.</li>
        <li>We do not send your input to any server.</li>
        <li>We do not store, log, or collect the content you paste into our tools.</li>
        <li>Your writing stays private at every step.</li>
      </ul>

      <h2>3. Information We Do Not Collect</h2>
      <p>To be completely clear, GPT CLEAN UP does NOT collect:</p>
      <ul>
        <li>text you paste into our tools</li>
        <li>uploaded documents</li>
        <li>personal messages</li>
        <li>drafts or writing samples</li>
        <li>user-generated content</li>
        <li>personal data such as name, address, phone number</li>
        <li>browsing content</li>
        <li>cookies related to your text input</li>
      </ul>
      <p>We do not sell or share user text with anyone.</p>

      <h2>4. Advertising &amp; Cookies</h2>
      <p>GPT CLEAN UP is a free platform supported in part by third-party advertising networks such as Google AdSense.</p>
      <p>This means:</p>
      <ul>
        <li>Third-party vendors may use cookies or device identifiers to serve relevant ads.</li>
        <li>
          Google and its partners may use cookies (including the DoubleClick cookie) to deliver personalized or non-personalized ads.
        </li>
        <li>Cookies may track basic visit information (e.g., pages viewed) for ad delivery only.</li>
      </ul>
      <p>Your Choices: You can opt out of personalized advertising via:</p>
      <ul>
        <li>
          Google Ads Settings:{' '}
          <a href="https://www.google.com/settings/ads" rel="noreferrer" target="_blank">
            https://www.google.com/settings/ads
          </a>
        </li>
        <li>
          Network Advertising Initiative opt-out page:{' '}
          <a href="https://www.networkadvertising.org/choices" rel="noreferrer" target="_blank">
            https://www.networkadvertising.org/choices
          </a>
        </li>
      </ul>
      <p>Disabling cookies will not affect your ability to use GPT CLEAN UP tools.</p>

      <h2>5. Data Security</h2>
      <p>We take privacy and security seriously:</p>
      <ul>
        <li>All text processing happens locally on your device.</li>
        <li>Your input is never transmitted to our servers.</li>
        <li>Advertisements do not have access to your tool usage or text entries.</li>
        <li>We deliberately separate ads from tool functionality.</li>
      </ul>
      <p>
        Although no online system is 100% secure, our design ensures minimum exposure by keeping your content offline.
      </p>

      <h2>6. Analytics</h2>
      <p>
        To understand general site usage, we may use privacy-focused analytics that collect non-personal, high-level data (e.g., number of
        visitors, popular pages).
      </p>
      <p>These analytics:</p>
      <ul>
        <li>do not track individual users</li>
        <li>do not store text inputs</li>
        <li>do not collect personal data</li>
      </ul>
      <p>We use analytics only to improve the website experience.</p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>GPT CLEAN UP is not designed for children under 13. We do not knowingly collect any information from children.</p>

      <h2>8. Your Rights &amp; Controls</h2>
      <p>Because we do not collect personal data from your tool usage, there is:</p>
      <ul>
        <li>nothing for us to access</li>
        <li>nothing to modify</li>
        <li>nothing to delete</li>
      </ul>
      <p>You maintain full ownership and control of your text at all times.</p>
      <p>You may still:</p>
      <ul>
        <li>disable cookies in your browser</li>
        <li>opt out of personalized ads</li>
        <li>adjust privacy settings at any time</li>
      </ul>

      <h2>9. Updates to This Privacy Policy</h2>
      <p>
        We may revise this policy as we add tools, features, or advertising partners. Any updates will be reflected in the &quot;Last
        Updated&quot; date at the top of this page.
      </p>

      <h2>10. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, contact us at:</p>
      <p>
        <a href="mailto:support@gptcleanuptools.com">support@gptcleanuptools.com</a>
      </p>
      <p>We are happy to help with any privacy-related concerns.</p>
    </article>
  );
}

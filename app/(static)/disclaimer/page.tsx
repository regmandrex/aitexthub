import { buildMeta } from '@/lib/seo-meta';
import { getServerLocale } from '@/lib/server-i18n';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getServerLocale();
  return buildMeta({
    title: 'Disclaimer - GPT CLEAN UP AI Text Tools Terms',
    description: 'Disclaimer for GPT CLEAN UP tools.',
    urlPath: '/disclaimer',
    locale,
  });
}

export default function DisclaimerPage() {
  return (
    <article className="prose max-w-none prose-slate">
      <h1>Disclaimer</h1>
      <p>Last Updated: July 7, 2023</p>

      <h2>1. General Information</h2>
      <p>
        The content, tools, and resources provided on GPT CLEAN UP (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) are intended for general
        informational and educational purposes only. Nothing on this website should be interpreted as professional, legal, academic,
        technical, or financial advice.
      </p>
      <p>Your use of our website and tools is entirely at your own discretion and risk.</p>

      <h2>2. Accuracy, Completeness &amp; Tool Functionality</h2>
      <p>We strive to offer accurate, reliable, and up-to-date information and utilities. However:</p>
      <ul>
        <li>we do not guarantee the completeness, accuracy, or performance of any tool</li>
        <li>we do not guarantee that any feature will always work without errors</li>
        <li>results may vary depending on browser, device, or input</li>
        <li>content or functionality may change at any time without notice</li>
      </ul>
      <p>The tools are provided strictly on an &quot;as-is&quot; and &quot;as-available&quot; basis.</p>

      <h2>3. No Professional or Academic Guarantees</h2>
      <p>GPT CLEAN UP does not provide:</p>
      <ul>
        <li>legal advice</li>
        <li>academic validation</li>
        <li>guarantees regarding AI detectors</li>
        <li>recommendations for academic submission</li>
        <li>assurances that cleaned text will meet institutional rules</li>
      </ul>
      <p>
        Users are responsible for ensuring their use of AI-assisted content complies with all applicable laws, school policies, and
        workplace standards.
      </p>
      <p>We strongly encourage reviewing outputs manually before using them in assignments, publications, or professional work.</p>

      <h2>4. No Affiliation With Third-Party Brands</h2>
      <p>
        GPT CLEAN UP is not affiliated with, endorsed by, or in partnership with any AI model, company, detector, or platform referenced on
        this website.
      </p>
      <p>Any brand names, model names, trademarks, or references are used strictly for descriptive, educational, or comparative purposes.</p>
      <p>We make no claims of approval or authorization from any third-party brand.</p>

      <h2>5. Third-Party Links &amp; External Resources</h2>
      <p>Our website may reference or link to external websites, APIs, or software platforms. These links are provided for convenience only.</p>
      <p>We do not control or guarantee:</p>
      <ul>
        <li>the accuracy of third-party content</li>
        <li>privacy practices of third-party websites</li>
        <li>security of external services</li>
        <li>compatibility with external APIs or tools</li>
      </ul>
      <p>Users should review third-party terms and privacy policies before interacting with external websites.</p>

      <h2>6. Affiliate Disclosure</h2>
      <p>
        Some pages may contain affiliate or partner links. If you choose to purchase a product or service through these links, we may earn a
        small commission at no additional cost to you.
      </p>
      <p>Affiliate partnerships never influence our reviews, comparisons, or editorial decisions.</p>

      <h2>7. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, GPT CLEAN UP shall not be liable for:</p>
      <ul>
        <li>errors or omissions in content</li>
        <li>tool malfunctions</li>
        <li>loss of data</li>
        <li>academic or professional consequences</li>
        <li>reliance on any tool output</li>
        <li>indirect, incidental, or consequential damages</li>
      </ul>
      <p>Use of the Service is at your own risk.</p>

      <h2>8. Changes to This Disclaimer</h2>
      <p>
        We may update this Disclaimer periodically. Updates will be posted here with an updated &quot;Last Updated&quot; date. Continued use of
        the website indicates your acceptance of any changes.
      </p>

      <h2>9. Contact Us</h2>
      <p>If you have any concerns regarding this Disclaimer, contact us at:</p>
      <p>
        <a href="mailto:support@gptcleanuptools.com">support@gptcleanuptools.com</a>
      </p>
      <p>We respond as quickly as possible.</p>
    </article>
  );
}

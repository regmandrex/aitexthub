import { buildMeta } from '@/lib/seo-meta';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

export async function generateMetadata() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  
  return buildMeta({
    title: t('TermsPage.metaTitle'),
    description: t('TermsPage.metaDescription'),
    urlPath: '/terms-of-service',
  });
}

export default async function TermsOfServicePage() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  
  return (
    <article className="prose max-w-none prose-slate">
      <h1>{t('TermsPage.title')}</h1>
      <p>{t('TermsPage.lastUpdated')}</p>
      <p>{t('TermsPage.intro')}</p>

      <h2>{t('TermsPage.section1Title')}</h2>
      <p>{t('TermsPage.section1Text')}</p>

      <h2>{t('TermsPage.section2Title')}</h2>
      <p>{t('TermsPage.section2Text1')}</p>
      <p>{t('TermsPage.section2Text2')}</p>

      <h2>{t('TermsPage.section3Title')}</h2>
      <p>{t('TermsPage.section3Text1')}</p>
      <p>{t('TermsPage.section3Text2')}</p>
      <ul>
        <li>{t('TermsPage.section3Item1')}</li>
        <li>{t('TermsPage.section3Item2')}</li>
        <li>{t('TermsPage.section3Item3')}</li>
        <li>{t('TermsPage.section3Item4')}</li>
        <li>{t('TermsPage.section3Item5')}</li>
        <li>{t('TermsPage.section3Item6')}</li>
      </ul>

      <h2>4. User Content</h2>
      <p>You retain full ownership of any text or content you input into the Service.</p>
      <p>
        By using the Service, you grant us permission to process your content solely for the purpose of operating and improving the Service.
      </p>
      <p>We do not store or retain your text after processing, unless explicitly agreed for optional feedback or diagnostics.</p>

      <h2>5. Intellectual Property</h2>
      <p>
        All design, code, features, branding, and tools provided through GPT CLEAN UP are protected by copyright and other intellectual
        property laws.
      </p>
      <p>You may not reproduce, resell, or redistribute any part of the Service without our permission.</p>

      <h2>6. Disclaimer of Warranties</h2>
      <p>
        The Service is provided without warranties of any kind, including implied warranties of merchantability, fitness for a particular
        purpose, or non-infringement.
      </p>
      <p>We do not guarantee uninterrupted, error-free, or fully secure operation.</p>

      <h2>7. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, GPT CLEAN UP and its operators shall not be liable for:</p>
      <ul>
        <li>indirect, incidental, or consequential damages</li>
        <li>loss of data</li>
        <li>business interruption</li>
        <li>damages arising from use or inability to use the Service</li>
      </ul>
      <p>Your use of the Service is at your own risk.</p>

      <h2>8. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless GPT CLEAN UP, its owners, developers, and affiliates from any claims or damages arising from:
      </p>
      <ul>
        <li>your misuse of the Service</li>
        <li>your violation of these Terms</li>
        <li>your violation of applicable laws</li>
      </ul>

      <h2>9. Advertising and Third-Party Services</h2>
      <p>The Service may display ads. Advertisers or third-party networks may use cookies or identifiers to serve relevant ads.</p>
      <p>Your text is never shared with advertisers.</p>
      <p>External services (e.g., analytics or ad providers) are governed by their own privacy policies and terms.</p>

      <h2>10. Modifications to Terms</h2>
      <p>
        We may update these Terms from time to time. When changes occur, the updated Terms will be posted here with an updated &quot;Last
        Updated&quot; date.
      </p>
      <p>Continued use of the Service after updates means you accept the revised Terms.</p>

      <h2>11. Governing Law</h2>
      <p>These Terms shall be governed under the laws of the United States, without regard to conflict-of-law principles.</p>

      <h2>12. Contact</h2>
      <p>For questions regarding these Terms, contact us at:</p>
      <p>
        <a href="mailto:support@gpthelpertools.com">support@gpthelpertools.com</a>
      </p>
    </article>
  );
}

import { navLinks } from '../navigation';

export const siteUrl = 'https://gptcleanuptools.com';

export const organizationId = `${siteUrl}/#organization`;

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    // Google derives the search-result site name primarily from this and the
    // homepage title. Lead with the descriptive brand we want shown.
    name: 'ChatGPT Text Cleaner',
    alternateName: ['GPTCLEANUP AI', 'GPT Clean Up Tools', 'AI Text Cleaner'],
    url: siteUrl,
    // Ties the site to the publishing entity so Google resolves one entity
    // instead of treating WebSite and Organization as unrelated nodes.
    publisher: { '@id': organizationId },
    // No potentialAction/SearchAction here on purpose: sitewide search is
    // client-side only (SearchableToolsList filters in React), so there is no
    // ?q= URL for Google to deep-link into. Declaring one would advertise an
    // endpoint that does not exist.
  };
}

// Anonymous-friendly entity signals only — no Person/author identity by design.
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: 'GPTCLEANUP AI',
    alternateName: ['GPT Clean Up Tools', 'ChatGPT Text Cleaner'],
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/brand/gpt-clean-up-tools.png`,
      width: 200,
      height: 56,
    },
    description:
      'Free browser-based tools that remove hidden Unicode, fix spacing, and normalize AI-generated text for publishing.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@gptcleanuptools.com',
      url: `${siteUrl}/contact`,
      availableLanguage: ['English'],
    },
  };
}

export function siteNavigationSchema() {
  const navUrls = navLinks.map((link) => (link.href === '/' ? siteUrl : `${siteUrl}${link.href}`));

  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: navLinks.map((link) =>
      link.href === '/' ? 'Home' : link.href === '/ai-tools' ? 'AI Tools' : link.href
    ),
    url: navUrls,
  };
}

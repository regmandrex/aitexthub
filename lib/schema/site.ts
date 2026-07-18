import { navLinks } from '../navigation';

export const siteUrl = 'https://gptcleanuptools.com';

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    // Google derives the search-result site name primarily from this and the
    // homepage title. Lead with the descriptive brand we want shown.
    name: 'ChatGPT Text Cleaner',
    alternateName: ['GPTCLEANUP AI', 'GPT Clean Up Tools', 'AI Text Cleaner'],
    url: siteUrl,
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

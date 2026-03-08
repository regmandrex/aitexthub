import { navLinks } from '../navigation';

export const siteUrl = 'https://gptcleanuptools.com';

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GPT CLEAN UP Tools',
    url: siteUrl,
  };
}

export function siteNavigationSchema() {
  const navUrls = navLinks.map((link) => (link.href === '/' ? siteUrl : `${siteUrl}${link.href}`));

  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: navLinks.map((link) => link.key),
    url: navUrls,
  };
}

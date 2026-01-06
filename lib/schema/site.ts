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
  const navUrls = navLinks.map((link) => {
    if (link.href.includes('#')) {
      return `${siteUrl}${link.href}`;
    }
    return `${siteUrl}${link.href.endsWith('/') ? link.href : `${link.href}/`}`;
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: navLinks.map((link) => link.label),
    url: navUrls,
  };
}

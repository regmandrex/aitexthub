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
  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: navLinks.map((link) => link.label),
    url: navLinks.map((link) => `${siteUrl}${link.href.endsWith('/') ? link.href : `${link.href}/`}`),
  };
}


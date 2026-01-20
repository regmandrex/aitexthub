import { addLocaleToPath, type SupportedLocale } from './i18n';

export const navLinks = [
  { href: '/', key: 'Nav.home' },
  { href: '/all-tools', key: 'Nav.tools' },
];

export function getLocalizedNavLinks(locale: SupportedLocale) {
  return navLinks.map((link) => ({
    ...link,
    href: addLocaleToPath(link.href, locale),
  }));
}

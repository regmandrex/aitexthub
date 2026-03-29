export const navLinks = [
  { href: '/' },
  { href: '/ai-tools' },
];

export function getLocalizedNavLinks() {
  return navLinks.map((link) => ({ ...link, href: link.href }));
}

export const navLinks = [
  { href: '/', key: 'Nav.home' },
  { href: '/ai-tools', key: 'Nav.tools' },
];

export function getLocalizedNavLinks() {
  return navLinks.map((link) => ({ ...link, href: link.href }));
}

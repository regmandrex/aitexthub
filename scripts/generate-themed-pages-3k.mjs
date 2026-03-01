/**
 * Generate themed name generator pages from Steam template.
 * Reads app/steam-name-generator/page.tsx and themed-generator-themes.json,
 * applies per-theme replacements, writes app/{slug}/page.tsx.
 * Skip slug "steam-name-generator".
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const templatePath = path.join(root, 'app', 'steam-name-generator', 'page.tsx');
const themesPath = path.join(__dirname, 'themed-generator-themes.json');

function slugToPageName(slug) {
  const words = slug.split('-').filter(Boolean);
  const pascal = words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return pascal.replace(/NameGenerator$/, 'NameGenerator') + 'Page';
}

function applyTheme(content, theme) {
  const pageName = slugToPageName(theme.slug);
  const esc = (s) => (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  let out = content
    .replace(/steam-name-generator/g, theme.slug)
    .replace(/Steam Name Generator/g, theme.title)
    .replace(/Steam name generator/g, theme.toolName)
    .replace(/ – Gaming Usernames and Gamer Tags/g, (theme.subtitle ? ' – ' + theme.subtitle : ' – ' + theme.nameType))
    .replace(/Steam username/g, theme.nameType && theme.nameType.includes('username') ? theme.shortName + ' username' : theme.shortName + ' name')
    .replace(/Steam or your platform/g, theme.platform)
    .replace(/Steam or any platform/g, theme.shortName + ' or any platform')
    .replace(/usernames and gamer tags/g, theme.nameType)
    .replace(/gaming platforms/g, theme.useCase)
    .replace(/gamer-style/g, theme.styleDesc)
    .replace(/SteamNameGeneratorPage/g, pageName)
    .replace(/Common questions about the Steam name generator\./g, 'Common questions about the ' + theme.toolName + '.')
    .replace(/generatorKey="steam"/, theme.resultLabel
      ? `generatorKey="${theme.generatorKey}" resultLabel="${theme.resultLabel}"`
      : `generatorKey="${theme.generatorKey}"`);

  if (!theme.nameType.includes('gamer')) out = out.replace(/gamer tag/g, 'character name');

  const metaDesc = /description: '[\s\S]*?',/;
  const metaSeo = /seoTitle: '[\s\S]*?',/;
  out = out.replace(metaDesc, "description: '" + esc(theme.description) + "',");
  out = out.replace(metaSeo, "seoTitle: '" + esc(theme.seoTitle) + "',");

  out = out.split('Steam ').join(theme.shortName + ' ');
  out = out.split("Steam's ").join(theme.shortName + "'s ");
  out = out.split(' on Steam ').join(' on ' + theme.shortName + ' ');
  out = out.split(' to Steam ').join(' to ' + theme.shortName + ' ');
  out = out.split(' for Steam ').join(' for ' + theme.shortName + ' ');
  return out;
}

const template = fs.readFileSync(templatePath, 'utf8');
const themes = JSON.parse(fs.readFileSync(themesPath, 'utf8'));

for (const theme of themes) {
  if (theme.slug === 'steam-name-generator') continue;
  const pagePath = path.join(root, 'app', theme.slug, 'page.tsx');
  if (!fs.existsSync(path.dirname(pagePath))) {
    console.warn('Skip (no dir):', theme.slug);
    continue;
  }
  const content = applyTheme(template, theme);
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log('OK:', theme.slug);
}

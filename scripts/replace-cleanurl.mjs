import fs from 'fs';
import path from 'path';

function* walk(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory() && e.name !== 'node_modules' && e.name !== '.next') yield* walk(full);
      else if (e.isFile() && /\.(tsx?|ts)$/.test(e.name)) yield full;
    }
  } catch (_) {}
}

const root = process.cwd();
const files = [...walk(path.join(root, 'app')), ...walk(path.join(root, 'components'))];

let count = 0;
for (const file of files) {
  let c = fs.readFileSync(file, 'utf-8');
  if (!c.includes('cleanUrl')) continue;
  const orig = c;
  c = c.replace(/import \{ cleanUrl \} from ['"]@\/lib\/seo\/url['"];?/g, "import { siteUrl } from '@/lib/seo/url';");
  c = c.replace(/const url = cleanUrl\(toolSlug\);?/g, 'const url = `${siteUrl}/${toolSlug}`;');
  c = c.replace(/url: cleanUrl\('([^']+)'\)/g, (_, s) => `url: \`\${siteUrl}/${s}\``);
  c = c.replace(/const url = cleanUrl\(`\$\{modelSlug\}-line-spacing`\);?/g, 'const url = `${siteUrl}/${modelSlug}-line-spacing`;');
  c = c.replace(/const url = cleanUrl\(`\$\{modelSlug\}-space-remover`\);?/g, 'const url = `${siteUrl}/${modelSlug}-space-remover`;');
  c = c.replace(/const url = cleanUrl\(`\$\{modelSlug\}-watermark-detector`\);?/g, 'const url = `${siteUrl}/${modelSlug}-watermark-detector`;');
  if (c !== orig) {
    fs.writeFileSync(file, c);
    count++;
  }
}
console.log('Updated', count, 'files');

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
  if (!c.includes("from '@/lib/seo/url'") || !c.includes("from '@/lib/schema/site'")) continue;
  const orig = c;
  c = c.replace(/\nimport \{ siteUrl \} from ['"]@\/lib\/schema\/site['"];?\n?/g, '\n');
  if (c !== orig) {
    fs.writeFileSync(file, c);
    count++;
  }
}
console.log('Removed duplicate siteUrl import from', count, 'files');

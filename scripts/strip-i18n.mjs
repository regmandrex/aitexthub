import fs from 'fs';
import path from 'path';

const root = path.join(process.cwd());

function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'node_modules' && e.name !== '.git') yield* walk(full);
    } else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) {
      yield full;
    }
  }
}

let count = 0;
for (const file of walk(path.join(root, 'app'))) {
  let s = fs.readFileSync(file, 'utf8');
  const orig = s;
  s = s.replace(/\nimport\s*\{[^}]*\}\s*from\s*['"](@\/lib|\.\.\/\.\.\/lib)\/(server-i18n|client-i18n|server-t)['"];?/g, '');
  s = s.replace(/\nimport\s*\{[^}]*\}\s*from\s*['"]@\/lib\/intl['"];?/g, '');
  s = s.replace(/\nimport\s*\{[^}]*\}\s*from\s*['"]@\/lib\/i18n['"];?/g, '');
  s = s.replace(/,?\s*locale\s*\}\)/g, ' })');
  s = s.replace(/,?\s*locale\s*}/g, ' }');
  if (s !== orig) {
    fs.writeFileSync(file, s, 'utf8');
    count++;
    console.log(file.replace(root + path.sep, ''));
  }
}

for (const file of walk(path.join(root, 'components'))) {
  let s = fs.readFileSync(file, 'utf8');
  const orig = s;
  s = s.replace(/\nimport\s*\{[^}]*\}\s*from\s*['"](@\/lib|\.\.\/\.\.\/lib)\/client-i18n['"];?/g, '');
  if (s !== orig) {
    fs.writeFileSync(file, s, 'utf8');
    count++;
    console.log(file.replace(root + path.sep, ''));
  }
}

console.log('\nUpdated', count, 'files');

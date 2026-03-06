#!/usr/bin/env node
/** Replace duplicate headings in tool page.tsx files. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP = path.join(__dirname, '..', 'app');

const REPLACEMENTS = [
  ['Limitations and Accuracy of the ', 'Accuracy and Reliability in Practice: '],
  ['Privacy and Security When Using the ', 'Data and Security When Using the '],
  ['Key Concepts: How the ', 'Technical Background: What the '],
  [' Works Under the Hood', ' Analyzes'],
  ['Best Practices for Using the ', 'Tips for Consistent Use of the '],
  ['Interpreting and Acting on Results', 'Next Steps After You Get Results'],
];

function walk(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) walk(full);
    else if (f.name === 'page.tsx') {
      let content = fs.readFileSync(full, 'utf8');
      let changed = false;
      for (const [from, to] of REPLACEMENTS) {
        if (content.includes(from)) {
          content = content.split(from).join(to);
          changed = true;
        }
      }
      if (changed) fs.writeFileSync(full, content, 'utf8');
    }
  }
}

walk(APP);
console.log('Done.');

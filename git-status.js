const { execSync } = require('child_process');
const fs = require('fs');

try {
  const status = execSync('git status').toString();
  const diff = execSync('git diff').toString();
  const log = execSync('git log -n 5').toString();
  fs.writeFileSync('git_info.txt', `=== STATUS ===\n${status}\n=== DIFF ===\n${diff}\n=== LOG ===\n${log}`);
  console.log('Saved to git_info.txt');
} catch (e) {
  console.error(e.toString());
}

import { rmSync } from 'node:fs';

try {
  rmSync('.next', {
    recursive: true,
    force: true,
    maxRetries: 10,
    retryDelay: 100,
  });
} catch (error) {
  console.warn('[clean-next] Unable to remove .next. If `next dev` is running, stop it and re-run build.');
  console.warn(error);
}

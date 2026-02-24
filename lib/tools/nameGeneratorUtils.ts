/**
 * Shared utilities for themed name generators.
 * All processing is client-safe (no server calls).
 */

export function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)]!;
}

export function seededRandom(seed: number): () => number {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

export type ThemedNameResult = {
  name: string;
  meaning?: string;
  [key: string]: string | undefined;
};

/**
 * Generate names by combining parts from arrays. Supports optional meanings.
 */
export function generateThemedNames(
  parts: { first: string[]; second?: string[]; meanings?: string[] },
  count: number,
  seed?: number
): ThemedNameResult[] {
  const rng = seededRandom(seed ?? Date.now());
  const results: ThemedNameResult[] = [];
  const { first, second, meanings } = parts;
  const useSecond = second && second.length > 0;
  const useMeanings = meanings && meanings.length > 0;
  const capped = Math.min(Math.max(count, 1), 24);

  for (let i = 0; i < capped; i++) {
    const a = pick(first, rng);
    const b = useSecond ? pick(second!, rng) : '';
    const name = useSecond ? `${a} ${b}`.trim() : a;
    const meaning = useMeanings ? pick(meanings!, rng) : undefined;
    results.push(meaning != null ? { name, meaning } : { name });
  }
  return results;
}

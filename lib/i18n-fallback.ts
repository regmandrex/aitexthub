/** Fallback helper when i18n is disabled: always returns the fallback. */
export function tOr(_t: unknown, _key: string, fallback: string): string {
  return fallback;
}

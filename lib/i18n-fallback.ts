export type TFunction = (key: string, params?: Record<string, string | number>) => string;

/**
 * Returns a translated value if it exists; otherwise returns the provided fallback.
 *
 * Our i18n `t()` returns the key itself when missing, so `t(key) || fallback`
 * does NOT work (because the key string is truthy). This helper fixes that.
 */
export function tOr(t: TFunction, key: string, fallback: string, params?: Record<string, string | number>) {
  const value = t(key, params);
  return value !== key ? value : fallback;
}


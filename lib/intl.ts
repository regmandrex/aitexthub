import { notFound } from 'next/navigation';
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from './i18n';
import { MESSAGES_BY_LOCALE } from './messages';

export type Messages = Record<string, unknown>;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

export function getMessageString(messages: Messages, path: string): string | undefined {
  const parts = path.split('.').filter(Boolean);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = messages;
  for (const part of parts) {
    if (!current || typeof current !== 'object') return undefined;
    current = current[part];
  }
  return typeof current === 'string' ? current : undefined;
}

function deepMerge(base: Record<string, unknown>, overrides: Record<string, unknown>) {
  const result: Record<string, unknown> = { ...base };
  for (const [key, overrideValue] of Object.entries(overrides)) {
    const baseValue = result[key];
    if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
      result[key] = deepMerge(baseValue, overrideValue);
      continue;
    }
    result[key] = overrideValue;
  }
  return result;
}

export async function loadMessages(locale: string): Promise<{ locale: SupportedLocale; messages: Messages }> {
  const normalized = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  const baseMessages = MESSAGES_BY_LOCALE[DEFAULT_LOCALE] as unknown as Messages;
  const overrides = MESSAGES_BY_LOCALE[normalized] as unknown as Messages | undefined;

  if (!baseMessages) {
    notFound();
  }

  if (!overrides || normalized === DEFAULT_LOCALE) {
    return { locale: normalized, messages: baseMessages };
  }

  return {
    locale: normalized,
    messages: deepMerge(baseMessages as Record<string, unknown>, overrides as Record<string, unknown>),
  };
}

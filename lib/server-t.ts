import type { SupportedLocale } from './i18n';
import { loadMessages } from './intl';

type Messages = Record<string, unknown>;

function getMessageString(messages: Messages, path: string): string | undefined {
  const parts = path.split('.').filter(Boolean);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = messages;
  for (const part of parts) {
    if (!current || typeof current !== 'object') return undefined;
    current = current[part];
  }
  return typeof current === 'string' ? current : undefined;
}

function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    return params[key]?.toString() ?? `{${key}}`;
  });
}

export async function createServerT(locale: SupportedLocale) {
  const { messages } = await loadMessages(locale);
  
  return (key: string, params?: Record<string, string | number>): string => {
    const message = getMessageString(messages, key);
    if (!message) return key;
    return interpolate(message, params);
  };
}

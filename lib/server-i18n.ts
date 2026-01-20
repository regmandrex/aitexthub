import { headers } from 'next/headers';
import { DEFAULT_LOCALE, isSupportedLocale, type SupportedLocale } from './i18n';
import { loadMessages } from './intl';

export async function getLocaleFromHeaders(): Promise<SupportedLocale> {
  const headerList = await headers();
  const headerLocale = headerList.get('x-site-locale') ?? headerList.get('x-site-lang');
  
  if (headerLocale && isSupportedLocale(headerLocale)) {
    return headerLocale;
  }
  
  return DEFAULT_LOCALE;
}

export async function getServerLocale(): Promise<{ locale: SupportedLocale; messages: Record<string, unknown> }> {
  const locale = await getLocaleFromHeaders();
  const { messages } = await loadMessages(locale);
  
  return { locale, messages };
}

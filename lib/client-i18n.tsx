'use client';

import { createContext, useContext, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { DEFAULT_LOCALE, getLocaleFromPath, isSupportedLocale, type SupportedLocale } from './i18n';

type Messages = Record<string, unknown>;

type I18nContextValue = {
  locale: SupportedLocale;
  messages: Messages;
  t: (key: string, params?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

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

function createT(messages: Messages) {
  return (key: string, params?: Record<string, string | number>): string => {
    const message = getMessageString(messages, key);
    if (!message) return key;
    return interpolate(message, params);
  };
}

type I18nProviderProps = {
  locale: SupportedLocale;
  messages: Messages;
  children: React.ReactNode;
};

export function I18nProvider({ locale, messages, children }: I18nProviderProps) {
  const t = useMemo(() => createT(messages), [messages]);
  
  const value = useMemo(
    () => ({
      locale,
      messages,
      t,
    }),
    [locale, messages, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useLocale(): SupportedLocale {
  // Get locale from context (most reliable when inside I18nProvider)
  const context = useContext(I18nContext);
  if (context) {
    return context.locale;
  }

  // Fallback: check actual browser URL first (before Next.js rewrite)
  if (typeof window !== 'undefined') {
    const browserPathname = window.location.pathname;
    const { locale: urlLocale } = getLocaleFromPath(browserPathname);
    if (urlLocale && urlLocale !== DEFAULT_LOCALE) {
      return urlLocale;
    }
  }

  // Fallback: try to read from cookie (client-side)
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);
    
    const cookieLocale = cookies.locale;
    if (cookieLocale && isSupportedLocale(cookieLocale)) {
      return cookieLocale;
    }
  }

  // Final fallback: check Next.js pathname or default
  const pathname = usePathname();
  const { locale } = getLocaleFromPath(pathname);
  return locale;
}

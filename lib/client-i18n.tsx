'use client';

import { createContext, useContext, useCallback } from 'react';

type TFunction = (key: string, params?: Record<string, string | number>) => string;

const defaultT: TFunction = (key) => {
  const parts = key.split('.');
  return parts[parts.length - 1] ?? key;
};

const I18nContext = createContext<{ t: TFunction }>({ t: defaultT });

export function useI18n() {
  const ctx = useContext(I18nContext);
  return ctx ?? { t: defaultT };
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const t = useCallback<TFunction>((key, params) => {
    let out = defaultT(key);
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        out = out.replace(new RegExp(`\\{\\s*${k}\\s*\\}`, 'g'), String(v));
      });
    }
    return out;
  }, []);
  return (
    <I18nContext.Provider value={{ t }}>
      {children}
    </I18nContext.Provider>
  );
}

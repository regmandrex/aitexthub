'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { usePathname, useRouter } from 'next/navigation';
import { useI18n, useLocale } from '../lib/client-i18n';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, addLocaleToPath, removeLocaleFromPath, type SupportedLocale } from '../lib/i18n';

const LOCALE_NAMES: Record<SupportedLocale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  'zh-cn': '简体中文',
  ko: '한국어',
};

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();
  const { t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Ensure component is mounted (for portal)
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLocaleChange = (newLocale: SupportedLocale) => {
    if (newLocale === locale) {
      setOpen(false);
      return;
    }
    setOpen(false);
    
    // Get the current path without locale (use browser URL if available to see actual URL)
    let currentPath = pathname;
    if (typeof window !== 'undefined') {
      currentPath = window.location.pathname;
    }
    const pathWithoutLocale = removeLocaleFromPath(currentPath);
    
    // Build new URL with locale prefix
    const newPath = addLocaleToPath(pathWithoutLocale, newLocale);
    
    // Set cookie for locale preference
    document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    
    // Use full page navigation to ensure server reads the new URL correctly
    window.location.href = newPath;
  };

  const toggleDropdown = () => {
    if (!open && buttonRef.current) {
      // Calculate position when opening
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 6,
        right: window.innerWidth - rect.right,
      });
    }
    setOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    // Use timeout to avoid immediate closing when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:px-4"
        aria-label={t('Nav.language')}
        aria-expanded={open}
        aria-haspopup="true"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="hidden sm:inline-block">{LOCALE_NAMES[locale] || 'English'}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && mounted && createPortal(
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[999]"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Dropdown */}
          <div
            ref={dropdownRef}
            className="fixed z-[1000] w-56 rounded-lg border border-slate-200 bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            style={{
              top: `${position.top}px`,
              right: `${position.right}px`,
            }}
          >
            <div className="max-h-[320px] overflow-y-auto py-1.5">
              {SUPPORTED_LOCALES.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  type="button"
                  role="menuitem"
                  className={`relative flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors ${
                    locale === loc
                      ? 'bg-blue-50 text-blue-900'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{LOCALE_NAMES[loc]}</span>
                    {loc === DEFAULT_LOCALE && (
                      <span className="text-xs text-slate-400">(Default)</span>
                    )}
                  </div>
                  {locale === loc && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>,
        document.body
      )}
    </div>
  );
}

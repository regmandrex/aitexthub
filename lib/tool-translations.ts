import type { SupportedLocale } from './i18n';
import { loadMessages } from './intl';

/**
 * Check if a tool has translations for a given locale
 * Returns true if the tool has at least a title translation for that locale
 */
export async function hasToolTranslation(toolSlug: string, locale: SupportedLocale): Promise<boolean> {
  // English always has translations (it's the default)
  if (locale === 'en') {
    return true;
  }

  try {
    const { messages } = await loadMessages(locale);
    const toolKey = toolSlug === '' ? 'home' : toolSlug;
    const titleKey = `Tools.${toolKey}.title`;
    
    // Check if the translation exists by navigating the messages object
    const parts = titleKey.split('.').filter(Boolean);
    let current: unknown = messages;
    
    for (const part of parts) {
      if (!current || typeof current !== 'object') return false;
      current = (current as Record<string, unknown>)[part];
    }
    
    // If we found a string value and it's not the same as the key, translation exists
    return typeof current === 'string' && current !== titleKey;
  } catch {
    // If loading messages fails, assume no translation
    return false;
  }
}

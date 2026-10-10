import { useState, type ReactNode, useEffect } from 'react';
import type { Language, LanguageContextType } from './LanguageContext.tsx';
import { LanguageContext } from './LanguageContext.tsx';
import { en, type Dictionary } from '../locales/en.ts';
import { pt } from '../locales/pt.ts';

const dictionaries: Record<Language, Dictionary> = { pt, en };

const STORAGE_KEY = 'language';
const HTML_LANG: Record<Language, string> = { pt: 'pt-BR', en: 'en' };

const getInitialLanguage = (): Language => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    // localStorage unavailable (private mode, blocked): default
  }
  return 'pt';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language];
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Without persistency, but the language switches in the actual session.
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: dictionaries[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

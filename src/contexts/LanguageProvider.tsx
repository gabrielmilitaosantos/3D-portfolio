import { useState, type ReactNode } from 'react';
import type { Language, LanguageContextType } from './LanguageContext.tsx';
import { LanguageContext } from './LanguageContext.tsx';
import { en, type Dictionary } from '../locales/en.ts';
import { pt } from '../locales/pt.ts';

const dictionaries: Record<Language, Dictionary> = { pt, en };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

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

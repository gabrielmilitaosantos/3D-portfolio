import type { Dictionary } from '../locales/en.ts';

import { createContext } from 'react';

export type Language = 'pt' | 'en';

export type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext.tsx';

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within the context');
  }
  return context;
}

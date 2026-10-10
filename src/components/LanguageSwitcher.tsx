import type { Language } from '../contexts/LanguageContext.tsx';
import { useTranslation } from '../hooks/useTranslation.ts';

const options: { code: Language; label: string; name: string }[] = [
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'en', label: 'EN', name: 'English' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();
  const activeIndex = options.findIndex((option) => option.code === language);

  return (
    <div className="lang-switcher" role="group" aria-label="Idioma / Language">
      <span
        aria-hidden="true"
        className="indicator"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />

      {options.map(({ code, label, name }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={name}
          aria-pressed={language === code}
          className={language === code ? 'active' : ''}
          onClick={() => setLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
export default LanguageSwitcher;

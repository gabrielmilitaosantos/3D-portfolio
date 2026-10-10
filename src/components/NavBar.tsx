import { contactLink, navLinks } from '../constants';
import { useTranslation } from '../hooks/useTranslation.ts';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher.tsx';

const NavBar = () => {
  const { language } = useTranslation();

  // Lazy initial state: if the page reloads already scrolled down, the navbar renders correctly.
  const [scrolled, setScrolled] = useState(() => window.scrollY > 10);

  useEffect(() => {
    // setScrolled(value).
    // The navbar also returns to its transparent state when scroll back to the top.
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Gabriel Militão
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ id, name, link }) => (
              <li key={id} className="group">
                <a href={link}>
                  <span>{name[language]}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <LanguageSwitcher />

          <a className="contact-btn group" href={contactLink.link}>
            <div className="inner">
              <span>{contactLink.name[language]}</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
export default NavBar;

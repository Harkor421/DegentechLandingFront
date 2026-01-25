import { createContext, useState, useEffect } from 'react';
import { translations } from './translations';

export const LanguageContext = createContext();

function detectLanguage() {
  const stored = localStorage.getItem('degentech-lang');
  if (stored && translations[stored]) return stored;

  const browserLang = navigator.language || navigator.userLanguage || 'en';
  const primary = browserLang.split('-')[0].toLowerCase();
  return translations[primary] ? primary : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage);

  useEffect(() => {
    localStorage.setItem('degentech-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

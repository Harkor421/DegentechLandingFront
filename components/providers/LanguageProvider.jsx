'use client';

import { createContext, useState, useEffect } from 'react';
import { translations } from '@/i18n/translations';

export const LanguageContext = createContext();

function detectLanguage() {
  if (typeof window === 'undefined') return 'es';
  const stored = localStorage.getItem('degentech-lang');
  if (stored && translations[stored]) return stored;
  return 'es';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    setLang(detectLanguage());
  }, []);

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

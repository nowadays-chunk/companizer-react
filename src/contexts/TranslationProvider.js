// TranslationProvider.js
import React, { createContext, useContext, useState } from 'react';

import { en } from '../locales/en';
import { fr } from '../locales/fr';
import { ar } from '../locales/ar';

const TranslationContext = createContext();

const translations = { en, fr, ar };

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => {
      if (prev === 'en') return 'fr';
      if (prev === 'fr') return 'ar';
      return 'en';
    });
  };

  React.useEffect(() => {
    // User requested NO RTL even for Arabic ("awkward")
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);

import React, { createContext, useState, ReactNode } from 'react';
import { Language, getInitialLanguage, toggleLanguage } from '../actions';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: getInitialLanguage(),
  toggleLanguage: () => {}
});

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  const handleToggleLanguage = () => {
    setLanguage((currentLanguage) => toggleLanguage(currentLanguage));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage: handleToggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };

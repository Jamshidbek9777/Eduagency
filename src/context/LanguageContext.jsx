/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import { LANGUAGE } from "../tools/constants";
import { flagImages, getLanguage } from "../locales";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(getLanguage());
  const [selectedFlag, setSelectedFlag] = useState(flagImages[getLanguage()]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE);
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      setSelectedFlag(flagImages[storedLanguage]);
    }
  }, []);

  const changeLanguage = (language) => {
    localStorage.setItem(LANGUAGE, language);
    setSelectedLanguage(language);
    setSelectedFlag(flagImages[language]);
  };

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, selectedFlag, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

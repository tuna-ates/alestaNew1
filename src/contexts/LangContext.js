
//LangContext.js
import React, { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [contextLang, setContextLang] = useState("tr");

  return (
    <LangContext.Provider value={{ contextLang, setContextLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);



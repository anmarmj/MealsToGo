import React, { createContext, useState } from "react";
import { en } from "./en";
import { ar } from "./ar";
import { theme as themeEN } from "../themes/en";
import { theme as themeAR } from "../themes/ar";
import { ThemeProvider } from "styled-components/native";
import { getEnforcing } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(en);
  const [theme, setTheme] = useState(themeEN);
  // console.log("lang:", themeEN);
  return (
    <LanguageContext.Provider
      value={{
        language,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LanguageContext.Provider>
  );
};

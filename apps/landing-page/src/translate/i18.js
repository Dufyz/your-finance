import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import { messages } from "./languages";

i18n.use(LanguageDetector).init({
  debug: true,
  defaultNS: ["translations"],
  ns: ["translations"],
  fallbackLng: ["pt-BR", "en"],
  resources: messages,
  interpolation: {
    escapeValue: false
  }
});

export { i18n };

import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { resources } from "./resources";
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    lng: "en",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18next;

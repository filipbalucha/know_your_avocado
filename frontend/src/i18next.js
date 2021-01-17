import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// TODO: use Backend like in: https://react.i18next.com/latest/i18next-instance ?
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: "sk",
    debug: true,
    defaultNS: "translations",
    keySeparator: false,
    react: {
      wait: true,
    },
    resources: {
      en: {
        translations: {
          motto: "Say No to Unripe Avocados.",
          upload: "Upload",
          predict: "Predict",
          upload_image: "Upload an image",
        },
      },
      sk: {
        translations: {
          motto: "Povedz nie nezrelým avokádam.",
          upload: "Nahrať",
          predict: "Predpovedať",
          upload_image: "Nahraj obrázok",
        },
      },
    },
  });

export default i18n;

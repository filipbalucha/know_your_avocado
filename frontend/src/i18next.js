import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: "en",
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
          upload_extra: "Upload more images?",
          upload_extra_detail:
            "Uploading an extra image can improve prediction. Would you like to do so?",
          no: "No",
          yes: "Yes",

          server_error: "Server error",
          retry_later: "Please try again later",

          why: "Why?",
          author: "Author",
          motivation:
            "I struggle to tell ripe avocados from unripe ones, so I trained a deep learning model based on the {{model}} with a {{accuracy}} accuracy to help with the task. Hope it can help you too 😊",
          cookie_use: "This website doesn't use 🍪",
          contact: "Contact",
          get_in_touch:
            "Get in touch if you have any requests or suggestions 👍🏼",

          take_picture: "Take a picture",
          upload_image: "Upload an image",
          or: "Or",

          loading: "Loading",
          avocado_ripe: "ripe",
          avocado_unripe: "unripe",
          with_probability: "with a {{probability}}% probability",
          this_avocado: "This 🥑 is",
          cannot_spot: "Sorry, I was unable to spot any 🥑",
          retake_photo: "Could you try retaking the photo?",
          back: "Back",
          what_means: "What does this mean?",
          what_means_explanation:
            "The percentage indicates to what extent the 'AI' is certain about its prediction. It does not quantify the ripeness of the 🥑 as such.",
        },
      },
      sk: {
        translations: {
          motto: "Povedz nie nezrelým avokádam.",

          upload: "Nahrať",
          predict: "Predpovedať",
          upload_extra: "Nahrať viac fotiek?",
          upload_extra_detail:
            "Nahraj ešte jednu fotku a zlepši tak predikciu. Ideš do toho?",
          no: "Nie",
          yes: "Áno",

          server_error: "Chyba serveru",
          retry_later: "Skús to neskôr, prosím",

          author: "Autor",
          why: "Ale... načo?",
          motivation:
            "Často neviem rozoznať zrelé avokádo od nezrelého, tak som sa rozhodol natrénovať model pomocou hlbokého učenia, aby mi s tým pomohol. Model je postavený na modeli {{model}} a má {{accuracy}} presnosť. Dúfam, že pomôže aj tebe 😊",
          cookie_use: "Táto stránka nepoužíva 🍪",
          contact: "Kontakt",
          get_in_touch: "Ak máš nápad na zlepšenie, tak ma určite kontaktuj 👍🏼",

          upload_image: "Nahraj fotku",
          take_picture: "Odfoť fotku",
          or: "Alebo",

          loading: "Načítavam",
          avocado_ripe: "zrelé",
          avocado_unripe: "nezrelé",
          with_probability: "s {{probability}}% pravdepodobnosťou",
          this_avocado: "Toto 🥑 je",
          cannot_spot: "Nevidím žiadne 🥑",
          retake_photo: "Odfotil(a) by si ho ešte raz, prosím?",
          back: "Spať",
          what_means: "Čo to znamená?",
          what_means_explanation:
            "Percento znázorňuje do akej miery si je 'umelá inteligencia' istá svojou predikciou. Nejde teda o mieru zrelosti 🥑",
        },
      },
    },
  });

export default i18n;

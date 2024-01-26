export const defaultLanguage = "en";
export const availableLocales = [
  defaultLanguage,
  "tr" /* you can add more here but make sure you have configured strapi too. best wishes from Ahmet :) */,
];
export const defaultNS = "translation";
export type LocaleType = (typeof availableLocales)[number];
export const cookieName = "language";

export function getOptions(lng = defaultLanguage, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: availableLocales,
    // preload: availableLocales,
    defaultLanguage,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

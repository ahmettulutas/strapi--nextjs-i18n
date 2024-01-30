import { availableLocales, defaultLanguage } from "@/app/[lang]/i18n/settings";

export const omitLocaleFromPath = (path: string): string => {
  if (!path) return "";
  const splittedPath = path.split("/").filter((item) => !!item);
  const isFirstSegmentLocale = availableLocales.includes(splittedPath[0]);
  if (
    splittedPath.length === 1 &&
    (isFirstSegmentLocale || defaultLanguage === splittedPath[0])
  ) {
    return "";
  }
  const startIdx = isFirstSegmentLocale ? 1 : 0;

  return splittedPath.slice(startIdx).join("/");
};

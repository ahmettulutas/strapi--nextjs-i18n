import { availableLocales, defaultLanguage } from "@/i18n/settings";

export const omitLocaleFromPath = (path: string): string => {
  if (!path) return "";
  const splittedPath = path.split("/").filter((item) => !!item);

  if (splittedPath.length === 1 && availableLocales.indexOf(splittedPath[0])) {
    return "";
  }
  return splittedPath
    .slice(splittedPath.length === 1 ? 0 : 1, splittedPath.length)
    .join("/");
};

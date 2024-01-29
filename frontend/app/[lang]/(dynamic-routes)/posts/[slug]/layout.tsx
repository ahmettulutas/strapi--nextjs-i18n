import { LocaleType } from "@/i18n/settings";
import {
  getAvailableSlugsForBlogs,
  getGlobal,
} from "../../../utils/strapi-api-fns";
import { Navbar } from "@/app/[lang]/components/layouts/Navbar";

export type SharedPageProps = {
  params: { lang: LocaleType; slug: string };
};

type LocaleRouteLayout = SharedPageProps & {
  children: React.ReactNode;
};

// http://localhost:1337/api/global?populate=*&locale=en

export default async function Layout({
  children,
  params: { lang, slug },
}: LocaleRouteLayout) {
  const globalData = await getGlobal(lang);
  const availableSlugs = await getAvailableSlugsForBlogs(lang, slug);
  const locales = availableSlugs.data[0]?.attributes.localizations;
  return (
    <>
      <Navbar
        lang={lang}
        navbarData={globalData.data.attributes.navbar}
        dynamicSlugs={locales.data}
      />
      {children}
    </>
  );
}

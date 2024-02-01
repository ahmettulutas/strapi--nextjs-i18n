import { LocaleType } from "@/app/[lang]/i18n/settings";
import {
  getAvailableSlugsForBlogs,
  getGlobal,
} from "../../../utils/strapi-api-fns";
import { Navbar } from "@/app/[lang]/components/layouts/navbar";
import Footer from "@/app/[lang]/components/layouts/footer";

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
  const footer = globalData.data.attributes.footer[0];
  const navbar = globalData.data.attributes.navbar;
  return (
    <>
      <Navbar lang={lang} navbarData={navbar} dynamicSlugs={locales?.data} />
      {children}
      <Footer
        title={footer.title}
        description={footer.description}
        categoryLinks={footer.categories.data}
        legalLinks={footer.legalLinks}
        socialLinks={footer.socialLinks}
      />
    </>
  );
}

import { dir } from "i18next";
import { Manrope } from "next/font/google";
import { LocaleType, availableLocales } from "@/i18n/settings";
import "./globals.css";
import { getGlobal } from "./utils/strapi-api-fns";
import { Navbar } from "./layouts/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export type SharedPageProps = {
  params: { lang: LocaleType };
};

type LocaleRouteLayout = SharedPageProps & {
  children: React.ReactNode;
};

// http://localhost:1337/api/global?populate=*&locale=en

export default async function Layout({
  children,
  params: { lang },
}: LocaleRouteLayout) {
  const globalData = await getGlobal(lang);
  return (
    <html
      lang={lang}
      dir={dir(lang)}
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`${manrope.className} dark:bg-dark-bg dark:text-dark-text text-light-text transition-all duration-150 ease-in`}
      >
        <Navbar navbarData={globalData.data.attributes.navbar} />

        {children}
      </body>
    </html>
  );
}

/* export async function generateMetadata(
  { params }: SharedPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return getDefaultMetaData(params.lang, parent);
} */

export async function generateStaticParams() {
  // generates default paths for each locale domain/locale1, domain/locale2, etc.
  return availableLocales.map((lang) => ({ lang }));
}

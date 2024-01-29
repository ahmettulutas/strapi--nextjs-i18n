import { Manrope } from "next/font/google";
import { LocaleType } from "@/i18n/settings";
import { getGlobal } from "../utils/strapi-api-fns";
import { Navbar } from "../components/layouts/Navbar";

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
    <>
      <Navbar lang={lang} navbarData={globalData.data.attributes.navbar} />
      {children}
      <footer>Footer</footer>
    </>
  );
}

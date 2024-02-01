import { LocaleType } from "@/app/[lang]/i18n/settings";
import { getGlobal } from "../utils/strapi-api-fns";
import { Navbar } from "../components/layouts/navbar";
import Footer from "../components/layouts/footer";

export type SharedPageProps = {
  params: { lang: LocaleType };
};

type StaticLayoutProps = SharedPageProps & {
  children: React.ReactNode;
};

// http://localhost:1337/api/global?populate=*&locale=en

export default async function Layout({
  children,
  params: { lang },
}: StaticLayoutProps) {
  const globalData = await getGlobal(lang);
  const footer = globalData.data.attributes.footer;
  const navbar = globalData.data.attributes.navbar;

  return (
    <div className="grid grid-rows-layout min-h-screen">
      <Navbar lang={lang} navbarData={navbar} />
      {children}
      <Footer
        title={footer.title}
        description={footer.description}
        categoryLinks={footer.categories?.data}
        legalLinks={footer.legalLinks}
        socialLinks={footer.socialLinks}
      />
    </div>
  );
}

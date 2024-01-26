import { getPageBySlug } from "./utils/strapi-api-fns";
import { LocaleType } from "@/i18n/settings";
import { SharedPageProps } from "./layout";
import { pageRenderer } from "./utils/page-renderer";

async function getHomePage(lang: LocaleType) {
  try {
    const res = await getPageBySlug("home", lang);
    return res;
  } catch (err) {
    throw new Error("An error occured"); // TODO - Add better error handling
  }
}

export default async function HomePage({ params }: SharedPageProps) {
  const pageData = await getHomePage(params.lang);
  return pageData.data[0].attributes.contentSection.map((section: any) =>
    pageRenderer(section, section.id)
  );
}

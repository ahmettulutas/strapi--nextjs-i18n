import { createTranslation } from "@/i18n";
import { LocaleType, availableLocales } from "@/i18n/settings";
import { Metadata, ResolvingMetadata } from "next";

export const ogImageSizes = [
  { width: 800, height: 600 },
  { width: 1800, height: 1600 },
];
export const twitterImageSizes = [
  { width: 800, height: 418 },
  { width: 1600, height: 900 },
];
type GenerateMetaImageProps = {
  image: {
    url: string;
    alt: string;
    width: number | string;
    height: number | string;
  };
  sizes: Array<{ width: number; height: number }>;
  staticImage?: { url: string | URL; alt?: string };
};
export const generateMetaImages = ({
  image,
  sizes,
  staticImage,
}: GenerateMetaImageProps): Array<any> => {
  if (!image.url) return [];
  const metaImages = [];
  if (image) {
    for (let { width, height } of sizes) {
      metaImages.push({
        width,
        height,
        /* alt: imageUrl.alt // TODO*/
        url: image,
      });
    }
  }
  return metaImages;
};

export const generateLocalesForMetaData = (languages: Array<LocaleType>) => {
  const locales: Record<string, LocaleType> = {};
  for (const key of languages) {
    locales[key] = key;
  }
  return locales;
};

export const getDefaultMetaData = async (
  currntLocale: LocaleType,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await createTranslation(currntLocale, "translation"); // This is not actually a hook, so I intentionally ignored it here.

  return {
    title: t("metaData.pageTitle"),
    description: t("metaData.pageDescription"),
    applicationName: t("metaData.applicationName"),
    category: t("metaData.category"),
    creator: "Ahmet Ulutaş",
    authors: [{ name: "Ahmet Ulutaş" }],
    publisher: "Ahmet Ulutaş",
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
    referrer: "origin-when-cross-origin",
    keywords: ["Typescript", "React", "JavaScript", "Frontend Development"],
    verification: {
      google: "3SXiPm6wc4OTk7JcwvRy4ednleq_oJ6qd9EJR41reZ4",
    },
    openGraph: {
      title: t("metaData.pageTitle"),
      locale: currntLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaData.pageTitle"),
      description: t("metaData.pageDescription"),
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
      languages: generateLocalesForMetaData(availableLocales),
    },
  };
};

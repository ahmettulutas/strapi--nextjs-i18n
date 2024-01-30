import { LocaleType } from "@/app/[lang]/i18n/settings";
import { strapiFetchApi } from "./fetch-api";
import type { PageData } from "./model";

const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export async function getPageBySlug(
  slug: string,
  lang: string
): Promise<{ data: Array<PageData> }> {
  const path = `/pages`;
  const urlParamsObject = {
    locale: lang,
    filters: { slug },
    populate: {
      contentSection: {
        populate: "*",
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await strapiFetchApi(path, urlParamsObject, options);
}

export async function getGlobal(lang: LocaleType) {
  const path = `/global`;
  const urlParamsObject = {
    locale: lang,
    populate: {
      footer: { populate: "*" },
      meta: { populate: "*" },
      navbar: { populate: "*" },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await strapiFetchApi(path, urlParamsObject, options);
}

export async function getAllBlogs(lang: LocaleType) {
  const path = `/blogposts`;
  const urlParamsObject = {
    locale: lang,
    populate: {
      coverImage: { populate: "*" },
      category: { fields: ["name", "slug"] },
      author: {
        fields: ["name"],
        populate: { avatar: { fields: ["url", "width", "height"] } },
      },
      related: { populate: "*" },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await strapiFetchApi(path, urlParamsObject, options);
}

export async function getBlogPageById(lang: LocaleType, slug: string) {
  const path = `/blogposts`;
  const urlParamsObject = {
    locale: lang,
    filters: { slug },
    populate: {
      coverImage: { populate: "*" },
      category: { fields: ["name", "slug"] },
      author: {
        fields: ["name"],
        populate: { avatar: { fields: ["url", "width", "height"] } },
      },
      localizations: { fields: ["slug", "locale"] },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await strapiFetchApi(path, urlParamsObject, options);
}

export async function getAvailableSlugsForBlogs(
  lang: LocaleType,
  slug: string
) {
  const path = `/blogposts`;
  const urlParamsObject = {
    locale: lang,
    filters: { slug },
    populate: {
      fields: [],
      localizations: { fields: ["slug", "locale"] },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await strapiFetchApi(path, urlParamsObject, options);
}

export async function getAllBlogsByCategory(
  lang: LocaleType,
  category: string
) {
  const path = `/blogposts`;
  const urlParamsObject = {
    locale: lang,
    populate: {
      coverImage: { fields: "*" },
      author: {
        fields: ["name"],
        populate: { avatar: { fields: ["url", "width", "height"] } },
      },
      category: { fields: ["name", "slug"] },
    },
    filters: {
      category: { slug: category },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await strapiFetchApi(path, urlParamsObject, options);
}

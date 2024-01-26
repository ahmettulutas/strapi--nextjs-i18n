import { strapiFetchApi } from "./fetch-api";
import type { PageData } from "./model";

const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export async function getPageBySlug(
  slug: string,
  lang: string
): Promise<{ data: Array<PageData> }> {
  const path = `/pages`;
  const urlParamsObject = {
    filters: { slug },
    locale: lang,
    populate: {
      contentSection: {
        populate: "*",
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await strapiFetchApi(path, urlParamsObject, options);
}

export async function getGlobal(lang: string) {
  const path = `/global`;
  const urlParamsObject = {
    locale: lang,
    populate: {
      footer: {
        populate: "*",
      },
      meta: {
        populate: "*",
      },
      navbar: {
        populate: "*",
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await strapiFetchApi(path, urlParamsObject, options);
}

export async function getAllBlogs(lang: string) {
  const path = `/blogposts`;
  const urlParamsObject = {
    locale: lang,
    populate: {
      coverImage: { populate: "*" },
      category: { fields: ["name", "slug"] },
      author: { populate: "*" },
      related: { populate: "*" },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await strapiFetchApi(path, urlParamsObject, options);
}

export async function getBlogPageById(lang: string, slug: string) {
  const path = `/blogposts`;
  const urlParamsObject = {
    locale: lang,
    filters: { slug },
    populate: {
      coverImage: { populate: "*" },
      category: { fields: ["name", "slug"] },
      author: { populate: "*" },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await strapiFetchApi(path, urlParamsObject, options);
}

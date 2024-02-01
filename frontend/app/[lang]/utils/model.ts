import { ButtonProps } from "@/app/[lang]/components/ui/button";

type StrapiResponse<T> = {
  data: T;
  message: string;
};

export type ImageData = {
  url: string;
  alternativeText?: string | null;
  name: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats?: {
    small: Format;
    thumbnail: Format;
    // Add more formats if needed
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: any | null;
  createdAt: string;
  updatedAt: string;
};

export type PageData = {
  id: number;
  attributes: PageAttribute;
};

export type ImageContainer<T extends { id: number; attributes: ImageData }> = {
  data: T;
};

export type PageAttribute = {
  shortName: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  heading?: any;
  description?: any;
  contentSection: ContentSection[];
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Meta = {
  pagination: Pagination;
};

export type RootObject = {
  data: PageData[];
  meta: Meta;
};

export type Format = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
};

export type StrapiLinkProps = {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
};

export type ButtonLinkProps = StrapiLinkProps & {
  type: ButtonProps["variant"];
};

export type ContentSection = {
  id: number;
  __component: string;
  title: string;
  description: string;
  picture: ImageContainer<{ id: number; attributes: ImageData }>;
  buttons: ButtonLinkProps[];
};
export type Category = {
  data: {
    id: number;
    attributes: {
      name: string;
      slug: string;
    };
  };
};

export type Author = {
  data: {
    id: number;
    attributes: {
      name: string;
      avatar: ImageContainer<{ id: number; attributes: ImageData }>;
    };
  };
};

export type CategoryLink = {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
};

export interface Blog {
  id: number;
  attributes: {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    coverImage: ImageContainer<{ id: number; attributes: ImageData }>;
    author: Author;
    category: Category;
  };
}

export type DynamicSlug = {
  id: number;
  attributes: {
    slug: string;
    locale: string;
  };
};

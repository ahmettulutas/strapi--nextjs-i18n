import { ButtonProps } from "@/app/[lang]/components/ui/button";

type StrapiResponse<T> = {
  data: T;
  message: string;
};

export type ImageAttribute = {
  url: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
};

export type PageData = {
  id: number;
  attributes: PageAttribute;
};

export type Picture = {
  data: { id: number; attributes: ImageAttribute };
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
  picture: Picture;
  buttons: ButtonLinkProps[];
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

export interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}
export interface CoverImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        small: Format;
        thumbnail: Format;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any | null;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface Author {
  data: {
    id: number;
    attributes: {
      name: string;
      avatar: {
        data: {
          id: number;
          attributes: {
            url: string;
            width: number;
            height: number;
          };
        };
      };
    };
  };
}

export interface Category {
  data: {
    id: number;
    attributes: {
      name: string;
      slug: string;
    };
  };
}

export interface Blog {
  id: number;
  attributes: {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    coverImage: CoverImage;
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

import { ButtonProps } from "@/components/ui/button";

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

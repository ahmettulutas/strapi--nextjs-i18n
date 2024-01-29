"use client";
import React from "react";
import { LocaleType, availableLocales } from "@/i18n/settings";
import { useParams, usePathname, useRouter } from "next/navigation";
import { omitLocaleFromPath } from "../../utils/route-helpers";
import { DynamicSlug } from "../../utils/model";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

export const LanguageSelector = ({
  dynamicSlugs,
}: {
  dynamicSlugs?: Array<DynamicSlug>;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useParams()?.locale as LocaleType;
  const defaultLocaleRoutes = availableLocales.map((lang) => (
    <SelectItem key={lang} value={lang}>
      {lang}
    </SelectItem>
  ));
  const dynamicLocaleRoutes = dynamicSlugs?.map(({ attributes }) => {
    if (!attributes.locale) return;
    return (
      <SelectItem key={attributes.locale} value={attributes.locale}>
        {attributes.locale}
      </SelectItem>
    );
  });
  const handleDynamicNavigation = (locale: string) => {
    // This function is used to navigate the user to the related slug of a blog s when language is changed.
    const dynamicSlug = dynamicSlugs?.find(
      ({ attributes }) => attributes.locale === locale
    )?.attributes.slug;
    if (!dynamicSlug) return router.push(`/${locale}`);
    return router.push(`/${locale}/posts/${dynamicSlug}`);
  };
  return (
    <Select
      aria-label="select-language"
      defaultValue={locale}
      value={locale}
      onValueChange={(value) => {
        console.log(`/${value}/${omitLocaleFromPath(pathname)}`);
        dynamicLocaleRoutes
          ? handleDynamicNavigation(value)
          : router.push(`/${value}/${omitLocaleFromPath(pathname)}`);
      }}
    >
      <SelectTrigger className="w-auto bg-transparent text-white">
        <SelectValue placeholder={"language"} />
      </SelectTrigger>
      <SelectContent className="bg-transparent text-white w-full">
        <SelectGroup>{dynamicLocaleRoutes ?? defaultLocaleRoutes}</SelectGroup>
      </SelectContent>
    </Select>
  );
};

"use client";
import React from "react";
import { LocaleType, availableLocales } from "@/app/[lang]/i18n/settings";
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
} from "@/app/[lang]/components/ui/select";
import { useTranslation } from "@/app/[lang]/i18n/client";

export const LanguageSelector = ({
  dynamicSlugs,
}: {
  dynamicSlugs?: Array<DynamicSlug>;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useParams()?.lang as LocaleType;
  const { t } = useTranslation(locale, "translation");

  const defaultLocaleRoutes = availableLocales.map((locale) => (
    <SelectItem key={locale} value={locale}>
      {locale}
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
  console.log(locale);
  return (
    <Select
      aria-label="select-language"
      defaultValue={locale === "" ? "en" : locale}
      value={locale === undefined ? "en" : locale}
      onValueChange={(value) => {
        dynamicLocaleRoutes
          ? handleDynamicNavigation(value)
          : router.push(`/${value}/${omitLocaleFromPath(pathname)}`);
      }}
    >
      <SelectTrigger className="w-auto bg-[#14062C] text-white">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent className="bg-[#14062C] text-white w-full">
        <SelectGroup>
          {dynamicSlugs ? defaultLocaleRoutes : defaultLocaleRoutes}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

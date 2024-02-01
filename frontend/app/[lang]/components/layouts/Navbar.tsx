"use client";

import Link from "next/link";

import { DynamicSlug, ImageData, StrapiLinkProps } from "../../utils/model";
import { getStrapiMedia } from "../../utils/api-helpers";
import { useCallback, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { NavbarToggle } from "./navbar-toggle";
import { LanguageSelector } from "../shared/language-selector";
import { LocaleType } from "@/app/[lang]/i18n/settings";
import { Logo } from "../shared/logo";

type NavbarProps = {
  navbarData: {
    navLinks: Array<StrapiLinkProps>;
    navLogo: { data: { id: number; attributes: ImageData } };
  };
  lang: LocaleType;
  dynamicSlugs?: Array<DynamicSlug>;
};

export function Navbar({ navbarData, dynamicSlugs, lang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const activeSegment = useSelectedLayoutSegment(); // TODO - use this to style active link.
  const getLinks = useCallback(() => {
    return navbarData.navLinks.map((link) => (
      <Link
        key={link.id}
        href={`/${lang}${link.url}`}
        className="text-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium active"
        aria-current="page"
      >
        {link.text}
      </Link>
    ));
  }, [navbarData.navLinks, lang]);

  return (
    <nav className="bg-[#14062C]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <NavbarToggle onClick={() => setOpen((prev) => !prev)} />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {getStrapiMedia(navbarData.navLogo.data.attributes.url) ? (
              <Logo
                width={navbarData.navLogo.data.attributes.width}
                height={navbarData.navLogo.data.attributes.height}
                src={getStrapiMedia(navbarData.navLogo.data.attributes.url)}
              />
            ) : null}

            <div className="hidden sm:flex items-center ml-auto">
              <div className="flex space-x-4">{getLinks()}</div>
              <LanguageSelector dynamicSlugs={dynamicSlugs} />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${open ? "block" : "hidden"} md:hidden`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">{getLinks()}</div>
        <div className="px-3 py-2">
          <LanguageSelector dynamicSlugs={dynamicSlugs} />
        </div>
      </div>
    </nav>
  );
}

import React from "react";

import Image from "next/image";
import heroBg from "@/app/[lang]/assets/hero-background.svg";
import { PaleText } from "@/app/[lang]/components/shared/PaleText";
import { BrandButton } from "@/app/[lang]/components/shared/brand-button";
import { ButtonLinkProps } from "../../utils/model";
import Link from "next/link";

type HeroProps = {
  title: string;
  description?: string;
  buttonLink: ButtonLinkProps;
};

export function Hero({ title, description, buttonLink }: HeroProps) {
  return (
    <section className="bg-[#14062C] w-full relative overflow-hidden rounded-b-xl">
      <Image
        alt="hero-background-image"
        src={heroBg}
        width={2591}
        height={547}
        className="absolute right-[-70%] translate-y-[-50%] z-40 opacity-10"
      />
      <section className="px-20 py-7 m-auto flex items-center flex-col text-center mt-20 max-w-4xl">
        <PaleText>
          <h1 className="text-5xl mt-4 mb-6">{title}</h1>
        </PaleText>
        {description ? <p className="text-content64">{description}</p> : null}
        <Link href={buttonLink.url}>
          <BrandButton variant={buttonLink.type}>{buttonLink.text}</BrandButton>
        </Link>
      </section>
      <div className="border border-[--hero-empty-section-border] w-full h-40 max-w-4xl m-auto bg-[--hero-empty-section] z-50"></div>
    </section>
  );
}

"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/[lang]/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import Media from "./media";
import { getStrapiMedia } from "../../utils/api-helpers";
import Image from "next/image";
import { ImageData } from "../../utils/model";

export type SliderData = Array<{
  id: number;
  attributes: ImageData;
}>;

export const Slider = ({ data }: { data: SliderData }) => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {data.map((item: any) => {
            const imageUrl = getStrapiMedia(item.attributes.url);
            return (
              <CarouselItem key={item.id}>
                <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[32rem]  relative">
                  <Image
                    src={imageUrl || ""}
                    alt={item.attributes.alternativeText || "none provided"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    fill
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

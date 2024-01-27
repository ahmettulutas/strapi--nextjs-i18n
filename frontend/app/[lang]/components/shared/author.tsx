import Image from "next/image";
import React from "react";
import { getStrapiMedia } from "../../utils/api-helpers";

export const Author = ({ author }: { author: any }) => {
  // TODO -- add correct prop types
  const name = author.attributes.name;

  const avatar = author.attributes.avatar;
  return (
    <div className="flex items-center gap-2">
      <Image
        alt="Author Author"
        className="rounded-full"
        height={32}
        src={getStrapiMedia(avatar.data.attributes.url)}
        style={{
          aspectRatio: "32/32",
          objectFit: "cover",
        }}
        width={32}
      />
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
};

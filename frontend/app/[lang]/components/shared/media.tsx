import Image from "next/image";
import { getStrapiMedia } from "../../utils/api-helpers";

type MediaProps = {
  file: {
    data: {
      id: string;
      attributes: {
        url: string;
        name: string;
        alternativeText: string;
        width: number;
        height: number;
      };
    };
  };
};

export default function Media({ data }: { data: MediaProps }) {
  const imgUrl = getStrapiMedia(data.file.data?.attributes.url);
  if (!imgUrl) return null;
  return (
    <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] relative">
      <Image
        src={imgUrl || ""}
        alt={data.file.data.attributes.alternativeText || "none provided"}
        /*         width={data.file.data.attributes.width}
        height={data.file.data.attributes.height} */
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        fill
      />
    </div>
  );
}

import Image from "next/image";
import { SharedPageProps } from "../layout";
import { getAllBlogs } from "../utils/strapi-api-fns";
import { getStrapiMedia } from "../utils/api-helpers";
import Link from "next/link";

export default async function BlogPosts({ params }: SharedPageProps) {
  const blogPosts = await getAllBlogs(params.lang);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-20">
      {blogPosts.data.map((item: any) => (
        <Link
          href={`/blog-posts/${item.attributes.category.data.attributes.slug}/${item.attributes.slug}`} // TODO add locale here.
          key={item.id}
          className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[300px] xl:min-w-[375px] rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="relative aspect-[4/3]">
            <Image
              alt={
                item.attributes.coverImage.data.attributes.alternativeText ||
                item.attributes.coverImage.data.attributes.name
              }
              fill
              /* width={item.attributes.coverImage.data.attributes.width}
              height={item.attributes.coverImage.data.attributes.width} */
              src={getStrapiMedia(
                item.attributes.coverImage.data.attributes.url
              )}
            />
          </div>
          <h2 className="m-2 text-xl">{item.attributes.title}</h2>
          <span>{item.attributes.createdAt}</span>
          <span>
            {JSON.stringify(item.attributes.category.data.attributes.name)}
          </span>
          <span></span>
        </Link>
      ))}
    </div>
  );
}

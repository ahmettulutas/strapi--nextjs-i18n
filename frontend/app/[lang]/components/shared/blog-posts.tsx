import Image from "next/image";
import { Blog } from "../../utils/model";
import { formatDate, getStrapiMedia } from "../../utils/api-helpers";
import { LocaleType } from "@/app/[lang]/i18n/settings";
import Link from "next/link";

type BlogPostProps = {
  data: Array<Blog>;
  lang: LocaleType;
};
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "../ui/card";
import { Author } from "./author";
import { Badge } from "@/app/[lang]/components/ui/badge";

export const BlogPosts = ({ data, lang }: BlogPostProps) => {
  if (!data) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-20">
      {data?.map((item: Blog) => {
        const category = item.attributes?.category?.data?.attributes;
        const coverImage = item.attributes.coverImage.data;
        return (
          <Link
            href={`/${lang}/posts/${item.attributes.slug}`}
            key={item.id}
            className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[300px] xl:min-w-[375px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Card className="w-full max-w-lg">
              <CardHeader>
                <div className="relative aspect-[4/3]">
                  <Image
                    className="group-hover:scale-105 duration-200 transition-all"
                    alt={
                      coverImage?.attributes.alternativeText ||
                      coverImage?.attributes.name ||
                      ""
                    }
                    fill
                    src={getStrapiMedia(coverImage?.attributes.url)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                {category ? <Badge>{category.name}</Badge> : null}
                <CardTitle className=" leading-normal group-hover:underline">
                  {item.attributes.title}
                </CardTitle>
                <CardDescription>
                  A short description of the blog post.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <section className="flex items-center gap-4">
                  <Author author={item.attributes.author.data} />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(item.attributes.publishedAt)}
                  </p>
                </section>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

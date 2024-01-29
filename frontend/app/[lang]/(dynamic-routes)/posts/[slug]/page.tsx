import { SharedPageProps } from "@/app/[lang]/(static-routes)/layout";
import { getBlogPageById } from "@/app/[lang]/utils/strapi-api-fns";

type DetailProps = {
  params: SharedPageProps["params"] & { slug: string; category: string };
};

export default async function BlogDetail({ params }: DetailProps) {
  const blogPost = await getBlogPageById(params.lang, params.slug);
  return (
    <h1 className="text-center w-full mt-10 text-4xl">
      {JSON.stringify(blogPost.data[0].attributes.title)}
    </h1>
  );
}

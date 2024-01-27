import { SharedPageProps } from "@/app/[lang]/layout";
import { getBlogPageById } from "@/app/[lang]/utils/strapi-api-fns";

type DetailProps = {
  params: SharedPageProps["params"] & { slug: string; category: string };
};

export default async function BlogDetail({ params }: DetailProps) {
  const blogPost = await getBlogPageById(params.lang, params.slug);
  return <h1>{JSON.stringify(blogPost.data[0].attributes.title)}</h1>;
}

import { SharedPageProps } from "@/app/[lang]/layout";
import { getBlogPageById } from "@/app/[lang]/utils/strapi-api-fns";

export default async function BlogDetail({
  params,
  slug,
}: SharedPageProps & { slug: string }) {
  const blogPost = await getBlogPageById(params.lang, slug);
  return <h1>{JSON.stringify(blogPost.data[0].attributes.title)}</h1>;
}

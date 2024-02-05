import { SharedPageProps } from "@/app/[lang]/(static-routes)/layout";
import { PageHeader } from "@/app/[lang]/components/shared/page-header";
import { pageRenderer } from "@/app/[lang]/utils/page-renderer";
import { getBlogPageById } from "@/app/[lang]/utils/strapi-api-fns";
import { notFound } from "next/navigation";

type DetailProps = {
  params: SharedPageProps["params"] & { slug: string; category: string };
};

export default async function BlogDetail({ params }: DetailProps) {
  const blogPost = await getBlogPageById(params.lang, params.slug);
  if (!blogPost?.data[0]) return notFound();
  return (
    <main>
      <PageHeader header={blogPost.data[0].attributes.title} />

      {blogPost.data[0].attributes.sections.map((section: any) =>
        pageRenderer(section, section.id)
      )}
    </main>
  );
}

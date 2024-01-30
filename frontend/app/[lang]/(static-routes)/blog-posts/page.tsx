import { SharedPageProps } from "../layout";
import { getAllBlogs } from "../../utils/strapi-api-fns";

import { BlogPosts } from "../../components/shared/blog-posts";
import { PageHeader } from "../../components/shared/page-header";
import { createTranslation } from "../../i18n";

export default async function BlogPostsPage({ params }: SharedPageProps) {
  const blogPosts = await getAllBlogs(params.lang);
  const { t } = await createTranslation(params.lang, "translation");
  return (
    <main>
      <PageHeader
        header={t("blogPosts")}
        subHeader={t("allBlogPosts")}
      ></PageHeader>
      <BlogPosts data={blogPosts.data} lang={params.lang} />
    </main>
  );
}

import { BlogPosts } from "../../components/shared/blog-posts";
import { SharedPageProps } from "../../layout";
import { getAllBlogsByCategory } from "../../utils/strapi-api-fns";

type CategoriesProps = {
  params: SharedPageProps["params"] & { slug: string; category: string };
};
export default async function Categories({ params }: CategoriesProps) {
  const blogsByCategory = await getAllBlogsByCategory(
    params.lang,
    params.category
  );

  return <BlogPosts data={blogsByCategory.data} lang={params.lang} />;
}

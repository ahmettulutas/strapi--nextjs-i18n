import { SharedPageProps } from "../layout";
import { getAllBlogs } from "../../utils/strapi-api-fns";

import { BlogPosts } from "../../components/shared/blog-posts";

export default async function BlogPostsPage({ params }: SharedPageProps) {
  const blogPosts = await getAllBlogs(params.lang);
  return <BlogPosts data={blogPosts.data} lang={params.lang} />;
}

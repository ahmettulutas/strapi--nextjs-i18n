## The Internalization of Page Contents

In page contents such as "home" I have had to use the same slug for each locale. By doing so; I have kept them under static-routes.

## The Internalization of Dynamic Blog Posts

For the blog posts, you can use unique slugs for each locale. I have shown you how to fetch the blogpost data with locales included. When you fetch other locales for a blog-post you can adjust the navbar and use related slugs for each blog post.

## Be careful

Moving components or utils folder out of [lang] may cause you bugs when you call notFound() in one of the files they contain.

## The default language

The default language for this project is English.

## DB - PostgreSql

The database I have selected for strapi backend is postgresql

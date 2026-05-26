import type { MetadataRoute } from "next";

const BASE_URL = "https://splito.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // When blog posts ship, append them here. Example:
  //   const posts = await loadBlogPosts(); // read MDX files or fetch from CMS
  //   const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
  //     url: `${BASE_URL}/blog/${p.slug}`,
  //     lastModified: p.publishedAt,
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   }));
  //   return [...staticRoutes, ...blogRoutes];

  return staticRoutes;
}

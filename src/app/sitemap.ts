import { MetadataRoute } from "next";

const BASE_URL = "https://celebrityfashion.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${BASE_URL}/celebrity-news`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${BASE_URL}/fashion`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${BASE_URL}/beauty`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${BASE_URL}/street-style`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${BASE_URL}/red-carpet`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${BASE_URL}/luxury-brands`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${BASE_URL}/designer-collections`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${BASE_URL}/shopping-guides`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/gallery`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/videos`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/dmca`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/write-for-us`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
  ];

  // In production, fetch posts from database
  const blogPosts = [
    { slug: "zendaya-valentino-cannes-2026", date: "2026-07-03" },
    { slug: "hailey-bieber-street-style", date: "2026-07-02" },
    { slug: "top-10-luxury-handbags-2026", date: "2026-07-01" },
    { slug: "beyonce-fashion-line-2026", date: "2026-06-30" },
    { slug: "best-beauty-looks-met-gala-2026", date: "2026-06-29" },
  ];

  const postPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...postPages];
}

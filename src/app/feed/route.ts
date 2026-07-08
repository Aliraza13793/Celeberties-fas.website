import { NextResponse } from "next/server";

const SITE_URL = "https://celebrityfashion.com";

const generateRSS = () => {
  const posts = [
    {
      title: "Zendaya Stuns in Custom Valentino at Cannes Film Festival 2026",
      slug: "zendaya-valentino-cannes-2026",
      excerpt: "The actress turned heads in a breathtaking custom Valentino gown.",
      date: "2026-07-03T12:00:00Z",
      category: "Red Carpet",
    },
    {
      title: "Hailey Bieber's Off-Duty Street Style Guide",
      slug: "hailey-bieber-street-style",
      excerpt: "From oversized blazers to casual denim, discover Hailey's go-to looks.",
      date: "2026-07-02T12:00:00Z",
      category: "Street Style",
    },
    {
      title: "Top 10 Luxury Handbags Worth Investing In 2026",
      slug: "top-10-luxury-handbags-2026",
      excerpt: "These designer bags hold their value and elevate any outfit.",
      date: "2026-07-01T12:00:00Z",
      category: "Luxury Brands",
    },
    {
      title: "Beyonce's New Fashion Line: Everything We Know",
      slug: "beyonce-fashion-line-2026",
      excerpt: "The megastar is expanding her fashion empire.",
      date: "2026-06-30T12:00:00Z",
      category: "Fashion",
    },
    {
      title: "The Best Beauty Looks from Met Gala 2026",
      slug: "best-beauty-looks-met-gala-2026",
      excerpt: "These beauty moments stole the show.",
      date: "2026-06-29T12:00:00Z",
      category: "Beauty",
    },
  ];

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Celebrity Fashion</title>
    <link>${SITE_URL}</link>
    <description>Your ultimate source for celebrity fashion news, style tips, red carpet looks, and luxury brand updates.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
};

export async function GET() {
  const rss = generateRSS();

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

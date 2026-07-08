import { NextResponse } from "next/server";

export async function GET() {
  const newsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
    <loc>https://celebrityfashion.com/blog/zendaya-valentino-cannes-2026</loc>
    <news:news>
      <news:publication>
        <news:name>Celebrity Fashion</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>2026-07-03T12:00:00Z</news:publication_date>
      <news:title>Zendaya Stuns in Custom Valentino at Cannes Film Festival 2026</news:title>
    </news:news>
  </url>
  <url>
    <loc>https://celebrityfashion.com/blog/hailey-bieber-street-style</loc>
    <news:news>
      <news:publication>
        <news:name>Celebrity Fashion</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>2026-07-02T12:00:00Z</news:publication_date>
      <news:title>Hailey Bieber's Off-Duty Street Style Guide</news:title>
    </news:news>
  </url>
  <url>
    <loc>https://celebrityfashion.com/blog/best-beauty-looks-met-gala-2026</loc>
    <news:news>
      <news:publication>
        <news:name>Celebrity Fashion</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>2026-06-29T12:00:00Z</news:publication_date>
      <news:title>The Best Beauty Looks from Met Gala 2026</news:title>
    </news:news>
  </url>
</urlset>`;

  return new NextResponse(newsSitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

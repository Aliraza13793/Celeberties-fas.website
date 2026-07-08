import { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Street Style",
  description: "Celebrity street style, off-duty looks, and everyday fashion inspiration.",
};

export default function StreetStylePage() {
  const posts = getAllPosts().filter(p => p.category.slug === "street-style").map(p => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    readTime: p.readTime,
    views: p.views,
    featuredImage: p.featuredImage,
  }));

  return (
    <CategoryPage title="Street Style" description="Celebrity street style, off-duty looks, and everyday fashion inspiration." color="#f59e0b" posts={posts} />
  );
}

import { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Celebrity News",
  description: "Stay updated with the latest celebrity news, gossip, and fashion updates from Hollywood and beyond.",
};

export default function CelebrityNewsPage() {
  const posts = getAllPosts().filter(p => p.category.slug === "celebrity-news").map(p => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    readTime: p.readTime,
    views: p.views,
    featuredImage: p.featuredImage,
  }));

  return (
    <CategoryPage title="Celebrity News" description="Stay updated with the latest celebrity news, gossip, and fashion updates from Hollywood and beyond." color="#e11d48" posts={posts} />
  );
}

import { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Fashion",
  description: "Fashion trends, style guides, and the latest looks from celebrities and designers.",
};

export default function FashionPage() {
  const posts = getAllPosts().filter(p => p.category.slug === "fashion").map(p => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    readTime: p.readTime,
    views: p.views,
    featuredImage: p.featuredImage,
  }));

  return (
    <CategoryPage title="Fashion" description="Fashion trends, style guides, and the latest looks from celebrities and designers." color="#8b5cf6" posts={posts} />
  );
}

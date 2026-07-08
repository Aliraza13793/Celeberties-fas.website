import { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Shopping Guides",
  description: "Shopping guides, product recommendations, and fashion deals.",
};

export default function ShoppingGuidesPage() {
  const posts = getAllPosts().filter(p => p.category.slug === "shopping-guides").map(p => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    readTime: p.readTime,
    views: p.views,
    featuredImage: p.featuredImage,
  }));

  return (
    <CategoryPage title="Shopping Guides" description="Shopping guides, product recommendations, and fashion deals." color="#6366f1" posts={posts} />
  );
}

import { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Designer Collections",
  description: "Designer collection reviews, runway shows, and fashion week coverage.",
};

export default function DesignerCollectionsPage() {
  const posts = getAllPosts().filter(p => p.category.slug === "designer-collections").map(p => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    readTime: p.readTime,
    views: p.views,
    featuredImage: p.featuredImage,
  }));

  return (
    <CategoryPage title="Designer Collections" description="Designer collection reviews, runway shows, and fashion week coverage." color="#3b82f6" posts={posts} />
  );
}

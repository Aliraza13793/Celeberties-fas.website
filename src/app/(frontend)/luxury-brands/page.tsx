import { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Luxury Brands",
  description: "Luxury brand news, collection reviews, and designer updates.",
};

export default function LuxuryBrandsPage() {
  const posts = getAllPosts().filter(p => p.category.slug === "luxury-brands").map(p => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    readTime: p.readTime,
    views: p.views,
    featuredImage: p.featuredImage,
  }));

  return (
    <CategoryPage title="Luxury Brands" description="Luxury brand news, collection reviews, and designer updates." color="#059669" posts={posts} />
  );
}

import { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Beauty",
  description: "Beauty tips, makeup tutorials, skincare routines, and hair trends from celebrities.",
};

export default function BeautyPage() {
  const posts = getAllPosts().filter(p => p.category.slug === "beauty").map(p => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    readTime: p.readTime,
    views: p.views,
    featuredImage: p.featuredImage,
  }));

  return (
    <CategoryPage title="Beauty" description="Beauty tips, makeup tutorials, skincare routines, and hair trends from celebrities." color="#ec4899" posts={posts} />
  );
}

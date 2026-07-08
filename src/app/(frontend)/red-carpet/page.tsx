import { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Red Carpet",
  description: "Red carpet fashion, awards show looks, and celebrity event coverage.",
};

export default function RedCarpetPage() {
  const posts = getAllPosts().filter(p => p.category.slug === "red-carpet").map(p => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    readTime: p.readTime,
    views: p.views,
    featuredImage: p.featuredImage,
  }));

  return (
    <CategoryPage title="Red Carpet" description="Red carpet fashion, awards show looks, and celebrity event coverage." color="#ef4444" posts={posts} />
  );
}

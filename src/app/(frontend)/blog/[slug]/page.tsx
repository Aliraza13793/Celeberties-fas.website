import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getRelatedPosts, getAllBlogSlugs } from "@/lib/posts";
import BlogPostClient from "./BlogPostClient";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://celebrityfashion.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.featuredImage, width: 1200, height: 600 }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}

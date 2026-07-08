"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PostCard from "@/components/ui/PostCard";
import Newsletter from "@/components/ui/Newsletter";
import { formatDate } from "@/lib/utils";

interface BlogPostClientProps {
  post: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    publishedAt: string;
    readTime: number;
    views: number;
    author: string;
    tags: string[];
    category: {
      name: string;
      slug: string;
      color: string;
    };
  };
  relatedPosts: any[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <Header />

      <article className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

          <div className="mt-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full shadow-lg" style={{ backgroundColor: post.category.color }}>
              {post.category.name}
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>By {post.author}</span>
              <span>·</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
              <span>·</span>
              <span>{post.views.toLocaleString()} views</span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            {post.featuredImage && !imgError ? (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full aspect-video object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full aspect-video bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">CF</span>
              </div>
            )}
          </div>

          <div className="prose prose-lg max-w-none mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="flex flex-wrap gap-2 mt-8">
            {post.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-rose-50 hover:text-rose-600 cursor-pointer transition-all duration-300 hover:shadow-md">
                #{tag}
              </span>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <div className="border-t border-gray-200 mt-8 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <PostCard
                    key={rp.slug}
                    title={rp.title}
                    slug={rp.slug}
                    excerpt={rp.excerpt}
                    readTime={rp.readTime}
                    views={rp.views}
                    category={rp.category}
                    featuredImage={rp.featuredImage}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <Newsletter />
      </section>

      <Footer />
    </>
  );
}

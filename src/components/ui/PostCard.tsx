"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock, Eye, ArrowRight } from "lucide-react";

interface PostCardProps {
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: string;
  publishedAt?: string;
  readTime?: number;
  views?: number;
  category?: {
    name: string;
    slug: string;
    color?: string;
  };
  featured?: boolean;
}

const CATEGORY_IMAGES: Record<string, string> = {
  "red-carpet": "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=500&fit=crop",
  "street-style": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=500&fit=crop",
  "luxury-brands": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=500&fit=crop",
  "fashion": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=500&fit=crop",
  "beauty": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&fit=crop",
  "celebrity-news": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&h=500&fit=crop",
  "designer-collections": "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=500&fit=crop",
  "shopping-guides": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
};

export default function PostCard({
  title,
  slug,
  excerpt,
  featuredImage,
  readTime,
  views,
  category,
  featured = false,
}: PostCardProps) {
  const image = featuredImage || (category?.slug ? CATEGORY_IMAGES[category.slug] : null);
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <Link href={`/blog/${slug}`}>
        <div className={`relative overflow-hidden ${featured ? "aspect-video lg:aspect-[16/10]" : "aspect-video"}`}>
          {image && !imgError ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">CF</span>
            </div>
          )}
          {category && (
            <span
              className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded-full shadow-lg"
              style={{ backgroundColor: category.color || "#e11d48" }}
            >
              {category.name}
            </span>
          )}
        </div>
      </Link>

      <div className={`p-4 ${featured ? "lg:p-6" : ""}`}>
        <Link href={`/blog/${slug}`}>
          <h3
            className={`font-bold text-gray-900 group-hover:text-rose-600 transition-colors line-clamp-2 ${
              featured ? "text-xl lg:text-2xl" : "text-lg"
            }`}
          >
            {title}
          </h3>
        </Link>

        {excerpt && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{excerpt}</p>
        )}

        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
          {readTime && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{readTime} min read</span>}
          {views !== undefined && (
            <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{views.toLocaleString()}</span>
          )}
        </div>

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-rose-600 hover:text-rose-700 group/link"
        >
          Read More
          <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

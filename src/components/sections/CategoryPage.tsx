import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/ui/PostCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Newsletter from "@/components/ui/Newsletter";

interface CategoryPageProps {
  title: string;
  description: string;
  color: string;
  posts: Array<{
    title: string;
    slug: string;
    excerpt?: string;
    featuredImage?: string;
    readTime?: number;
    views?: number;
  }>;
}

export default function CategoryPage({
  title,
  description,
  color,
  posts,
}: CategoryPageProps) {
  return (
    <>
      <Header />

      <section className="py-16 md:py-20 text-white" style={{ backgroundColor: color }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{ label: title }]} />
          <h1 className="text-3xl md:text-5xl font-bold mt-4">{title}</h1>
          <p className="mt-4 text-lg text-white/80 w-full text-center">{description}</p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                featuredImage={post.featuredImage}
                readTime={post.readTime}
                views={post.views}
                category={{ name: title, slug: title.toLowerCase().replace(/\s+/g, "-"), color }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No articles yet. Check back soon!</p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors"
            >
              Go Home
            </Link>
          </div>
        )}
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <Newsletter />
      </section>

      <Footer />
    </>
  );
}

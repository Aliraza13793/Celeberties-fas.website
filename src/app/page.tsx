import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/ui/PostCard";
import CategoryCard from "@/components/ui/CategoryCard";
import Newsletter from "@/components/ui/Newsletter";
import { CATEGORIES } from "@/lib/constants";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.slice(0, 5);
  const latestPosts = allPosts.slice(5, 11);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=800&fit=crop" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900" />
        <div className="relative w-full min-h-[45vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Your Source for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">
                Celebrity Fashion
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed text-center w-full">
              Stay updated with the latest celebrity news, gossip, and fashion updates from Hollywood and beyond.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/celebrity-news" className="px-10 py-4 bg-rose-600 text-white font-semibold text-lg rounded-xl hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 min-w-[200px] text-center">
                Explore Stories
              </Link>
              <Link href="/about" className="px-10 py-4 bg-white/10 text-white font-semibold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:shadow-lg min-w-[200px] text-center">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Stories</h2>
          <p className="mt-2 text-gray-600">The biggest stories in celebrity fashion right now</p>
          <Link href="/celebrity-news" className="inline-block mt-3 text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} title={post.title} slug={post.slug} excerpt={post.excerpt} category={post.category} readTime={post.readTime} views={post.views} featuredImage={post.featuredImage} featured={post === featuredPosts[0]} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse Categories</h2>
          <p className="mt-2 text-gray-600">Explore our fashion categories</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.slug} name={cat.name} slug={cat.slug} color={cat.color} />
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Articles</h2>
          <p className="mt-2 text-gray-600">Fresh content updated daily</p>
          <Link href="/blog" className="inline-block mt-3 text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} title={post.title} slug={post.slug} excerpt={post.excerpt} category={post.category} readTime={post.readTime} views={post.views} featuredImage={post.featuredImage} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <Newsletter />
      </section>

      <Footer />
    </>
  );
}

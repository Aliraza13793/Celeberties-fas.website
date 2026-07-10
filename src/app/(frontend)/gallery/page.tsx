import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse the latest celebrity fashion photos, red carpet pictures, and style inspiration.",
};

const GALLERY_ITEMS = [
  { id: 1, title: "Zendaya at Cannes 2026", category: "Red Carpet", color: "#ef4444", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=600&fit=crop" },
  { id: 2, title: "Hailey Bieber Street Style", category: "Street Style", color: "#f59e0b", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=600&fit=crop" },
  { id: 3, title: "Met Gala 2026 Highlights", category: "Red Carpet", color: "#ef4444", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop" },
  { id: 4, title: "Spring Fashion Trends", category: "Fashion", color: "#8b5cf6", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop" },
  { id: 5, title: "Celebrity Beauty Looks", category: "Beauty", color: "#ec4899", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop" },
  { id: 6, title: "Chanel Collection Preview", category: "Designer", color: "#3b82f6", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=600&fit=crop" },
  { id: 7, title: "Kendall Jenner Off-Duty", category: "Street Style", color: "#f59e0b", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop" },
  { id: 8, title: "Grammy Awards Fashion", category: "Red Carpet", color: "#ef4444", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop" },
  { id: 9, title: "Luxury Handbag Trends", category: "Luxury", color: "#059669", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop" },
  { id: 10, title: "Summer Style Guide", category: "Fashion", color: "#8b5cf6", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=600&fit=crop" },
  { id: 11, title: "Celebrity Couple Style", category: "Celebrity", color: "#e11d48", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=600&fit=crop" },
  { id: 12, title: "Award Season Highlights", category: "Red Carpet", color: "#ef4444", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=600&fit=crop" },
  { id: 13, title: "Rihanna Bold Fashion", category: "Celebrity", color: "#e11d48", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop" },
  { id: 14, title: "Skincare Routines", category: "Beauty", color: "#ec4899", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop" },
  { id: 15, title: "Designer runway looks", category: "Designer", color: "#3b82f6", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop" },
  { id: 16, title: "Shopping Hotspot", category: "Shopping", color: "#6366f1", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Gallery" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-center">Photo Gallery</h1>
          <p className="mt-4 text-lg text-gray-300 w-full text-center">
            Browse the latest celebrity fashion photos and style inspiration.
          </p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <GalleryGrid items={GALLERY_ITEMS} />
      </section>

      <Footer />
    </>
  );
}

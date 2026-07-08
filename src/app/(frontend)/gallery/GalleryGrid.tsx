"use client";

import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  color: string;
  image: string;
}

function GalleryItemCard({ item }: { item: GalleryItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {item.image && !imgError ? (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{item.title}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-xs text-white/80 bg-black/30 px-2 py-1 rounded-full">{item.category}</span>
        <h3 className="text-white font-semibold mt-1">{item.title}</h3>
      </div>
    </div>
  );
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <GalleryItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

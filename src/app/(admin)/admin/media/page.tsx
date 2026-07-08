"use client";

import { useState } from "react";
import { Upload, Image, Trash2, Grid, List, Search } from "lucide-react";

const MOCK_MEDIA = [
  { id: "1", name: "cannes-2026.jpg", type: "image/jpeg", size: "245 KB", date: "2026-07-03" },
  { id: "2", name: "met-gala-2026.jpg", type: "image/jpeg", size: "320 KB", date: "2026-07-02" },
  { id: "3", name: "street-style-nyc.jpg", type: "image/jpeg", size: "189 KB", date: "2026-07-01" },
  { id: "4", name: "chanel-collection.jpg", type: "image/jpeg", size: "278 KB", date: "2026-06-30" },
  { id: "5", name: "luxury-handbags.jpg", type: "image/jpeg", size: "156 KB", date: "2026-06-29" },
  { id: "6", name: "beauty-look.jpg", type: "image/jpeg", size: "203 KB", date: "2026-06-28" },
];

export default function AdminMediaPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
          <p className="text-gray-600 mt-1">Manage your images and files</p>
        </div>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors shadow-sm">
          <Upload className="w-4 h-4" />
          Upload Files
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search media..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2.5 rounded-lg transition-colors ${view === "grid" ? "bg-gray-100" : "hover:bg-gray-50"}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2.5 rounded-lg transition-colors ${view === "list" ? "bg-gray-100" : "hover:bg-gray-50"}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {view === "grid" ? (
          <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {MOCK_MEDIA.map((media) => (
              <div
                key={media.id}
                className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-100 to-purple-100">
                  <Image className="w-10 h-10 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="p-2.5 bg-white rounded-full hover:bg-red-50 shadow-sm">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-3">
                  <p className="text-xs font-semibold text-gray-700 truncate">{media.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{media.size}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {MOCK_MEDIA.map((media) => (
              <div key={media.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{media.name}</p>
                  <p className="text-sm text-gray-500">{media.size} · {media.date}</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

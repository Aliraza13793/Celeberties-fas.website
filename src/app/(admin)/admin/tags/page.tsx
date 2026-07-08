"use client";

import { useState } from "react";
import { Plus, Trash2, Tag } from "lucide-react";

const INITIAL_TAGS = [
  { id: "1", name: "Zendaya", slug: "zendaya" },
  { id: "2", name: "Taylor Swift", slug: "taylor-swift" },
  { id: "3", name: "Beyonce", slug: "beyonce" },
  { id: "4", name: "Hailey Bieber", slug: "hailey-bieber" },
  { id: "5", name: "Valentino", slug: "valentino" },
  { id: "6", name: "Chanel", slug: "chanel" },
  { id: "7", name: "Gucci", slug: "gucci" },
  { id: "8", name: "Met Gala", slug: "met-gala" },
];

export default function AdminTagsPage() {
  const [tags, setTags] = useState(INITIAL_TAGS);
  const [newTagName, setNewTagName] = useState("");

  function addTag() {
    if (!newTagName.trim()) return;
    setTags([...tags, { id: Date.now().toString(), name: newTagName.trim(), slug: newTagName.trim().toLowerCase().replace(/\s+/g, "-") }]);
    setNewTagName("");
  }

  function deleteTag(id: string) {
    if (!confirm("Delete this tag?")) return;
    setTags(tags.filter((t) => t.id !== id));
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tags</h1>
        <p className="text-gray-600 mt-1">Manage tags for your posts</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
        <div className="flex gap-3">
          <input
            type="text"
            value={newTagName}
            onChange={(e) => setNewTagName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTag()}
            placeholder="Enter tag name..."
            className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
          <button onClick={addTag} className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-semibold shadow-sm">
            <Plus className="w-4 h-4" /> Add Tag
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <div key={tag.id} className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-full group hover:bg-gray-200 transition-colors">
              <Tag className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">{tag.name}</span>
              <button onClick={() => deleteTag(tag.id)} className="p-0.5 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

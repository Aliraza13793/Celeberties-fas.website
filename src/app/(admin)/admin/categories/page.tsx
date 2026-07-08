"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, FolderOpen } from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
  description: string;
}

const INITIAL_CATEGORIES: Category[] = [
  { id: "1", name: "Celebrity News", slug: "celebrity-news", color: "#e11d48", description: "Latest celebrity fashion news and gossip" },
  { id: "2", name: "Fashion", slug: "fashion", color: "#8b5cf6", description: "Fashion trends, tips, and style guides" },
  { id: "3", name: "Beauty", slug: "beauty", color: "#ec4899", description: "Beauty tips, makeup tutorials, and skincare" },
  { id: "4", name: "Street Style", slug: "street-style", color: "#f59e0b", description: "Celebrity street style and off-duty looks" },
  { id: "5", name: "Red Carpet", slug: "red-carpet", color: "#ef4444", description: "Red carpet fashion and awards show looks" },
  { id: "6", name: "Luxury Brands", slug: "luxury-brands", color: "#059669", description: "Luxury brand news and collections" },
  { id: "7", name: "Designer Collections", slug: "designer-collections", color: "#3b82f6", description: "Designer collection reviews and runway shows" },
  { id: "8", name: "Shopping Guides", slug: "shopping-guides", color: "#6366f1", description: "Shopping guides and product recommendations" },
];

const COLOR_PRESETS = ["#e11d48", "#8b5cf6", "#ec4899", "#f59e0b", "#ef4444", "#059669", "#3b82f6", "#6366f1"];

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#6366f1");

  function openForm(cat?: Category) {
    if (cat) {
      setEditingId(cat.id);
      setName(cat.name);
      setDescription(cat.description);
      setColor(cat.color);
    } else {
      setEditingId(null);
      setName("");
      setDescription("");
      setColor("#6366f1");
    }
    setShowForm(true);
  }

  function handleSave() {
    if (!name.trim()) return;
    if (editingId) {
      setCategories(categories.map((c) => c.id === editingId ? { ...c, name, description, color } : c));
    } else {
      setCategories([...categories, { id: Date.now().toString(), name, slug: name.toLowerCase().replace(/\s+/g, "-"), color, description }]);
    }
    setShowForm(false);
  }

  function deleteCategory(id: string) {
    if (!confirm("Delete this category?")) return;
    setCategories(categories.filter((c) => c.id !== id));
  }

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600 mt-1">Organize your posts into categories</p>
        </div>
        <button onClick={() => openForm()} className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-semibold shadow-sm">
          <Plus className="w-4 h-4" /> New Category
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
            <h2 className="text-lg font-semibold mb-4">{editingId ? "Edit Category" : "New Category"}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Category name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Brief description" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {COLOR_PRESETS.map((c) => (
                    <button key={c} onClick={() => setColor(c)} className={`w-8 h-8 rounded-full border-2 transition-transform ${color === c ? "border-gray-900 scale-110" : "border-transparent"}`} style={{ backgroundColor: c }} />
                  ))}
                </div>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-10 border border-gray-200 rounded-lg cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowForm(false)} className="px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-semibold">{editingId ? "Update" : "Create"}</button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: cat.color }}>
                    <FolderOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{cat.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{cat.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => openForm(cat)} className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => deleteCategory(cat.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

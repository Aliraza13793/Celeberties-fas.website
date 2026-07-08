"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, CheckCircle } from "lucide-react";

export default function NewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [category, setCategory] = useState("celebrity-news");
  const [featured, setFeatured] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handlePublish() {
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }
    if (!content.trim()) {
      alert("Please enter content");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, excerpt, content, status, category, featured }),
      });

      if (res.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          router.push("/admin/posts");
        }, 1500);
      } else {
        alert("Error saving post");
      }
    } catch {
      alert("Error saving post");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/posts" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">New Post</h1>
          <p className="text-gray-600 mt-1">Create a new article</p>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Post Published!</h2>
            <p className="text-gray-600">Redirecting to posts...</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title..."
              className="w-full px-4 py-3 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief description..."
              rows={2}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
            />
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Content (HTML supported)</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              rows={20}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-mono text-sm"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Status</h3>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <label className="flex items-center gap-2 mt-4 cursor-pointer">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
              />
              <span className="text-sm text-gray-700 font-medium">Featured post</span>
            </label>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Category</h3>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="celebrity-news">Celebrity News</option>
              <option value="fashion">Fashion</option>
              <option value="beauty">Beauty</option>
              <option value="street-style">Street Style</option>
              <option value="red-carpet">Red Carpet</option>
              <option value="luxury-brands">Luxury Brands</option>
              <option value="designer-collections">Designer Collections</option>
              <option value="shopping-guides">Shopping Guides</option>
            </select>
          </div>
          <button
            onClick={handlePublish}
            disabled={saving}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors font-semibold shadow-sm disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> {saving ? "Publishing..." : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
}

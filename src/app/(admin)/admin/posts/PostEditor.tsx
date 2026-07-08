"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Tag {
  id: string;
  name: string;
}

interface PostEditorProps {
  postId?: string;
}

export default function PostEditor({ postId }: PostEditorProps) {
  const router = useRouter();
  const isEditing = !!postId;

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [readTime, setReadTime] = useState(5);
  const [featured, setFeatured] = useState(false);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then(setCategories);
    fetch("/api/tags")
      .then((r) => r.json())
      .then(setTags);
    if (postId) {
      fetch(`/api/posts/${postId}`)
        .then((r) => r.json())
        .then((post) => {
          setTitle(post.title);
          setExcerpt(post.excerpt);
          setContent(post.content);
          setCategoryId(post.categoryId);
          setSelectedTags(post.tags);
          setStatus(post.status);
          setReadTime(post.readTime);
          setFeatured(post.featured);
          setSeoTitle(post.seoTitle);
          setSeoDescription(post.seoDescription);
        });
    }
  }, [postId]);

  function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  async function handleSave(saveStatus: "draft" | "published") {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (!content.trim()) {
      setError("Content is required");
      return;
    }

    setSaving(true);
    setError("");

    const body = {
      title: title.trim(),
      slug: slugify(title),
      excerpt: excerpt.trim(),
      content: content.trim(),
      categoryId,
      tags: selectedTags,
      status: saveStatus,
      readTime,
      featured,
      seoTitle: seoTitle.trim() || title.trim(),
      seoDescription: seoDescription.trim() || excerpt.trim(),
      publishedAt: saveStatus === "published" ? new Date().toISOString() : null,
    };

    try {
      const url = isEditing ? `/api/posts/${postId}` : "/api/posts";
      const method = isEditing ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save");
      }

      router.push("/admin/posts");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  function toggleTag(tagId: string) {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
    );
  }

  const wordCount = content
    .replace(/<[^>]*>/g, "")
    .split(/\s+/)
    .filter(Boolean).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/posts"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {isEditing ? "Edit Post" : "New Post"}
            </h1>
            <p className="text-gray-600">{wordCount} words</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSave("draft")}
            disabled={saving}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium disabled:opacity-50"
          >
            Save Draft
          </button>
          <button
            onClick={() => handleSave("published")}
            disabled={saving}
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-medium disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : "Publish"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title..."
              className="w-full px-4 py-3 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief description of the post..."
              rows={2}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content (HTML supported)
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here. HTML tags are supported for formatting..."
              rows={20}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-mono text-sm"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-medium text-gray-900 mb-4">Status</h3>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "published")}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <label className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
              />
              <span className="text-sm text-gray-700">Featured post</span>
            </label>
          </div>

          {/* Category */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-medium text-gray-900 mb-4">Category</h3>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-medium text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag.id)
                      ? "bg-rose-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>

          {/* Read time */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-medium text-gray-900 mb-4">Read Time (minutes)</h3>
            <input
              type="number"
              value={readTime}
              onChange={(e) => setReadTime(Number(e.target.value))}
              min={1}
              max={60}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* SEO */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-medium text-gray-900 mb-4">SEO</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">SEO Title</label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Custom SEO title..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                />
                <p className="text-xs text-gray-400 mt-1">{seoTitle.length}/60 characters</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Meta Description</label>
                <textarea
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  placeholder="SEO meta description..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm resize-none"
                />
                <p className="text-xs text-gray-400 mt-1">{seoDescription.length}/160 characters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

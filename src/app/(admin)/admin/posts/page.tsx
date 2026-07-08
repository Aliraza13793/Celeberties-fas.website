"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  FileText,
  Clock,
  CheckCircle,
  X,
  Save,
} from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  status: "published" | "draft";
  readTime: number;
  views: number;
  createdAt: string;
}

const INITIAL_POSTS: Post[] = [
  { id: "1", title: "Zendaya Stuns in Custom Valentino at Cannes Film Festival 2026", slug: "zendaya-valentino-cannes-2026", excerpt: "The actress turned heads in a breathtaking custom Valentino gown.", status: "published", readTime: 5, views: 24500, createdAt: "2026-06-15" },
  { id: "2", title: "Hailey Bieber's Off-Duty Street Style Guide", slug: "hailey-bieber-street-style", excerpt: "From oversized blazers to casual denim.", status: "published", readTime: 4, views: 18200, createdAt: "2026-06-14" },
  { id: "3", title: "Top 10 Luxury Handbags Worth Investing In 2026", slug: "top-10-luxury-handbags-2026", excerpt: "These designer bags hold their value.", status: "published", readTime: 7, views: 31000, createdAt: "2026-06-13" },
  { id: "4", title: "Beyonce's New Fashion Line: Everything We Know", slug: "beyonce-fashion-line-2026", excerpt: "The megastar is expanding her fashion empire.", status: "draft", readTime: 6, views: 0, createdAt: "2026-06-12" },
];

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editExcerpt, setEditExcerpt] = useState("");
  const [editStatus, setEditStatus] = useState<"published" | "draft">("published");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const res = await fetch("/api/posts");
      if (res.ok) {
        const customPosts = await res.json();
        const formatted = customPosts.map((p: any) => ({
          id: p.id,
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
          status: p.status,
          readTime: 5,
          views: 0,
          createdAt: p.createdAt,
        }));
        setPosts([...INITIAL_POSTS, ...formatted]);
      }
    } catch {}
  }

  const filtered = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || post.status === filter;
    return matchesSearch && matchesFilter;
  });

  function openEdit(post: Post) {
    setEditingPost(post);
    setEditTitle(post.title);
    setEditExcerpt(post.excerpt);
    setEditStatus(post.status);
  }

  async function saveEdit() {
    if (!editingPost || !editTitle.trim()) return;

    try {
      await fetch("/api/posts", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingPost.id, title: editTitle, excerpt: editExcerpt, status: editStatus }),
      });
    } catch {}

    setPosts(posts.map((p) =>
      p.id === editingPost.id
        ? { ...p, title: editTitle, excerpt: editExcerpt, status: editStatus }
        : p
    ));
    setEditingPost(null);
  }

  async function deletePost(id: string) {
    try {
      await fetch(`/api/posts?id=${id}`, { method: "DELETE" });
    } catch {}

    setPosts(posts.filter((p) => p.id !== id));
    setShowDeleteConfirm(null);
  }

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Posts</h1>
          <p className="text-gray-600 mt-1">Manage your articles and blog posts</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm font-semibold shadow-sm"
        >
          <Plus className="w-4 h-4" />
          New Post
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {(["all", "published", "draft"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`p-5 rounded-xl border text-left transition-all ${
              filter === status ? "bg-rose-50 border-rose-200 shadow-sm" : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            <div className="flex items-center gap-2">
              {status === "published" && <CheckCircle className="w-5 h-5 text-green-500" />}
              {status === "draft" && <Clock className="w-5 h-5 text-yellow-500" />}
              {status === "all" && <FileText className="w-5 h-5 text-blue-500" />}
              <span className="text-sm font-semibold text-gray-600 capitalize">{status}</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {status === "all" ? posts.length : posts.filter((p) => p.status === status).length}
            </p>
          </button>
        ))}
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white shadow-sm"
        />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Views</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">{post.title}</p>
                      <p className="text-sm text-gray-500 truncate max-w-md mt-1">{post.excerpt}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      post.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">{post.views.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{post.createdAt}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/blog/${post.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => openEdit(post)}
                        className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setShowDeleteConfirm(post.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Edit Post</h2>
              <button onClick={() => setEditingPost(null)} className="p-1 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={editExcerpt}
                  onChange={(e) => setEditExcerpt(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value as "published" | "draft")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
              <button onClick={() => setEditingPost(null)} className="px-5 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium">
                Cancel
              </button>
              <button onClick={saveEdit} className="px-5 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-semibold flex items-center gap-2">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl">
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Delete Post?</h2>
              <p className="text-gray-600">This action cannot be undone.</p>
            </div>
            <div className="flex gap-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => deletePost(showDeleteConfirm)}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Check, X, MessageSquare, User, Calendar } from "lucide-react";

const MOCK_COMMENTS = [
  {
    id: "1",
    name: "Fashion Lover",
    email: "fashion@example.com",
    content: "Great article! Love this celebrity fashion coverage. Keep up the amazing work!",
    post: "Zendaya Stuns in Custom Valentino",
    approved: true,
    date: "2026-07-03",
  },
  {
    id: "2",
    name: "Style Enthusiast",
    email: "style@example.com",
    content: "These tips are so helpful. I've been looking for this kind of content.",
    post: "Hailey Bieber Street Style Guide",
    approved: false,
    date: "2026-07-02",
  },
  {
    id: "3",
    name: "Fashion Fan",
    email: "fan@example.com",
    content: "Can't wait for more content like this! Absolutely love the style tips.",
    post: "Top 10 Luxury Handbags",
    approved: false,
    date: "2026-07-01",
  },
  {
    id: "4",
    name: "Red Carpet Watcher",
    email: "watcher@example.com",
    content: "The Met Gala coverage was incredible. Best fashion journalism online!",
    post: "Best Beauty Looks from Met Gala",
    approved: true,
    date: "2026-06-30",
  },
];

export default function AdminCommentsPage() {
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all");

  const filteredComments = MOCK_COMMENTS.filter((comment) => {
    if (filter === "pending") return !comment.approved;
    if (filter === "approved") return comment.approved;
    return true;
  });

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Comments</h1>
          <p className="text-gray-600 mt-1">Manage user comments on your posts</p>
        </div>
        <div className="flex gap-2">
          {(["all", "pending", "approved"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                filter === f
                  ? "bg-rose-600 text-white shadow-sm"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredComments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-gray-900">{comment.name}</h3>
                    <span className="text-sm text-gray-500">{comment.email}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{comment.content}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      on &quot;{comment.post}&quot;
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {comment.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!comment.approved && (
                  <button className="p-2.5 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <Check className="w-4 h-4 text-green-600" />
                  </button>
                )}
                <button className="p-2.5 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                  <X className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

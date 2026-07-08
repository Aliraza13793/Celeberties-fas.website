"use client";

import { useState } from "react";
import { Mail, Download, Trash2, Search, Users, CheckCircle, Clock } from "lucide-react";

const MOCK_SUBSCRIBERS = [
  { id: "1", email: "fashion1@example.com", name: "Fashion Lover", status: "active", date: "2026-07-03" },
  { id: "2", email: "style2@example.com", name: "Style Enthusiast", status: "active", date: "2026-07-02" },
  { id: "3", email: "fan3@example.com", name: "Fashion Fan", status: "active", date: "2026-07-01" },
  { id: "4", email: "reader4@example.com", name: "Daily Reader", status: "unsubscribed", date: "2026-06-30" },
  { id: "5", email: "viewer5@example.com", name: "Site Viewer", status: "active", date: "2026-06-29" },
];

export default function AdminNewsletterPage() {
  const [search, setSearch] = useState("");
  const activeCount = MOCK_SUBSCRIBERS.filter((s) => s.status === "active").length;

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Newsletter</h1>
          <p className="text-gray-600 mt-1">Manage your email subscribers</p>
        </div>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors shadow-sm">
          <Mail className="w-4 h-4" />
          Send Newsletter
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Subscribers</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{MOCK_SUBSCRIBERS.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Active</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{activeCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-50 rounded-xl">
              <Clock className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Unsubscribed</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{MOCK_SUBSCRIBERS.length - activeCount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search subscribers..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Name</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Date</th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_SUBSCRIBERS.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900">{subscriber.email}</p>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-sm text-gray-600">{subscriber.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${subscriber.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                      {subscriber.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <span className="text-sm text-gray-600">{subscriber.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

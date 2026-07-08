"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Eye, MousePointerClick, ToggleLeft, ToggleRight } from "lucide-react";

const MOCK_ADS = [
  { id: "1", title: "Summer Sale Banner", position: "Header", impressions: 45678, clicks: 1234, active: true },
  { id: "2", title: "Newsletter Promo", position: "Sidebar", impressions: 23456, clicks: 876, active: true },
  { id: "3", title: "Fashion Brand Sponsor", position: "In-Article", impressions: 18765, clicks: 543, active: false },
];

export default function AdminAdsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ads Management</h1>
          <p className="text-gray-600 mt-1">Manage your advertisements</p>
        </div>
        <button onClick={() => setShowModal(true)} className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          New Ad
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_ADS.map((ad) => (
          <div key={ad.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{ad.title}</h3>
                <p className="text-sm text-gray-500 mt-1">Position: {ad.position}</p>
              </div>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                {ad.active ? <ToggleRight className="w-7 h-7 text-green-500" /> : <ToggleLeft className="w-7 h-7 text-gray-400" />}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <Eye className="w-4 h-4" /> Impressions
                </div>
                <p className="text-xl font-bold text-gray-900 mt-1">{ad.impressions.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <MousePointerClick className="w-4 h-4" /> Clicks
                </div>
                <p className="text-xl font-bold text-gray-900 mt-1">{ad.clicks.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-500 font-medium">CTR: {((ad.clicks / ad.impressions) * 100).toFixed(2)}%</span>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Edit className="w-4 h-4 text-gray-500" /></button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Trash2 className="w-4 h-4 text-red-500" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">New Ad</h2>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
                <input type="text" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" placeholder="Ad title" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Position</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none">
                  <option>Header</option>
                  <option>Sidebar</option>
                  <option>In-Article</option>
                  <option>Footer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Content (HTML)</label>
                <textarea rows={4} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none font-mono text-sm" placeholder="Ad HTML content" />
              </div>
              <div className="flex gap-3 justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium text-sm">Cancel</button>
                <button type="submit" className="px-4 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-semibold text-sm">Create Ad</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

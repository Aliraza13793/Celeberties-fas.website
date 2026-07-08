"use client";

import { useState } from "react";
import { Search, Globe, FileText, Code, Save } from "lucide-react";

export default function AdminSeoPage() {
  const [activeTab, setActiveTab] = useState<"general" | "sitemap" | "schema" | "social">("general");

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">SEO Manager</h1>
        <p className="text-gray-600 mt-1">Optimize your site for search engines</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex gap-1 p-2">
            {([
              { id: "general", label: "General SEO", icon: Search },
              { id: "sitemap", label: "Sitemap", icon: Globe },
              { id: "schema", label: "Schema", icon: Code },
              { id: "social", label: "Social", icon: FileText },
            ] as const).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-rose-50 text-rose-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === "general" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Site Title</label>
                <input type="text" defaultValue="Celebrity Fashion | Celebrity News, Style & Red Carpet Looks" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description</label>
                <textarea rows={3} defaultValue="Your ultimate source for celebrity fashion news, style tips, red carpet looks, and luxury brand updates." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none resize-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Canonical URL</label>
                <input type="url" defaultValue="https://celebrityfashion.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors shadow-sm">
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "sitemap" && (
            <div className="space-y-6 max-w-2xl">
              <div className="p-4 bg-green-50 rounded-xl">
                <p className="text-green-700 text-sm font-medium">Sitemap is active and up to date.</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Sitemap URL</label>
                <input type="url" defaultValue="https://celebrityfashion.com/sitemap.xml" readOnly className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50" />
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-semibold text-sm shadow-sm">Regenerate Sitemap</button>
                <button className="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">Submit to Google</button>
              </div>
            </div>
          )}

          {activeTab === "schema" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Schema</label>
                <textarea rows={6} defaultValue={JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Celebrity Fashion", url: "https://celebrityfashion.com" }, null, 2)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none font-mono text-sm" />
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors shadow-sm">
                <Save className="w-4 h-4" />
                Save Schema
              </button>
            </div>
          )}

          {activeTab === "social" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Twitter Handle</label>
                <input type="text" defaultValue="@celebrityfashion" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook Page URL</label>
                <input type="url" defaultValue="https://facebook.com/celebrityfashion" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Default OG Image</label>
                <input type="text" defaultValue="/images/og-default.jpg" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors shadow-sm">
                <Save className="w-4 h-4" />
                Save Social Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

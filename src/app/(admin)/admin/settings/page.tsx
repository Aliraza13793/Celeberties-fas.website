"use client";

import { useState } from "react";
import { Save, Globe, Mail, Shield, Code } from "lucide-react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<"general" | "email" | "security" | "advanced">("general");

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Configure your website settings</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex gap-1 p-2">
            {([
              { id: "general", label: "General", icon: Globe },
              { id: "email", label: "Email", icon: Mail },
              { id: "security", label: "Security", icon: Shield },
              { id: "advanced", label: "Advanced", icon: Code },
            ] as const).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  activeTab === tab.id ? "bg-rose-50 text-rose-600" : "text-gray-600 hover:bg-gray-50"
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Site Name</label>
                <input type="text" defaultValue="Celebrity Fashion" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Site Description</label>
                <textarea rows={3} defaultValue="Your ultimate source for celebrity fashion news, style tips, red carpet looks, and luxury brand updates." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none resize-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Site URL</label>
                <input type="url" defaultValue="https://celebrityfashion.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Email</label>
                <input type="email" defaultValue="contact@celebrityfashion.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors shadow-sm">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          )}

          {activeTab === "email" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">SMTP Host</label>
                <input type="text" defaultValue="smtp.gmail.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">SMTP Port</label>
                  <input type="text" defaultValue="587" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Encryption</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none">
                    <option>TLS</option>
                    <option>SSL</option>
                  </select>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors shadow-sm">
                <Save className="w-4 h-4" /> Save Email Settings
              </button>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center justify-between p-5 bg-gray-50 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-600 mt-0.5">Add an extra layer of security</p>
                </div>
                <button className="px-4 py-2 bg-rose-600 text-white text-sm font-semibold rounded-lg hover:bg-rose-700">Enable</button>
              </div>
              <div className="flex items-center justify-between p-5 bg-gray-50 rounded-xl">
                <div>
                  <h3 className="font-semibold text-gray-900">Login Notifications</h3>
                  <p className="text-sm text-gray-600 mt-0.5">Get notified of new login attempts</p>
                </div>
                <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-100">Configure</button>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Session Timeout (minutes)</label>
                <input type="number" defaultValue={60} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors shadow-sm">
                <Save className="w-4 h-4" /> Save Security Settings
              </button>
            </div>
          )}

          {activeTab === "advanced" && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Head Code</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none font-mono text-sm" placeholder="<!-- Custom HTML for head -->" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Footer Code</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none font-mono text-sm" placeholder="<!-- Custom HTML for footer -->" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Google Analytics ID</label>
                <input type="text" placeholder="G-XXXXXXXXXX" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" />
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors shadow-sm">
                <Save className="w-4 h-4" /> Save Advanced Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

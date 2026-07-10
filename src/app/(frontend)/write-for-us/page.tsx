"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Loader2, CheckCircle, FileText, Mail, User } from "lucide-react";

export default function WriteForUsPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    portfolio: "",
    category: "",
    topic: "",
    sample: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/write-for-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", portfolio: "", category: "", topic: "", sample: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{ label: "Write For Us" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Write For Us</h1>
          <p className="mt-4 text-lg text-gray-300 w-full text-center">
            Join our team of passionate fashion writers and share your voice with our audience.
          </p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Write for Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 rounded-xl"><FileText className="w-6 h-6 text-rose-600" /></div>
                <div><h3 className="font-semibold text-gray-900">Reach a Large Audience</h3><p className="text-gray-600 text-sm">Our articles reach thousands of fashion enthusiasts every month.</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 rounded-xl"><User className="w-6 h-6 text-rose-600" /></div>
                <div><h3 className="font-semibold text-gray-900">Build Your Portfolio</h3><p className="text-gray-600 text-sm">Get published and build your writing portfolio with high-quality content.</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 rounded-xl"><Mail className="w-6 h-6 text-rose-600" /></div>
                <div><h3 className="font-semibold text-gray-900">Network with Industry</h3><p className="text-gray-600 text-sm">Connect with other fashion professionals and industry experts.</p></div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-3">Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Articles must be original and not published elsewhere</li>
                <li>• Minimum 800 words per article</li>
                <li>• Proper grammar and spelling required</li>
                <li>• Include relevant images with proper credits</li>
                <li>• Follow our style guide</li>
                <li>• Response within 5-7 business days</li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Application</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 transition-all" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Portfolio URL</label>
                  <input type="url" value={formState.portfolio} onChange={(e) => setFormState({ ...formState, portfolio: e.target.value })} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 transition-all" placeholder="https://yourportfolio.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Category *</label>
                  <select required value={formState.category} onChange={(e) => setFormState({ ...formState, category: e.target.value })} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-gray-900 transition-all">
                    <option value="">Select a category</option>
                    <option value="celebrity-news">Celebrity News</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                    <option value="street-style">Street Style</option>
                    <option value="red-carpet">Red Carpet</option>
                    <option value="luxury-brands">Luxury Brands</option>
                    <option value="shopping">Shopping Guides</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Proposed Topic *</label>
                  <input type="text" required value={formState.topic} onChange={(e) => setFormState({ ...formState, topic: e.target.value })} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 transition-all" placeholder="Brief description of your article idea" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Writing Sample *</label>
                  <textarea rows={5} required value={formState.sample} onChange={(e) => setFormState({ ...formState, sample: e.target.value })} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 transition-all resize-none" placeholder="Share a brief writing sample or link to published work..." />
                </div>
              </div>
              <button type="submit" disabled={status === "loading"} className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-rose-600 to-purple-600 text-white font-semibold rounded-xl hover:from-rose-700 hover:to-purple-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-rose-200">
                {status === "loading" ? (<><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>) : status === "success" ? (<><CheckCircle className="w-5 h-5" /> Application Submitted!</>) : ("Submit Application")}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

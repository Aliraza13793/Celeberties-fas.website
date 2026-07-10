"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300 w-full text-center">
            Have a question, tip, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 rounded-xl">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">razaali13793@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 rounded-xl">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">New York, NY, United States</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 rounded-xl">
                  <Phone className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-2">Write For Us</h3>
              <p className="text-gray-600 text-sm">
                Interested in contributing to Celebrity Fashion? We&apos;re always looking for
                talented writers. Check out our{" "}
                <a href="/write-for-us" className="text-rose-600 hover:underline">
                  Write For Us
                </a>{" "}
                page.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input id="name" type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 transition-all" placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input id="email" type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <input id="subject" type="text" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 transition-all" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea id="message" rows={5} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400 transition-all resize-none" placeholder="Write your message here..." />
                </div>
              </div>

              {status === "success" && (
                <div className="mt-5 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-700 text-sm font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>
                </div>
              )}

              {status === "error" && (
                <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600 text-sm font-medium">{errorMsg}</p>
                </div>
              )}

              <button type="submit" disabled={status === "loading"} className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-rose-600 to-purple-600 text-white font-semibold rounded-xl hover:from-rose-700 hover:to-purple-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-rose-200">
                {status === "loading" ? (<><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>) : (<><Send className="w-5 h-5" /> Send Message</>)}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

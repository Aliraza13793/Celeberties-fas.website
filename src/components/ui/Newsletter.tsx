"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-gradient-to-r from-rose-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
      <div className="flex flex-col items-center text-center">
        <Mail className="w-12 h-12 mb-4 text-white/80" />
        <h2 className="text-2xl md:text-3xl font-bold">Stay in the Loop</h2>
        <p className="mt-2 text-white/80">
          Get the latest celebrity fashion news, style tips, and exclusive updates delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-lg">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-3.5 rounded-xl text-lg text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 shadow-md"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-10 py-3.5 bg-white text-rose-600 font-semibold text-lg rounded-xl hover:bg-white/90 transition-colors disabled:opacity-50 shadow-md"
          >
            {status === "loading" ? (
              <Loader2 className="w-5 h-5 animate-spin mx-auto" />
            ) : status === "success" ? (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Subscribed!
              </span>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>

        <p className="mt-4 text-xs text-white/60">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

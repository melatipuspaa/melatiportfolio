"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-indigo-400/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-indigo-500/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Laura Fold"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputBase}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="laurafold@gmail.com"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputBase}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Message
        </label>
        <textarea
          placeholder="Tell me about your project..."
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-900/50 transition-all hover:shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </>
        )}
      </button>

      {/* Feedback */}
      {status === "success" && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 animate-fade-in">
          <span>✅</span> Message sent successfully! I'll reply soon.
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300 animate-fade-in">
          <span>❌</span> Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
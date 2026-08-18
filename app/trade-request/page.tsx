"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TradeRequestPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setSent(false);
    setError(false);

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("form-name", "trade-request");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Array.from(data.entries()).map(([key, value]) => [key, String(value)])
        ).toString(),
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <section className="border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">TRADE</p>
            <h1 className="mt-5 text-5xl font-black md:text-7xl">Request a Trade Account</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              Trade accounts are available to approved businesses. Complete the form and our team will review your application and contact you with your agreed trade pricing.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <form name="trade-request" method="POST" onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <input type="hidden" name="form-name" value="trade-request" />
            <input name="company" required placeholder="Company name" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
            <input name="website" placeholder="Company website" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
            <input name="contact" required placeholder="Contact name" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
            <input name="email" type="email" required placeholder="Business email address" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
            <input name="phone" placeholder="Telephone number" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
            <textarea name="address" rows={3} placeholder="Business address" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
            <input name="company-number" placeholder="Company number (optional)" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
            <textarea name="requirements" rows={5} placeholder="Tell us about your business and what you expect to purchase" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />

            {sent && <div className="rounded-xl border border-green-200 bg-green-50 p-4 font-semibold text-green-700">Thanks — your trade account request has been received. We'll be in touch.</div>}
            {error && <div className="rounded-xl border border-red-200 bg-red-50 p-4 font-semibold text-red-700">Something went wrong. Please try again or contact us directly.</div>}

            <button type="submit" disabled={sending} className="w-full rounded-xl bg-black py-4 font-bold text-white disabled:opacity-50">
              {sending ? "Sending…" : "Request Trade Account"}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

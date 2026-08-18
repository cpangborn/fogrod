"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setSent(false);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(
          Array.from(formData.entries()).map(([key, value]) => [
            key,
            String(value),
          ])
        ).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

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
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              CONTACT
            </p>

            <h1 className="mt-6 text-5xl font-black md:text-7xl">
              Get in
              <br />
              Touch
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Whether you need technical advice, product information, sales
              support or help selecting the correct FOGRod® system, we'd be
              happy to help.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-3xl font-bold">Send us a message</h2>

              <form
                name="contact"
                method="POST"
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white p-4 text-black outline-none placeholder:text-slate-400 focus:border-black"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white p-4 text-black outline-none placeholder:text-slate-400 focus:border-black"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="w-full rounded-xl border border-slate-300 bg-white p-4 text-black outline-none placeholder:text-slate-400 focus:border-black"
                />

                <textarea
                  rows={6}
                  name="message"
                  placeholder="How can we help?"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white p-4 text-black outline-none placeholder:text-slate-400 focus:border-black"
                />

                {sent && (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
                    Thanks — your enquiry has been sent successfully.
                  </div>
                )}

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                    Something went wrong. Please try again or contact us
                    directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-black hover:bg-white">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Email</h3>
                <p className="mt-3 text-slate-600">sales@fogrod.co.uk</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-black hover:bg-white">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Telephone</h3>
                <p className="mt-3 text-slate-600">0800 181 4881</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-black hover:bg-white">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Location</h3>
                <p className="mt-3 text-slate-600">United Kingdom</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

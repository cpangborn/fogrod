import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function TechnicalSupport() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 md:p-16">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            TECHNICAL SUPPORT
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Need help selecting the correct FOGRod?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you're replacing an existing system or specifying a new
            installation, our technical team can help you select the correct
            FOGRod solution for your application.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* Phone */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-black hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                  <Phone className="text-white" size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    Call Us
                  </p>

                  <p className="text-3xl font-bold">
                    0800 181 4881
                  </p>
                </div>

              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-black hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                  <Mail className="text-white" size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="break-all text-xl font-semibold">
                    sales@fogrod.co.uk
                  </p>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Technical Support
              <ArrowRight size={20} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
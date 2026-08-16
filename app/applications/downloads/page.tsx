import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText, Download, Wrench, BookOpen } from "lucide-react";

const downloads = [
  {
    icon: FileText,
    title: "Product Datasheets",
    description:
      "Technical specifications and performance information for every FOGRod® product.",
    status: "Coming Soon",
  },
  {
    icon: Wrench,
    title: "Installation Guides",
    description:
      "Step-by-step installation instructions and recommended wiring practices.",
    status: "Coming Soon",
  },
  {
    icon: BookOpen,
    title: "Product Manuals",
    description:
      "User manuals, commissioning information and maintenance documentation.",
    status: "Coming Soon",
  },
  {
    icon: Download,
    title: "Technical Resources",
    description:
      "Wiring diagrams, declarations, certificates and additional documentation.",
    status: "Coming Soon",
  },
];

export default function DownloadsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">

        <section className="border-b border-slate-800">
          <div className="mx-auto max-w-7xl px-6 py-24">

            <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
              DOWNLOADS
            </p>

            <h1 className="mt-6 text-5xl font-black md:text-7xl">
              Technical
              <br />
              Documentation
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Access datasheets, installation guides, product manuals and
              technical documentation for the complete FOGRod® range.
            </p>

          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid gap-8 md:grid-cols-2">

            {downloads.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-400 hover:-translate-y-1"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon size={30} className="text-cyan-400" />
                  </div>

                  <h2 className="text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-5 leading-7 text-slate-300">
                    {item.description}
                  </p>

                  <span className="mt-8 inline-flex rounded-full bg-slate-800 px-4 py-2 text-sm text-cyan-400">
                    {item.status}
                  </span>
                </div>
              );
            })}

          </div>

        </section>

        <section className="border-t border-slate-800 bg-slate-900/40">

          <div className="mx-auto max-w-5xl px-6 py-24 text-center">

            <h2 className="text-4xl font-black">
              Can't find the document you need?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
              Contact our technical team and we'll help you find the correct
              documentation for your installation.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Contact Technical Support
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
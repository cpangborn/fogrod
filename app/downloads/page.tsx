import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Download } from "lucide-react";

const documents = [
  {
    title: "FOGRod® Product Brochure",
    description:
      "Product information and an overview of the FOGRod® conductive level sensing system.",
    file: "/downloads/FOGRod-brochure-v2.0.pdf",
  },
  {
    title: "FOGRod® & LIT Technical Manual",
    description:
      "Technical manual covering FOGRod® and LIT level sensing systems, including installation, operation and technical information.",
    file: "/downloads/FOGRod-LIT-manual-v3.0.pdf",
  },
  {
    title: "FOGRod® Installation Guide",
    description:
      "Installation guidelines for FOGRod® conductive level sensing systems in water and wastewater applications.",
    file: "/downloads/FOGRod-Installation-Guide-V2.8.pdf",
  },
];

export default function DownloadsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">

        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              DOWNLOADS
            </p>

            <h1 className="mt-6 text-5xl font-black md:text-7xl">
              Technical
              <br />
              Documentation
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Access FOGRod® product information, installation guidance and
              technical documentation.
            </p>

          </div>
        </section>

        {/* Documents */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="mb-12">

            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              DOCUMENTATION
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              FOGRod® Technical Resources
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Download the latest FOGRod® product information, installation
              guidance and technical documentation.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {documents.map((document) => (

              <div
                key={document.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white transition group-hover:border-black group-hover:bg-black">
                  <FileText
                    size={30}
                    className="text-black transition group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h2 className="mt-8 text-2xl font-bold">
                  {document.title}
                </h2>

                {/* Description */}
                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {document.description}
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href={document.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
                  >
                    <FileText size={18} />
                    View PDF
                  </a>

                  <a
                    href={document.file}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-black transition hover:border-black hover:bg-slate-50"
                  >
                    <Download size={18} />
                    Download
                  </a>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Technical Support */}
        <section className="border-t border-slate-200 bg-slate-50">

          <div className="mx-auto max-w-5xl px-6 py-24 text-center">

            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              TECHNICAL SUPPORT
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Need technical assistance?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              If you need help selecting, installing or commissioning a
              FOGRod® system, our technical team can help.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Technical Support
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
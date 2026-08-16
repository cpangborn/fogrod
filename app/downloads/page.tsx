import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DownloadsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">

        {/* Page Header */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">

            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              DOWNLOADS
            </p>

            <h1 className="mt-6 text-5xl font-black lg:text-6xl">
              Technical Documentation
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Access brochures, datasheets, installation guides, wiring
              diagrams and technical documentation for FOGRod® products.
            </p>

          </div>
        </section>

        {/* Main Downloads */}
        <section className="mx-auto max-w-7xl px-6 py-20">

          {/* FOGRod Brochure */}
          <div className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">

            <div className="grid gap-10 p-8 lg:grid-cols-2 lg:p-12">

              {/* Brochure Information */}
              <div className="flex flex-col justify-center">

                <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">
                  FOGRod®
                </p>

                <h2 className="mt-4 text-4xl font-black lg:text-5xl">
                  FOGRod Brochure
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Learn how the FOGRod® conductive level sensing system works,
                  including installation, cleaning, remote monitoring and
                  technical specifications.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <a
                    href="/downloads/FOGRod-brochure-v2.0.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-slate-800"
                  >
                    View Brochure →
                  </a>

                  <a
                    href="/downloads/FOGRod-brochure-v2.0.pdf"
                    download
                    className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-black transition hover:border-black hover:bg-slate-50"
                  >
                    Download PDF
                  </a>

                </div>

              </div>

              {/* Logo Preview */}
              <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-8">

                <div className="w-full text-center">

                  <div className="flex min-h-[240px] items-center justify-center rounded-2xl bg-slate-50 p-8">
                    <img
                      src="/images/fogrod-logo-transparent.png"
                      alt="FOGRod logo"
                      className="max-h-40 w-auto max-w-full object-contain"
                    />
                  </div>

                  <p className="mt-5 font-semibold text-black">
                    FOGRod Brochure
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Version 2.0
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Other Documentation */}
          <div className="grid gap-8 md:grid-cols-3">

            {/* Datasheets */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-black hover:bg-white">

              <h2 className="text-2xl font-bold">
                Datasheets
              </h2>

              <p className="mt-4 text-slate-600">
                Product specifications and technical information for FOGRod
                and associated equipment.
              </p>

              <span className="mt-8 inline-block rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-500">
                Coming Soon
              </span>

            </div>

            {/* Installation Guides */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-black hover:bg-white">

              <h2 className="text-2xl font-bold">
                Installation Guides
              </h2>

              <p className="mt-4 text-slate-600">
                Step-by-step installation instructions for FOGRod systems
                and components.
              </p>

              <span className="mt-8 inline-block rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-500">
                Coming Soon
              </span>

            </div>

            {/* Wiring Diagrams */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-black hover:bg-white">

              <h2 className="text-2xl font-bold">
                Wiring Diagrams
              </h2>

              <p className="mt-4 text-slate-600">
                Electrical wiring information and examples for FOGRod
                installations.
              </p>

              <span className="mt-8 inline-block rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-500">
                Coming Soon
              </span>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const applications = [
  {
    title: "Wastewater Pumping Stations",
    image: "/images/fogrod.jpg",
    description:
      "Reliable conductive level detection for foul and surface water pumping stations where dependable operation is essential.",
  },
  {
    title: "Sewage Treatment Works",
    image: "/images/fogrod.jpg",
    description:
      "Designed for harsh wastewater environments requiring accurate level monitoring and long service life.",
  },
  {
    title: "Water Utilities",
    image: "/images/fogrod.jpg",
    description:
      "Trusted level detection solutions for utility companies requiring dependable long-term performance.",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-50 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              APPLICATIONS
            </p>
            <h1 className="mt-6 text-5xl font-black md:text-7xl">
              Engineered for Every
              <br />
              Wastewater Environment
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              FOGRod® conductive level detection systems are trusted across a
              wide range of wastewater applications, providing dependable
              operation in demanding environments.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-2 hover:border-black hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  width={700}
                  height={500}
                  className="h-60 w-full object-contain bg-white p-8"
                />
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="text-2xl font-bold">{app.title}</h2>
                  <p className="mt-5 leading-7 text-slate-600">{app.description}</p>
                  <Link
                    href="/shop"
                    className="mt-auto inline-flex w-fit rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                  >
                    Recommended Products
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                FLOAT SWITCH REPLACEMENT
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Looking for an alternative to sewage pump float switches?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Learn how FOGRod conductive electrodes can provide multi-level
                wastewater detection without moving float mechanisms in suitable
                pumping stations. Check liquid and control-panel compatibility
                before specifying a replacement.
              </p>
            </div>
            <Link
              href="/float-switch-replacement"
              className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Read the float switch replacement guide
            </Link>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <h2 className="text-4xl font-black md:text-5xl">
              Not sure which system you need?
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Our technical team can help you select the correct FOGRod®
              solution for your installation.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800 hover:scale-105"
            >
              Contact Our Engineers
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

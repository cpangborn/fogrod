import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flygt MultiTrode Replacement | FOGRod®",
  description: "FOGRod® multi-electrode conductive level probe for suitable wastewater applications requiring a replacement for the discontinued Flygt MultiTrode probe.",
  keywords: [
    "Flygt MultiTrode replacement",
    "Flygt MultiTrode probe replacement",
    "MultiTrode replacement",
    "MultiTrode probe replacement UK",
    "Flygt level probe replacement",
    "Flygt MultiTrode",
    "wastewater level probe",
    "FOGRod",
  ],
  alternates: { canonical: "https://fogrod.co.uk/flygt-multitrode-replacement" },
  openGraph: {
    title: "Flygt MultiTrode Replacement | FOGRod®",
    description: "FOGRod® is a multi-electrode conductive level probe developed as a direct replacement for the discontinued Xylem Flygt MultiTrode probe for suitable wastewater applications.",
    url: "https://fogrod.co.uk/flygt-multitrode-replacement",
    siteName: "FOGRod",
    locale: "en_GB",
    type: "website",
  },
};
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FlygtMultiTrodeReplacementPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black">
        <section className="border-b border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              MultiTrode replacement
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Flygt MultiTrode Probe Replacement
            </h1>
            <p className="mt-7 max-w-4xl text-xl leading-9 text-slate-300">
              FOGRod® is a multi-electrode conductive level probe developed as a
              direct replacement for the discontinued Xylem Flygt MultiTrode
              probe for suitable wastewater level-control applications.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/shop" className="rounded-xl bg-white px-7 py-4 font-bold text-black">
                View FOGRod Products
              </Link>
              <Link href="/contact" className="rounded-xl border border-white px-7 py-4 font-bold text-white">
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <section>
            <h2 className="text-3xl font-black md:text-4xl">
              Looking for a Flygt MultiTrode replacement?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              If you have a wastewater pumping station using a Flygt MultiTrode
              level probe, FOGRod® provides a modern multi-electrode alternative
              for suitable installations. The probe uses conductive electrodes
              positioned at defined levels to provide level signals for pump
              control, protection and alarms.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Water Automation Technology states that Xylem discontinued
              Flygt-branded MultiTrode products in January 2025 and identifies
              FOGRod® as a direct replacement developed by former MultiTrode
              engineers. Pump Services is the England & Wales Tier 1 distributor
              listed by Water Automation Technology.
            </p>
          </section>

          <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
            <h2 className="text-3xl font-black md:text-4xl">
              What does FOGRod® replace?
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Flygt MultiTrode level probes",
                "Multi-electrode wastewater level sensing",
                "Multiple float switch arrangements",
                "Level sensing used for pump start and stop",
                "Independent high-level or low-level protection",
                "Suitable MultiTrode-to-FOGRod retrofit projects",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-black md:text-4xl">
              FOGRod® multi-electrode technology
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              FOGRod® uses conductive electrodes on a single probe rather than
              relying on freely moving float switches. As wastewater reaches
              each electrode, the connected level controller detects the
              conductive path and provides the corresponding level signal.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-black">Multiple levels</h3>
                <p className="mt-2 text-slate-600">Defined electrode points on one probe.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-black">No moving floats</h3>
                <p className="mt-2 text-slate-600">Conductive sensing instead of a mechanical float mechanism.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-black">Wastewater focused</h3>
                <p className="mt-2 text-slate-600">Designed for demanding wet-well and wastewater applications.</p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-black md:text-4xl">
              MultiTrode replacement for UK pump stations
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              FOGRod® is available in different lengths and electrode
              configurations. The correct model depends on the wet-well
              dimensions, required pump-control levels, cable arrangement and
              control equipment.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              For installations using a 10-electrode FOGRod®, the LIT liquid
              indicator transmitter provides ten level relay outputs together
              with alarm and analogue-output functions for suitable control and
              telemetry applications.
            </p>
          </section>

          <section className="mt-16 rounded-3xl bg-black p-8 text-white md:p-12">
            <h2 className="text-3xl font-black md:text-4xl">
              Need help replacing a MultiTrode?
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Send us the existing probe details, wet-well depth and control
              panel information and we can help identify a suitable FOGRod®
              configuration.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="rounded-xl bg-white px-7 py-4 font-bold text-black">
                Shop FOGRod
              </Link>
              <Link href="/contact" className="rounded-xl border border-white px-7 py-4 font-bold text-white">
                Contact Us
              </Link>
              <Link href="/blog/fogrod-vs-floats-ultrasonic-radar" className="rounded-xl border border-slate-600 px-7 py-4 font-bold text-white">
                Read Level Sensing Guide
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

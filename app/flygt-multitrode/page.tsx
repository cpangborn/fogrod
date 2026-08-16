import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Waves,
  Settings,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Flygt MultiTrode Replacement | FOGRod®",
  description:
    "Looking for a Flygt MultiTrode replacement? Learn about the discontinued MultiTrode level sensing system and FOGRod®, a modern multi-electrode alternative for wastewater pumping stations.",
};

export default function FlygtMultiTrodePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">

        {/* HERO */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

            <div className="max-w-4xl">

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                FLYGT MULTITRODE
              </p>

              <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
                Looking for a
                <br />
                Flygt MultiTrode replacement?
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                A complete guide to the Flygt MultiTrode level sensing system,
                its use in wastewater pumping stations and the FOGRod®
                multi-electrode replacement solution.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-3 rounded-xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-slate-800"
                >
                  View FOGRod Systems
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-black transition hover:border-black"
                >
                  Talk to an Engineer
                </Link>

              </div>

            </div>

          </div>
        </section>


       {/* INTRODUCTION */}
<section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

  <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

    <div>

      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
        MULTI-ELECTRODE LEVEL DETECTION
      </p>

      <h2 className="mt-5 text-4xl font-black md:text-5xl">
        What was the Flygt MultiTrode?
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        The Flygt MultiTrode was a conductive liquid level sensing
        system widely used in water and wastewater applications.
        MultiTrode probes provided multiple level sensing points along
        a single probe assembly.
      </p>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        The standard MultiTrode arrangement used multiple individual
        conductive sensors positioned at different levels. These
        sensors could be assigned to functions such as pump start,
        pump stop and high-level alarm.
      </p>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        This made the system particularly useful in wastewater
        pumping stations where several operating levels needed to be
        monitored from one installation.
      </p>

    </div>

    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

      <Image
        src="/images/flygt-multitrode.webp"
        alt="Flygt MultiTrode level sensing probe"
        width={600}
        height={600}
        className="h-[600px] w-full object-contain p-8"
        priority
      />

      <div className="border-t border-slate-200 bg-slate-50 p-6">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          FLYGT MULTITRODE
        </p>

        <p className="mt-2 font-semibold text-black">
          Multi-electrode conductive level sensing probe
        </p>

      </div>

    </div>

  </div>

</section>


        {/* HOW IT WORKED */}
        <section className="border-y border-slate-200 bg-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                HOW IT WORKED
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-5xl">
                Conductive level sensing
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                MultiTrode systems used the electrical conductivity of the
                liquid being monitored to determine when individual sensor
                points were submerged.
              </p>

            </div>


            <div className="mt-14 grid gap-8 md:grid-cols-3">

              <div className="rounded-3xl border border-slate-200 bg-white p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Waves size={26} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Liquid reaches sensor
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  As the wastewater level rises, individual conductive
                  contacts become submerged.
                </p>

              </div>


              <div className="rounded-3xl border border-slate-200 bg-white p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Settings size={26} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Level is detected
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  The controller detects conductivity through the relevant
                  sensor and interprets the corresponding level.
                </p>

              </div>


              <div className="rounded-3xl border border-slate-200 bg-white p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <RefreshCw size={26} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Equipment responds
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  The detected level can be used to operate pumps, trigger
                  alarms or provide other control functions.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* TYPICAL APPLICATION */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                WASTEWATER APPLICATIONS
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-5xl">
                Typical MultiTrode level functions
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Multiple sensor points allowed different operating levels to
                be configured within the pumping station.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Depending on the installation, sensor points could be used for
                functions such as pump off, lead pump start, lag pump start
                and high-level alarm.
              </p>

            </div>


            <div className="space-y-4">

              {[
                "Low-level / pump-off",
                "Duty pump start",
                "Standby or lag pump start",
                "High-level alarm",
                "Additional level control points",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <Check size={17} />
                  </div>

                  <span className="font-semibold">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </section>


        {/* DISCONTINUED */}
        <section className="bg-black text-white">

          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

            <div className="max-w-4xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black">
                <AlertTriangle size={30} />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                IMPORTANT FOR EXISTING INSTALLATIONS
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-5xl">
                Flygt MultiTrode has been discontinued
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Xylem discontinued its Flygt-branded MultiTrode products in
                January 2025. This means operators and contractors maintaining
                existing MultiTrode installations may need to consider
                alternative level sensing equipment when probes or associated
                components require replacement.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                FOGRod® has been developed as a modern multi-electrode solution
                for wastewater applications where a MultiTrode-style level
                sensing arrangement is required.
              </p>

            </div>

          </div>

        </section>


        {/* FOGROD REPLACEMENT */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-500">
                THE FOGROD® SOLUTION
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-5xl">
                A modern MultiTrode replacement
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                FOGRod® is a conductive multi-electrode level sensing system
                designed specifically for wastewater pumping stations,
                treatment works and industrial applications.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Like the MultiTrode concept, FOGRod® uses multiple conductive
                sensing points along a single assembly to provide level
                detection at different points within the wet well.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                View FOGRod Systems
                <ArrowRight size={18} />
              </Link>

            </div>


            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                FOGROD® FEATURES
              </p>

              <div className="mt-8 space-y-5">

                {[
                  "Multi-level conductive sensing",
                  "10-electrode configuration available",
                  "Designed for wastewater environments",
                  "Suitable for retrofit applications",
                  "Multiple cable and rod configurations",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-4"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <Check size={16} />
                    </div>

                    <p className="font-semibold text-slate-800">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* COMPARISON */}
        <section className="border-y border-slate-200 bg-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                AT A GLANCE
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-5xl">
                MultiTrode and FOGRod®
              </h2>

            </div>


            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">

              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-100">

                <div className="p-5 font-semibold">
                  Feature
                </div>

                <div className="p-5 font-semibold">
                  Flygt MultiTrode
                </div>

                <div className="p-5 font-semibold">
                  FOGRod®
                </div>

              </div>


              {[
                ["Conductive level sensing", "✓", "✓"],
                ["Multi-level detection", "✓", "✓"],
                ["10-sensor / electrode configuration", "✓", "✓"],
                ["Wastewater applications", "✓", "✓"],
                ["Pump control levels", "✓", "✓"],
                ["High-level alarm", "✓", "✓"],
                ["Current replacement solution", "Discontinued", "Available"],
              ].map(([feature, multitrode, fogrod]) => (
                <div
                  key={feature}
                  className="grid grid-cols-3 border-b border-slate-200 last:border-b-0"
                >

                  <div className="p-5 font-semibold text-slate-800">
                    {feature}
                  </div>

                  <div className="p-5 text-slate-600">
                    {multitrode}
                  </div>

                  <div className="p-5 font-semibold text-slate-900">
                    {fogrod}
                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">

          <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="mt-5 text-center text-4xl font-black md:text-5xl">
            Flygt MultiTrode replacement
          </h2>


          <div className="mt-12 space-y-5">

            <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer list-none text-xl font-bold">
                Is Flygt MultiTrode discontinued?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Yes. Water Automation Technology states that Xylem
                discontinued its Flygt-branded MultiTrode products in January
                2025.
              </p>
            </details>


            <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer list-none text-xl font-bold">
                What can replace a Flygt MultiTrode probe?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                FOGRod® is a multi-electrode conductive level sensing system
                developed for wastewater applications and intended as a
                replacement solution for MultiTrode installations.
              </p>
            </details>


            <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer list-none text-xl font-bold">
                Can FOGRod® provide multiple level points?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Yes. FOGRod® systems use multiple conductive electrodes to
                provide level detection at different points along the sensing
                assembly.
              </p>
            </details>


            <details className="group rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer list-none text-xl font-bold">
                Is FOGRod® suitable for wastewater pumping stations?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Yes. FOGRod® is designed for wastewater pumping stations,
                sewage treatment works and other demanding liquid level
                applications.
              </p>
            </details>

          </div>

        </section>


        {/* FINAL CTA */}
        <section className="border-t border-slate-200 bg-white">

          <div className="mx-auto max-w-4xl px-6 py-24 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              NEED A MULTITRODE REPLACEMENT?
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              See how FOGRod® can work for your installation.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Browse the FOGRod® range or speak to our team about replacing
              an existing MultiTrode installation.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="/shop"
                className="inline-flex items-center gap-3 rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                View FOGRod Systems
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-slate-300 px-8 py-4 font-semibold text-black transition hover:border-black"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
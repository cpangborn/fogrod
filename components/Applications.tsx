import Link from "next/link";
import {
  Factory,
  Waves,
  Building2,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

const applications = [
  {
    icon: Waves,
    title: "Wastewater Pumping Stations",
    description:
      "Reliable conductive level sensing for wet wells and pumping stations.",
  },
  {
    icon: Factory,
    title: "Sewage Treatment Works",
    description:
      "Accurate level detection for treatment processes and pumping applications.",
  },
  {
    icon: Building2,
    title: "Water Utilities",
    description:
      "Dependable level detection for water utility installations and wastewater infrastructure.",
  },
];

export default function Applications() {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            APPLICATIONS
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Trusted across the wastewater industry.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            FOGRod® conductive level sensing systems are used in a wide range
            of wastewater applications where dependable level detection is
            essential.
          </p>
        </div>

        {/* Applications */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {applications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-black hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white transition group-hover:border-black group-hover:bg-black">
                  <Icon
                    size={30}
                    className="text-black transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href="/applications"
                  className="mt-8 inline-flex items-center font-semibold text-black transition hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>

        {/* MultiTrode Replacement */}
        <div className="mt-20 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-2xl">

          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div className="p-10 lg:p-14">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                <RefreshCw
                  size={30}
                  className="text-black"
                />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                MULTITRODE REPLACEMENT
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Looking for a
                <br />
                MultiTrode alternative?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                FOGRod® provides a modern conductive level sensing solution
                for wastewater pumping stations and other demanding
                wastewater applications.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Using multiple conductive electrodes along a single sensing
                assembly, FOGRod® can provide multiple level detection points
                for pump control and alarm applications.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:bg-cyan-400"
              >
                View FOGRod Systems
                <ArrowRight size={18} />
              </Link>

            </div>

            {/* Right */}
            <div className="border-t border-slate-800 bg-slate-900 p-10 lg:border-l lg:border-t-0 lg:p-14">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                WHY FOGROD®?
              </p>

              <h3 className="mt-4 text-3xl font-black">
                Built for wastewater level detection.
              </h3>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-slate-950">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold">
                      Multi-level sensing
                    </p>
                    <p className="mt-1 text-slate-400">
                      Multiple conductive electrodes provide level detection
                      at different points within the wet well.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-slate-950">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold">
                      Designed for wastewater
                    </p>
                    <p className="mt-1 text-slate-400">
                      Suitable for demanding wastewater environments where
                      reliable level detection is essential.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-slate-950">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold">
                      10-electrode configuration
                    </p>
                    <p className="mt-1 text-slate-400">
                      The FOGRod system can provide up to 10 individual
                      conductive level contacts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-slate-950">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold">
                      Ideal for retrofit applications
                    </p>
                    <p className="mt-1 text-slate-400">
                      A practical option when replacing traditional level
                      sensing equipment in existing installations.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
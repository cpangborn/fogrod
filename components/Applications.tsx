import Link from "next/link";
import {
  Factory,
  Waves,
  Building2,
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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {applications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-black hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 transition group-hover:bg-black group-hover:border-black">
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

      </div>
    </section>
  );
}
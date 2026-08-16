import {
  ShieldCheck,
  Gauge,
  Wrench,
  Droplets,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "No Moving Parts",
    description:
      "Conductive level sensing eliminates moving mechanical components, reducing wear and routine maintenance.",
  },
  {
    icon: Gauge,
    title: "Up to 10 Level Points",
    description:
      "Monitor multiple level points with a single electrode assembly for accurate level control.",
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    description:
      "Designed for straightforward installation, commissioning and long-term servicing in wastewater applications.",
  },
  {
    icon: Droplets,
    title: "Built for Harsh Environments",
    description:
      "Manufactured for wastewater pumping stations, sewage treatment works and industrial process applications.",
  },
];

export default function WhyFogrod() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            WHY FOGROD®
          </p>

          <h2 className="text-4xl font-black text-black md:text-6xl">
            Reliable conductive level sensing
            <span className="text-slate-500">
              {" "}for demanding wastewater applications.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            FOGRod® conductive level sensing electrodes are designed for dependable
            operation in wastewater pumping stations, sewage treatment works and
            industrial environments. Engineered for reliability and ease of
            maintenance, they provide accurate level detection where consistent
            performance is essential.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 transition group-hover:bg-black">
                  <Icon
                    size={30}
                    className="text-black transition group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-black">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
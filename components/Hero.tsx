import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-black">

      {/* Subtle background detail */}
      <div className="absolute inset-0">
        <div className="absolute right-20 top-20 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-slate-50 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              CONDUCTIVE LEVEL SENSING ELECTRODES
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Precision Level Detection
              <br />
              Built for Wastewater
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              FOGRod® conductive level sensing electrodes provide dependable,
              maintenance-friendly level detection for wastewater pumping
              stations, sewage treatment works and industrial applications.
              Designed for harsh environments where reliability matters.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/shop"
                className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                View Products
              </Link>

              <Link
                href="/downloads"
                className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-black transition hover:border-black hover:bg-slate-50"
              >
                Technical Resources
              </Link>

            </div>

            {/* Key Features */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">

              <div>
                <h3 className="text-xl font-bold text-black">
                  No Moving Parts
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Reduced maintenance
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black">
                  Up to 10 Electrodes
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Multiple level points
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black">
                  Wastewater Ready
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Built for harsh environments
                </p>
              </div>

            </div>

            {/* Technical Support */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <p className="text-sm uppercase tracking-widest text-slate-500">
                Technical Support
              </p>

              <p className="mt-2 text-3xl font-bold text-black">
                0800 181 4881
              </p>

              <p className="mt-1 text-slate-600">
                Need help selecting the correct FOGRod? Speak to our technical
                team.
              </p>

            </div>

          </div>

          {/* Right */}
          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-slate-200 blur-3xl" />

            <Image
              src="/images/fogrod.jpg"
              alt="FOGRod conductive level sensing electrode"
              width={850}
              height={850}
              priority
              className="relative rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
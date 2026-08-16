import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-5xl px-6 py-24">

          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            TERMS & CONDITIONS
          </p>

          <h1 className="mt-6 text-5xl font-black">
            Terms & Conditions
          </h1>

          <div className="mt-12 space-y-8 leading-8 text-slate-300">

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white">
                Orders
              </h2>
              <p>
                All orders are subject to acceptance and product availability.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white">
                Pricing
              </h2>
              <p>
                Prices are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white">
                Warranty
              </h2>
              <p>
                Products are covered by the applicable manufacturer warranty.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white">
                Liability
              </h2>
              <p>
                Our liability is limited to the value of the products supplied
                where permitted by law.
              </p>
            </section>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
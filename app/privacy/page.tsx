import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-5xl px-6 py-24">
          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            PRIVACY POLICY
          </p>

          <h1 className="mt-6 text-5xl font-black">
            Privacy Policy
          </h1>

          <div className="mt-12 space-y-8 text-slate-300 leading-8">
            <section>
              <h2 className="mb-3 text-2xl font-bold text-white">
                Information We Collect
              </h2>
              <p>
                We only collect information that you voluntarily provide when
                contacting us or placing an order.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white">
                How We Use Your Information
              </h2>
              <p>
                Your information is used to respond to enquiries, fulfil orders
                and improve our products and services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white">
                Cookies
              </h2>
              <p>
                This website may use cookies to improve your browsing
                experience.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-white">
                Contact
              </h2>
              <p>
                If you have any questions regarding this Privacy Policy, please
                contact us.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
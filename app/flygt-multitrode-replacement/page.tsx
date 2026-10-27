import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What is a Flygt MultiTrode replacement?",
    answer:
      "FOGRod is a multi-electrode conductive level probe developed for suitable wastewater pumping-station applications where a Flygt MultiTrode probe was previously used. The right setup depends on the existing controller, wiring and required operating levels.",
  },
  {
    question: "Has Flygt MultiTrode been discontinued?",
    answer:
      "Water Automation Technology reports that Xylem discontinued Flygt-branded MultiTrode products in January 2025. Check with your supplier about the status of any specific part or installation.",
  },
  {
    question: "Can FOGRod connect to my existing control panel?",
    answer:
      "This depends on the control panel, transmitter, wiring and required level functions. Share your current probe and panel details with us so the application can be checked before ordering.",
  },
  {
    question: "How do I choose the correct FOGRod length?",
    answer:
      "The correct length and electrode arrangement depend on wet-well depth, pump start and stop levels, alarm levels and cable requirements. Contact us with the site details for help selecting a suitable configuration.",
  },
];

export const metadata: Metadata = {
  title: "Flygt MultiTrode Replacement UK",
  description:
    "Looking for a Flygt MultiTrode replacement? Explore FOGRod multi-electrode level probes for suitable wastewater pumping stations. Technical guidance and UK supply.",
  keywords: [
    "Flygt MultiTrode",
    "Flygt MultiTrode replacement",
    "Flygt MultiTrode alternative",
    "MultiTrode probe replacement",
    "Flygt level probe replacement",
    "wastewater level probe",
    "conductive level sensing",
    "FOGRod",
  ],
  alternates: {
    canonical: "https://fogrod.co.uk/flygt-multitrode-replacement",
  },
  openGraph: {
    title: "Flygt MultiTrode Replacement UK",
    description:
      "FOGRod multi-electrode level probes for suitable wastewater pumping-station applications. Explore replacement options and get technical guidance.",
    url: "https://fogrod.co.uk/flygt-multitrode-replacement",
    siteName: "FOGRod",
    locale: "en_GB",
    type: "website",
  },
};

export default function FlygtMultiTrodeReplacementPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Navbar />
      <main className="bg-white text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <section className="border-b border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Wastewater level control · UK
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Flygt MultiTrode Replacement
            </h1>
            <p className="mt-7 max-w-4xl text-xl leading-9 text-slate-300">
              Looking for a replacement for a Flygt MultiTrode level probe?
              FOGRod® is a multi-electrode conductive level-sensing solution
              developed for suitable wastewater pumping-station applications.
              Find out how it works and what to check before choosing a system.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/shop" className="rounded-xl bg-white px-7 py-4 font-bold text-black transition hover:bg-cyan-50">
                View FOGRod Products
              </Link>
              <Link href="/contact" className="rounded-xl border border-white px-7 py-4 font-bold text-white transition hover:bg-white/10">
                Talk to an Engineer
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Need help with a retrofit? Have your existing probe details,
              wet-well depth and control-panel model ready.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
          <section>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
              Replacement guide
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              A multi-electrode alternative to Flygt MultiTrode
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Flygt MultiTrode systems have been used to detect multiple liquid
              levels in wastewater pumping stations. Conductive sensing allows
              individual electrode points to provide level signals for functions
              such as pump start, pump stop and high-level alarms, depending on
              the controller and installation.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              FOGRod uses conductive electrodes on a single probe assembly to
              provide level detection at defined points. It has been developed
              as a replacement option for suitable MultiTrode applications, but
              compatibility should be confirmed against the existing control
              panel, transmitter, wiring and required operating sequence.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Water Automation Technology reports that Xylem discontinued
              Flygt-branded MultiTrode products in January 2025 and identifies
              FOGRod as a replacement developed by former MultiTrode engineers.
              If you are maintaining an existing installation, we can help you
              work through the information needed to select a suitable setup.
            </p>
          </section>

          <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-7 md:p-10">
            <h2 className="text-2xl font-black md:text-3xl">
              What to check before replacing a MultiTrode probe
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Wet-well depth and available probe length",
                "Required pump start and stop levels",
                "High-level alarm and other level signals",
                "Existing transmitter and control-panel model",
                "Cable length, termination and wiring",
                "Telemetry or analogue-output requirements",
              ].map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-black md:text-4xl">
              FOGRod and the LIT-100 transmitter
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              For installations using a 10-electrode FOGRod, the LIT-100 liquid
              indicator transmitter provides ten level relay outputs, three
              alarm relay outputs and a 4–14 mA analogue output for suitable
              control and telemetry applications. Check the full system
              requirements before specifying a replacement.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/shop" className="rounded-xl bg-black px-6 py-3 font-bold text-white transition hover:bg-slate-800">
                Shop FOGRod
              </Link>
              <Link href="/applications" className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-black transition hover:border-black">
                View Applications
              </Link>
              <Link href="/downloads" className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-black transition hover:border-black">
                Technical Downloads
              </Link>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-black md:text-4xl">
              Flygt MultiTrode replacement FAQs
            </h2>
            <div className="mt-7 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-200 p-6">
                  <summary className="cursor-pointer text-lg font-bold">
                    {faq.question}
                  </summary>
                  <p className="mt-4 leading-7 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-3xl bg-black p-8 text-white md:p-12">
            <h2 className="text-3xl font-black md:text-4xl">
              Need help choosing a MultiTrode replacement?
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Send us your existing probe details, wet-well depth and control
              panel information. We can help check which FOGRod configuration
              may be suitable for your application.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-xl bg-white px-7 py-4 font-bold text-black">
                Contact FOGRod
              </Link>
              <Link href="/shop" className="rounded-xl border border-white px-7 py-4 font-bold text-white">
                Browse Products
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Float Switches for Sewage Pumps | FOGRod Alternative",
  description:
    "Searching for sewage pump float switches or a float switch alternative? FOGRod conductive electrodes provide multi-level wastewater detection in suitable pumping stations. Check compatibility before replacing existing controls.",
  alternates: { canonical: "https://fogrod.co.uk/float-switch-replacement" },
  keywords: [
    "float switch replacement",
    "sewage pump float switch replacement",
    "wastewater float switch alternative",
    "pump station level control",
    "sewage pumping station level sensor",
    "conductive level electrodes",
    "wet well level detection",
  ],
  openGraph: {
    title: "Sewage Pump Float Switch Alternative | FOGRod",
    description:
      "Explore FOGRod conductive electrode level detection as an alternative to conventional float switches in suitable wastewater pumping station applications.",
    url: "https://fogrod.co.uk/float-switch-replacement",
    siteName: "FOGRod",
    type: "website",
    locale: "en_GB",
  },
};

const faqs = [
  {
    question: "Can FOGRod replace float switches in a sewage pumping station?",
    answer:
      "FOGRod can be an alternative to conventional float-based level detection in suitable installations. Suitability depends on the control panel, required switching levels, liquid characteristics and the existing wiring and control arrangement. Check the application before specifying a replacement.",
  },
  {
    question: "Why do float switches cause problems in wastewater?",
    answer:
      "Float switches rely on a moving float and cable. In some wet wells, wipes, rags, grease, turbulence or restricted movement can contribute to fouling or unreliable operation. The actual cause should be confirmed on site before changing the level-control method.",
  },
  {
    question: "Does FOGRod use float switches?",
    answer:
      "No. FOGRod uses conductive electrodes positioned at defined levels to detect liquid. It has no moving float mechanism. The liquid and installation must be suitable for conductive sensing.",
  },
  {
    question: "Can FOGRod connect to my existing control panel?",
    answer:
      "That depends on the panel and the required control signals. Review the panel inputs, relay requirements, alarm levels, pump duty/standby logic and any telemetry interface before installation. Contact FOGRod with the existing setup for guidance.",
  },
  {
    question: "Do I need to replace the whole control panel?",
    answer:
      "Not necessarily, but compatibility must be checked. Some installations may need interface equipment or control-panel modifications. Do not assume a like-for-like electrical connection without reviewing the existing system.",
  },
];

export default function FloatSwitchReplacementPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black">
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
              Wastewater level control
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Float Switch Replacement for Sewage Pumping Stations
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              If float switches are sticking, fouling or becoming difficult to maintain,
              FOGRod conductive electrodes offer an alternative way to detect liquid levels
              in suitable wastewater pumping stations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-4 font-bold text-white transition hover:bg-slate-800">
                Discuss a replacement
              </Link>
              <Link href="/shop" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-4 font-bold text-black transition hover:border-black">
                View FOGRod products
              </Link>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
              Designed for wastewater level detection. Application and control-panel compatibility
              should always be confirmed before specifying a replacement.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">An alternative to troublesome float switches</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Float switches are widely used to control pumps and trigger alarms, but wastewater
              wet wells can be demanding environments. Rags, wipes, grease, turbulence and limited
              access can make inspection and maintenance difficult. When a level-control fault
              occurs, it is important to establish whether the issue is the switch, its cable,
              the control panel or another part of the pumping system.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              FOGRod detects liquid using conductive electrodes set at defined levels rather than
              relying on a moving float. Multiple level points can be monitored on one electrode
              assembly, helping provide a different approach to pump start/stop and alarm-level
              detection where the application is suitable.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-xl font-extrabold">When to consider a float switch alternative</h2>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li className="flex gap-3"><span className="font-black">01</span><span>Float switches repeatedly foul, snag or fail to move freely.</span></li>
              <li className="flex gap-3"><span className="font-black">02</span><span>Several separate switches are used to provide pump and alarm levels.</span></li>
              <li className="flex gap-3"><span className="font-black">03</span><span>Maintenance access to the wet well is difficult or disruptive.</span></li>
              <li className="flex gap-3"><span className="font-black">04</span><span>You are reviewing level detection during a pump station refurbishment.</span></li>
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-500">
              These are reasons to assess an alternative, not a guarantee that electrodes are suitable
              for every liquid or installation.
            </p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="text-3xl font-black md:text-4xl">FOGRod electrodes vs float switches</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              The best solution depends on the wastewater, the required level points and how the
              control panel operates. This summary highlights the main design difference.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[620px] border-collapse text-left">
                <thead><tr className="bg-slate-100"><th className="p-5 font-bold">Consideration</th><th className="p-5 font-bold">FOGRod electrodes</th><th className="p-5 font-bold">Float switches</th></tr></thead>
                <tbody>
                  <tr className="border-t border-slate-200"><td className="p-5 font-semibold">How level is detected</td><td className="p-5">Conductivity between electrodes and the liquid</td><td className="p-5">Movement of a float</td></tr>
                  <tr className="border-t border-slate-200"><td className="p-5 font-semibold">Moving float mechanism</td><td className="p-5">No moving float</td><td className="p-5">Yes</td></tr>
                  <tr className="border-t border-slate-200"><td className="p-5 font-semibold">Multiple level points</td><td className="p-5">Multiple defined electrode levels</td><td className="p-5">Often achieved with separate switches</td></tr>
                  <tr className="border-t border-slate-200"><td className="p-5 font-semibold">Important suitability check</td><td className="p-5">Liquid conductivity and compatible controls</td><td className="p-5">Float movement, cable condition and switching requirements</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              This is a general comparison, not a performance guarantee. Select level detection to
              match the actual site conditions and control requirements.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
          <h2 className="text-3xl font-black md:text-4xl">Plan your replacement properly</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Before replacing float switches, record the existing pump start and stop levels, high-level
            and low-level alarms, duty/standby changeover logic, panel input type and any telemetry
            requirements. Confirm the liquid is suitable for conductive sensing and whether an interface
            or panel modification is required. Installation and commissioning should be carried out by
            a competent person following the relevant site procedures.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5"><p className="font-extrabold">1. Existing setup</p><p className="mt-2 text-sm leading-6 text-slate-600">Share photos of the wet well, switches and control panel.</p></div>
            <div className="rounded-2xl border border-slate-200 p-5"><p className="font-extrabold">2. Control requirements</p><p className="mt-2 text-sm leading-6 text-slate-600">List pump levels, alarm points and any telemetry signals.</p></div>
            <div className="rounded-2xl border border-slate-200 p-5"><p className="font-extrabold">3. Check compatibility</p><p className="mt-2 text-sm leading-6 text-slate-600">Confirm the FOGRod configuration and any interface equipment required.</p></div>
          </div>
          <div className="mt-10 rounded-3xl bg-black p-8 text-white md:p-10">
            <h2 className="text-2xl font-black md:text-3xl">Considering replacing sewage pump float switches?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Tell us about your pumping station and current level-control arrangement. We can help you
              identify what information is needed to assess whether FOGRod is suitable.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex justify-center rounded-xl bg-white px-6 py-3 font-bold text-black hover:bg-slate-200">Contact FOGRod</Link>
              <Link href="/flygt-multitrode-replacement" className="inline-flex justify-center rounded-xl border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10">MultiTrode replacement information</Link>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <h2 className="text-3xl font-black">Float switch replacement FAQs</h2>
            <div className="mt-8 divide-y divide-slate-200">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-6 text-slate-500">
              Related reading: <Link className="font-semibold underline underline-offset-4" href="/blog/fogrod-vs-floats-ultrasonic-radar">FOGRod vs float switches, ultrasonic and radar</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

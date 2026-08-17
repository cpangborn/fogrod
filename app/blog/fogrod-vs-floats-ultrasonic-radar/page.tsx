import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "FOGRod® vs Float Switches, Ultrasonic & Radar | Wastewater Level Sensing",
  description:
    "Discover how FOGRod® conductive level sensing compares with float switches, ultrasonic and radar level sensors in wastewater pumping stations.",
  keywords: [
    "FOGRod",
    "wastewater level sensor",
    "wastewater level sensing",
    "sewage pump level sensor",
    "sewage pumping station level control",
    "float switch alternative",
    "float switch replacement",
    "wastewater float switch",
    "ultrasonic level sensor wastewater",
    "radar level sensor wastewater",
    "conductive level sensor",
    "wet well level sensor",
    "pump station level control",
  ],
};

export default function FogrodVsFloatsBlog() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">

        {/* HERO */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              FOGROD® INSIGHT
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              FOGRod® vs Float Switches,
              <br />
              Ultrasonic & Radar
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600">
              Why conductive level sensing can be a smarter choice for
              difficult wastewater pumping stations, wet wells and sewage
              applications.
            </p>

          </div>
        </section>

        {/* ARTICLE */}
        <article className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

          {/* INTRODUCTION */}
          <section>

            <p className="text-lg leading-8 text-slate-700">
              Reliable level detection is one of the most important parts of
              any wastewater pumping station. Pumps, control panels and
              telemetry can all be operating correctly, but if the level
              sensing system gives the control system the wrong information,
              the pumping station can quickly become unreliable.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Wastewater is a demanding environment. Wet wells can contain
              rags, wipes, grease, fats, oils, sludge, foam, turbulence and
              constantly changing conditions.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              This is why the choice of level sensing technology matters.
              Float switches, ultrasonic sensors and radar all have their
              place, but each technology has different characteristics and
              potential limitations.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              FOGRod® takes a different approach by using multiple conductive
              electrodes positioned at defined levels on a single probe.
            </p>

          </section>

          {/* COMPARISON */}
          <section className="mt-20">

            <h2 className="text-3xl font-black md:text-4xl">
              At a glance
            </h2>

            <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200">

              <table className="w-full min-w-[700px] border-collapse text-left">

                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-5 font-bold">Feature</th>
                    <th className="p-5 font-bold">FOGRod®</th>
                    <th className="p-5 font-bold">Floats</th>
                    <th className="p-5 font-bold">Ultrasonic</th>
                    <th className="p-5 font-bold">Radar</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-t border-slate-200">
                    <td className="p-5 font-semibold">
                      Moving parts
                    </td>
                    <td className="p-5">No</td>
                    <td className="p-5">Yes</td>
                    <td className="p-5">No</td>
                    <td className="p-5">No</td>
                  </tr>

                  <tr className="border-t border-slate-200">
                    <td className="p-5 font-semibold">
                      Multiple level points
                    </td>
                    <td className="p-5">Yes</td>
                    <td className="p-5">Multiple floats</td>
                    <td className="p-5">Continuous</td>
                    <td className="p-5">Continuous</td>
                  </tr>

                  <tr className="border-t border-slate-200">
                    <td className="p-5 font-semibold">
                      Contact with liquid
                    </td>
                    <td className="p-5">Electrodes</td>
                    <td className="p-5">Float</td>
                    <td className="p-5">No</td>
                    <td className="p-5">No</td>
                  </tr>

                  <tr className="border-t border-slate-200">
                    <td className="p-5 font-semibold">
                      Can tangle
                    </td>
                    <td className="p-5">No</td>
                    <td className="p-5">Yes</td>
                    <td className="p-5">No</td>
                    <td className="p-5">No</td>
                  </tr>

                  <tr className="border-t border-slate-200">
                    <td className="p-5 font-semibold">
                      Pump control
                    </td>
                    <td className="p-5">Yes</td>
                    <td className="p-5">Yes</td>
                    <td className="p-5">Yes</td>
                    <td className="p-5">Yes</td>
                  </tr>

                  <tr className="border-t border-slate-200">
                    <td className="p-5 font-semibold">
                      Independent backup
                    </td>
                    <td className="p-5">Yes</td>
                    <td className="p-5">Yes</td>
                    <td className="p-5">Yes</td>
                    <td className="p-5">Yes</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </section>

          {/* FLOATS */}
          <section className="mt-20">

            <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">
              01 / FLOAT SWITCHES
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              The problem with floats in wastewater
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Float switches are widely used in pumping stations because they
              are simple, inexpensive and easy to understand.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              The problem is that a float is a mechanical device operating in
              an environment that can be anything but mechanical-device
              friendly.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Rags, wipes, grease, fat, oil and other debris can become caught
              around float cables or the float itself. Cables can also become
              tangled with other equipment inside the wet well.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              {[
                "Rags and wipes",
                "Fats, oils and grease",
                "Sludge and debris",
                "Tangled cables",
                "Float fouling",
                "Restricted movement",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-semibold"
                >
                  {item}
                </div>
              ))}

            </div>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              A float can therefore remain electrically healthy while no
              longer providing a reliable indication of the actual liquid
              level.
            </p>

            <p className="mt-6 text-lg font-bold leading-8">
              The problem isn't necessarily the switch. The problem can be
              that the switch is no longer able to move freely.
            </p>

          </section>

          {/* REAL-WORLD REFERENCE */}
          <section className="mt-20">

            <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">
              REAL-WORLD REFERENCE
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              From conventional floats to FOGRod®
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Wastewater pumping stations can be a challenging environment
              for conventional level control equipment. The following
              real-world reference shows the type of conditions that can be
              encountered in wastewater applications.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">

              {/* BEFORE - FLOATS */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">

                <div className="bg-black px-6 py-4">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-white">
                    BEFORE
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    Conventional Float Switches
                  </h3>
                </div>

                <Image
                  src="/images/mcdonalds%20floats.webp"
                  alt="Conventional float switches in a wastewater pumping station"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                />

              </div>

              {/* AFTER - FOGROD */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">

                <div className="bg-black px-6 py-4">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-white">
                    AFTER
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    FOGRod® Conductive Level Sensing
                  </h3>
                </div>

                <Image
                  src="/images/MCDONALDS%20FOGROD.jpg"
                  alt="FOGRod conductive level sensing installation"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500">
              Real-world wastewater application reference demonstrating the
              difference between conventional float-based level control and
              FOGRod® conductive level sensing.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                  Conventional approach
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Mechanical floats
                </h3>

                <ul className="mt-5 space-y-3 text-slate-700">
                  <li>• Moving mechanical components</li>
                  <li>• Suspended cables inside the wet well</li>
                  <li>• Potential for fouling and obstruction</li>
                  <li>• Multiple floats may be required for multiple levels</li>
                </ul>

              </div>

              <div className="rounded-3xl bg-black p-7 text-white">

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
                  FOGRod® approach
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Conductive level sensing
                </h3>

                <ul className="mt-5 space-y-3 text-slate-300">
                  <li>• No moving float mechanism</li>
                  <li>• Multiple level points on one probe</li>
                  <li>• Conductive electrode technology</li>
                  <li>• Designed for demanding wastewater environments</li>
                </ul>

              </div>

            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-black bg-slate-50 p-6">

              <p className="font-bold">
                The important difference
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                FOGRod® changes the way level detection is achieved. Instead
                of relying on a number of freely moving floats, the system
                uses fixed conductive electrodes positioned at defined
                levels.
              </p>

            </div>

          </section>

          {/* FOGROD VS FLOATS */}
          <section className="mt-20 rounded-3xl bg-slate-950 p-8 text-white md:p-12">

            <p className="font-semibold uppercase tracking-[0.3em] text-slate-400">
              FOGROD®
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              No moving float mechanism
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              FOGRod® doesn't rely on a float physically moving through the
              wastewater.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              The probe remains positioned in the wet well while the liquid
              level rises and falls around it. As wastewater reaches each
              electrode, the system detects the conductive path and provides
              the corresponding level signal.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              This removes the moving float mechanism from the level-control
              system and allows multiple level points to be incorporated into
              a single probe.
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-block rounded-xl bg-white px-7 py-4 font-bold text-black transition hover:bg-slate-200"
            >
              View FOGRod Products →
            </Link>

          </section>

          {/* ULTRASONIC */}
          <section className="mt-20">

            <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">
              02 / ULTRASONIC
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              FOGRod® vs ultrasonic level sensing
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Ultrasonic level sensors provide non-contact continuous level
              measurement and can be an excellent choice for suitable
              applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              However, ultrasonic measurement relies on an acoustic signal
              travelling to the liquid surface and returning to the
              transmitter.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Wastewater wet wells can present challenging conditions,
              including foam, turbulence, condensation and unwanted
              reflections from surrounding structures.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              {[
                "Foam",
                "Condensation",
                "Turbulent surfaces",
                "Unwanted reflections",
                "Wet well obstructions",
                "Changing wastewater conditions",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-semibold"
                >
                  {item}
                </div>
              ))}

            </div>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              For applications where ultrasonic measurement is proving
              unreliable, FOGRod® provides a completely different method of
              detecting level.
            </p>

          </section>

          {/* RADAR */}
          <section className="mt-20">

            <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">
              03 / RADAR
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              FOGRod® vs radar level sensing
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Radar level measurement is a highly capable technology and is
              particularly useful when continuous non-contact measurement is
              required.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              However, radar installations still require appropriate mounting,
              configuration and consideration of the physical environment
              inside the wet well.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Ladders, guide rails, cables, pipework, inlets and other
              structures can all be relevant when positioning a non-contact
              level instrument.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Radar can be the right solution when detailed continuous level
              measurement is required. But where the requirement is simply
              reliable pump start, pump stop, high-level alarm and low-level
              protection, a multi-point conductive system can offer a simpler
              approach.
            </p>

          </section>

          {/* HOW FOGROD WORKS */}
          <section className="mt-20">

            <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">
              CONDUCTIVE LEVEL SENSING
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              How FOGRod® works
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              FOGRod® uses conductive electrodes positioned at different
              heights along a single probe.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              When the wastewater reaches an electrode, the system detects
              conductivity and identifies that level point.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              As the liquid continues to rise, additional electrodes are
              reached. As the liquid falls, the electrodes become dry again.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              This provides a straightforward way of establishing multiple
              level points without requiring several individual float
              switches.
            </p>

          </section>

          {/* APPLICATIONS */}
          <section className="mt-20">

            <h2 className="text-3xl font-black md:text-4xl">
              Where can FOGRod® be used?
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              {[
                "Sewage pumping stations",
                "Wastewater wet wells",
                "Industrial wastewater",
                "Storm tanks",
                "Sewage treatment works",
                "Pump protection",
                "Float replacement projects",
                "Level sensing redundancy",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="font-bold">{item}</p>
                </div>
              ))}

            </div>

          </section>

          {/* REDUNDANCY */}
          <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">

            <p className="font-semibold uppercase tracking-[0.3em] text-slate-500">
              REDUNDANCY
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              FOGRod® doesn't always have to replace radar or ultrasonic
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              One of the biggest advantages of FOGRod® is that it can also be
              considered as an independent backup to an existing level
              measurement system.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              A pumping station can use radar or ultrasonic for continuous
              level measurement while FOGRod® provides independent pump
              protection or high-level detection.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Using different measurement principles can provide additional
              resilience where level control is critical.
            </p>

          </section>

          {/* WHY FOGROD */}
          <section className="mt-20">

            <h2 className="text-3xl font-black md:text-4xl">
              Why choose FOGRod®?
            </h2>

            <div className="mt-8 space-y-4">

              {[
                "No moving float mechanism",
                "Multiple level points from one probe",
                "Designed for wastewater applications",
                "Suitable for pump control and protection",
                "Can be used alongside radar or ultrasonic",
                "Useful for float replacement projects",
                "Simple conductive level detection",
                "Suitable for difficult wet well environments",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    ✓
                  </span>

                  <span className="font-semibold">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </section>

          {/* CONCLUSION */}
          <section className="mt-20">

            <h2 className="text-3xl font-black md:text-4xl">
              A simpler approach to wastewater level detection
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              There is no single level sensing technology that is perfect for
              every application.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Floats have their place. Ultrasonic has its place. Radar has its
              place.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              But wastewater pumping stations are demanding environments, and
              the most sophisticated technology isn't always the most
              appropriate solution.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              FOGRod® provides a different approach using conductive
              multi-electrode level sensing. For pumping stations suffering
              from tangled floats, difficult level measurement or the need for
              independent level protection, it can provide a practical
              alternative.
            </p>

          </section>

          {/* CTA */}
          <section className="mt-20 rounded-3xl bg-black p-8 text-white md:p-12">

            <p className="font-semibold uppercase tracking-[0.3em] text-slate-400">
              FOGROD®
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Looking for a better level sensing solution?
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Explore the FOGRod® range or contact us if you need help
              selecting the right system for your wastewater pumping station.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/shop"
                className="rounded-xl bg-white px-7 py-4 text-center font-bold text-black transition hover:bg-slate-200"
              >
                View FOGRod Products
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-black"
              >
                Contact FOGRod
              </Link>

            </div>

          </section>

        </article>

      </main>

      <Footer />
    </>
  );
}
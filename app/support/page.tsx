import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  LifeBuoy,
  Wrench,
  BookOpen,
  MessageCircle,
  FileText,
  Download,
  Play,
} from "lucide-react";

const supportItems = [
  {
    icon: Wrench,
    title: "Installation Support",
    description:
      "Guidance for installing FOGRod® systems correctly and efficiently.",
  },
  {
    icon: BookOpen,
    title: "Technical Documentation",
    description:
      "Access manuals, datasheets and wiring information for FOGRod® products.",
  },
  {
    icon: LifeBuoy,
    title: "Troubleshooting",
    description:
      "Help diagnosing common installation, commissioning and operating issues.",
  },
  {
    icon: MessageCircle,
    title: "Technical Enquiries",
    description:
      "Speak to our team for advice on selecting and using FOGRod® products.",
  },
];

const videos = [
  {
    title: "FOGRod® Overview",
    description:
      "An overview of the FOGRod® conductive level detection system.",
    id: "lYADbDuogfc",
  },
  {
    title: "Troubleshooting, Cleaning & FOGRod® Alarm",
    description:
      "Guidance on troubleshooting, cleaning the FOGRod® system and understanding the alarm.",
    id: "0J7qVVp4XvU",
  },
  {
    title: "FOGRod® Alarms Overview",
    description:
      "An overview of the alarms and alarm functions available with FOGRod® systems.",
    id: "eR07C0o9hVw",
  },
  {
    title: "LIT Analogue Output",
    description:
      "An overview of the analogue output functionality on the LIT level indicator transmitter.",
    id: "wQlvjtNA6uI",
  },
  {
    title: "FOGRod® & LIT Overview",
    description:
      "A general overview of FOGRod® and LIT systems and how they work together.",
    id: "QH8KNPGZe3s",
  },
  {
    title: "FOGRod® Toughness",
    description:
      "See the durability and toughness of the FOGRod® system in demanding wastewater environments.",
    id: "tHZKkltdYYw",
  },
];

export default function SupportPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">

        {/* Hero */}
        <section className="border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-24">

            <p className="font-semibold uppercase tracking-[0.35em] text-black">
              SUPPORT CENTRE
            </p>

            <h1 className="mt-6 text-5xl font-black md:text-7xl">
              Technical
              <br />
              Support Centre
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Everything you need to install, commission, troubleshoot and
              maintain your FOGRod® level detection systems.
            </p>

          </div>
        </section>


        {/* Manual + Video Guides */}
        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.15fr]">


            {/* Installation Manual */}
            <div className="flex h-full overflow-hidden rounded-3xl border border-slate-200 bg-black text-white">

              <div className="flex w-full flex-col">

                <div className="p-8 md:p-10">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-black">
                      <FileText size={28} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                        INSTALLATION & TECHNICAL MANUAL
                      </p>

                      <h2 className="mt-1 text-3xl font-black md:text-4xl">
                        FOGRod & LIT Manual V3.0
                      </h2>
                    </div>

                  </div>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                    Complete installation and technical manual for FOGRod® and
                    LIT systems, including installation instructions, wiring,
                    system configuration, commissioning, troubleshooting,
                    cleaning and technical specifications.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">

                    <a
                      href="/downloads/FOGRod-LIT-manual-v3.0.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-black transition hover:bg-slate-200"
                    >
                      <FileText size={20} />
                      View Manual
                    </a>

                    <a
                      href="/downloads/FOGRod-LIT-manual-v3.0.pdf"
                      download
                      className="inline-flex items-center gap-3 rounded-xl border border-slate-600 px-6 py-4 font-semibold text-white transition hover:border-white"
                    >
                      <Download size={20} />
                      Download PDF
                    </a>

                  </div>

                </div>


                {/* Manual Image */}
<div className="px-8 pb-8 md:px-10 md:pb-10">

  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-white">

    <img
      src="/images/fogrod-lit-panel.jpg"
      alt="FOGRod and LIT installation panel"
      className="h-auto w-full object-contain"
    />

  </div>

  {/* FOGRod Promotional Image */}
  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-white">

    <img
      src="/images/fogrod-promo.png"
      alt="FOGRod level sensing electrode"
      className="h-auto w-full object-contain"
    />

  </div>

</div>

              </div>

            </div>


            {/* Video Guides */}
            <div className="flex h-full flex-col">

              <div className="mb-8">

                <p className="font-semibold uppercase tracking-[0.35em] text-black">
                  VIDEO GUIDES
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  FOGRod® Video Guides
                </h2>

                <p className="mt-4 max-w-2xl text-slate-600">
                  Installation, troubleshooting and technical videos for
                  FOGRod® and LIT systems.
                </p>

              </div>


              {/* Videos */}
              <div className="grid flex-1 gap-6 sm:grid-cols-2">

                {videos.map((video) => (

                  <div
                    key={video.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl"
                  >

                    {/* Thumbnail */}
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block aspect-video overflow-hidden bg-slate-100"
                    >

                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />

                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-xl transition duration-300 group-hover:scale-110">
                          <Play
                            size={20}
                            fill="currentColor"
                            className="ml-1"
                          />
                        </div>

                      </div>

                    </a>


                    {/* Video Information */}
                    <div className="flex flex-1 flex-col p-5">

                      <h3 className="text-lg font-bold leading-tight">
                        {video.title}
                      </h3>

                      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                        {video.description}
                      </p>

                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Watch Video
                        <Play size={14} fill="currentColor" />
                      </a>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* Support Options */}
        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12">

              <p className="font-semibold uppercase tracking-[0.35em] text-black">
                SUPPORT
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Need help?
              </h2>

            </div>

            <div className="grid gap-8 md:grid-cols-2">

              {supportItems.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-black hover:shadow-xl"
                  >

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                      <Icon size={30} />
                    </div>

                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="mt-5 leading-7 text-slate-600">
                      {item.description}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="border-t border-slate-200 bg-white">

          <div className="mx-auto max-w-4xl px-6 py-24 text-center">

            <h2 className="text-4xl font-black">
              Need technical assistance?
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              If you need help selecting a product, diagnosing a fault or
              understanding an installation, our team is here to help.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Support
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
import Link from "next/link";
import {
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
   <footer className="border-t border-slate-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black">
              FOGRod<span className="text-cyan-400">®</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Professional conductive level detection systems engineered for
              wastewater pumping stations, treatment plants and industrial
              applications.
            </p>

            <div className="mt-8 flex items-center gap-3 text-cyan-400">
              <Mail size={18} />
              <span>sales@fogrod.co.uk</span>
            </div>

            <div className="mt-3 flex items-center gap-3 text-slate-400">
              <MapPin size={18} />
              <span>United Kingdom</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Products
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link
                  href="/shop"
                  className="transition hover:text-cyan-400"
                >
                  FOGRod System
                </Link>
              </li>

              <li>
                <Link
                  href="/shop/lit100"
                  className="transition hover:text-cyan-400"
                >
                  LIT100
                </Link>
              </li>

              
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Support
            </h3>

            <ul className="space-y-4 text-slate-400">
              {[
                ["Downloads", "/downloads"],
                ["Applications", "/applications"],
                ["Technical Support", "/support"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="transition hover:text-cyan-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Need Advice?
            </h3>

            <p className="leading-8 text-slate-400">
              Our engineers can help you select the correct level detection
              solution for your installation.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 hover:scale-105"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} FOGRod®. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:bg-cyan-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:bg-cyan-500"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
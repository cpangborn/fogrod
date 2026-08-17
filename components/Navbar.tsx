"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../store/cart";
import { useUnit } from "../components/UnitProvider";

export default function Navbar() {
  const pathname = usePathname();

  const items = useCart((state) => state.items);

  const { unit, setUnit } = useUnit();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/applications", label: "Applications" },
    { href: "/flygt-multitrode", label: "Flygt MultiTrode" },
    { href: "/downloads", label: "Downloads" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">

      {/* MAIN NAVBAR */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex items-center transition-opacity hover:opacity-70"
        >
          <img
            src="/images/fogrod-logo-transparent.png"
            alt="FOGRod®"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${
                pathname === link.href
                  ? "text-black"
                  : "text-slate-500 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DESKTOP SHOP MEASUREMENTS */}
          {pathname === "/shop" && (
            <div className="absolute left-1/2 top-[72px] hidden -translate-x-1/2 lg:block">
              <div className="flex items-center gap-1 rounded-full border border-slate-300 bg-white px-1 py-1 shadow-sm">

                <span className="px-3 text-xs font-semibold text-slate-500">
                  Measurements:
                </span>

                <button
                  type="button"
                  onClick={() => setUnit("ft")}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    unit === "ft"
                      ? "bg-black text-white"
                      : "text-slate-600 hover:text-black"
                  }`}
                >
                  Feet
                </button>

                <button
                  type="button"
                  onClick={() => setUnit("m")}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    unit === "m"
                      ? "bg-black text-white"
                      : "text-slate-600 hover:text-black"
                  }`}
                >
                  Metres
                </button>

              </div>
            </div>
          )}

          {/* BASKET */}
          <Link
            href="/basket"
            onClick={closeMobileMenu}
            className="relative rounded-xl border border-slate-300 p-3 text-slate-700 transition hover:border-black hover:text-black"
          >
            <ShoppingCart size={20} />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* DESKTOP SHOP NOW */}
          <Link
            href="/shop"
            className="hidden rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-slate-800 md:inline-flex"
          >
            Shop Now
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-xl border border-slate-300 p-3 text-black transition hover:border-black lg:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* MOBILE SHOP MEASUREMENTS */}
      {pathname === "/shop" && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3">

            <div className="flex items-center gap-1 rounded-full border border-slate-300 bg-white p-1 shadow-sm">

              <span className="px-2 text-xs font-semibold text-slate-500">
                Measurements:
              </span>

              <button
                type="button"
                onClick={() => setUnit("ft")}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  unit === "ft"
                    ? "bg-black text-white"
                    : "text-slate-600 hover:text-black"
                }`}
              >
                Feet
              </button>

              <button
                type="button"
                onClick={() => setUnit("m")}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  unit === "m"
                    ? "bg-black text-white"
                    : "text-slate-600 hover:text-black"
                }`}
              >
                Metres
              </button>

            </div>

          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">

          <div className="mx-auto max-w-7xl px-6 py-5">

            <nav className="flex flex-col">

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`border-b border-slate-100 py-4 text-lg font-semibold transition ${
                    pathname === link.href
                      ? "text-black"
                      : "text-slate-600 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* MOBILE SHOP BUTTON */}
              <Link
                href="/shop"
                onClick={closeMobileMenu}
                className="mt-5 rounded-xl bg-black px-6 py-4 text-center font-semibold text-white transition hover:bg-slate-800"
              >
                Shop Now
              </Link>

            </nav>

          </div>

        </div>
      )}

    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X, UserRound, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useCart } from "../store/cart";
import { useUnit } from "../components/UnitProvider";
import { isPandSTankers, useAuth } from "../components/AuthProvider";

const whatsappNumber = "447584193308";

export default function Navbar() {
  const pathname = usePathname();
  const items = useCart((state) => state.items);
  const { unit, setUnit } = useUnit();
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const isTrade = isPandSTankers(user);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/applications", label: "Applications" },
    { href: "/blog/fogrod-vs-floats-ultrasonic-radar", label: "FOGRod V FLOATS" },
    { href: "/flygt-multitrode", label: "Flygt MultiTrode" },
    { href: "/downloads", label: "Downloads" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const openWhatsApp = () => {
    const text = message.trim() || "Hi FOGRod, I would like some help with your products.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1800px] items-center px-4 xl:px-8">
          <Link href="/" onClick={closeMobileMenu} className="flex shrink-0 items-center">
            <img src="/images/fogrod-logo-transparent.png" alt="FOGRod®" className="h-10 w-auto object-contain" />
          </Link>
          <nav className="ml-auto hidden items-center gap-3 lg:flex xl:gap-5">
            {links.map((link) => <Link key={link.href} href={link.href} className={`whitespace-nowrap text-sm font-medium transition xl:text-[15px] ${pathname === link.href ? "text-black" : "text-slate-500 hover:text-black"}`}>{link.label}</Link>)}
            <Link href="/trade-request" className={`whitespace-nowrap rounded-xl border border-black px-3 py-2 text-sm font-bold transition ${pathname === "/trade-request" ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"}`}>Request Trade Account</Link>
          </nav>
          <div className="ml-3 flex shrink-0 items-center gap-2 xl:ml-5 xl:gap-3">
            <Link href={isTrade ? "/trade-account" : "/trade-login"} onClick={closeMobileMenu} aria-label="Trade account" className={`hidden h-11 items-center gap-2 rounded-xl border px-4 text-sm font-semibold transition lg:flex ${isTrade ? "border-black bg-black text-white" : "border-slate-300 text-slate-700 hover:border-black hover:text-black"}`}><UserRound size={17} />{isTrade ? "P&S Trade" : "Trade Login"}</Link>
            <Link href="/basket" onClick={closeMobileMenu} aria-label="Shopping basket" className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition hover:border-black hover:text-black"><ShoppingCart size={19} />{totalItems > 0 && <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-bold text-white">{totalItems}</span>}</Link>
            <Link href="/shop" className="hidden h-11 items-center rounded-xl bg-black px-5 text-sm font-semibold text-white transition hover:bg-slate-800 lg:inline-flex">Shop Now</Link>
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-black transition hover:border-black lg:hidden">{mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
        {pathname === "/shop" && <div className="absolute left-1/2 top-20 hidden -translate-x-1/2 lg:block"><div className="flex items-center gap-1 rounded-full border border-slate-300 bg-white px-1 py-1 shadow-sm"><span className="px-3 text-xs font-semibold text-slate-500">Measurements:</span><button type="button" onClick={() => setUnit("ft")} className={`rounded-full px-4 py-2 text-sm font-bold transition ${unit === "ft" ? "bg-black text-white" : "text-slate-600 hover:text-black"}`}>Feet</button><button type="button" onClick={() => setUnit("m")} className={`rounded-full px-4 py-2 text-sm font-bold transition ${unit === "m" ? "bg-black text-white" : "text-slate-600 hover:text-black"}`}>Metres</button></div></div>}
        {pathname === "/shop" && <div className="border-t border-slate-200 bg-white lg:hidden"><div className="flex items-center justify-center px-4 py-3"><div className="flex items-center gap-1 rounded-full border border-slate-300 bg-white p-1 shadow-sm"><span className="px-2 text-xs font-semibold text-slate-500">Measurements:</span><button type="button" onClick={() => setUnit("ft")} className={`rounded-full px-4 py-2 text-sm font-bold transition ${unit === "ft" ? "bg-black text-white" : "text-slate-600 hover:text-black"}`}>Feet</button><button type="button" onClick={() => setUnit("m")} className={`rounded-full px-4 py-2 text-sm font-bold transition ${unit === "m" ? "bg-black text-white" : "text-slate-600 hover:text-black"}`}>Metres</button></div></div></div>}
        {mobileMenuOpen && <div className="border-t border-slate-200 bg-white lg:hidden"><div className="mx-auto max-w-7xl px-6 py-5"><nav className="flex flex-col">{links.map((link) => <Link key={link.href} href={link.href} onClick={closeMobileMenu} className={`border-b border-slate-100 py-4 text-lg font-semibold transition ${pathname === link.href ? "text-black" : "text-slate-600 hover:text-black"}`}>{link.label}</Link>)}<Link href="/trade-request" onClick={closeMobileMenu} className="mt-5 rounded-xl bg-black px-6 py-4 text-center font-bold text-white transition hover:bg-slate-800">Request a Trade Account</Link><Link href={isTrade ? "/trade-account" : "/trade-login"} onClick={closeMobileMenu} className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-4 text-center font-semibold text-black transition hover:border-black"><UserRound size={18} />{isTrade ? "P&S Trade Account" : "Trade Login"}</Link>{user && <button type="button" onClick={() => { signOut(); closeMobileMenu(); }} className="mt-3 rounded-xl bg-slate-100 px-6 py-4 text-center font-semibold text-slate-700">Sign Out</button>}<Link href="/shop" onClick={closeMobileMenu} className="mt-3 rounded-xl bg-black px-6 py-4 text-center font-semibold text-white transition hover:bg-slate-800">Shop Now</Link></nav></div></div>}
      </header>

      {chatOpen && <div className="fixed bottom-20 right-5 z-[70] w-[calc(100vw-2.5rem)] max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-lg font-bold text-black">Chat with FOGRod</p><p className="mt-1 text-sm text-slate-500">Send us a message and we’ll get back to you.</p></div><button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat" className="rounded-lg p-1 text-slate-400 hover:text-black"><X size={20} /></button></div><textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." rows={4} className="mt-5 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm text-black outline-none focus:border-black" /><button type="button" onClick={openWhatsApp} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-bold text-white hover:bg-slate-800"><MessageCircle size={18} />Send Message</button></div>}

      <button type="button" onClick={() => setChatOpen((open) => !open)} aria-label="Chat with FOGRod" className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"><MessageCircle size={19} />Chat with FOGRod</button>
    </>
  );
}

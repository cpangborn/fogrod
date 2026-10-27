"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-50 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              FOGROD® PRODUCT RANGE
            </p>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              Industrial Level
              <br />
              Detection Systems
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Browse our complete range of conductive level detection systems,
              retrofit solutions and accessories for suitable wastewater and
              industrial level-control applications.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-black hover:shadow-sm">
              <p className="text-4xl font-black text-black">10</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">Max Electrodes</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-black hover:shadow-sm">
              <p className="text-4xl font-black text-black">ALN6X</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">Electrode Material</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-black hover:shadow-sm">
              <p className="text-4xl font-black text-black">UK</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">Technical Support</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-black hover:shadow-sm">
              <p className="text-4xl font-black text-black">24/7</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">Industrial Reliability</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <h2 className="text-2xl font-bold">FOGRod products and accessories</h2>
            <p className="mt-1 text-slate-500">Showing {products.length} products</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <h2 className="text-2xl font-black md:text-3xl">
                Replacing float switches in a sewage pumping station?
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Read our guide to using FOGRod conductive electrodes as an
                alternative to conventional sewage pump float switches, including
                the key checks for liquid suitability and control-panel compatibility.
              </p>
            </div>
            <Link
              href="/float-switch-replacement"
              className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Float switch replacement guide
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

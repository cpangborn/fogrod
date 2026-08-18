"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">

        {/* Hero */}
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
              retrofit solutions and accessories.
            </p>

          </div>
        </section>

        {/* Key Features */}
        <section className="border-b border-slate-200 bg-slate-50">

          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-black hover:shadow-sm">
              <p className="text-4xl font-black text-black">
                10
              </p>

              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
                Max Electrodes
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-black hover:shadow-sm">
              <p className="text-4xl font-black text-black">
                316
              </p>

              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
                Stainless Steel
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-black hover:shadow-sm">
              <p className="text-4xl font-black text-black">
                UK
              </p>

              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
                Technical Support
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-black hover:shadow-sm">
              <p className="text-4xl font-black text-black">
                24/7
              </p>

              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
                Industrial Reliability
              </p>
            </div>

          </div>

        </section>

        {/* Products */}
        <section className="mx-auto max-w-7xl px-6 py-16">

          <div className="mb-10">
            <h2 className="text-2xl font-bold">
              Products
            </h2>

            <p className="mt-1 text-slate-500">
              Showing {products.length} products
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
              />
            ))}
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
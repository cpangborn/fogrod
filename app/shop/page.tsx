"use client";

import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (category !== "All") {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const term = search.toLowerCase();

      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.shortDescription.toLowerCase().includes(term)
      );
    }

    switch (sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [search, category, sort]);

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

        {/* Filters */}
        <section className="sticky top-20 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">

          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-2xl font-bold">
                Products
              </h2>

              <p className="mt-1 text-slate-500">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-black outline-none placeholder:text-slate-400 focus:border-black md:w-72"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-black outline-none focus:border-black"
              >
                {categories.map((cat) => (
                  <option key={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-black outline-none focus:border-black"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="name">Name A → Z</option>
              </select>

            </div>

          </div>

        </section>

        {/* Products */}
        <section className="mx-auto max-w-7xl px-6 py-20">

          {filteredProducts.length === 0 ? (

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-12 text-center">

              <h2 className="text-3xl font-bold">
                No products found
              </h2>

              <p className="mt-4 text-slate-600">
                Try changing your search or filter.
              </p>

            </div>

          ) : (

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                />
              ))}

            </div>

          )}

        </section>

      </main>

      <Footer />
    </>
  );
}
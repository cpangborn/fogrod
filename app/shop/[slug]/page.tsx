"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddToBasketButton from "@/components/AddToBasketButton";

import { products } from "@/data/products";

type Unit = "feet" | "metres";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function convertLength(
  value: string | number | undefined,
  unit: Unit
) {
  if (value === undefined || value === null) {
    return "";
  }

  const number =
    typeof value === "number"
      ? value
      : parseFloat(value.replace(/[^\d.]/g, ""));

  if (isNaN(number)) {
    return String(value);
  }

  if (unit === "feet") {
    return `${number}ft`;
  }

  const metres = number * 0.3048;

  return `${metres.toFixed(2)}m`;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.slug !== product.slug
    )
    .slice(0, 4);

  const isLIT100 = product.slug === "lit100";

  return (
    <ProductPageContent
      product={product}
      relatedProducts={relatedProducts}
      isLIT100={isLIT100}
    />
  );
}

function ProductPageContent({
  product,
  relatedProducts,
  isLIT100,
}: {
  product: (typeof products)[number];
  relatedProducts: (typeof products)[number][];
  isLIT100: boolean;
}) {
  const [unit, setUnit] = useState<Unit>("feet");

  const hasMeasurements =
    "rod" in product || "cable" in product;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">

        {/* Product Hero */}
        <section className="border-b border-slate-200 bg-white">

          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

              {/* Product Image */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm lg:p-12">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={700}
                  priority
                  className="mx-auto h-[400px] w-full object-contain transition duration-500 hover:scale-105 lg:h-[500px]"
                />

              </div>

              {/* Product Details */}
              <div>

                <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
                  {product.category}
                </p>

                <h1 className="mt-4 text-5xl font-black tracking-tight lg:text-6xl">
                  {product.name}
                </h1>

                <p className="mt-8 text-lg leading-8 text-slate-600">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mt-10">

                  <p className="text-sm uppercase tracking-widest text-slate-500">
                    Price
                  </p>

                  <p className="mt-2 text-5xl font-black text-black">
                    £{product.price} + VAT
                  </p>

                </div>

                {/* Product Measurements */}
                {hasMeasurements && (
                  <div className="mt-10">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Measurements
                      </p>

                      {/* Feet / Metres Switch */}
                      <div className="inline-flex w-fit rounded-xl border border-slate-300 bg-slate-100 p-1">

                        <button
                          type="button"
                          onClick={() => setUnit("feet")}
                          className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                            unit === "feet"
                              ? "bg-black text-white shadow-sm"
                              : "text-slate-600 hover:text-black"
                          }`}
                        >
                          Feet
                        </button>

                        <button
                          type="button"
                          onClick={() => setUnit("metres")}
                          className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${
                            unit === "metres"
                              ? "bg-black text-white shadow-sm"
                              : "text-slate-600 hover:text-black"
                          }`}
                        >
                          Metres
                        </button>

                      </div>

                    </div>

                    {/* Measurement Boxes */}
                    <div className="mt-4 grid grid-cols-2 gap-4">

                      {/* Rod */}
                      {"rod" in product && (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                          <p className="text-sm uppercase tracking-wider text-slate-500">
                            Rod Length
                          </p>

                          <p className="mt-2 text-xl font-bold">
                            {convertLength(product.rod, unit)}
                          </p>

                        </div>
                      )}

                      {/* Cable */}
                      {"cable" in product && (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                          <p className="text-sm uppercase tracking-wider text-slate-500">
                            Cable Length
                          </p>

                          <p className="mt-2 text-xl font-bold">
                            {convertLength(product.cable, unit)}
                          </p>

                        </div>
                      )}

                      {/* Electrodes */}
                      {"electrodes" in product && (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                          <p className="text-sm uppercase tracking-wider text-slate-500">
                            Electrodes
                          </p>

                          <p className="mt-2 text-xl font-bold">
                            {product.electrodes}
                          </p>

                        </div>
                      )}

                      {/* Material */}
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                        <p className="text-sm uppercase tracking-wider text-slate-500">
                          Material
                        </p>

                        <p className="mt-2 text-xl font-bold">
                          316 Stainless Steel
                        </p>

                      </div>

                    </div>

                  </div>
                )}

                {/* Add to Basket */}
                <div className="mt-10">
                  <AddToBasketButton product={product} />
                </div>

                {/* Back to Shop */}
                <Link
                  href="/shop"
                  className="mt-4 block w-full cursor-pointer rounded-xl border border-slate-300 py-4 text-center font-semibold text-black transition hover:border-black hover:bg-slate-50"
                >
                  ← Back to Products
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* Technical Specifications */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              PRODUCT INFORMATION
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Technical Specifications
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Detailed specifications for the {product.name}.
            </p>

          </div>

          {/* Specification Table */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">

            <table className="w-full text-left">

              <tbody>

                {"rod" in product && (
                  <tr className="border-b border-slate-200">

                    <td className="w-1/2 bg-slate-50 p-5 font-semibold">
                      Rod Length
                    </td>

                    <td className="p-5 text-slate-600">
                      {convertLength(product.rod, unit)}
                    </td>

                  </tr>
                )}

                {"cable" in product && (
                  <tr className="border-b border-slate-200">

                    <td className="bg-slate-50 p-5 font-semibold">
                      Cable Length
                    </td>

                    <td className="p-5 text-slate-600">
                      {convertLength(product.cable, unit)}
                    </td>

                  </tr>
                )}

                {"electrodes" in product && (
                  <tr className="border-b border-slate-200">

                    <td className="bg-slate-50 p-5 font-semibold">
                      Electrodes
                    </td>

                    <td className="p-5 text-slate-600">
                      {product.electrodes}
                    </td>

                  </tr>
                )}

                <tr>

                  <td className="bg-slate-50 p-5 font-semibold">
                    Material
                  </td>

                  <td className="p-5 text-slate-600">
                    316 Stainless Steel
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          {/* Specification Cards */}
          {product.specifications &&
            product.specifications.length > 0 && (
              <div className="mt-8 grid gap-5 md:grid-cols-2">

                {product.specifications.map((spec) => (

                  <div
                    key={spec}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-black"
                  >

                    <p className="font-semibold text-black">
                      {spec}
                    </p>

                  </div>

                ))}

              </div>
            )}

        </section>

        {/* Technical Documentation */}
        <section className="border-y border-slate-200 bg-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              SUPPORT
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Technical Documentation
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Technical documentation for the {product.name} will be
              available here.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              {/* Datasheet */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-black">

                <h3 className="text-xl font-bold">
                  Product Datasheet
                </h3>

                {isLIT100 ? (
                  <>
                    <p className="mt-3 text-slate-600">
                      Technical datasheet for the LIT100 Level Indicator
                      Transmitter.
                    </p>

                    <a
                      href="/datasheets/LIT100-Product-Datasheet.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block cursor-pointer rounded-lg bg-black px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
                    >
                      Download Datasheet →
                    </a>
                  </>
                ) : (
                  <>
                    <p className="mt-3 text-slate-600">
                      FOGRod technical datasheet coming soon.
                    </p>

                    <span className="mt-6 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-500">
                      Coming Soon
                    </span>
                  </>
                )}

              </div>

              {/* Installation Guide */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-black">

                <h3 className="text-xl font-bold">
                  Installation Guide
                </h3>

                <p className="mt-3 text-slate-600">
                  Installation documentation coming soon.
                </p>

                <span className="mt-6 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-500">
                  Coming Soon
                </span>

              </div>

              {/* Technical Manual */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-black">

                <h3 className="text-xl font-bold">
                  Technical Manual
                </h3>

                <p className="mt-3 text-slate-600">
                  Technical manual coming soon.
                </p>

                <span className="mt-6 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-500">
                  Coming Soon
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              YOU MAY ALSO NEED
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Related Products
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              {relatedProducts.map((item) => (

                <Link
                  key={item.slug}
                  href={`/shop/${item.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-black hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="mx-auto h-44 w-full object-contain transition duration-300 group-hover:scale-105"
                  />

                  <h3 className="mt-6 text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-auto pt-4 text-2xl font-black text-black">
                    £{item.price} + VAT
                  </p>

                  <p className="mt-4 text-sm font-semibold text-slate-500 transition group-hover:text-black">
                    View Product →
                  </p>

                </Link>

              ))}

            </div>

          </section>
        )}

      </main>

      <Footer />
    </>
  );
}
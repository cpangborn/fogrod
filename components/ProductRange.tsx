import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

const featuredProducts = products.slice(0, 3);

export default function ProductRange() {
  return (
    <section className="bg-slate-50 py-28 text-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
              PRODUCT RANGE
            </p>

            <h2 className="mt-4 text-5xl font-black">
              FOGRod Product Range
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Conductive level sensing solutions for wastewater pumping
              stations, sewage treatment works and water utility applications.
            </p>
          </div>

          <Link
            href="/shop"
            className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            View All Products
          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {featuredProducts.map((product) => (
            <div
              key={product.slug}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >

              <Image
                src={product.image}
                alt={product.name}
                width={700}
                height={700}
                className="h-80 w-full bg-slate-50 object-contain p-8"
              />

              <div className="flex flex-1 flex-col p-8">

                <p className="text-sm uppercase tracking-widest text-slate-500">
                  {product.category}
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {product.shortDescription}
                </p>

                <div className="mt-6 space-y-2 text-sm text-slate-500">

                  {"electrodes" in product && (
                    <p>• {product.electrodes} Electrodes</p>
                  )}

                  {"rod" in product && (
                    <p>• {product.rod} Rod</p>
                  )}

                  {"cable" in product && (
                    <p>• {product.cable} Cable</p>
                  )}

                </div>

                <div className="mt-auto flex items-center justify-between pt-8">

                  <span className="text-3xl font-black text-black">
                    £{product.price}
                  </span>

                  <Link
                    href={`/shop/${product.slug}`}
                    className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                  >
                    View Product
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
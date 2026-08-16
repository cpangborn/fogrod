"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/store/cart";
import { useUnit } from "@/components/UnitProvider";

type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  shortDescription?: string;
  rod?: number;
  cable?: string | number;
  electrodes?: number;
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const addItem = useCart((state) => state.addItem);
  const { convertFeet } = useUnit();

  // Cable lengths are stored in FEET
  const displayCable = (cable: string | number) => {
    if (typeof cable === "number") {
      return convertFeet(cable);
    }

    const match = cable.match(/[\d.]+/);

    if (!match) {
      return cable;
    }

    return convertFeet(Number(match[0]));
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]">

      <Link
        href={`/shop/${product.slug}`}
        className="block bg-slate-50"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="h-80 w-full bg-white object-contain p-6 transition duration-300 hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">

        <Link href={`/shop/${product.slug}`}>
          <h3 className="text-3xl font-black text-black transition hover:text-slate-600">
            {product.name}
          </h3>
        </Link>

        {product.shortDescription && (
          <p className="mt-3 text-slate-600">
            {product.shortDescription}
          </p>
        )}

        <div className="mt-5 space-y-2 text-sm text-slate-500">

          {product.electrodes !== undefined && (
            <p>• {product.electrodes} Electrodes</p>
          )}

          {product.rod !== undefined && (
            <p>• {convertFeet(product.rod)} Rod</p>
          )}

          {product.cable !== undefined && (
            <p>• {displayCable(product.cable)} Cable</p>
          )}

        </div>

        <div className="mt-auto pt-6">

          <div className="text-3xl font-black text-black">
            £{product.price} + VAT
          </div>

          <div className="mt-6 space-y-3">

            <Link
              href={`/shop/${product.slug}`}
              className="block w-full rounded-xl bg-black py-3 text-center font-semibold text-white transition hover:bg-slate-800"
            >
              View Product
            </Link>

            <button
              onClick={() =>
                addItem({
                  name: product.name,
                  price: product.price,
                  image: product.image,
                })
              }
              className="w-full rounded-xl border border-slate-300 bg-white py-3 font-semibold text-black transition hover:border-black hover:bg-slate-50"
            >
              Add to Basket
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
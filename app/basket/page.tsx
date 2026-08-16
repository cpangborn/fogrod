"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useCart } from "../../store/cart";

export default function BasketPage() {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
            FOGROD®
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Your Basket
          </h1>

          {items.length === 0 ? (
            <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-12 text-center">

              <h2 className="text-3xl font-bold">
                Your basket is empty
              </h2>

              <p className="mt-4 text-slate-600">
                Browse the FOGRod range to add products.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-block rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Go to Shop
              </Link>

            </div>
          ) : (
            <>
              {/* Basket Items */}
              <div className="mt-12 space-y-6">

                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-black hover:bg-white md:flex-row"
                  >

                    <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-white p-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={140}
                        height={140}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex-1 text-center md:text-left">

                      <h2 className="text-2xl font-bold">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-xl font-bold text-black">
                        £{item.price}
                      </p>

                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-3">

                      <button
                        onClick={() => decreaseQuantity(item.name)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold transition hover:border-black hover:bg-black hover:text-white"
                      >
                        −
                      </button>

                      <span className="w-8 text-center text-xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.name)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold transition hover:border-black hover:bg-black hover:text-white"
                      >
                        +
                      </button>

                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.name)}
                      className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-black hover:bg-black hover:text-white"
                    >
                      Remove
                    </button>

                  </div>
                ))}

              </div>

              {/* Total */}
              <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">

                <div className="flex items-center justify-between">

                  <h2 className="text-3xl font-black">
                    Total
                  </h2>

                  <span className="text-4xl font-black">
                    £{total.toFixed(2)}
                  </span>

                </div>

                <button
                  onClick={async () => {
                    const res = await fetch("/api/checkout", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ items }),
                    });

                    const data = await res.json();

                    if (data.url) {
                      window.location.href = data.url;
                    } else {
                      alert("Unable to start checkout.");
                    }
                  }}
                  className="mt-8 w-full rounded-xl bg-black py-4 text-lg font-bold text-white transition hover:bg-slate-800"
                >
                  Proceed to Checkout
                </button>

              </div>
            </>
          )}

        </div>
      </main>
    </>
  );
}
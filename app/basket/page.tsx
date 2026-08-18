"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useCart } from "../../store/cart";
import { isPandSTankers, tradePrice, useAuth } from "../../components/AuthProvider";
import { useState } from "react";

export default function BasketPage() {
  const { items, increaseQuantity, decreaseQuantity, removeItem, clearCart } = useCart();
  const { user } = useAuth();
  const isTrade = isPandSTankers(user);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [purchaseOrder, setPurchaseOrder] = useState("");
  const [placingOrder, setPlacingOrder] = useState(false);
  const [orderMessage, setOrderMessage] = useState("");
  const [orderError, setOrderError] = useState("");

  const subtotal = items.reduce((sum, item) => sum + tradePrice(item.price, user) * item.quantity, 0);
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  async function placeTradeOrder() {
    setPlacingOrder(true);
    setOrderMessage("");
    setOrderError("");

    try {
      const response = await fetch("/api/order-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, deliveryAddress, purchaseOrder }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to place order.");

      setOrderMessage(`Order ${data.orderNumber} has been placed on account. We will confirm it by email.`);
      setDeliveryAddress("");
      setPurchaseOrder("");
      clearCart();
    } catch (error: any) {
      setOrderError(error?.message || "Unable to place order. Please try again.");
    } finally {
      setPlacingOrder(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">FOGROD®</p>
          <h1 className="mt-4 text-5xl font-black">Your Basket</h1>

          {items.length === 0 ? (
            <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-12 text-center">
              <h2 className="text-3xl font-bold">Your basket is empty</h2>
              <p className="mt-4 text-slate-600">Browse the FOGRod range to add products.</p>
              <Link href="/shop" className="mt-8 inline-block rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-slate-800">Go to Shop</Link>
            </div>
          ) : (
            <>
              <div className="mt-12 space-y-6">
                {items.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-black hover:bg-white md:flex-row">
                    <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-white p-3">
                      <Image src={item.image} alt={item.name} width={140} height={140} className="h-full w-full object-contain" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-2xl font-bold">{item.name}</h2>
                      <p className="mt-2 text-xl font-bold">£{tradePrice(item.price, user).toFixed(2)}</p>
                      {isTrade && <p className="mt-1 text-sm font-semibold text-green-700">30% trade price · excluding VAT</p>}
                      {!isTrade && <p className="mt-1 text-sm text-slate-500">Price excluding VAT</p>}
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => decreaseQuantity(item.name)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold transition hover:border-black hover:bg-black hover:text-white">−</button>
                      <span className="w-8 text-center text-xl font-bold">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.name)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-bold transition hover:border-black hover:bg-black hover:text-white">+</button>
                    </div>
                    <button onClick={() => removeItem(item.name)} className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-black hover:bg-black hover:text-white">Remove</button>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h2 className="mb-6 text-3xl font-black">Order Summary</h2>
                <div className="flex items-center justify-between border-b border-slate-200 py-4"><span className="text-lg text-slate-600">Subtotal</span><span className="text-xl font-bold">£{subtotal.toFixed(2)}</span></div>
                <div className="flex items-center justify-between border-b border-slate-200 py-4"><span className="text-lg text-slate-600">VAT (20%)</span><span className="text-xl font-bold">£{vat.toFixed(2)}</span></div>
                <div className="flex items-center justify-between py-6"><h2 className="text-3xl font-black">Total</h2><span className="text-4xl font-black">£{total.toFixed(2)}</span></div>

                {isTrade ? (
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="mb-5">
                      <h3 className="text-2xl font-black">Order on Account</h3>
                      <p className="mt-2 text-slate-600">Your approved trade account will be billed on your agreed terms. No card details are required.</p>
                    </div>
                    <div className="space-y-4">
                      <textarea value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} rows={4} required placeholder="Delivery address" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
                      <input value={purchaseOrder} onChange={(e) => setPurchaseOrder(e.target.value)} placeholder="Purchase order number (optional)" className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
                      {orderError && <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{orderError}</div>}
                      {orderMessage && <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">{orderMessage}</div>}
                      <button onClick={placeTradeOrder} disabled={placingOrder || !deliveryAddress.trim()} className="w-full rounded-xl bg-black py-4 text-lg font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50">
                        {placingOrder ? "Placing Order…" : "Place Order on Account"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <button onClick={async () => { const res = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items }) }); const data = await res.json(); if (data.url) window.location.href = data.url; else alert("Unable to start checkout."); }} className="mt-4 w-full rounded-xl bg-black py-4 text-lg font-bold text-white transition hover:bg-slate-800">Proceed to Checkout</button>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}

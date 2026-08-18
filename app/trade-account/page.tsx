"use client";

import { FormEvent, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Address, getTradeAccountData, useAuth } from "@/components/AuthProvider";

const emptyAddress: Address = { line1: "", line2: "", city: "", postcode: "" };

function AddressFields({ title, value, onChange }: { title: string; value: Address; onChange: (value: Address) => void }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-black">{title}</h3>
      <div className="mt-5 space-y-4">
        <input value={value.line1} onChange={(e) => onChange({ ...value, line1: e.target.value })} placeholder="Address line 1" required className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-black" />
        <input value={value.line2} onChange={(e) => onChange({ ...value, line2: e.target.value })} placeholder="Address line 2 (optional)" className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-black" />
        <div className="grid gap-4 md:grid-cols-2">
          <input value={value.city} onChange={(e) => onChange({ ...value, city: e.target.value })} placeholder="Town / City" required className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-black" />
          <input value={value.postcode} onChange={(e) => onChange({ ...value, postcode: e.target.value })} placeholder="Postcode" required className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-black" />
        </div>
      </div>
    </div>
  );
}

export default function TradeAccountPage() {
  const { user, loading, signOut, changePassword, saveTradeAccountData } = useAuth();
  const [billingAddress, setBillingAddress] = useState<Address>(emptyAddress);
  const [deliveryAddress, setDeliveryAddress] = useState<Address>(emptyAddress);
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!user) return;
    const data = getTradeAccountData(user);
    if (data.billingAddress) setBillingAddress({ ...emptyAddress, ...data.billingAddress });
    if (data.deliveryAddress) setDeliveryAddress({ ...emptyAddress, ...data.deliveryAddress });
    if (data.deliveryAddress && JSON.stringify(data.deliveryAddress) !== JSON.stringify(data.billingAddress)) setSameAsBilling(false);
  }, [user]);

  async function saveAddresses(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");
    try {
      const finalDelivery = sameAsBilling ? billingAddress : deliveryAddress;
      await saveTradeAccountData({ billingAddress, deliveryAddress: finalDelivery });
      setDeliveryAddress(finalDelivery);
      setMessage("Your billing and delivery addresses have been saved.");
    } catch (err: any) {
      setError(err?.message || "Unable to save your addresses.");
    } finally {
      setSaving(false);
    }
  }

  async function savePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    if (password !== confirmPassword) return setError("Passwords do not match.");
    try {
      await changePassword(password);
      setPassword("");
      setConfirmPassword("");
      setMessage("Your password has been changed successfully.");
    } catch (err: any) {
      setError(err?.message || "Unable to change your password.");
    }
  }

  if (loading) return <div className="min-h-screen bg-white p-10">Loading…</div>;

  if (!user) {
    return <><Navbar /><main className="min-h-screen bg-white px-6 py-20 text-black"><div className="mx-auto max-w-xl text-center"><h1 className="text-4xl font-black">Trade Account</h1><p className="mt-4 text-slate-600">Please sign in to access your account.</p><Link href="/trade-login" className="mt-8 inline-block rounded-xl bg-black px-6 py-3 font-semibold text-white">Trade Login</Link></div></main><Footer /></>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">TRADE ACCOUNT</p>
          <h1 className="mt-4 text-5xl font-black">Your Account</h1>
          <p className="mt-4 text-slate-600">Signed in as <strong>{user.email}</strong>. Your saved details will be used automatically when ordering on account.</p>

          <form onSubmit={saveAddresses} className="mt-10 space-y-6">
            <AddressFields title="Billing Address" value={billingAddress} onChange={setBillingAddress} />

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <label className="flex items-start gap-3 font-semibold">
                <input type="checkbox" checked={sameAsBilling} onChange={(e) => setSameAsBilling(e.target.checked)} className="mt-1 h-5 w-5" />
                Delivery address is the same as billing address
              </label>
            </div>

            <AddressFields title="Delivery Address" value={sameAsBilling ? billingAddress : deliveryAddress} onChange={setDeliveryAddress} />

            <p className="text-sm text-slate-500">If the delivery address is the same as billing, you can leave the box checked. Otherwise, enter the separate delivery address above.</p>

            {error && <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</div>}
            {message && <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">{message}</div>}
            <button type="submit" disabled={saving} className="w-full rounded-xl bg-black py-4 font-bold text-white disabled:opacity-50">{saving ? "Saving…" : "Save Address Details"}</button>
          </form>

          <form onSubmit={savePassword} className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-black">Change Password</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password" minLength={8} required className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" minLength={8} required className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black" />
            </div>
            <button type="submit" className="mt-5 rounded-xl bg-black px-6 py-3 font-bold text-white">Change Password</button>
          </form>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/shop" className="rounded-xl bg-black px-6 py-4 text-center font-bold text-white">Back to Trade Shop</Link>
            <button type="button" onClick={signOut} className="rounded-xl border border-slate-300 px-6 py-4 font-semibold">Sign Out</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { updateUser } from "@netlify/identity";

export default function TradeAccountPage() {
  const { user, loading, signOut } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function handlePasswordChange(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSaving(true);

    try {
      await updateUser({ password });
      setPassword("");
      setConfirmPassword("");
      setMessage("Your password has been changed successfully.");
    } catch (err: any) {
      setError(err?.message || "Unable to change your password.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="min-h-screen bg-white p-10">Loading…</div>;
  }

  if (!user) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white px-6 py-20 text-black">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl font-black">Trade Account</h1>
            <p className="mt-4 text-slate-600">Please sign in to access your account.</p>
            <Link href="/trade-login" className="mt-8 inline-block rounded-xl bg-black px-6 py-3 font-semibold text-white">
              Trade Login
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">TRADE ACCOUNT</p>
          <h1 className="mt-4 text-5xl font-black">Your Account</h1>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold text-slate-500">SIGNED IN AS</p>
            <p className="mt-2 text-xl font-bold">{user.email}</p>

            <h2 className="mt-10 text-2xl font-black">Change Password</h2>
            <p className="mt-2 text-slate-600">Choose a new password for your trade account.</p>

            <form onSubmit={handlePasswordChange} className="mt-6 space-y-5">
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="New password"
                minLength={8}
                required
                className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Confirm new password"
                minLength={8}
                required
                className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black"
              />

              {error && <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</div>}
              {message && <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">{message}</div>}

              <button type="submit" disabled={saving} className="w-full rounded-xl bg-black py-4 font-bold text-white disabled:opacity-50">
                {saving ? "Changing password…" : "Change Password"}
              </button>
            </form>

            <button
              type="button"
              onClick={signOut}
              className="mt-5 w-full rounded-xl border border-slate-300 bg-white py-4 font-semibold text-black hover:border-black"
            >
              Sign Out
            </button>

            <Link href="/shop" className="mt-4 block text-center text-sm font-semibold underline underline-offset-4">
              Back to Trade Shop
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

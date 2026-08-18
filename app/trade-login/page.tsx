"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/components/AuthProvider";

export default function TradeLoginPage() {
  const { signIn, user, loading, resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const [resetting, setResetting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setSigningIn(true);

    try {
      await signIn(email, password);
      window.location.href = "/shop";
    } catch (err: any) {
      setError(err?.message || "Unable to sign in. Please check your details.");
    } finally {
      setSigningIn(false);
    }
  }

  async function handleForgotPassword() {
    if (!email) {
      setError("Enter your email address first.");
      return;
    }

    setError("");
    setMessage("");
    setResetting(true);

    try {
      await resetPassword(email);
      setMessage("Password reset instructions have been sent to your email.");
    } catch (err: any) {
      setError(
        err?.message ||
          "Unable to send password reset instructions. Please contact FOGRod."
      );
    } finally {
      setResetting(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-xl px-6 py-20">
          <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">
            TRADE ACCOUNT
          </p>
          <h1 className="mt-4 text-5xl font-black">Trade Login</h1>
          <p className="mt-5 text-slate-600">
            Sign in to access your agreed FOGRod trade pricing.
          </p>

          {loading ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
              Checking your account…
            </div>
          ) : user ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="font-semibold">You are already signed in.</p>
              <Link
                href="/shop"
                className="mt-6 inline-block rounded-xl bg-black px-6 py-3 font-semibold text-white"
              >
                Go to Trade Shop
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-8"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black"
                  placeholder="sales@pandstankers.co.uk"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black"
                />
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                  {error}
                </div>
              )}

              {message && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={signingIn}
                className="w-full rounded-xl bg-black py-4 font-bold text-white disabled:opacity-50"
              >
                {signingIn ? "Signing in…" : "Sign In"}
              </button>

              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={resetting}
                className="w-full text-sm font-semibold text-slate-600 underline underline-offset-4 hover:text-black disabled:opacity-50"
              >
                {resetting ? "Sending reset email…" : "Forgot password?"}
              </button>
            </form>
          )}

          <p className="mt-6 text-sm text-slate-500">
            Trade accounts are invite-only. Contact FOGRod if you need access.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

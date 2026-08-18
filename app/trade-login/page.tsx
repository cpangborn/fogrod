"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/components/AuthProvider";

export default function TradeLoginPage() {
  const { signIn, user, loading, resetPassword, changePassword, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);

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

  async function handleChangePassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (newPassword.length < 6) {
      setError("Your new password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("The passwords do not match.");
      return;
    }

    setChangingPassword(true);

    try {
      await changePassword(newPassword);
      setNewPassword("");
      setConfirmPassword("");
      setMessage("Your password has been changed successfully.");
    } catch (err: any) {
      setError(err?.message || "Unable to change your password.");
    } finally {
      setChangingPassword(false);
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
            <div className="mt-10 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <p className="font-semibold">You are signed in as:</p>
                <p className="mt-2 text-slate-600">{user.email}</p>

                <Link
                  href="/shop"
                  className="mt-6 inline-block rounded-xl bg-black px-6 py-3 font-semibold text-white"
                >
                  Go to Trade Shop
                </Link>
              </div>

              <form
                onSubmit={handleChangePassword}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <h2 className="text-2xl font-bold">Change Password</h2>
                <p className="mt-2 text-sm text-slate-500">
                  Set a new password while you are signed in.
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      New Password
                    </label>
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={newPassword}
                      onChange={(event) => setNewPassword(event.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
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
                    disabled={changingPassword}
                    className="w-full rounded-xl bg-black py-4 font-bold text-white disabled:opacity-50"
                  >
                    {changingPassword ? "Changing Password…" : "Change Password"}
                  </button>

                  <button
                    type="button"
                    onClick={signOut}
                    className="w-full text-sm font-semibold text-slate-600 underline underline-offset-4 hover:text-black"
                  >
                    Sign Out
                  </button>
                </div>
              </form>
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

import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function SuccessPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

          <h1 className="text-5xl font-black text-cyan-400">
            Payment Successful
          </h1>

          <p className="mt-6 text-slate-300">
            Thank you for your order. Your payment has been received successfully.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    </>
  );
}
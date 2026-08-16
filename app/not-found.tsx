import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">

        <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
          ERROR 404
        </p>

        <h1 className="mt-6 text-7xl font-black">
          Page Not Found
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-slate-300">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Return Home
        </Link>

      </div>
    </main>
  );
}
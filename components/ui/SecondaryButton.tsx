import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function SecondaryButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800"
    >
      {children}
    </Link>
  );
}
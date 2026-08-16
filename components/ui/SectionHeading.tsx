type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: Props) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-black text-white md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-8 text-lg leading-8 text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}
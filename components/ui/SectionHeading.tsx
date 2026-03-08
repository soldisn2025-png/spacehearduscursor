type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-lg text-stone-600">{subtitle}</p>}
    </div>
  );
}

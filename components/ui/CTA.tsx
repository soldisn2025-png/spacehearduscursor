import Link from 'next/link';

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  external?: boolean;
};

const base =
  'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2';

const variants = {
  primary: 'bg-amber-500 text-white shadow-soft hover:bg-amber-600',
  secondary: 'bg-stone-700 text-white hover:bg-stone-800',
  outline: 'border-2 border-amber-500 text-amber-700 hover:bg-amber-50',
};

export function CTA({ href, children, variant = 'primary', className = '', external }: CTAProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

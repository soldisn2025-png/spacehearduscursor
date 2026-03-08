import type { Metadata } from 'next';
import { Inter, Crimson_Pro } from 'next/font/google';
import './globals.css';
import { Layout } from '@/components/layout';
import { site } from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const crimson = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website',
    // Add your domain when live: url: `https://${site.domain}`,
    // images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

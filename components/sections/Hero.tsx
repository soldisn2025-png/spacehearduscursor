import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';
import { organization } from '@/content/organization';
import { links } from '@/content/links';
import { CTA } from '@/components/ui/CTA';

// Hero image: replace with your photo at public/images/hero/hero.jpg and set HERO_IMAGE to '/images/hero/hero.jpg'
const HERO_IMAGE = '/images/hero/hero.svg';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-100">
      <div className="relative aspect-[16/10] min-h-[420px] w-full sm:aspect-[2/1] sm:min-h-[480px]">
        {/* Hero image – replace with your photo; fallback gradient if missing */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-stone-100 to-amber-50" aria-hidden />
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/30 to-transparent" aria-hidden />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 sm:px-6 sm:pb-16 md:px-8">
          <div className="mx-auto w-full max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
              Where Every Voice Is Heard
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-white/95 sm:text-xl">
              Space Heard Us is a music group created to celebrate the gifts of children with disabilities and serve the community through music. Music has no barriers. In music, we become one.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTA href="/donation" variant="primary" className="bg-amber-500 hover:bg-amber-600 text-white">
                Donate
              </CTA>
              <CTA href="/schedule" variant="outline" className="border-white text-white hover:bg-white/10">
                View Schedule
              </CTA>
            </div>
            <p className="mt-6 text-sm text-white/90">
              Through music, we become one. Celebrating the voices and gifts of children with disabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

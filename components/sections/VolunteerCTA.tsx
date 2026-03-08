import { CTA } from '@/components/ui/CTA';
import { links } from '@/content/links';

export function VolunteerCTA() {
  return (
    <section className="bg-amber-50/80 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          Join us as a volunteer or partner
        </h2>
        <p className="mt-4 text-lg text-stone-600">
          We welcome volunteers, venues, donors, schools, churches, and community partners. If you’d like to invite us to perform or get involved, we’d love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTA href={links.volunteer || '/connect#volunteer'} variant="primary" external={!!links.volunteer}>
            Volunteer sign-up
          </CTA>
          <CTA href="/connect" variant="outline">Connect with us</CTA>
        </div>
      </div>
    </section>
  );
}

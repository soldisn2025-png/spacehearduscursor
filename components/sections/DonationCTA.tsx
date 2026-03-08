import { CTA } from '@/components/ui/CTA';

export function DonationCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          Your support makes our music possible
        </h2>
        <p className="mt-4 text-lg text-stone-600">
          Donations help fund performances, outreach, inclusive music opportunities, transportation, and community events. Every gift helps more voices be heard.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTA href="/donation" variant="primary">Donate now</CTA>
          <CTA href="/connect" variant="outline">Other ways to help</CTA>
        </div>
      </div>
    </section>
  );
}

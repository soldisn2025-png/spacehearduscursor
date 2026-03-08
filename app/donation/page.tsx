import type { Metadata } from 'next';
import Link from 'next/link';
import { organization } from '@/content/organization';
import { links } from '@/content/links';
import { site } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTA } from '@/components/ui/CTA';

export const metadata: Metadata = {
  title: 'Donation',
  description: `Support ${site.name}. Your gift helps spread hope through music.`,
};

export default function DonationPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          title="Support Space Heard Us"
          subtitle="Your generosity helps us spread hope through music and celebrate every voice."
          className="mb-12"
        />

        <div className="prose prose-stone max-w-none">
          <p className="text-lg text-stone-600">
            {organization.story.heart}
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200 bg-amber-50/50 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-stone-900">Why give</h3>
          <p className="mt-2 text-stone-600">
            Donations fund performances, outreach, inclusive music opportunities, transportation, and community events. Every gift helps more children be seen, heard, and celebrated.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-stone-900">How your support helps</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-600">
            <li>Performances in schools, churches, and community venues</li>
            <li>Inclusive music opportunities for kids with and without disabilities</li>
            <li>Transportation and materials for rehearsals and events</li>
            <li>Partnerships with schools and community organizations</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl border-2 border-amber-200 bg-amber-50/80 p-8 text-center">
          <p className="text-lg font-medium text-stone-800">Ready to make a difference?</p>
          <CTA href={links.donate} variant="primary" external>
            Donate now
          </CTA>
          <p className="text-xs text-stone-500">
            You can update the donation link in <code className="rounded bg-stone-200 px-1">content/links.ts</code> (e.g. Zeffy, PayPal, Stripe).
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-stone-900">Other ways to partner</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/connect#volunteer" className="font-medium text-amber-700 hover:underline">Volunteer</Link>
              <span className="text-stone-600"> — Give your time and talents.</span>
            </li>
            <li>
              <Link href="/connect" className="font-medium text-amber-700 hover:underline">Invite us to perform</Link>
              <span className="text-stone-600"> — Schools, churches, and community spaces.</span>
            </li>
            <li>
              <Link href="/connect" className="font-medium text-amber-700 hover:underline">Partner with us</Link>
              <span className="text-stone-600"> — Organizations and sponsors.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

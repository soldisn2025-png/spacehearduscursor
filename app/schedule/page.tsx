import type { Metadata } from 'next';
import Link from 'next/link';
import { events } from '@/content/events';
import { site } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTA } from '@/components/ui/CTA';
import { EventHighlights } from '@/components/sections/EventHighlights';

export const metadata: Metadata = {
  title: 'Schedule',
  description: `Upcoming performances and events | ${site.name}.`,
};

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default function SchedulePage() {
  const upcoming = events
    .filter((e) => !e.isComingSoon)
    .sort((a, b) => (a.date > b.date ? 1 : -1));
  const comingSoon = events.filter((e) => e.isComingSoon);

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          title="Schedule"
          subtitle="Upcoming performances, rehearsals, and community events."
          className="mb-12"
        />

        {upcoming.length === 0 && comingSoon.length === 0 ? (
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-10 text-center">
            <p className="text-lg text-stone-600">No events scheduled right now.</p>
            <p className="mt-2 text-stone-500">Connect with us to hear about future performances and rehearsals.</p>
            <CTA href="/connect" variant="primary" className="mt-6">Connect with us</CTA>
          </div>
        ) : (
          <>
            <ul className="space-y-6">
              {upcoming.map((e) => (
                <li
                  key={e.id}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft"
                >
                  <span className="text-sm font-medium text-amber-700">{e.type}</span>
                  <h3 className="mt-1 text-xl font-semibold text-stone-900">{e.title}</h3>
                  <p className="mt-2 text-stone-600">{e.description}</p>
                  <p className="mt-3 text-stone-500">
                    {formatDate(e.date)} · {e.time}
                  </p>
                  <p className="text-stone-500">{e.location}{e.locationDetail ? `, ${e.locationDetail}` : ''}</p>
                  {e.rsvpLink && (
                    <Link
                      href={e.rsvpLink}
                      className="mt-4 inline-block rounded-xl border-2 border-amber-500 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50"
                    >
                      {e.rsvpLabel || 'RSVP / Details'}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {comingSoon.length > 0 && (
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-stone-800">Coming soon</h3>
                <ul className="mt-4 space-y-4">
                  {comingSoon.map((e) => (
                    <li key={e.id} className="rounded-xl border border-dashed border-stone-300 bg-stone-50 p-4">
                      <span className="font-medium text-stone-800">{e.title}</span>
                      <p className="text-sm text-stone-500">{e.description}</p>
                      <Link href="/connect" className="mt-2 inline-block text-sm font-medium text-amber-700 hover:underline">
                        Get updates
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12 text-center">
              <CTA href="/connect" variant="outline">Invite us to perform</CTA>
            </div>
          </>
        )}

        <EventHighlights />
      </div>
    </div>
  );
}

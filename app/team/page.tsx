import type { Metadata } from 'next';
import Image from 'next/image';
import { teamMembers } from '@/content/team';
import { organization } from '@/content/organization';
import { site } from '@/content/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTA } from '@/components/ui/CTA';

export const metadata: Metadata = {
  title: 'Team',
  description: `Meet the team behind ${site.name}.`,
};

const sorted = [...teamMembers].sort((a, b) => a.order - b.order);

export default function TeamPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Meet the team"
          subtitle="The hearts and voices behind Space Heard Us. We are a group of kids with and without autism, united by music and a heart for inclusion."
          className="mb-12"
        />

        <div className="mb-16 rounded-2xl border border-stone-200 bg-amber-50/50 p-6 sm:p-8">
          <p className="text-lg text-stone-700">
            {organization.story.heart}
          </p>
        </div>

        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {sorted.map((member) => (
            <li
              key={member.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-soft sm:flex-row"
            >
              <div className="relative h-64 w-full shrink-0 bg-stone-100 sm:h-auto sm:min-h-[280px] sm:w-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 288px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-amber-100 text-stone-500 sm:flex" style={{ display: 'none' }} id={`fallback-${member.id}`}>
                  Photo
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-medium text-amber-700">{member.role}</p>
                <h2 className="mt-1 text-xl font-bold text-stone-900">{member.name}</h2>
                <p className="mt-3 text-stone-600">{member.shortBio}</p>
                {member.extendedStory && (
                  <p className="mt-4 text-stone-600">{member.extendedStory}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <CTA href="/connect" variant="primary">Connect with us</CTA>
        </div>
      </div>
    </div>
  );
}

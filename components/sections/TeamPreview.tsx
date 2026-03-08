import Image from 'next/image';
import Link from 'next/link';
import { teamMembers } from '@/content/team';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTA } from '@/components/ui/CTA';

const sorted = [...teamMembers].sort((a, b) => a.order - b.order).slice(0, 4);

export function TeamPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Meet the team"
          subtitle="The hearts and voices behind Space Heard Us."
          className="mb-10"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sorted.map((member) => (
            <Link
              key={member.id}
              href="/team"
              className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-soft transition-shadow hover:shadow-card"
            >
              <div className="aspect-square bg-stone-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden aspect-square w-full items-center justify-center bg-amber-100 text-stone-500 text-sm">
                  Photo
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-stone-900">{member.name}</h3>
                <p className="text-sm text-amber-700">{member.role}</p>
                <p className="mt-2 line-clamp-2 text-sm text-stone-600">{member.shortBio}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTA href="/team" variant="outline">Meet the full team</CTA>
        </div>
      </div>
    </section>
  );
}

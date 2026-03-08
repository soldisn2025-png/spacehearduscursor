import { organization } from '@/content/organization';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function MissionValues() {
  const { values } = organization;
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Our mission & values"
          subtitle={organization.mission}
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
            >
              <h3 className="text-lg font-semibold text-stone-900">{v.title}</h3>
              <p className="mt-2 text-stone-600">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

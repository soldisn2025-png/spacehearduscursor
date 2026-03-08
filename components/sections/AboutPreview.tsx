import { organization } from '@/content/organization';

export function AboutPreview() {
  const { story } = organization;
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          Our Story
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          {story.intro}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          {story.nameMeaning}
        </p>
      </div>
    </section>
  );
}

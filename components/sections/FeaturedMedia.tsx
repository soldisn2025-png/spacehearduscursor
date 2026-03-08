'use client';

import { useState } from 'react';
import Link from 'next/link';
import { videos } from '@/content/videos';
import { SectionHeading } from '@/components/ui/SectionHeading';

const featured = videos.find((v) => v.featured) ?? videos[0];
const previews = videos.filter((v) => v.id !== featured?.id).slice(0, 2);

export function FeaturedMedia() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Featured performances"
          subtitle="Watch our music in action."
          className="mb-10"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-card aspect-video">
              {featured && !videoError ? (
                <video
                  src={featured.src}
                  poster={featured.thumbnail}
                  controls
                  className="h-full w-full object-cover"
                  preload="metadata"
                  aria-label={featured.title}
                  onError={() => setVideoError(true)}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center text-stone-500">
                  <p className="text-sm">Add your video to <code className="rounded bg-stone-200 px-1">public/videos/performances/</code></p>
                  <p className="text-xs">Update <code className="rounded bg-stone-200 px-1">content/videos.ts</code> with the filename.</p>
                </div>
              )}
            </div>
            {featured && (
              <p className="mt-3 text-lg font-medium text-stone-800">{featured.title}</p>
            )}
            {featured?.description && (
              <p className="mt-1 text-stone-600">{featured.description}</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {previews.map((v) => (
              <Link
                key={v.id}
                href="/gallery"
                className="group block overflow-hidden rounded-xl border border-stone-200 bg-stone-50 p-4 transition-shadow hover:shadow-soft"
              >
                <div className="aspect-video w-full rounded-lg bg-stone-200" />
                <p className="mt-2 font-medium text-stone-800 group-hover:text-amber-700">{v.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

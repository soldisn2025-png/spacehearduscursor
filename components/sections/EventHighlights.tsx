'use client';

import Image from 'next/image';
import { useState } from 'react';
import { eventHighlights } from '@/content/events-media';

export function EventHighlights() {
  const [groupPhotoError, setGroupPhotoError] = useState(false);

  return (
    <section className="mt-16 border-t border-stone-200 pt-16">
      <h2 className="text-2xl font-bold text-stone-900 mb-6">Event highlights</h2>
      <p className="text-stone-600 mb-10 max-w-2xl">
        A glimpse of our performances. Add your group photo and videos by placing files in{' '}
        <code className="rounded bg-stone-200 px-1 text-sm">public/images/events/</code> and{' '}
        <code className="rounded bg-stone-200 px-1 text-sm">public/videos/performances/</code>, then update{' '}
        <code className="rounded bg-stone-200 px-1 text-sm">content/events-media.ts</code>.
      </p>

      <div className="mb-12">
        <div className="relative aspect-video max-w-3xl overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
          {!groupPhotoError ? (
            <Image
              src={eventHighlights.groupPhoto.src}
              alt={eventHighlights.groupPhoto.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              onError={() => setGroupPhotoError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-200 text-stone-500 text-sm p-4 text-center">
              Add group-photo.jpg to public/images/events/
            </div>
          )}
          {eventHighlights.groupPhoto.caption && !groupPhotoError && (
            <p className="absolute bottom-0 left-0 right-0 bg-stone-900/70 text-white text-sm py-2 px-4 text-center">
              {eventHighlights.groupPhoto.caption}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {eventHighlights.videos.map((v) => (
          <div key={v.id} className="rounded-2xl border border-stone-200 overflow-hidden bg-stone-50">
            <div className="aspect-video bg-stone-200 relative">
              <video
                src={v.src}
                controls
                className="w-full h-full object-cover"
                preload="metadata"
                aria-label={v.title}
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-stone-900">{v.title}</h3>
              {v.caption && <p className="text-sm text-stone-600 mt-1">{v.caption}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

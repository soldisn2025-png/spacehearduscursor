'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/content/gallery';
import { SectionHeading } from '@/components/ui/SectionHeading';

const categories = ['all', 'performance', 'rehearsal', 'community', 'behind-the-scenes'] as const;

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all');
  const [lightbox, setLightbox] = useState<typeof galleryImages[0] | null>(null);

  const filtered =
    filter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Gallery"
          subtitle="Moments from performances, rehearsals, and community."
          className="mb-8"
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                filter === cat ? 'bg-amber-500 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              {cat === 'all' ? 'All' : cat.replace(/-/g, ' ')}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-12 text-center">
            <p className="text-stone-600">No images in this category yet. Add photos to <code className="rounded bg-stone-200 px-1">public/images/gallery/</code> and update <code className="rounded bg-stone-200 px-1">content/gallery.ts</code>.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {filtered.map((img) => (
              <button
                key={img.id}
                type="button"
                className="group relative aspect-square overflow-hidden rounded-xl bg-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                onClick={() => setLightbox(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 focus:outline-none"
          onClick={() => setLightbox(null)}
          aria-label="Close gallery"
        >
          <div className="relative max-h-full max-w-full">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto object-contain"
            />
            {lightbox.caption && (
              <p className="mt-2 text-center text-white text-sm">{lightbox.caption}</p>
            )}
          </div>
        </button>
      )}
    </div>
  );
}

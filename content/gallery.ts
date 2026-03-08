/**
 * Gallery images. Add entries here; place image files in public/images/gallery/.
 * Categories: performance | rehearsal | community | behind-the-scenes
 */
export interface GalleryImage {
  id: string;
  src: string; // path under public/, e.g. /images/gallery/concert-1.jpg
  alt: string;
  category: 'performance' | 'rehearsal' | 'community' | 'behind-the-scenes';
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  // Placeholder entries – add real photos to public/images/gallery/ and update src below.
  {
    id: 'placeholder-1',
    src: '/images/placeholder.svg',
    alt: 'Space Heard Us performance',
    category: 'performance',
    caption: 'Add your photos to public/images/gallery/',
  },
  {
    id: 'placeholder-2',
    src: '/images/placeholder.svg',
    alt: 'Rehearsal',
    category: 'rehearsal',
    caption: 'Replace filenames in content/gallery.ts',
  },
  {
    id: 'placeholder-3',
    src: '/images/placeholder.svg',
    alt: 'Community event',
    category: 'community',
  },
];

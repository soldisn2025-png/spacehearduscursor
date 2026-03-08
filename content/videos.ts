/**
 * Featured and performance videos. Place files in public/videos/performances/.
 * Use src as path, e.g. /videos/performances/spring-2024.mp4
 */
export interface VideoItem {
  id: string;
  title: string;
  description?: string;
  src: string; // path under public/
  thumbnail?: string; // optional image path for poster
  featured?: boolean;
}

export const videos: VideoItem[] = [
  // Placeholder – replace with real file once you add a video.
  {
    id: 'featured-1',
    title: 'Featured Performance',
    description: 'Add your video file to public/videos/performances/ and update content/videos.ts',
    src: '/videos/performances/featured.mp4',
    featured: true,
  },
  {
    id: 'preview-1',
    title: 'Performance Preview',
    src: '/videos/performances/preview-1.mp4',
  },
  {
    id: 'preview-2',
    title: 'Community Concert',
    src: '/videos/performances/preview-2.mp4',
  },
];

/**
 * Event highlights: group photo and sample performance videos for the Schedule page.
 * Copy your files from:
 *   - Pictures folder → public/images/events/ (e.g. group-photo.jpg)
 *   - Performance Video folder → public/videos/performances/
 * Then update the paths below.
 */
export const eventHighlights = {
  groupPhoto: {
    src: '/images/events/group-photo.jpg', // Copy from your Pictures folder; or use /images/placeholder.svg until then
    alt: 'Space Heard Us group',
    caption: 'Our group in performance.',
  },
  videos: [
    {
      id: 'event-video-1',
      title: 'Performance highlight',
      src: '/videos/performances/event-sample-1.mp4',
      caption: 'A moment from one of our performances.',
    },
    {
      id: 'event-video-2',
      title: 'Community concert',
      src: '/videos/performances/event-sample-2.mp4',
      caption: 'Sharing music with the community.',
    },
  ],
} as const;

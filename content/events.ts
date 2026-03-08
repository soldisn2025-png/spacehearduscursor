/**
 * Upcoming events. Editable via Admin ( /admin ) or content/events.json.
 */
export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  locationDetail?: string;
  description: string;
  type: 'performance' | 'rehearsal' | 'community' | 'other';
  rsvpLink?: string;
  rsvpLabel?: string;
  isComingSoon?: boolean;
}

import eventsJson from './events.json';

export const events = eventsJson.events as EventItem[];

/**
 * Team members. Editable via Admin ( /admin ) or by editing content/team.json.
 * Place photos in public/images/team/ and set image path (e.g. /images/team/name.png).
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  extendedStory?: string;
  image: string;
  order: number;
}

import teamJson from './team.json';

export const teamMembers = teamJson.members as TeamMember[];

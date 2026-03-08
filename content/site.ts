/**
 * Site-wide settings. Editable via Admin ( /admin ) or content/site.json.
 */
import siteJson from './site.json';

export const site = siteJson as {
  name: string;
  tagline: string;
  domain: string;
  email: string;
  emailSecondary: string;
  phone: string;
  address: string;
  description: string;
  founded: string;
  nonprofitNotice: string;
};

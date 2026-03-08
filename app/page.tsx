import { Hero } from '@/components/sections/Hero';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { MissionValues } from '@/components/sections/MissionValues';
import { FeaturedMedia } from '@/components/sections/FeaturedMedia';
import { SchedulePreview } from '@/components/sections/SchedulePreview';
import { TeamPreview } from '@/components/sections/TeamPreview';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { DonationCTA } from '@/components/sections/DonationCTA';
import { VolunteerCTA } from '@/components/sections/VolunteerCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <MissionValues />
      <FeaturedMedia />
      <SchedulePreview />
      <TeamPreview />
      <GalleryPreview />
      <DonationCTA />
      <VolunteerCTA />
    </>
  );
}

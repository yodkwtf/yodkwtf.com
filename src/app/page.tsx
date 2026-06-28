import { HeroSection } from "@/components/sections/HeroSection";
import { MiniAboutSection } from "@/components/sections/MiniAboutSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { LatestBlogsSection } from "@/components/sections/LatestBlogsSection";
import { CTASection } from "@/components/sections/CTASection";

// ISR: re-render at most every 5 min so Sanity content edits appear without a
// manual redeploy. The home-page sections fetch their own Sanity data.
export const revalidate = 300;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MiniAboutSection />
      <FeaturedProjectsSection />
      <LatestBlogsSection />
      <CTASection />
    </>
  );
}

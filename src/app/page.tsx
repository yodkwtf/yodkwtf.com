import { HeroSection } from "@/components/sections/HeroSection";
import { MiniAboutSection } from "@/components/sections/MiniAboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { LatestBlogsSection } from "@/components/sections/LatestBlogsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MiniAboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <LatestBlogsSection />
      <CTASection />
    </>
  );
}

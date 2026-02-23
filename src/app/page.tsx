import { SectionStaticHero } from "@/components/layout/section-static-hero";
import { QuickStartCards } from "@/components/home/quick-start-cards";
import { FeatureOverview } from "@/components/home/feature-overview";

export default function Home() {
  return (
    <>
      <SectionStaticHero />
      <QuickStartCards />
      <FeatureOverview />
    </>
  );
}

import { SectionStaticHero } from "@/components/layout/section-static-hero";
import { QuickStartCards } from "@/components/home/quick-start-cards";
import { FeatureOverview } from "@/components/home/feature-overview";
import { AskAnythingSection } from "@/components/home/ask-anything-section";

export default function Home() {
  return (
    <>
      <SectionStaticHero />
      <QuickStartCards />
      <FeatureOverview />
      <AskAnythingSection />
    </>
  );
}

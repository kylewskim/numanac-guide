import { Hero } from "@/components/home/hero";
import { QuickStartCards } from "@/components/home/quick-start-cards";
import { FeatureOverview } from "@/components/home/feature-overview";
import { AskAnythingSection } from "@/components/home/ask-anything-section";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickStartCards />
      <FeatureOverview />
      <AskAnythingSection />
    </>
  );
}

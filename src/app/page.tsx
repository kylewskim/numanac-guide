import { Hero } from "@/components/home/hero";
import { QuickStartCards } from "@/components/home/quick-start-cards";
import { FeatureOverview } from "@/components/home/feature-overview";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickStartCards />
      <FeatureOverview />
    </>
  );
}

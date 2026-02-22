import { GettingStartedStepper } from "@/components/layout/getting-started-stepper";
import { SectionStaticHero } from "@/components/layout/section-static-hero";

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionStaticHero />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex gap-12">
          <GettingStartedStepper />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </>
  );
}

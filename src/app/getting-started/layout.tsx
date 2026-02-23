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
      {/* Horizontal step bar */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex justify-center">
          <GettingStartedStepper />
        </div>
      </div>
      {/* Full-width content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {children}
      </div>
    </>
  );
}

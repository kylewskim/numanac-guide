import { SectionStaticHero } from "@/components/layout/section-static-hero";

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionStaticHero />
      {children}
    </>
  );
}

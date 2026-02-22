import { SectionStaticHero } from "@/components/layout/section-static-hero";

export default function VideosLayout({
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

"use client";

import { usePathname } from "next/navigation";
import { SECTION_HERO_CONFIG, SECTION_HERO_FALLBACK } from "@/lib/section-hero-config";

function getHeroConfig(pathname: string) {
  const exact = SECTION_HERO_CONFIG[pathname];
  if (exact) return exact;

  const wildcard = Object.entries(SECTION_HERO_CONFIG).find(([pattern]) =>
    pattern.endsWith("/*") ? pathname.startsWith(pattern.slice(0, -1)) : false
  );
  if (wildcard) return wildcard[1];

  return SECTION_HERO_FALLBACK;
}

/*
  Shape layout — 4 corners on desktop, 2 diagonal corners on mobile.

  Mobile (< sm):           SM+ desktop:
  [1 rect ▬]   ·····       [1 rect ▬]    [2 circle ●]
  ·····   ·····            ·····   ·····
  ·····   [4 rect ▬]       [3 ellipse ◉]  [4 rect ▬]

  Shape types: rounded rectangles (rotated) + circles + ellipse
  All bleed off their corner — no borders, no strokes.
*/

export function SectionStaticHero() {
  const pathname = usePathname();
  const config = getHeroConfig(pathname);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#0b1e12",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >

      {/* ── [1] TOP-LEFT: Rounded rectangle, rotated — Numanac green ── */}
      {/* Mobile visible */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          width: 200,
          height: 96,
          top: -32,
          left: -52,
          backgroundColor: "#3a9d6e",
          opacity: 0.68,
          borderRadius: "14px",
          transform: "rotate(-20deg)",
          border: "none",
          outline: "none",
        }}
      />

      {/* ── [2] TOP-RIGHT: Circle — dark forest green ── */}
      {/* Hidden on mobile */}
      <div
        className="absolute pointer-events-none select-none rounded-full hidden sm:block"
        style={{
          width: 180,
          height: 180,
          top: -65,
          right: -48,
          backgroundColor: "#1d5c3a",
          opacity: 0.72,
          border: "none",
          outline: "none",
        }}
      />

      {/* ── [3] BOTTOM-LEFT: Ellipse, rotated — teal ── */}
      {/* Hidden on mobile */}
      <div
        className="absolute pointer-events-none select-none hidden sm:block"
        style={{
          width: 185,
          height: 95,
          bottom: -38,
          left: -42,
          backgroundColor: "#2d8a72",
          opacity: 0.62,
          borderRadius: "50%",
          transform: "rotate(-15deg)",
          border: "none",
          outline: "none",
        }}
      />

      {/* ── [4] BOTTOM-RIGHT: Rounded rectangle, rotated — warm gold ── */}
      {/* Mobile visible */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          width: 188,
          height: 92,
          bottom: -30,
          right: -50,
          backgroundColor: "#c4a240",
          opacity: 0.65,
          borderRadius: "14px",
          transform: "rotate(18deg)",
          border: "none",
          outline: "none",
        }}
      />

      {/* ── Text ── */}
      <div className="relative z-10 mx-auto flex h-[228px] max-w-7xl items-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {config.eyebrow && (
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "rgba(130, 212, 168, 0.65)" }}
            >
              {config.eyebrow}
            </p>
          )}
          <h1 className="mt-1.5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {config.title}
          </h1>
          <p
            className="mt-2 max-w-xl text-xs leading-relaxed sm:text-sm"
            style={{ color: "rgba(255,255,255,0.58)" }}
          >
            {config.description}
          </p>
        </div>
      </div>

    </section>
  );
}

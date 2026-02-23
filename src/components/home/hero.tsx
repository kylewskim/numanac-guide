"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────
   Colour palette (agtech, surface-only)
   ───────────────────────────────────────── */
const BG = "#0b1e12";
const C1 = "#3a9d6e"; // Numanac green
const C2 = "#82d4a8"; // light mint
const C3 = "#d4a83a"; // warm harvest gold
const C4 = "#2d8a72"; // teal
const C5 = "#1d5c3a"; // dark forest (depth)

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* ── Mobile: corner surface accents only ── */}
      <div
        className="lg:hidden absolute pointer-events-none select-none rounded-full"
        style={{
          width: 240,
          height: 240,
          top: -80,
          right: -80,
          backgroundColor: C1,
          opacity: 0.72,
          border: "none",
          outline: "none",
        }}
      />
      <div
        className="lg:hidden absolute pointer-events-none select-none rounded-full"
        style={{
          width: 180,
          height: 180,
          bottom: -60,
          right: -50,
          backgroundColor: C3,
          opacity: 0.65,
          border: "none",
          outline: "none",
        }}
      />

      {/* ── Main layout ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] min-h-[420px] lg:min-h-[520px]">

          {/* ── LEFT: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col justify-center py-20 md:py-28 lg:py-0 lg:pr-12"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em] mb-5"
              style={{ color: `${C2}bb` }}
            >
              Official Numanac Guide
            </p>

            <h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-6 text-white"
            >
              Start quickly with<br />step-by-step guidance
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Follow practical guides to set up your farm and log work with confidence.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="gap-2 text-gray-900 font-semibold"
                style={{ backgroundColor: "white", border: "none", outline: "none" }}
              >
                <Link href="/getting-started">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* ── RIGHT: Surface composition (desktop only) ── */}
          <div className="relative hidden lg:block" aria-hidden="true">
            {/*
              All shapes rendered as an SVG composition — purely filled surfaces,
              zero stroke, zero border. Colors bleed off right/top/bottom edges.
            */}
            <svg
              viewBox="0 0 460 520"
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                inset: 0,
                overflow: "visible",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 1 — Dark forest depth layer (largest, behind everything) */}
              <circle cx="310" cy="300" r="230" fill={C5} fillOpacity="0.90" />

              {/* 2 — Primary Numanac green (main visual mass, bleeds right) */}
              <circle cx="360" cy="220" r="190" fill={C1} fillOpacity="0.85" />

              {/* 3 — Teal ellipse (mid-left, overlapping greens) */}
              <ellipse
                cx="140"
                cy="280"
                rx="150"
                ry="125"
                fill={C4}
                fillOpacity="0.80"
                transform="rotate(-12 140 280)"
              />

              {/* 4 — Warm gold (bottom area, harvest accent) */}
              <circle cx="260" cy="460" r="155" fill={C3} fillOpacity="0.78" />

              {/* 5 — Light mint (top-right, fresh crop accent) */}
              <circle cx="400" cy="80" r="105" fill={C2} fillOpacity="0.75" />

              {/* 6 — Small bright mint (inner accent for depth) */}
              <circle cx="195" cy="175" r="62" fill={C2} fillOpacity="0.55" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}

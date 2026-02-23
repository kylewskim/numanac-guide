"use client";

import { useState } from "react";

type AddOn = { name: string; price: string; unit: string };

type PricingMode = {
  price: string;
  annual: string | null;
  addOns: AddOn[];
};

type Plan = {
  name: string;
  badge: string | null;
  yearly: PricingMode | null;
  monthly: PricingMode | null;
  description: string;
  contactCta: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Farmer",
    badge: null,
    yearly: {
      price: "$17",
      annual: "$204/year",
      addOns: [
        { name: "Add Manager", price: "$204", unit: "/person" },
        { name: "Add Recordkeeper", price: "$102", unit: "/person" },
      ],
    },
    monthly: {
      price: "$20",
      annual: null,
      addOns: [
        { name: "Add Manager", price: "$20", unit: "/person" },
        { name: "Add Recordkeeper", price: "$10", unit: "/person" },
      ],
    },
    description:
      "Manage every aspect of your farm efficiently with tools built for daily operations and growth.",
    contactCta: false,
    features: [
      "AI-powered voice, text, image, and file logging for farm operations",
      "Full multilingual logging support, 180+ languages",
      "Task logging, assignment, and management. Team collaboration",
      "Weather and geo-tagged logs automatically linked to each record",
      "Alma AI Copilot for instant answers, smart reports, and decision support",
    ],
  },
  {
    name: "Consultant",
    badge: "+ 30 clients",
    yearly: {
      price: "$127.5",
      annual: "$1,530/year",
      addOns: [
        { name: "Add Manager", price: "$816", unit: "/person" },
        { name: "Add Recordkeeper", price: "$102", unit: "/person" },
        { name: "Add Client", price: "$51", unit: "/client" },
      ],
    },
    monthly: {
      price: "$150",
      annual: null,
      addOns: [
        { name: "Add Manager", price: "$80", unit: "/person" },
        { name: "Add Recordkeeper", price: "$10", unit: "/person" },
        { name: "Add Client", price: "$5", unit: "/client" },
      ],
    },
    description:
      "Oversee up to 30 client farms with smart tools for data, insights, and collaboration.",
    contactCta: false,
    features: [
      "Everything included in the Farmer Plan",
      "Manage multiple clients and farms in dedicated workspaces",
      "Client data isolation to ensure privacy and context separation",
      "Cross-client visibility for task tracking and farm performance",
      "Alma AI Copilot insights tailored to each client and farm context",
    ],
  },
  {
    name: "Enterprise",
    badge: null,
    yearly: null,
    monthly: null,
    description:
      "For agricultural organizations that need reliable, context-rich farm data to manage risk, ensure compliance, optimize procurement, and deploy AI across complex agricultural networks.",
    contactCta: true,
    features: [
      "Everything included in the Consultant plan",
      "Custom integrations with internal systems, ERPs, and third-party platforms",
      "Custom data export pipelines for analytics, reporting, compliance, and AI workflows",
      "Dedicated workspaces with strict data isolation and controlled cross-farm visibility",
      "Alma AI Copilot insights grounded in each farm, field, and organizational context",
    ],
  },
];

// Exact color values from numanac.ai/pricing
const C = {
  text: "rgb(28, 28, 28)",
  textFeature: "rgb(14, 14, 14)",
  addon: "rgb(57, 57, 57)",
  muted: "rgb(114, 114, 114)",
  faint: "rgb(143, 143, 143)",
  check: "rgb(56, 162, 113)",
  badgeBg: "rgb(236, 253, 245)",
  badgeText: "rgb(0, 153, 102)",
  toggleBg: "rgba(118, 118, 128, 0.12)",
  divider: "rgba(0, 0, 0, 0.15)",
  cardBg: "rgb(247, 247, 247)",
} as const;

function PlanCard({ plan }: { plan: Plan }) {
  const [billing, setBilling] = useState<"yearly" | "monthly">("yearly");

  const pricing =
    plan.yearly !== null
      ? billing === "yearly"
        ? plan.yearly
        : plan.monthly!
      : null;

  return (
    <div
      className="rounded-2xl flex flex-col gap-6 h-full"
      style={{ backgroundColor: C.cardBg, padding: "32px 24px" }}
    >
            {/* Plan name + badge */}
            <div className="flex items-end gap-1.5">
              <h3
                className="text-xl font-medium leading-tight"
                style={{ color: C.text }}
              >
                {plan.name}
              </h3>
              {plan.badge && (
                <span
                  className="text-xs font-medium mb-px"
                  style={{ color: C.muted }}
                >
                  {plan.badge}
                </span>
              )}
            </div>

            {/* Yearly / Monthly toggle (Farmer & Consultant only) */}
            {pricing !== null && (
              <div
                className="flex rounded-full p-1 self-start shrink-0"
                style={{
                  backgroundColor: C.toggleBg,
                  width: "240px",
                  height: "36px",
                }}
              >
                <button
                  onClick={() => setBilling("yearly")}
                  className={`flex-1 flex items-center justify-center gap-1 rounded-full text-[13px] font-medium transition-all ${
                    billing === "yearly" ? "bg-white shadow-sm" : ""
                  }`}
                  style={{ color: billing === "yearly" ? C.text : C.muted }}
                >
                  Yearly
                  <span
                    className="rounded-[6px] px-1 text-[12px] font-medium leading-4"
                    style={{ backgroundColor: C.badgeBg, color: C.badgeText }}
                  >
                    -15%
                  </span>
                </button>
                <button
                  onClick={() => setBilling("monthly")}
                  className={`flex-1 flex items-center justify-center rounded-full text-[13px] font-medium transition-all ${
                    billing === "monthly" ? "bg-white shadow-sm" : ""
                  }`}
                  style={{ color: billing === "monthly" ? C.text : C.muted }}
                >
                  Monthly
                </button>
              </div>
            )}

            {/* Price */}
            {pricing ? (
              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-1">
                  <span
                    className="text-2xl font-medium"
                    style={{ color: C.text, lineHeight: "30px" }}
                  >
                    {pricing.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: C.muted, lineHeight: "22px" }}
                  >
                    /month
                  </span>
                </div>
                {pricing.annual && (
                  <p className="text-sm" style={{ color: C.faint }}>
                    {pricing.annual}
                  </p>
                )}
              </div>
            ) : (
              <p
                className="text-2xl font-medium"
                style={{ color: C.text, lineHeight: "30px" }}
              >
                Custom Pricing
              </p>
            )}

            {/* Description */}
            <p
              className="text-sm"
              style={{ color: C.text, lineHeight: "135%" }}
            >
              {plan.description}
            </p>

            {/* Add-ons */}
            {pricing && pricing.addOns.length > 0 && (
              <div className="flex flex-col gap-3">
                {pricing.addOns.map((addon) => (
                  <div
                    key={addon.name}
                    className="flex items-start justify-between"
                  >
                    <span className="text-sm" style={{ color: C.addon }}>
                      {addon.name}
                    </span>
                    <div className="flex items-center">
                      <span
                        className="text-sm font-medium"
                        style={{ color: C.addon }}
                      >
                        {addon.price}
                      </span>
                      <span className="text-sm" style={{ color: C.faint }}>
                        {addon.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Contact Us (Enterprise only) — subtle to avoid visual dominance */}
            {plan.contactCta && (
              <a
                href="https://forms.monday.com/forms/c2779931b79809fb9b3ec0e552e3332a?r=use1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full rounded-md text-sm font-medium transition-colors"
                style={{
                  height: "44px",
                  color: C.addon,
                  border: `1px solid ${C.divider}`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.04)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                Contact Us
              </a>
            )}

            {/* Divider */}
            <div style={{ borderTop: `1px solid ${C.divider}` }} />

            {/* Features */}
            <ul className="flex flex-col gap-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  {/* Custom SVG checkmark matching numanac.ai/pricing */}
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    style={{ flexShrink: 0, marginTop: "3.5px" }}
                  >
                    <path
                      d="M1 5.5L5.5 10L14 1"
                      stroke={C.check}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="text-sm"
                    style={{ color: C.textFeature, lineHeight: "18px" }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
    </div>
  );
}

export function PlanCards() {
  return (
    // max-w matches 3 × 360px cards + 2 × 32px gaps = 1144px; mx-auto centers on wide viewports
    <div
      className="grid grid-cols-1 min-[810px]:grid-cols-2 min-[1200px]:grid-cols-3 gap-8 mx-auto w-full"
      style={{ maxWidth: "1144px" }}
    >
      {plans.map((plan) => (
        <div
          key={plan.name}
          // tablet: Enterprise spans full row; desktop: back to single column (all 3 fit in one row)
          className={
            plan.name === "Enterprise"
              ? "min-[810px]:col-span-2 min-[1200px]:col-span-1"
              : undefined
          }
        >
          <PlanCard plan={plan} />
        </div>
      ))}
    </div>
  );
}

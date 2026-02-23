"use client";

import { useState } from "react";
import { Check } from "lucide-react";

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
      price: "$150",
      annual: null,
      addOns: [
        { name: "Add Manager", price: "$20", unit: "/person" },
        { name: "Add Recordkeeper", price: "$10", unit: "/person" },
        { name: "Add Client", price: "$5", unit: "/client" },
      ],
    },
    monthly: {
      price: "$150",
      annual: null,
      addOns: [
        { name: "Add Manager", price: "$20", unit: "/person" },
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

export function PlanCards() {
  const [billing, setBilling] = useState<"yearly" | "monthly">("yearly");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {plans.map((plan) => {
        const pricing =
          plan.yearly !== null
            ? billing === "yearly"
              ? plan.yearly
              : plan.monthly!
            : null;

        return (
          <div
            key={plan.name}
            className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col"
          >
            <div className="p-6 flex-1 flex flex-col">
              {/* Plan name */}
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                {plan.badge && (
                  <span className="text-sm text-gray-400">{plan.badge}</span>
                )}
              </div>

              {/* Toggle (Farmer & Consultant only) */}
              {pricing !== null && (
                <div className="inline-flex bg-gray-100 rounded-full p-1 mb-4 self-start">
                  <button
                    onClick={() => setBilling("yearly")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                      billing === "yearly"
                        ? "bg-white shadow-sm text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Yearly
                    <span className="text-xs font-semibold text-emerald-500">-15%</span>
                  </button>
                  <button
                    onClick={() => setBilling("monthly")}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                      billing === "monthly"
                        ? "bg-white shadow-sm text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              )}

              {/* Price */}
              {pricing ? (
                <>
                  <div className="mb-1">
                    <span className="text-4xl font-bold text-gray-900">{pricing.price}</span>
                    <span className="text-sm text-gray-500 ml-1">/month</span>
                  </div>
                  {pricing.annual ? (
                    <p className="text-sm text-gray-400 mb-3">{pricing.annual}</p>
                  ) : (
                    <div className="mb-3" />
                  )}
                </>
              ) : (
                <p className="text-3xl font-bold text-gray-900 mb-3">Custom Pricing</p>
              )}

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {plan.description}
              </p>

              {/* Add-ons */}
              {pricing && pricing.addOns.length > 0 && (
                <div className="space-y-2.5 pb-5 border-b border-gray-100 mb-5">
                  {pricing.addOns.map((addon) => (
                    <div key={addon.name} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{addon.name}</span>
                      <span className="text-sm">
                        <span className="font-bold text-gray-900">{addon.price}</span>
                        <span className="text-gray-400 text-xs">{addon.unit}</span>
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Contact Us (Enterprise only) — subtle outlined style */}
              {plan.contactCta && (
                <div className="pb-5 border-b border-gray-100 mb-5">
                  <a
                    href="mailto:support@numanac.com"
                    className="flex items-center justify-center w-full py-2.5 rounded-xl text-sm font-medium text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              )}

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

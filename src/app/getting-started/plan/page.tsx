import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Choose a Plan",
  description: "Compare Numanac plans and choose the right one for you.",
};

const plans = [
  {
    name: "Farmer",
    badge: null,
    price: { monthly: "$17", annual: "$204/year" },
    description:
      "Manage every aspect of your farm efficiently with tools built for daily operations and growth.",
    addOns: [
      { name: "Add Manager", price: "$204", unit: "/person" },
      { name: "Add Recordkeeper", price: "$102", unit: "/person" },
    ],
    ctaColor: "bg-primary hover:bg-primary/90",
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
    price: { monthly: "$127.5", annual: "$1,530/year" },
    description:
      "Oversee up to 30 client farms with smart tools for data, insights, and collaboration.",
    addOns: [
      { name: "Add Manager", price: "$816", unit: "/person" },
      { name: "Add Recordkeeper", price: "$204", unit: "/person" },
      { name: "Add Client", price: "$51", unit: "/client" },
    ],
    ctaColor: "bg-gray-900 hover:bg-gray-800",
    features: [
      "Everything included in the Farmer Plan",
      "Manage multiple clients and farms in dedicated workspaces",
      "Client data isolation to ensure privacy and context separation",
      "Cross-client visibility for task tracking and farm performance",
      "Alma AI Copilot insights tailored to each client and farm context",
    ],
  },
];

export default function PlanPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="secondary" className="text-xs">Step 2 of 3</Badge>
          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            About 1 minute
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Plan</h1>
        <p className="text-gray-600 leading-relaxed">
          Numanac has two plans. Choose the one that fits your situation. All plans include a 1-month free trial — no credit card required.
        </p>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col"
          >
            {/* Card body */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Plan name */}
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                {plan.badge && (
                  <span className="text-sm text-gray-400">{plan.badge}</span>
                )}
              </div>

              {/* Price */}
              <div className="mb-1">
                <span className="text-4xl font-bold text-gray-900">{plan.price.monthly}</span>
                <span className="text-sm text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{plan.price.annual}</p>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {plan.description}
              </p>

              {/* Add-ons */}
              <div className="space-y-2.5 pb-5 border-b border-gray-100">
                {plan.addOns.map((addon) => (
                  <div key={addon.name} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{addon.name}</span>
                    <span className="text-sm">
                      <span className="font-bold text-gray-900">{addon.price}</span>
                      <span className="text-gray-400 text-xs">{addon.unit}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="py-5 border-b border-gray-100">
                <a
                  href="https://site.numanac.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold text-white transition-colors ${plan.ctaColor}`}
                >
                  Start 1 month Free Trial
                </a>
              </div>

              {/* Features */}
              <ul className="pt-5 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Next Step */}
      <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Plan selected! Now let&apos;s set up your farm.
        </p>
        <Button asChild>
          <Link href="/getting-started/setup" className="gap-2">
            Next: Farm Setup <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

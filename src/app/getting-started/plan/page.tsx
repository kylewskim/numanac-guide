import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Clock, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Choose a Plan",
  description: "Compare Numanac plans and choose the right one for you.",
};

const plans = [
  {
    name: "Farm Manager",
    target: "For farmers managing their own farm",
    price: "Standard plan",
    color: "border-primary",
    headerColor: "bg-primary text-white",
    features: [
      "Manage your own farm",
      "Unlimited field boundaries",
      "Voice activity logging",
      "Alma AI assistant",
      "Task management",
      "Team collaboration",
      "Weather data",
    ],
  },
  {
    name: "Consultant",
    target: "For consultants managing multiple clients",
    price: "Consultant plan",
    color: "border-gray-200",
    headerColor: "bg-gray-800 text-white",
    features: [
      "Manage up to 30 client farms",
      "Separate workspace per client",
      "All Farm Manager features",
      "Client portal access",
      "Multi-farm reporting",
    ],
  },
];

const faqs = [
  {
    q: "What is the difference between Farm Manager and Consultant?",
    a: "Farm Manager is for people who manage their own farm directly. Consultant is for agricultural consultants or agents who manage farms for multiple clients — it gives you a separate, secure workspace for each client.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! All plans include a 1-month free trial. No credit card required to start.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes. You can upgrade or change your plan at any time from Settings → Billing & Subscription.",
  },
  {
    q: "How many team members can I invite?",
    a: "You can add team seats based on your plan. Go to Settings → Plan to add more seats at any time.",
  },
];

export default function PlanPage() {
  return (
    <div className="max-w-2xl">
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
          Numanac has two plans. Choose the one that fits your situation.
        </p>
      </div>

      {/* Plan Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {plans.map((plan) => (
          <Card key={plan.name} className={`border-2 ${plan.color} overflow-hidden`}>
            <div className={`px-6 py-4 ${plan.headerColor}`}>
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <p className="text-sm opacity-80 mt-1">{plan.target}</p>
            </div>
            <CardContent className="p-6">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">
                {plan.price}
              </p>
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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

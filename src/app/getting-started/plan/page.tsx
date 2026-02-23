import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { PlanCards } from "@/components/getting-started/plan-cards";

export const metadata: Metadata = {
  title: "Choose a Plan",
  description: "Compare Numanac plans and choose the right one for you.",
};

export default function PlanPage() {
  return (
    <div className="max-w-[1144px] mx-auto">
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
          Numanac has three plans. Choose the one that fits your situation.
        </p>
      </div>

      {/* Plan Cards (interactive) */}
      <div className="mb-10">
        <PlanCards />
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { href: "/getting-started/signup", label: "Sign Up", step: 1 },
  { href: "/getting-started/plan", label: "Choose a Plan", step: 2 },
  { href: "/getting-started/setup", label: "Farm Setup", step: 3 },
];

export function GettingStartedStepper() {
  const pathname = usePathname();
  const currentStep = steps.findIndex((s) => s.href === pathname) + 1;

  return (
    <aside className="hidden lg:block w-56 flex-shrink-0">
      <div className="sticky top-24">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Progress
        </p>
        <nav className="space-y-2">
          {steps.map((step) => {
            const isCompleted = step.step < currentStep;
            const isCurrent = step.href === pathname;
            return (
              <Link
                key={step.href}
                href={step.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                  isCurrent
                    ? "bg-primary/10 text-primary font-medium"
                    : isCompleted
                    ? "text-gray-500 hover:bg-gray-50"
                    : "text-gray-400 hover:bg-gray-50"
                )}
              >
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0",
                    isCurrent
                      ? "bg-primary text-white"
                      : isCompleted
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  )}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : step.step}
                </div>
                {step.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

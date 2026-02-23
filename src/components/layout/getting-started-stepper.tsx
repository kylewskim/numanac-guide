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
    <nav className="flex items-center">
      {steps.map((step, i) => {
        const isCompleted = step.step < currentStep;
        const isCurrent = step.href === pathname;
        return (
          <div key={step.href} className="flex items-center">
            <Link
              href={step.href}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors",
                isCurrent
                  ? "text-primary font-medium"
                  : isCompleted
                  ? "text-gray-500 hover:text-gray-700"
                  : "text-gray-400 hover:text-gray-500"
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0",
                  isCurrent
                    ? "bg-primary text-white"
                    : isCompleted
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500"
                )}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.step}
              </div>
              <span className="hidden sm:inline">{step.label}</span>
            </Link>

            {/* Connector between steps */}
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "w-8 h-px mx-1 flex-shrink-0",
                  step.step < currentStep ? "bg-primary/40" : "bg-gray-200"
                )}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}

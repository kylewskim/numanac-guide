import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StepCard } from "@/components/guide/step-card";
import { TipBox } from "@/components/guide/tip-box";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Numanac account in under 2 minutes.",
};

export default function SignupPage() {
  return (
    <div className="max-w-2xl">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="secondary" className="text-xs">Step 1 of 3</Badge>
          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            About 2 minutes
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Sign Up for Numanac</h1>
        <p className="text-gray-600 leading-relaxed">
          Create your account to get started. You can sign up with your email
          or use an existing Google, GitHub, or Apple account.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-0">
        <StepCard
          step={1}
          title="Go to site.numanac.com"
          description="Open your browser and type site.numanac.com in the address bar, or open the Numanac app on your phone."
          image="/screenshots/onboarding/login-screen.png"
          imageAlt="Numanac login screen"
        />
        <StepCard
          step={2}
          title="Enter your email address"
          description='Type your email address and click the "Continue" button. You can also click "Sign in with Google", "Sign in with GitHub", or "Sign in with Apple" to use an existing account.'
          image="/screenshots/onboarding/signup-email.png"
          imageAlt="Email entry screen"
          tip="Using Google, GitHub, or Apple sign-in is the fastest option — no password needed."
        />
        <StepCard
          step={3}
          title="Enter your name and information"
          description='Fill in your first name, last name, and email address, then click the "Continue" button.'
          image="/screenshots/onboarding/signup-password.png"
          imageAlt="Password entry screen"
        />
        <div className="flex gap-4 pb-8 ml-14">
          <div className="flex-1" />
        </div>
      </div>

      {/* Next Step */}
      <div className="mt-4 p-6 rounded-2xl bg-primary/5 border border-primary/20">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Account created! Now let&apos;s choose the right plan for you.
        </p>
        <Button asChild>
          <Link href="/getting-started/plan" className="gap-2">
            Next: Choose a Plan <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

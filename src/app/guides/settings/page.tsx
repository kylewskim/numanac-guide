import type { Metadata } from "next";
import { SectionHeader } from "@/components/guide/section-header";
import { FeatureCard } from "@/components/guide/feature-card";
import { CreditCard, Bell, User, MapPin, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Settings Guide",
  description: "Manage your Numanac account, billing, and farm settings.",
};

export default function SettingsGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="max-w-2xl space-y-12">
        <section>
          <SectionHeader
            id="overview"
            title="What You Can Manage in Settings"
          />
          <div className="mb-6 rounded-xl overflow-hidden border bg-gray-50 max-w-xs">
            <img
              src="/screenshots/settings/settings-main.png"
              alt="Numanac Settings screen"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard
              icon={User}
              title="Profile"
              description="Update your name, email, and profile photo."
            />
            <FeatureCard
              icon={MapPin}
              title="Farm Details"
              description="Change your farm name, location, and other farm-level settings."
            />
            <FeatureCard
              icon={CreditCard}
              title="Billing & Subscription"
              description="Manage your plan, add seats, and view invoices."
            />
            <FeatureCard
              icon={Bell}
              title="Notifications"
              description="Control when and how you receive alerts and reminders."
            />
            <FeatureCard
              icon={Shield}
              title="Security"
              description="Change your password and manage two-factor authentication."
            />
          </div>
        </section>

        <section>
          <SectionHeader
            id="billing"
            title="Managing Your Subscription"
          />
          <p className="text-gray-600 leading-relaxed mb-4">
            To change your plan or add team seats, go to{" "}
            <strong>Settings → Billing & Subscription</strong>. From there you can:
          </p>
          <ul className="space-y-2">
            {[
              "Upgrade or switch between Farm Manager and Consultant plans",
              "Add or remove team member seats",
              "View and download past invoices",
              "Update your payment method",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-primary mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm text-blue-800">
            <strong>Need help with your account?</strong> Contact our support team at{" "}
            <a href="mailto:support@numanac.com" className="underline font-medium">
              support@numanac.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

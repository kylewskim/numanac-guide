import type { Metadata } from "next";
import Image from "next/image";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";

export const metadata: Metadata = {
  title: "Settings Guide",
  description: "Manage your Numanac account, billing, and farm settings.",
};

const sections = [
  { id: "overview", label: "Settings Overview" },
  { id: "billing", label: "Managing Your Subscription" },
];

const callouts = [
  {
    num: "1",
    bg: "#0051FF",
    title: "Profile card",
    desc: "Shows your name, email address, and active subscription plans at a glance.",
  },
  {
    num: "2",
    bg: "#111827",
    title: "Account Info",
    desc: "Update your name, email, and profile photo.",
  },
  {
    num: "3",
    bg: "#111827",
    title: "Payments & Subscription",
    desc: "Manage your plan, add team seats, and view invoices.",
  },
  {
    num: "4",
    bg: "#111827",
    title: "Data & Privacy",
    desc: "Control your data settings and privacy preferences.",
  },
  {
    num: "5",
    bg: "#111827",
    title: "Customer Support",
    desc: "Get help or contact the Numanac team directly from the app.",
  },
  {
    num: "6",
    bg: "#FF5E00",
    title: "Bottom tabs",
    desc: "Navigate between Map, Logs, Alma, Alerts, and Settings.",
  },
];

export default function SettingsGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="flex gap-12">
        <GuideSidebar sections={sections} />

        <div className="flex-1 min-w-0 max-w-2xl space-y-16">
          {/* Overview */}
          <section>
            <SectionHeader
              id="overview"
              title="Understanding the Settings Screen"
              subtitle="The Settings tab lets you manage your account, subscription, and app preferences."
            />

            {/* Screenshot */}
            <div className="mb-5">
              <Image
                src="/screenshots/settings/numanac-settings-main.png"
                alt="Numanac settings screen with numbered UI callouts"
                width={3600}
                height={2400}
                className="w-full h-auto"
                style={{ borderRadius: 16, border: "1px solid rgba(0,0,0,0.10)" }}
              />
            </div>

            {/* Callout grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {callouts.map((item) => (
                <div key={item.num} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span
                      className="w-5 h-5 rounded-md text-white text-[10px] font-bold flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: item.bg }}
                    >
                      {item.num}
                    </span>
                    <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-[30px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Billing */}
          <section>
            <SectionHeader
              id="billing"
              title="Managing Your Subscription"
            />
            <p className="text-gray-600 leading-relaxed mb-4">
              To change your plan or add team seats, go to{" "}
              <strong>Settings → Payments & Subscription</strong>. From there you can:
            </p>
            <ul className="space-y-2">
              {[
                "Upgrade or switch between Standard and Consultant plans",
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

          {/* Support CTA */}
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
    </div>
  );
}

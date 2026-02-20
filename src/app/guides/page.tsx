import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Map, BookOpen, CheckSquare, Bot, CloudSun, Users, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Feature Guides",
  description: "Detailed guides for every Numanac feature.",
};

const guides = [
  {
    icon: Map,
    title: "Map & Boundaries",
    description: "Learn how to draw field boundaries, create tracts, and use map layers like NDVI.",
    href: "/guides/map",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Activity Logging",
    description: "Use voice or text to record everything that happens on your farm.",
    href: "/guides/logging",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Plan upcoming work, assign tasks to team members, and track progress.",
    href: "/guides/tasks",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Bot,
    title: "Alma AI Assistant",
    description: "Chat with Alma to get answers, summaries, and farm reports.",
    href: "/guides/alma",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: CloudSun,
    title: "Weather",
    description: "Check real-time weather and forecasts at your farm location.",
    href: "/guides/weather",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Users,
    title: "Team & Collaboration",
    description: "Invite team members, assign roles, and manage access to your farm.",
    href: "/guides/team",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Settings,
    title: "Settings",
    description: "Manage your account, billing, notifications, and farm details.",
    href: "/guides/settings",
    color: "bg-gray-100 text-gray-600",
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Feature Guides</h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Click on any feature to see a detailed, step-by-step guide.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {guides.map((guide) => {
          const Icon = guide.icon;
          return (
            <Link key={guide.href} href={guide.href}>
              <Card className="h-full border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${guide.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{guide.description}</p>
                  <span className="flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

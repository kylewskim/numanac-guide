import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, UserPlus, MapPin, Mic, Users } from "lucide-react";

const cards = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your Numanac account in under 2 minutes.",
    href: "/getting-started/signup",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    cardBg: "bg-blue-50/70 hover:bg-blue-50",
    border: "border-blue-100 hover:border-blue-200",
    linkColor: "text-blue-600",
  },
  {
    icon: MapPin,
    title: "Set Up Your Farm",
    description: "Add your farm and draw field boundaries on the map.",
    href: "/getting-started/setup",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    cardBg: "bg-emerald-50/70 hover:bg-emerald-50",
    border: "border-emerald-100 hover:border-emerald-200",
    linkColor: "text-emerald-600",
  },
  {
    icon: Mic,
    title: "Log Your First Activity",
    description: "Use your voice to record farm activities instantly.",
    href: "/guides/logging",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    cardBg: "bg-amber-50/70 hover:bg-amber-50",
    border: "border-amber-100 hover:border-amber-200",
    linkColor: "text-amber-600",
  },
  {
    icon: Users,
    title: "Invite Team Members",
    description: "Add your team and assign roles to collaborate.",
    href: "/guides/team",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    cardBg: "bg-violet-50/70 hover:bg-violet-50",
    border: "border-violet-100 hover:border-violet-200",
    linkColor: "text-violet-600",
  },
];

export function QuickStartCards() {
  return (
    <section className="pt-8 pb-8 md:pt-10 md:pb-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-6 md:mb-7">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Where do you want to start?</h2>
          <p className="mt-2 text-sm text-gray-500">Choose a topic and follow the step-by-step guide.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.href} href={card.href}>
                <Card className={`h-full border transition-colors group cursor-pointer shadow-none ${card.cardBg} ${card.border}`}>
                  <CardContent className="p-4">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${card.iconBg}`}>
                      <Icon className={`w-4.5 h-4.5 ${card.iconColor}`} />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">{card.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.description}</p>
                    <div className={`mt-3 flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all ${card.linkColor}`}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

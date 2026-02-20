import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, UserPlus, MapPin, Mic, Users } from "lucide-react";

const cards = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your Numanac account in under 2 minutes.",
    href: "/getting-started/signup",
  },
  {
    icon: MapPin,
    title: "Set Up Your Farm",
    description: "Add your farm and draw field boundaries on the map.",
    href: "/getting-started/setup",
  },
  {
    icon: Mic,
    title: "Log Your First Activity",
    description: "Use your voice to record farm activities instantly.",
    href: "/guides/logging",
  },
  {
    icon: Users,
    title: "Invite Team Members",
    description: "Add your team and assign roles to collaborate.",
    href: "/guides/team",
  },
];

export function QuickStartCards() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Where do you want to start?</h2>
          <p className="mt-2 text-sm text-gray-500">Choose a topic and follow the step-by-step guide.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.href} href={card.href}>
                <Card className="h-full border border-gray-100 hover:border-gray-300 transition-colors group cursor-pointer shadow-none">
                  <CardContent className="p-5">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                      <Icon className="w-4.5 h-4.5 text-gray-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm">{card.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-gray-500 text-xs font-medium group-hover:text-gray-900 group-hover:gap-2 transition-all">
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

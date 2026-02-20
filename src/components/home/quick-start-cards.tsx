import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, UserPlus, MapPin, Mic, Users } from "lucide-react";

const cards = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your Numanac account in under 2 minutes.",
    href: "/getting-started/signup",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MapPin,
    title: "Set Up Your Farm",
    description: "Add your farm and draw field boundaries on the map.",
    href: "/getting-started/setup",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Mic,
    title: "Log Your First Activity",
    description: "Use your voice to record farm activities instantly.",
    href: "/guides/logging",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Users,
    title: "Invite Team Members",
    description: "Add your team and assign roles to collaborate.",
    href: "/guides/team",
    color: "bg-amber-50 text-amber-600",
  },
];

export function QuickStartCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Where do you want to start?</h2>
          <p className="mt-3 text-gray-500">Choose a topic and follow the step-by-step guide.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.href} href={card.href}>
                <Card className="h-full border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
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

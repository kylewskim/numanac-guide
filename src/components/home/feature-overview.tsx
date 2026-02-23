"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneFrame } from "@/components/guide/phone-frame";
import { Map, BookOpen, CheckSquare, Bot } from "lucide-react";

const features = [
  {
    value: "map",
    label: "Map",
    icon: Map,
    title: "Map & Boundaries",
    description: "Draw your farm boundaries on the map and organize them into fields and tracts.",
    bullets: [
      "Draw field boundaries by tapping points on the map",
      "Group multiple fields into tracts",
      "View NDVI vegetation health layers",
    ],
  },
  {
    value: "logging",
    label: "Logging",
    icon: BookOpen,
    title: "Record Logging",
    description: "Record everything that happens on your farm — just speak naturally.",
    bullets: [
      "Press the mic button and speak naturally",
      "Alma transcribes and categorizes your record automatically",
      "Attach photos and translate to other languages",
    ],
  },
  {
    value: "tasks",
    label: "Tasks",
    icon: CheckSquare,
    title: "Task Management",
    description: "Plan upcoming work and assign tasks to your team members.",
    bullets: [
      "Create tasks by speaking in future tense",
      "Set due dates and assign to team members",
      "Track progress and mark complete",
    ],
  },
  {
    value: "alma",
    label: "Alma AI",
    icon: Bot,
    title: "Alma AI Assistant",
    description: "Ask Alma anything about your farm — it knows your data.",
    bullets: [
      "Chat with text or voice",
      "Get summaries of past records",
      "Generate farm reports on demand",
    ],
  },
];

export function FeatureOverview() {
  return (
    <section className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">What can Numanac do?</h2>
          <p className="mt-2 text-sm text-gray-500">
            Explore the key features of the app.
          </p>
        </div>

        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-sm mb-10 bg-gray-100">
            {features.map((f) => (
              <TabsTrigger key={f.value} value={f.value} className="gap-1.5 text-xs">
                <f.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{f.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((f) => (
            <TabsContent key={f.value} value={f.value}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{f.description}</p>
                  <ul className="space-y-2.5">
                    {f.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                  <PhoneFrame />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

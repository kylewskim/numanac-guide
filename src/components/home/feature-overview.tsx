"use client";

import { useState } from "react";
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
    title: "Activity Logging",
    description: "Record everything that happens on your farm — just speak naturally.",
    bullets: [
      "Press the mic button and speak naturally",
      "Alma transcribes and categorizes your activity automatically",
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
      "Get summaries of past activities",
      "Generate farm reports on demand",
    ],
  },
];

export function FeatureOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">What can Numanac do?</h2>
          <p className="mt-3 text-gray-500">
            Explore the key features of the app.
          </p>
        </div>

        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-lg mx-auto mb-10">
            {features.map((f) => (
              <TabsTrigger key={f.value} value={f.value} className="gap-1.5">
                <f.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{f.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((f) => (
            <TabsContent key={f.value} value={f.value}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{f.description}</p>
                  <ul className="space-y-3">
                    {f.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-gray-700">{bullet}</span>
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

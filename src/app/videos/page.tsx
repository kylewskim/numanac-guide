"use client";

import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Bell, Play } from "lucide-react";
import { useState } from "react";

const plannedVideos = [
  { title: "Introduction to Numanac", duration: "~2 min", category: "Getting Started" },
  { title: "Setting Up Your First Farm", duration: "~5 min", category: "Getting Started" },
  { title: "Drawing Field Boundaries on the Map", duration: "~4 min", category: "Map" },
  { title: "Logging Activities with Your Voice", duration: "~3 min", category: "Logging" },
  { title: "Creating and Managing Tasks", duration: "~4 min", category: "Tasks" },
  { title: "Chatting with Alma AI", duration: "~3 min", category: "Alma AI" },
  { title: "Inviting Team Members", duration: "~2 min", category: "Team" },
];

const categoryColors: Record<string, string> = {
  "Getting Started": "bg-blue-50 text-blue-700",
  "Map": "bg-emerald-50 text-emerald-700",
  "Logging": "bg-primary/10 text-primary",
  "Tasks": "bg-purple-50 text-purple-700",
  "Alma AI": "bg-teal-50 text-teal-700",
  "Team": "bg-amber-50 text-amber-700",
};

export default function VideosPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      // Store in localStorage (no backend yet)
      localStorage.setItem("numanac_video_notify", email.trim());
      setSubscribed(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Banner */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
          <Clock className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-medium text-amber-700">Coming Soon</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Video Tutorials</h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          We&apos;re recording step-by-step video tutorials for every Numanac feature.
          Enter your email to be notified when they&apos;re ready.
        </p>

        {/* Email Subscription */}
        <div className="mt-8 max-w-sm mx-auto">
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <p className="text-sm text-primary font-medium">
                You&apos;ll be notified when videos are ready!
              </p>
            </div>
          ) : (
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="flex-1"
              />
              <Button onClick={handleSubscribe} className="gap-2 flex-shrink-0">
                <Bell className="w-4 h-4" />
                Notify me
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Planned Video Cards */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Planned Tutorials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plannedVideos.map((video) => (
            <Card key={video.title} className="border border-gray-100 opacity-75">
              <CardContent className="p-0">
                {/* Thumbnail placeholder */}
                <div className="relative aspect-video bg-gray-100 rounded-t-xl flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                    <Play className="w-5 h-5 text-gray-400 ml-0.5" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="absolute top-3 right-3 text-xs bg-white/90"
                  >
                    Coming Soon
                  </Badge>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[video.category] || "bg-gray-100 text-gray-600"}`}>
                      {video.category}
                    </span>
                    <span className="text-xs text-gray-400">{video.duration}</span>
                  </div>
                  <h3 className="font-medium text-gray-700 text-sm leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">We&apos;re working on it!</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Link to text guides */}
      <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center">
        <p className="text-gray-600 mb-4">
          In the meantime, our step-by-step text guides cover the same topics.
        </p>
        <Button asChild variant="outline">
          <a href="/guides">Browse Feature Guides →</a>
        </Button>
      </div>
    </div>
  );
}

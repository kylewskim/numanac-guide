"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Leaf,
  Map,
  BookOpen,
  CheckSquare,
  Bot,
  CloudSun,
  Users,
  Settings,
  Smartphone,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const guides = [
  { href: "/guides/map", label: "Map & Boundaries", icon: Map },
  { href: "/guides/logging", label: "Activity Logging", icon: BookOpen },
  { href: "/guides/tasks", label: "Task Management", icon: CheckSquare },
  { href: "/guides/alma", label: "Alma AI Assistant", icon: Bot },
  { href: "/guides/weather", label: "Weather", icon: CloudSun },
  { href: "/guides/team", label: "Team & Collaboration", icon: Users },
  { href: "/guides/settings", label: "Settings", icon: Settings },
  { href: "/guides/install", label: "Add to Home Screen", icon: Smartphone },
];

export function Navbar() {
  const pathname = usePathname();
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-sm">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <Leaf className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-900">Numanac</span>
            <span className="text-gray-400 font-normal">Guide</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/getting-started"
              className={cn(
                "text-sm transition-colors",
                pathname.startsWith("/getting-started")
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              Getting Started
            </Link>

            {/* Guides Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGuidesOpen(true)}
              onMouseLeave={() => setGuidesOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm transition-colors",
                  pathname.startsWith("/guides")
                    ? "text-gray-900 font-medium"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                Guides
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {guidesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                <div className="w-52 bg-white rounded-lg border border-gray-100 shadow-md p-1">
                  {guides.map((guide) => {
                    const Icon = guide.icon;
                    return (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        onClick={() => setGuidesOpen(false)}
                      >
                        <Icon className="w-3.5 h-3.5 text-gray-400" />
                        {guide.label}
                      </Link>
                    );
                  })}
                </div>
                </div>
              )}
            </div>

            <Link
              href="/videos"
              className={cn(
                "text-sm transition-colors",
                pathname === "/videos"
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              Videos
            </Link>

            <Link
              href="/faq"
              className={cn(
                "text-sm transition-colors",
                pathname === "/faq"
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              FAQ
            </Link>
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden md:flex h-8 px-3 text-xs bg-primary hover:bg-primary/90 text-white"
            >
              <a href="https://site.numanac.com" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden w-8 h-8">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-0.5 mt-6">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider px-3 mb-2">
                    Navigation
                  </p>
                  <Link
                    href="/getting-started"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Getting Started
                  </Link>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider px-3 mt-4 mb-2">
                    Feature Guides
                  </p>
                  {guides.map((guide) => {
                    const Icon = guide.icon;
                    return (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <Icon className="w-3.5 h-3.5 text-gray-400" />
                        {guide.label}
                      </Link>
                    );
                  })}
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider px-3 mt-4 mb-2">
                    More
                  </p>
                  <Link
                    href="/videos"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Videos
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    FAQ
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

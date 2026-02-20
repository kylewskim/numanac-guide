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
];

const navLinks = [
  { href: "/getting-started", label: "Getting Started" },
  { href: "/videos", label: "Videos" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const pathname = usePathname();
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900">Numanac</span>
            <span className="text-primary">Guide</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/getting-started"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/getting-started")
                  ? "bg-primary/10 text-primary"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname.startsWith("/guides")
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                Feature Guides
                <ChevronDown className="w-4 h-4" />
              </button>

              {guidesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border p-2 z-50">
                  {guides.map((guide) => {
                    const Icon = guide.icon;
                    return (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors"
                        onClick={() => setGuidesOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {guide.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/videos"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === "/videos"
                  ? "bg-primary/10 text-primary"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              Videos
            </Link>

            <Link
              href="/faq"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === "/faq"
                  ? "bg-primary/10 text-primary"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              FAQ
            </Link>
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button asChild className="hidden md:flex">
              <Link href="/ask">Ask Alma</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-2 mt-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                    Navigation
                  </p>
                  <Link
                    href="/getting-started"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary"
                  >
                    Getting Started
                  </Link>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mt-4 mb-2">
                    Feature Guides
                  </p>
                  {guides.map((guide) => {
                    const Icon = guide.icon;
                    return (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-primary/5 hover:text-primary"
                      >
                        <Icon className="w-4 h-4" />
                        {guide.label}
                      </Link>
                    );
                  })}
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mt-4 mb-2">
                    More
                  </p>
                  <Link
                    href="/videos"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-primary/5 hover:text-primary"
                  >
                    Videos
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-primary/5 hover:text-primary"
                  >
                    FAQ
                  </Link>
                  <div className="mt-4 px-3">
                    <Button asChild className="w-full">
                      <Link href="/ask" onClick={() => setMobileOpen(false)}>
                        Ask Alma
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarSection {
  id: string;
  label: string;
}

interface GuideSidebarProps {
  sections: SidebarSection[];
}

export function GuideSidebar({ sections }: GuideSidebarProps) {
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="hidden lg:block w-56 flex-shrink-0">
      <div className="sticky top-24">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          On this page
        </p>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

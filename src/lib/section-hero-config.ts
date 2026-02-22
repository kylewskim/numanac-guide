export interface SectionHeroConfig {
  eyebrow?: string;
  title: string;
  description: string;
}

export const SECTION_HERO_CONFIG: Record<string, SectionHeroConfig> = {
  "/": {
    eyebrow: "Official Numanac Guide",
    title: "Start quickly with step-by-step guidance",
    description: "Follow practical guides to set up your farm and log work with confidence.",
  },
  "/guides": {
    title: "Feature Guides",
    description: "Explore practical step-by-step guidance for every core Numanac feature.",
  },
  "/guides/map": {
    title: "Map & Boundaries",
    description:
      "Draw your farm boundaries on the map, organize fields into tracts, and navigate the map with confidence.",
  },
  "/guides/logging": {
    title: "Activity Logging",
    description:
      "Record what happens on your farm every day using voice or text. Alma structures your logs automatically.",
  },
  "/guides/tasks": {
    title: "Task Management",
    description:
      "Plan future work, assign owners, and track progress from one place.",
  },
  "/guides/alma": {
    title: "Alma AI Assistant",
    description:
      "Ask questions about your farm data, get summaries, and generate practical insights quickly.",
  },
  "/guides/team": {
    title: "Team & Collaboration",
    description:
      "Invite teammates, assign roles, and control access to each farm workspace.",
  },
  "/guides/settings": {
    title: "Settings",
    description:
      "Manage account profile, billing, notifications, and farm preferences in one place.",
  },
  "/guides/weather": {
    title: "Weather",
    description:
      "Check local conditions and forecasts to plan work around wind, rain, and temperature.",
  },
  "/guides/install": {
    title: "Add to Home Screen",
    description:
      "Install Numanac on iPhone or Android so it opens like a native app.",
  },
  "/getting-started/*": {
    title: "Getting Started",
    description:
      "Set up your account, choose a plan, and configure your farm in a few simple steps.",
  },
  "/videos": {
    title: "Video Tutorials",
    description:
      "We are recording step-by-step video tutorials for every Numanac feature.",
  },
  "/faq": {
    title: "Frequently Asked Questions",
    description:
      "Find quick answers about setup, map, records, tasks, Alma, team access, and support.",
  },
};

export const SECTION_HERO_FALLBACK: SectionHeroConfig = {
  title: "Numanac Guide",
  description: "Step-by-step help to use Numanac with confidence.",
};

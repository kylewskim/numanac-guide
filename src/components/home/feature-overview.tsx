import { Map, BookOpen, CheckSquare, Bot } from "lucide-react";

const features = [
  {
    value: "map",
    icon: Map,
    title: "Map & Boundaries",
    description: "Draw your farm boundaries on the map and organize them into fields and tracts.",
    color: "bg-blue-50 text-blue-600",
    bullets: [
      "Draw field boundaries by tapping points on the map",
      "Group multiple fields into tracts",
      "View NDVI vegetation health layers",
    ],
  },
  {
    value: "logging",
    icon: BookOpen,
    title: "Record Logging",
    description: "Record everything that happens on your farm — just speak naturally.",
    color: "bg-primary/10 text-primary",
    bullets: [
      "Press the mic button and speak naturally",
      "Alma transcribes and categorizes your record automatically",
      "Attach photos and translate to other languages",
    ],
  },
  {
    value: "tasks",
    icon: CheckSquare,
    title: "Task Management",
    description: "Plan upcoming work and assign tasks to your team members.",
    color: "bg-purple-50 text-purple-600",
    bullets: [
      "Create tasks by speaking in future tense",
      "Set due dates and assign to team members",
      "Track progress and mark complete",
    ],
  },
  {
    value: "alma",
    icon: Bot,
    title: "Alma AI Assistant",
    description: "Ask Alma anything about your farm — it knows your data.",
    color: "bg-emerald-50 text-emerald-600",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.value} className="p-6 rounded-2xl bg-white border border-gray-100">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{f.description}</p>
                <ul className="space-y-2">
                  {f.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gray-300 mt-0.5 flex-shrink-0">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

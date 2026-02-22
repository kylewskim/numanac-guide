import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";

export const metadata: Metadata = {
  title: "Map & Boundaries Guide",
  description: "Learn how to draw field boundaries, create tracts, and use map layers in Numanac.",
};

const sections = [
  { id: "overview", label: "Understanding the Map" },
  { id: "field", label: "Drawing Field Boundaries" },
  { id: "tract", label: "Creating Tracts" },
  { id: "switch-view", label: "Switching Map View" },
];

export default function MapGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="flex gap-12">
        <GuideSidebar sections={sections} />

        <div className="flex-1 min-w-0 max-w-2xl space-y-16">
          {/* Overview */}
          <section>
            <SectionHeader
              id="overview"
              title="Understanding the Map Screen"
              subtitle="When you open Numanac, this is the main map UI. The numbered points show what each area does."
            />

            {/* Annotated image */}
            <div className="mb-5">
              <Image
                src="/screenshots/map/map-screen-annotated.png"
                alt="Numanac map screen with numbered UI callouts"
                width={1800}
                height={1200}
                className="w-full h-auto"
                style={{ borderRadius: 16, border: "1px solid rgba(0,0,0,0.10)" }}
              />
            </div>

            {/* 3×2 → 2×3 → 1×6 callout grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { num: "1", bg: "#0051FF", title: "Top bar", desc: "Shows your current farm and quick status info like weather and pending tasks." },
                { num: "2", bg: "#00D458", title: "Map area", desc: "Your main working area. Pan and zoom to inspect fields and boundaries." },
                { num: "3", bg: "#111827", title: "Layer button", desc: "Open layers and switch view mode between Field and Tract." },
                { num: "4", bg: "#111827", title: "Mic button", desc: "Press and hold to quickly log a record with your voice." },
                { num: "5", bg: "#111827", title: "+ button", desc: "Create a new Field or Tract directly from the map." },
                { num: "6", bg: "#FF5E00", title: "Bottom tabs", desc: "Move between Map, Logs, Alma, Alerts, and Settings." },
              ].map((item) => (
                <div key={item.num} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span
                      className="w-5 h-5 rounded-md text-white text-[10px] font-bold flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: item.bg }}
                    >
                      {item.num}
                    </span>
                    <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-[30px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Drawing Fields */}
          <section>
            <SectionHeader
              id="field"
              title="Drawing Field Boundaries"
              subtitle='A "Field" is a single area of land — a paddock, a plot, a greenhouse. Draw its boundary on the map.'
              badge="About 3–5 minutes"
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title='Tap the "+" button'
                description="You'll find the + button in the bottom-right corner of the map screen."
                placeholder="numanac-map-plus-button.png"
              />
              <StepCard
                step={2}
                title='Tap "Field"'
                description="In the menu that appears, tap Field to start field boundary creation."
                placeholder="numanac-map-add-menu.png"
              />
              <StepCard
                step={3}
                title="Tap points around your field"
                description="Tap each corner of your field on the map to place markers. To finish, tap the first corner again or tap Confirm. After that, you can pick a color and fine-tune the shape by moving vertices for precise placement."
                placeholder="numanac-map-draw-boundary.png"
              />
              <StepCard
                step={4}
                title="Name your field"
                description='Tap "Next", type a name for the field (e.g. "North Pasture", "Tomato Plot 2"), then tap "Continue".'
                placeholder="numanac-map-name-field.png"
              />
              <StepCard
                step={5}
                title="Done!"
                description="Done. Your field now appears on the map. Tap it anytime to view details or log activities."
                placeholder="numanac-map-fields-complete.png"
              />
            </div>

            <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Tips</p>
              <ul className="space-y-1.5">
                <li className="text-sm text-gray-700">You need at least 3 points to create a boundary.</li>
                <li className="text-sm text-gray-700">Fields cannot intersect each other. Keep boundaries separated.</li>
                <li className="text-sm text-gray-700">
                  You can create a hierarchy by drawing a field inside another field as a sub-boundary (subfield).
                  <Link href="#sub-boundary-note" className="ml-1 text-primary underline underline-offset-2">
                    We&apos;ll cover this in more detail next.
                  </Link>
                </li>
                <li className="text-sm text-gray-700">
                  Already have a shapefile (.shp)? Tap + and select Upload to auto-create boundaries.
                </li>
              </ul>
            </div>
          </section>

          {/* Tracts */}
          <section>
            <SectionHeader
              id="tract"
              title="Creating Tracts"
              subtitle='A Tract is a group of multiple Fields — useful for organizing large farms with many separate areas.'
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title='Tap "+" then "Tract"'
                description="From the map, tap + and choose Tract."
                placeholder="numanac-map-add-tract.png"
              />
              <StepCard
                step={2}
                title="Select fields for your tract"
                description="When Select fields for your tract appears, choose the fields you want to include."
                placeholder="numanac-map-tract-select.png"
              />
              <StepCard
                step={3}
                title="Enter Tract information"
                description='Set the Tract name and, if needed, enter an ID.'
                placeholder="numanac-map-tract-info.png"
              />
              <StepCard
                step={4}
                title="Pick a tract color"
                description="Choose a color so this tract is easy to identify on the map."
                placeholder="numanac-map-tract-color.png"
              />
              <StepCard
                step={5}
                title='Tap "Complete"'
                description="Your tract is created and applied to the selected fields."
                tip="Tracts help you filter records and tasks by area, especially on larger farms."
                placeholder="numanac-map-tract-complete.png"
              />
            </div>
          </section>

          {/* Switch View */}
          <section id="sub-boundary-note">
            <SectionHeader
              id="switch-view"
              title="Switching Between Field View and Tract View"
              subtitle="You can change map view mode anytime from the Layers panel."
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Tap the Layers button on the map"
                description="Open the map options panel from the layer icon."
                placeholder="numanac-map-layers-menu.png"
              />
              <StepCard
                step={2}
                title="Choose Field View or Tract View"
                description="Tap the view mode you want."
                placeholder="numanac-map-view-select.png"
              />
              <StepCard
                step={3}
                title="View transitions automatically"
                description="The map switches to your selected view mode right away."
                placeholder="numanac-map-view-result.png"
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";
import { FeatureCard } from "@/components/guide/feature-card";
import { Map, Layers, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Map & Boundaries Guide",
  description: "Learn how to draw field boundaries, create tracts, and use map layers in Numanac.",
};

const sections = [
  { id: "overview", label: "Understanding the Map" },
  { id: "field", label: "Drawing Field Boundaries" },
  { id: "tract", label: "Creating Tracts" },
  { id: "switch-view", label: "Switching Map View" },
  { id: "layers", label: "Map Layers" },
];

export default function MapGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
            <Map className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-gray-500">Feature Guide</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Map & Boundaries</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Draw your farm boundaries on the map, organize fields into tracts, and use
          satellite layers to monitor crop health.
        </p>
      </div>

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
            <div className="space-y-5">
              <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-3 sm:p-4">
                <Image
                  src="/screenshots/map/map-overview.png"
                  alt="Numanac map screen UI overview"
                  width={1200}
                  height={780}
                  className="w-full h-auto rounded-xl border border-gray-200"
                />

                {[
                  { num: "1", pos: "top-[8%] left-[50%] -translate-x-1/2" },
                  { num: "2", pos: "top-[46%] left-[52%] -translate-x-1/2 -translate-y-1/2" },
                  { num: "3", pos: "top-[50%] right-[6%] -translate-y-1/2" },
                  { num: "4", pos: "bottom-[18%] left-[50%] -translate-x-1/2" },
                  { num: "5", pos: "bottom-[18%] right-[8%]" },
                  { num: "6", pos: "bottom-[6%] left-[50%] -translate-x-1/2" },
                ].map((item) => (
                  <div
                    key={item.num}
                    className={`absolute ${item.pos} w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center shadow-sm`}
                  >
                    {item.num}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { num: "1", title: "Top bar", desc: "Shows your current farm and quick status info like weather." },
                  { num: "2", title: "Map area", desc: "Your main working area. Pan and zoom to inspect fields." },
                  { num: "3", title: "Layer button", desc: "Open layers and switch view mode (Field / Tract)." },
                  { num: "4", title: "Mic button", desc: "Press and hold to quickly log a record with voice." },
                  { num: "5", title: "+ button", desc: "Create a new Field or Tract." },
                  { num: "6", title: "Bottom tabs", desc: "Move between Map, Records, Chat, and Settings." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-semibold flex-shrink-0 flex items-center justify-center mt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                image="/screenshots/map/map-clean.png"
                imageAlt="Map screen showing the + button in the bottom-right corner"
              />
              <StepCard
                step={2}
                title='Tap "Field"'
                description="In the menu that appears, tap Field to start field boundary creation."
                image="/screenshots/map/map-add-menu.png"
                imageAlt="Add menu showing Field and Tract options"
              />
              <StepCard
                step={3}
                title="Tap points around your field"
                description="Tap each corner of your field on the map to place markers. To finish, tap the first corner again or tap Confirm. After that, you can pick a color and fine-tune the shape by moving vertices for precise placement."
                media={
                  <video
                    src="/videos/map/field-boundary-drawing.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    controls={false}
                    className="w-full h-auto pointer-events-none select-none"
                  />
                }
              />
              <StepCard
                step={4}
                title="Name your field"
                description='Tap "Next", type a name for the field (e.g. "North Pasture", "Tomato Plot 2"), then tap "Continue".'
              />
              <StepCard
                step={5}
                title="Done!"
                description="Done. Your field now appears on the map. Tap it anytime to view details or log activities."
                image="/screenshots/map/map-overview.png"
                imageAlt="Map overview showing field boundaries"
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
                image="/screenshots/map/map-add-menu.png"
                imageAlt="Add menu showing Field and Tract options"
              />
              <StepCard
                step={2}
                title="Select fields for your tract"
                description="When Select fields for your tract appears, choose the fields you want to include."
              />
              <StepCard
                step={3}
                title="Enter Tract information"
                description='Set the Tract name and, if needed, enter an ID.'
              />
              <StepCard
                step={4}
                title="Pick a tract color"
                description="Choose a color so this tract is easy to identify on the map."
              />
              <StepCard
                step={5}
                title='Tap "Complete"'
                description="Your tract is created and applied to the selected fields."
                tip="Tracts help you filter records and tasks by area, especially on larger farms."
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
                image="/screenshots/map/map-layers-menu.png"
                imageAlt="Layers menu on the map screen"
              />
              <StepCard
                step={2}
                title="Choose Field View or Tract View"
                description="Tap the view mode you want."
              />
              <StepCard
                step={3}
                title="View transitions automatically"
                description="The map switches to your selected view mode right away."
              />
            </div>
          </section>

          {/* Layers */}
          <section>
            <SectionHeader
              id="layers"
              title="Map Layers"
              subtitle="Turn on data layers to see more information overlaid on your map."
            />
            <div className="mb-6 rounded-xl overflow-hidden border bg-gray-50 max-w-sm">
              <Image
                src="/screenshots/map/map-layers-menu.png"
                alt="Map layers menu"
                width={720}
                height={1400}
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard
                icon={Layers}
                title="NDVI (Vegetation Index)"
                description="Shows crop health using a green-to-red color scale. Green = healthy, red = stressed. Useful for spotting problem areas early."
              />
              <FeatureCard
                icon={Palette}
                title="Irrigation Sensors"
                description="Displays the location of irrigation systems installed on your farm. Tap a sensor to see its current status."
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

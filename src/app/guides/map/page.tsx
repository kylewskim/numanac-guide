import type { Metadata } from "next";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";
import { TipBox } from "@/components/guide/tip-box";
import { FeatureCard } from "@/components/guide/feature-card";
import { Map, Layers, Upload, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Map & Boundaries Guide",
  description: "Learn how to draw field boundaries, create tracts, and use map layers in Numanac.",
};

const sections = [
  { id: "overview", label: "Understanding the Map" },
  { id: "field", label: "Drawing Field Boundaries" },
  { id: "tract", label: "Creating Tracts" },
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
              subtitle="When you open Numanac, the map is the first thing you see. Here's what everything does."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: "①", title: "Top bar", desc: "Shows the current farm name and today's weather." },
                { num: "②", title: "Map area", desc: "Satellite view of your land. Pinch to zoom, drag to move." },
                { num: "③", title: "Layer button", desc: "Switch between map views and turn on data layers." },
                { num: "④", title: "Mic button", desc: "Press and hold to speak — logs an activity with Alma." },
                { num: "⑤", title: "+ button", desc: "Create a new field, tract, or pin on the map." },
                { num: "⑥", title: "Bottom tabs", desc: "Navigate between Map, Records, Chat, and Settings." },
              ].map((item) => (
                <div key={item.num} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-xl font-bold text-primary flex-shrink-0">{item.num}</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
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
                image="/screenshots/map/map-clean.png"
                imageAlt="Map screen showing the + button in the bottom-right corner"
              />
              <StepCard
                step={2}
                title='Select "Field View"'
                description="In the menu that appears, tap Field View (the square icon) to start drawing a boundary."
                image="/screenshots/map/map-add-menu.png"
                imageAlt="Add menu showing Field View and Tract View options"
              />
              <StepCard
                step={3}
                title="Tap points around your field"
                description="Tap each corner of your field on the map to place markers. The app will draw lines between them to form the boundary."
                image="/screenshots/map/map-draw-boundary.png"
                imageAlt="Map in boundary drawing mode"
                tip="You need at least 3 points to create a boundary."
              />
              <StepCard
                step={4}
                title='Tap "Confirm"'
                description='Tap the black "Confirm" button to lock in your shape. You can then drag individual points to fine-tune the boundary.'
              />
              <StepCard
                step={5}
                title="Choose a color"
                description='Tap the "Color" button to pick a color for this field. Different colors make it easy to tell fields apart on the map.'
              />
              <StepCard
                step={6}
                title="Name your field"
                description='Tap "Next", type a name for the field (e.g. "North Pasture", "Tomato Plot 2"), then tap "Continue".'
              />
              <StepCard
                step={7}
                title="Done!"
                description="Your field boundary now appears on the map. You can tap on it anytime to view its details or log activities for it."
                image="/screenshots/map/map-overview.png"
                imageAlt="Map overview showing field boundaries"
              />
            </div>

            <TipBox className="mt-4">
              Already have a shapefile (.shp)? Tap the + button and select &quot;Upload&quot; to automatically create boundaries from your file.
            </TipBox>
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
                title='Tap "+" → "Tract View"'
                description="From the map, tap the + button and select Tract View."
                image="/screenshots/map/map-add-menu.png"
                imageAlt="Add menu showing Field View and Tract View options"
              />
              <StepCard
                step={2}
                title="Draw the outer boundary"
                description="Tap around the outer edge of all the fields you want to group together."
              />
              <StepCard
                step={3}
                title="Name the tract"
                description='Give the tract a name like "North Farm" or "Irrigation Zone A", then save.'
                tip="Tracts help you filter records and tasks by area — great for large operations."
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
              <img
                src="/screenshots/map/map-layers-menu.png"
                alt="Map layers menu"
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

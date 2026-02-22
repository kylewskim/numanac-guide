import type { Metadata } from "next";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Activity Logging Guide",
  description: "Learn how to log farm activities using voice or text in Numanac.",
};

const sections = [
  { id: "voice", label: "Voice Logging (Recommended)" },
  { id: "text", label: "Text Logging" },
  { id: "editing", label: "Editing a Record" },
  { id: "translation", label: "Translation Feature" },
];

export default function LoggingGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="flex gap-12 justify-center lg:justify-start">
        <GuideSidebar sections={sections} />

        <div className="w-full min-w-0 max-w-2xl space-y-16">
          {/* Voice vs Text */}
          <section id="voice">
            <SectionHeader
              id="voice"
              title="Logging an Activity"
              subtitle="Choose how you want to record — voice is the fastest and most natural option."
            />

            <Tabs defaultValue="voice">
              <TabsList className="mb-6">
                <TabsTrigger value="voice" className="gap-2">
                  <Mic className="w-4 h-4" /> Voice (Recommended)
                </TabsTrigger>
                <TabsTrigger value="text" className="gap-2">
                  <PenLine className="w-4 h-4" /> Text
                </TabsTrigger>
              </TabsList>

              <TabsContent value="voice">
                <div className="space-y-0">
                  <StepCard
                    step={1}
                    title="Find the green microphone button"
                    description="The mic button is at the bottom center of every screen. It's the large green circle with a microphone icon."
                    placeholder="numanac-logging-mic-button.png"
                  />
                  <StepCard
                    step={2}
                    title="Press and hold the mic button while speaking"
                    description="Hold the button and speak naturally, just like you'd tell someone what you did on the farm."
                    placeholder="numanac-logging-voice-hold.png"
                    examples={[
                      "Applied herbicide to field 3 today",
                      "Fed 50 cattle in the north paddock",
                      "Completed irrigation on the tomato plots",
                    ]}
                  />
                  <StepCard
                    step={3}
                    title="Release the button"
                    description="When you let go, Alma processes your speech and turns it into a structured record. This takes just a few seconds."
                    placeholder="numanac-logging-voice-release.png"
                  />
                  <StepCard
                    step={4}
                    title="Review and adjust"
                    description="Alma shows you what it recorded. Check the date, location, and any other details. Edit anything that needs correcting."
                    placeholder="numanac-logging-voice-review.png"
                  />
                  <StepCard
                    step={5}
                    title='Tap "Save"'
                    description="That's it! Your activity is saved and linked to your farm records."
                    tip="Alma learns from context — if you're viewing a specific field, it will automatically link the record to that field."
                    placeholder="numanac-logging-voice-save.png"
                  />
                </div>
              </TabsContent>

              <TabsContent value="text" id="text">
                <div className="space-y-0">
                  <StepCard
                    step={1}
                    title="Open the Records tab"
                    description='Tap the "Records" tab at the bottom of the screen.'
                    placeholder="numanac-logging-records-tab.png"
                  />
                  <StepCard
                    step={2}
                    title='Tap the "+" button'
                    description="Tap the + button in the top-right corner to create a new record manually."
                    placeholder="numanac-logging-text-plus.png"
                  />
                  <StepCard
                    step={3}
                    title="Type your activity description"
                    description="Write what happened in your own words. Alma will still help organize and categorize the information."
                    placeholder="numanac-logging-text-describe.png"
                    examples={[
                      "Sprayed fungicide on the east vineyard",
                      "Moved cattle to paddock 4",
                      "Repaired fencing on the south boundary",
                    ]}
                  />
                  <StepCard
                    step={4}
                    title="Fill in additional details"
                    description="Set the date, location, assigned team member, and any other relevant information."
                    placeholder="numanac-logging-text-details.png"
                  />
                  <StepCard
                    step={5}
                    title='Tap "Save"'
                    description="Your record is now saved to your farm history."
                    placeholder="numanac-logging-text-save.png"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Editing */}
          <section>
            <SectionHeader
              id="editing"
              title="Editing a Record"
              subtitle="You can modify any record after saving it."
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Find the record"
                description='Go to the Records tab and scroll to find the entry, or use the search bar.'
                placeholder="numanac-logging-records-list.png"
              />
              <StepCard
                step={2}
                title="Tap the record to open it"
                description="Tap on the record to open the full details view."
                placeholder="numanac-logging-edit-open.png"
              />
              <StepCard
                step={3}
                title="Edit any field"
                description="Tap on any field you want to change — date, location, description, attached files, or assignee."
                placeholder="numanac-logging-edit-field.png"
              />
              <StepCard
                step={4}
                title='Save your changes'
                description='Tap "Save" to confirm your edits.'
                placeholder="numanac-logging-edit-save.png"
              />
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "①", label: "Record / Task tab", desc: "Switch between a completed activity (Record) and a planned task." },
                { icon: "②", label: "Location", desc: "Which farm or field this activity happened at." },
                { icon: "③", label: "Date & Time", desc: "When the activity took place." },
                { icon: "④", label: "Assignee", desc: "Team member responsible (for tasks)." },
                { icon: "⑤", label: "AI Summary", desc: "Alma's generated summary of the activity." },
                { icon: "⑥", label: "Attachments", desc: "Photos or documents related to this record." },
              ].map((item) => (
                <div key={item.icon} className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-lg font-bold text-primary flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Translation */}
          <section>
            <SectionHeader
              id="translation"
              title="Multilingual Translation"
              subtitle="Translate any record into another language — useful when working with staff who speak different languages."
              badge="Pro tip"
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Open the record"
                description="Find and open any saved record."
                placeholder="numanac-logging-translate-open.png"
              />
              <StepCard
                step={2}
                title='Tap the globe (🌐) icon'
                description="The translate icon is in the record toolbar."
                placeholder="numanac-logging-translate-globe.png"
              />
              <StepCard
                step={3}
                title="Select a language"
                description="Choose the language you want to translate to (e.g. Spanish, Portuguese, English)."
                placeholder="numanac-logging-translate-select.png"
              />
              <StepCard
                step={4}
                title='Tap "Translate" and save'
                description="The translation is added to the record. Both the original and translated versions are saved."
                tip="This is especially useful for farms with multilingual teams — a supervisor can log in English while workers read in Spanish."
                placeholder="numanac-logging-translate-save.png"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

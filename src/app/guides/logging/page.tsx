import type { Metadata } from "next";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, PenLine, Zap, ClipboardList } from "lucide-react";
import { TipBox } from "@/components/guide/tip-box";

export const metadata: Metadata = {
  title: "Record Logging Guide",
  description: "Learn how to log farm activities using voice or text in Numanac.",
};

const sections = [
  { id: "difference", label: "Records vs Tasks" },
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
          {/* Records vs Tasks */}
          <section>
            <SectionHeader
              id="difference"
              title="Records vs. Tasks — What's the Difference?"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl border-2 border-primary/30 bg-primary/5">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-bold text-gray-900">Record</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Something you <strong>already did</strong>. Logged in the past tense.
                </p>
                <p className="text-xs text-gray-400 mt-2 italic">
                  Example: &quot;I sprayed herbicide on field 3 this morning.&quot;
                </p>
              </div>
              <div className="p-5 rounded-xl border-2 border-purple-200 bg-purple-50 opacity-40">
                <div className="flex items-center gap-2 mb-3">
                  <ClipboardList className="w-5 h-5 text-purple-600" />
                  <span className="font-bold text-gray-900">Task</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Something you <strong>plan to do</strong>. Created in future tense.
                </p>
                <p className="text-xs text-gray-400 mt-2 italic">
                  Example: &quot;Irrigate the north field tomorrow morning.&quot;
                </p>
              </div>
            </div>
            <TipBox>
              Alma automatically detects whether you&apos;re describing something completed (Record) or something planned (Task) based on your language.
            </TipBox>
          </section>

          {/* Voice vs Text */}
          <section id="voice">
            <SectionHeader
              id="voice"
              title="Logging a Record"
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
                    title="Tap the green microphone button"
                    description="The mic button is at the bottom center of every screen. Tap it once — the recording screen will open."
                    placeholder="numanac-logging-mic-button.png"
                  />
                  <StepCard
                    step={2}
                    title="Set your logging language (optional)"
                    description="In the recording screen, you can select the language you'll be speaking in. This helps Alma transcribe your voice more accurately. If you skip this, it will default to your app language."
                    placeholder="numanac-logging-lang-select.png"
                  />
                  <StepCard
                    step={3}
                    title="Speak your record"
                    description="Speak naturally, just like you'd tell someone what you did on the farm."
                    placeholder="numanac-logging-voice-hold.png"
                    examples={[
                      "Applied herbicide to field 3 today",
                      "Fed 50 cattle in the north paddock",
                      "Completed irrigation on the tomato plots",
                    ]}
                  />
                  <StepCard
                    step={4}
                    title="Tap the green stop button to finish"
                    description="When you're done speaking, tap the green stop button in the center of the screen. Alma will process your speech and turn it into a structured record."
                    placeholder="numanac-logging-voice-release.png"
                  />
                  <StepCard
                    step={5}
                    title="Review and adjust"
                    description="Alma shows you what it recorded. Check the date, location, and any other details. Edit anything that needs correcting."
                    tip="Alma automatically detects whether you described something completed (Record) or planned (Task) based on your words. If the tab looks wrong, you can switch it manually."
                    placeholder="numanac-logging-voice-review.png"
                  />
                  <StepCard
                    step={6}
                    title='Tap "Save"'
                    description="That's it! Your record is saved and linked to your farm history."
                    tip="Alma learns from context — if you're viewing a specific field, it will automatically link the record to that field."
                    // placeholder="numanac-logging-voice-save.png"
                  />
                </div>
              </TabsContent>

              <TabsContent value="text" id="text">
                <div className="space-y-0">
                  <StepCard
                    step={1}
                    title="Tap the green microphone button"
                    description="The mic button is at the bottom center of every screen. Tap it once — the recording screen will open."
                    placeholder="numanac-logging-mic-button.png"
                  />
                  <StepCard
                    step={2}
                    title='Tap "Log Manually"'
                    description='Tap the "Log Manually" button in the center of the recording screen to switch to text input mode.'
                    placeholder="numanac-logging-text-plus.png"
                  />
                  <StepCard
                    step={3}
                    title="Type your record/task description"
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
                    // placeholder="numanac-logging-text-details.png"
                  />
                  <StepCard
                    step={5}
                    title='Tap "Save"'
                    description="Your record is now saved to your farm history."
                    // placeholder="numanac-logging-text-save.png"
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
                title="Find and open the record"
                description="Go to the Records tab and scroll to find the entry, or use the search bar. Tap the record to open its full detail view."
                placeholder="numanac-logging-records-list.png"
              />
              <StepCard
                step={2}
                title="Tap the edit button"
                description="In the record detail view, tap the edit button to enter edit mode."
                placeholder="numanac-logging-edit-open.png"
              />
              <StepCard
                step={3}
                title="Edit any field"
                description="Tap on any field you want to change — date, location, description, attached files, or assignee."
                placeholder="numanac-logging-edit-field.png"
              />
            </div>

            {/* Field callout grid — aligned to image width */}
            <div className="ml-12 md:ml-14 mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { num: "1", label: "Record / Task tab", desc: "Switch between a record and a task." },
                { num: "2", label: "Location", desc: "Which farm or field this record is from." },
                { num: "3", label: "Date & Time", desc: "When this record took place." },
                { num: "4", label: "Assignee", desc: "Team member responsible (for tasks)." },
                { num: "5", label: "AI Summary", desc: "Alma's generated summary of this record." },
                { num: "6", label: "Attachments", desc: "Photos or documents related to this record." },
              ].map((item) => (
                <div key={item.num} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span
                      className="w-5 h-5 rounded-md bg-gray-200 text-gray-600 text-[10px] font-bold flex-shrink-0 flex items-center justify-center"
                    >
                      {item.num}
                    </span>
                    <p className="font-medium text-gray-900 text-sm">{item.label}</p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-[30px]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-0">
              <StepCard
                step={4}
                title='Save your changes'
                description='Tap "Save" to confirm your edits.'
                // placeholder="numanac-logging-edit-save.png"
              />
            </div>
          </section>

          {/* Translation */}
          <section>
            <SectionHeader
              id="translation"
              title="Translation & Language Settings"
              subtitle="You can set the logging language before you record, or translate a completed record at any time after saving."
            />

            {/* During Logging */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">During Logging</p>
            <p className="text-sm text-gray-500 mb-5">When you open the recording screen, you can select the language you&apos;ll be speaking in. This is the <span className="font-medium text-gray-700">logging language</span> — it tells Alma which language to transcribe, so your words are captured accurately.</p>
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Tap the mic button to open the recording screen"
                description="The recording screen appears as soon as you tap the mic button."
                placeholder="numanac-logging-lang-open.png"
              />
              <StepCard
                step={2}
                title="Tap the language selector"
                description="Find the language option on the recording screen and tap it to choose the language you'll be speaking in."
                placeholder="numanac-logging-lang-select.png"
              />
              <StepCard
                step={3}
                title="Proceed with your recording"
                description="Continue speaking as usual. Alma will transcribe your voice using the selected language."
                // placeholder="numanac-logging-lang-proceed.png"
              />
            </div>

            <div className="my-8 border-t border-gray-100" />

            {/* After Saving */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">After Saving</p>
            <p className="text-sm text-gray-500 mb-5">You can also translate any saved record into a different language. This is separate from the logging language — it lets teammates who speak other languages read the same record.</p>
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Open a saved record"
                description="Find and open any record from the Records tab."
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
                title="Select a target language"
                description="Choose the language you want to translate the record into (e.g. Spanish, Portuguese, English)."
                placeholder="numanac-logging-translate-select.png"
              />
              <StepCard
                step={4}
                title='Tap "Translate" and save'
                description="The translation is added to the record. Both the original and translated versions are saved."
                tip="Useful for multilingual teams — a supervisor logs in English while workers can read the same record in Spanish."
                placeholder="numanac-logging-translate-save.png"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

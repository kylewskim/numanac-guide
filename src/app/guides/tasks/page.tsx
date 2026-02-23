import type { Metadata } from "next";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";
import { TipBox } from "@/components/guide/tip-box";
import { Zap, ClipboardList } from "lucide-react";

export const metadata: Metadata = {
  title: "Task Management Guide",
  description: "Plan upcoming work and assign tasks to team members in Numanac.",
};

const sections = [
  { id: "difference", label: "Records vs Tasks" },
  { id: "creating", label: "Creating a Task" },
  { id: "tracking", label: "Tracking Progress" },
  { id: "assigning", label: "Assigning to Team" },
];

export default function TasksGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="flex gap-12 justify-center lg:justify-start">
        <GuideSidebar sections={sections} />

        <div className="w-full min-w-0 max-w-2xl space-y-16">
          {/* Difference */}
          <section>
            <SectionHeader
              id="difference"
              title="Records vs. Tasks — What's the Difference?"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl border-2 border-primary/30 bg-primary/5 opacity-40">
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
              <div className="p-5 rounded-xl border-2 border-purple-200 bg-purple-50">
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

          {/* Creating */}
          <section>
            <SectionHeader
              id="creating"
              title="Creating a Task"
              subtitle="The easiest way is with voice — just say what needs to be done."
              badge="Most common method"
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Tap the green microphone button"
                description="The mic button is at the bottom center of every screen. Tap it once — the recording screen will open."
                placeholder="numanac-tasks-create-mic.png"
              />
              <StepCard
                step={2}
                title="Speak your task in the future tense"
                description="Describe what needs to be done. Using future-tense language tells Alma this is a planned task, not something already completed."
                placeholder="numanac-tasks-create-speak.png"
                examples={[
                  "Irrigate the north field tomorrow morning",
                  "Fix the fence on the south paddock by Friday",
                  "Spray fungicide on the vineyard next Tuesday",
                ]}
              />
              <StepCard
                step={3}
                title="Tap the green stop button to finish"
                description="Alma will process your speech and classify it as a Task automatically."
                placeholder="numanac-tasks-create-classified.png"
              />
              <StepCard
                step={4}
                title="Review the task details"
                description="Check the due date Alma inferred from your speech (e.g. 'tomorrow' → tomorrow's date). Update the location and any other fields if needed."
                placeholder="numanac-tasks-create-review.png"
              />
              <StepCard
                step={5}
                title='Tap "Save"'
                description="The task is now in your task list, ready to be tracked and completed."
                // placeholder="numanac-tasks-create-save.png"
              />
            </div>
          </section>

          {/* Tracking */}
          <section>
            <SectionHeader
              id="tracking"
              title="Tracking Task Progress"
              subtitle="Keep your task list up to date as work gets done."
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Open the task"
                description="Tap the Logs tab, then tap the Tasks button to switch to the task list. Tap on any task to open it."
                placeholder="numanac-tasks-track-open.png"
              />
              <StepCard
                step={2}
                title="Log progress"
                description='Tap "Log Progress" to add an update — you can use voice or text to describe what has been done so far.'
                placeholder="numanac-tasks-track-progress.png"
              />
              <StepCard
                step={3}
                title="Mark complete when done"
                description='When the task is fully finished, tap "Mark Complete". The task moves to your completed records.'
                placeholder="numanac-tasks-track-complete.png"
              />
            </div>
          </section>

          {/* Assigning */}
          <section>
            <SectionHeader
              id="assigning"
              title="Assigning Tasks to Team Members"
              subtitle="If you have team members, you can assign tasks directly to them."
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Open the task's edit screen"
                description="Create a new task, or open an existing one and tap the edit button to enter edit mode."
                // placeholder="numanac-tasks-assign-open.png"
              />
              <StepCard
                step={2}
                title="Tap the Assignee field"
                description='If no assignee has been set, tap "Add Assignee". If one is already assigned, tap the assignee field to change it.'
                placeholder="numanac-tasks-assign-button.png"
              />
              <StepCard
                step={3}
                title="Select a team member"
                description="Choose from the list of invited team members."
                placeholder="numanac-tasks-assign-select.png"
              />
              <StepCard
                step={4}
                title="Save"
                description="The assigned team member will receive a notification about the task."
                tip="Only team members with the Recordkeeper role or higher can be assigned tasks."
                // placeholder="numanac-tasks-assign-save.png"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

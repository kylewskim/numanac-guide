import type { Metadata } from "next";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";
import { TipBox } from "@/components/guide/tip-box";
import { WarningBox } from "@/components/guide/warning-box";
import { CheckSquare, Zap, ClipboardList } from "lucide-react";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
            <CheckSquare className="w-5 h-5 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-gray-500">Feature Guide</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Task Management</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Plan upcoming work, set deadlines, and keep your team organized.
          Alma automatically distinguishes between completed activities and future tasks.
        </p>
      </div>

      <div className="flex gap-12">
        <GuideSidebar sections={sections} />

        <div className="flex-1 min-w-0 max-w-2xl space-y-16">
          {/* Difference */}
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
                title="Press and hold the mic button"
                description="Speak in the future tense to describe a task that needs to be completed."
                examples={[
                  "Irrigate the north field tomorrow morning",
                  "Fix the fence on the south paddock by Friday",
                  "Spray fungicide on the vineyard next Tuesday",
                ]}
              />
              <StepCard
                step={2}
                title="Alma classifies it as a Task automatically"
                description='Because you used future-tense language, Alma recognizes this as a planned task and switches to the "Task" tab automatically.'
              />
              <StepCard
                step={3}
                title="Review the task details"
                description="Check the due date Alma inferred from your speech (e.g. 'tomorrow' → tomorrow's date). Update the location and any other fields if needed."
              />
              <StepCard
                step={4}
                title='Tap "Save"'
                description="The task is now in your task list, ready to be tracked and completed."
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
                description="Go to the Records tab, switch to Tasks view, and tap on a task to open it."
              />
              <StepCard
                step={2}
                title="Log progress"
                description='Tap "Log Progress" to add an update — you can use voice or text to describe what has been done so far.'
              />
              <StepCard
                step={3}
                title="Mark complete when done"
                description='When the task is fully finished, tap "Mark Complete". The task moves to your completed records.'
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
                title="Open the task"
                description="Create a new task or open an existing one."
              />
              <StepCard
                step={2}
                title='Tap "Add Assignee"'
                description="In the task detail screen, tap the Assignee field."
              />
              <StepCard
                step={3}
                title="Select a team member"
                description="Choose from the list of invited team members."
              />
              <StepCard
                step={4}
                title="Save"
                description="The assigned team member will receive a notification about the task."
                tip="Only team members with the Recordkeeper role or higher can be assigned tasks."
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

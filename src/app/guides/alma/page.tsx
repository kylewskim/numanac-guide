import type { Metadata } from "next";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";
import { FeatureCard } from "@/components/guide/feature-card";
import { MessageCircle, BarChart2, Mic, Globe, FileText, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Alma AI Assistant Guide",
  description: "Learn how to use Alma, Numanac's AI farm assistant, to chat, analyze, and generate reports.",
};

const sections = [
  { id: "intro", label: "What is Alma?" },
  { id: "chat", label: "Chatting with Alma" },
  { id: "focus", label: "Using Focus" },
  { id: "history", label: "Chat History" },
];

export default function AlmaGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="flex gap-12 justify-center lg:justify-start">
        <GuideSidebar sections={sections} />

        <div className="w-full min-w-0 max-w-2xl space-y-16">
          {/* What is Alma */}
          <section>
            <SectionHeader
              id="intro"
              title="What Can Alma Do?"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard
                icon={MessageCircle}
                title="Answer Questions"
                description="Ask anything about how Numanac works, or about your farm's activity history."
              />
              <FeatureCard
                icon={BarChart2}
                title="Analyze Records"
                description="Summarize past activities by field, date range, or crop type."
              />
              <FeatureCard
                icon={Mic}
                title="Transcribe Voice Logs"
                description="Automatically turns your spoken words into structured farm records."
              />
              <FeatureCard
                icon={FileText}
                title="Generate Reports"
                description="Ask Alma to create a farm activity report for any time period."
              />
              <FeatureCard
                icon={Globe}
                title="Translate Records"
                description="Translate activity logs into Spanish, English, Portuguese, and more."
              />
              <FeatureCard
                icon={Target}
                title="Focus Mode"
                description="Restrict Alma's answers to a specific field or date range for targeted insights."
              />
            </div>
          </section>

          {/* Chat */}
          <section>
            <SectionHeader
              id="chat"
              title="Chatting with Alma"
              subtitle="Use the Chat tab in the app to have a conversation with Alma about your farm."
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title='Tap the "Chat" tab'
                description="The Chat tab is in the bottom navigation bar of the app."
                placeholder="numanac-alma-chat-tab.png"
              />
              <StepCard
                step={2}
                title="Type your question or tap the mic to speak"
                description="You can type in any language. Alma will respond in the same language you use."
                placeholder="numanac-alma-chat-query.png"
                examples={[
                  "What happened in field 3 last week?",
                  "How many irrigation records do I have this month?",
                  "Give me a summary of this week's activities",
                  "What's the weather like at my farm today?",
                ]}
              />
              <StepCard
                step={3}
                title="Read Alma's response"
                description="Alma will answer based on your farm's actual data — past records, tasks, and weather."
                tip="The more records you log, the more useful Alma becomes. It learns from your history."
                placeholder="numanac-alma-chat-response.png"
              />
            </div>
          </section>

          {/* Focus */}
          <section>
            <SectionHeader
              id="focus"
              title="Using Focus Mode"
              subtitle="Tell Alma to only look at a specific field or date range when answering."
              badge="Advanced feature"
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title={`Tap "Add Focus" in the Chat screen`}
                description={`You'll see the "Add Focus" button near the top of the chat interface.`}
                placeholder="numanac-alma-focus-modal.png"
              />
              <StepCard
                step={2}
                title="Select a location"
                description="Choose which farm, field, or tract you want Alma to focus on."
                placeholder="numanac-alma-focus-location.png"
              />
              <StepCard
                step={3}
                title="Set a date range"
                description="Optionally set a start and end date to limit Alma's context to that period."
                placeholder="numanac-alma-focus-date.png"
              />
              <StepCard
                step={4}
                title='Tap "Apply"'
                description="A focus badge will appear at the top of the chat. Alma will now only reference data from that scope."
                tip="This is useful when you want to ask: 'What did we do in the north vineyard during harvest season?'"
                placeholder="numanac-alma-focus-apply.png"
              />
            </div>
          </section>

          {/* History */}
          <section>
            <SectionHeader
              id="history"
              title="Managing Chat History"
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="View past conversations"
                description='Tap the clock (🕐) icon in the top-right corner of the Chat screen to see all your previous conversations with Alma.'
                placeholder="numanac-alma-history-list.png"
              />
              <StepCard
                step={2}
                title="Start a new conversation"
                description='Tap the "+" button to start a fresh chat. This keeps your conversations organized by topic.'
                placeholder="numanac-alma-history-new.png"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

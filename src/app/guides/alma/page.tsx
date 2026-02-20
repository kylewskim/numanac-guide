import type { Metadata } from "next";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";
import { TipBox } from "@/components/guide/tip-box";
import { FeatureCard } from "@/components/guide/feature-card";
import { Bot, MessageCircle, BarChart2, Mic, Globe, FileText, History, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Header — special design */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-emerald-50 border border-primary/20 p-8 md:p-12 mb-12">
        <div className="relative z-10 max-w-2xl">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6">
            <Bot className="w-9 h-9 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Meet Alma</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Alma is Numanac&apos;s AI farm assistant. Ask it anything about your farm —
            from what happened last week to generating a full activity report.
          </p>
          <Button asChild>
            <Link href="/ask">Try asking Alma a question →</Link>
          </Button>
        </div>
        {/* Decorative */}
        <div className="absolute right-8 top-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="flex gap-12">
        <GuideSidebar sections={sections} />

        <div className="flex-1 min-w-0 max-w-2xl space-y-16">
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
                image="/screenshots/alma/chat-main.png"
                imageAlt="Chat tab main screen with Alma"
              />
              <StepCard
                step={2}
                title="Type your question or tap the mic to speak"
                description="You can type in any language. Alma will respond in the same language you use."
                image="/screenshots/alma/chat-query-typed.png"
                imageAlt="Chat screen with a question typed in the input field"
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
                image="/screenshots/alma/chat-focus-modal.png"
                imageAlt="Chat screen showing the Add Focus button and focus selection modal"
              />
              <StepCard
                step={2}
                title="Select a location"
                description="Choose which farm, field, or tract you want Alma to focus on."
              />
              <StepCard
                step={3}
                title="Set a date range"
                description="Optionally set a start and end date to limit Alma's context to that period."
              />
              <StepCard
                step={4}
                title='Tap "Apply"'
                description="A focus badge will appear at the top of the chat. Alma will now only reference data from that scope."
                tip="This is useful when you want to ask: 'What did we do in the north vineyard during harvest season?'"
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
              />
              <StepCard
                step={2}
                title="Start a new conversation"
                description='Tap the "+" button to start a fresh chat. This keeps your conversations organized by topic.'
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

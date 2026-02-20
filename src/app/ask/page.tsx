import type { Metadata } from "next";
import { Suspense } from "react";
import { ChatInterface } from "@/components/chat/chat-interface";

export const metadata: Metadata = {
  title: "Ask Alma",
  description: "Chat with Alma, Numanac's AI assistant, to get answers about how to use the app.",
};

export default function AskPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
        <Suspense fallback={<div className="h-[600px] flex items-center justify-center text-gray-400">Loading...</div>}>
          <ChatInterface />
        </Suspense>
      </div>
    </div>
  );
}

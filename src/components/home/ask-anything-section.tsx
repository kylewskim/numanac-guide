import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const suggestedQuestions = [
  "How do I create field boundaries?",
  "How do I edit a record?",
  "How do I invite team members?",
];

export function AskAnythingSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Avatar */}
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Have a question?
        </h2>
        <p className="text-gray-500 mb-8 text-lg">
          Alma can answer anything about how to use Numanac — in any language.
        </p>

        {/* Suggested Questions */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {suggestedQuestions.map((q) => (
            <Link key={q} href={`/ask?q=${encodeURIComponent(q)}`}>
              <button className="px-4 py-2 rounded-full border border-primary/30 text-sm text-primary bg-white hover:bg-primary/5 transition-colors shadow-sm">
                {q}
              </button>
            </Link>
          ))}
        </div>

        <Button asChild size="lg" className="gap-2">
          <Link href="/ask">
            Ask Alma <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

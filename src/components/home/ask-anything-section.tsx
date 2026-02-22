import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const suggestedQuestions = [
  "How do I create field boundaries?",
  "How do I edit a record?",
  "How do I invite team members?",
];

export function AskAnythingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
          Have a question?
        </h2>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          Alma can answer anything about how to use Numanac — in any language.
        </p>

        {/* Suggested Questions */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {suggestedQuestions.map((q) => (
            <Link key={q} href={`/ask?q=${encodeURIComponent(q)}`}>
              <button className="px-3.5 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600 bg-white hover:border-gray-400 hover:text-gray-900 transition-colors">
                {q}
              </button>
            </Link>
          ))}
        </div>

        <Button asChild size="sm" className="gap-2 bg-gray-900 hover:bg-gray-700 text-white">
          <Link href="/ask">
            Ask Alma <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

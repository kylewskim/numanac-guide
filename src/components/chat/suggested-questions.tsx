interface SuggestedQuestionsProps {
  questions: string[];
  onSelect: (q: string) => void;
}

export function SuggestedQuestions({ questions, onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {questions.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="px-4 py-2 rounded-full border border-primary/30 text-sm text-primary bg-white hover:bg-primary/5 transition-colors shadow-sm text-left"
        >
          {q}
        </button>
      ))}
    </div>
  );
}

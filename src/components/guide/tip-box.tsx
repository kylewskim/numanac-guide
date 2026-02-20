import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface TipBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function TipBox({ children, className }: TipBoxProps) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl bg-primary/5 border border-primary/20 p-4",
        className
      )}
    >
      <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

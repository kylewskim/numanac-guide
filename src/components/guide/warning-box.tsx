import { TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface WarningBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function WarningBox({ children, className }: WarningBoxProps) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl bg-amber-50 border border-amber-200 p-4",
        className
      )}
    >
      <TriangleAlert className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}

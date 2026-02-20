import { cn } from "@/lib/utils";

interface WarningBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function WarningBox({ children, className }: WarningBoxProps) {
  return (
    <div
      className={cn(
        "border-l-2 border-amber-400 pl-4 py-0.5",
        className
      )}
    >
      <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}

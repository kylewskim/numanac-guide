import { cn } from "@/lib/utils";

interface TipBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function TipBox({ children, className }: TipBoxProps) {
  return (
    <div
      className={cn(
        "border-l-2 border-primary pl-4 py-0.5",
        className
      )}
    >
      <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}

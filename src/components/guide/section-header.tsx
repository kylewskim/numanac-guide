import { Clock } from "lucide-react";

interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export function SectionHeader({ id, title, subtitle, badge }: SectionHeaderProps) {
  return (
    <div id={id} className="scroll-mt-60 mb-6">
      <h2 className="text-xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{subtitle}</p>
      )}
      {badge && (
        <span className="inline-flex items-center gap-1.5 mt-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          {badge}
        </span>
      )}
    </div>
  );
}

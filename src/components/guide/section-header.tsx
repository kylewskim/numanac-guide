import { Clock } from "lucide-react";

interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  video?: string;
}

export function SectionHeader({ id, title, subtitle, badge, video }: SectionHeaderProps) {
  return (
    <div id={id} className="scroll-mt-60 mb-8">
      {/* Title — large */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>

      {/* Time + video link — tight gap below title */}
      {(badge || video) && (
        <div className="flex items-center gap-4 mt-1.5">
          {badge && (
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              {badge}
            </span>
          )}
          {video && (
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              Watch video
            </a>
          )}
        </div>
      )}

      {/* Description — wider gap for visual hierarchy */}
      {subtitle && (
        <p className="mt-5 text-sm text-gray-500 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

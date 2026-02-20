interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export function SectionHeader({ id, title, subtitle, badge }: SectionHeaderProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-8">
      {badge && (
        <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export function SectionHeader({ id, title, subtitle, badge }: SectionHeaderProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-6">
      {badge && (
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
          {badge}
        </p>
      )}
      <h2 className="text-xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

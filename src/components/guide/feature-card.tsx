import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border border-gray-100 shadow-none hover:border-gray-300 transition-colors">
      <CardContent className="p-5">
        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center mb-3">
          <Icon className="w-4.5 h-4.5 text-gray-600" />
        </div>
        <h3 className="font-medium text-gray-900 mb-1.5 text-sm">{title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

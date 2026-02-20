import Image from "next/image";
import { TipBox } from "./tip-box";
import { WarningBox } from "./warning-box";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  tip?: string;
  warning?: string;
  examples?: string[];
}

export function StepCard({
  step,
  title,
  description,
  image,
  imageAlt,
  tip,
  warning,
  examples,
}: StepCardProps) {
  return (
    <div className="flex gap-4 md:gap-6">
      {/* Step Number */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
          {step}
        </div>
        {/* Connector Line */}
        <div className="w-0.5 bg-gray-200 mx-auto mt-2 flex-grow min-h-8" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-base">{description}</p>

        {/* Examples */}
        {examples && examples.length > 0 && (
          <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Examples
            </p>
            <ul className="space-y-1.5">
              {examples.map((ex, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary mt-0.5">→</span>
                  <span className="italic">&ldquo;{ex}&rdquo;</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Image */}
        {image && (
          <div className="mt-4 rounded-xl overflow-hidden border bg-gray-50 max-w-sm">
            <Image
              src={image}
              alt={imageAlt || title}
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Placeholder when no image */}
        {!image && (
          <div className="mt-4 rounded-xl border border-dashed border-gray-200 bg-gray-50 flex items-center justify-center h-40 max-w-sm">
            <p className="text-sm text-gray-400">Screenshot coming soon</p>
          </div>
        )}

        {/* Tip / Warning */}
        {tip && <TipBox className="mt-4">{tip}</TipBox>}
        {warning && <WarningBox className="mt-4">{warning}</WarningBox>}
      </div>
    </div>
  );
}

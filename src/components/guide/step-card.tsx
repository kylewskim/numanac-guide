import Image from "next/image";
import { TipBox } from "./tip-box";
import { WarningBox } from "./warning-box";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  media?: React.ReactNode;
  splitMediaDesktop?: boolean;
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
  media,
  splitMediaDesktop = false,
  tip,
  warning,
  examples,
}: StepCardProps) {
  const hasVisualMedia = Boolean(media || image);
  const shouldSplitMediaDesktop = splitMediaDesktop && hasVisualMedia;

  return (
    <div className="flex gap-4 md:gap-6">
      {/* Step Number */}
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
          {step}
        </div>
        {/* Connector Line */}
        <div className="w-px bg-gray-100 mx-auto mt-2 flex-grow min-h-8" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div
          className={
            shouldSplitMediaDesktop
              ? "md:grid md:grid-cols-[minmax(0,1fr)_240px] md:gap-6 md:items-start"
              : undefined
          }
        >
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-1.5 leading-snug">
              {title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

            {/* Examples */}
            {examples && examples.length > 0 && (
              <div className="mt-3 bg-gray-50 rounded-lg p-3.5 border border-gray-100">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  Examples
                </p>
                <ul className="space-y-1.5">
                  {examples.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gray-300 mt-0.5 flex-shrink-0">→</span>
                      <span className="italic">&ldquo;{ex}&rdquo;</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tip / Warning */}
            {tip && <TipBox className="mt-4">{tip}</TipBox>}
            {warning && <WarningBox className="mt-4">{warning}</WarningBox>}
          </div>

          {/* Custom media */}
          {media && (
            <div
              className={`mt-4 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 max-w-xs ${
                shouldSplitMediaDesktop ? "md:mt-0 md:max-w-none" : ""
              }`}
            >
              {media}
            </div>
          )}

          {/* Image */}
          {!media && image && (
            <div
              className={`mt-4 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 max-w-xs ${
                shouldSplitMediaDesktop ? "md:mt-0 md:max-w-none" : ""
              }`}
            >
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
          {!media && !image && (
            <div className="mt-4 rounded-lg bg-gray-50 flex items-center justify-center h-36 max-w-xs">
              <p className="text-xs text-gray-300">Screenshot coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

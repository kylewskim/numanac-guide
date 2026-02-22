"use client";

import { useState, useRef, useEffect } from "react";
import { TipBox } from "./tip-box";
import { WarningBox } from "./warning-box";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  placeholder?: string;
  tip?: string;
  warning?: string;
  examples?: string[];
}

function getImagePath(filename: string): string {
  if (filename.startsWith("numanac-map-")) return `/screenshots/map/${filename}`;
  if (filename.startsWith("numanac-logging-")) return `/screenshots/logging/${filename}`;
  if (filename.startsWith("numanac-alma-")) return `/screenshots/alma/${filename}`;
  if (filename.startsWith("numanac-settings-")) return `/screenshots/settings/${filename}`;
  if (filename.startsWith("numanac-onboarding-")) return `/screenshots/onboarding/${filename}`;
  if (filename.startsWith("numanac-tasks-")) return `/screenshots/tasks/${filename}`;
  if (filename.startsWith("numanac-team-")) return `/screenshots/team/${filename}`;
  if (filename.startsWith("numanac-install-")) return `/screenshots/install/${filename}`;
  return `/screenshots/${filename}`;
}

function ImageSlot({ filename }: { filename: string }) {
  const isVideo = filename.endsWith(".mp4");
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!isVideo && imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [isVideo]);

  if (isVideo) {
    return (
      <video
        src={getImagePath(filename)}
        autoPlay
        loop
        muted
        playsInline
        className="mt-4 w-full h-auto rounded-xl"
        style={{ border: "1px solid rgba(0,0,0,0.10)" }}
      />
    );
  }

  return (
    <>
      {!loaded && (
        <div
          className="mt-4 w-full rounded-xl bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center"
          style={{ aspectRatio: "3 / 2" }}
        >
          <span className="text-[11px] font-mono text-gray-400">{filename}</span>
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={getImagePath(filename)}
        alt=""
        onLoad={() => setLoaded(true)}
        className={`mt-4 w-full h-auto rounded-xl${loaded ? "" : " hidden"}`}
        style={{ border: "1px solid rgba(0,0,0,0.10)" }}
      />
    </>
  );
}

export function StepCard({
  step,
  title,
  description,
  placeholder,
  tip,
  warning,
  examples,
}: StepCardProps) {
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

        {/* Image — shows real image if file exists, dashed placeholder if not */}
        {placeholder && <ImageSlot filename={placeholder} />}
      </div>
    </div>
  );
}

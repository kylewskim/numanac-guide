import Image from "next/image";

interface PhoneFrameProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function PhoneFrame({ src, alt, className }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto w-[240px] ${className || ""}`}>
      {/* Phone Shell */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full z-10" />
        {/* Screen */}
        <div className="relative bg-gray-100 rounded-[2rem] overflow-hidden aspect-[9/19.5]">
          {src ? (
            <Image
              src={src}
              alt={alt || "App screenshot"}
              fill
              className="object-cover object-top"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100">
              <p className="text-xs text-gray-400 text-center px-4">
                Screenshot<br />coming soon
              </p>
            </div>
          )}
        </div>
        {/* Home Indicator */}
        <div className="mt-2 w-16 h-1 bg-gray-600 rounded-full mx-auto" />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { SectionHeader } from "@/components/guide/section-header";
import { FeatureCard } from "@/components/guide/feature-card";
import { TipBox } from "@/components/guide/tip-box";
import { Thermometer, Wind, Droplets, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Weather Guide",
  description: "View real-time weather and forecasts at your farm location in Numanac.",
};

export default function WeatherGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="max-w-2xl space-y-12">
        <section>
          <SectionHeader
            id="where"
            title="Where to Find Weather"
          />
          <p className="text-gray-600 leading-relaxed mb-6">
            Current weather is always displayed in the top bar of the map screen.
            Tap on it to open the full weather view with hourly and daily forecasts.
          </p>
          <TipBox>
            Weather data is automatically pulled for your farm&apos;s GPS location. If you manage multiple farms, the weather shown changes when you switch farms.
          </TipBox>
        </section>

        <section>
          <SectionHeader
            id="data"
            title="What Weather Data is Available?"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard
              icon={Thermometer}
              title="Temperature"
              description="Current, high, and low temperatures in °C or °F."
            />
            <FeatureCard
              icon={Droplets}
              title="Precipitation"
              description="Rainfall amount and chance of rain, by hour and day."
            />
            <FeatureCard
              icon={Wind}
              title="Wind"
              description="Wind speed and direction — important for spray operations."
            />
            <FeatureCard
              icon={Calendar}
              title="7-Day Forecast"
              description="See weather conditions for the week ahead to plan farm activities."
            />
          </div>
        </section>

        <section>
          <SectionHeader
            id="alma"
            title="Ask Alma About Weather"
          />
          <p className="text-gray-600 leading-relaxed mb-4">
            You can also ask Alma directly in the Chat tab about the weather at
            your farm location.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Try asking Alma:</p>
            <ul className="space-y-2">
              {[
                "What's the weather like at my farm today?",
                "Will it rain this week?",
                "Is the wind too strong for spraying tomorrow?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-primary">→</span>
                  <span className="italic">&ldquo;{q}&rdquo;</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

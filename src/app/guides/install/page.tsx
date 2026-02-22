import type { Metadata } from "next";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";
import { TipBox } from "@/components/guide/tip-box";

export const metadata: Metadata = {
  title: "Add Numanac to Your Home Screen",
  description: "Install Numanac on your iPhone or Android phone so it opens like a native app.",
};

const sections = [
  { id: "why", label: "Why Add to Home Screen?" },
  { id: "ios", label: "iPhone (Safari)" },
  { id: "android", label: "Android (Chrome)" },
];

export default function InstallGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="flex gap-12 justify-center lg:justify-start">
        <GuideSidebar sections={sections} />

        <div className="w-full min-w-0 max-w-2xl space-y-16">

          {/* Why */}
          <section>
            <SectionHeader
              id="why"
              title="Why Add to Home Screen?"
              subtitle="Once added, Numanac behaves like a native app on your phone."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {[
                { icon: "⚡", title: "One tap to open", desc: "Launch Numanac directly from your home screen — no browser needed." },
                { icon: "🖥️", title: "Full screen", desc: "Opens without the browser toolbar, giving you more space." },
                { icon: "📵", title: "Works offline", desc: "Loads faster and retains your session between visits." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* iOS */}
          <section>
            <SectionHeader
              id="ios"
              title="iPhone — Safari"
              subtitle='This only works in Safari. If you are using Chrome or another browser on iPhone, open site.numanac.com in Safari first.'
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Open Safari and go to site.numanac.com"
                description="Type the address into the Safari address bar and open the Numanac website."
              />
              <StepCard
                step={2}
                title="Tap the ··· menu, then tap Share"
                description='At the bottom of the screen, tap the ··· (three dots) button first. In the menu that appears, tap the Share icon (square with an arrow pointing up ↑).'
                placeholder="numanac-install-ios-share.png"
              />
              <StepCard
                step={3}
                title='Scroll down and tap "Add to Home Screen"'
                description='A menu will appear. Scroll through the options and tap "Add to Home Screen".'
                placeholder="numanac-install-ios-add.png"
              />
              <StepCard
                step={4}
                title="Name it and tap Add"
                description='You can rename the shortcut if you like. Then tap "Add" in the top-right corner.'
                tip='The Numanac icon will appear on your home screen. Tap it anytime to open the app instantly.'
                placeholder="numanac-install-ios-confirm.png"
              />
            </div>
            <TipBox>If you don&apos;t see the Share button, scroll up on the page first — it appears at the bottom of the Safari browser.</TipBox>
          </section>

          {/* Android */}
          <section>
            <SectionHeader
              id="android"
              title="Android — Chrome"
              subtitle="On Android, use the Chrome browser for the best experience."
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Open Chrome and go to site.numanac.com"
                description="Type the address into the Chrome address bar and open the Numanac website."
                placeholder="numanac-install-android-open.png"
              />
              <StepCard
                step={2}
                title="Tap the three-dot menu in the top right"
                description='Tap the ⋮ icon in the upper-right corner of Chrome to open the menu.'
                placeholder="numanac-install-android-menu.png"
              />
              <StepCard
                step={3}
                title='Tap "Add to Home screen"'
                description='Find and tap "Add to Home screen" in the menu. On some Android versions this may appear as "Install app".'
                placeholder="numanac-install-android-add.png"
              />
              <StepCard
                step={4}
                title="Confirm by tapping Add"
                description='A dialog will appear. Tap "Add" to place the Numanac shortcut on your home screen.'
                tip="The Numanac icon will now appear on your Android home screen, ready to open with one tap."
                placeholder="numanac-install-android-confirm.png"
              />
            </div>
            <TipBox>If you see a browser prompt at the bottom of the screen saying &quot;Add Numanac to Home screen&quot;, you can tap that directly — it&apos;s a shortcut to the same step.</TipBox>
          </section>

        </div>
      </div>
    </div>
  );
}

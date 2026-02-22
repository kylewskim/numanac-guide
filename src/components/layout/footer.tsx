import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-3">
              <Image
                src="/brands/numanac-logo-full.svg"
                alt="Numanac"
                width={160}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Step-by-step guides to help you manage your farm with Numanac.
            </p>
          </div>

          {/* Getting Started */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 text-xs uppercase tracking-wider">Getting Started</h3>
            <ul className="space-y-2">
              <li><Link href="/getting-started/signup" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Sign Up</Link></li>
              <li><Link href="/getting-started/plan" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Choose a Plan</Link></li>
              <li><Link href="/getting-started/setup" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Farm Setup</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 text-xs uppercase tracking-wider">Feature Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/guides/map" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Map & Boundaries</Link></li>
              <li><Link href="/guides/logging" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Activity Logging</Link></li>
              <li><Link href="/guides/tasks" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Task Management</Link></li>
              <li><Link href="/guides/alma" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Alma AI</Link></li>
              <li><Link href="/guides/team" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Team & Collaboration</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 text-xs uppercase tracking-wider">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/ask" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Ask Alma</Link></li>
              <li><Link href="/faq" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">FAQ</Link></li>
              <li><Link href="/videos" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Video Tutorials</Link></li>
              <li>
                <a href="mailto:support@numanac.com" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">
                  support@numanac.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Numanac. All rights reserved.
          </p>
          <a
            href="https://site.numanac.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
          >
            Open Numanac App →
          </a>
        </div>
      </div>
    </footer>
  );
}

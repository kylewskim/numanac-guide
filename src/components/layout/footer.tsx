import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-3">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-900">Numanac Guide</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Step-by-step guides to help you manage your farm with Numanac.
            </p>
          </div>

          {/* Getting Started */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Getting Started</h3>
            <ul className="space-y-2">
              <li><Link href="/getting-started/signup" className="text-sm text-gray-500 hover:text-primary">Sign Up</Link></li>
              <li><Link href="/getting-started/plan" className="text-sm text-gray-500 hover:text-primary">Choose a Plan</Link></li>
              <li><Link href="/getting-started/setup" className="text-sm text-gray-500 hover:text-primary">Farm Setup</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Feature Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/guides/map" className="text-sm text-gray-500 hover:text-primary">Map & Boundaries</Link></li>
              <li><Link href="/guides/logging" className="text-sm text-gray-500 hover:text-primary">Activity Logging</Link></li>
              <li><Link href="/guides/tasks" className="text-sm text-gray-500 hover:text-primary">Task Management</Link></li>
              <li><Link href="/guides/alma" className="text-sm text-gray-500 hover:text-primary">Alma AI</Link></li>
              <li><Link href="/guides/team" className="text-sm text-gray-500 hover:text-primary">Team & Collaboration</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/ask" className="text-sm text-gray-500 hover:text-primary">Ask Alma</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-500 hover:text-primary">FAQ</Link></li>
              <li><Link href="/videos" className="text-sm text-gray-500 hover:text-primary">Video Tutorials</Link></li>
              <li>
                <a href="mailto:support@numanac.com" className="text-sm text-gray-500 hover:text-primary">
                  support@numanac.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Numanac. All rights reserved.
          </p>
          <a
            href="https://site.numanac.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline font-medium"
          >
            Open Numanac App →
          </a>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Numanac.",
};

const faqCategories = [
  {
    category: "Getting Started",
    faqs: [
      {
        q: "Is signing up free?",
        a: "Creating an account is free. Numanac offers a 1-month free trial on all paid plans with full access to all features.",
      },
      {
        q: "What plans does Numanac offer?",
        a: "Numanac has two plans: Farm Manager (for people managing their own farm) and Consultant (for agricultural consultants managing multiple client farms).",
      },
      {
        q: "How long is the free trial?",
        a: "All plans include a 1-month free trial. No credit card is required to start.",
      },
      {
        q: "Does Numanac support languages other than English?",
        a: "Yes! Alma can chat and respond in any language you use, including Spanish, Portuguese, Korean, and more. The app interface is currently in English.",
      },
    ],
  },
  {
    category: "Map & Boundaries",
    faqs: [
      {
        q: "I drew a boundary incorrectly. Can I fix it?",
        a: "Yes. Open the field on the map, tap the edit icon, and then drag the corner points to adjust the boundary. Tap Save when done.",
      },
      {
        q: "What is a shapefile?",
        a: "A shapefile (.shp) is a standard file format for geographic data. If you have field boundaries from another system, you can upload the shapefile to automatically create boundaries in Numanac without drawing them manually.",
      },
      {
        q: "How many fields can I create?",
        a: "There is no strict limit on the number of fields you can create within your plan.",
      },
      {
        q: "What is the difference between a Field and a Tract?",
        a: "A Field is a single bounded area (like a paddock or a plot). A Tract is a group of multiple Fields — useful for organizing a large farm into zones.",
      },
    ],
  },
  {
    category: "Records & Tasks",
    faqs: [
      {
        q: "The voice recording isn't recognizing what I say.",
        a: "Make sure your phone's microphone permission is enabled for Numanac. Speak clearly and in a quiet environment. If the problem continues, try typing the record instead.",
      },
      {
        q: "I saved a record with the wrong information. Can I edit it?",
        a: "Yes. Open the record from the Records tab, tap the edit icon, make your changes, and tap Save.",
      },
      {
        q: "Can I attach photos to a record?",
        a: "Yes. When creating or editing a record, tap the attachment icon to add photos from your camera or photo library.",
      },
      {
        q: "What is the difference between a Record and a Task?",
        a: "A Record is something you already did (past tense). A Task is something you plan to do (future tense). Alma automatically classifies them based on how you speak.",
      },
    ],
  },
  {
    category: "Alma AI",
    faqs: [
      {
        q: "Can Alma give wrong answers?",
        a: "Yes, like all AI systems, Alma can occasionally make mistakes. Always review Alma's summaries and records before using them for important decisions. For critical information, verify against your original records.",
      },
      {
        q: "What languages can Alma understand?",
        a: "Alma can understand and respond in most major languages, including English, Spanish, Portuguese, Korean, French, and many others. Just write or speak in your preferred language.",
      },
      {
        q: "Can Alma access my actual account data?",
        a: "Within the Numanac app, Alma has access to your farm records, tasks, and weather data. The guide chatbot on this website only has access to general usage information — not your account data.",
      },
    ],
  },
  {
    category: "Team Management",
    faqs: [
      {
        q: "How many team members can I invite?",
        a: "You can invite as many team members as you have available seats. Add more seats from Settings → Billing & Subscription → Update Seats.",
      },
      {
        q: "Can I change a team member's role after inviting them?",
        a: "Yes. Go to Settings → Team Members, find the person, and change their role from the dropdown menu.",
      },
      {
        q: "A team member didn't receive the invitation email.",
        a: "Ask them to check their spam or junk mail folder. If it's still not there, go to Settings → Team Members and resend the invitation.",
      },
    ],
  },
  {
    category: "Technical & Support",
    faqs: [
      {
        q: "The app isn't working properly.",
        a: "Try closing and reopening the app. If the problem continues, check your internet connection. For persistent issues, contact us at support@numanac.com with a description of the problem.",
      },
      {
        q: "Is my data safe?",
        a: "Yes. Numanac uses industry-standard encryption to protect your data. Your farm records are stored securely and are never shared with third parties.",
      },
      {
        q: "How do I contact support?",
        a: "Email us at support@numanac.com — our team typically responds within 1 business day.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      {/* FAQ Categories */}
      <div className="space-y-10">
        {faqCategories.map((category) => (
          <div key={category.category}>
            <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              {category.category}
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {category.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`${category.category}-${i}`}
                  className="border border-gray-100 rounded-xl px-4 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5 transition-colors"
                >
                  <AccordionTrigger className="text-left text-sm font-medium py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-500 mb-6">
          Our support team is happy to help.
        </p>
        <Button asChild>
          <a href="mailto:support@numanac.com">Email Support</a>
        </Button>
      </div>
    </div>
  );
}

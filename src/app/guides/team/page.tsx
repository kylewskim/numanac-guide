import type { Metadata } from "next";
import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { SectionHeader } from "@/components/guide/section-header";
import { StepCard } from "@/components/guide/step-card";

export const metadata: Metadata = {
  title: "Team & Collaboration Guide",
  description: "Invite team members and manage roles in Numanac.",
};

const sections = [
  { id: "roles", label: "Team Roles" },
  { id: "seats", label: "Adding Seats" },
  { id: "inviting", label: "Inviting Team Members" },
];

const roles = [
  { role: "Owner", can: "All features, billing, and account management" },
  { role: "Manager", can: "Create and edit farms, manage team members" },
  { role: "Recordkeeper", can: "Create records and tasks, view all data" },
  { role: "Viewer", can: "View records and data only (no editing)" },
  { role: "Client", can: "Limited access to their own farm data only" },
];

export default function TeamGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="flex gap-12">
        <GuideSidebar sections={sections} />

        <div className="flex-1 min-w-0 max-w-2xl space-y-16">
          {/* Roles */}
          <section>
            <SectionHeader
              id="roles"
              title="Team Roles"
              subtitle="Each team member gets a role that determines what they can access."
            />
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Role</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">What they can do</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((r, i) => (
                    <tr key={r.role} className={i < roles.length - 1 ? "border-b border-gray-100" : ""}>
                      <td className="px-4 py-3">
                        <span className={`font-semibold ${r.role === "Owner" ? "text-primary" : "text-gray-800"}`}>
                          {r.role}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{r.can}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Adding Seats */}
          <section>
            <SectionHeader
              id="seats"
              title="Step 1: Add Team Seats"
              subtitle="Before you can invite someone, you need to have an available seat for their role."
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Go to the Settings tab"
                description='Tap "Settings" in the bottom navigation bar.'
              />
              <StepCard
                step={2}
                title="Tap your account card"
                description="Find and tap your plan or account card at the top of the Settings screen."
              />
              <StepCard
                step={3}
                title='Tap "Update Seats"'
                description="This opens the seat management screen where you can see how many seats you currently have by role."
              />
              <StepCard
                step={4}
                title="Select how many seats to add"
                description="Choose the number of seats for each role type (Manager, Recordkeeper, Viewer, etc.)."
              />
              <StepCard
                step={5}
                title='Tap "Confirm Seat Update"'
                description="Confirm the change. Seats are billed per month. New seats are available immediately."
              />
            </div>
          </section>

          {/* Inviting */}
          <section>
            <SectionHeader
              id="inviting"
              title="Step 2: Invite Team Members"
              subtitle="Send invitations to your team members via email."
            />
            <div className="space-y-0">
              <StepCard
                step={1}
                title="Go to Settings → your plan card"
                description='In Settings, tap your plan card and look for the "Invite" button.'
              />
              <StepCard
                step={2}
                title="Enter the team member's email address"
                description="Type in the email address of the person you want to invite."
              />
              <StepCard
                step={3}
                title="Select their role"
                description="Choose the role from the list: Manager, Recordkeeper, Viewer, or Client."
              />
              <StepCard
                step={4}
                title="Choose which farms they can access"
                description="Select which farm(s) the team member should have access to. You can grant access to one or multiple farms."
              />
              <StepCard
                step={5}
                title='Tap "Send Invitation"'
                description="The team member will receive an email invitation. They need to accept it and create (or log into) their Numanac account."
                tip="If the invitation email doesn't arrive, ask the team member to check their spam or junk folder."
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

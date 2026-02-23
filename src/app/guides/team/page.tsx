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
  { role: "Recordkeeper", can: "Create records and tasks, view all permissioned data" },
  { role: "Viewer", can: "View records and data only (no editing)" },
  { role: "Client", can: "Limited access to their own farm data only" },
];

export default function TeamGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="flex gap-12 justify-center lg:justify-start">
        <GuideSidebar sections={sections} />

        <div className="w-full min-w-0 max-w-2xl space-y-16">
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
                title="Go to Settings and tap your account card"
                description='Tap "Settings" in the bottom navigation bar, then tap your plan or account card at the top of the screen.'
                placeholder="numanac-team-seats-settings.png"
              />
              <StepCard
                step={2}
                title='Tap "Manage Members"'
                description="This opens the member management screen where you can see your current team and seat usage."
                placeholder="numanac-team-seats-manage.png"
              />
              <StepCard
                step={3}
                title='Review your seat summary and tap "Update Seats"'
                description='Check how many seats you have by role (Manager, Recordkeeper, Viewer, etc.) and how many are already filled. If you need more, tap "Update Seats" to open the seat management screen.'
                placeholder="numanac-team-seats-summary.png"
              />
              <StepCard
                step={4}
                title="Select how many seats to add"
                description="Choose the number of seats for each role type."
                placeholder="numanac-team-seats-select.png"
              />
              <StepCard
                step={5}
                title='Tap "Confirm Seat Update"'
                description="Confirm the change. You'll be taken to the payment screen to complete the purchase. Seats are billed per month and become available immediately after payment."
                // placeholder="numanac-team-seats-confirm.png"
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
                title="Go to Settings → account card → Manage Members"
                description='Tap "Settings" in the bottom navigation bar, tap your account card, then tap "Manage Members" — same as above.'
                placeholder="numanac-team-invite-manage.png"
              />
              <StepCard
                step={2}
                title='Tap "Invite"'
                description="Tap the Invite button to open the invitation form. If all seats for a role are full, you'll need to remove an existing member or purchase additional seats first."
                placeholder="numanac-team-invite-button.png"
              />
              <StepCard
                step={3}
                title="Enter email, role, and farm access"
                description="Type in the team member's email address, choose their role (Manager, Recordkeeper, Viewer, or Client), and select which farm(s) they should have access to."
                placeholder="numanac-team-invite-email.png"
              />
              <StepCard
                step={4}
                title='Tap "Send Invitation"'
                description="The team member will receive an email invitation to join. They need to accept it and create (or log into) their Numanac account."
                tip="If the invitation email doesn't arrive, ask the team member to check their spam or junk folder."
                // placeholder="numanac-team-invite-send.png"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

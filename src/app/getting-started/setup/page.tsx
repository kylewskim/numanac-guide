import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepCard } from "@/components/guide/step-card";
import { TipBox } from "@/components/guide/tip-box";
import { ArrowRight, Clock, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "Farm Setup",
  description: "Set up your farm in Numanac and start managing your fields.",
};

export default function SetupPage() {
  return (
    <div className="max-w-[1144px] mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="secondary" className="text-xs">Step 3 of 3</Badge>
          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            About 3–5 minutes
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Set Up Your Farm</h1>
        <p className="text-gray-600 leading-relaxed">
          Follow the steps below based on your plan. Your data is safe and you
          can always edit it later from Settings.
        </p>
      </div>

      {/* Tabs by plan */}
      <Tabs defaultValue="farm-manager" className="mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="farm-manager">Farmer</TabsTrigger>
          <TabsTrigger value="consultant">Consultant</TabsTrigger>
        </TabsList>

        {/* Farmer */}
        <TabsContent value="farm-manager">
          <div className="space-y-0">
            <StepCard
              step={1}
              title="Enter your farm name"
              description="Type a name for your farm. This will appear in the app header and on all your records."
            />
            <StepCard
              step={2}
              title="Search for your farm location"
              description="Type your farm's address or the nearest town. The map will zoom to your location automatically."
              tip="You can search by address, city, or even GPS coordinates."
            />
            <StepCard
              step={3}
              title="Review and confirm"
              description='Check that the map is showing the correct area, then click "Continue" to proceed.'
            />
            <StepCard
              step={4}
              title="You're in!"
              description="You'll land on the main map screen. From here, you can start drawing field boundaries, logging records, and more."
              tip="You can always go back to Settings to update your farm name, location, or other details."
            />
          </div>
        </TabsContent>

        {/* Consultant */}
        <TabsContent value="consultant">
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            As a Consultant, you manage farms for your clients. Each client gets
            their own separate, secure workspace.
          </div>
          <div className="space-y-0">
            <StepCard
              step={1}
              title="Enter your first client's information"
              description="Provide your client's name, email address, and phone number. This creates their workspace in the system."
            />
            <StepCard
              step={2}
              title="Add the client's farm name and location"
              description="Enter the farm name and search for its location on the map."
            />
            <StepCard
              step={3}
              title="Save and continue"
              description={`Click "Save" — you'll be taken to the main map for that client's farm.`}
              tip="You can add more clients later from Settings → Clients."
            />
          </div>
        </TabsContent>
      </Tabs>

      {/* Next steps */}
      <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Map className="w-3.5 h-3.5 text-white" />
          </div>
          <p className="text-sm font-semibold text-gray-900">
            Setup complete! What would you like to do next?
          </p>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Now that your farm is set up, learn how to draw field boundaries on
          the map or start logging records.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/guides/map" className="gap-2">
              Draw Field Boundaries <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/guides/logging">Log a Record</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

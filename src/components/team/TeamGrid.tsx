import { TeamMemberImage } from "./TeamMemberImage";

import { type TeamSection } from "@/types";

/**
 * A server component that renders a grid of team members
 * Features:
 * - Responsive grid layout
 * - Displays team member images with names and titles
 * - Uses TeamMemberImage component for image loading states
 */
export function TeamGrid({ members }: TeamSection) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <div
          key={member.name}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <TeamMemberImage src={member.image.url} alt={member.name} />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * A loading skeleton for the team grid
 * Displays placeholder cards while team member data is being fetched
 */
export function TeamGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <div className="relative h-40 w-40">
            <div className="absolute inset-0 z-10">
              <div className="h-full w-full animate-pulse rounded-full bg-muted" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-6 w-32 animate-pulse rounded bg-muted" />
            <div className="h-4 w-24 animate-pulse rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}

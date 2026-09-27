// Roles power the home page, /about and /resume.
// `kind: "work"` → Experience. `kind: "leadership"` → Leadership & community.
// List most recent first. Keep bullets to outcomes you can talk about in an interview.

export type Role = {
  kind: "work" | "leadership";
  title: string;
  org: string;
  orgUrl?: string;
  start: string;
  end?: string; // omit for "Present"
  location?: string;
  summary: string;
  highlights?: string[];
  tags?: string[];
};

export const roles: Role[] = [
  {
    kind: "leadership",
    title: "Infrastructure Lead",
    org: "Google Developer Groups on Campus", // TODO: add your university, e.g. "GDG on Campus — ABU Zaria"
    orgUrl: "https://gdg.community.dev/",
    start: "2025", // TODO: confirm start date
    summary:
      "Own the technical infrastructure behind the chapter — the platforms, tooling and environments members and organisers rely on for events, workshops and projects.",
    highlights: [
      // TODO: replace with concrete outcomes (numbers help: members, events, uptime, cost).
      "Run the chapter's shared infrastructure and developer tooling.",
      "Run hands-on sessions on cloud, containers and CI/CD for student developers.",
      "Mentor members moving from first deploy to production-ready practices.",
    ],
    tags: ["Google Cloud", "Community", "Mentoring"],
  },
  {
    kind: "work",
    title: "Frontend Developer Lead (Intern)",
    org: "Techies Club & Upskill",
    start: "2024", // TODO: confirm dates
    end: "2024",
    summary:
      "Led frontend development for CuratEd, a smart YouTube search application, from component architecture through delivery.",
    highlights: [
      "Set frontend conventions and coordinated work across the intern team.",
      "Shipped a responsive search interface that surfaces only query-relevant videos.",
    ],
    tags: ["React", "Team lead"],
  },

  // ─── Template ────────────────────────────────────────────────────────────────
  // {
  //   kind: "work",
  //   title: "DevOps Engineer",
  //   org: "Company",
  //   orgUrl: "https://…",
  //   start: "Jan 2026",
  //   location: "Remote",
  //   summary: "…",
  //   highlights: ["…"],
  //   tags: ["AWS", "Terraform"],
  // },
];

export const workRoles = roles.filter((r) => r.kind === "work");
export const leadershipRoles = roles.filter((r) => r.kind === "leadership");

export function period(role: Pick<Role, "start" | "end">) {
  if (role.end === role.start) return role.start;
  return `${role.start} — ${role.end ?? "Present"}`;
}

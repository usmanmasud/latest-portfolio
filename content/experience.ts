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
    kind: "work",
    title: "Co-founder & Software Engineer",
    org: "Riderr",
    orgUrl: "https://www.riderr.ng/",
    start: "2025", // TODO: confirm start date
    location: "Nigeria",
    summary:
      "Co-founded a logistics platform connecting customers, riders and logistics companies. Built across the mobile app, web frontend and backend, and own the entire infrastructure and DevOps operation.",
    highlights: [
      // TODO: add numbers where you can (deliveries, riders, partners, uptime, deploys per week).
      "Built the iOS and Android app for delivery requests, upfront pricing and live GPS tracking.",
      "Built the web frontend and partner dashboard for managing riders, deliveries and performance.",
      "Designed and built backend services for rider matching, pricing and delivery lifecycle.",
      "Own the infrastructure end to end — environments, CI/CD, deployments, monitoring and incident response.",
    ],
    tags: ["Mobile", "Full-stack", "DevOps", "Infrastructure"],
  },
  {
    kind: "work",
    title: "Software Engineering Intern",
    org: "National Information Technology Development Agency (NITDA)",
    orgUrl: "https://nitda.gov.ng/",
    start: "Oct 2025",
    location: "Abuja",
    summary:
      "Building and testing web application modules at Nigeria's federal IT development agency, working with cross-functional teams to keep features aligned with project goals.",
    highlights: [
      "Develop and test web application modules using modern frameworks.",
      "Collaborate with product, design and engineering teams on feature scope and delivery.",
    ],
    tags: ["React", "TypeScript", "Testing"],
  },
  {
    kind: "work",
    title: "Frontend Software Engineer",
    org: "EchoBits Technologies",
    start: "Aug 2025",
    location: "Abuja",
    summary:
      "Improving an existing product's accessibility, reliability and reach across devices.",
    highlights: [
      "Refactored the existing codebase to meet WCAG accessibility guidelines, making the product usable for more people.",
      "Integrated RESTful APIs to extend application functionality and support a consistent cross-platform experience.",
    ],
    tags: ["React", "Accessibility", "REST APIs"],
  },
  {
    kind: "work",
    title: "Front-End Developer",
    org: "Steamdledge Limited",
    start: "Jan 2024",
    end: "Aug 2025",
    summary:
      "Built and optimised React and Next.js applications, from reusable components to server-side rendering for performance and SEO.",
    highlights: [
      "Built a library of reusable React and Next.js components used across the product.",
      "Improved page performance and search visibility using Next.js server-side rendering.",
      "Integrated third-party APIs to enrich features and streamline data retrieval.",
      "Took part in UI reviews and QA testing before each release.",
    ],
    tags: ["Next.js", "SSR", "SEO", "Performance"],
  },
  {
    kind: "work",
    title: "Front-End Developer Lead",
    org: "Lead Techies Collab & Upskill",
    start: "Feb 2025",
    end: "May 2025",
    summary:
      "Led a team of frontend developers building React and Next.js applications, including CuratEd, a smart YouTube search app.",
    highlights: [
      "Owned component design, task distribution and code review for the frontend team.",
      "Mentored junior developers and managed sprint delivery timelines.",
      "Drove responsive design across the product, improving engagement on mobile and desktop.",
    ],
    tags: ["Team lead", "Code review", "Mentoring", "React"],
  },
  {
    kind: "work",
    title: "Front-End Developer",
    org: "Belsoft Systems Ltd",
    start: "Sep 2022",
    end: "May 2025",
    summary:
      "Built responsive, accessible interfaces with React, Next.js and Tailwind CSS in an Agile team.",
    highlights: [
      "Shipped responsive UI components in close collaboration with designers and backend engineers.",
      "Applied inclusive design practices to improve accessibility and engagement.",
      "Worked in Agile sprints with Git-based review workflows.",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Agile"],
  },
  {
    kind: "leadership",
    title: "Infrastructure Lead",
    org: "Google Developer Groups on Campus", // TODO: confirm chapter, e.g. "GDG on Campus — Bayero University Kano"
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

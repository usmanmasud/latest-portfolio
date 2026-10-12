// Roles power the home page, /about and /resume.
// `kind: "work"` → Experience. `kind: "leadership"` → Leadership & community.
// List most recent first.
//
// Writing bullets: lead with what you built, name the technology, end with a number.
//   Weak:   "Built the mobile app for delivery requests."
//   Strong: "Built the React Native app for delivery requests and live GPS tracking,
//            used by 1,200 customers and 85 riders across 9,000 deliveries."
// Only use real numbers. Good ones to measure: users, deliveries, team size, people
// mentored, deploy time, uptime, Lighthouse scores, pages or screens shipped.

export type Role = {
  kind: "work" | "leadership";
  title: string;
  org: string;
  /** A few words on what the organisation is, shown on the résumé. */
  orgNote?: string;
  orgUrl?: string;
  /** Employment type, shown next to the dates. Keeps overlapping roles honest. */
  type?: "Full-time" | "Part-time" | "Contract" | "Internship" | "Volunteer" | "Co-founder";
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
    orgNote: "logistics platform",
    orgUrl: "https://www.riderr.ng/",
    type: "Co-founder",
    start: "2025", // TODO: add the month, e.g. "Mar 2025", to match the other roles
    location: "Nigeria",
    summary:
      "Co-founded a logistics platform connecting customers, riders and logistics companies. Built across the mobile app, web frontend and backend, and own how it is deployed and run.",
    highlights: [
      // TODO: add real numbers to each line — customers, riders, deliveries, partner
      // companies, deploy time before/after, uptime. Name the mobile framework,
      // backend framework, database and cloud provider.
      "Built the iOS and Android app for delivery requests, upfront pricing and live GPS tracking.",
      "Built the web frontend and partner dashboard for managing riders, deliveries and performance.",
      "Designed and built backend services for rider matching, pricing and the delivery lifecycle.",
      "Own deployment end to end: Docker containers and GitHub Actions CI/CD pipelines for the backend and web apps.",
    ],
    tags: ["Mobile", "Full-stack", "Docker", "GitHub Actions"],
  },
  {
    kind: "work",
    title: "Software Engineering Intern",
    org: "National Information Technology Development Agency (NITDA)",
    orgUrl: "https://nitda.gov.ng/",
    type: "Internship",
    start: "Oct 2025",
    location: "Abuja",
    summary:
      "Building and testing web application modules at Nigeria's federal IT development agency, working with cross-functional teams.",
    highlights: [
      // TODO: this is a strong name with a generic bullet. Name the system or module,
      // the framework, who uses it and what changed because of your work.
      "Develop and test web application modules with cross-functional product and engineering teams.",
    ],
    tags: ["Web applications", "Testing"],
  },
  {
    kind: "work",
    title: "Frontend Software Engineer",
    org: "EchoBits Technologies",
    type: "Full-time",
    start: "Aug 2025",
    location: "Abuja",
    summary: "Improving an existing product's accessibility and extending it through API integrations.",
    highlights: [
      // TODO: add numbers — screens refactored, WCAG level (2.1 AA?), Lighthouse
      // accessibility score before → after, number of APIs integrated.
      "Refactored the existing codebase to meet WCAG accessibility guidelines.",
      "Integrated RESTful APIs to extend application functionality across platforms.",
    ],
    tags: ["React", "Accessibility", "REST APIs"],
  },
  {
    kind: "work",
    title: "Front-End Developer",
    org: "Steamdledge Limited",
    type: "Internship",
    start: "Jan 2024",
    end: "Aug 2025",
    summary:
      "Built and optimised React and Next.js applications, from reusable components to server-side rendering for performance and SEO.",
    highlights: [
      // TODO: add numbers — components built, load time or Lighthouse before → after.
      "Built reusable React and Next.js components used across the product.",
      "Improved page performance and search visibility with Next.js server-side rendering.",
      "Integrated third-party APIs and took part in UI reviews and QA before each release.",
    ],
    tags: ["Next.js", "SSR", "SEO", "Performance"],
  },
  {
    kind: "work",
    title: "Front-End Developer Lead",
    org: "Lead Techies Collab & Upskill",
    type: "Internship",
    start: "Feb 2025",
    end: "May 2025",
    summary:
      "Led the frontend team building React and Next.js applications, including CuratEd, a YouTube search app that returns only query-relevant videos.",
    highlights: [
      // TODO: add team size and what shipped (apps, screens, users).
      "Led a team of frontend developers building CuratEd and other apps in React and Next.js.",
      "Owned component design, task distribution and code review; mentored junior developers through sprint delivery.",
    ],
    tags: ["Team lead", "Code review", "Mentoring", "React"],
  },
  {
    kind: "work",
    title: "Front-End Developer",
    org: "Belsoft Systems Ltd",
    type: "Volunteer",
    start: "Sep 2022",
    end: "May 2025",
    summary:
      "Volunteer developer building responsive interfaces with React, Next.js and Tailwind CSS in an Agile team.",
    highlights: [
      "Shipped responsive UI components with React, Next.js and Tailwind CSS alongside designers and backend engineers.",
      "Worked in Agile sprints with Git-based review workflows.",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Agile"],
  },
  {
    kind: "leadership",
    title: "Infrastructure Lead",
    org: "Google Developer Groups on Campus", // TODO: confirm chapter, e.g. "GDG on Campus — Bayero University Kano"
    orgUrl: "https://gdg.community.dev/",
    type: "Volunteer",
    start: "2025", // TODO: add the month, e.g. "Sep 2025"
    summary:
      "Look after the technical platform and tooling behind the chapter's events, workshops and projects.",
    // TODO: add what you actually ran — members in the chapter, events supported,
    // workshops you led, people you mentored.
    // highlights: ["…"],
    tags: ["Community", "Leadership"],
  },

  // ─── Template ────────────────────────────────────────────────────────────────
  // {
  //   kind: "work",
  //   title: "Software Engineer",
  //   org: "Company",
  //   orgUrl: "https://…",
  //   type: "Full-time",
  //   start: "Jan 2027",
  //   location: "Remote",
  //   summary: "…",
  //   highlights: ["…"],
  //   tags: ["…"],
  // },
];

export const workRoles = roles.filter((r) => r.kind === "work");
export const leadershipRoles = roles.filter((r) => r.kind === "leadership");

export function period(role: Pick<Role, "start" | "end">) {
  if (role.end === role.start) return role.start;
  return `${role.start} — ${role.end ?? "Present"}`;
}

// Skills, principles, education and credentials.
// Only list tools you can defend in a technical interview — a shorter, honest list
// reads as more senior than a long one.

export const capabilities = [
  {
    title: "Frontend",
    summary:
      "Where most of my professional work has been: responsive, accessible interfaces in React and Next.js, with attention to performance and SEO.",
    tools: ["TypeScript", "JavaScript", "React", "Next.js", "Redux", "Zustand", "Tailwind CSS", "Accessibility (WCAG)"],
  },
  {
    title: "Backend & Mobile",
    summary:
      "REST APIs in NestJS and Express behind the interface, and the Riderr iOS and Android app in React Native — delivery requests, pricing and live tracking.",
    tools: ["Node.js", "NestJS", "Express", "REST APIs", "MongoDB", "SQL", "React Native (Expo)"],
  },
  {
    title: "Cloud & DevOps",
    summary:
      "Getting code to production and keeping it there: containerised services and automated build, test and deploy pipelines.",
    // Only what I've used on real projects. TODO: add Riderr's cloud provider.
    tools: ["Docker", "GitHub Actions", "CI/CD", "Git & GitHub", "Vercel", "Render"],
  },
];

// Extra tools worth naming. Basics (HTML, CSS, linters, bundlers) are assumed.
export const toolbox = ["SEO", "GSAP", "Three.js", "Figma"];

export const principles = [
  {
    title: "Automate the second time",
    body: "Doing something once is exploration. Doing it twice is a pattern — and patterns belong in a pipeline.",
  },
  {
    title: "Accessible by default",
    body: "Accessibility is part of the build, not a polish pass at the end. If some people can't use it, it isn't finished.",
  },
  {
    title: "Observe before optimising",
    body: "Measure first. Numbers turn opinions about performance into decisions.",
  },
  {
    title: "Boring in production",
    body: "Well-understood tools, small changes, fast rollbacks. Excitement belongs in the roadmap, not the pager.",
  },
];

export const about = [
  "I've been building production software since 2022 — first as a volunteer developer, then through internships, and now as a full-time frontend engineer and a co-founder. I started on the frontend, building responsive, accessible React and Next.js applications, and grew into the backend, mobile and deployment work that sits underneath.",
  "I co-founded Riderr, a logistics platform connecting customers, riders and logistics companies across Nigeria. I built across the whole product — the mobile app, the web frontend and the backend — and I look after how it ships and runs: Docker containers, GitHub Actions pipelines and deployments. Being the person who ships the feature and the person who gets the call when it breaks has shaped how I build.",
  "Alongside that I'm a full-time frontend engineer at EchoBits Technologies and a Software Engineering Intern at NITDA, and I'm completing a B.Sc. in Software Engineering at Bayero University Kano, where my final year project, SiloSense, detects knowledge silos in codebases from their Git history.",
  "I also serve as Infrastructure Lead for Google Developer Groups on Campus, looking after the chapter's technical platform and tooling.",
];

export type Education = {
  school: string;
  degree: string;
  start?: string;
  end?: string;
  /** e.g. "CGPA 4.5 / 5.0" — add it if it's strong. */
  grade?: string;
  notes?: string;
};

export const education: Education[] = [
  {
    school: "Bayero University Kano",
    degree: "B.Sc. Software Engineering",
    end: "Dec 2026 (expected)",
    // grade: "CGPA … / 5.0", // TODO: add if strong
    notes: "Final year project: SiloSense — knowledge concentration risk detection from Git history.",
  },
];

export function educationPeriod(e: Education) {
  if (e.start) return `${e.start} — ${e.end ?? "Present"}`;
  return e.end ?? "";
}

export type Credential = {
  name: string;
  issuer: string;
  year: string;
  url?: string;
};

// TODO: add certifications (e.g. Google Cloud ACE, AWS SAA, CKA, Terraform Associate).
// The section is hidden while this list is empty.
export const credentials: Credential[] = [
  // { name: "Associate Cloud Engineer", issuer: "Google Cloud", year: "2026", url: "https://…" },
];

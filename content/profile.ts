// Skills, principles, education and credentials.
// Only list tools you can defend in a technical interview — a shorter, honest list
// reads as more senior than a long one.

export const capabilities = [
  {
    title: "Software Engineering",
    summary:
      "Full-stack product work with typed, tested code. Interfaces that are fast and accessible; APIs that are predictable and documented.",
    tools: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "Cloud Infrastructure",
    summary:
      "Designing and running workloads on managed cloud — networking, identity, compute and storage defined as code and reproducible from scratch.",
    tools: ["Google Cloud", "AWS", "Terraform", "Linux", "Networking", "IAM"],
  },
  {
    title: "DevOps & Platform",
    summary:
      "The path from commit to production: pipelines, containers, orchestration and the observability that tells you it is working.",
    tools: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Nginx", "Prometheus", "Grafana"],
  },
];

// Everything else in the toolbox. Shown on the About page and the résumé.
export const toolbox = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Accessibility (WCAG)",
  "SEO",
  "GSAP",
  "Three.js",
  "Figma",
  "Git & GitHub",
  "Postman",
  "Webpack",
  "ESLint",
  "Prettier",
];

// How I work with people. Each one is tied to something I've actually done.
export const strengths = [
  {
    title: "Communication",
    body: "I explain technical trade-offs in plain language — to co-founders deciding what to build, to designers reviewing a flow, and to students deploying their first app at GDG sessions.",
  },
  {
    title: "Problem solving",
    body: "I break problems down until they're measurable. SiloSense started as a vague worry — who knows this code? — and became a scoring model I could test against real repositories.",
  },
  {
    title: "Leadership",
    body: "I've led a frontend team through sprints and code review, co-founded a company, and lead infrastructure for a developer community. I lead by setting clear conventions and unblocking people.",
  },
  {
    title: "Ownership",
    body: "At Riderr I own production end to end. If I ship it, I monitor it, and if it breaks, I fix it and make sure it doesn't break the same way twice.",
  },
  {
    title: "Collaboration",
    body: "Most of my work has been cross-functional — with designers, backend engineers, QA and product. I review generously, ask early, and document decisions so the team isn't waiting on me.",
  },
  {
    title: "Mentoring",
    body: "I've mentored junior developers on the job and student developers through GDG. Teaching forces me to understand things properly, and it multiplies what a team can do.",
  },
  {
    title: "Adaptability",
    body: "I've moved from frontend into full-stack, mobile and infrastructure as each role needed. I pick up new tools quickly and I'm comfortable being the person who figures it out first.",
  },
  {
    title: "Attention to detail",
    body: "Accessibility, performance and the last 5% of polish matter to me — from WCAG fixes at EchoBits to SSR and SEO work at Steamdledge.",
  },
];

export const principles = [
  {
    title: "Automate the second time",
    body: "Doing something once is exploration. Doing it twice is a pattern — and patterns belong in a pipeline.",
  },
  {
    title: "Infrastructure is code",
    body: "If it is not in version control, reviewed and reproducible, it does not exist. Clicking in a console is for reading, not changing.",
  },
  {
    title: "Observe before optimising",
    body: "Measure first. Logs, metrics and traces turn opinions about performance into decisions.",
  },
  {
    title: "Boring in production",
    body: "Well-understood tools, small changes, fast rollbacks. Excitement belongs in the roadmap, not the pager.",
  },
];

export const about = [
  "I'm a software engineer with over three years of professional experience, based in Abuja. I started on the frontend — building responsive, accessible React and Next.js applications — and grew into owning what sits underneath: the backends, pipelines and cloud environments that decide whether software is reliable once real people use it.",
  "I co-founded Riderr, a logistics platform connecting customers, riders and logistics companies across Nigeria. I built across the whole product — the mobile app, the web frontend and the backend — and I run all of its infrastructure: environments, pipelines, deployments and monitoring. Being the person who ships the feature and the person paged when it breaks has shaped how I build.",
  "Alongside that I'm a Software Engineering Intern at NITDA and a frontend engineer at EchoBits Technologies, and I'm completing a B.Sc. in Software Engineering at Bayero University Kano, where my final year project, SiloSense, detects knowledge silos in codebases from their Git history.",
  "I also lead infrastructure for Google Developer Groups on Campus, where I run the chapter's technical platform and teach other student developers how to deploy, automate and operate what they build.",
];

export type Education = {
  school: string;
  degree: string;
  start?: string;
  end?: string;
  notes?: string;
};

export const education: Education[] = [
  {
    school: "Bayero University Kano",
    degree: "B.Sc. Software Engineering",
    end: "Dec 2026 (expected)",
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

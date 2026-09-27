// Skills, principles, education and credentials.
// Only list tools you can defend in a technical interview — a shorter, honest list
// reads as more senior than a long one.

export const capabilities = [
  {
    title: "Software Engineering",
    summary:
      "Full-stack product work with typed, tested code. Interfaces that are fast and accessible; APIs that are predictable and documented.",
    tools: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "REST APIs", "SQL", "MongoDB"],
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
  "I'm a software engineer who has grown from building product interfaces into owning what sits underneath them — the pipelines, containers and cloud environments that decide whether software is reliable once real people use it.",
  "I co-founded Riderr, a logistics platform connecting customers, riders and logistics companies across Nigeria. I built across the whole product — the mobile app, the web frontend and the backend — and I run all of its infrastructure: environments, pipelines, deployments and monitoring. Being the person who ships the feature and the person paged when it breaks has shaped how I build.",
  "Before that, most of my work was full-stack: AI-assisted tools for job seekers, freelancers and learners, built and deployed end to end. They taught me that the product is only half the job. The other half is getting it to production safely, keeping it up and changing it without fear.",
  "I also lead infrastructure for Google Developer Groups on Campus, where I run the chapter's technical platform and teach other student developers how to deploy, automate and operate what they build.",
];

export type Education = {
  school: string;
  degree: string;
  start: string;
  end?: string;
  notes?: string;
};

// TODO: add your degree. The section is hidden while this list is empty.
export const education: Education[] = [
  // { school: "University", degree: "B.Sc. Computer Science", start: "2022", end: "2026" },
];

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

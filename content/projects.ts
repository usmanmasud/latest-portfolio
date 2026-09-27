// Projects power /work, each /work/[slug] case study, the home page and the résumé.
//
// To add a project: copy the template at the bottom of this file, fill it in, and
// drop screenshots / architecture diagrams into /public/projects. Every optional
// field is rendered only when present, so a short entry still looks complete.
//
// Order matters — projects appear in the order listed. Put your strongest first.

export type ProjectCategory = "Software" | "Cloud" | "DevOps" | "Platform";

export type Project = {
  slug: string;
  title: string;
  /** One sentence. Appears on cards and in the work index. */
  tagline: string;
  category: ProjectCategory;
  year?: string;
  role?: string;
  status?: "Live" | "In progress" | "Archived";
  /** Shown on the home page when true. Keep it to 4. */
  featured?: boolean;
  image?: { src: string; width: number; height: number };
  stack: string[];
  links?: { live?: string; repo?: string; writeup?: string };

  /** Case study body. Only `overview` is required. */
  overview: string;
  problem?: string;
  approach?: string[];
  architecture?: {
    image?: { src: string; width: number; height: number };
    notes: string[];
  };
  outcomes?: string[];
  /** Short headline numbers, e.g. { value: "-70%", label: "deploy time" }. */
  metrics?: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "riderr",
    title: "Riderr",
    tagline:
      "A logistics platform connecting customers, riders and logistics companies — mobile, web, backend and infrastructure.",
    category: "Platform",
    role: "Co-founder & Software Engineer",
    status: "Live",
    featured: true,
    image: { src: "/projects/riderr.png", width: 1600, height: 860 },
    // TODO: replace with the exact tools (e.g. React Native/Flutter, Node.js/NestJS, PostgreSQL, AWS/GCP, Docker…)
    stack: ["iOS & Android app", "Web frontend", "Backend API", "Real-time GPS tracking", "Cloud infrastructure", "CI/CD"],
    links: { live: "https://www.riderr.ng/" },
    overview:
      "Riderr is a Nigerian logistics platform that brings customers, riders and logistics companies onto one system: instant delivery requests, smart rider matching, upfront pricing and live GPS tracking from pickup to drop-off, with a dashboard for partner companies to manage their fleets. As a co-founder and engineer I built across the whole product — the mobile app, the web frontend and the backend — and I own the infrastructure and DevOps that keep it running.",
    problem:
      "Businesses struggle to find dependable delivery, while capable riders have no unified marketplace. Logistics companies manage riders with phone calls and spreadsheets, and customers get no visibility into where their package is or what it will cost.",
    approach: [
      "Mobile app for iOS and Android: request a delivery, see the price upfront, and follow the rider live on a map.",
      "Web frontend and partner dashboard where logistics companies manage riders, deliveries and performance.",
      "Backend services for rider matching, pricing by distance and availability, delivery state and payments.",
      "Real-time location pipeline streaming rider GPS updates to customers and partners.",
    ],
    architecture: {
      // TODO: add a diagram at /public/projects/riderr-architecture.png and describe the real components.
      notes: [
        "Own the full infrastructure: environments, deployments, networking, secrets and databases.",
        "CI/CD pipelines that build, test and ship the backend, web and mobile releases.",
        "Monitoring, logging and alerting so issues surface before customers notice them.",
        "Backups and recovery for production data.",
      ],
    },
    // TODO: add real outcomes and numbers — deliveries completed, active riders, partner
    // companies, cities, uptime, deploy frequency, cost savings. These are what hiring managers read first.
    // outcomes: ["…"],
    // metrics: [{ value: "…", label: "Deliveries completed" }],
  },
  {
    slug: "curated",
    title: "CuratEd",
    tagline: "Smart YouTube search that returns only the videos relevant to what you asked.",
    category: "Software",
    role: "Frontend Lead",
    status: "Live",
    featured: true,
    image: { src: "/cur.jpg", width: 2880, height: 1620 },
    stack: ["React", "YouTube Data API", "Vercel"], // TODO: confirm stack
    links: { live: "https://devcurated.vercel.app/" },
    overview:
      "A search interface over YouTube built during my internship at Techies Club and Upskill, where I led frontend development. Instead of returning everything that loosely matches a query, CuratEd filters results down to videos that are directly relevant to it.",
    problem:
      "YouTube search optimises for engagement, not relevance. Learners searching for a specific topic wade through tangential content, compilations and clickbait before finding what they need.",
    approach: [
      "Led the frontend team: set component conventions, split work into reviewable pieces and owned the final integration.",
      "Designed a clean, fast results view that keeps focus on the query rather than the feed.",
      "Built a responsive layout that holds up from small phones to wide desktops.",
    ],
  },
  {
    slug: "accessme",
    title: "AccessME",
    tagline: "AI interview practice with role-specific questions and voice answers.",
    category: "Software",
    status: "Live",
    featured: true,
    image: { src: "/accessMe.png", width: 1845, height: 854 },
    stack: ["Next.js", "TypeScript", "Speech Recognition API", "LLM API"], // TODO: confirm stack
    links: { live: "https://access-me.vercel.app/sign-in" },
    overview:
      "An AI-powered platform for interview preparation. Users generate questions tailored to a specific role, answer them out loud, and receive feedback on their responses.",
    approach: [
      "Role-specific question generation from a short job description.",
      "Voice input via browser speech recognition so practice mirrors a real interview.",
      "Feedback loop that highlights weak answers and suggests improvements.",
    ],
  },
  {
    slug: "ai-resume-builder",
    title: "AI Resume Builder",
    tagline: "Generate, tailor and export a professional résumé in minutes.",
    category: "Software",
    status: "Live",
    featured: true,
    image: { src: "/ResumeAI.png", width: 1394, height: 636 },
    stack: ["Next.js", "TypeScript", "LLM API", "PDF export"], // TODO: confirm stack
    links: { live: "https://ai-resume-builder-hjoc.vercel.app/" },
    overview:
      "A full-stack application that turns raw career information into a well-structured résumé. The AI formats and strengthens content against industry conventions and a target job description.",
    approach: [
      "Section-based editor with real-time content suggestions.",
      "Rewrites bullet points against the target role's requirements.",
      "Client-side PDF export with consistent typography.",
    ],
  },
  {
    slug: "draftly-ai",
    title: "DraftlyAI",
    tagline: "Business proposals generated from a short brief using Gemini.",
    category: "Software",
    status: "Live",
    featured: true,
    image: { src: "/draftlyAI.png", width: 1905, height: 803 },
    stack: ["Next.js", "Gemini API", "Vercel"], // TODO: confirm stack
    links: { live: "https://drafly.vercel.app/" },
    overview:
      "Freelancers and agencies fill in a project title, client, scope, budget and deadline; DraftlyAI returns a structured proposal with introduction, overview, deliverables, timeline and budget sections.",
    approach: [
      "Constrained prompt design so every proposal follows the same professional structure.",
      "Form validation up front to keep generation predictable and cheap.",
    ],
  },
  {
    slug: "prompt-ai",
    title: "PromptAI",
    tagline: "A community library for sharing, discovering and upvoting AI prompts.",
    category: "Software",
    status: "Live",
    image: { src: "/promptAI.png", width: 1106, height: 516 },
    stack: ["Next.js", "MongoDB", "NextAuth"], // TODO: confirm stack
    links: { live: "https://promptai-orpin.vercel.app/" },
    overview:
      "A full-stack community app where users post effective prompts for different AI tools, browse by category, save favourites and upvote useful entries.",
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    tagline: "Everyday income and spending, categorised with a live balance.",
    category: "Software",
    status: "Live",
    image: { src: "/expense.png", width: 1920, height: 839 },
    stack: ["React", "JavaScript"], // TODO: confirm stack
    links: {
      live: "https://expense-tracter-s872r781w-usmanmasuds-projects.vercel.app/",
    },
    overview:
      "A lightweight budgeting tool: add, edit and delete transactions, categorise spending and see an up-to-date summary of income, expenses and balance.",
  },

  // ─── Template: a cloud / DevOps case study ───────────────────────────────────
  // Infrastructure work is judged on decisions and results, not screenshots.
  // Fill in problem → approach → architecture → outcomes, and add a diagram.
  //
  // {
  //   slug: "k8s-platform",
  //   title: "Internal Kubernetes Platform",
  //   tagline: "Self-service deploys for 12 services on GKE with GitOps.",
  //   category: "Platform",
  //   year: "2026",
  //   role: "Infrastructure Lead",
  //   status: "Live",
  //   featured: true,
  //   image: { src: "/projects/k8s-platform.png", width: 1600, height: 900 },
  //   stack: ["GKE", "Terraform", "Argo CD", "GitHub Actions", "Prometheus", "Grafana"],
  //   links: { repo: "https://github.com/usmanmasud/…" },
  //   overview: "…",
  //   problem: "…",
  //   approach: ["…", "…"],
  //   architecture: {
  //     image: { src: "/projects/k8s-platform-arch.png", width: 1600, height: 1000 },
  //     notes: ["…", "…"],
  //   },
  //   outcomes: ["…", "…"],
  //   metrics: [
  //     { value: "40 min → 6 min", label: "Deploy time" },
  //     { value: "99.9%", label: "Uptime over 90 days" },
  //   ],
  // },
];

export const categories: ProjectCategory[] = ["Software", "Cloud", "DevOps", "Platform"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

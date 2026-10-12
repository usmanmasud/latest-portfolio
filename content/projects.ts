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
  /** Set false to keep it off the résumé — e.g. when a role in Experience already covers it. */
  resume?: boolean;
  /** One résumé line about what you engineered (not what the product does). */
  engineering?: string;
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
  /** Extra screenshots shown after the approach section. */
  gallery?: { src: string; width: number; height: number; caption?: string }[];
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
    stack: ["iOS & Android app", "Web frontend", "Backend API", "Real-time GPS tracking", "Docker", "GitHub Actions"],
    resume: false, // covered by the Riderr role in Experience
    links: { live: "https://www.riderr.ng/" },
    overview:
      "Riderr is a Nigerian logistics platform that brings customers, riders and logistics companies onto one system: instant delivery requests, smart rider matching, upfront pricing and live GPS tracking from pickup to drop-off, with a dashboard for partner companies to manage their fleets. As a co-founder and engineer I built across the whole product — the mobile app, the web frontend and the backend — and I own how it is deployed and run.",
    problem:
      "Businesses struggle to find dependable delivery, while capable riders have no unified marketplace. Logistics companies manage riders with phone calls and spreadsheets, and customers get no visibility into where their package is or what it will cost.",
    approach: [
      "Mobile app for iOS and Android: request a delivery, see the price upfront, and follow the rider live on a map.",
      "Web frontend and partner dashboard where logistics companies manage riders, deliveries and performance.",
      "Backend services for rider matching, pricing by distance and availability, delivery state and payments.",
      "Real-time location pipeline streaming rider GPS updates to customers and partners.",
    ],
    architecture: {
      // TODO: add a diagram at /public/projects/riderr-architecture.png, name the cloud
      // provider and database, and describe monitoring and backups if you run them.
      notes: [
        "Backend and web services are packaged as Docker containers, so every environment runs the same build.",
        "GitHub Actions pipelines build, test and deploy on every merge — no manual release steps.",
        "One engineer owns the path from commit to production, which keeps releases small and frequent.",
      ],
    },
    // TODO: add real outcomes and numbers — deliveries completed, active riders, partner
    // companies, cities, uptime, deploy frequency, cost savings. These are what hiring managers read first.
    // outcomes: ["…"],
    // metrics: [{ value: "…", label: "Deliveries completed" }],
  },
  {
    slug: "silosense",
    title: "SiloSense",
    tagline:
      "Mines Git history to show where knowledge is concentrated in too few developers — before someone leaves.",
    category: "Software",
    year: "2026",
    role: "Final year project · B.Sc. Software Engineering",
    status: "Live",
    featured: true,
    image: { src: "/projects/silosense.png", width: 1600, height: 900 },
    // TODO: confirm stack (frontend, backend, database, ML library, hosting on Render)
    stack: ["GitHub / GitLab APIs", "Git mining", "Risk scoring", "Machine learning", "Data visualisation", "Render"],
    engineering:
      "Mines commit, blame and pull-request history through the GitHub and GitLab APIs and scores every component 0–100 for knowledge-concentration risk (contributor concentration, recency, complexity); validated against real contributor departures in 5–10 open-source repositories.",
    links: { live: "https://silosense-35ll.onrender.com/" },
    overview:
      "SiloSense is my final year project in Software Engineering at Bayero University Kano. It mines a repository's commit, blame and pull-request history to find components where knowledge is concentrated among too few developers, scores each one from 0 to 100, and shows the results as an interactive heatmap, with alerts and pairing recommendations to spread ownership.",
    problem:
      "Every codebase has files only one person really understands. Teams usually find out when that person goes on leave or resigns — the so-called truck factor. Existing tools show who committed what, but not where that concentration has become a risk.",
    approach: [
      "Repository mining: extract commit, blame and pull-request metadata through the GitHub and GitLab APIs.",
      "Component-level risk score: Risk = 100 × (w₁·C + w₂·R + w₃·X), combining contributor concentration (C), recency of the main contributors (R) and complexity (X), each normalised to [0, 1].",
      "Weights are tuned during evaluation rather than fixed, so the model can be recalibrated per project; an optional lightweight ML model refines the baseline score.",
      "Interactive heatmap with drill-down to the files and contributors behind each score.",
      "Historical tracking with threshold alerts, plus pairing recommendations that suggest who should work together to reduce single-owner risk.",
    ],
    gallery: [
      {
        src: "/projects/silosense-dashboard.png",
        width: 1600,
        height: 1000,
        caption: "Dashboard: repository heatmap, component risk detail with contributor share, and a recommended pairing.",
      },
    ],
    outcomes: [
      "Evaluated on real open-source repositories (5–10 projects), comparing flagged components against documented contributor departures rather than synthetic data.",
      // TODO: add your evaluation results (precision/recall, repos analysed, grade, supervisor feedback).
    ],
  },
  {
    slug: "natik",
    title: "NATIK",
    tagline:
      "An AI operations copilot for African businesses — ask questions of your payments, customers and staff data in plain language.",
    category: "Software",
    year: "2025",
    role: "Hackathon project", // TODO: add the hackathon name and your team role, e.g. "Hackathon · Full-stack engineer"
    status: "Live",
    featured: true,
    image: { src: "/projects/natik.png", width: 1600, height: 1000 },
    // TODO: confirm stack (database, auth, AI model/provider)
    stack: ["Next.js", "TypeScript", "LLM API", "Authentication", "Vercel"],
    // TODO: say HOW the model reads business data (text-to-SQL? retrieval? tool calls?)
    // and how you kept answers accurate and each business's data private.
    engineering:
      "Hackathon build in Next.js: an LLM copilot that answers plain-language questions over a business's payments, customers and tasks, raises alerts and creates follow-up tasks, with accounts, onboarding and tiered plans.",
    links: { live: "https://natik2.natik.com.ng/" },
    overview:
      "NATIK is an AI operations platform I built for a hackathon. It pulls a business's fragmented data — payments, customers, staff and orders — into one place, and lets owners ask plain-language questions — “Which customers owe us money?”, “What are my biggest problems this week?” — and get specific answers, early warnings and follow-up tasks created for the team automatically.",
    problem:
      "Small and medium businesses across Africa run on scattered records — payments in one place, customers in another, tasks in chat threads. Owners don't have time to build dashboards or reports, so problems like overdue payments and neglected customers surface only once they've become expensive.",
    approach: [
      "AI business copilot: natural-language questions answered from the business's own data, with recommended actions.",
      "Operations intelligence: one view across sales, payments, staff and customers.",
      "Predictive alerts for late payments, overdue tasks and customers at risk of churning.",
      "Task automation: the copilot creates follow-up tasks and assigns them to the right team member.",
      "Accounts, onboarding and tiered plans (Free, Growth, Enterprise) priced in Naira — built as a product, not just a demo.",
    ],
    // TODO: add the hackathon result (placement, prize, finalists) — it's the strongest line in this case study.
    // outcomes: ["…"],
  },
  {
    slug: "curated",
    title: "CuratEd",
    tagline: "Smart YouTube search that returns only the videos relevant to what you asked.",
    category: "Software",
    role: "Frontend Lead",
    year: "2025",
    status: "Live",
    featured: true,
    image: { src: "/cur.jpg", width: 2880, height: 1620 },
    stack: ["React", "YouTube Data API", "Vercel"], // TODO: confirm stack
    resume: false, // covered by the Lead Techies role in Experience
    links: { live: "https://devcurated.vercel.app/" },
    overview:
      "A search interface over YouTube built at Lead Techies Collab & Upskill, where I led the frontend team. Instead of returning everything that loosely matches a query, CuratEd filters results down to videos that are directly relevant to it.",
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
    image: { src: "/accessMe.png", width: 1845, height: 854 },
    stack: ["Next.js", "TypeScript", "Speech Recognition API", "LLM API"], // TODO: confirm stack
    engineering:
      "Generates role-specific interview questions with an LLM and captures spoken answers through the browser's speech recognition API to give feedback on each response.",
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

// Résumé projects skip anything already covered by a role in Experience.
export const resumeProjects = projects.filter((p) => p.resume !== false).slice(0, 2);

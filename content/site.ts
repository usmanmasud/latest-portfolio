// Global identity and contact details. Everything on the site reads from here.

export const site = {
  name: "Usman Masud Aliyu",
  shortName: "Usman Masud",
  initials: "UM",
  role: "Software Engineer — Cloud & DevOps",
  url: "https://usmanmasud.vercel.app",
  email: "usmanmasud260@gmail.com",

  // Shown in the hero and footer. `timezone` drives the live local-time readout.
  location: "Nigeria",
  timezone: "Africa/Lagos",
  timezoneLabel: "WAT",

  availability: {
    open: true,
    label: "Open to full-time roles and select contracts",
  },

  headline: "I build software, and the infrastructure that keeps it running.",
  intro:
    "Engineer working across the stack — from product interfaces and APIs to CI/CD pipelines, containers and cloud platforms. I care about systems that are simple to operate, cheap to change and boring in production.",
  description:
    "Usman Masud Aliyu — software engineer focused on cloud infrastructure, DevOps and platform engineering. Infrastructure Lead at Google Developer Groups on Campus.",

  // The /resume page is generated from this site's content. This is the external PDF.
  resumePdf:
    "https://drive.google.com/file/d/1FyhCuqFYHNJuTJJbU1N_vcQC8hJrLcES/view?usp=drive_link",

  socials: [
    { label: "GitHub", href: "https://github.com/usmanmasud", handle: "usmanmasud" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/usman-masud-aliyu-bb596a2a1/",
      handle: "usman-masud-aliyu",
    },
    // { label: "X", href: "https://x.com/…", handle: "…" },
  ],
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

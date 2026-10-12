// Global identity and contact details. Everything on the site reads from here.

export const site = {
  name: "Usman Masud Aliyu",
  shortName: "Usman Masud",
  initials: "UM",
  role: "Software Engineer — Full-Stack & Cloud",
  url: "https://usman.riderr.ng",
  email: "usmanmasud260@gmail.com",

  // Shown in the hero and footer. `timezone` drives the live local-time readout.
  location: "Abuja, Nigeria",
  relocation: "Open to relocation",
  timezone: "Africa/Lagos",
  timezoneLabel: "WAT",

  availability: {
    open: true,
    label: "Open to full-time roles · open to relocation",
  },

  headline: "I build software, and the infrastructure that keeps it running.",
  intro:
    "Software engineer building production software since 2022 — through volunteer work, internships, a full-time frontend role and a logistics startup I co-founded. I work across the stack, from interfaces, mobile apps and APIs to the Docker and CI/CD pipelines that ship them.",
  description:
    "Usman Masud Aliyu — full-stack software engineer. Co-founder of Riderr, frontend engineer at EchoBits Technologies and Infrastructure Lead at Google Developer Groups on Campus.",

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

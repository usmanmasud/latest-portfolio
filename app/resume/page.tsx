import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PrintButton } from "@/components/print-button";
import { Button } from "@/components/ui";
import { leadershipRoles, period, type Role, workRoles } from "@/content/experience";
import { capabilities, credentials, education, educationPeriod, strengths, toolbox } from "@/content/profile";
import { featuredProjects, projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${site.name} — ${site.role}.`,
  alternates: { canonical: "/resume" },
};

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 border-b border-line pb-2 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
      {children}
    </h2>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <div className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-medium">
          {role.title}, <span className="font-normal text-fg-2">{role.org}</span>
        </h3>
        <p className="font-mono text-xs text-muted tabular-nums">{period(role)}</p>
      </div>
      <p className="mt-1.5 text-[15px] leading-relaxed text-fg-2 print:text-[10.5pt]">{role.summary}</p>
      {role.highlights && (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-fg-2 marker:text-line-strong print:text-[10.5pt]">
          {role.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ResumePage() {
  const selected = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 4);
  const host = site.url.replace(/^https?:\/\//, "");

  return (
    <div className="container-page pt-10 pb-24 md:pt-16 print:p-0">
      <div className="mx-auto mb-8 flex max-w-[52rem] flex-wrap items-center justify-between gap-3 print:hidden">
        <p className="label">Résumé · generated from this site</p>
        <div className="flex flex-wrap gap-2">
          <PrintButton />
          <Button href={site.resumePdf} variant="secondary" external>
            PDF version
          </Button>
        </div>
      </div>

      <article className="mx-auto max-w-[52rem] rounded-lg border border-line bg-bg p-6 sm:p-12 print:max-w-none print:border-0 print:p-0">
        <header className="flex flex-wrap items-end justify-between gap-6 border-b border-fg pb-6">
          <div>
            <h1 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl print:text-[24pt]">{site.name}</h1>
            <p className="mt-1.5 text-fg-2">{site.role}</p>
          </div>
          <ul className="space-y-0.5 text-sm text-fg-2 sm:text-right print:text-[9.5pt]">
            <li>
              <a href={`mailto:${site.email}`} className="link">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.url} className="link">
                {host}
              </a>
            </li>
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="link">
                  {s.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                </a>
              </li>
            ))}
            <li className="hidden print:list-item">{site.phone}</li>
            <li className="text-muted">{site.location}</li>
          </ul>
        </header>

        <div className="mt-8 space-y-9 print:mt-6 print:space-y-6">
          <section>
            <Heading>Summary</Heading>
            <p className="leading-relaxed text-fg-2 print:text-[10.5pt]">{site.intro}</p>
          </section>

          {workRoles.length > 0 && (
            <section>
              <Heading>Experience</Heading>
              <div className="space-y-6">
                {workRoles.map((r) => (
                  <RoleEntry key={r.org + r.title} role={r} />
                ))}
              </div>
            </section>
          )}

          {leadershipRoles.length > 0 && (
            <section>
              <Heading>Leadership</Heading>
              <div className="space-y-6">
                {leadershipRoles.map((r) => (
                  <RoleEntry key={r.org + r.title} role={r} />
                ))}
              </div>
            </section>
          )}

          <section>
            <Heading>Selected projects</Heading>
            <ul className="space-y-3">
              {selected.map((p) => (
                <li key={p.slug} className="break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-medium">
                      <a href={`${site.url}/work/${p.slug}`} className="link">
                        {p.title}
                      </a>
                    </h3>
                    <p className="font-mono text-xs text-muted">{p.stack.slice(0, 3).join(" · ")}</p>
                  </div>
                  <p className="mt-1 text-[15px] leading-relaxed text-fg-2 print:text-[10.5pt]">{p.tagline}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading>Skills</Heading>
            <dl className="space-y-2 text-[15px] print:text-[10.5pt]">
              {capabilities.map((c) => (
                <div key={c.title} className="grid gap-x-4 sm:grid-cols-[11rem_1fr]">
                  <dt className="font-medium">{c.title}</dt>
                  <dd className="text-fg-2">{c.tools.join(", ")}</dd>
                </div>
              ))}
              <div className="grid gap-x-4 sm:grid-cols-[11rem_1fr]">
                <dt className="font-medium">Tools & practices</dt>
                <dd className="text-fg-2">{toolbox.join(", ")}</dd>
              </div>
              <div className="grid gap-x-4 sm:grid-cols-[11rem_1fr]">
                <dt className="font-medium">Strengths</dt>
                <dd className="text-fg-2">{strengths.map((s) => s.title).join(", ")}</dd>
              </div>
            </dl>
          </section>

          {education.length > 0 && (
            <section>
              <Heading>Education</Heading>
              {education.map((e) => (
                <div key={e.school} className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p>
                    <span className="font-medium">{e.degree}</span>
                    <span className="text-fg-2">, {e.school}</span>
                  </p>
                  <p className="font-mono text-xs text-muted">
                    {educationPeriod(e)}
                  </p>
                  {e.notes && (
                    <p className="mt-1 w-full text-[15px] text-fg-2 print:text-[10.5pt]">{e.notes}</p>
                  )}
                </div>
              ))}
            </section>
          )}

          {credentials.length > 0 && (
            <section>
              <Heading>Certifications</Heading>
              <ul className="space-y-1">
                {credentials.map((c) => (
                  <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span>
                      <span className="font-medium">{c.name}</span>
                      <span className="text-fg-2">, {c.issuer}</span>
                    </span>
                    <span className="font-mono text-xs text-muted">{c.year}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </div>
  );
}

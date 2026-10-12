import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PrintButton } from "@/components/print-button";
import { Button } from "@/components/ui";
import { leadershipRoles, period, type Role, workRoles } from "@/content/experience";
import { capabilities, credentials, education, educationPeriod, toolbox } from "@/content/profile";
import { resumeProjects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${site.name} — ${site.role}.`,
  alternates: { canonical: "/resume" },
};

const body = "text-[15px] leading-relaxed text-fg-2 print:text-[9pt] print:leading-snug";

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 border-b border-line pb-2 font-mono text-[11px] tracking-[0.08em] text-muted uppercase print:mb-1.5 print:pb-0.5 print:text-[8pt]">
      {children}
    </h2>
  );
}

function RoleEntry({ role }: { role: Role }) {
  const bullets = role.highlights ?? [];
  return (
    <div className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-medium print:text-[10pt]">
          {role.title}, <span className="font-normal text-fg-2">{role.org}</span>
          {role.orgNote && <span className="font-normal text-muted"> — {role.orgNote}</span>}
        </h3>
        <p className="font-mono text-xs text-muted tabular-nums print:text-[8pt]">
          {role.type && role.type !== "Co-founder" ? `${role.type} · ` : ""}
          {period(role)}
        </p>
      </div>
      {bullets.length > 0 ? (
        <ul className={`mt-1.5 list-disc space-y-1 pl-5 marker:text-line-strong print:mt-1 print:space-y-0 ${body}`}>
          {bullets.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : (
        <p className={`mt-1.5 print:mt-1 ${body}`}>{role.summary}</p>
      )}
    </div>
  );
}

export default function ResumePage() {
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
        <header className="flex flex-wrap items-end justify-between gap-6 border-b border-fg pb-6 print:pb-2">
          <div>
            <h1 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl print:text-[20pt]">{site.name}</h1>
            <p className="mt-1.5 text-fg-2 print:mt-0.5 print:text-[10pt]">{site.role}</p>
          </div>
          <ul className="space-y-0.5 text-sm text-fg-2 sm:text-right print:space-y-0 print:text-right print:text-[8.5pt]">
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
            <li className="text-muted">
              {site.location} · {site.relocation}
            </li>
          </ul>
        </header>

        <div className="mt-8 space-y-9 print:mt-2.5 print:space-y-2">
          <section>
            <Heading>Summary</Heading>
            <p className={body}>{site.intro}</p>
          </section>

          {workRoles.length > 0 && (
            <section>
              <Heading>Experience</Heading>
              <div className="space-y-6 print:space-y-1.5">
                {workRoles.map((r) => (
                  <RoleEntry key={r.org + r.title} role={r} />
                ))}
              </div>
            </section>
          )}

          {leadershipRoles.length > 0 && (
            <section>
              <Heading>Leadership</Heading>
              <div className="space-y-6 print:space-y-1.5">
                {leadershipRoles.map((r) => (
                  <RoleEntry key={r.org + r.title} role={r} />
                ))}
              </div>
            </section>
          )}

          <section>
            <Heading>Projects</Heading>
            <ul className="space-y-3 print:space-y-1.5">
              {resumeProjects.map((p) => (
                <li key={p.slug} className="break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-medium print:text-[10pt]">
                      <a href={`${site.url}/work/${p.slug}`} className="link">
                        {p.title}
                      </a>
                      {p.role && <span className="font-normal text-muted"> — {p.role}</span>}
                    </h3>
                    {p.year && <p className="font-mono text-xs text-muted print:text-[8pt]">{p.year}</p>}
                  </div>
                  <p className={`mt-1 print:mt-0.5 ${body}`}>{p.engineering ?? p.tagline}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading>Skills</Heading>
            <dl className={`space-y-2 print:space-y-0 ${body}`}>
              {capabilities.map((c) => (
                <div key={c.title} className="grid gap-x-4 sm:grid-cols-[11rem_1fr] print:grid-cols-[9rem_1fr]">
                  <dt className="font-medium text-fg">{c.title}</dt>
                  <dd>{c.tools.join(", ")}</dd>
                </div>
              ))}
              <div className="grid gap-x-4 sm:grid-cols-[11rem_1fr] print:grid-cols-[9rem_1fr]">
                <dt className="font-medium text-fg">Also</dt>
                <dd>{toolbox.join(", ")}</dd>
              </div>
            </dl>
          </section>

          {education.length > 0 && (
            <section>
              <Heading>Education</Heading>
              {education.map((e) => (
                <div key={e.school} className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="print:text-[10pt]">
                    <span className="font-medium">{e.degree}</span>
                    <span className="text-fg-2">, {e.school}</span>
                    {e.grade && <span className="text-fg-2"> · {e.grade}</span>}
                  </p>
                  <p className="font-mono text-xs text-muted print:text-[8pt]">
                    {educationPeriod(e)}
                  </p>
                  {e.notes && (
                    <p className={`mt-1 w-full print:hidden ${body}`}>{e.notes}</p>
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

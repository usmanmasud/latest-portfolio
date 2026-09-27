import type { Metadata } from "next";
import Image from "next/image";
import { Capabilities } from "@/components/capabilities";
import { ContactCTA } from "@/components/contact-cta";
import { RoleList } from "@/components/experience";
import { ArrowUpRight } from "@/components/icons";
import { Section, TextLink } from "@/components/ui";
import { leadershipRoles, workRoles } from "@/content/experience";
import { about, credentials, education, educationPeriod, principles, strengths, toolbox } from "@/content/profile";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Background, principles, experience and leadership — ${site.name}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  let n = 0;
  const idx = () => String(++n).padStart(2, "0");

  return (
    <>
      <header className="container-page grid gap-10 pt-16 pb-16 md:grid-cols-12 md:gap-8 md:pt-28 md:pb-24">
        <div className="md:col-span-8">
          <p className="label settle">About</p>
          <h1
            className="settle mt-5 text-[2.5rem] leading-[1.04] font-medium tracking-[-0.035em] text-balance md:text-[4rem]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Engineer by trade, operator by temperament.
          </h1>
          <div
            className="settle mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-fg-2 text-pretty"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="settle mt-8" style={{ "--i": 3 } as React.CSSProperties}>
            <TextLink href="/resume">Read the résumé</TextLink>
          </div>
        </div>

        <figure
          className="settle md:col-span-4 md:col-start-9 md:pt-12"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <div className="relative aspect-[4/5] w-full max-w-[18rem] overflow-hidden rounded-lg border border-line bg-surface">
            <Image
              src="/me.jpg"
              alt={`Portrait of ${site.name}`}
              fill
              sizes="288px"
              priority
              className="object-cover grayscale-[15%]"
            />
          </div>
          <figcaption className="label mt-3">{site.name} · {site.location}</figcaption>
        </figure>
      </header>

      <Section index={idx()} label="Strengths" title="What I bring to a team.">
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {strengths.map((s) => (
            <div key={s.title} className="bg-bg p-6 md:p-7">
              <h3 className="text-lg font-medium tracking-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted text-pretty">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index={idx()} label="Principles" title="How I approach the work.">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p.title} className="border-t border-line pt-5">
              <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-medium tracking-tight">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted text-pretty">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index={idx()} label="Capabilities" title="What I work with.">
        <Capabilities />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
          <p className="label shrink-0">Also</p>
          <p className="font-mono text-xs leading-relaxed text-fg-2">{toolbox.join("  ·  ")}</p>
        </div>
      </Section>

      {workRoles.length > 0 && (
        <Section index={idx()} label="Experience">
          <RoleList roles={workRoles} detailed />
        </Section>
      )}

      {leadershipRoles.length > 0 && (
        <Section index={idx()} label="Leadership & community">
          <RoleList roles={leadershipRoles} detailed />
        </Section>
      )}

      {(education.length > 0 || credentials.length > 0) && (
        <Section index={idx()} label="Education & credentials">
          <div className="grid gap-12 md:grid-cols-2">
            {education.length > 0 && (
              <div>
                <h3 className="label mb-4 text-fg">Education</h3>
                <ul className="border-t border-line">
                  {education.map((e) => (
                    <li key={e.school + e.degree} className="border-b border-line py-5">
                      <p className="font-medium">{e.degree}</p>
                      <p className="mt-1 text-sm text-muted">
                        {e.school} · {educationPeriod(e)}
                      </p>
                      {e.notes && <p className="mt-2 text-sm text-fg-2">{e.notes}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {credentials.length > 0 && (
              <div>
                <h3 className="label mb-4 text-fg">Certifications</h3>
                <ul className="border-t border-line">
                  {credentials.map((c) => (
                    <li key={c.name} className="border-b border-line py-5">
                      {c.url ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-1 font-medium hover:text-accent"
                        >
                          {c.name}
                          <ArrowUpRight className="size-3.5 opacity-60" />
                        </a>
                      ) : (
                        <p className="font-medium">{c.name}</p>
                      )}
                      <p className="mt-1 text-sm text-muted">
                        {c.issuer} · {c.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>
      )}

      <ContactCTA />
    </>
  );
}

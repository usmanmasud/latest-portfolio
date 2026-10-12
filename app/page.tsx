import { Capabilities } from "@/components/capabilities";
import { ContactCTA } from "@/components/contact-cta";
import { RoleList } from "@/components/experience";
import { LocalTime } from "@/components/local-time";
import { ProjectCard } from "@/components/projects";
import { Button, Section, StatusDot, TextLink } from "@/components/ui";
import { leadershipRoles, roles, workRoles } from "@/content/experience";
import { featuredProjects } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  const current = [workRoles[0], leadershipRoles[0]]
    .filter(Boolean)
    .map((r) => `${r.title.replace(" & Software Engineer", "")}, ${r.org.replace("Google Developer Groups", "GDG")}`);

  const facts = [
    {
      k: "Currently",
      v: current.length ? current.map((c) => <span key={c} className="block">{c}</span>) : site.role,
    },
    { k: "Focus", v: "Full-stack product engineering · Docker · CI/CD" },
    { k: "Based in", v: <>{site.location} · <LocalTime /></> },
    {
      k: "Status",
      v: (
        <span className="inline-flex items-center gap-2">
          {site.availability.open && <StatusDot />}
          {site.availability.label}
        </span>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="container-page pt-16 pb-16 md:pt-32 md:pb-24">
        <p className="label settle">
          {site.name} <span className="mx-2">/</span> {site.role}
        </p>
        <h1
          className="settle mt-6 max-w-5xl text-[2.75rem] leading-[1.02] font-medium tracking-[-0.04em] text-balance sm:text-6xl md:text-[5.25rem]"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {site.headline}
        </h1>
        <p
          className="settle mt-7 max-w-2xl text-lg leading-relaxed text-fg-2 text-pretty md:text-xl md:leading-relaxed"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {site.intro}
        </p>
        <div
          className="settle mt-10 flex flex-wrap items-center gap-3"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <Button href="/work">View work</Button>
          <Button href="/resume" variant="secondary">
            Résumé
          </Button>
        </div>

        <dl
          className="settle mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 md:mt-24"
          style={{ "--i": 4 } as React.CSSProperties}
        >
          {facts.map((f) => (
            <div key={f.k} className="bg-bg px-5 py-4">
              <dt className="label">{f.k}</dt>
              <dd className="mt-2 text-sm leading-snug text-fg-2">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section
        index="01"
        label="Selected work"
        title="Products I've designed, built and shipped end to end."
        action={<TextLink href="/work">All projects</TextLink>}
      >
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} priority={i < 2} />
          ))}
        </div>
      </Section>

      <Section
        index="02"
        label="Capabilities"
        title="From the interface to the infrastructure — one engineer across the whole path to production."
      >
        <Capabilities />
      </Section>

      <Section
        index="03"
        label="Experience"
        title="Roles, leadership and community."
        action={<TextLink href="/about">Full background</TextLink>}
      >
        <RoleList roles={roles} />
      </Section>

      <ContactCTA />
    </>
  );
}

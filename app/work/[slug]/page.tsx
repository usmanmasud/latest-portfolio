import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ContactCTA } from "@/components/contact-cta";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { Button, Tag } from "@/components/ui";
import { getProject, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: project.image ? [{ url: project.image.src }] : undefined,
    },
  };
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
      <h2 className="label md:col-span-3 md:pt-1">{label}</h2>
      <div className="md:col-span-9 md:max-w-2xl">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="relative pl-6 text-[17px] leading-relaxed text-fg-2 text-pretty">
          <span className="absolute top-[0.75em] left-0 h-px w-3 bg-line-strong" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.indexOf(project);
  const next = projects[(i + 1) % projects.length];

  const meta = [
    { k: "Category", v: project.category },
    project.role && { k: "Role", v: project.role },
    project.year && { k: "Year", v: project.year },
    project.status && { k: "Status", v: project.status },
  ].filter(Boolean) as { k: string; v: string }[];

  return (
    <>
      <article>
        <header className="container-page pt-10 md:pt-16">
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>

          <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
              <p className="label settle">
                Case study <span className="mx-2">/</span> {String(i + 1).padStart(2, "0")}
              </p>
              <h1
                className="settle mt-5 text-[2.75rem] leading-[1.02] font-medium tracking-[-0.04em] md:text-7xl"
                style={{ "--i": 1 } as React.CSSProperties}
              >
                {project.title}
              </h1>
              <p
                className="settle mt-6 max-w-2xl text-xl leading-relaxed text-fg-2 text-pretty"
                style={{ "--i": 2 } as React.CSSProperties}
              >
                {project.tagline}
              </p>
              {(project.links?.live || project.links?.repo || project.links?.writeup) && (
                <div
                  className="settle mt-8 flex flex-wrap gap-3"
                  style={{ "--i": 3 } as React.CSSProperties}
                >
                  {project.links?.live && (
                    <Button href={project.links.live} external>
                      Visit live site
                    </Button>
                  )}
                  {project.links?.repo && (
                    <Button href={project.links.repo} variant="secondary" external>
                      Source code
                    </Button>
                  )}
                  {project.links?.writeup && (
                    <Button href={project.links.writeup} variant="secondary" external>
                      Write-up
                    </Button>
                  )}
                </div>
              )}
            </div>

            <dl className="settle grid grid-cols-2 gap-x-6 gap-y-5 self-end md:col-span-4 md:grid-cols-1 md:border-l md:border-line md:pl-8">
              {meta.map((m) => (
                <div key={m.k}>
                  <dt className="label">{m.k}</dt>
                  <dd className="mt-1 text-sm text-fg-2">{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        {project.image && (
          <div className="container-page mt-14 md:mt-20">
            <div className="overflow-hidden rounded-lg border border-line bg-surface">
              <Image
                src={project.image.src}
                width={project.image.width}
                height={project.image.height}
                alt={`${project.title} — screenshot`}
                sizes="(min-width: 1160px) 1096px, 100vw"
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div className="container-page mt-14">
            <dl className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse bg-bg p-6">
                  <dt className="mt-2 text-sm text-muted">{m.label}</dt>
                  <dd className="text-3xl font-medium tracking-tight tabular-nums">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <div className="container-page mt-14 md:mt-20">
          <Block label="Overview">
            <p className="text-[17px] leading-relaxed text-fg-2 text-pretty">{project.overview}</p>
          </Block>

          {project.problem && (
            <Block label="The problem">
              <p className="text-[17px] leading-relaxed text-fg-2 text-pretty">{project.problem}</p>
            </Block>
          )}

          {project.approach && project.approach.length > 0 && (
            <Block label="Approach">
              <Bullets items={project.approach} />
            </Block>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <Block label="Screens">
              <div className="space-y-8">
                {project.gallery.map((g) => (
                  <figure key={g.src}>
                    <div className="overflow-hidden rounded-lg border border-line bg-surface">
                      <Image
                        src={g.src}
                        width={g.width}
                        height={g.height}
                        alt={g.caption ?? `${project.title} — screenshot`}
                        sizes="(min-width: 768px) 672px, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    {g.caption && (
                      <figcaption className="mt-3 text-sm text-muted text-pretty">{g.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </Block>
          )}

          {project.architecture && (
            <Block label="Architecture">
              {project.architecture.image && (
                <div className="mb-8 overflow-hidden rounded-lg border border-line bg-surface">
                  <Image
                    src={project.architecture.image.src}
                    width={project.architecture.image.width}
                    height={project.architecture.image.height}
                    alt={`${project.title} — architecture diagram`}
                    sizes="(min-width: 768px) 672px, 100vw"
                    unoptimized={project.architecture.image.src.endsWith(".svg")}
                    className="h-auto w-full"
                  />
                </div>
              )}
              <Bullets items={project.architecture.notes} />
            </Block>
          )}

          {project.decisions && project.decisions.length > 0 && (
            <Block label="Decisions">
              <div className="space-y-8">
                {project.decisions.map((d) => (
                  <div key={d.title}>
                    <h3 className="text-lg font-medium tracking-tight">{d.title}</h3>
                    <p className="mt-2 text-[17px] leading-relaxed text-fg-2 text-pretty">{d.body}</p>
                  </div>
                ))}
              </div>
            </Block>
          )}

          {project.outcomes && project.outcomes.length > 0 && (
            <Block label="Outcomes">
              <Bullets items={project.outcomes} />
            </Block>
          )}

          <Block label="Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Block>
        </div>

        {next && next.slug !== project.slug && (
          <nav aria-label="Next project" className="container-page mt-6 mb-4">
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-end justify-between gap-6 border-t border-line py-10 md:py-14"
            >
              <div>
                <p className="label">Next project</p>
                <p className="mt-3 text-3xl font-medium tracking-[-0.03em] transition-colors group-hover:text-accent md:text-5xl">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="mb-2 size-6 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-fg" />
            </Link>
          </nav>
        )}
      </article>

      <ContactCTA />
    </>
  );
}

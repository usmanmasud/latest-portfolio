import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowRight } from "./icons";

function Frame({ project, sizes, priority }: { project: Project; sizes: string; priority?: boolean }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface">
      {project.image ? (
        <Image
          src={project.image.src}
          alt={`${project.title} — screenshot`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="font-mono text-sm text-muted">{project.title}</span>
        </div>
      )}
    </div>
  );
}

/** Large card used for featured work on the home page. */
export function ProjectCard({ project, index, priority }: { project: Project; index: number; priority?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <Frame project={project} sizes="(min-width: 768px) 440px, 100vw" priority={priority} />
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="label">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <h3 className="mt-2 text-lg font-medium tracking-tight">{project.title}</h3>
          <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-muted text-pretty">
            {project.tagline}
          </p>
        </div>
        <ArrowRight className="mt-6 shrink-0 text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-fg" />
      </div>
    </Link>
  );
}

/** Dense row used on the /work index. */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid grid-cols-[3rem_1fr_auto] items-center gap-x-4 border-b border-line py-5 md:grid-cols-[3rem_9rem_1fr_9rem_1.25rem] md:gap-x-6 md:py-6"
    >
      <span className="font-mono text-xs text-muted tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative hidden aspect-[16/10] overflow-hidden rounded-[5px] border border-line bg-surface md:block">
        {project.image && (
          <Image
            src={project.image.src}
            alt=""
            fill
            sizes="144px"
            className="object-cover object-left-top"
          />
        )}
      </div>

      <div className="min-w-0">
        <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1 text-[15px] text-muted text-pretty">{project.tagline}</p>
        <p className="mt-2 truncate font-mono text-[11px] text-muted md:hidden">
          {project.category} · {project.stack.slice(0, 3).join(", ")}
        </p>
      </div>

      <div className="hidden text-right md:block">
        <p className="text-sm text-fg-2">{project.category}</p>
        <p className="mt-0.5 truncate font-mono text-[11px] text-muted">
          {project.stack.slice(0, 2).join(" · ")}
        </p>
      </div>

      <ArrowRight className="text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-fg" />
    </Link>
  );
}

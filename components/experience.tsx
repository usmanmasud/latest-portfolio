import { period, type Role } from "@/content/experience";
import { ArrowUpRight } from "./icons";
import { Tag } from "./ui";

export function RoleList({ roles, detailed = false }: { roles: Role[]; detailed?: boolean }) {
  return (
    <ol className="border-t border-line">
      {roles.map((role) => (
        <li
          key={`${role.org}-${role.title}`}
          className="grid gap-x-8 gap-y-2 border-b border-line py-7 md:grid-cols-[10rem_1fr]"
        >
          <p className="font-mono text-xs text-muted tabular-nums md:pt-1">{period(role)}</p>
          <div>
            <h3 className="text-lg font-medium tracking-tight">
              {role.title}
              <span className="text-muted"> · </span>
              {role.orgUrl ? (
                <a
                  href={role.orgUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-fg-2 hover:text-fg"
                >
                  {role.org}
                  <ArrowUpRight className="size-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              ) : (
                <span className="text-fg-2">{role.org}</span>
              )}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted text-pretty">{role.summary}</p>

            {detailed && role.highlights && role.highlights.length > 0 && (
              <ul className="mt-4 max-w-2xl space-y-2">
                {role.highlights.map((h) => (
                  <li key={h} className="relative pl-5 leading-relaxed text-fg-2 text-pretty">
                    <span className="absolute top-[0.7em] left-0 h-px w-2.5 bg-line-strong" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {detailed && role.tags && role.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

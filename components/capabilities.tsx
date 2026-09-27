import { capabilities } from "@/content/profile";

export function Capabilities() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
      {capabilities.map((c, i) => (
        <div key={c.title} className="flex flex-col bg-bg p-6 md:p-7">
          <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-8 text-lg font-medium tracking-tight">{c.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted text-pretty">{c.summary}</p>
          <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1.5 pt-8 font-mono text-xs text-fg-2">
            {c.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

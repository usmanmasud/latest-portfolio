"use client";

import { useState } from "react";
import { categories, projects, type ProjectCategory } from "@/content/projects";
import { cn } from "@/lib/utils";
import { ProjectRow } from "./projects";

export function WorkIndex() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const available = categories.filter((c) => projects.some((p) => p.category === c));
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      {available.length > 1 && (
        <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
          {(["All", ...available] as const).map((c) => {
            const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                  filter === c
                    ? "border-fg bg-fg text-bg"
                    : "border-line text-fg-2 hover:border-line-strong hover:text-fg",
                )}
              >
                {c}
                <span className="font-mono text-[11px] opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="border-t border-line">
        {visible.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

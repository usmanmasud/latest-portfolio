import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "./icons";

/** A page section: index label in a left rail, content on the right. */
export function Section({
  id,
  index,
  label,
  title,
  action,
  children,
  className,
}: {
  id?: string;
  index?: string;
  label: string;
  title?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("border-t border-line", className)}>
      <div className="container-page grid gap-x-8 gap-y-8 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-3">
          <p className="label md:sticky md:top-24">
            {index && <span className="text-fg">{index}</span>}
            {index && <span className="mx-2">/</span>}
            {label}
          </p>
        </div>
        <div className="md:col-span-9">
          {(title || action) && (
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
              {title && (
                <h2 className="max-w-2xl text-2xl font-medium tracking-[-0.02em] text-balance md:text-[2rem] md:leading-[1.15]">
                  {title}
                </h2>
              )}
              {action}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export function PageHeader({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="container-page pt-16 pb-14 md:pt-28 md:pb-20">
      <p className="label settle">{label}</p>
      <h1
        className="settle mt-5 max-w-4xl text-[2.5rem] leading-[1.04] font-medium tracking-[-0.035em] text-balance md:text-[4rem]"
        style={{ "--i": 1 } as React.CSSProperties}
      >
        {title}
      </h1>
      {children && (
        <div
          className="settle mt-6 max-w-2xl text-lg leading-relaxed text-fg-2 text-pretty"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {children}
        </div>
      )}
    </header>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const cls = cn(
    "group inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors",
    variant === "primary"
      ? "bg-fg text-bg hover:bg-fg/85"
      : "border border-line text-fg hover:border-line-strong hover:bg-surface",
  );
  const Icon = external ? ArrowUpRight : ArrowRight;
  const icon = (
    <Icon className="transition-transform duration-200 group-hover:translate-x-0.5" />
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {icon}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-fg-2 transition-colors hover:text-fg"
    >
      {children}
      <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-fg-2">
      {children}
    </span>
  );
}

export function StatusDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex size-2", className)} aria-hidden>
      <span className="absolute inset-0 animate-ping rounded-full bg-ok opacity-40 motion-reduce:hidden" />
      <span className="relative inline-flex size-2 rounded-full bg-ok" />
    </span>
  );
}

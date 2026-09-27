import Link from "next/link";
import { nav, site } from "@/content/site";
import { ArrowUpRight } from "./icons";
import { LocalTime } from "./local-time";

export function SiteFooter() {
  return (
    <footer className="border-t border-line print:hidden">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-sm font-medium">{site.name}</p>
            <p className="mt-1 text-sm text-muted">{site.role}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-5">
            <div>
              <p className="label">Site</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="text-fg-2 hover:text-fg">
                    Home
                  </Link>
                </li>
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-fg-2 hover:text-fg">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Elsewhere</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {site.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-fg-2 hover:text-fg"
                    >
                      {s.label}
                      <ArrowUpRight className="size-3.5 opacity-50 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>
            {site.location} · <LocalTime />
          </p>
        </div>
      </div>
    </footer>
  );
}

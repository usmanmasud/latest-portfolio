import { site } from "@/content/site";
import { CopyEmail } from "./copy-email";
import { TextLink } from "./ui";

export function ContactCTA() {
  return (
    <section className="border-t border-line">
      <div className="container-page grid gap-8 py-20 md:grid-cols-12 md:py-28">
        <p className="label md:col-span-3">Next step</p>
        <div className="md:col-span-9">
          <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.03em] text-balance md:text-5xl md:leading-[1.05]">
            Hiring, building something, or need infrastructure you can trust?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            I reply to every message within two working days.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-11 items-center rounded-full bg-fg px-6 text-sm font-medium text-bg transition-colors hover:bg-fg/85"
            >
              {site.email}
            </a>
            <CopyEmail className="h-11" />
            <span className="ml-2">
              <TextLink href="/resume">View résumé</TextLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

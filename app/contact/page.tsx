import type { Metadata } from "next";
import { CopyEmail } from "@/components/copy-email";
import { ArrowUpRight, socialIcon } from "@/components/icons";
import { LocalTime } from "@/components/local-time";
import { PageHeader, StatusDot } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about roles, contracts and collaborations.`,
  alternates: { canonical: "/contact" },
};

const openTo = [
  {
    title: "Full-time roles",
    body: "Software, cloud, DevOps or platform engineering — on-site, hybrid or remote.",
  },
  {
    title: "Contracts",
    body: "CI/CD setup, containerisation, cloud migrations and infrastructure-as-code for small teams.",
  },
  {
    title: "Community",
    body: "Talks, workshops and mentoring for student and early-career developers.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader label="Contact" title="Let's talk.">
        <p>
          The fastest way to reach me is email. Tell me a little about the role or project and I&apos;ll
          get back to you within two working days.
        </p>
      </PageHeader>

      <section className="container-page pb-24 md:pb-32">
        <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="label">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block text-2xl font-medium tracking-[-0.02em] break-all transition-colors hover:text-accent sm:text-4xl"
            >
              {site.email}
            </a>
            <div className="mt-6">
              <CopyEmail />
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-8">
              <div>
                <dt className="label">Availability</dt>
                <dd className="mt-2 flex items-center gap-2 text-sm text-fg-2">
                  {site.availability.open && <StatusDot />}
                  {site.availability.open ? "Available" : "Not currently available"}
                </dd>
              </div>
              <div>
                <dt className="label">Local time</dt>
                <dd className="mt-2 text-sm text-fg-2">
                  <LocalTime /> · {site.location}
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="label">Elsewhere</p>
            <ul className="mt-4 border-t border-line">
              {site.socials.map((s) => {
                const Icon = socialIcon(s.label);
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border-b border-line py-4"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="text-muted group-hover:text-fg" />
                        <span className="text-fg">{s.label}</span>
                        <span className="font-mono text-xs text-muted">{s.handle}</span>
                      </span>
                      <ArrowUpRight className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <p className="label">Open to</p>
          <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {openTo.map((o) => (
              <div key={o.title} className="bg-bg p-6">
                <h2 className="font-medium tracking-tight">{o.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted text-pretty">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact-cta";
import { PageHeader } from "@/components/ui";
import { WorkIndex } from "@/components/work-index";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected software projects — with case studies on the problem, approach and outcome.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader label="Work" title="Projects and case studies.">
        <p>
          Products I&apos;ve built end to end, and the infrastructure work behind them. Each project opens
          into a short case study: the problem, the decisions, and what came out of it.
        </p>
      </PageHeader>

      <section className="container-page pb-24 md:pb-32">
        <WorkIndex />
      </section>

      <ContactCTA />
    </>
  );
}

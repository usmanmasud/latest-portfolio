import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col justify-center py-24">
      <p className="label">Error 404</p>
      <h1 className="mt-5 max-w-2xl text-5xl font-medium tracking-[-0.04em] md:text-7xl">
        Nothing is deployed here.
      </h1>
      <p className="mt-6 max-w-lg text-lg text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/">Back home</Button>
        <Button href="/work" variant="secondary">
          See the work
        </Button>
      </div>
    </section>
  );
}

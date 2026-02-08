import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/content";

export default function HomePage() {
  return (
    <PageShell>
      <section className="flex min-h-[58vh] flex-col justify-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">index / 00</p>
        <h1 className="font-mono text-[34px] leading-[1.05] tracking-tightest text-fg md:text-[44px]">{site.name}</h1>
        <p className="mt-4 max-w-md text-[14px] leading-[1.4] text-muted">{site.descriptor}</p>
      </section>
    </PageShell>
  );
}

import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="flex min-h-[46vh] items-center">
        <div className="space-y-7">
          <div>
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="text-[14px] leading-[1.5] text-fg transition-colors duration-ui ease-ui hover:text-accent"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">GitHub</p>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="text-[14px] leading-[1.5] text-fg transition-colors duration-ui ease-ui hover:text-accent"
            >
              github.com/AaranNihalani
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

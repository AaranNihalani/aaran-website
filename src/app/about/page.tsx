import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

function Label({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{children}</h2>;
}

export default function AboutPage() {
  return (
    <PageShell>
      <section className="grid gap-12 md:grid-cols-2 md:gap-14">
        <div>
          <Label>Education</Label>
          <ul className="space-y-3 text-[13px] leading-[1.5] text-fg">
            {about.education.map((item) => (
              <li key={item} className="border-l border-border pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Label>Selected Distinctions</Label>
          <ul className="space-y-3 text-[13px] leading-[1.5] text-fg">
            {about.distinctions.map((item) => (
              <li key={item} className="border-l border-border pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}

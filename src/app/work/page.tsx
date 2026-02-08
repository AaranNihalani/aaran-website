import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <PageShell>
      <section className="space-y-12">
        <h1 className="font-mono text-xl uppercase tracking-wider text-muted">Work & Research</h1>
        <ul className="space-y-12">
          {work.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-3 transition-colors duration-ui ease-ui"
            >
              <div className="flex flex-col gap-1">
                <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                  <h3 className="text-xl font-medium text-fg">{item.title}</h3>
                  <span className="font-mono text-xs text-muted">{item.date}</span>
                </div>
                <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                  <span className="font-mono text-sm text-accent">{item.role}</span>
                  {item.location && <span className="font-mono text-xs text-muted">{item.location}</span>}
                </div>
              </div>
              
              <ul className="list-inside list-disc space-y-2 text-[15px] leading-relaxed text-muted">
                {item.description.map((desc, i) => (
                  <li key={i} className="pl-2 -indent-2">{desc}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}

import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <PageShell>
      <section className="space-y-8">
        <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-border pb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          <div>Artifact</div>
          <div>Methods</div>
          <div>Problem Addressed</div>
        </div>

        <ul className="space-y-0">
          {work.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-1 gap-2 border-b border-border py-4 transition-colors duration-ui ease-ui hover:bg-panel/45 md:grid-cols-[1.5fr_1fr_1fr] md:gap-6"
            >
              <p className="font-mono text-[13px] leading-[1.45] text-fg">{item.title}</p>
              <p className="text-[12px] leading-[1.45] text-muted">{item.methods}</p>
              <p className="text-[12px] leading-[1.45] text-muted">{item.problem}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}

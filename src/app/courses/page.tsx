import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { courseGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Courses",
};

export default function CoursesPage() {
  return (
    <PageShell>
      <div className="space-y-16">
        {courseGroups.map((group) => (
          <section key={group.title} className="space-y-6">
            <div className="flex flex-col gap-1 border-b border-border pb-4">
              <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
                {group.title}
              </h2>
              <div className="flex justify-between text-xs text-muted">
                <span>{group.institution}</span>
                <span className="font-mono">{group.period}</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((course) => (
                <div
                  key={course.name}
                  className="flex flex-col justify-between gap-3 rounded-lg border border-border bg-panel/20 p-4 transition-all hover:border-accent hover:bg-panel/40"
                >
                  <h3 className="text-[13px] font-medium leading-relaxed text-fg">
                    {course.name}
                  </h3>
                  <div className="flex items-center justify-end">
                    <span className="font-mono text-[11px] text-muted">
                      {course.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

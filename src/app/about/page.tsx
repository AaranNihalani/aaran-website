import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">{children}</h2>;
}

export default function AboutPage() {
  return (
    <PageShell>
      <div className="space-y-16">
        {/* Education & Honours Grid */}
        <section className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle>Education</SectionTitle>
            <ul className="space-y-8">
              {about.education.map((edu, i) => (
                <li key={i} className="space-y-2">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="text-lg font-medium text-fg">{edu.institution}</h3>
                    <span className="font-mono text-xs text-muted">{edu.date}</span>
                  </div>
                   <div className="font-mono text-xs text-muted mb-2">{edu.location}</div>
                  <ul className="space-y-2 text-sm text-muted">
                    {edu.details.map((detail, j) => (
                      <li key={j}>• {detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle>Honours & Awards</SectionTitle>
            <ul className="space-y-4">
              {about.honours.map((honor, i) => (
                <li key={i} className="flex flex-col gap-1 border-l border-border pl-4 transition-colors hover:border-accent">
                  <span className="text-sm font-medium text-fg">{honor.title}</span>
                  <span className="font-mono text-xs text-muted">
                    {honor.rank} · {honor.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section>
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="grid gap-8 md:grid-cols-3">
                <div>
                    <h3 className="mb-3 text-sm font-medium text-fg">Programming</h3>
                    <div className="flex flex-wrap gap-2">
                        {about.skills.programming.map(skill => (
                            <span key={skill} className="rounded-md bg-panel px-2 py-1 text-xs text-muted border border-border">{skill}</span>
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="mb-3 text-sm font-medium text-fg">Data & ML</h3>
                    <div className="flex flex-wrap gap-2">
                        {about.skills.data.map(skill => (
                            <span key={skill} className="rounded-md bg-panel px-2 py-1 text-xs text-muted border border-border">{skill}</span>
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="mb-3 text-sm font-medium text-fg">Systems & Deployment</h3>
                    <div className="flex flex-wrap gap-2">
                        {about.skills.systems.map(skill => (
                            <span key={skill} className="rounded-md bg-panel px-2 py-1 text-xs text-muted border border-border">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Leadership */}
        <section>
            <SectionTitle>Leadership Experience</SectionTitle>
            <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
                {about.leadership.map((item, i) => (
                    <div key={i} className="space-y-2">
                         <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                            <h3 className="text-base font-medium text-fg">{item.role}</h3>
                            <span className="font-mono text-[10px] text-muted shrink-0 sm:ml-2 sm:mt-1">{item.date}</span>
                        </div>
                        <div className="font-mono text-xs text-accent">{item.organization}</div>
                        <ul className="space-y-1 text-sm text-muted list-disc list-inside leading-relaxed">
                             {item.description.map((desc, j) => (
                                <li key={j} className="pl-2 -indent-2">{desc}</li>
                             ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        {/* Extracurricular */}
        <section>
            <SectionTitle>Extracurricular Activities</SectionTitle>
             <div className="grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {about.extracurricular.map((item, i) => (
                    <div key={i} className="flex flex-col gap-2 p-4 rounded-lg bg-panel/30 border border-border/50">
                         <h3 className="text-sm font-medium text-fg">{item.role}</h3>
                        {item.organization && <div className="font-mono text-xs text-accent">{item.organization}</div>}
                        <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
      </div>
    </PageShell>
  );
}

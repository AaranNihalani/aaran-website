import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <section className="page-enter">{children}</section>;
}

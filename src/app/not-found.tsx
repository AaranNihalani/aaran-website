import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[50vh] items-center">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">404</p>
        <p className="mt-2 text-sm text-muted">Page not found.</p>
        <Link href="/" className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-fg">
          return home
        </Link>
      </div>
    </section>
  );
}

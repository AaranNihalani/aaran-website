import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Mono, Public_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: "Personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-6 py-8 md:px-10 md:py-10">
          <header className="mb-20 flex items-center justify-between border-b border-border pb-5">
            <Link
              href="/"
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-fg transition-colors duration-ui ease-ui hover:text-accent"
            >
              {site.name}
            </Link>
            <nav className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-ui ease-ui hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-16 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            <span>{new Date().getFullYear()}</span>
          </footer>
        </div>
      </body>
    </html>
  );
}

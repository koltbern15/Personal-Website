import { profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink-faint">
          © {year} {profile.name}. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex items-center gap-5">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="focusable rounded text-xs text-ink-muted transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

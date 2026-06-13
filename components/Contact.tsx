import { profile } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-base-soft/60 p-10 text-center sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(600px 200px at 50% 0%, rgba(127,209,222,0.08), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="eyebrow mb-4">Let&apos;s talk</p>
              <h2 className="mx-auto max-w-2xl text-balance text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
                Have a role or project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-ink-muted">
                I&apos;m open to new opportunities and interesting problems.
                The fastest way to reach me is email.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="focusable rounded-lg bg-accent/15 px-6 py-3 text-sm font-medium text-accent-soft ring-1 ring-inset ring-accent/30 transition-colors hover:bg-accent/25"
                >
                  Email me
                </a>
                {profile.resumeUrl && (
                  <a
                    href={profile.resumeUrl}
                    className="focusable rounded-lg border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-ink-muted"
                  >
                    Download résumé
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

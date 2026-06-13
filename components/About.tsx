import { profile, certifications } from "@/lib/content";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="A little about me">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="space-y-4 text-pretty leading-relaxed text-ink-muted">
            <p>{profile.summary}</p>
            <p>
              I care about doing IT the right way — least-privilege access,
              clean documentation, and dependable systems that hold up under
              audit and in the field. My military service sharpened how I lead
              teams, stay calm under pressure, and get the mission done.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Location
                </dt>
                <dd className="mt-1 text-ink">{profile.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${profile.email}`}
                    className="focusable rounded text-accent hover:opacity-80"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              {profile.phone && (
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                      className="focusable rounded text-ink transition-colors hover:text-accent"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Certifications
                </dt>
                <dd className="mt-1 space-y-1">
                  {certifications.map((c) => (
                    <p key={c} className="text-ink">
                      {c}
                    </p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  Find me
                </dt>
                <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  {profile.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="focusable rounded text-ink transition-colors hover:text-accent"
                    >
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

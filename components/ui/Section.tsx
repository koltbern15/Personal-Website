import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** Slightly raised background to separate adjacent sections. */
  soft?: boolean;
};

export function Section({ id, eyebrow, title, intro, children, soft }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-28 ${soft ? "bg-base-soft/40" : ""}`}
    >
      <div className="container-page">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {title}
            </h2>
            {intro && <p className="mt-3 text-ink-muted">{intro}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

import { skills } from "@/lib/content";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills & technologies"
      intro="The tools I reach for, grouped by where they fit."
      soft
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 2) * 0.08}>
            <div className="card p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="tag transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { highlights, type Highlight } from "@/lib/content";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

function ProjectCard({ project }: { project: Highlight }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card overflow-hidden transition-colors hover:border-accent/30">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="focusable flex w-full items-start justify-between gap-4 p-6 text-left"
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
            {project.featured && (
              <span className="tag border-accent/30 text-accent/90">
                Featured
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm text-ink-muted">{project.blurb}</p>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1 select-none text-xl leading-none text-ink-faint"
          aria-hidden
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-6 pb-6 pt-5">
              <p className="text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              {project.impact && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1.5 text-sm text-accent-soft ring-1 ring-inset ring-accent/20">
                  <span className="text-accent">↗</span>
                  {project.impact}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="focusable rounded text-sm font-medium text-accent transition-opacity hover:opacity-80"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Projects() {
  // Featured first, otherwise preserve authoring order.
  const ordered = [...highlights].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Key initiatives & highlights"
      intro="Click any item to expand the details, stack, and impact."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {ordered.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

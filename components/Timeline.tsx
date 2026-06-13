"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { timeline, type TimelineEntry } from "@/lib/content";
import { Section } from "./ui/Section";

function KindBadge({ kind }: { kind: TimelineEntry["kind"] }) {
  const label =
    kind === "work" ? "Work" : kind === "service" ? "Military" : "Education";
  return <span className="tag">{label}</span>;
}

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px 0px -120px 0px" });

  return (
    <li ref={ref} className="relative pl-12 sm:pl-16">
      {/* node on the spine */}
      <span
        className={`absolute left-[14px] top-1.5 z-10 grid h-3.5 w-3.5 -translate-x-1/2 place-items-center rounded-full border transition-all duration-500 sm:left-[18px] ${
          inView
            ? "border-accent bg-accent shadow-[0_0_12px_2px] shadow-accent/40"
            : "border-line bg-base-card"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="card p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-xs text-accent/80">{entry.period}</span>
          <KindBadge kind={entry.kind} />
        </div>

        <h3 className="mt-3 text-lg font-semibold text-ink">{entry.title}</h3>
        <p className="text-sm text-ink-muted">
          {entry.org}
          {entry.location ? ` · ${entry.location}` : ""}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {entry.summary}
        </p>

        {entry.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {entry.highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                {h}
              </motion.li>
            ))}
          </ul>
        )}

        {entry.stack && entry.stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </li>
  );
}

export function Timeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 60%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <Section
      id="journey"
      eyebrow="The path so far"
      title="Experience & education"
      intro="Scroll through — each stop lights up as you reach it."
      soft
    >
      <div className="relative">
        {/* static spine */}
        <div className="absolute left-[14px] top-0 h-full w-px bg-line sm:left-[18px]" />
        {/* animated fill */}
        <motion.div
          style={{ scaleY: fill }}
          className="absolute left-[14px] top-0 h-full w-px origin-top bg-gradient-to-b from-accent to-accent/0 sm:left-[18px]"
        />

        <ol ref={listRef} className="space-y-8">
          {timeline.map((entry) => (
            <TimelineItem key={`${entry.org}-${entry.period}`} entry={entry} />
          ))}
        </ol>
      </div>
    </Section>
  );
}

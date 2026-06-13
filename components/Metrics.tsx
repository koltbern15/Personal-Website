"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { metrics, type Metric } from "@/lib/content";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

/** Counts from 0 → target once, when the element scrolls into view. */
function useCountUp(target: number, run: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // easeOutCubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, run, durationMs]);

  return value;
}

function formatValue(value: number, target: number) {
  // Keep one decimal only if the target itself has one (e.g. 1.2M).
  const hasDecimal = !Number.isInteger(target);
  return hasDecimal ? value.toFixed(1) : Math.round(value).toString();
}

function MetricCard({ metric, run }: { metric: Metric; run: boolean }) {
  const value = useCountUp(metric.value, run);
  return (
    <div className="card p-6 transition-colors hover:border-accent/30">
      <div className="flex items-baseline font-mono text-3xl font-semibold text-ink sm:text-4xl">
        {metric.prefix}
        <span className="tabular-nums text-accent-soft">
          {formatValue(value, metric.value)}
        </span>
        {metric.suffix}
      </div>
      <p className="mt-3 text-sm font-medium text-ink">{metric.label}</p>
      {metric.detail && (
        <p className="mt-1 text-sm text-ink-muted">{metric.detail}</p>
      )}
    </div>
  );
}

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      id="impact"
      eyebrow="By the numbers"
      title="Impact at a glance"
      intro="A few outcomes from the work I'm most proud of."
    >
      <div
        ref={ref}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 0.08}>
            <MetricCard metric={metric} run={inView} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

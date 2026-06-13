"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/content";

/** Cycles through profile.typedLines with a typewriter effect. */
function useTypewriter(lines: string[]) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIndex % lines.length];
    const done = text === current;
    const cleared = text === "";

    let delay = deleting ? 35 : 65;
    if (!deleting && done) delay = 1600; // pause on full line
    if (deleting && cleared) delay = 250;

    const timer = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
      } else if (deleting && cleared) {
        setDeleting(false);
        setLineIndex((i) => (i + 1) % lines.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, lineIndex, lines]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(profile.typedLines);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff0a 1px, transparent 1px), linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent 75%)",
        }}
      />

      <div className="container-page relative flex min-h-[88vh] flex-col justify-center pb-16 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <p className="eyebrow flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_2px] shadow-accent/40" />
              {profile.availability}
            </p>
            {profile.clearance && (
              <span className="tag border-accent/30 text-accent/90">
                {profile.clearance}
              </span>
            )}
          </div>

          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 font-mono text-lg text-ink-muted sm:text-xl">
            {profile.role}
          </p>

          {/* typewriter line */}
          <div className="mt-8 flex min-h-[1.75rem] items-center font-mono text-sm text-ink-muted sm:text-base">
            <span className="mr-2 select-none text-accent/70">$</span>
            <span className="text-ink">{typed}</span>
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-blink bg-accent align-middle" />
          </div>

          <p className="mt-8 max-w-2xl text-pretty leading-relaxed text-ink-muted">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="focusable rounded-lg bg-accent/15 px-5 py-2.5 text-sm font-medium text-accent-soft ring-1 ring-inset ring-accent/30 transition-colors hover:bg-accent/25"
            >
              View my work
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                className="focusable rounded-lg border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink-muted"
              >
                Download résumé
              </a>
            )}
            <div className="ml-1 flex items-center gap-4 text-sm">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="focusable rounded text-ink-muted transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

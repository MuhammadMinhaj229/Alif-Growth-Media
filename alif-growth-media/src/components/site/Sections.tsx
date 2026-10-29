import type { ReactNode } from "react";
import { motion } from "motion/react";

import { MaskedText, Reveal, ScrollLift, useSafeReducedMotion } from "@/components/motion/primitives";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "cream",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  tone?: "cream" | "muted" | "deep";
}) {
  const toneClass =
    tone === "deep"
      ? "site-section site-section--deep"
      : tone === "muted"
        ? "site-section site-section--muted"
        : "site-section site-section--default";

  return (
    <section id={id} className={toneClass + " scroll-mt-24"}>
      <div className="site-container">
        <ScrollLift className="site-section__heading" distance={14}>
          {eyebrow && (
            <Reveal>
              <span className="eyebrow"><span className="eyebrow__dot" /> {eyebrow}</span>
            </Reveal>
          )}
          <h2 className="site-section__title"><MaskedText>{title}</MaskedText></h2>
          {intro && (
            <Reveal delay={0.1}>
              <p className="site-section__intro">{intro}</p>
            </Reveal>
          )}
        </ScrollLift>
        {children}
      </div>
    </section>
  );
}

export function Card({
  index,
  title,
  body,
  tone = "light",
}: {
  index?: string;
  title: string;
  body: ReactNode;
  tone?: "light" | "dark";
}) {
  const reduced = useSafeReducedMotion();
  const Article = reduced ? ("article" as const) : motion.article;
  return (
    <Article
      {...(reduced
        ? {}
        : {
            whileHover: { y: -3 },
            transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
          })}
      className={tone === "dark" ? "site-card site-card--dark" : "site-card"}
    >
      {index && <span className="site-card__index">{index}</span>}
      <h3>{title}</h3>
      <div className="site-card__body">{body}</div>
    </Article>
  );
}

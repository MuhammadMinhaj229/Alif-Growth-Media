"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { MaskedText, Reveal, useScrollFx } from "@/components/motion/primitives";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fx = useScrollFx();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const y = useSpring(rawY, { stiffness: 130, damping: 30, mass: 0.3, restDelta: 0.5 });
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.15]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:pb-20 md:pt-40 lg:px-8"
    >
      <motion.div
        className="mx-auto w-full max-w-6xl"
        style={fx ? { y, opacity, willChange: "transform, opacity" } : undefined}
      >
        <Reveal delay={0}>
          <span className="inline-flex max-w-full items-center rounded-full border border-border bg-card/85 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary sm:px-4 sm:text-xs">
            {eyebrow}
          </span>
        </Reveal>
        <h1 className="mt-5 max-w-3xl text-balance text-[clamp(1.9rem,7vw,3.15rem)] font-semibold leading-[1.08] sm:mt-6">
          <MaskedText delay={0.04}>{title}</MaskedText>
        </h1>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-2xl text-pretty text-[0.975rem] leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={0.18}>{children}</Reveal>}
      </motion.div>
    </section>
  );
}

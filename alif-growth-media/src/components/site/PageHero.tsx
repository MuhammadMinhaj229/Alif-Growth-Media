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
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const y = useSpring(rawY, { stiffness: 130, damping: 30, mass: 0.3, restDelta: 0.5 });
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);

  return (
    <section ref={ref} className="site-page-hero">
      <motion.div
        className="site-container site-page-hero__inner"
        style={fx ? { y, opacity, willChange: "transform, opacity" } : undefined}
      >
        <div className="site-page-hero__topline">
          <Reveal><span className="eyebrow"><span className="eyebrow__dot" /> {eyebrow}</span></Reveal>
          <span className="site-page-hero__folio">ALIF GROWTH MEDIA / FIELD NOTES</span>
        </div>
        <h1 className="site-page-hero__title"><MaskedText delay={0.04}>{title}</MaskedText></h1>
        <div className="site-page-hero__bottom">
          {intro && (
            <Reveal delay={0.12}>
              <p className="site-page-hero__intro">{intro}</p>
            </Reveal>
          )}
          <div className="site-page-hero__side-note">
            <span>Strategy · Design · Engineering</span>
            <span>Warangal / India &amp; GCC</span>
          </div>
        </div>
        {children && <Reveal delay={0.18}>{children}</Reveal>}
      </motion.div>
    </section>
  );
}

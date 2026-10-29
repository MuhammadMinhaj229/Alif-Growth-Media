import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

import { Reveal, useSafeReducedMotion } from "@/components/motion/primitives";

export function CtaBand({
  title = "Let's make your next digital move a better one.",
  body = "Start with a complimentary architecture audit. We'll map the friction, explain the trade-offs, and give you a clear next step before you commit.",
}: {
  title?: string;
  body?: string;
}) {
  const reduced = useSafeReducedMotion();
  return (
    <section className="site-cta">
      {!reduced && (
        <motion.div
          aria-hidden="true"
          className="site-cta__light"
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      <div className="site-container site-cta__inner">
        <Reveal className="site-cta__copy">
          <p className="eyebrow"><span className="eyebrow__dot" /> Let's start with a conversation</p>
          <h2>{title}</h2>
          <p className="site-cta__body">{body}</p>
          <div className="site-cta__promises">
            <span><CheckCircle2 aria-hidden="true" size={15} /> Clear scope and next steps</span>
            <span><CheckCircle2 aria-hidden="true" size={15} /> Practical, owner-first advice</span>
            <span><CheckCircle2 aria-hidden="true" size={15} /> No pressure to proceed</span>
          </div>
        </Reveal>
        <Reveal delay={0.1} direction="left" className="site-cta__action">
          <Link to="/contact" className="button-primary">
            Request your free audit <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
          <span><ShieldCheck aria-hidden="true" size={15} /> Complimentary first conversation</span>
        </Reveal>
      </div>
    </section>
  );
}

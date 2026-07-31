import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";

import { company } from "@/content/site";
import { Reveal, HoverLift, useSafeReducedMotion } from "@/components/motion/primitives";

export function CtaBand({
  title = "Ready to make your digital growth simple?",
  body = "Start with a free growth audit. We review your online presence, enquiry handling and next best steps — in plain, non-technical language.",
}: {
  title?: string;
  body?: string;
}) {
  const reduced = useSafeReducedMotion();
  return (
    <section className="gradient-deep relative overflow-hidden px-5 py-14 text-primary-foreground sm:px-6 sm:py-16 md:py-20 lg:px-8">
      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 opacity-40"
          style={{
            background:
              "linear-gradient(100deg, transparent, color-mix(in oklab, var(--gold) 45%, transparent), transparent)",
            willChange: "transform",
          }}
          initial={{ x: "0%" }}
          whileInView={{ x: "420%" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <Reveal className="max-w-xl">
          <h2 className="text-balance text-[clamp(1.4rem,4.6vw,1.9rem)] font-semibold leading-tight">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75 md:text-base">{body}</p>
        </Reveal>
        <Reveal delay={0.12} direction="left" className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <HoverLift className="w-full sm:w-auto">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground sm:w-auto"
            >
              Get a Free Growth Audit <ArrowRight className="h-4 w-4" />
            </Link>
          </HoverLift>
          <HoverLift className="w-full sm:w-auto">
            <a
              href={company.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 sm:w-auto"
            >
              <Phone className="h-4 w-4" /> {company.phone}
            </a>
          </HoverLift>
        </Reveal>
      </div>
    </section>
  );
}